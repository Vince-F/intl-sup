import { getUserLocale } from "./core";

const sampleDate = new Date("2026-01-25T18:30:00");

/**
 * 
 * @returns 
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Bun 1, Deno 1.8
 */
export function isUsing24HourClock(): boolean {
  const locale = getUserLocale();
  const formatter = new Intl.DateTimeFormat(locale, { hour: "numeric"});
  const formatedDate = formatter.format(sampleDate)
  return !formatedDate.match(/AM|PM/i);
}

/**
 * 
 * @returns 
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Bun 1, Deno 1.8
 */
export function isUsing12HourClock(): boolean {
  return !isUsing24HourClock();
}