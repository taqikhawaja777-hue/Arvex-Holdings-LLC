import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const categories = [
  "Home & Kitchen products",
  "Beauty & Personal Care products",
  "Electronics",
  "Pet supplies",
  "Office equipment",
  "Personal care products",
  "Groceries"
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-beige text-espresso">
      <Navbar />

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-16 md:gap-14 md:px-10 lg:px-0">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-espresso/70">
            About Us
          </p>
          <h1 className="font-heading text-3xl text-espresso md:text-4xl">About Us</h1>
        </header>

        <section className="space-y-4">
          <h2 className="font-heading text-2xl text-espresso md:text-3xl">Who We Are</h2>
          <p className="text-base leading-7 text-espresso/90 md:text-lg md:leading-8">
            Arvex Holdings LLC is a U.S.-based online retail company dedicated to providing customers
            with high-quality products across multiple categories. Our goal is to deliver reliable
            products from trusted brands through our online store.
          </p>
          <p className="text-base leading-7 text-espresso/90 md:text-lg md:leading-8">
            We are committed to offering quality products to customers, sourcing from various trusted
            brands and suppliers to ensure that every item meets our high standards.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-heading text-2xl text-espresso md:text-3xl">Our Mission</h2>
          <p className="text-base leading-7 text-espresso/90 md:text-lg md:leading-8">
            At Arvex Holdings LLC, we believe in making quality products accessible to everyone.
            As an online retailer, we work with trusted brands to bring you a wide selection of consumer
            products including home essentials, kitchen items, personal care products, beauty items,
            groceries, and electronics.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="font-heading text-2xl text-espresso md:text-3xl">What We Offer</h2>
          <p className="text-base leading-7 text-espresso/90 md:text-lg md:leading-8">
            Our online store features products from various trusted brands across multiple categories:
          </p>
          <ul className="space-y-3 pl-5 text-base leading-7 text-espresso/90 md:text-lg md:leading-8">
            {categories.map((item) => (
              <li key={item} className="list-disc marker:text-gold">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-heading text-2xl text-espresso md:text-3xl">Our Commitment</h2>
          <p className="text-base leading-7 text-espresso/90 md:text-lg md:leading-8">
            We are committed to providing excellent customer service and ensuring that every product we
            offer meets our quality standards. As a U.S.-based retailer, we understand the importance of
            reliability, quality, and customer satisfaction.
          </p>
        </section>

        <section className="rounded-xl bg-[#cdb794] px-6 py-8 text-espresso shadow-card md:px-8 md:py-10">
          <h3 className="font-heading text-2xl text-espresso md:text-3xl">Contact Us</h3>
          <p className="mt-4 text-base leading-7 text-espresso/90 md:text-lg md:leading-8">
            If you have any questions or would like to learn more about Arvex Holdings LLC, please don&apos;t
            hesitate to reach out to us.
          </p>
          <div className="mt-6 space-y-2 text-base leading-7 md:text-lg md:leading-8">
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
