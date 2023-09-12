'use client'

import { useEffect, useRef, useState } from "react"
import crypto from 'crypto';
import uuid from "react-uuid";


interface ResponseTicker {
  market: string,
  trade_date: number,
  trade_time:number,
  trade_date_kst:number,
  trade_time_kst:number,
  trade_timestamp:number,
  opening_price:number
  high_price:number
  low_price:number
  trade_price:number
  prev_closing_price:number
  change: string,
  change_price: number
  change_rate: number
  signed_change_price: number
  signed_change_rate: number
  trade_volume: number
  acc_trade_price: number
  acc_trade_price_24h: number
  acc_trade_volume: number
  acc_trade_volume_24h: number
  highest_52_week_price: number
  highest_52_week_date: string
  lowest_52_week_price: number
  lowest_52_week_date: string
  timestamp: number
  market_status: string
}




export interface CoinTicker {
  cd: string; // 코인 코드 (KRW-BTC)
  ab?: "BID" | "ASK"; // 매수/매도
  tp: number; // 현재가 
  scr: number; // 전일대비 등락률
  tv: number; // 가장 최근 거래량
  ms: string; // 스테이터스
  atp: string; // 시가총액
  atv: number; // 총거래량
  mn: string; // 마켓명
  h52wp: number; // 52주 최고가
  h52wdt: string; // 52주 최고가 달성일
  l52wp: number; // 52주 최저가
  l52wdt: string; // 52주 최저가 달성일
  atp24h: number; // 24시간 가격
  atv24h: number; // 24시간  거래량
  isRising: boolean;
  aav?: number // 누적 매도량 - ask
  abv?: number // 누적 매수량 - bid
  c?: 'RISE' | 'EVEN' | 'FALL' // 전일 대비
  cp?: number // 부호 없는 전일 대비 값
  cr?: number // 부호 없는 전일 대비 등락률
  dd?: null // 상장폐지일
  hp?: number // 고가
  its?: false // 거래 정지 여부
  lp?: number // 저가
  mw?: "NONE" | "CAUTION" //유의 종목 지정 여부 
  op?: number // 시가
  pcp?: number // 전일 종가
  scp?: number // 부호 있는 전일 대비 값
  st?: "REALTIME" | "SNAPSHOT" // 스트림 타입
  tdt?: string // 최근 거래 일자
  tms?: number // 타임스탬프
  ttm?: string // 최근 거래 시각 HHmmss
  ttms?: number // 거래 체결 타임스탬프
}

export function base64UrlFromBase64(str: string) {
  return str.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
// create JWT Token
export function sign(payload: any, secretKey: string) {
  const header = {
    alg: 'HS256',
    typ: 'JWT'
  };
  const encodedHeader = base64UrlFromBase64(Buffer.from(JSON.stringify(header)).toString('base64'));

  const encodedPayload = base64UrlFromBase64(
    Buffer.from(JSON.stringify(payload)).toString('base64')
  );

  const signature = base64UrlFromBase64(
    crypto
      .createHmac('sha256', secretKey)
      .update(encodedHeader + '.' + encodedPayload)
      .digest('base64')
  );

  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

interface Props {
  marketList: string[] | string;
  marketQuery: string;
}

export default function useWebsocket({marketList,marketQuery}: Props = {
  marketList: ['KRW-BTC','KRW-ETH','KRW-XRP','KRW-ARK','KRW-SOL','KRW-ETC','KRW-KAVA','KRW-DOGE','KRW-GLM'],
  marketQuery: 'KRW-BTC,KRW-ETH,KRW-XRP,KRW-ARK,KRW-SOL,KRW-ETC,KRW-KAVA,KRW-DOGE,KRW-GLM'
}) {

  const ws = useRef<WebSocket | null>(null);
  const [ticker,setTicker] = useState<Record<string,CoinTicker>>({});

  const updateTicker = (data:CoinTicker) => {
    // 같은 상태를 업데이트 할 때, 외부에서 과거 값 참조를 하게 되면 정상적으로 처리되지 않을 수 있음.
    // 이전 상태(prevTicker)에 대한 참조 없이 업데이트
    setTicker((prevTicker) => {
      if (data && !prevTicker[data.cd]) {
        return {
          ...prevTicker,
          [data.cd]: { ...data }
        };
      }
      if (prevTicker[data.cd].cd === data.cd && prevTicker[data.cd].tp !== data.tp) {
        const isRising = prevTicker[data.cd]?.tp < data.tp; 
        return {
          ...prevTicker,
          [data.cd]: { ...data, isRising }
        };
      }
      return prevTicker;
    });
  };
  const getInitTicker = async () => {
    const res = await fetch(`https://api.upbit.com/v1/ticker?markets=${marketQuery}`);
    const data:ResponseTicker[] = await res.json();
    const initTicker = data.reduce((acc,cur) => {
      const isRising = cur.opening_price < cur.trade_price; 
      acc[cur.market] = {
        mn: cur.market,
        cd: cur.market,
        tp: cur.trade_price,
        scr: cur.signed_change_rate,
        tv: cur.trade_volume,
        ms: cur.market_status,
        atp: cur.acc_trade_price + '',
        h52wp: cur.highest_52_week_price,
        h52wdt: cur.highest_52_week_date,
        l52wp: cur.lowest_52_week_price,
        l52wdt: cur.lowest_52_week_date,
        atp24h: cur.acc_trade_price_24h,
        atv24h: cur.acc_trade_volume_24h,
        atv: cur.acc_trade_volume,
        isRising
      }
      return acc;
    }
    ,{} as Record<string,CoinTicker>)
    setTicker(initTicker);
  }
  const connect = () => {
    if(!ws.current) return;
    ws.current.onopen = () => {
      const init = [
        {
          ticket: `${marketQuery}`
        },
        {
          type: "ticker",
          codes: typeof marketList === 'string' ? [marketList] : marketList,
          isOnlyRealtime: true
        },
        {
          format: "SIMPLE"
        }
      ]
      console.log('websocket connected')
      ws.current?.send(JSON.stringify(init));
    }
  }

  useEffect(() => {
    getInitTicker();
    const payload = {
        access_key :process.env.NEXT_PUBLIC_UPBIT_ACCESS_KEY,
        nonce: uuid(),
      }
    const secrey_key = process.env.NEXT_PUBLIC_UPBIT_SECRET_KEY ?? '';
    const token = sign(payload, secrey_key);
    ws.current = new WebSocket(`wss://api.upbit.com/websocket/v1?authorization=Bearer ${token}`);
    ws.current.binaryType = 'arraybuffer';
    connect();
    ws.current.onmessage = (e) => {
      const data:CoinTicker = JSON.parse(Buffer.from(e.data).toString('utf-8'));
      updateTicker(data);
    }
    

    ws.current.onclose = () => {
      console.log('disconnected')
      setTimeout(() => {
        console.log('websocket recovery connection...')
        connect();
      }, 1000);
      
    }
    return () => {
      ws.current?.close()
    }
  },[])
  return { ws,ticker }
}
