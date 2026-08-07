export default function Shop() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="text-center py-20 px-6">

        <h1 className="text-4xl font-bold text-yellow-500 mb-6">
          HUSSAFA BOUTIQUE SHOP
        </h1>

        <p className="text-gray-300 mb-10">
          Our luxury collections are coming soon.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-yellow-600 p-8 rounded">
            <h2 className="text-xl text-yellow-500">
              Garments
            </h2>
            <p>Coming Soon</p>
          </div>

          <div className="border border-yellow-600 p-8 rounded">
            <h2 className="text-xl text-yellow-500">
              Jewellery
            </h2>
            <p>Coming Soon</p>
          </div>

          <div className="border border-yellow-600 p-8 rounded">
            <h2 className="text-xl text-yellow-500">
              Perfumes
            </h2>
            <p>Coming Soon</p>
          </div>

        </div>

      </section>

    </main>
  );
}
