"use client";

interface Props {

  onExplore?: () => void;
}

export default function DrawerFooter({

  onExplore,
}: Props) {

  return (

    <button

      onClick={onExplore}

      className="
        w-full
        bg-black
        text-white
        rounded-[28px]
        py-5
        text-lg
        font-bold
        hover:scale-[1.02]
        active:scale-[0.98]
        transition-all
        duration-300
        shadow-lg
      "
    >

      Explore This Destination

    </button>

  );
}