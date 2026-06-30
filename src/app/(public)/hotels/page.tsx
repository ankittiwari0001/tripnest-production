import HotelsList from "@/components/hotels/HotelsList";

export default function HotelsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl font-black mb-6">
            Discover Hotels 🏨
          </h1>

          <p className="text-blue-100 text-xl">
            Luxury stays and unforgettable experiences.
          </p>
        </div>
      </section>

      <HotelsList />
    </main>
  );
}