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
          {/* Website Packages */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Website Packages</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                Modern, Fast & Tailored for Your Business Needs
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Web Starter */}
            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Web Starter</h3>
                <p className="text-gray-500 dark:text-gray-400">Perfect for small businesses getting started online.</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-4xl font-bold">₦280,000</div>
                <div className="text-2xl font-semibold text-gray-600">$200</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Complete website package</p>
              </div>
              <ul className="mt-6 space-y-2 flex-1">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>1–3 responsive pages</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Contact form</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>WhatsApp integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Hosting & domain setup</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Google Maps / Social links</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Delivery: 5–7 days</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>1 revision cycle</span>
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

            {/* Web Business */}
            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-2 border-rose-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-rose-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Web Business</h3>
                <p className="text-gray-500 dark:text-gray-400">Ideal for growing businesses with specific needs.</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-4xl font-bold">₦550,000</div>
                <div className="text-2xl font-semibold text-gray-600">$400</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Advanced business website</p>
              </div>
              <ul className="mt-6 space-y-2 flex-1">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>4–8 responsive pages</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Blog or product listing</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Admin dashboard (basic)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Payment gateway integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>WhatsApp/email communication setup</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>SEO-friendly structure</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Delivery: 2–3 weeks</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>2 revision cycles</span>
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

            {/* Web Premium */}
            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Web Premium</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Custom solutions for enterprises with complex requirements.
                </p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-4xl font-bold">₦1,000,000+</div>
                <div className="text-2xl font-semibold text-gray-600">$1,000+</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Fully custom enterprise solution</p>
              </div>
              <ul className="mt-6 space-y-2 flex-1">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Unlimited custom pages</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Authentication, user profiles</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Admin + customer dashboards</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>API integrations</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Analytics integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Advanced SEO setup</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Delivery: 3–5 weeks</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>3+ revision cycles</span>
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

          {/* Mobile App Packages */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mobile App Packages</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                Native and cross-platform mobile solutions for your business
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* App Starter */}
            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">App Starter</h3>
                <p className="text-gray-500 dark:text-gray-400">Single-platform mobile app for your business.</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-4xl font-bold">₦600,000</div>
                <div className="text-2xl font-semibold text-gray-600">$450</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Android or iOS app</p>
              </div>
              <ul className="mt-6 space-y-2 flex-1">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Single-platform app (Android or iOS)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Clean UI + navigation</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Local data storage</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>WhatsApp deep-link</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Delivery: 2 weeks</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>1 revision cycle</span>
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

            {/* App Business */}
            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-2 border-rose-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-rose-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">App Business</h3>
                <p className="text-gray-500 dark:text-gray-400">Cross-platform solution for maximum reach.</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-4xl font-bold">₦1,200,000</div>
                <div className="text-2xl font-semibold text-gray-600">$1,000</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">iOS + Android app</p>
              </div>
              <ul className="mt-6 space-y-2 flex-1">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Cross-platform (iOS + Android)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Authentication + role-based access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Payment gateway integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Admin dashboard included</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Push notifications</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Delivery: 3–4 weeks</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>2 revision cycles</span>
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

            {/* App Premium */}
            <div className="flex flex-col p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">App Premium</h3>
                <p className="text-gray-500 dark:text-gray-400">Advanced mobile solution with premium features.</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-4xl font-bold">₦2,000,000+</div>
                <div className="text-2xl font-semibold text-gray-600">$2,000+</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Premium mobile solution</p>
              </div>
              <ul className="mt-6 space-y-2 flex-1">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Advanced UI/UX with animations</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>API integrations (custom or 3rd-party)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Real-time features (chat, live orders, etc.)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Analytics, error logging</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Maintenance for 1 month</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>Delivery: 4–6 weeks</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-rose-600 mr-2" />
                  <span>3+ revision cycles</span>
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

          {/* Add-Ons Section */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Add-Ons (Optional)</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                Enhance your project with these additional services
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-gray-800">
                <svg
                  className="h-8 w-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" x2="9.01" y1="9" y2="9" />
                  <line x1="15" x2="15.01" y1="9" y2="9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Branding Package</h3>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">Logo design and brand guide</p>
              <div className="text-xl font-bold">₦75,000</div>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="p-3 rounded-full bg-rose-100 dark:bg-gray-800">
                <svg
                  className="h-8 w-8 text-rose-600 dark:text-rose-400"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <polyline points="10,9 9,9 8,9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Pitch Deck Design</h3>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">Professional presentation design</p>
              <div className="text-xl font-bold">₦50,000</div>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="p-3 rounded-full bg-amber-100 dark:bg-gray-800">
                <svg
                  className="h-8 w-8 text-amber-600 dark:text-amber-400"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">1-Year Maintenance</h3>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">Ongoing support and updates</p>
              <div className="text-xl font-bold">₦150,000</div>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="p-3 rounded-full bg-green-100 dark:bg-gray-800">
                <svg
                  className="h-8 w-8 text-green-600 dark:text-green-400"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Blog & SEO Content</h3>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Content creation and SEO optimization
              </p>
              <div className="text-xl font-bold">₦100,000+</div>
            </div>
          </div>

          {/* Payment Terms Section */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Payment Terms</h2>
                <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                  Flexible payment options to suit your needs
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold">Starter & Business</h3>
                <p className="text-gray-500 dark:text-gray-400">70% upfront, 30% on delivery</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold">Premium</h3>
                <p className="text-gray-500 dark:text-gray-400">60% upfront, 20% mid-project, 20% on final delivery</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold">Payment Methods</h3>
                <p className="text-gray-500 dark:text-gray-400">Bank transfer, Paystack, or Stripe</p>
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
              <h3 className="text-xl font-bold">What's included in the revision cycles?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Each revision cycle includes feedback implementation, design adjustments, and content updates based on
                your requirements. Additional revisions beyond the included cycles can be arranged.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you provide hosting and domain setup?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, our Web Starter package includes hosting and domain setup. For other packages, we can assist with
                hosting recommendations and setup as needed.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What payment methods do you accept?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We accept payments via bank transfer, Paystack, and Stripe. Payment terms vary by package: Starter &
                Business require 70% upfront, while Premium packages are split across project milestones.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I upgrade my package during development?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, you can upgrade your package during development. We'll adjust the timeline and pricing accordingly,
                and any additional features will be clearly outlined before implementation.
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
