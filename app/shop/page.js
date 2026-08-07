export default function Shop() {
  const categories = [
    {
      title: "Luxury Garments",
      description: "Elegant fashion collections for modern style.",
      price: "Coming Soon",
    },
    {
      title: "Premium Jewellery",
      description: "Beautiful jewellery collections with luxury designs.",
      price: "Coming Soon",
    },
    {
      title: "Luxury Perfumes",
      description: "Exclusive fragrances for a unique personality.",
      price: "Coming Soon",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      <header className="p-6 border-b border-yellow-600">
        <h1 className="text-3xl font-bold text-yellow-500 text-center">
          HUSSAFA BOUTIQUE
        </h1>
      </header>


      <section className="text-center py-16 px-6">

        <h2 className="text-4xl font-bold text-yellow-500 mb-4">
          Our Collection
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover luxury garments, jewellery and fragrances.
          Our exclusive products will be available soon.
        </p>

      </section>


      <section className="grid md:grid-cols-3 gap-8 px-8 pb-16">

        {categories.map((item, index) => (
          <div
            key={index}
            className="border border-yellow-600 rounded-lg p-8 text-center hover:bg-gray-900"
          >

            <div className="h-40 bg-gray-900 flex items-center justify-center mb-6 rounded">
              <span className="text-gray-400">
                Product Image
              </span>
            </div>


            <h3 className="text-2xl text-yellow-500 mb-3">
              {item.title}
            </h3>


            <p className="text-gray-300 mb-4">
              {item.description}
            </p>


            <p className="text-yellow-400 font-bold mb-5">
              {item.price}
            </p>


            <button className="bg-yellow-500 text-black px-6 py-2 rounded">
              View Details
            </button>
              <a
  href="https://wa.me/447388454498"
  target="_blank"
  className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded"
>
  Order on WhatsApp
</a>

          </div>
        ))}

      </section>


      <footer className="border-t border-yellow-600 p-6 text-center text-gray-400">
        © 2026 HUSSAFA BOUTIQUE
      </footer>

    </main>
  );
}
