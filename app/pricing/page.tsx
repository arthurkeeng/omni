import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-rose-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Transparent Pricing</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Choose the plan that works best for your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Plan */}
            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Starter</h3>
                <p className="text-gray-500 dark:text-gray-400">Perfect for small businesses just getting started.</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-4xl font-bold"> > $100</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Starting price for basic projects</p>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Basic web or mobile application</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Up to 5 core features</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Responsive design</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Basic analytics integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>30 days of support</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-2 border-rose-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-rose-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Professional</h3>
                <p className="text-gray-500 dark:text-gray-400">Ideal for growing businesses with specific needs.</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-4xl font-bold">>$1000</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Starting price for professional projects</p>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Advanced web or mobile application</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Up to 15 core features</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Responsive design with animations</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Advanced analytics and reporting</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>User authentication system</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>90 days of support</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Custom solutions for large businesses with complex requirements.
                </p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-4xl font-bold">Custom</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Tailored pricing for enterprise projects</p>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Fully custom solution development</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Unlimited features</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Advanced UI/UX design</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Custom integrations with existing systems</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Dedicated project manager</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Priority support and maintenance</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>12 months of support</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                Find answers to common questions about our pricing and services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How do you determine the cost of a project?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We consider factors such as project complexity, required features, timeline, and ongoing support needs.
                We provide detailed estimates after an initial consultation.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer ongoing maintenance?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, we offer various maintenance packages to ensure your application remains secure, up-to-date, and
                functioning optimally after launch.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What is your payment structure?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We typically work with a 50% upfront payment and the remaining 50% upon project completion. For larger
                projects, we can arrange milestone-based payments.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How long does a typical project take?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Project timelines vary based on complexity. Simple applications may take 4-8 weeks, while more complex
                solutions can take 3-6 months or more.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Discuss Your Project?
              </h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a free consultation and custom quote tailored to your specific needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                  Get Your Free Quote
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
