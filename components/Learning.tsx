import Article from "./Article"

export default function Learning() {
  const articles = [
    {
      tag: "Dairy Industry",
      image: "/family.png"
,
      title: "International Standards for Premium Butter Production",
      description: "Learn about global butter production standards and how RENA selects only the highest quality international suppliers through our rigorous quality control process."
    },
    {
      image: "/phone.png",
      tag: "Industrial Solutions",
      title: "Selecting Boiler Systems for Dairy Processing",
      description: "A technical guide to choosing the right capacity industrial boilers for dairy production and pastry manufacturing facilities."
    },
    {
      image: "/report.png",
      tag: "Global Trade",
      title: "Customs Procedures for Food Imports to Armenia",
      description: "Complete guide to customs processes and required standards for importing food products to the Armenian market."
    }
  ]

  return (
    <section className="space-y-10 my-16 px-5 lg:px-15 xl:px-25 flex flex-col justify-center items-center">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">RENA Knowledge Center</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Expert resources on dairy products, industrial equipment and international trade processes
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {articles.map((article) => (
          <Article 
            key={article.title} 
            tag={article.tag} 
            image={article.image} 
            title={article.title} 
            description={article.description}
          />
        ))}
      </div>
      <button
        className="px-7 py-3 border-2 text-[16px] border-blue-600 rounded-lg cursor-pointer font-medium hover:text-white hover:bg-blue-600 transition-colors mt-6"
      >
        View All Resources
      </button>
    </section>
  )
}


