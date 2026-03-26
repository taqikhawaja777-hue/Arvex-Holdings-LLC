"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products as allProducts, productImageMap } from "./productData";

const filters = [
  "All",
  "Beauty",
  "Health & Personal Care",
  "Baby Care",
  "Automotives",
  "Electronics",
  "Pet supplies",
  "Home & Kitchen",
  "Office Equipments"
];

const shopProducts = allProducts;

function ShopPageContent() {
  const searchParams = useSearchParams();
  const initialFilter = useMemo(() => {
    const param = searchParams?.get("category");
    if (!param) return "All";
    const match = filters.find((f) => f.toLowerCase() === param.toLowerCase());
    return match ?? "All";
  }, [searchParams]);

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  useEffect(() => {
    setActiveFilter(initialFilter);
  }, [initialFilter]);
  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    const bySearch = (p: typeof shopProducts[number]) =>
      !term || p.title.toLowerCase().includes(term);
    const byFilter = (p: typeof shopProducts[number]) =>
      activeFilter === "All" || p.category.toLowerCase() === activeFilter.toLowerCase();
    return shopProducts.filter((p) => bySearch(p) && byFilter(p));
  }, [search, activeFilter]);

  return (
    <div className="min-h-screen bg-beige">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-16 pt-10 md:px-12">
        <h1 className="font-heading text-3xl text-espresso md:text-4xl">Shop</h1>
        <div className="mt-4 w-full">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-espresso/15 bg-white px-4 py-3 text-espresso placeholder:text-espresso/50 shadow-sm focus:border-espresso/40 focus:outline-none focus:ring-1 focus:ring-espresso/20"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {filters.map((tag, idx) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                activeFilter === tag
                  ? "border-espresso/10 bg-gold text-espresso"
                  : "border-espresso/15 bg-white text-espresso hover:border-espresso/30"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <p className="mt-6 text-espresso/80">Showing {filteredProducts.length} products</p>

        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.title}
              className="flex h-full flex-col rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {product.image || productImageMap[product.title] ? (
                <div className="rounded-xl p-4">
                  <div className="relative h-[220px] w-full">
                    <Image
                      src={product.image || productImageMap[product.title]!}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              ) : (
                <div className="rounded-xl p-4 flex items-center justify-center h-[220px]">
                  <div className="text-sm text-espresso/40">Image goes here</div>
                </div>
              )}
              <div className="flex flex-1 flex-col gap-3 p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-espresso/70">{product.category}</p>
                <h3 className="font-heading text-lg text-espresso">{product.title}</h3>
                <p className="text-sm text-espresso/80">{product.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-lg font-semibold text-espresso">{product.price}</span>
                  <Link
                    href={`/shop/${product.slug}`}
                    className="rounded-md bg-espresso px-4 py-2 text-sm font-semibold text-white hover:bg-espresso/90"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-beige flex items-center justify-center text-espresso/70">
          Loading shop...
        </div>
      }
    >
      <ShopPageContent />
    </Suspense>
  );
}
