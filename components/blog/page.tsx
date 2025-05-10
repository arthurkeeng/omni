import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-rose-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Blog</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Insights, tips, and updates from our team of tech experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Featured blog post"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">May 7, 2025</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                  <span className="text-sm font-medium text-rose-600">Technology</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  The Future of Web Development: Trends to Watch in 2025
                </h2>
                <p className="text-gray-500 md:text-lg dark:text-gray-400">
                  Explore the cutting-edge technologies and methodologies that are shaping the future of web development
                  in 2025 and beyond.
                </p>
              </div>
              <div>
                <Link href="/blog/future-web-development">
                  <Button className="bg-rose-600 hover:bg-rose-700">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest Articles</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                Stay up-to-date with the latest insights from our tech experts.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Blog Post 1 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">April 28, 2025</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                  <span className="text-sm font-medium text-rose-600">Mobile Development</span>
                </div>
                <h3 className="text-xl font-bold">Building Cross-Platform Mobile Apps: React Native vs. Flutter</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A comprehensive comparison of two leading frameworks for cross-platform mobile app development.
                </p>
                <Link
                  href="/blog/react-native-vs-flutter"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">April 15, 2025</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                  <span className="text-sm font-medium text-rose-600">Web Development</span>
                </div>
                <h3 className="text-xl font-bold">Optimizing Web Performance: Strategies for Faster Loading Times</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Learn how to improve your website's performance and provide a better user experience.
                </p>
                <Link
                  href="/blog/web-performance-optimization"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">April 3, 2025</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                  <span className="text-sm font-medium text-rose-600">AI & Machine Learning</span>
                </div>
                <h3 className="text-xl font-bold">Integrating AI into Your Business Applications: A Practical Guide</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Discover how to leverage artificial intelligence to enhance your business applications.
                </p>
                <Link
                  href="/blog/ai-integration-guide"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">March 22, 2025</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                  <span className="text-sm font-medium text-rose-600">Desktop Development</span>
                </div>
                <h3 className="text-xl font-bold">Modern Desktop Application Development with Electron</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Learn how to build cross-platform desktop applications using web technologies.
                </p>
                <Link
                  href="/blog/electron-desktop-apps"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">March 10, 2025</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                  <span className="text-sm font-medium text-rose-600">Cloud Computing</span>
                </div>
                <h3 className="text-xl font-bold">Serverless Architecture: Benefits and Implementation Strategies</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Explore the advantages of serverless architecture and how to implement it in your projects.
                </p>
                <Link
                  href="/blog/serverless-architecture"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Blog Post 6 */}
            <div className="flex flex-col space-y-3 rounded-lg border overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">February 28, 2025</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                  <span className="text-sm font-medium text-rose-600">Security</span>
                </div>
                <h3 className="text-xl font-bold">Securing Your Web Applications: Best Practices for Developers</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Learn essential security practices to protect your web applications from common vulnerabilities.
                </p>
                <Link
                  href="/blog/web-security-best-practices"
                  className="text-rose-600 hover:underline text-sm font-medium inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                Stay updated with the latest tech insights, tips, and news delivered straight to your inbox.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                />
                <Button className="bg-rose-600 hover:bg-rose-700">Subscribe</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
