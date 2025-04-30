"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
              AI Front Office for Healthcare Agents
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 text-lg md:text-xl">
              Create AI Store in 2 min, Scale with Digital Marketing
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white w-full sm:w-auto">
                Get Started
              </Button>
        
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 text-center">
  <div className="col-span-1">
    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-teal-600">2100++</div>
    <div className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400">Qualified Doctors</div>
  </div>
  <div className="col-span-1">
    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-teal-600">1000+</div>
    <div className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400">Hospitals</div>
  </div>
  <div className="col-span-2 sm:col-span-1">
    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-teal-600">800+</div>
    <div className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400">Treatment Plans</div>
  </div>
</div>


          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full h-full max-w-md mx-auto overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/hero.png"
                alt="GoGetWell AI Platform Dashboard"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
