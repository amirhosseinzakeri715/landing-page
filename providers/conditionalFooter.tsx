"use client"

import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import { usePathname } from "next/navigation"

export function ConditionalFooter() {
  const pathname= usePathname()
  if (pathname=== "/login" || pathname=== "/signup") return null;
  
  return (
    <>
      <Hero/>
      <Footer />
    </>
  )
}