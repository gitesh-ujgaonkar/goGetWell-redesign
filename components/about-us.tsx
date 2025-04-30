"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Zap, Users, Globe, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <section
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      id="about"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8 lg:gap-16 lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-teal-500/10 rounded-full blur-xl dark:bg-teal-500/20" />
              <div className="relative z-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-04-30_085204-removebg-preview-AiHJuIODIHtb4UntEFRsIAh1Ib0TY6.png"
                  alt="Healthcare professionals team"
                  width={600}
                  height={600}
                  className="mx-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight dark:text-white">About Us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <motion.div className="flex items-start space-x-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <div className="bg-teal-100 dark:bg-teal-900/50 p-3 rounded-lg">
                  <Zap className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg dark:text-white">Cutting-Edge Technology</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Harnessing AI to transform healthcare delivery models
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start space-x-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <div className="bg-teal-100 dark:bg-teal-900/50 p-3 rounded-lg">
                  <Users className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg dark:text-white">Patient-Centric Care</h3>
                  <p className="text-gray-600 dark:text-gray-400">Creating personalized healthcare experiences</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start space-x-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <div className="bg-teal-100 dark:bg-teal-900/50 p-3 rounded-lg">
                  <Globe className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg dark:text-white">Global Reach</h3>
                  <p className="text-gray-600 dark:text-gray-400">Connecting patients with providers worldwide</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start space-x-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <div className="bg-teal-100 dark:bg-teal-900/50 p-3 rounded-lg">
                  <Award className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg dark:text-white">Excellence Driven</h3>
                  <p className="text-gray-600 dark:text-gray-400">Setting new standards in medical tourism</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-4">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white dark:bg-teal-600 dark:hover:bg-teal-700 group">
                Learn more about our story
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
