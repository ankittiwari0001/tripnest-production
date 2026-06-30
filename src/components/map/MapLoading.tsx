"use client";

export default function MapLoading() {

  return (

    <div
      className="
        absolute
        inset-0
        z-[999] 
        bg-white/70
        backdrop-blur-sm
        flex
        items-center
        justify-center
      "
    >

      <div
        className="
          w-[320px]
          bg-white
          rounded-[32px]
          shadow-xl
          p-6
        "
      >

        <div
          className="
            h-6
            w-40
            rounded-lg
            bg-zinc-200
            animate-pulse
            mb-6
          "
        />

        <div className="space-y-4">

          {[1, 2, 3].map(
            (item) => (

              <div

                key={item}

                className="
                  flex
                  items-center
                  gap-4
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-zinc-200
                    animate-pulse
                  "
                />

                <div className="flex-1">

                  <div
                    className="
                      h-4
                      w-full
                      rounded
                      bg-zinc-200
                      animate-pulse
                      mb-2
                    "
                  />

                  <div
                    className="
                      h-4
                      w-2/3
                      rounded
                      bg-zinc-200
                      animate-pulse
                    "
                  />

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
}