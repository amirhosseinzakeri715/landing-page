"use client"

import { useRouter } from "next/navigation"

interface ButtonProps{
    title: string
    href: string
}

export default function Button({title, href}: ButtonProps) {
    const { push }= useRouter();
    
    return (
        <button onClick={() => push(`/${href}`)} className="hover:bg-white text-white font-semibold hover:text-blue-500 py-1 px-10 border cursor-pointer rounded">
            {title}
        </button>
    )
}