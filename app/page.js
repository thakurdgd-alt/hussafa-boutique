export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <p className="text-yellow-500 tracking-[5px] mb-4">
          LUXURY FASHION HOUSE
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-yellow-500 mb-6">
          HUSSAFA
          <br />
          BOUTIQUE
        </h1>

        <p className="text-gray-300 max-w-xl text-lg mb-8">
          Where elegance meets luxury. Discover premium garments,
          jewellery and exclusive fragrances.
        </p>


        <a href="/shop">
          <button className="bg-yellow-500 text-black px-10 py-4 rounded-full font-bold hover:bg-yellow-400">
            Explore Collection
          </button>
        </a>

      </section>



      {/* Categories */}
      <section className="py-20 px-8">

        <h2 className="text-4xl text-center text-yellow-500 font-bold mb-12">
          Our Luxury Collection
        </h2>


        <div className="grid md:grid-cols-3 gap-8">


          <div className="border border-yellow-600 rounded-xl p-8 text-center hover:bg-gray-900">
            <div className="h-48 bg-gray-900 rounded mb-6 flex items-center justify-center">
              Fashion
            </div>

            <h3 className="text-2xl text-yellow-500">
              Luxury Garments
            </h3>

            <p className="text-gray-400 mt-3">
              Elegant designs for every occasion.
            </p>

          </div>



          <div className="border border-yellow-600 rounded-xl p-8 text-center hover:bg-gray-900">
            <div className="h-48 bg-gray-900 rounded mb-6 flex items-center justify-center">
              Jewellery
            </div>

            <h3 className="text-2xl text-yellow-500">
              Premium Jewellery
            </h3>

            <p className="text-gray-400 mt-3">
              Timeless beauty and luxury details.
            </p>

          </div>



          <div className="border border-yellow-600 rounded-xl p-8 text-center hover:bg-gray-900">
            <div className="h-48 bg-gray-900 rounded mb-6 flex items-center justify-center">
              Fragrance
            </div>

            <h3 className="text-2xl text-yellow-500">
              Luxury Perfumes
            </h3>

            <p className="text-gray-400 mt-3">
              Exclusive fragrances for your personality.
            </p>

          </div>


        </div>

      </section>



      {/* Why Choose Us */}
      <section className="py-16 bg-gray-950 text-center px-6">

        <h2 className="text-3xl text-yellow-500 font-bold mb-8">
          Why Choose HUSSAFA?
        </h2>


        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h3 className="text-xl text-yellow-500">
              Premium Quality
            </h3>
            <p className="text-gray-400">
              Carefully selected luxury collections.
            </p>
          </div>


          <div>
            <h3 className="text-xl text-yellow-500">
              Elegant Designs
            </h3>
            <p className="text-gray-400">
              Modern styles with timeless elegance.
            </p>
          </div>


          <div>
            <h3 className="text-xl text-yellow-500">
              Worldwide Service
            </h3>
            <p className="text-gray-400">
              Serving customers globally.
            </p>
          </div>

        </div>

      </section>



      {/* WhatsApp Section */}
      <section className="py-16 text-center">

        <h2 className="text-3xl font-bold text-yellow-500 mb-6">
          Ready To Order?
        </h2>

        <a
          href="https://wa.me/447388454498"
          target="_blank"
          className="bg-green-600 px-8 py-3 rounded-full"
        >
          Order On WhatsApp
        </a>

      </section>



      {/* Footer */}
      <footer className="border-t border-yellow-600 py-6 text-center text-gray-400">

        © 2026 HUSSAFA BOUTIQUE

      </footer>


    </main>
  );
}
