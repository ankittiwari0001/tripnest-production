export default function RecentPlaces() {
  return (
    <div
      className="
        bg-white
        rounded-[40px]
        p-10
        border
        border-slate-200
        shadow-lg
      "
    >
      <h2
        className="
          text-3xl
          font-black
          mb-4
        "
      >
        Recent Activity
      </h2>

      <p className="text-slate-500">
        No recent activity yet.
      </p>
    </div>
  );
}