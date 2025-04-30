"use client"

import { motion } from "framer-motion"
import { Store, Bot, Headset, Users, Globe, ShieldCheck } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Features() {
  const features = [
    {
      icon: <Store className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
      title: "AI-Powered Digital Store",
      description:
        "Create a personalized digital storefront that showcases your healthcare services to a global audience, available 24/7.",
      benefit: "Increase your online presence and reach patients worldwide without additional staff.",
    },
    {
      icon: <Bot className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
      title: "Intelligent Agents",
      description:
        "Our AI agents specialize in medical tourism, providing personalized guidance to patients throughout their healthcare journey.",
      benefit: "Reduce response time from hours to seconds while maintaining personalized care.",
    },
    {
      icon: <Headset className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
      title: "24/7 Patient Support",
      description:
        "Provide round-the-clock assistance to patients with our automated support system that handles inquiries in multiple languages.",
      benefit: "Never miss a patient inquiry, even outside business hours or across time zones.",
    },
    {
      icon: <Users className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
      title: "Automated Lead Generation",
      description:
        "Convert visitors into qualified leads with intelligent automation and personalized engagement strategies.",
      benefit: "Increase conversion rates by 150% with targeted follow-ups and personalized communication.",
    },
    {
      icon: <Globe className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
      title: "Global Reach",
      description: "Connect with patients worldwide through multilingual support and culturally-aware AI agents.",
      benefit: "Expand your medical tourism business across borders without language barriers.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
      title: "Secure & Compliant",
      description:
        "Our platform is built with healthcare data security in mind, ensuring HIPAA compliance and patient privacy.",
      benefit: "Build trust with patients while meeting all regulatory requirements for healthcare data.",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900" id="features">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
              Powerful Features
            </h2>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to transform your healthcare business with AI-powered solutions
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col h-full space-y-4 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm transition-all hover:shadow-md hover:border-teal-200 dark:hover:border-teal-800"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-3 rounded-full bg-teal-50 dark:bg-teal-900/30 w-fit">{feature.icon}</div>
              <h3 className="text-xl font-bold dark:text-white">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 flex-grow">{feature.description}</p>
              <div className="mt-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                <p className="text-sm font-medium text-teal-600 dark:text-teal-400">
                  <span className="font-bold">Benefit:</span> {feature.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
