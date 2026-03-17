import { getUserLocale } from "./core";
import { buildKey } from "./internal/keyBuilder";
export type DateStyleShort = "full" | "long" | "medium" | "short";
export type DateStyleLong = {
  dayPeriod?: "narrow" | "short" | "long";
  weekday?: "long" | "short" | "narrow";
  day?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
  year?: "numeric" | "2-digit" ;
  era?: "long" | "short" | "narrow";
};

const cachedFormatters: Map<string, Intl.DateTimeFormat> = new Map();

/**
 * Format a date only based on current user locale.
 *
 * @param date The date to format, the time doesn't matter.
 * @param format Format options either in shortcut form with ({@link DateStyleShort} or detailled form with {@link DateStyleLong}).
 * @returns The formatted date string.
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Bun 1, Deno 1.8
 */
export function formatDate(date: Date, format: DateStyleShort | DateStyleLong): string {
  let key: string = buildKey(format);
  let formatter: Intl.DateTimeFormat;

  if (cachedFormatters.has(key)) {
    formatter = cachedFormatters.get(key)!;
  } else {
    let dateFormaterOption: Intl.DateTimeFormatOptions | undefined;
    if (typeof format === "string") {
      dateFormaterOption = {
        dateStyle: format,
      }
    } else {
      dateFormaterOption = format;
    }
    formatter = new Intl.DateTimeFormat(getUserLocale(), dateFormaterOption);
    cachedFormatters.set(key, formatter);
  }
  
  return formatter.format(date);
}