"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
                AI-Powered Medical Tourism Platform
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                Connect healthcare providers with global patients through intelligent digital stores and 24/7 AI
                support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white w-full sm:w-auto">
                Request Demo
              </Button>
              <Button size="lg" variant="outline" className="dark:text-white dark:border-gray-700 w-full sm:w-auto">
                Learn More
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 pt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Trusted by healthcare providers worldwide</p>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800"
                  />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[500px] aspect-square md:aspect-video overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/hero.png"
                alt="GoGetWell AI Platform Dashboard"
                width={800}
                height={600}
                className="object-cover dark:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-xl" />

              {/* Floating UI Elements */}
              <motion.div
                className="absolute top-1/4 right-1/4 z-20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="relative">
                  <div className="absolute -inset-[5px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg" />
                  <div className="relative z-10 p-2 sm:p-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-teal-500" />
                      <span className="text-xs sm:text-sm font-medium">Patient Inquiries +200%</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 left-1/4 z-20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="relative">
                  <div className="absolute -inset-[5px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg" />
                  <div className="relative z-10 p-2 sm:p-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500" />
                      <span className="text-xs sm:text-sm font-medium">24/7 AI Support</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
