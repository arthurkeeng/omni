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
                  src="/p1.png"
                  alt="Project thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">Healthcare Booking App</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A comprehensive healthcare booking application for that helps users make appointment with varied physicians.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Next</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Appwrite</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Web App</span>
                </div>
                <Link
                  href="https://omeeneehealthcare.vercel.app"
                  target="_blank"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  View 
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/p2.png"
                  alt="Project thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">E-Vehicle Platform</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  An e-commerce marketplace for all things cars.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Next.js</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Gemini </span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Web App</span>
                </div>
                <Link
                  href="https://omeeneecars.vercel.app"
                  target="_blank"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  View
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/p3.png"
                  alt="Project thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">Salon Booking App</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A Web tool for easing salon appointments and booking
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Next.js</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Clerk</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Web App</span>
                </div>
                <Link
                  href="https://glamore.vercel.app"
                  target="_blank"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  View
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Project 4 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/p4.png"
                  alt="Project thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">Learning Management System</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  An School Management system for day to day run of educational establishments
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Next.js</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Node.js</span>
                </div>
                <Link
                  href="https://omeeneeschoolsystem.vercel.app/admin"
                  target="_blank"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  View
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Project 5 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/p5.png"
                  alt="Project thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">Business Conferencing Tool</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A Platform for hosting meetings and calls
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Next.js</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Web App</span>
                </div>
                <Link
                  href="https://omeeneeconferencing.vercel.app/"
                   target="_blank"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  View
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Project 6 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/p8.jpg"
                  alt="Project thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">Business Conferencing Tool</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A Conversational App for getting all the things you need
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Next.js</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">Web App</span>
                </div>
                <Link
                  href="https://errand-boy-ten.vercel.app/"
                   target="_blank"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  View
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
