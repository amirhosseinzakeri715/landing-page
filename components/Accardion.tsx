"use client"

import React from "react"
import { FaPlus, FaXmark } from "react-icons/fa6"
import { motion, AnimatePresence } from "framer-motion"

interface AccordionProps {
  title: string
  description: string | React.ReactNode
}

export function Accordion ({ title, description }: AccordionProps) {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="border-t py-6 space-y-6">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <h3 className="text-xl font-medium">{title}</h3>
        <motion.div initial={false} animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
          {open ? <FaXmark className="size-6" /> : <FaPlus className="size-6" />}
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {description}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}