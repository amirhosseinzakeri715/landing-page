"use client"

import "swiper/css"
import Image from "next/image"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Slider() {
  return (
    <Swiper 
      loop={true}
      slidesPerView={1}
      modules={[ Autoplay ]}
      autoplay={{ delay: 3000 }}
      className="brightness-50 rounded-b-2xl max-h-screen"
    >
      <SwiperSlide>
        <Image
          width={1600}
          height={350}
          alt="Armenia"
          src="/armenia.jpg" 
          className="rounded-b-2xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={1600}
          height={350}
          alt="Supermarket"
          src="/supermarket.png"
          className="rounded-b-2xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={1600}
          height={350}
          alt="Vegetable"
          src="/vegetable.jpg"
          className="rounded-b-2xl max-h-screen"
        />
      </SwiperSlide>
    </Swiper>
  )
}