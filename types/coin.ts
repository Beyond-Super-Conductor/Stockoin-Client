import { StaticImageData } from "next/image";

export interface Coin {
  koName: string;
  enName: string;
  icon: StaticImageData | null;
}

export interface TokenCategories {
  koName: string;
  enName: string;
  coins: Coin[];
  icon: string | StaticImageData;
}

export interface ResponseTicker {
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
  change: 'RISE' | 'EVEN' | 'FALL',
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
  c: 'RISE' | 'EVEN' | 'FALL' // 전일 대비
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

