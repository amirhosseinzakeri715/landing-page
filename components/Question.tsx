"use client"

import React from "react"
import { Accordion } from "./Accardion"

export default function Question() {
  const questions = [
    {
      title: "What products does RENA offer?",
      description: "RENA LLC specializes in importing high-quality butter and fresh cream from reputable international producers. Our products come with international certifications and comply with all health and quality standards."
    },
    {
      title: "What is the ordering and delivery process?",
      description: <ol className="list-decimal">
        <li>
          Step 1: Placing an order
          <ol className="list-decimal pl-8 my-4">
            <li>Contact our sales team at +374 11 700066</li>
            <li>Provide complete product specifications including type, quantity, and required standards</li>
            <li>Receive and approve the proforma invoice</li>
          </ol>
        </li>
        <li>
          Step 2: Payment and financing
          <ul className="list-disc pl-12 my-4">
            <li>Payment options include LC, bank transfer, and other international methods</li>
            <li>Full support for customs clearance procedures</li>
          </ul>
        </li>
        <li>
          Step 3: Product delivery
          <ol className="list-decimal pl-8 my-4">
            <li>Delivery to your specified location in Armenia</li>
            <li>Phased delivery available for bulk orders</li>
            <li>Quality guarantee until delivery</li>
          </ol>
        </li>
      </ol>
    },
    {
      title: "What are the benefits of working with RENA?",
      description: <div className="space-y-3">
        <p>With 34 years in international trade, RENA offers:</p>
        <ul className="list-disc pl-8 space-y-2">
          <li>Guaranteed product quality meeting global standards</li>
          <li>Competitive pricing through direct manufacturer relationships</li>
          <li>Reliable on-time delivery</li>
          <li>Technical support and expert consultation</li>
          <li>Flexible payment methods</li>
        </ul>
      </div>
    },
    {
      title: "What are the partnership requirements?",
      description: <ol className="list-decimal space-y-2">
        <li>
          General requirements:
          <ul className="list-disc pl-8 my-4">
            <li>Valid company registration and business license</li>
            <li>Commitment to product storage standards</li>
          </ul>
        </li>
        <li>
          Special requirements for dairy products:
          <ol className="list-decimal pl-8 my-4">
            <li>Relevant health permits</li>
            <li>Possible facility inspection by RENA's quality control team</li>
          </ol>
        </li>
      </ol>
    },
    {
      title: "How can I start working with RENA?",
      description: "To begin our partnership, please contact our sales team at +374 11 700066 or visit our headquarters at 22/1 A. Mikoyan Street, Yerevan, Armenia."
    }
  ]

  const ref = React.useRef(null)
  const [visible, setVisible] = React.useState(false)
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect()
        }
      }
    )
    if (ref.current) observer.observe(ref.current);
  }, [])

  return (
    <section className="mb-16 px-5 overflow-hidden">
      <div ref={ref} className={`transform transition-all text-left space-y-5 duration-1000 ease-out bg-blue-950 rounded-3xl justify-between text-white p-8 md:p-16 gap-8 flex flex-col md:flex-row
        ${visible ? "translate-x-0 opacity-100" : "translate-x-[4rem] opacity-0"}
      `}>
        <h2 className="text-2xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        <div className="max-w-[800px] w-full">
          {questions.map((question, index) => (
            <Accordion 
              key={index} 
              title={question.title} 
              description={question.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}