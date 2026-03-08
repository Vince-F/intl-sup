import { getUserLocale } from "./core";
import type { DateStyleShort } from "./dateFormatter";
import { buildKey } from "./internal/keyBuilder";
import type { TimeStyleShort } from "./timeFormatter";
export type DateTimeStyle = {
  dateStyle: DateStyleShort,
  timeStyle: TimeStyleShort
};
export type DateStyleLong = {
  dayPeriod: "narrow" | "short" | "long" | undefined;
  weekday: "long" | "short" | "narrow"| undefined;
  day: "numeric" | "2-digit" | undefined;
  month: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
  year: "numeric" | "2-digit" | undefined;
  era: "long" | "short" | "narrow"| undefined;
};

const cachedFormatters: Map<string, Intl.DateTimeFormat> = new Map();

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