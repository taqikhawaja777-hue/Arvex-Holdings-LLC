import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { title: "Beauty & Personal care", image: "/images/beauty-products.jpg" },
  { title: "Baby Care", image: "/images/babybathtub.webp" },
  { title: "Automotives", image: "/images/fix.webp" },
  { title: "Electronics", image: "/images/electronics-photo.jpg" },
  { title: "Pet supplies", image: "/images/pet-supplies.jpg" },
  { title: "Home & Kitchen", image: "/images/kitchen.jpg" },
  { title: "Office Equipments", image: "/images/office-equipment.jpg" }
];

const brandPills = [
  "Personal Care",
  "Baby Care",
  "Automotives",
  "Beauty & Personal Care",
  "Electronics",
  "Pet Supplies",
  "Home & Kitchen",
  "Office Equipments"
];

const sellingPoints = [
  "Wide selection across multiple categories",
  "Verified brands and trusted suppliers",
  "Secure shopping and reliable delivery"
];

const featuredProducts = [
  {
    title: "Stainless Steel Cookware Set",
    category: "Home & Kitchen",
    description: "10-piece premium cookware set with non-stick coating",
    price: "$89.99",
    image: "/images/stainlessteelcookwareset.webp"
  },
  {
    title: "Wireless Earbuds",
    category: "Electronics",
    description: "Bluetooth 5.0 wireless earbuds with charging case",
    price: "$79.99",
    image: "/images/wirelessearbuds.webp"
  },
  {
    title: "Electric Toothbrush",
    category: "Health & Personal Care",
    description: "Rechargeable electric toothbrush with 3 modes",
    price: "$49.99",
    image: "/images/electric_tootbrush.webp"
  },
  {
    title: "Ergonomic Office Chair",
    category: "Office Equipments",
    description: "Adjustable ergonomic chair with lumbar support and padded armrests",
    price: "$199.99",
    image: "/images/ergonomicofficechair.webp"
  }
];

const whyChoose = [
  {
    title: "Quality Assured",
    desc: "We source products only from trusted brands and suppliers, ensuring the highest quality standards.",
    icon: "✔️"
  },
  {
    title: "Fast Shipping",
    desc: "Quick and reliable delivery to get your products to you as fast as possible.",
    icon: "⏱️"
  },
  {
    title: "Best Prices",
    desc: "Competitive pricing on all products to give you the best value for your money.",
    icon: "💲"
  },
  {
    title: "24/7 Support",
    desc: "Our customer service team is always ready to assist you with any questions or concerns.",
    icon: "🛟"
  }
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    initials: "SM",
    quote:
      "Excellent service and fast shipping! I ordered some home & kitchen items and they arrived exactly as described. The quality is outstanding and the prices are very competitive. Highly recommend!",
    role: "Verified Customer"
  },
  {
    name: "James Davis",
    initials: "JD",
    quote:
      "I've been shopping with Arvex Holdings for months now. Their electronics selection is great and the customer support is always helpful. The return process was smooth when I needed it. Great company to work with!",
    role: "Verified Customer"
  },
  {
    name: "Emily Wilson",
    initials: "EW",
    quote:
      "Amazing experience from start to finish! I ordered pet supplies and beauty products. Everything was packaged perfectly and arrived on time. The product quality exceeded my expectations. Will definitely shop here again!",
    role: "Verified Customer"
  }
];

const shopProducts = [
  {
    title: "Stainless Steel Cookware Set",
    category: "Home & Kitchen",
    description: "10-piece premium cookware set with non-stick coating",
    price: "$89.99"
  },
  {
    title: "Smart Coffee Maker",
    category: "Home & Kitchen",
    description: "Programmable coffee maker with timer and auto-shutoff",
    price: "$79.99"
  },
  {
    title: "Air Fryer XL",
    category: "Home & Kitchen",
    description: "Large capacity air fryer for healthy cooking",
    price: "$129.99"
  },
  {
    title: "Premium Knife Set",
    category: "Home & Kitchen",
    description: "8-piece professional chef knife set with block",
    price: "$149.99"
  }
];

