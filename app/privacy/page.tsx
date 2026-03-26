import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const sections = [
  {
    title: "Introduction",
    body: [
      "Arvex Holdings LLC (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website."
    ]
  },
  {
    title: "Information We Collect",
    body: [
      "We may collect information about you in a variety of ways:"
    ],
    bullets: [
      {
        label: "Personal Information",
        text: "Name, email address, phone number, shipping address, and billing information"
      },
      {
        label: "Usage Data",
        text: "Information about how you access and use our website"
      },
      {
        label: "Device Information",
        text: "IP address, browser type, operating system, and device identifiers"
      }
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-beige text-espresso">
      <Navbar />

      <header className="bg-gradient-to-b from-[#8b6c44] to-[#6f5435] px-6 py-12 text-center text-white md:py-16">
        <h1 className="font-heading text-2xl md:text-3xl">Privacy Policy</h1>
        <p className="mt-3 text-sm md:text-base">Your privacy is important to us</p>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12 md:px-10 lg:px-0">
        {sections.map((section) => (
          <article key={section.title} className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
                🔒
              </span>
              <h2 className="font-heading text-xl text-espresso md:text-2xl">{section.title}</h2>
            </div>
            {section.body.map((para) => (
              <p key={para} className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
                {para}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-2 space-y-2 pl-5 text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
                {section.bullets.map((item) => (
                  <li key={item.label} className="list-disc marker:text-gold">
                    <span className="font-semibold">{item.label}:</span> {item.text}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}

        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl shadow-card">
          <Image
            src="/images/global.jpg"
            alt="View of Earth at night from space"
            width={1200}
            height={540}
            className="h-full w-full max-h-[360px] object-cover"
            priority
          />
        </div>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Data Security</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            We implement appropriate technical and organizational security measures to protect your personal information. However,
            no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">How We Use Your Information</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            We use the information we collect to:
          </p>
          <ul className="space-y-2 pl-5 text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            {[
              "Process and fulfill your orders",
              "Communicate with you about your orders and our services",
              "Improve our website and customer experience",
              "Send you marketing communications (with your consent)",
              "Comply with legal obligations"
            ].map((item) => (
              <li key={item} className="list-disc marker:text-gold">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Information Sharing</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="space-y-2 pl-5 text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            {[
              "Service providers who assist us in operating our website and conducting our business",
              "Payment processors to process your transactions",
              "Shipping companies to deliver your orders",
              "Legal authorities when required by law"
            ].map((item) => (
              <li key={item} className="list-disc marker:text-gold">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Your Rights</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            You have the right to:
          </p>
          <ul className="space-y-2 pl-5 text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            {[
              "Access your personal information",
              "Correct inaccurate information",
              "Request deletion of your information",
              "Opt-out of marketing communications"
            ].map((item) => (
              <li key={item} className="list-disc marker:text-gold">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Cookies and Tracking Technologies</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information.
            Cookies are files with a small amount of data which may include an anonymous unique identifier.
          </p>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            Types of cookies we use:
          </p>
          <ul className="space-y-2 pl-5 text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            {[
              ["Essential Cookies", "Required for the website to function properly"],
              ["Analytics Cookies", "Help us understand how visitors interact with our website"],
              ["Marketing Cookies", "Used to track visitors across websites for marketing purposes"]
            ].map(([label, text]) => (
              <li key={label} className="list-disc marker:text-gold">
                <span className="font-semibold">{label}:</span> {text}
              </li>
            ))}
          </ul>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do
            not accept cookies, you may not be able to use some portions of our website.
          </p>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Email Communications</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            If you have opted in to receive marketing emails from us, we may send you promotional communications about our
            products and services. You can opt-out of receiving these emails at any time by clicking the unsubscribe link in
            the email or contacting us directly.
          </p>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              ðŸ”’
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Third-Party Services</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            Our website may contain links to third-party websites or services that are not owned or controlled by Arvex Holdings
            LLC. We are not responsible for the privacy practices of these third-party sites.
          </p>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            We encourage you to review the privacy policies of any third-party sites you visit. This Privacy Policy applies only
            to information collected by our website.
          </p>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              ðŸ”’
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Data Retention</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this
            Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your
            information, we will securely delete or anonymize it.
          </p>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              ðŸ”’
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Children&apos;s Privacy</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            Our website is not intended for children under the age of 13. We do not knowingly collect personal information from
            children under 13. If you are a parent or guardian and believe your child has provided us with personal information,
            please contact us immediately so we can delete such information.
          </p>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              ðŸ”’
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Changes to This Privacy Policy</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy
            Policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </article>

        <section className="rounded-2xl bg-[#cdb794] px-6 py-8 text-espresso shadow-card md:px-8 md:py-10">
          <h3 className="font-heading text-xl text-espresso md:text-2xl">Contact Us</h3>
          <p className="mt-4 text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-4 space-y-2 text-sm leading-6 md:text-base md:leading-7">
            <p>
              <span className="font-semibold">Email:</span> sales@arvexholdings.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +1 302-557-3884
            </p>
            <p>
              <span className="font-semibold">Address:</span> 100 Luxury Ave, NY
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
