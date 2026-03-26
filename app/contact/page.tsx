import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const businessHours = [
  "Monday - Friday: 9:00 AM - 5:00 PM EST",
  "Saturday: 10:00 AM - 2:00 PM EST",
  "Sunday: Closed"
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-beige text-espresso">
      <Navbar />

      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-16 pt-16 md:px-10 lg:px-0">
        <header className="space-y-3 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-espresso/70">
            Contact Us
          </p>
          <h1 className="font-heading text-3xl text-espresso md:text-4xl">Contact Us</h1>
        </header>

        <div className="grid gap-8 md:grid-cols-[1.05fr_1fr]">
          <div className="space-y-6">
            <h2 className="font-heading text-2xl text-espresso md:text-3xl">Get in Touch</h2>

            <div className="tilt-card rounded-2xl bg-white p-6 shadow-card">
              <p className="font-heading text-lg">Arvex Holdings LLC</p>
              <div className="mt-4 space-y-3 text-espresso/90">
                <p>
                  <span className="font-semibold">Email:</span> sales@arvexholdings.com
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +1 302 557 3884
                </p>
                <p>
                  <span className="font-semibold">Address:</span> 1209 Mountain Road Pl NE, Unit 11043, Albuquerque, NM 87110
                </p>
              </div>
            </div>

            <div className="tilt-card rounded-2xl bg-[#cdb794] p-6 text-espresso shadow-card">
              <p className="font-heading text-lg">Business Hours</p>
              <div className="mt-3 space-y-2 text-espresso/90">
                {businessHours.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="tilt-card rounded-2xl bg-white p-6 shadow-card">
            <h2 className="font-heading text-2xl text-espresso md:text-3xl">Send us a Message</h2>
            <form className="mt-6 space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-espresso">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-espresso/15 bg-white px-3 py-2 text-sm text-espresso shadow-inner outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-espresso">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-espresso/15 bg-white px-3 py-2 text-sm text-espresso shadow-inner outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-espresso">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-lg border border-espresso/15 bg-white px-3 py-2 text-sm text-espresso shadow-inner outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-espresso">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-lg border border-espresso/15 bg-white px-3 py-2 text-sm text-espresso shadow-inner outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                  placeholder="Tell us how we can help"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-espresso px-4 py-3 text-sm font-semibold text-white transition hover:bg-espresso/90 active:translate-y-[1px]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
