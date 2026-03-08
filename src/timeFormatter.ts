import { getUserLocale } from "./core";
import { buildKey } from "./internal/keyBuilder";
export type TimeStyleShort = "full" | "long" | "medium" | "short";
export type TimeStyleLong = {
  hour: "numeric" | "2-digit" | undefined;
  minute: "numeric" | "2-digit" | undefined;
  second: "numeric" | "2-digit" | undefined;
  fractionalSecondDigits: 1 | 2 | 3 | undefined;
};

const cachedFormatters: Map<string, Intl.DateTimeFormat> = new Map();

export function formatTime(date: Date, format: TimeStyleShort | TimeStyleLong): string {
  let key: string = buildKey(format);
  let formatter: Intl.DateTimeFormat;

  if (cachedFormatters.has(key)) {
    formatter = cachedFormatters.get(key)!;
  } else {
    let dateFormaterOption: Intl.DateTimeFormatOptions | undefined;
    if (typeof format === "string") {
      dateFormaterOption = {
        timeStyle: format,
      }
    } else {
      dateFormaterOption = format;
    }
    formatter = new Intl.DateTimeFormat(getUserLocale(), dateFormaterOption);
    cachedFormatters.set(key, formatter);
  }
  
  return formatter.format(date);
}