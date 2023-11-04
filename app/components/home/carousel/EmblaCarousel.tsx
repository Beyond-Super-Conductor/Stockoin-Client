'use client'

import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import imageByIndex from './MainBannerImageByIndex'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'


interface Props {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel = ({slides,options}: Props) => {
  
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <div className="embla shadow-lg shadow-gray-300 rounded-lg overflow-hidden my-12">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="relative embla__slide" key={index}>
              <p
                className='whitespace-pre-line text-center absolute text-4xl text-white font-[900] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                  {/* linear-gradient(99.77deg, #018aee 0%, #00b886 100%); */}
                <span className=' text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#018aee] to-[#00b886]'>
                스토코인
                </span>
                에{'\n'}
                <span className='font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#018aee] to-[#00b886]'>
                광고
                </span>
                내면{'\n'}
                <span className='font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#018aee] to-[#00b886]'>
                대박
                </span>
                날수도?
              </p>
              <Image
                priority
                className="embla__slide__img grayscale-[80%]"
                src={imageByIndex(index)}
                width={900}
                height={120}
                quality={40}
                style={{
                  objectFit: 'cover',
                  aspectRatio: '300/20',
                }}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
