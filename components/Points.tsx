import Image from "next/image"

export default function Points() {
  return (
    <div className="px-6 relative flex justify-center items-center h-full sm:h-[550px]">
      <Image 
        src="/supermarket.png"
        alt="RENA Dairy Warehouse" 
        fill
        className="object-cover absolute left-0 right-0"
        quality={100}
      />
      <div className="my-5 sm:my-0 p-6 sm:p-16 rounded-3xl relative bg-white/95 z-10 max-w-[800px] space-y-6 backdrop-blur-sm">
        <div className="bg-blue-600 absolute left-[-125px] top-[-90px] py-6 px-16 rounded-3xl text-white hidden lg:block shadow-xl">
          <h6 className="text-[56px] font-bold">34</h6>
          <p className="text-center text-lg font-semibold">years</p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          <span className="text-blue-600">RENA International</span> with 34 years of global trade expertise
        </h2>
        <p className="font-medium text-gray-600 leading-relaxed">
          Since 1991, RENA has established itself as a trusted bridge between international suppliers and regional markets. Our extensive network and quality assurance processes ensure premium dairy products and industrial equipment reach our partners with unmatched reliability.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            Quality Certified
          </div>
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            On-Time Delivery
          </div>
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            Competitive Pricing
          </div>
        </div>
      </div>
    </div>
  )
}


