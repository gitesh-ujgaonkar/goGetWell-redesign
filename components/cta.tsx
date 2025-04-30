"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-600 to-teal-700 dark:from-teal-800 dark:to-teal-900">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Ready to Transform Your Healthcare Business?
            </h2>
            <p className="max-w-[900px] text-teal-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join hundreds of healthcare providers who are revolutionizing medical tourism with GoGetWell AI
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 dark:hover:bg-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-teal-700 dark:hover:bg-teal-800"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="text-teal-100 text-sm mt-6">No credit card required. 14-day free trial.</p>
        </motion.div>
      </div>
    </section>
  )
}
