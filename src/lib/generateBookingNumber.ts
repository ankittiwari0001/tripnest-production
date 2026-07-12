import Counter from "@/models/Counter";

/**
 * Generate a unique booking number
 * Format: TRP-2026-000001
 */

export async function generateBookingNumber(): Promise<string> {
  const year = new Date().getFullYear();

  const counter = await Counter.findOneAndUpdate(
    {
      name: "booking",
    },
    {
      $inc: {
        sequence: 1,
      },
    },
    {
      new: true,
      upsert: true,
    }
  );

  const sequence = counter.sequence
    .toString()
    .padStart(6, "0");

  return `TRP-${year}-${sequence}`;
}