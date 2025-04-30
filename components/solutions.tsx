"use client"

import { motion } from "framer-motion"
import {
  Globe,
  Users,
  MessageSquare,
  FileText,
  TrendingUp,
  Database,
  Languages,
  CreditCard,
  Search,
} from "lucide-react"

export default function Solutions() {
  const solutions = [
    {
      icon: <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />,
      title: "Custom AI-Powered Website",
      description:
        "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
      color: "blue",
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />,
      title: "Enhanced Patient Conversion",
      description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
      color: "purple",
    },
    {
      icon: <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />,
      title: "Real-Time Query Handling",
      description: "Instant response system for patient inquiries with AI-powered chat support.",
      color: "green",
    },
    {
      icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />,
      title: "Medical Report Analysis",
      description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
      color: "orange",
    },
    {
      icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-pink-600" />,
      title: "Improved Lead Generation",
      description: "Data-driven lead generation strategies to attract and engage potential patients.",
      color: "pink",
    },
    {
      icon: <Database className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />,
      title: "Comprehensive Healthcare Database",
      description: "Extensive medical information database for accurate patient guidance and support.",
      color: "indigo",
    },
    {
      icon: <Languages className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />,
      title: "Multilingual Support",
      description: "Breaking language barriers with comprehensive multilingual communication tools.",
      color: "red",
    },
    {
      icon: <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600" />,
      title: "Seamless Payment Handling",
      description: "Secure and efficient payment processing for medical services globally.",
      color: "teal",
    },
    {
      icon: <Search className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-600" />,
      title: "Marketing And SEO Support",
      description: "Optimized digital presence with advanced SEO and marketing strategies.",
      color: "cyan",
    },
  ]

  const getGradient = (color: string) => {
    const gradients: Record<string, string> = {
      blue: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10",
      purple: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10",
      green: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10",
      orange: "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/10",
      pink: "from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/10",
      indigo: "from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-900/10",
      red: "from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/10",
      teal: "from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-900/10",
      cyan: "from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-900/10",
    }
    return gradients[color] || "from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-900/10"
  }

  const getBorderColor = (color: string) => {
    const borders: Record<string, string> = {
      blue: "border-blue-200 dark:border-blue-800",
      purple: "border-purple-200 dark:border-purple-800",
      green: "border-green-200 dark:border-green-800",
      orange: "border-orange-200 dark:border-orange-800",
      pink: "border-pink-200 dark:border-pink-800",
      indigo: "border-indigo-200 dark:border-indigo-800",
      red: "border-red-200 dark:border-red-800",
      teal: "border-teal-200 dark:border-teal-800",
      cyan: "border-cyan-200 dark:border-cyan-800",
    }
    return borders[color] || "border-gray-200 dark:border-gray-800"
  }

  const getIconBg = (color: string) => {
    const backgrounds: Record<string, string> = {
      blue: "bg-blue-100 dark:bg-blue-900/30",
      purple: "bg-purple-100 dark:bg-purple-900/30",
      green: "bg-green-100 dark:bg-green-900/30",
      orange: "bg-orange-100 dark:bg-orange-900/30",
      pink: "bg-pink-100 dark:bg-pink-900/30",
      indigo: "bg-indigo-100 dark:bg-indigo-900/30",
      red: "bg-red-100 dark:bg-red-900/30",
      teal: "bg-teal-100 dark:bg-teal-900/30",
      cyan: "bg-cyan-100 dark:bg-cyan-900/30",
    }
    return backgrounds[color] || "bg-gray-100 dark:bg-gray-800"
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900" id="solutions">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-600 dark:text-teal-400">
              What We Offer
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
              Our Comprehensive Solutions
            </h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
              Transforming healthcare delivery with our suite of AI-powered tools and services
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className={`rounded-xl border ${getBorderColor(solution.color)} bg-gradient-to-br ${getGradient(solution.color)} p-4 sm:p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:shadow-gray-800/10`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`${getIconBg(solution.color)} rounded-lg p-2 sm:p-3 w-fit mb-3 sm:mb-4`}>{solution.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 dark:text-white">{solution.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
