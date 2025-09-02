import Image from "next/image"

interface StoryProps{
  date: string
  image: string
  title: string
  className?: string
}

export default function Story({image, title, date, className}: StoryProps) {
  return (
    <div className={`space-y-2 cursor-pointer duration-200 hover:scale-101 ${className}`}>
      <Image src={image} alt="" width={1440} height={350} className="bg-cover rounded-3xl"/>
      <h4 className="text-2xl">{title}</h4>
      <time className="text-lg">{date}</time>
    </div>
  )
}