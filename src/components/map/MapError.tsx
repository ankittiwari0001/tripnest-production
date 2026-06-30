"use client";

interface Props {

  message?: string;

  onRetry?: () => void;
}

export default function MapError({

  message =
    "Unable to load nearby places",

  onRetry,
}: Props) {

  return (

    <div className="absolute inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center">

      <div className="bg-white rounded-[32px] px-10 py-8 shadow-2xl flex flex-col items-center gap-6 max-w-md text-center">

        {/* ICON */}

        <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-4xl">

          ⚠️

        </div>

        {/* TEXT */}

        <div>

          <h3 className="text-2xl font-black">

            Something Went Wrong

          </h3>

          <p className="text-gray-500 mt-3 leading-relaxed">

            {message}

          </p>

        </div>

        {/* RETRY */}

        {onRetry && (

          <button

            onClick={onRetry}

            className="bg-black text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-black/10"
          >

            Retry

          </button>
        )}

      </div>

    </div>
  );
}