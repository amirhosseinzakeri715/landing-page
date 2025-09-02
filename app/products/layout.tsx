import Image from "next/image"
import SideBar from "@/components/SideBar"

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <>
            <Image
                alt="Ship"
                width={1440}
                height={350}
                src="/supermarket2.jpg"
                className="brightness-50 w-full h-[350px] object-cover"
            />
            <div className="flex gap-x-5 p-5">
                <aside className="w-1/5 hidden lg:block"><SideBar/></aside>
                <section className="lg:w-4/5 w-full">{children}</section>
            </div>
        </>
    )
}