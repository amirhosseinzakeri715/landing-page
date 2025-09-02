import { FaStar } from "react-icons/fa6"

interface CommentProps{
  person: string
  description: string
}

export default function Comment({person, description}: CommentProps) {
  return (
    <div className="bg-white p-8 rounded-lg flex flex-col justify-between min-w-[400px]">
        <span className="flex gap-x-1">
        {[...Array(5)].map((_, index) =>(
          <FaStar key={index} className="size-6 text-yellow-500"/>
        ))}
      </span>
      <p className="text-[16px]">{description}</p>
      <h4 className="font-bold text-[16px]">{person}</h4>
    </div>
  )
}