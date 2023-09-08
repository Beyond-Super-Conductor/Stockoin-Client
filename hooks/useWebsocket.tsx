'use client'

import { useEffect, useRef, useState } from "react"
import crypto from 'crypto';
import uuid from "react-uuid";


interface CoinTicker {
  cd: string; // 코인 코드 (KRW-BTC)
  tp: number; // 현재가 
  scr: number; // 전일대비 등락률
  tv: number; // 가장 최근 거래량
  ms: string; // 시장명
  mw: string; // 시가총액
  h52wp: number; // 52주 최고가
  h52wdt: string; // 52주 최고가 달성일
  l52wp: number; // 52주 최저가
  l52wdt: string; // 52주 최저가 달성일
  atp24h: number; // 24시간 가격
  atv24h: number; // 24시간  거래량
  isRising: boolean;
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

export default function useWebsocket() {

  const ws = useRef<WebSocket | null>(null);
  const [ticker,setTicker] = useState<Record<string,CoinTicker>>({});


  useEffect(() => {
    
    const payload = {
        access_key :process.env.NEXT_PUBLIC_UPBIT_ACCESS_KEY,
        nonce: uuid(),
      }
    const secrey_key = process.env.NEXT_PUBLIC_UPBIT_SECRET_KEY ?? '';
    const token = sign(payload, secrey_key);

    ws.current = new WebSocket(`wss://api.upbit.com/websocket/v1?authorization=Bearer ${token}`);
    ws.current.binaryType = 'arraybuffer';
    ws.current.onopen = () => {
      const init = [
        {
          ticket: "test-websocket"
        },
        {
          type: "ticker",
          codes: [
            "KRW-BTC",
            "KRW-ETH"
          ],
          isOnlyRealtime: true
        },
        {
          format: "SIMPLE"
        }
      ]
      ws.current?.send(JSON.stringify(init));
    }
    ws.current.onmessage = (e) => {
      
      
      const data:CoinTicker = JSON.parse(Buffer.from(e.data).toString('utf-8'));

      if(!ticker[data.cd] || ticker[data.cd].cd === data.cd && ticker[data.cd].tp !== data.tp){
        const isRising = ticker[data.cd].tp < data.tp
        setTicker((prev) => ({
          ...prev,
          [data.cd]: {...data,isRising}
        }))
      }
        
      console.log(ticker);
    }


    ws.current.onclose = () => {
      console.log('disconnected')
    }
    return () => {
      ws.current?.close()
    }
  },[])
  return { ws,ticker }
}
