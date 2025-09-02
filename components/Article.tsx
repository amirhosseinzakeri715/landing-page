"use client"

import React from "react"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6"

interface ArticleProps{
  tag: string
  image: string
  title: string
  description: string
}

export default function Article({tag, image, title, description}: ArticleProps) {
  const [hover, setHover]= React.useState<boolean>(false);

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      className="p-4 bg-white rounded-2xl space-y-4 w-full"
    >
      <Image src={image} alt={title} width={400} height={300}
        className={`rounded-xl cursor-pointer duration-500 w-full h-[225px] ${hover ? "scale-105" : ""}`}
      />
      <div className="flex gap-x-2 items-center">
        <span className="text-[12px] font-medium py-0.5 px-1.5 bg-gray-100 rounded-sm cursor-pointer">{tag}</span>
        <h6 className="text-[11px]">APRIL 19, 2024</h6>
      </div>
      <h3 className="text-xl font-medium cursor-pointer">{title}</h3>
      <p className="text-gray-400 line-clamp-3">{description}</p>
      <button className={`flex items-center gap-x-2 cursor-pointer text-sm duration-500 ${hover ? "transform gap-x-3" : ""}`}>
        Read More <FaArrowRight className={`text-sm ${hover ? "text-blue-400" : ""}`}/>
      </button>
    </div>
  )
}