const clientLogos = [
  { name: "Auric", src: "/images/logo1.svg" },
  { name: "Lumina", src: "/images/logo2.svg" },
  { name: "Northbridge", src: "/images/logo3.svg" },
  { name: "Everest", src: "/images/logo4.svg" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-beige" id="home">
      <Navbar />

      <main className="flex flex-col pb-0">
        <section className="relative w-full pt-0">
          <div className="relative h-[65vh] w-full overflow-hidden">
            <video
              className="h-full w-full object-cover"
              src="/images/7568747-hd_1920_1080_25fps.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="overlay-gradient absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4 text-center">
              <h1 className="font-heading text-4xl text-white drop-shadow-lg md:text-6xl">
                Welcome to Arvex Holdings LLC
              </h1>
              <p className="mt-6 max-w-4xl text-lg text-white md:text-2xl">
                A U.S.-based online retailer offering a wide range of quality consumer products including beauty &amp; personal care,
                electronics, pet supplies, home &amp; kitchen, and office equipment.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/shop"
                  className="rounded-lg border-2 border-white px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Shop Now
                </a>
                <a
                  href="/contact"
                  className="rounded-lg border-2 border-white px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="shop" className="bg-beige">
          <div className="mx-auto max-w-7xl px-6 py-14 md:px-12">
            <div className="mb-10">
              <SectionTitle
                title="Shop by Category"
                subtitle="Five curated pillars to cover your essentials and indulgences."
              />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7">
              {categories.map((category) => (
                <CategoryCard key={category.title} title={category.title} image={category.image} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="w-full py-16">
            <div className="mx-auto mb-8 max-w-5xl px-6 md:px-8">
              <SectionTitle
                title="Our Clients & Trusted Brands"
                subtitle="We partner with trusted brands across categories to bring you quality products."
              />
            </div>
            <div className="relative flex justify-center px-3 md:px-6">
              <div className="w-full overflow-hidden rounded-[32px] bg-white shadow-[0_25px_70px_-30px_rgba(0,0,0,0.35)] ring-1 ring-espresso/5">
                <div className="marquee items-center px-6 py-12">
                  {[...brandPills, ...brandPills].map((label, idx) => (
                    <div
                      key={`${label}-${idx}`}
                      className="min-w-[190px] shrink-0 rounded-2xl border border-espresso/10 bg-beige px-6 py-4 text-center text-espresso font-semibold shadow-sm"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white via-beige to-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:flex-row md:items-stretch md:gap-16 md:px-12">
            <div className="relative w-full md:w-5/12 max-w-xl">
              <div className="absolute left-6 top-6 h-full w-full rounded-3xl bg-espresso/5 blur-xl" />
              <div className="relative flex h-full min-h-[420px] items-center justify-center overflow-hidden rounded-3xl bg-white p-10 shadow-card">
                <Image
                  src="/images/logo x.png"
                  alt="ARVEX Holdings LLC Logo"
                  width={420}
                  height={260}
                  className="h-48 w-auto object-contain md:h-60"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-7/12 flex flex-col justify-between">
              <h2 className="font-heading text-3xl text-espresso md:text-4xl">Quality Products, Trusted Brands</h2>
              <p className="mt-5 text-espresso/85">
                Welcome to Arvex Holdings LLC, a U.S.-based online retailer offering a wide range of quality consumer
                products including beauty &amp; personal care, electronics, pet supplies, home &amp; kitchen, and office
                equipment. We are committed to providing our customers with reliable products from trusted brands through
                our convenient online store.
              </p>
              <p className="mt-4 text-espresso/85">
                From everyday essentials to specialty items, we carefully curate our catalog so you can shop with confidence.
                Every product meets our standards for quality, value, and customer satisfaction.
              </p>
              <ul className="mt-6 space-y-4">
                {sellingPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-espresso">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-espresso">✓</span>
                    <span className="font-semibold">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:px-12">
            <div className="text-center">
              <h2 className="font-heading text-3xl text-espresso md:text-4xl">Why Choose Arvex Holdings LLC?</h2>
              <p className="mt-3 text-espresso/80">
                We are committed to providing exceptional value and service to our customers
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {whyChoose.map((item) => (
                <div key={item.title} className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/35 text-2xl text-espresso shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-lg text-espresso">{item.title}</h3>
                  <p className="text-sm text-espresso/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-beige">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-heading text-3xl text-espresso md:text-4xl">Featured Products</h2>
              <a href="/shop" className="text-espresso font-semibold hover:text-gold transition-colors">
                View All →
              </a>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredProducts.map((product) => (
                <div
                  key={product.title}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-4">
                    <p className="text-sm font-medium text-espresso/70">{product.category}</p>
                    <h3 className="font-heading text-lg text-espresso">{product.title}</h3>
                    <p className="text-sm text-espresso/80">{product.description}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-lg font-semibold text-espresso">{product.price}</span>
                      <Link
                        href="/shop"
                        className="rounded-md bg-espresso px-4 py-2 text-sm font-semibold text-white hover:bg-espresso/90"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:flex-row md:gap-12 md:px-12">
            <div className="flex-1 space-y-6">
              <h2 className="font-heading text-3xl text-espresso md:text-4xl">Trusted by Thousands of Customers</h2>
              <p className="text-espresso/85">
                At Arvex Holdings LLC, we understand that trust is earned through consistent quality and exceptional service. Our
                commitment to excellence has made us a preferred choice for customers across the United States.
              </p>
              <ul className="space-y-5 text-espresso">
                <li className="flex gap-3">
                  <span className="mt-1 text-gold">✓</span>
                  <div>
                    <p className="font-heading text-lg text-espresso">U.S.-Based Company</p>
                    <p className="text-espresso/80">Registered and operating in Delaware, USA</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-gold">✓</span>
                  <div>
                    <p className="font-heading text-lg text-espresso">Secure Transactions</p>
                    <p className="text-espresso/80">All payments are processed securely and safely</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-gold">✓</span>
                  <div>
                    <p className="font-heading text-lg text-espresso">Easy Returns</p>
                    <p className="text-espresso/80">30-day return policy for your peace of mind</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl bg-[#c9b28d] px-6 py-8 text-espresso shadow-card md:px-8 md:py-10">
                <h3 className="font-heading text-2xl text-espresso mb-4">Our Promise to You</h3>
                <ul className="space-y-4 text-espresso">
                  <li>We only source products from verified and trusted suppliers</li>
                  <li>Every product is carefully selected to meet our quality standards</li>
                  <li>We provide detailed product information to help you make informed decisions</li>
                  <li>Your satisfaction is our top priority</li>
                  <li>We continuously work to improve our services and product offerings</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-beige">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
            <div className="text-center">
              <h2 className="font-heading text-3xl text-espresso md:text-4xl">What Our Customers Say</h2>
              <p className="mt-3 text-espresso/80">
                Don&apos;t just take our word for it - hear from our satisfied customers
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl bg-white/80 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex items-center gap-1 text-gold text-lg" aria-hidden>
                    {"★★★★★"}
                  </div>
                  <p className="mt-4 text-espresso/90 leading-relaxed">“{item.quote}”</p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/30 font-semibold text-espresso">
                      {item.initials}
                    </span>
                    <div>
                      <p className="font-heading text-espresso">{item.name}</p>
                      <p className="text-sm text-espresso/70">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-beige">
          <div className="mx-auto max-w-7xl px-6 pb-16 md:px-12">
            <div className="mx-auto max-w-5xl rounded-2xl bg-[#c9b28d] px-6 py-10 text-espresso md:px-14 md:py-12">
              <h2 className="text-center font-heading text-3xl md:text-4xl">About Arvex Holdings LLC</h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed md:text-lg md:leading-7">
                <p>
                  Arvex Holdings LLC is a U.S.-based online retail company dedicated to providing customers with high-quality products across
                  multiple categories. Our goal is to deliver reliable products from trusted brands through our online store.
                </p>
                <p>
                  We source products from various trusted brands and suppliers, ensuring that our customers receive only the best quality
                  items. Whether you&apos;re looking for beauty &amp; personal care products, electronics, pet supplies, home &amp; kitchen
                  essentials, or office equipment, we have something for everyone.
                </p>
              </div>
              <div className="mt-10 flex justify-center">
                <a
                  href="/about"
                  className="rounded-md bg-espresso px-6 py-3 text-sm font-semibold text-white transition hover:bg-espresso/90"
                >
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#8b6c44]">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center text-white md:py-16">
            <h2 className="font-heading text-3xl md:text-4xl">Ready to Start Shopping?</h2>
            <p className="text-lg md:text-xl">
              Browse our wide selection of quality products from trusted brands.
            </p>
            <a
              href="/shop"
              className="rounded-md border-2 border-white px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Shop Now
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
