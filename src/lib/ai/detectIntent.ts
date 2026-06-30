import { AIIntent }
from "@/types/ai";

export function detectIntent(
  message: string
): AIIntent {

  const lower =
    message.toLowerCase();

  /* TRANSLATION */

  if (
    lower.includes(
      "translate"
    ) ||

    lower.includes(
      "language"
    ) ||

    lower.includes(
      "meaning"
    )
  ) {

    return "translation";
  }

  /* BUDGET */

  if (
    lower.includes(
      "budget"
    ) ||

    lower.includes("₹")
  ) {

    return "budget";
  }

  /* WEATHER */

  if (
    lower.includes(
      "weather"
    ) ||

    lower.includes(
      "rain"
    ) ||

    lower.includes(
      "temperature"
    )
  ) {

    return "weather";
  }

  /* ITINERARY */

  if (
    lower.includes(
      "trip plan"
    ) ||

    lower.includes(
      "itinerary"
    )
  ) {

    return "itinerary";
  }

  /* EMERGENCY */

  if (
    lower.includes(
      "hospital"
    ) ||

    lower.includes(
      "police"
    ) ||

    lower.includes(
      "help"
    )
  ) {

    return "emergency";
  }

  return "travel";
}