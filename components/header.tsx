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
    <>
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
      </header>

      {/* Independent Mobile Menu (overlay) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-black flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-gray-800">
              <span className="text-xl font-bold text-teal-500">GoGetWell AI</span>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleMenu} 
                className="text-white"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="flex-1 flex flex-col justify-between p-6 overflow-y-auto">
              <nav className="space-y-6 pt-6">
                <Link
                  href="#features"
                  className="block text-2xl font-medium text-white hover:text-teal-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#about"
                  className="block text-2xl font-medium text-white hover:text-teal-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="#solutions"
                  className="block text-2xl font-medium text-white hover:text-teal-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="#testimonials"
                  className="block text-2xl font-medium text-white hover:text-teal-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="#faq"
                  className="block text-2xl font-medium text-white hover:text-teal-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="#contact"
                  className="block text-2xl font-medium text-white hover:text-teal-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
              
              <div className="py-6 space-y-4">
                <Button variant="outline" className="w-full h-14 text-xl text-white border-gray-700 hover:bg-gray-800">
                  Log In
                </Button>
                <Button className="w-full h-14 text-xl bg-teal-600 hover:bg-teal-700 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
