import Image from "next/image"
import Story from "@/components/Story"
import { IoSearchOutline } from "react-icons/io5"

export default function Collection() {    
    return (
        <>
            <Image
                alt="Ship"
                width={1920}
                height={1080}
                src="/landing.webp"
                className="brightness-50 w-full h-[350px] object-cover object-[10%_30%]"
            />
            <section className="my-20 space-y-5 px-15 lg:px-25 xl:px-35">
                <div className="flex flex-col sm:flex-row gap-y-3 sm:justify-between sm:items-center">
                    <h2 className="text-5xl">Latest stories</h2>
                    <div className="flex px-4 py-3 gap-x-1.5 rounded-2xl border text-gray-600 border-gray-300 hover:border-gray-500 ">
                        <IoSearchOutline className="mt-1"/>
                        <input type="email" placeholder="What are you looking for?" className="outline-none bg-transparent"/>
                    </div>
                </div>
                <div className="lg:flex gap-x-15">
                    <Story image="/vatikan.webp" title="Employee Benefits UK: What to Offer in 2025 (20+ Examples)" date="April 17, 2025" className="lg:w-3/4"/>
                    <div className="sm:flex lg:flex-col lg:w-1/4 gap-5">
                        <Story
                            image="/woman.webp"
                            date="April 17, 2025"
                            title="Employee Benefits UK: What to Offer in 2025 (20+ Examples)"
                        />
                        <Story
                            image="/earth.webp"
                            date="April 17, 2025"
                            title="Employee Benefits UK: What to Offer in 2025 (20+ Examples)"
                        />
                    </div>
                </div>
            </section>
            <section className="grid sm:grid-cols-2 gap-x-15 gap-y-5 px-15 lg:px-25 xl:px-35">
                <Story
                    image="/woman.webp"
                    date="April 17, 2025"
                    title="Employee Benefits UK: What to Offer in 2025 (20+ Examples)"
                />
                <Story
                    image="/vatikan.webp"
                    date="April 17, 2025"
                    title="Employee Benefits UK: What to Offer in 2025 (20+ Examples)"
                />
                <Story
                    image="/earth.webp"
                    date="April 17, 2025"
                    title="Employee Benefits UK: What to Offer in 2025 (20+ Examples)"
                />
                <Story
                    image="/woman.webp"
                    date="April 17, 2025"
                    title="Employee Benefits UK: What to Offer in 2025 (20+ Examples)"
                />
            </section>
            <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-15 gap-y-5 px-15 lg:px-25 xl:px-35 my-20">
                <Story
                    image="/woman.webp"
                    date="April 17, 2025"
                    title="Employee Benefits UK: What to Offer in 2025 (20+ Examples)"
                />
                <Story
                    image="/woman.webp"
                    date="April 17, 2025"
                    title="Employee Benefits UK: What to Offer in 2025 (20+ Examples)"
                />
                <Story
                    image="/vatikan.webp" 
                    date="April 17, 2025"
                    title="Employee Benefits UK: What to Offer in 2025 (20+ Examples)"
                />
                <Story
                    image="/earth.webp"
                    date="April 17, 2025"
                    title="Employee Benefits UK: What to Offer in 2025 (20+ Examples)"
                />
                <Story
                    image="/woman.webp"
                    date="April 17, 2025"
                    title="Employee Benefits UK: What to Offer in 2025 (20+ Examples)"
                />
                <Story
                    image="/earth.webp"
                    date="April 17, 2025"
                    title="Employee Benefits UK: What to Offer in 2025 (20+ Examples)"
                />
                <Story
                    image="/woman.webp"
                    date="April 17, 2025"
                    title="Employee Benefits UK: What to Offer in 2025 (20+ Examples)"
                />
            </section>
            <div className="flex justify-center items-center">
                <button className="px-5 py-3 rounded-2xl border cursor-pointer border-gray-400 hover:border-purple-600">Load more</button>
            </div>
        </>
    )
}