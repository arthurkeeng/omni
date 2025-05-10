import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-rose-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Portfolio</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore our successful projects and see how we've helped businesses achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">HealthTrack Mobile App</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A comprehensive health tracking mobile application for iOS and Android that helps users monitor their
                  fitness goals.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">React Native</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Firebase</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Mobile App</span>
                </div>
                <Link
                  href="/portfolio/health-track"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  View Case Study
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">EcoCommerce Platform</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  An e-commerce platform for sustainable products with advanced filtering and recommendation features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Next.js</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Stripe</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Web App</span>
                </div>
                <Link
                  href="/portfolio/eco-commerce"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  View Case Study
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">FinTrack Desktop App</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A comprehensive financial management desktop application for small businesses with reporting and
                  forecasting.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Electron</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">React</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Desktop App</span>
                </div>
                <Link
                  href="/portfolio/fin-track"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  View Case Study
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Project 4 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">SmartHome Control System</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  An IoT-based smart home control system with mobile and web interfaces for remote monitoring and
                  control.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">IoT</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">React</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Node.js</span>
                </div>
                <Link
                  href="/portfolio/smart-home"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  View Case Study
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Project 5 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">EdTech Learning Platform</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A comprehensive online learning platform with course management, video streaming, and progress
                  tracking.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Vue.js</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Django</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Web App</span>
                </div>
                <Link
                  href="/portfolio/edtech-platform"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  View Case Study
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Project 6 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">Logistics Management System</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  An end-to-end logistics management system with real-time tracking, inventory management, and
                  reporting.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Angular</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">.NET</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Enterprise</span>
                </div>
                <Link
                  href="/portfolio/logistics-system"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  View Case Study
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-rose-600 dark:bg-rose-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Build Your Next Project?
              </h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's create something amazing together that drives your business forward.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
