export default function Shop() {
  return (
    <main className="min-h-screen bg-black text-white">

      <header className="p-6 border-b border-yellow-600">
        <h1 className="text-3xl font-bold text-yellow-500">
          HUSSAFA BOUTIQUE
        </h1>
      </header>


      <section className="text-center py-20 px-6">

        <h2 className="text-4xl font-bold text-yellow-500 mb-6">
          Our Collection
        </h2>

        <p className="text-gray-300 mb-10">
          Our luxury collections are being prepared.
          Products will be available soon.
        </p>


        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-yellow-600 p-8 rounded">
            <h3 className="text-xl text-yellow-500">
              Garments
            </h3>
            <p className="mt-3">
              Coming Soon
            </p>
          </div>


          <div className="border border-yellow-600 p-8 rounded">
            <h3 className="text-xl text-yellow-500">
              Jewellery
            </h3>
            <p className="mt-3">
              Coming Soon
            </p>
          </div>


          <div className="border border-yellow-600 p-8 rounded">
            <h3 className="text-xl text-yellow-500">
              Perfumes
            </h3>
            <p className="mt-3">
              Coming Soon
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}
