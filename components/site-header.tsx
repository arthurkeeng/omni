"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className=" p-9 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            Omeenee
          </Link>
          <nav className="hidden md:flex gap-6 ml-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/about" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/services" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/portfolio" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/pricing" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Pricing
            </Link>
            {/* <Link
              href="/blog"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/blog" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Blog
            </Link> */}
            <Link
              href="/careers"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/careers" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Careers
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex">
          <Link href="/contact">
            <Button className="bg-rose-600 hover:bg-rose-700">Contact Us</Button>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/about" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/services" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/portfolio" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Portfolio
              </Link>
              <Link
                href="/pricing"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/pricing" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/blog" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/careers" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/contact" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
