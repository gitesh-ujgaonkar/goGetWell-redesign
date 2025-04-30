"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"
import { motion } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "GoGetWell AI has transformed our medical tourism business. The AI-powered platform has increased our patient inquiries by 200% in just three months, and the conversion rate has improved significantly.",
      author: "Dr. Sarah Johnson",
      role: "Medical Director, Global Health Solutions",
      company: "Global Health Solutions",
    },
    {
      quote:
        "The intelligent agents have made patient communication seamless. We're able to provide 24/7 support without increasing our staff overhead. Our patients love the immediate responses and personalized care.",
      author: "Michael Chen",
      role: "CEO, MedTravel Connect",
      company: "MedTravel Connect",
    },
    {
      quote:
        "Our digital storefront looks professional and has significantly improved our conversion rates. The platform is intuitive and easy to customize, allowing us to showcase our specialized treatments to a global audience.",
      author: "Priya Sharma",
      role: "Marketing Manager, Wellness International",
      company: "Wellness International",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800" id="testimonials">
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
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from healthcare providers who have transformed their businesses with GoGetWell AI
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex"
            >
              <Card className="flex flex-col h-full overflow-hidden border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <QuoteIcon className="h-8 w-8 text-teal-600 dark:text-teal-400 opacity-70" />
                  <p className="text-gray-700 dark:text-gray-300 italic flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="rounded-full overflow-hidden h-12 w-12 border border-gray-200 dark:border-gray-700 flex-shrink-0">
                      <Image
                        src="/empty-dp.png"
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold dark:text-white truncate">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
