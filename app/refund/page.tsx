import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const steps = [
  "Contact our customer service team at support@arvexholdings.com or call +1 (555) 123-4567",
  "Provide your order number and reason for return",
  "We will provide you with a Return Authorization (RA) number and return instructions",
  "Package the item securely in its original packaging",
  "Include the RA number on the outside of the package",
  "Ship the item to the address provided in your return instructions"
];

const nonReturnables = [
  "Perishable goods (food items, beverages, etc.)",
  "Personal care items that have been opened or used",
  "Items that are not in their original condition",
  "Items damaged by misuse or normal wear and tear",
  "Items without proof of purchase"
];

const refundMethods = [
  "Credit/Debit Cards: Refunds will be credited to the same card within 5–10 business days",
  "PayPal: Refunds will be processed to your PayPal account within 3–5 business days",
  "Gift Cards: Refunds will be issued as store credit or a new gift card"
];

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-beige text-espresso">
      <Navbar />

      <header className="bg-gradient-to-b from-[#8b6c44] to-[#6f5435] px-6 py-12 text-center text-white md:py-16">
        <h1 className="font-heading text-2xl md:text-3xl">Refund &amp; Return Policy</h1>
        <p className="mt-3 text-sm md:text-base">Your satisfaction is our priority</p>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12 md:px-10 lg:px-0">
        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Return Policy</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            At Arvex Holdings LLC, we want you to be completely satisfied with your purchase. Returns are accepted within 30 days
            of purchase for unused items in their original condition.
          </p>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            To be eligible for a return, your item must be unused, in the same condition that you received it, and in its
            original packaging. Items must have all tags attached and be in saleable condition.
          </p>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">How to Return an Item</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            To initiate a return, please follow these steps:
          </p>
          <ol className="space-y-2 pl-5 text-sm leading-6 text-espresso/90 md:text-base md:leading-7 list-decimal marker:text-gold">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>

        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl shadow-card">
          <Image
            src="/images/sale.webp"
            alt="Sale sign"
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
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Return Shipping</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            Return shipping costs are the responsibility of the customer unless the item is defective or we made an error in
            your order. We recommend using a trackable shipping service and purchasing shipping insurance, as we cannot guarantee
            that we will receive your returned item.
          </p>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Refund Process</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            Once we receive and inspect your returned item, we will notify you of the approval or rejection of your refund. If
            approved, your refund will be processed, and a credit will automatically be applied to your original method of
            payment within 5–10 business days.
          </p>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            Please note that shipping costs are non-refundable unless the return is due to our error or a defective product.
          </p>
        </article>

        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl shadow-card">
          <Image
            src="/images/fix.webp"
            alt="Technician repairing a product"
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
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Defective or Damaged Items</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            If you receive a defective or damaged item, please contact us immediately at support@arvexholdings.com or call +1
            (555) 123-4567. We will arrange for a replacement or full refund, including return shipping costs. Please include
            photos of the defect or damage when contacting us to help us process your request quickly.
          </p>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Non-Returnable Items</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            The following items cannot be returned:
          </p>
          <ul className="space-y-2 pl-5 text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            {nonReturnables.map((item) => (
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
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Late or Missing Refunds</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            If you haven&apos;t received a refund yet, first check your bank account, then contact your credit card company and
            your bank, as processing times can vary. If you&apos;ve done all of this and you still have not received your refund,
            please contact us at support@arvexholdings.com.
          </p>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Exchanges</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            We only replace items if they are defective or damaged. If you need to exchange an item for a different size or
            color, please return the original item and place a new order for the desired item.
          </p>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Cancellations</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            If you need to cancel an order, please contact us as soon as possible. Orders that have already been shipped cannot
            be cancelled, but you may return the item following our return policy.
          </p>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            For orders that have not yet been shipped, we will process a full refund to your original payment method within 3–5
            business days of cancellation confirmation.
          </p>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Refund Methods</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            Refunds will be issued to the original payment method used for the purchase. The refund method depends on how you
            paid:
          </p>
          <ul className="space-y-2 pl-5 text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            {refundMethods.map((item) => (
              <li key={item} className="list-disc marker:text-gold">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            Please note that it may take additional time for your bank or credit card company to process and post the refund to
            your account after we have processed it.
          </p>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Processing Time</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            Once we receive your returned item, we will inspect it and notify you of the status of your refund. The processing
            time varies:
          </p>
          <ul className="space-y-2 pl-5 text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            <li className="list-disc marker:text-gold">Standard returns: 3–5 business days after we receive the item</li>
            <li className="list-disc marker:text-gold">
              Defective or damaged items: 1–2 business days after we receive the item
            </li>
            <li className="list-disc marker:text-gold">
              Holiday periods: May take up to 7–10 business days due to increased volume
            </li>
          </ul>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            You will receive an email notification once your refund has been processed. If you have not received your refund
            within the expected timeframe, please contact us.
          </p>
        </article>

        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#cdb794]/70 text-[#6f5435]">
              🔒
            </span>
            <h2 className="font-heading text-xl text-espresso md:text-2xl">Partial Refunds</h2>
          </div>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            In certain circumstances, we may issue a partial refund:
          </p>
          <ul className="space-y-2 pl-5 text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            <li className="list-disc marker:text-gold">If the item is returned in a condition that is not as described (minor wear, missing accessories)</li>
            <li className="list-disc marker:text-gold">If only part of your order is returned</li>
            <li className="list-disc marker:text-gold">If the item has been used or damaged beyond normal wear and tear</li>
          </ul>
          <p className="text-sm leading-6 text-espresso/90 md:text-base md:leading-7">
            We will notify you if a partial refund is being issued and explain the reason for the reduced refund amount.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
