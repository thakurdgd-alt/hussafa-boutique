export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <header className="p-6 border-b border-yellow-600 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-500">
          HUSSAFA BOUTIQUE
        </h1>

        <nav className="space-x-3 text-sm">
          <span>Home</span>
          <span>Shop</span>
          <span>Garments</span>
          <span>Jewellery</span>
          <span>Perfumes</span>
          <span>Contact</span>
        </nav>
      </header>


      <section className="text-center py-24 px-6">

        <h2 className="text-5xl font-bold text-yellow-500 mb-6">
          Luxury Fashion, Jewellery & Fragrances
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Welcome to HUSSAFA BOUTIQUE.
          Discover elegant garments, premium jewellery and luxury fragrances
          designed for a modern lifestyle.
        </p>

        <button className="bg-yellow-500 text-black px-8 py-3 rounded">
          Shop Now
        </button>

      </section>


      <section className="grid md:grid-cols-3 gap-6 p-8">

        <div className="border border-yellow-600 p-8 rounded text-center">
          <h3 className="text-2xl text-yellow-500 mb-3">
            Garments
          </h3>
          <p>
            Luxury fashion collections coming soon.
          </p>
        </div>


        <div className="border border-yellow-600 p-8 rounded text-center">
          <h3 className="text-2xl text-yellow-500 mb-3">
            Jewellery
          </h3>
          <p>
            Elegant jewellery collections coming soon.
          </p>
        </div>


        <div className="border border-yellow-600 p-8 rounded text-center">
          <h3 className="text-2xl text-yellow-500 mb-3">
            Perfumes
          </h3>
          <p>
            Luxury fragrances coming soon.
          </p>
        </div>

      </section>


      <section className="text-center p-8 border-t border-yellow-600">

        <h3 className="text-2xl text-yellow-500 mb-4">
          Contact Us
        </h3>

        <p>Email: umairaabdullah2018@gmail.com</p>

        <p>WhatsApp: +44 7388 454498</p>

        <p>TikTok: @omi.bay</p>

      </section>


      <footer className="text-center p-6 text-gray-400">
        © 2026 HUSSAFA BOUTIQUE
      </footer>

    </main>
  );
}
