import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-rose-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Omeenee</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We're a team of passionate technologists dedicated to building powerful solutions that drive business
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="text-gray-500 md:text-lg dark:text-gray-400">
                  Founded in 2025, Omeenee began with a simple mission: to help businesses leverage technology to
                  achieve their goals. What started as a small team of three developers has grown into a full-service
                  tech company with expertise across web, mobile, and desktop application development.
                </p>
                <p className="text-gray-500 md:text-lg dark:text-gray-400">
                  Over the years, we've partnered with businesses of all sizes, from startups to enterprises, helping
                  them transform their operations, reach new customers, and stay ahead in an increasingly digital world.
                </p>
                <p className="text-gray-500 md:text-lg dark:text-gray-400">
                  Today, our team of 50+ professionals continues to push the boundaries of what's possible, delivering
                  innovative solutions that make a real difference for our clients.
                </p>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="Our team working together"
                width={550}
                height={550}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission & Values</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                We're guided by a clear mission and a set of core values that inform everything we do.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-gray-500 dark:text-gray-400">
                To empower businesses with custom technology solutions that drive growth, efficiency, and innovation.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Our Values</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-6 w-6 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold">Excellence</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      We strive for excellence in everything we do, from code quality to client communication.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-6 w-6 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold">Innovation</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      We embrace new technologies and approaches to solve complex problems in creative ways.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-6 w-6 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold">Collaboration</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      We believe in the power of teamwork, both within our company and with our clients.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-6 w-6 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold">Integrity</h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      We operate with honesty, transparency, and ethical business practices in all our dealings.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                The talented individuals who make our company great.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            <div className="flex flex-col items-center space-y-2">
              <div className="h-40 w-40 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Team member"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Keeng Arthur</h3>
              <p className="text-gray-500 dark:text-gray-400">CEO & Founder</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-40 w-40 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Team member"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Favor Charles</h3>
              <p className="text-gray-500 dark:text-gray-400">Frontend Developer</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-40 w-40 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Team member"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">David Rodriguez</h3>
              <p className="text-gray-500 dark:text-gray-400">Lead Developer</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-40 w-40 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Team member"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Emily Chen</h3>
              <p className="text-gray-500 dark:text-gray-400">UX/UI Designer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
