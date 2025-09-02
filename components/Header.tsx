"use client"

import React from "react"
import Image from "next/image"
import { IoClose } from "react-icons/io5"
import { IoMdMenu } from "react-icons/io"
import { BiSolidPhoneCall } from "react-icons/bi"
import { FaCircleQuestion } from "react-icons/fa6"
import { usePathname, useRouter } from "next/navigation"
import logo from '../public/Rena_LLC__2_-removebg-preview.png';
import logo2 from '../public/Rena_LLC__6_-removebg-preview.png';


export const Header: React.FC= () =>{
    const [scroll, setScroll] = React.useState<boolean>(false);
    const [open, setOpen] = React.useState<boolean>(false);
    const pathname = usePathname();
    const { push }= useRouter();

    const menu= [
        {
            name: "HOME",
            href: "/"
        },
        {
            name: "ABOUT",
            href: "/about"
        },
        {
            name: "COLLECTION",
            href: "/collection"
        },
        {
            name: "PRODUCTS",
            href: "/products"
        },
        {
            name: "RECYCLE SOLUTION",
            href: "/recycle"
        },
        {
            name: "CONTACT US",
            href: "/contact"
        }
    ]
    type menuItem= typeof menu[number]

    const click= (item: menuItem) =>{
        push(item.href);
        setOpen(false);
    }

    React.useEffect(() =>{
        const scrollHandler= () =>{
          const isScrolled= window.scrollY> 100
          if (isScrolled !== scroll) setScroll(isScrolled)
        }

        window.addEventListener("scroll", scrollHandler)
        return () =>{
          window.removeEventListener("scroll", scrollHandler)
        }
    }, [scroll])
    
    return(
        <header className={`flex items-center justify-between w-full z-50 px-5 2xl:px-15 transition-all duration-300
            ${scroll ? "fixed bg-white shadow-md text-green-700 h-20" : "absolute text-white h-32"}`
        }>
            {scroll ? 
                <Image src={logo} width={300} height={60} alt="Logo" className="w-1/2 sm:w-[250px] "/>
                : 
                <Image src={logo2} width={300} height={60} alt="Logo" className="w-1/2 sm:w-[300px] "/>
            }
            <div className="space-y-5 hidden lg:block">
                <ul className={`justify-end text-sm font-medium ${scroll ? "hidden" : " flex"}`}>
                    <li className="flex items-center px-2 xl:px-4 border-r border-r-white text-nowrap hover:text-black cursor-pointer">
                        <BiSolidPhoneCall className="text-xl"/>+49 (0) 5363 - 810 3 750
                    </li>
                    <li className="flex items-center gap-x-1 px-2 xl:px-4 border-r border-r-white hover:text-black cursor-pointer">
                        <FaCircleQuestion/>FAQ
                    </li>
                    <li className="px-2 xl:px-4 border-r border-r-white text-nowrap hover:text-black cursor-pointer">PORTAL 360</li>
                    <li className="px-2 xl:px-4 border-r border-r-white hover:text-black cursor-pointer">REGULATIONS</li>
                    <li className="px-2 xl:px-4 border-r border-r-white hover:text-black cursor-pointer">CAREERS</li>
                    <li className="px-2">
                    <input type="search" placeholder="Search..." className="pl-2 text-sm font-normal rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </li>
                </ul>
                <ul className="flex justify-center">
                    {menu.map((item) =>(
                        <li key={item.name}
                            className={`xl:text-lg text-nowrap font-semibold flex items-center cursor-pointer lg:mx-2 xl:mx-4 hover:border-b-2
                                ${pathname=== item.href && scroll ? "border-b-2 border-gray-700" : pathname=== item.href && !scroll ? "border-b-2 border-white" : ""}`
                            }
                        >
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                    <li onClick={() => push("/login")} className="p-2 bg-yellow-500 text-white xl:text-lg text-nowrap font-semibold cursor-pointer rounded-b-2xl rounded-tl-2xl hover:border-b-2 border-b-gray-300">
                        LOGIN/SIGNUP
                    </li>
                </ul>
            </div>
            <button onClick={() => setOpen(!open)} className="py-1 px-3 border cursor-pointer border-gray-400 text-gray-400 rounded-md lg:hidden">
                <IoMdMenu className="size-8"/>
            </button>
            {open && (
                <nav className="absolute top-0 right-0 h-screen bg-gray-100 shadow-lg z-20 text-green-700 lg:hidden">
                    <button className="p-4 text-2xl cursor-pointer hover:text-green-900" onClick={() => setOpen(false)}>
                        <IoClose/>
                    </button>
                    <ul className="flex flex-col">
                        {menu.map((item) => (
                            <li key={item.name} className="p-4 hover:bg-gray-200 cursor-pointer" onClick={() => click(item)}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}