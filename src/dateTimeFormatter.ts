import { getUserLocale } from "./core";
import { buildKey } from "./internal/keyBuilder";

const cachedFormatters: Map<string, Intl.DateTimeFormat> = new Map();

/**
 * Format date & time based on current user locale.
 * 
 * @param date The date and time to format.
 * @param format Format options.
 * @returns The formatted date and time string.
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Bun 1, Deno 1.8
 */
export function formatDate(date: Date, format: Intl.DateTimeFormatOptions): string {
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