"use client"

import { Header } from "@/components/Header"
import { usePathname } from "next/navigation"

export function ConditionalHeader() {
  const pathname= usePathname()
  if (pathname=== "/login" || pathname=== "/signup") return null;
  return <Header />
}