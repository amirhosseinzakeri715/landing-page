import Advertisement from "./Advertisement"

export default function AdvertisementSection() {
  const advertisements = [
    {
      image: "/woman.png",
      title: "Premium Butter Import",
      description: "RENA imports high-quality butter from reputable international producers that meets all health and quality standards. Our imported butter comes with international certifications."
    },
    {
      image: "/man.png",
      title: "Dairy Processing Equipment",
      description: "We supply specialized industrial equipment for dairy production including boilers, refrigeration systems, and stainless steel tanks with guaranteed quality and competitive pricing."
    },
    {
      image: "/woman.png",
      title: "Fresh Cream Supply",
      description: "RENA provides bulk imported fresh cream with natural taste and texture, free from additives. Ideal for dairy production, pastry making, beverages, and sauces."
    }
  ]
  
  return (
    <section className="place-items-center text-center mt-16 mb-4 px-5 lg:px-15 xl:px-25">
      <h2 className="text-[40px] mb-7">Our Services & Products</h2>
      <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-20">
        RENA International Trading Company with 34 years of proven experience, providing quality products in food, industrial and construction sectors with guaranteed standards.
      </p>
      <div className="flex flex-col sm:flex-row gap-8 justify-center">
        {advertisements.map((item, index) => (
          <Advertisement 
            key={index} 
            title={item.title} 
            description={item.description} 
            image={item.image} 
            index={index}
          />
        ))}
      </div>
    </section>
  )
}



