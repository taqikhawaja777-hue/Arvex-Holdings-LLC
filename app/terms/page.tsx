import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const listItems = [
  "Modify or copy the materials",
  "Use the materials for any commercial purpose or for any public display",
  "Attempt to reverse engineer any software contained on the website",
  "Remove any copyright or other proprietary notations from the materials"
];

const moreSections = [
  {
    title: "Products and Pricing",
    body: [
      "We strive to provide accurate product descriptions and pricing. However, we reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.",
      "All prices are in U.S. Dollars (USD) and are subject to change without notice. We reserve the right to refuse or cancel any order at any time."
    ]
  },
  {
    title: "Orders and Payment",
    body: [
      "When you place an order, you are offering to purchase a product subject to these Terms & Conditions. All orders are subject to acceptance and availability.",
      "We accept payment via credit card, debit card, and other payment methods as indicated on our website. Payment must be received before we ship your order."
    ]
  },
  {
    title: "Shipping and Delivery",
    body: [
      "We will ship products to the address you provide during checkout. Shipping times and costs will be displayed at checkout. We are not responsible for delays caused by shipping carriers or customs."
    ]
  },
  {
    title: "Returns and Refunds",
    body: [
      "Please refer to our Refund Policy for detailed information about returns and refunds. Returns are accepted within 30 days of purchase for unused items in their original condition."
    ]
  },
  {
    title: "Intellectual Property",
    body: [
      "All content on this website, including text, graphics, logos, images, and software, is the property of Arvex Holdings LLC or its content suppliers and is protected by United States and international copyright laws."
    ]
  },
  {
    title: "Limitation of Liability",
    body: [
      "Arvex Holdings LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or products."
    ]
  },
  {
    title: "Governing Law",
    body: [
      "These Terms & Conditions shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions."
    ]
  },
  {
    title: "Disclaimer",
    body: [
      "The materials on Arvex Holdings LLC’s website are provided on an “as is” basis. Arvex Holdings LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
      "Arvex Holdings LLC does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site."
    ]
  },
  {
    title: "Account Registration",
    body: [
      "To make purchases on our website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      "You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. We reserve the right to suspend or terminate your account if any information provided is inaccurate, not current, or incomplete."
    ]
  },
  {
    title: "Prohibited Uses",
    body: [
      "You may not use our website:"
    ],
    bullets: [
      "In any way that violates any applicable federal, state, local, or international law or regulation",
      "To transmit, or procure the sending of, any advertising or promotional material without our prior written consent",
      "To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity",
      "In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful",
      "To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of the website"
    ]
  },
  {
    title: "Changes to Terms",
    body: [
      "We reserve the right to modify these Terms & Conditions at any time. We will notify users of any changes by posting the new Terms & Conditions on this page and updating the “Last updated” date.",
      "Your continued use of the website after any changes to these Terms & Conditions will constitute your acceptance of such changes. If you do not agree to the modified terms, you must stop using the website."
    ]
  }
];

export default function TermsPage() {
  const tailSections = [
    {
      title: "Intellectual Property",
      body: [
        "All content on this website, including text, graphics, logos, images, and software, is the property of Arvex Holdings LLC or its content suppliers and is protected by United States and international copyright laws."
      ]
    },
    {
      title: "Limitation of Liability",
      body: [
        "Arvex Holdings LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or products."
      ]
    },
    {
      title: "Governing Law",
      body: [
        "These Terms & Conditions shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions."
      ]
    },
    {
      title: "Disclaimer",
      body: [
        "The materials on Arvex Holdings LLC's website are provided on an \"as is\" basis. Arvex Holdings LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        "Arvex Holdings LLC does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-beige text-espresso">
      <Navbar />

      <header className="bg-gradient-to-b from-[#8b6c44] to-[#6f5435] px-6 py-12 text-center text-white md:py-16">
        <h1 className="font-heading text-2xl md:text-3xl">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm md:text-base">Please read our terms carefully</p>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-12 md:px-10 lg:px-0">
        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Agreement to Terms</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            By accessing and using the Arvex Holdings LLC website, you accept and agree to be bound by these terms and
            provisions. If you do not agree to abide by the above, please do not use this service.
          </p>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Use License</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            Permission is granted to temporarily access the materials on Arvex Holdings LLC&apos;s website for personal,
            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this
            license you may not:
          </p>
          <ul className="space-y-2 pl-5 text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            {listItems.map((item) => (
              <li key={item} className="list-disc marker:text-gold">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl shadow-card">
          <Image
            src="/images/license.webp"
            alt="Customer receiving service at a counter"
            width={1200}
            height={540}
            className="h-full w-full max-h-[360px] object-cover"
            priority
          />
        </div>

        {moreSections.map((section) => (
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
          </article>
        ))}

        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl shadow-card">
          <Image
            src="/images/writing.webp"
            alt="Person signing a document"
            width={1200}
            height={540}
            className="h-full w-full max-h-[360px] object-cover"
            priority
          />
        </div>

        {tailSections.map((section) => (
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
          </article>
        ))}
      </main>

      <Footer />
    </div>
  );
}
