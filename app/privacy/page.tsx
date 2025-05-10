import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-rose-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black dark:hover:text-white mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="space-y-10">
            <div>
              <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>

            {/** Section Template */}
            <Section title="Introduction">
              <p>
                Thank you for choosing to be part of our community. We are committed to protecting your personal
                information and your right to privacy. This Privacy Policy describes how we collect, use, and share
                information about you when you use our services, and explains your privacy rights and how the law
                protects you.
              </p>
              <p>
                Please read this privacy policy carefully as it will help you understand what we do with the information
                that we collect.
              </p>
            </Section>

            <Section title="Information We Collect">
              <p>
                We collect personal information that you voluntarily provide to us when you register on our website,
                express interest in our products/services, participate in activities, or contact us.
              </p>
              <p>
                The type of personal information collected depends on your interactions with our site and services. It
                may include:
              </p>
              <List items={[
                "Name and contact data (such as your email address, phone number, and address)",
                "Credentials (such as passwords and security questions)",
                "Payment data (such as your credit card number and billing address)",
                "Usage data (such as how you interact with our website)",
              ]} />
            </Section>

            <Section title="How We Use Your Information">
              <p>
                We use your personal information for legitimate business purposes, to fulfill contracts, obtain consent,
                or comply with legal obligations. These include:
              </p>
              <List items={[
                "To facilitate account creation and login process",
                "To send administrative information to you",
                "To send you marketing and promotional communications",
                "To respond to user inquiries/offer support to users",
                "To enforce our terms, conditions, and policies",
              ]} />
            </Section>

            <Section title="Will Your Information Be Shared With Anyone?">
              <p>
                We only share information with your consent, to comply with laws, to provide services, protect rights,
                or fulfill obligations. We may share your data based on:
              </p>
              <List items={[
                "Consent",
                "Legitimate Interests",
                "Performance of a Contract",
                "Legal Obligations",
                "Vital Interests",
              ]} />
            </Section>

            <Section title="Cookies and Web Beacons">
              <p>
                Like any other website, we use cookies to store information such as preferences and visited pages. This
                helps customize content based on your browser and usage.
              </p>
            </Section>

            <Section title="Your Privacy Rights">
              <p>
                In some regions, such as the EEA, you have additional rights over your personal data. You may:
              </p>
              <List items={[
                "Request access, correction, or erasure of your data",
                "Object to or restrict processing",
                "Request data transfer",
                "Withdraw consent",
              ]} />
            </Section>

            <Section title="Data Security">
              <p>
                We use technical and organizational measures to protect your information. However, no online system is
                100% secure.
              </p>
            </Section>

            <Section title="Changes to This Privacy Policy">
              <p>
                We may update this policy occasionally. Changes will be posted here and noted by an updated "Last
                Updated" date.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>If you have any questions, contact us via:</p>
              <List items={[
                "Email: omnidev.build@gmail.com",
                "Website: www.omeenee.vercel.app",
                "Phone: (234) 810-0944 296",
                "Mail: No3 , Adeyemo Adedalu Lagos State, Po 100001 Nigeria",
              ]} />
            </Section>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Section component
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

// Reusable List component
function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-300">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
