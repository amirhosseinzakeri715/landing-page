"use client"

import { motion } from 'framer-motion'
import Comment from "@/components/Comment"

export default function Testimonials() {
  const comments = [
    {
      person: "Michael T.",
      company: "Dairy Distributor",
      description: "RENA's butter imports have been consistently high-quality. Their documentation is always complete and deliveries arrive on schedule. We've been partners for 5 years and couldn't be happier with their service."
    },
    {
      person: "Sarah K.",
      company: "Bakery Chain",
      description: "The fresh cream from RENA has transformed our pastry quality. Their customer service team is extremely responsive - we get answers to our inquiries within hours, not days."
    },
    {
      person: "David R.",
      company: "Food Processing Plant",
      description: "As an industrial buyer, I appreciate RENA's rigorous quality control. They've never missed a delivery deadline, and their pricing remains competitive year after year."
    },
    {
      person: "Jennifer L.",
      company: "Restaurant Group",
      description: "Working with RENA has simplified our supply chain. Their one-stop solution for dairy products and equipment has reduced our vendor management overhead by 30%."
    },
    {
      person: "Robert M.",
      company: "Import/Export Firm",
      description: "RENA's knowledge of international food standards is impressive. They navigated complex customs regulations for us, saving weeks of paperwork delays."
    },
    {
      person: "Emily S.",
      company: "Hotel Chain",
      description: "The consistency of RENA's products allows us to standardize our recipes across all locations. Their reliability gives us peace of mind for our banquet operations."
    }
  ]

  const duplicatedComments = [...comments, ...comments, ...comments, ...comments]

  return (
    <section className="space-y-10 my-16 px-5">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-[40px] font-bold">Client Testimonials</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Hear what our partners say about working with RENA International
        </p>
      </div>
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-x-6"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: typeof window !== "undefined" && window.innerWidth > 640 ? 40 : 20,
              ease: "linear"
            }
          }}
        >
          {duplicatedComments.map((comment, index) => (
            <Comment 
              key={index} 
              person={comment.person} 
              company={comment.company}
              description={comment.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}