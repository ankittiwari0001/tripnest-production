"use client";

import {
  useEffect,
  useState,
} from "react";

interface Restaurant {

  _id: string;

  name: string;

  image: string;

  cuisine: string;

  location: string;

  rating: number;

  priceRange: string;
}

export default function RestaurantsList() {

  const [
    restaurants,
    setRestaurants,
  ] = useState<
    Restaurant[]
  >([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function fetchRestaurants() {

      try {

        const res =
          await fetch(
            "/api/restaurants"
          );

        const data =
          await res.json();

        setRestaurants(
          data.restaurants
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    }

    fetchRestaurants();

  }, []);

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        Loading Restaurants...

      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {restaurants.map(
          (
            restaurant
          ) => (

            <div
              key={
                restaurant._id
              }
              className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >

              {/* IMAGE */}
              <div className="relative">

                <img
                  src={
                    restaurant.image
                  }
                  alt={
                    restaurant.name
                  }
                  className="h-72 w-full object-cover"
                />

                <div className="absolute top-5 right-5 bg-white/90 px-4 py-2 rounded-full">

                  ⭐{" "}
                  {
                    restaurant.rating
                  }

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-7">

                <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">

                  {
                    restaurant.cuisine
                  }

                </span>

                <h2 className="text-3xl font-black mt-5 mb-3">

                  {
                    restaurant.name
                  }

                </h2>

                <p className="text-gray-500 mb-6">

                  📍{" "}
                  {
                    restaurant.location
                  }

                </p>

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-3xl font-black text-orange-600">

                      {
                        restaurant.priceRange
                      }

                    </p>

                    <span className="text-gray-400 text-sm">

                      price range

                    </span>

                  </div>

                  <button className="bg-orange-500 text-white px-5 py-3 rounded-2xl">

                    Reserve

                  </button>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    </section>
  );
}