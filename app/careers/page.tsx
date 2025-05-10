import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-rose-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Join Our Team</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Build your career with us and work on exciting projects that make a real difference.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#open-positions">
                  <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                    View Open Positions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/7.jpg"
                alt="Team working together"
                width={550}
                height={550}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Join TechCraft?</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                We offer a dynamic work environment where you can grow professionally and personally.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
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
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="M4.93 4.93l2.83 2.83" />
                  <path d="M16.24 16.24l2.83 2.83" />
                  <path d="M2 12h4" />
                  <path d="M18 12h4" />
                  <path d="M4.93 19.07l2.83-2.83" />
                  <path d="M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Innovative Projects</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Work on cutting-edge technologies and challenging projects that push the boundaries of what's possible.
              </p>
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Collaborative Culture</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Join a team of passionate professionals who support each other and work together to achieve common
                goals.
              </p>
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
                  <path d="M8 18L12 22L16 18" />
                  <path d="M12 2V22" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Growth Opportunities</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Continuous learning, professional development, and clear career advancement paths for all team members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Benefits</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                We take care of our team with competitive benefits and perks.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
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
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <h3 className="text-lg font-bold">Health Insurance</h3>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Comprehensive health, dental, and vision coverage for you and your family.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
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
                <rect height="20" rx="2" ry="2" width="16" x="4" y="2" />
                <path d="M16 2v20" />
                <path d="M4 6h12" />
                <path d="M4 10h12" />
                <path d="M4 14h12" />
                <path d="M4 18h12" />
              </svg>
              <h3 className="text-lg font-bold">Flexible Work</h3>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Remote work options and flexible hours to maintain a healthy work-life balance.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
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
                <path d="M12 2v20" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <h3 className="text-lg font-bold">Competitive Salary</h3>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Above-market compensation packages with performance-based bonuses.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
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
                <path d="M2 3h20" />
                <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                <path d="m7 21 5-5 5 5" />
              </svg>
              <h3 className="text-lg font-bold">Professional Development</h3>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Learning budget, conference attendance, and ongoing training opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Open Positions</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                Join our team and help us build amazing tech solutions for businesses.
              </p>
            </div>
          </div>
          <div className="grid gap-6 mt-12">
            {/* Job Listing 1 */}
            <div className="rounded-lg border p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">Senior Full Stack Developer</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Briefcase className="mr-1 h-4 w-4" />
                      Full-time
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="mr-1 h-4 w-4" />
                      Remote / San Francisco, CA
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1 h-4 w-4" />
                      Posted 2 days ago
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <Link href="/careers/senior-full-stack-developer">
                    <Button className="bg-rose-600 hover:bg-rose-700">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-500 dark:text-gray-400">
                  We're looking for an experienced Full Stack Developer to join our team and help build innovative web
                  and mobile applications for our clients.
                </p>
              </div>
            </div>

            {/* Job Listing 2 */}
            <div className="rounded-lg border p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">UX/UI Designer</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Briefcase className="mr-1 h-4 w-4" />
                      Full-time
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="mr-1 h-4 w-4" />
                      Remote / New York, NY
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1 h-4 w-4" />
                      Posted 1 week ago
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <Link href="/careers/ux-ui-designer">
                    <Button className="bg-rose-600 hover:bg-rose-700">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-500 dark:text-gray-400">
                  We're seeking a talented UX/UI Designer to create beautiful, intuitive interfaces for our web and
                  mobile applications.
                </p>
              </div>
            </div>

            {/* Job Listing 3 */}
            <div className="rounded-lg border p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">Mobile Developer (iOS/Android)</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Briefcase className="mr-1 h-4 w-4" />
                      Full-time
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="mr-1 h-4 w-4" />
                      Remote / Austin, TX
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1 h-4 w-4" />
                      Posted 3 days ago
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <Link href="/careers/mobile-developer">
                    <Button className="bg-rose-600 hover:bg-rose-700">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-500 dark:text-gray-400">
                  We're looking for a skilled Mobile Developer with experience in both iOS and Android development to
                  join our growing team.
                </p>
              </div>
            </div>

            {/* Job Listing 4 */}
            <div className="rounded-lg border p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">Project Manager</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Briefcase className="mr-1 h-4 w-4" />
                      Full-time
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="mr-1 h-4 w-4" />
                      Remote / Chicago, IL
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1 h-4 w-4" />
                      Posted 5 days ago
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <Link href="/careers/project-manager">
                    <Button className="bg-rose-600 hover:bg-rose-700">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-500 dark:text-gray-400">
                  We're seeking an experienced Project Manager to lead our development teams and ensure successful
                  project delivery.
                </p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Don't See the Right Fit?</h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep it on
                file.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                  Submit Your Resume
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
