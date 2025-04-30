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
          {/* Left side - Image with animation */}
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

              {/* Floating elements */}
              <motion.div
                className="absolute top-0 right-0 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-teal-500" />
                  <span className="text-sm font-medium dark:text-white">Global Network</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-0 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <span className="text-sm font-medium dark:text-white">AI-Powered Care</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="h-1 w-12 bg-teal-600 dark:bg-teal-400 rounded-full" />
                <p className="text-teal-600 dark:text-teal-400 font-medium">Our Mission</p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight dark:text-white">About Us</h2>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                At GoGetWell AI, we're pioneering a revolutionary approach to medical tourism through our advanced
                AI-driven platform. We tackle the industry's core challenges of inefficiency and fragmentation,
                empowering healthcare providers to transform their operations, expand their patient base, and deliver
                exceptional, personalized care that transcends geographical boundaries.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Our innovative solutions are meticulously designed to optimize processes and elevate the entire patient
                journey, from initial inquiry to post-treatment follow-up.
              </p>
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
