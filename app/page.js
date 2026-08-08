```jsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-yellow-600/30 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <a
            href="/"
            className="text-2xl font-bold tracking-[4px] text-yellow-500"
          >
            HUSSAFA
          </a>

          <div className="flex gap-6 text-sm md:gap-8 md:text-base">
            <a href="/" className="transition hover:text-yellow-500">
              Home
            </a>

            <a href="/shop" className="transition hover:text-yellow-500">
              Shop
            </a>

            <a href="/#about" className="transition hover:text-yellow-500">
              About
            </a>

            <a href="/#contact" className="transition hover:text-yellow-500">
              Contact
            </a>
          </div>

        </div>
      </nav>


      {/* Hero */}
      <section className="flex min-h-screen items-center justify-center px-6 pt-24 text-center">

        <div className="max-w-4xl">

          <p className="mb-5 tracking-[6px] text-yellow-500">
            LUXURY FASHION HOUSE
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-wide text-yellow-500 md:text-7xl">
            HUSSAFA
            <br />
            BOUTIQUE
          </h1>

          <p className="mx-auto mb-9 max-w-2xl text-lg leading-8 text-gray-300">
            Where elegance meets luxury. Discover premium garments,
            jewellery and exclusive fragrances.
          </p>

          <a
            href="/shop"
            className="inline-block rounded-full bg-yellow-500 px-10 py-4 font-bold text-black transition hover:bg-yellow-400"
          >
            Explore Collection
          </a>

        </div>

      </section>


      {/* Collection */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <h2 className="mb-14 text-center text-4xl font-bold text-yellow-500">
            Our Luxury Collection
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-yellow-600/60 p-8 text-center transition hover:bg-gray-950">
              <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gray-900 text-5xl">
                👗
              </div>

              <h3 className="text-2xl font-semibold text-yellow-500">
                Luxury Garments
              </h3>

              <p className="mt-3 text-gray-400">
                Elegant designs for every occasion.
              </p>
            </div>


            <div className="rounded-2xl border border-yellow-600/60 p-8 text-center transition hover:bg-gray-950">
              <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gray-900 text-5xl">
                💎
              </div>

              <h3 className="text-2xl font-semibold text-yellow-500">
                Premium Jewellery
              </h3>

              <p className="mt-3 text-gray-400">
                Timeless beauty and luxury details.
              </p>
            </div>


            <div className="rounded-2xl border border-yellow-600/60 p-8 text-center transition hover:bg-gray-950">
              <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gray-900 text-5xl">
                🌹
              </div>

              <h3 className="text-2xl font-semibold text-yellow-500">
                Luxury Perfumes
              </h3>

              <p className="mt-3 text-gray-400">
                Exclusive fragrances for your personality.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* About */}
      <section id="about" className="bg-gray-950 px-6 py-24">

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 tracking-[4px] text-yellow-500">
            ABOUT HUSSAFA
          </p>

          <h2 className="mb-6 text-4xl font-bold">
            Elegance. Quality. Luxury.
          </h2>

          <p className="leading-8 text-gray-400">
            HUSSAFA BOUTIQUE is dedicated to bringing refined fashion,
            beautiful jewellery and exclusive fragrances together in one
            luxurious collection. Our goal is to offer timeless style,
            premium quality and an elegant shopping experience.
          </p>

        </div>

      </section>


      {/* Why HUSSAFA */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <h2 className="mb-14 text-center text-4xl font-bold text-yellow-500">
            Why Choose HUSSAFA?
          </h2>

          <div className="grid gap-10 text-center md:grid-cols-3">

            <div>
              <h3 className="mb-3 text-xl font-semibold text-yellow-500">
                Premium Quality
              </h3>

              <p className="text-gray-400">
                Carefully selected luxury collections.
              </p>
            </div>


            <div>
              <h3 className="mb-3 text-xl font-semibold text-yellow-500">
                Elegant Designs
              </h3>

              <p className="text-gray-400">
                Modern styles with timeless elegance.
              </p>
            </div>


            <div>
              <h3 className="mb-3 text-xl font-semibold text-yellow-500">
                Worldwide Service
              </h3>

              <p className="text-gray-400">
                Serving customers globally.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="bg-gray-950 px-6 py-24 text-center">

        <p className="mb-4 tracking-[4px] text-yellow-500">
          CONTACT US
        </p>

        <h2 className="mb-6 text-4xl font-bold">
          Ready To Order?
        </h2>

        <p className="mb-8 text-gray-400">
          Contact HUSSAFA BOUTIQUE directly on WhatsApp.
        </p>

        <a
          href="https://wa.me/447388454498"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-500"
        >
          Order On WhatsApp
        </a>

      </section>


      {/* Footer */}
      <footer className="border-t border-yellow-600/40 px-6 py-8 text-center text-gray-500">
        © 2026 HUSSAFA BOUTIQUE. All rights reserved.
      </footer>

    </main>
  );
}
```
