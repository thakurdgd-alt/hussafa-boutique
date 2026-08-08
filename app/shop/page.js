export default function Shop() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navigation */}
      <nav className="border-b border-yellow-600/30 bg-black">
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

            <a href="/shop" className="text-yellow-500">
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


      {/* Shop Header */}
      <section className="px-6 py-24 text-center">

        <p className="mb-4 tracking-[5px] text-yellow-500">
          HUSSAFA COLLECTION
        </p>

        <h1 className="mb-6 text-5xl font-bold text-yellow-500 md:text-6xl">
          Shop
        </h1>

        <p className="mx-auto max-w-2xl text-gray-400">
          Discover our carefully selected collection of luxury garments,
          jewellery and exclusive fragrances.
        </p>

      </section>


      {/* Products */}
      <section className="px-6 pb-24">

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-yellow-600/50 p-8 text-center">
            <div className="mb-6 flex h-56 items-center justify-center rounded-xl bg-gray-900 text-6xl">
              👗
            </div>

            <h2 className="text-2xl font-semibold text-yellow-500">
              Luxury Garments
            </h2>

            <p className="mt-3 text-gray-400">
              Elegant premium garments for every occasion.
            </p>

            <a
              href="https://wa.me/447388454498"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-green-600 px-6 py-3 font-semibold hover:bg-green-500"
            >
              Enquire on WhatsApp
            </a>
          </div>


          <div className="rounded-2xl border border-yellow-600/50 p-8 text-center">
            <div className="mb-6 flex h-56 items-center justify-center rounded-xl bg-gray-900 text-6xl">
              💎
            </div>

            <h2 className="text-2xl font-semibold text-yellow-500">
              Premium Jewellery
            </h2>

            <p className="mt-3 text-gray-400">
              Timeless jewellery with elegant luxury details.
            </p>

            <a
              href="https://wa.me/447388454498"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-green-600 px-6 py-3 font-semibold hover:bg-green-500"
            >
              Enquire on WhatsApp
            </a>
          </div>


          <div className="rounded-2xl border border-yellow-600/50 p-8 text-center">
            <div className="mb-6 flex h-56 items-center justify-center rounded-xl bg-gray-900 text-6xl">
              🌹
            </div>

            <h2 className="text-2xl font-semibold text-yellow-500">
              Luxury Perfumes
            </h2>

            <p className="mt-3 text-gray-400">
              Exclusive fragrances for a distinctive personality.
            </p>

            <a
              href="https://wa.me/447388454498"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-green-600 px-6 py-3 font-semibold hover:bg-green-500"
            >
              Enquire on WhatsApp
            </a>
          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="border-t border-yellow-600/40 px-6 py-8 text-center text-gray-500">
        © 2026 HUSSAFA BOUTIQUE. All rights reserved.
      </footer>

    </main>
  );
}
