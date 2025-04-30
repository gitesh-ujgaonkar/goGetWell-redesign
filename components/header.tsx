"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-mobile"
import { ThemeToggle } from "./theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Close menu when switching to desktop view
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false)
    }
  }, [isMobile])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:border-gray-800">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <motion.span
              className="text-xl font-bold text-teal-600 dark:text-teal-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              GoGetWell AI
            </motion.span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#solutions"
            className="text-sm font-medium hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-300">
            Log In
          </Button>
          <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Background Blur Layer - Full Screen Dark Overlay */}
            <motion.div 
              className="md:hidden fixed inset-0 z-40 bg-black/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Menu Content */}
            <motion.div
              className="md:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-gray-950/95 p-6 flex flex-col gap-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col gap-4">
                <Link
                  href="#features"
                  className="text-lg font-medium text-white hover:text-teal-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#about"
                  className="text-lg font-medium text-white hover:text-teal-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="#solutions"
                  className="text-lg font-medium text-white hover:text-teal-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="#testimonials"
                  className="text-lg font-medium text-white hover:text-teal-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="#faq"
                  className="text-lg font-medium text-white hover:text-teal-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="#contact"
                  className="text-lg font-medium text-white hover:text-teal-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
              <div className="flex flex-col gap-3 mt-auto">
                <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
                  Log In
                </Button>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Get Started</Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
