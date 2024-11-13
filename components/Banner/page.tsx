"use client"
import React from 'react'
import { BannerItems } from '@/MockData/Banner'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-3xl">
    <Swiper
      pagination={{ clickable: true }}
      navigation={true}
      loop={true}
      modules={[Navigation, Pagination]}
    >
      
     { 
        BannerItems.map((banner) => {
         return (
            <SwiperSlide key={banner.id}>
                <div className="w-full h-auto">
                    {banner.type === "image" ? (
                        <Image src={banner.item} width={1920} height={1080} layout='responsive' alt='banner_photo'/>
                    ) : 
                    (
                        <video src={banner.item} autoPlay loop muted className="w-full h-auto rounded-3xl"/>
                    )}
                </div>
            </SwiperSlide>
         )   
        })
     }
    </Swiper>
  </div>
  )
}

export default Banner