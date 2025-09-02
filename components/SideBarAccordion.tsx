"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"

interface SideBarAccordionProps{
  title: string
  description: React.ReactNode
}

export function SideBarAccordion ({ title, description}: SideBarAccordionProps) {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="py-3 border-b border-b-gray-300">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <h3 className="text-[1rem] font-medium">{title}</h3>
        <motion.div initial={false}>
          {open ? <FaChevronUp className="size-3 text-gray-400" /> : <FaChevronDown className="size-3 text-gray-400" />}
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