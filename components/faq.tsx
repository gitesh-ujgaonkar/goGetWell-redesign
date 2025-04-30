"use client"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What is GoGetWell AI?",
      answer:
        "GoGetWell AI is a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. We provide intelligent digital solutions that help healthcare providers modernize their operations, attract more patients, and deliver seamless, personalized care across borders.",
    },
    {
      question: "How does the AI-powered digital store work?",
      answer:
        "Our AI-powered digital store creates a personalized online presence for healthcare providers. It features automated patient interactions, intelligent appointment scheduling, and personalized content delivery. The platform learns from each interaction to continuously improve the patient experience and conversion rates.",
    },
    {
      question: "Can GoGetWell AI support multiple languages?",
      answer:
        "Yes, our platform offers comprehensive multilingual support to break language barriers in healthcare. This enables healthcare providers to communicate effectively with patients from different countries and cultural backgrounds, making medical tourism more accessible globally.",
    },
    {
      question: "How secure is patient data on your platform?",
      answer:
        "Patient data security is our top priority. GoGetWell AI is built with healthcare data security in mind, ensuring HIPAA compliance and patient privacy. We implement industry-leading encryption, secure data storage, and strict access controls to protect sensitive medical information.",
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer:
        "We offer comprehensive post-implementation support including 24/7 technical assistance, regular platform updates, training for your staff, and continuous optimization of your digital presence. Our team is always available to help you maximize the benefits of our platform.",
    },
    {
      question: "How does the lead generation system work?",
      answer:
        "Our data-driven lead generation system uses advanced algorithms to identify and engage potential patients. It analyzes user behavior, personalizes communication, and implements targeted marketing strategies to attract qualified leads. The system continuously optimizes based on performance data to improve conversion rates.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-800" id="faq">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-600 dark:text-teal-400">
              Support
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
              Find answers to common questions about GoGetWell AI and our services
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="text-left font-medium text-gray-900 dark:text-white py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
