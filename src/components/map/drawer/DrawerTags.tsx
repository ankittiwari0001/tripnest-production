"use client";

interface Props {
  vibe?: string;
}

export default function DrawerTags({
  vibe,
}: Props) {

  const tags =
    (vibe ||
      "Luxury • Nature • Sunset")
      .split("•")
      .map((tag) =>
        tag.trim()
      )
      .filter(Boolean);

  return (

    <div className="flex flex-wrap gap-3 mb-8">

      {tags.map((tag) => (

        <span

          key={tag}

          className="
            px-4
            py-2
            rounded-full
            bg-zinc-100
            text-sm
            font-semibold
            text-zinc-700
            hover:bg-zinc-200
            transition-colors
          "
        >

          {tag}

        </span>

      ))}

    </div>

  );
}