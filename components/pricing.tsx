"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, CreditCard, ShieldCheck, Clock, HelpCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("annually")

  const plans = [
    {
      name: "Basic",
      description: "Limited access to essential features for new medical tourism providers",
      monthlyPrice: "$149",
      annualPrice: "$99",
      features: [
        "Digital store setup",
        "Essential AI tools",
        "Limited patient inquiries",
        "Email support",
        "Basic analytics dashboard"
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      description: "Full access to all platform features for established providers",
      monthlyPrice: "$399",
      annualPrice: "$299",
      features: [
        "Everything in Basic",
        "Unlimited digital stores",
        "Advanced AI agent support",
        "Higher patient inquiry limits",
        "Priority support channels",
        "Advanced analytics & reporting",
        "Multilingual support"
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Custom plans for larger medical tourism operators",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      features: [
        "Everything in Premium",
        "Custom platform integration",
        "Dedicated account manager",
        "White-labeling options",
        "API access",
        "24/7 priority support",
        "Custom feature development"
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const policyItems = [
    {
      id: "payment",
      title: "Payment Terms",
      content: (
        <div className="space-y-4">
          <div className="flex gap-3">
            <CreditCard className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium">Billing Information</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">You must provide complete and accurate billing information, including a valid payment method.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Clock className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium">Subscription Renewals</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">All subscription fees are recurring (monthly or annually) and will automatically renew unless cancelled prior to renewal.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "changes",
      title: "Price Changes & Refunds",
      content: (
        <div className="space-y-4">
          <div className="flex gap-3">
            <Clock className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium">Price Changes</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">We provide at least 30 days notice before any price changes take effect.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <ShieldCheck className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium">Refund Policy</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">All payments are non-refundable except where required by law in cases of service unavailability.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "service",
      title: "Service Terms",
      content: (
        <div className="space-y-4">
          <div className="flex gap-3">
            <CreditCard className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium">Service Credits</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Credits must be purchased in advance and are subject to GoGetWell AI's Service Credit Terms.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <HelpCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium">Service Discontinuation</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">We may discontinue services with reasonable notice. You'll be refunded for any unused portion of paid services.</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const handleTabChange = (value: string) => {
    setBillingPeriod(value as "monthly" | "annually")
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" id="pricing">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-600 dark:text-teal-400">
            Transparent Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
            Choose Your Plan
          </h2>
          <p className="max-w-[800px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
            Flexible pricing options designed for the medical tourism industry
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center space-x-4 mt-4">
            <Tabs value={billingPeriod} onValueChange={handleTabChange} className="w-56">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annually">
                  <span>Annual</span>
                  <span className="ml-2 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 text-xs px-2 py-0.5 rounded-full">
                    33% off
                  </span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
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
                className={`h-full overflow-hidden ${
                  plan.popular
                    ? "border-teal-600 dark:border-teal-500 shadow-xl relative"
                    : "border-gray-200 dark:border-gray-800 shadow-md"
                } dark:bg-gray-900`}
              >
                {plan.popular && (
                  <div className="bg-teal-600 dark:bg-teal-500 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pb-0">
                  <CardTitle className="text-2xl dark:text-white">{plan.name}</CardTitle>
                  <CardDescription className="mt-1 text-sm dark:text-gray-400">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <span className="text-4xl font-bold dark:text-white">
                      {billingPeriod === "annually" ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {plan.annualPrice !== "Custom" && (
                      <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
                    )}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular 
                        ? "bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700 text-white" 
                        : plan.name === "Enterprise"
                        ? "bg-white text-teal-600 border border-teal-600 hover:bg-teal-50 dark:bg-transparent dark:text-teal-400 dark:border-teal-400 dark:hover:bg-teal-900/30"
                        : ""
                    }`}
                  >
                    {plan.cta}
                    {plan.name === "Enterprise" && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Policy accordion */}
        <motion.div
          className="mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-2 dark:text-white">Pricing Policy</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our commitment to transparent and fair pricing
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {policyItems.map((item) => (
              <AccordionItem value={item.id} key={item.id}>
                <AccordionTrigger className="text-left font-medium">{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              For questions about our pricing policy or services, please contact us at{' '}
              <a href="mailto:hello@gogetwell.ai" className="text-teal-600 dark:text-teal-400 hover:underline">
                hello@gogetwell.ai
              </a>
            </p>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <ShieldCheck className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
              <span className="text-sm">Secure Payments</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
              <span className="text-sm">14-Day Free Trial</span>
            </div>
            <div className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
