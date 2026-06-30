export function createMarkerIcon(type: string, L: typeof import("leaflet")) {
  let bgColor = "#ec4899";
  let icon = "🏨";

  if (["hotel", "hostel", "guest_house", "resort"].includes(type)) {
    bgColor = "#ec4899";
    icon = "🏨";
  } else if (["restaurant", "cafe", "fast_food"].includes(type)) {
    bgColor = "#f59e0b";
    icon = "🍴";
  } else if (type === "attraction") {
    bgColor = "#22c55e";
    icon = "🌴";
  }

  const html = `
    <div
      style="
        width:46px;
        height:46px;
        background:${bgColor};
        border-radius:999px;
        display:flex;
        align-items:center;
        justify-content:center;
        border:4px solid white;
        color:white;
        font-size:20px;
        box-shadow:0 10px 25px rgba(0,0,0,.2);
      "
    >
      ${icon}
    </div>
  `;

  return L.divIcon({
    html,
    className: "",
    iconSize: [46, 46],
  });
}