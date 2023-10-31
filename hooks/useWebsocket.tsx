'use client'
import { CoinTicker, ResponseTicker } from "@/types/coin";
import { sign } from "@/utils/createJWT";
import { useEffect, useRef, useState } from "react"
import uuid from "react-uuid";
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
        c: cur.change,
        tms: cur.timestamp,
        isRising
      }
      return acc;
    }
    ,{} as Record<string,CoinTicker>)
    setTicker(initTicker);
  }

  
  // TODO: 클리어타임아웃 설정하기
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
      
      ws.current?.send(JSON.stringify(init));
    }
  }

  useEffect(() => {
    getInitTicker();
    const accessKey = process.env.NEXT_PUBLIC_UPBIT_ACCESS_KEY;
    const secretKey = process.env.NEXT_PUBLIC_UPBIT_SECRET_KEY;

    const payload = {
        access_key :accessKey,
        nonce: uuid(),
      }
    
    const token = sign(payload, secretKey as string);
    ws.current = new WebSocket(`wss://api.upbit.com/websocket/v1?authorization=Bearer ${token}`);
    ws.current.binaryType = 'arraybuffer';
    connect();
    ws.current.onmessage = (e) => {
      const data:CoinTicker = JSON.parse(Buffer.from(e.data).toString('utf-8'));
      updateTicker(data);
    }
    
    ws.current.onclose = () => {
      
      
      setTimeout(() => {
        
        connect();
      }, 1000);
      
    }
    return () => {
      ws.current?.close()
    }
  },[])
  return { ws,ticker }
}
