'use client';
import { selectTokenState } from '@/store/selectToken';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef } from 'react'
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import colorThief from 'colorthief';
import { rgbToHex } from '@/utils/rgbToHex';
import { dashboardColorState } from '@/store/dashboardColor';

export default function DashboardLayoutLogo() {
  const { icon } = useRecoilValue(selectTokenState);
  const imageRef = useRef<HTMLImageElement>(null);
  const [dashboardColor, setDashboardColor] = useRecoilState(dashboardColorState);

  const getPalette = useCallback( () => {
    if(!imageRef.current) return;
    const color = new colorThief();
    const image = imageRef.current;
    const result = rgbToHex(color.getPalette(image,5))
    
    setDashboardColor(result)
  },[imageRef.current,icon])

  useEffect(() => {
    if(!imageRef.current) return;
    imageRef.current.complete
    ? getPalette()
    : imageRef.current.addEventListener('load', getPalette)

    return () => imageRef.current?.removeEventListener('load', getPalette);
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
