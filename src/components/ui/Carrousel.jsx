'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link';

import 'swiper/css';

function Carrousel() {
  return (
    <div className='relative group rounded-2xl bg-[#252525] flex items-center justify-start gap-2 py-4 px-4 w-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className='mySwiper mb-4'
      >
        <SwiperSlide className='overflow-hidden'>
          <div className='flex justify-center items-center rounded-xl overflow-hidden'>
            <Image src='/plomerosdeleste.webp' width={500} height={300} alt='Work 1' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden'>
          <div className='flex justify-center items-center rounded-xl overflow-hidden'>
            <Image src='/hotelcayena.webp' width={500} height={300} alt='Work 2' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden'>
          <div className='flex justify-center items-center rounded-xl overflow-hidden'>
            <Image src='/rifasaltagamausa.webp' width={500} height={300} alt='Work 3' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='overflow-hidden'>
          <div className='flex justify-center items-center rounded-xl overflow-hidden'>
            <Image src='/habitacom.webp' width={500} height={300} alt='Work 4' />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='absolute inset-0 z-10  flex justify-center items-center'>
      </div>
    </div>
  )
}

export default Carrousel
