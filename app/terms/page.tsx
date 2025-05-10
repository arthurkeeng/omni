import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex flex-col min-h-screen bg-rose-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-24">
      <div className="container max-w-3xl px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
        <p className="text-sm text-muted-foreground">Last updated: {formattedDate}</p>
      </div>

      {/* Terms Sections */}
      <div className="space-y-10">
        <Section
          title="1. Introduction"
          paragraphs={[
            `Welcome to our website. These Terms of Service ("Terms") govern your access to and use of our website, including any content, functionality, and services offered on or through our website (the "Service"), whether as a guest or a registered user.`,
            `Please read these Terms carefully before you start to use the Service. By using the Service, you accept and agree to be bound and abide by these Terms and our Privacy Policy. If you do not want to agree to these Terms or the Privacy Policy, you must not access or use the Service.`,
          ]}
        />

        <Section
          title="2. Eligibility"
          paragraphs={[
            `The Service is offered and available to users who are 13 years of age or older. By using this Service, you represent and warrant that you meet the eligibility requirements. If you do not meet these requirements, you must not access or use the Service.`,
          ]}
        />

        <Section
          title="3. User Accounts"
          paragraphs={[
            `When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.`,
            `You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.`,
          ]}
        />

        <Section
          title="4. Intellectual Property"
          paragraphs={[
            `The Service and its original content, features, and functionality are and will remain the exclusive property of our company and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of our company.`,
          ]}
        />

        <Section
          title="5. User Content"
          paragraphs={[
            `Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that you post on or through the Service, including its legality, reliability, and appropriateness.`,
            `By posting User Content on or through the Service, you represent and warrant that: (i) the User Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your User Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.`,
          ]}
        />

        <Section
          title="6. Prohibited Uses"
          paragraphs={[
            `You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:`,
          ]}
          listItems={[
            `In any way that violates any applicable federal, state, local, or international law or regulation.`,
            `For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.`,
            `To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.`,
            `To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity.`,
            `To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm the company or users of the Service or expose them to liability.`,
          ]}
        />

        <Section
          title="7. Termination"
          paragraphs={[
            `We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.`,
            `Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service, or notify us that you wish to delete your account.`,
          ]}
        />

        <Section
          title="8. Limitation of Liability"
          paragraphs={[
            `In no event shall we, nor our directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.`,
          ]}
        />

        <Section
          title="9. Disclaimer"
          paragraphs={[
            `Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.`,
            `We do not warrant that (i) the Service will function uninterrupted, secure or available at any particular time or location; (ii) any errors or defects will be corrected; (iii) the Service is free of viruses or other harmful components; or (iv) the results of using the Service will meet your requirements.`,
          ]}
        />

        <Section
          title="10. Governing Law"
          paragraphs={[
            `These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.`,
            `Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.`,
          ]}
        />

        <Section
          title="11. Changes to Terms"
          paragraphs={[
            `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.`,
            `By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.`,
          ]}
        />

        <Section
          title="12. Contact Us"
          paragraphs={[`If you have any questions about these Terms, please contact us:`]}
          listItems={[
            `By email: legal@yourcompany.com`,
            `By visiting this page on our website: www.yourcompany.com/contact`,
            `By phone: (123) 456-7890`,
            `By mail: 123 Legal Street, Your City, State 12345`,
          ]}
        />
      </div>
    </div>
    </section>
    </div>
  );
}

// Reusable Section component
function Section({
  title,
  paragraphs,
  listItems,
}: {
  title: string;
  paragraphs: string[];
  listItems?: string[];
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {paragraphs.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
      {listItems && (
        <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
