import SmartExplore from "@/components/explore/SmartExplore";

export default function ExplorePage() {

  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-6xl font-black mb-6">

            Smart Tourism Explorer 🌍

          </h1>

          <p className="text-purple-100 text-xl">

            Discover nearby attractions, hotels, food and culture.

          </p>

        </div>

      </section>

      <SmartExplore />

    </main>
  );
}