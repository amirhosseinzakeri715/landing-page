"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchProductsList } from "@/apis/products.api"
import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard"

export default function ProductsPage() {
    const [perPage, setPerPage] = useState<number>(3);
    const [sortOrder, setSortOrder] = useState<string | number>("");

    const products= useQuery({
        refetchOnWindowFocus: false,
        queryKey: ["products", perPage],
        queryFn: () => fetchProductsList(1, perPage)
    })

    const sortedProducts= () =>{
        if (sortOrder=== "newest") {
            return products.data?.results.sort((a: IProduct, b: IProduct) => new Date(b.created) - new Date(a.created));
        }else if (sortOrder=== 1) {
            return products.data?.results.sort((a: IProduct, b: IProduct) => a.avg_rating - b.avg_rating);
        }else if (sortOrder=== 5) {
            return products.data?.results.sort((a: IProduct, b: IProduct) => b.avg_rating - a.avg_rating);
        }
        return products.data?.results;
    }
    
    return (
        <section>
            <div className="flex justify-between items-center">
                <span className="py-2.5 flex gap-x-4">
                    <h5 className="text-[1rem]">Sortby:</h5>
                    <span className="text-gray-400 text-sm flex gap-x-2.5 items-center">
                        <h6
                            className="cursor-pointer"
                            onClick={() => setSortOrder("newest")}
                        >
                            newest
                        </h6>
                        <h6
                            className="cursor-pointer"
                            onClick={() => setSortOrder(1)}
                        >
                            cheaper
                        </h6>
                        <h6
                            className="cursor-pointer"
                            onClick={() => setSortOrder(5)}
                        >
                            expensive
                        </h6>
                    </span>
                </span>
                <h4 className="text-gray-400 text-sm">{products.data?.count} products</h4>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.isLoading && (
                    Array.from({length: 5}, (_, index) =>(
                        <ProductCardSkeleton key={index}/>
                    ))
                )}
                {products.isSuccess && (
                    sortedProducts().map((product: IProduct, index: number) => <ProductCard key={index} product={product} />)
                )}
            </div>
            {products.isSuccess && products.data?.limit< products.data?.count && (
                <button onClick={() => setPerPage(perPage+ 5)} className="text-blue-500 w-full hover:text-blue-700 cursor-pointer mt-5">
                    Load More
                </button>
            )}
        </section>
    )
}