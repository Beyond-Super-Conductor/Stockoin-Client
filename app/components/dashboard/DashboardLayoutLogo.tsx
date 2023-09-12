'use client';
import { selectTokenState } from '@/store/selectToken';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import colorThief from 'colorthief';
import { rgbToHex } from '@/utils/rgbToHex';
import { dashboardColorState } from '@/store/dashboardColor';

export default function DashboardLayoutLogo() {
  const { icon } = useRecoilValue(selectTokenState);
  const imageRef = useRef<HTMLImageElement>(null);
  const [dashboardColor, setDashboardColor] = useRecoilState(dashboardColorState);
  useEffect(() => {
    if(!imageRef.current) return;
    const color = new colorThief();
    let result: string[]

    if(imageRef.current.complete){
      const temp = color.getPalette(imageRef.current,5);
      result = rgbToHex(temp)
      setDashboardColor(result)
    }else {
      imageRef.current.addEventListener('load', () => {
      const temp = color.getPalette(imageRef.current,5);
      result = rgbToHex(temp)
      setDashboardColor(result)
      })
    }
    return () => {
      imageRef.current?.removeEventListener('load', () => {
        const temp = color.getPalette(imageRef.current,5);
        result = rgbToHex(temp)
        console.log('window-load',result);
        })
    }
  },[imageRef.current,icon])
  return (
    <div className='border border-indigo-200'>
      {
        icon
        ? <Link href="/">
        <Image
          ref={imageRef}
          src={icon.src}
          alt="logo"
          className='min-w-[80px]'
          width={80}
          height={80}
          style={{aspectRatio: 1}}
          priority
          
        />
      </Link>
        : <Link href="/">
        <Image
          src="/mainLogo.jpg"
          alt="logo"
          className='min-w-[80px]'
          width={80}
          height={80}
          style={{aspectRatio: 1}}
        />
      </Link>
      }
          
        </div>
  )
}
