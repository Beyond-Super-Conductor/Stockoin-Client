'use client'

import { Client } from '@stomp/stompjs'
import { useCallback, useEffect, useRef } from 'react';
import SockJS from 'sockjs-client'



interface PublishConfig<T> {
  destination: string;
  body: T ;
  headers?: Record<string, string>;
}
type Publish = <T>({destination, body, headers}:PublishConfig<T>) => void;
const wsPath = process.env.NEXT_PUBLIC_LOCAL_WEBSOCKET

let socket:Client;
export default function useStomp() {
  
  const generateSocket = () => {
    if(!wsPath) return;
    socket = new Client({
      webSocketFactory: () => new SockJS('https://api.stokoin.com/api/v1/ws/chat'),
      // connectHeaders: {
      //   Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      // },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      })
    socket.onConnect = (frame) => {
      
      console.log('connected');
      socket.subscribe('/topic/greeting', (message) => {
        console.log(message.body);
      });
    }
  }
  const publish:Publish = useCallback(({destination, body, headers}) => {
    
    if(!socket) return;
    socket?.publish({
      destination,
      body : typeof body === 'string'
            ? body 
            : JSON.stringify(body),
      headers
    });
  },[])
  const connect = () => {
    generateSocket();
    socket.activate();
  }
  
  useEffect(() => {
    connect();
  },[])

  return {publish}
}
