"use client";

export default function MapLoading() {

  return (

    <div className="absolute inset-0 z-[9999] bg-black/30 backdrop-blur-sm flex items-center justify-center">

      <div className="bg-white rounded-[32px] px-10 py-8 shadow-2xl flex flex-col items-center gap-5">

        {/* SPINNER */}

        <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin" />

        {/* TEXT */}

        <div className="text-center">

          <h3 className="text-2xl font-black">

            Loading Places

          </h3>

          <p className="text-gray-500 mt-2">

            Discovering nearby hotels,
            restaurants & attractions...
          </p>

        </div>

      </div>

    </div>
  );
}