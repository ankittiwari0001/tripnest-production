"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Hotel {
  _id: string;
  name: string;
  location: string;
  category: string;
  price: number;
  image: string;
}

interface HotelsApiResponse {
  success: boolean;
  hotels?: Hotel[];
  message?: string;
}

export default function AdminHotelsPage() {
  const [hotels, setHotels] =
    useState<Hotel[]>([]);

  const [loading, setLoading] =
    useState(false);

  /* FORM STATE */

  const [name, setName] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [location, setLocation] =
    useState("");

  const [state, setState] =
    useState("");

  const [city, setCity] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [category, setCategory] =
    useState("Luxury");

  const [image, setImage] =
    useState("");

  /* FETCH HOTELS */

  const fetchHotels =
    async (): Promise<void> => {

      try {

        const res =
          await fetch(
            "/api/hotels"
          );

        if (!res.ok) {
          throw new Error(
            "Failed to fetch hotels"
          );
        }

        const data: HotelsApiResponse =
          await res.json();

        setHotels(
          Array.isArray(
            data.hotels
          )
            ? data.hotels
            : []
        );

      } catch (error) {

        console.error(
          "Fetch hotels error:",
          error
        );

        toast.error(
          "Failed to fetch hotels"
        );

        setHotels([]);

      }
    };

  useEffect(() => {
    void (async () => {
      await fetchHotels();
    })();
  }, []);

  /* ADD HOTEL */

  async function handleAddHotel(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      setLoading(true);

      const token =
        localStorage.getItem(
          "token"
        );

      const res =
        await fetch(
          "/api/hotels",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${token}`,
            },

            body: JSON.stringify({
              name,
              description,
              location,
              state,
              city,
              price:
                Number(price),
              category,
              image,

              amenities: [
                "WiFi",
                "Pool",
                "Parking",
              ],

              coordinates: {
                lat: 0,
                lng: 0,
              },
            }),
          }
        );

      const data =
        await res.json();

      if (!res.ok) {

        toast.error(
          data.message ||
            "Failed to add hotel"
        );

        return;
      }

      toast.success(
        "Hotel added 🚀"
      );

      /* RESET FORM */

      setName("");
      setDescription("");
      setLocation("");
      setState("");
      setCity("");
      setPrice("");
      setCategory(
        "Luxury"
      );
      setImage("");

      /* REFRESH HOTELS */

      await fetchHotels();

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to add hotel"
      );

    } finally {

      setLoading(false);

    }
  }

  /* DELETE HOTEL */

  async function handleDelete(
    id: string
  ) {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const res =
        await fetch(
          `/api/hotels/${id}`,
          {
            method: "DELETE",

            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      const data =
        await res.json();

      if (!res.ok) {

        toast.error(
          data.message ||
            "Delete failed"
        );

        return;
      }

      toast.success(
        "Hotel deleted"
      );

      await fetchHotels();

    } catch (error) {

      console.error(error);

      toast.error(
        "Delete failed"
      );

    }
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      {/* HEADER */}
      <div className="mb-14">

        <h1 className="text-5xl font-black mb-4">
          Hotel Management 🏨
        </h1>

        <p className="text-gray-500 text-lg">
          Add and manage hotels.
        </p>

      </div>

      {/* ADD FORM */}
      <div className="bg-white rounded-[32px] p-10 shadow-sm mb-20">

        <h2 className="text-3xl font-bold mb-8">
          Add Hotel
        </h2>

        <form
          onSubmit={
            handleAddHotel
          }
          className="grid md:grid-cols-2 gap-6"
        >

          <input
            type="text"
            placeholder="Hotel name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="border border-gray-300 rounded-2xl px-5 py-4"
            required
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) =>
              setLocation(
                e.target.value
              )
            }
            className="border border-gray-300 rounded-2xl px-5 py-4"
            required
          />

          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) =>
              setState(
                e.target.value
              )
            }
            className="border border-gray-300 rounded-2xl px-5 py-4"
            required
          />

          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) =>
              setCity(
                e.target.value
              )
            }
            className="border border-gray-300 rounded-2xl px-5 py-4"
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(
                e.target.value
              )
            }
            className="border border-gray-300 rounded-2xl px-5 py-4"
            required
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            className="border border-gray-300 rounded-2xl px-5 py-4"
          >

            <option>
              Luxury
            </option>

            <option>
              Budget
            </option>

            <option>
              Resort
            </option>

          </select>

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) =>
              setImage(
                e.target.value
              )
            }
            className="border border-gray-300 rounded-2xl px-5 py-4 md:col-span-2"
            required
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="border border-gray-300 rounded-2xl px-5 py-4 md:col-span-2 h-40"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition md:col-span-2 disabled:opacity-50"
          >

            {loading
              ? "Adding..."
              : "Add Hotel"}

          </button>

        </form>

      </div>

      {/* HOTELS LIST */}
      <div>

        <h2 className="text-4xl font-black mb-10">
          Existing Hotels
        </h2>

        {hotels.length === 0 ? (

          <p className="text-gray-500">
            No hotels found.
          </p>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {hotels.map(
              (hotel) => (

                <div
                  key={hotel._id}
                  className="bg-white rounded-[32px] overflow-hidden shadow-sm"
                >

                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="h-60 w-full object-cover"
                  />

                  <div className="p-6">

                    <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">

                      {hotel.category}

                    </span>

                    <h3 className="text-3xl font-black mt-5 mb-3">

                      {hotel.name}

                    </h3>

                    <p className="text-gray-500 mb-6">

                      📍 {hotel.location}

                    </p>

                    <div className="flex items-center justify-between">

                      <p className="text-3xl font-black text-blue-600">

                        ₹{hotel.price}

                      </p>

                      <button
                        onClick={() =>
                          handleDelete(
                            hotel._id
                          )
                        }
                        className="bg-red-500 text-white px-5 py-3 rounded-2xl hover:bg-red-600 transition"
                      >

                        Delete

                      </button>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </div>

    </main>
  );
}