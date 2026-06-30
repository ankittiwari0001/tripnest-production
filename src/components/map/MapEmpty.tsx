"use client";

type MapEmptyProps = {
  onReset: () => void;
};

export default function MapEmpty({ onReset }: MapEmptyProps) {
  return (
    <div className="absolute inset-0 z-[9998] flex items-center justify-center">
      <div className="bg-white/95 backdrop-blur-xl rounded-[32px] px-10 py-8 shadow-2xl border border-white/20 max-w-md text-center">
        {/* ICON */}
        <div className="text-6xl mb-5">🗺️</div>

        {/* TITLE */}
        <h3 className="text-2xl font-black">No Places Found</h3>

        {/* DESCRIPTION */}
        <p className="text-gray-500 mt-3 leading-relaxed">
          We could not find nearby hotels,
          restaurants, or attractions in
          this area.

          <br />
          <br />

          Try moving the map or searching
          another location.
        </p>

        <button
          onClick={onReset}
          className="mt-5 px-5 py-3 rounded-2xl bg-black text-white font-semibold hover:scale-105 transition-all"
        >
          Explore Nearby
        </button>
      </div>
    </div>
  );
}