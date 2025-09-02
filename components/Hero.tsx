"use client";

import Image from "next/image";
import Link from "next/link";
import { SlCalender } from "react-icons/sl";
import supermarket from "@/public/supermarket.jpg";
import { motion } from "framer-motion";

export default function MeetingSection() {
  return (
    <section className="min-h-screen w-full px-4 py-12 sm:py-0 bg-[#cee4e1] flex items-center justify-center overflow-x-hidden">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div 
            className="space-y-4 sm:space-y-6 order-1 lg:order-none w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-thin leading-tight text-gray-900/90"
            >
              Trusted international trade since 1991.{" "}
              <span className="font-bold text-black underline decoration-dotted underline-offset-4 decoration-green-700">
                Quality that speaks for itself.
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed"
            >
              RENA LLC specializes in premium dairy products, industrial equipment, and building materials, serving clients across Armenia, Iran, Russia, and beyond with reliable international trade solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-sm sm:text-base lg:text-lg text-gray-700"
            >
              Want to experience our quality products? <strong className="font-bold text-gray-900">See RENA in action.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 sm:gap-3 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base"
              >
                <span>Request a quote today</span>
                <SlCalender className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Images */}
          <motion.div 
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] order-0 lg:order-none w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
              <Image
                src="https://cdn.prod.website-files.com/637d2ae70bed66dfb5381fc0/637d2ae80bed66601d382041_Pattern.svg"
                alt="Background pattern"
                fill
                className="object-cover opacity-20"
                quality={30}
                sizes="100vw"
              />
            </div>

            <div className="relative h-full w-full flex items-end justify-end p-2 sm:p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative w-full h-full max-w-[95%]"
              >
                <Image
                  src={supermarket}
                  alt="RENA LLC international trade products"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                  quality={80}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>

            {/* Popular Products Card */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="absolute top-1 left-1 sm:top-4 sm:left-4 z-20 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-200 p-2 sm:p-4 w-[140px] sm:w-[180px] md:w-[200px] lg:w-[220px] cursor-pointer"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5 }}
                className="text-xs sm:text-sm font-semibold text-gray-900 text-center border-b border-gray-200 pb-1 sm:pb-2 mb-2 sm:mb-3"
              >
                Our Top Products
              </motion.h2>
              <div className="space-y-1 sm:space-y-2">
                {[
                  { icon: "🥛", name: "Premium Butter", bg: "bg-yellow-100", delay: 0.6 },
                  { icon: "🧀", name: "Dairy Cream", bg: "bg-blue-100", delay: 0.8 },
                  { icon: "🏗️", name: "Boiler Systems", bg: "bg-red-100", delay: 1.0 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: item.delay }}
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2 sm:gap-3"
                  >
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 ${item.bg} rounded-md sm:rounded-lg flex items-center justify-center`}>
                      {item.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-800 truncate">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Trade Analytics Card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="absolute bottom-1 right-1 sm:bottom-4 sm:right-4 z-30 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-200 p-2 sm:p-4 w-[150px] sm:w-[180px] md:w-[220px] lg:w-[250px] cursor-pointer"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6 }}
                className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3"
              >
                Trade Analytics
              </motion.h3>
              <div className="space-y-1 sm:space-y-2">
                {[
                  { label: "Years in Business", value: "34+", delay: 0.7 },
                  { label: "Countries Served", value: "7+", delay: 0.9 },
                  { label: "Product Categories", value: "50+", delay: 1.1 },
                ].map((metric) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: metric.delay }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-xs text-gray-600">{metric.label}</span>
                    <span className="text-xs sm:text-sm font-bold text-green-600">
                      {metric.value}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 mt-2 sm:mt-3 origin-left"
                >
                  <div className="bg-green-600 h-full rounded-full w-[85%]" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}