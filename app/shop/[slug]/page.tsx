import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductBySlug, products, productImageMap, Product } from "../productData";

type Props = { params: { slug: string } };

const usageTips = [
  "Allow pans to cool before washing to help prevent warping",
  "Use non-abrasive sponges and cleaners to protect the finish",
  "Avoid overheating empty cookware on high heat settings"
];

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const image = product.image || productImageMap[product.title];

  return (
    <div className="min-h-screen bg-beige">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-12">
        <Link href="/shop" className="text-sm text-espresso/70 hover:text-espresso">
          ← Back
        </Link>

        <div className="mt-4 overflow-hidden rounded-3xl bg-white shadow-card">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative h-80 w-full md:h-full bg-transparent flex items-center justify-center">
              {image ? (
                <Image
                  src={image}
                  alt={product.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-espresso/5 text-espresso/40">Image coming soon</div>
              )}
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-espresso/60">{product.category}</p>
              <h1 className="font-heading text-3xl text-espresso md:text-4xl">{product.title}</h1>
              <p className="text-espresso/80">{product.description}</p>
              <div className="flex items-center gap-4 text-espresso">
                <span className="text-2xl font-semibold">{product.price}</span>
                <span className="rounded-full bg-espresso/10 px-3 py-1 text-sm font-semibold text-espresso">In Stock</span>
              </div>
              {product.highlights?.length ? (
                <div>
                  <p className="font-semibold text-espresso">Key Details</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-espresso/80">
                    {product.highlights.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="grid grid-cols-2 gap-4 text-sm text-espresso/80">
                <div>
                  <p className="font-semibold text-espresso">Category</p>
                  <p>{product.category}</p>
                </div>
                <div>
                  <p className="font-semibold text-espresso">SKU</p>
                  <p>{product.sku}</p>
                </div>
                <div>
                  <p className="font-semibold text-espresso">Shipping</p>
                  <p>Fast, reliable delivery within the U.S.</p>
                </div>
              </div>
              {product.category.toLowerCase().includes("kitchen") && (
                <div>
                  <p className="font-semibold text-espresso">Usage &amp; Care</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-espresso/80">
                    {usageTips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-10">
            <h3 className="font-heading text-xl text-espresso md:text-2xl">Related {product.category} Products</h3>
            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {related.map((p) => (
                <div
                  key={p.slug}
                  className="flex h-full flex-col rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="rounded-xl p-4 flex items-center justify-center">
                    <div className="relative h-[180px] w-full">
                      {p.image || productImageMap[p.title] ? (
                        <Image
                          src={(p.image || productImageMap[p.title]) as string}
                          alt={p.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-contain"
                        />
                      ) : (
                        <div className="text-sm text-espresso/40">Image coming soon</div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-espresso/70">{p.category}</p>
                    <h4 className="font-heading text-lg text-espresso">{p.title}</h4>
                    <p className="text-sm text-espresso/80 line-clamp-2">{p.description}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-lg font-semibold text-espresso">{p.price}</span>
                      <Link
                        href={`/shop/${p.slug}`}
                        className="rounded-md bg-espresso px-4 py-2 text-sm font-semibold text-white hover:bg-espresso/90"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
