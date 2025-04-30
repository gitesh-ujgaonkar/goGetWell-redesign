"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small healthcare providers",
      monthlyPrice: "$149",
      annualPrice: "$99",
      features: [
        { name: "AI-powered digital store", included: true },
        { name: "Basic patient support", included: true },
        { name: "Up to 50 patient inquiries/month", included: true },
        { name: "Email support", included: true },
        { name: "Basic analytics", included: true },
        { name: "Multilingual support (3 languages)", included: false },
        { name: "Custom branding", included: false },
        { name: "API access", included: false },
        { name: "Priority support", included: false },
        { name: "Advanced analytics & reporting", included: false },
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing medical practices",
      monthlyPrice: "$399",
      annualPrice: "$299",
      features: [
        { name: "AI-powered digital store", included: true },
        { name: "Advanced intelligent agents", included: true },
        { name: "Up to 500 patient inquiries/month", included: true },
        { name: "Priority email & chat support", included: true },
        { name: "Advanced analytics & reporting", included: true },
        { name: "Multilingual support (10 languages)", included: true },
        { name: "Custom branding", included: true },
        { name: "API access", included: false },
        { name: "Dedicated account manager", included: false },
        { name: "White-labeling options", included: false },
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large healthcare networks",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      features: [
        { name: "AI-powered digital store", included: true },
        { name: "Advanced intelligent agents", included: true },
        { name: "Unlimited patient inquiries", included: true },
        { name: "24/7 priority support", included: true },
        { name: "Advanced analytics & reporting", included: true },
        { name: "Multilingual support (20+ languages)", included: true },
        { name: "Custom branding", included: true },
        { name: "API access", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "White-labeling options", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900" id="pricing">
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
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that's right for your healthcare business
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-6">
            <span
              className={`text-sm ${!annual ? "text-teal-600 dark:text-teal-400 font-medium" : "text-gray-500 dark:text-gray-400"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
            >
              <span className="sr-only">Toggle annual billing</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  annual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm ${annual ? "text-teal-600 dark:text-teal-400 font-medium" : "text-gray-500 dark:text-gray-400"}`}
            >
              Annual{" "}
              <span className="bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 text-xs px-2 py-0.5 rounded-full ml-1">
                Save 33%
              </span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card
                className={`flex flex-col h-full ${
                  plan.popular
                    ? "border-teal-600 dark:border-teal-500 shadow-lg relative"
                    : "border-gray-200 dark:border-gray-800"
                } dark:bg-gray-900`}
              >
                {plan.popular && (
                  <div className="bg-teal-600 dark:bg-teal-500 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl dark:text-white">{plan.name}</CardTitle>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold tracking-tight dark:text-white">
                      {annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {plan.annualPrice !== "Custom" && (
                      <span className="ml-1 text-gray-500 dark:text-gray-400">/month</span>
                    )}
                  </div>
                  <CardDescription className="mt-2 dark:text-gray-400">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 dark:text-gray-600 mr-2 flex-shrink-0" />
                        )}
                        <span
                          className={`${
                            feature.included ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-600"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular ? "bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700" : ""
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-500 dark:text-gray-400">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
