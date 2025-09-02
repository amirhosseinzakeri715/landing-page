import Image from "next/image"
import { FaStar, FaRegStar } from "react-icons/fa"

export const ProductCardSkeleton: React.FC= () =>{
  return (
    <div className="border-y border-r border-gray-300 py-2 px-5 animate-pulse rounded">
      <div className="animate-pulse space-y-2">
        <div className="place-self-center bg-gray-50 dark:bg-gray-300 rounded-full size-20 sm:size-72 md:size-48 lg:size-52 xl:size-64"></div>
        <div className="w-full h-7 bg-gray-50 dark:bg-gray-300 rounded"></div>
        <div className="w-16 h-5 bg-gray-50 dark:bg-gray-300 rounded"></div>
        <div className="w-32 h-5 bg-gray-50 dark:bg-gray-300 rounded"></div>
      </div>
    </div>
  )
}
export const ProductCard: React.FC<{product: IProduct}>= ({product}) =>{
  const star= Math.floor(product.avg_rating);

  return (
    <div className="border-y border-r border-gray-200 py-2 px-5 flex flex-col justify-between cursor-pointer hover:shadow-lg">
      <Image src={product.image_url} alt={product.name} width={1440} height={350} className="place-self-center w-full"/>
      <h4 className="text-xl font-medium line-clamp-1">{product.name}</h4>
      <span className="flex">
        {[...Array(star)].map((_, index) =>(
          <FaStar key={index}/>
        ))}
        {[...Array(5- star)].map((_, index) =>(
          <FaRegStar key={index+ star}/>
        ))}
      </span>
      <p className="text-base font-medium">{product.description}</p>
    </div>
  )
}