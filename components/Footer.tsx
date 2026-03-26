import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-espresso text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-4 md:px-12">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex h-16 w-14 overflow-hidden items-center md:h-20 md:w-18">
              <Image
                src="/images/logo x.png"
                alt="Arvex Holdings LLC logo"
                width={400}
                height={120}
                className="h-16 w-14 object-cover object-left md:h-20 md:w-18"
                priority
              />
            </div>
            <h3 className="font-heading text-lg font-semibold text-white md:text-xl">ARVEX Holdings LLC</h3>
          </div>
          <p className="text-white/75">
            Curating a refined selection of essentials and luxuries for discerning customers across categories.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-3">Navigate</h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <Link href="/#home" className="hover:text-gold transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#shop" className="hover:text-gold transition-colors">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-3">Policies</h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <Link href="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gold transition-colors">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="/refund" className="hover:text-gold transition-colors">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-heading text-lg mb-3">Contact</h4>
          <p className="text-white/80">Email: sales@arvexholdings.com</p>
          <p className="text-white/80">Phone: +1 302-557-3884</p>
          <p className="text-white/80 leading-snug">
            Address:
            <br />
            1209 Mountain Road Pl NE
            <br />
            Unit 11043
            <br />
            Albuquerque, NM 87110
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 bg-espresso/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm text-white/70 md:px-12">
          <span>© 2026 ARVEX Holdings LLC.</span>
          <span className="hidden md:inline">Elevating everyday essentials.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
