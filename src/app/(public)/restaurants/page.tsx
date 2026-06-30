import RestaurantsList from "@/components/restaurants/RestaurantsList";

export default function RestaurantsPage() {

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-6xl font-black mb-6">

            Explore Restaurants 🍽

          </h1>

          <p className="text-orange-100 text-xl">

            Discover cuisines and unforgettable dining experiences.

          </p>

        </div>

      </section>

      <RestaurantsList />

    </main>
  );
}