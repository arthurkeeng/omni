import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Laptop, Smartphone, Server, Lightbulb, Headphones } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-rose-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Comprehensive tech solutions tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {/* Web Applications */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block p-3 rounded-full bg-purple-100 dark:bg-gray-800 mb-2">
                    <Laptop className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Web Applications</h2>
                  <p className="text-gray-500 md:text-lg dark:text-gray-400">
                    Custom web applications that are responsive, scalable, and tailored to your business needs.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-rose-600" />
                      <span>Responsive design for all devices</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-rose-600" />
                      <span>Progressive Web Apps (PWAs)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-rose-600" />
                      <span>E-commerce solutions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-rose-600" />
                      <span>Content Management Systems (CMS)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-rose-600" />
                      <span>Custom dashboards and admin panels</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link href="/contact">
                      <Button className="bg-rose-600 hover:bg-rose-700">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/eb.jpg"
                  alt="Web application example"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Mobile Applications */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 mx-auto lg:mr-auto">
                <Image
                  src="/mob.jpg"
                  alt="Mobile application example"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block p-3 rounded-full bg-rose-100 dark:bg-gray-800 mb-2">
                    <Smartphone className="h-8 w-8 text-rose-600 dark:text-rose-400" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mobile Applications</h2>
                  <p className="text-gray-500 md:text-lg dark:text-gray-400">
                    Native and cross-platform mobile apps for iOS and Android that engage your customers.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-rose-600" />
                      <span>Native iOS and Android development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-rose-600" />
                      <span>Cross-platform solutions (React Native, Flutter)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-rose-600" />
                      <span>Mobile e-commerce</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-rose-600" />
                      <span>Location-based services</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-rose-600" />
                      <span>Push notifications and real-time updates</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link href="/contact">
                      <Button className="bg-rose-600 hover:bg-rose-700">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Applications */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block p-3 rounded-full bg-amber-100 dark:bg-gray-800 mb-2">
                    <Code className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Desktop Applications</h2>
                  <p className="text-gray-500 md:text-lg dark:text-gray-400">
                    Powerful desktop software that streamlines your business operations and increases productivity.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-rose-600" />
                      <span>Cross-platform desktop applications</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-rose-600" />
                      <span>Business process automation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-rose-600" />
                      <span>Data analysis and visualization tools</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-rose-600" />
                      <span>Custom enterprise software</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-rose-600" />
                      <span>Legacy system modernization</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link href="/contact">
                      <Button className="bg-rose-600 hover:bg-rose-700">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/desk.jpg"
                  alt="Desktop application example"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Additional Services</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                Beyond our core offerings, we provide a range of specialized services to meet your tech needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="p-3 rounded-full bg-green-100 dark:bg-gray-800">
                <Server className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Cloud Solutions</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Secure, scalable cloud infrastructure and migration services to optimize your operations.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-gray-800">
                <Lightbulb className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Tech Consulting</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Strategic technology advice to help you make informed decisions about your digital future.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-gray-800">
                <Headphones className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold">Support & Maintenance</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Ongoing technical support and maintenance to keep your applications running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-rose-600 dark:bg-rose-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
      </section>
    </div>
  )
}
