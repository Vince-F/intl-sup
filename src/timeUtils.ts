import { getDateTimeFormatter } from "./internal/cachedDateFormatters";

const sampleDate = new Date("2026-01-25T18:30:00");

/**
 * Check if the current local uses 24 hour clock.
 * @returns true if using 24 hour clock, false otherwise.
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Bun 1, Deno 1.8
 */
export function isUsing24HourClock(): boolean {
  const formatter = getDateTimeFormatter({ hour: "numeric" });
  const formatedDate = formatter.format(sampleDate);
  return !formatedDate.match(/AM|PM/i);
}

/**
 * Check if the current local uses 12 hour clock.
 * @returns true if using 12 hour clock, false otherwise.
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Bun 1, Deno 1.8
 */
export function isUsing12HourClock(): boolean {
  return !isUsing24HourClock();
}
