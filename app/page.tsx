import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Code, Laptop, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-3">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-rose-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Building Powerful Tech Solutions for Your Business
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  We create custom web, mobile, and desktop applications that transform your business operations and
                  drive growth.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/1.jpg"
                alt="Tech solutions illustration"
                width={550}
                height={550}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer a comprehensive suite of technology solutions to help your business thrive in the digital age.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-gray-800">
                <Laptop className="h-10 w-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold">Web Applications</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Custom web applications that are responsive, scalable, and tailored to your business needs.
              </p>
              <Link href="/services/web-applications" className="text-rose-600 hover:underline font-medium">
                Learn More
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="p-3 rounded-full bg-rose-100 dark:bg-gray-800">
                <Smartphone className="h-10 w-10 text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="text-xl font-bold">Mobile Applications</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Native and cross-platform mobile apps for iOS and Android that engage your customers.
              </p>
              <Link href="/services/mobile-applications" className="text-rose-600 hover:underline font-medium">
                Learn More
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="p-3 rounded-full bg-amber-100 dark:bg-gray-800">
                <Code className="h-10 w-10 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold">Desktop Applications</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Powerful desktop software that streamlines your business operations and increases productivity.
              </p>
              <Link href="/services/desktop-applications" className="text-rose-600 hover:underline font-medium">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-rose-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Expert Team</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our team of experienced developers, designers, and project managers ensure your project is delivered
                  to the highest standards.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-rose-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Custom Solutions</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We don't believe in one-size-fits-all. Every solution we build is tailored to your specific business
                  requirements.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-rose-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Cutting-Edge Technology</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We stay at the forefront of technological advancements to provide you with modern, future-proof
                  solutions.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-rose-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Ongoing Support</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our relationship doesn't end at deployment. We provide continuous support and maintenance for all our
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <p className="text-gray-500 dark:text-gray-400 italic">
                "The team delivered an exceptional web application that has transformed our customer service operations.
                Their attention to detail and technical expertise is unmatched."
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/2.jpg"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              

              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">CEO, TechSolutions Inc.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
            <p className="text-gray-500 dark:text-gray-400 italic">
              "The mobile app they developed for us has received outstanding feedback from our users. Their
              collaborative approach made the entire process smooth and efficient."
            </p>
            <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/3.jpg"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              <div>
                <p className="font-medium">Michael Chen</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">CTO, InnovateX</p>
              </div>
            </div>
          </div>
        </div>
    </div>
      </section >

    {/* CTA Section */ }
    < section className = "w-full py-12 md:py-24 lg:py-32 bg-rose-600 dark:bg-rose-800" >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's discuss how our tech solutions can help you achieve your business goals.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      </section >
    </div >
  )
}
