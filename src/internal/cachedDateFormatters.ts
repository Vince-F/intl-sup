import { getUserLocale } from "../core";
import { buildKey } from "./keyBuilder";

const cachedFormatters: Map<string, Intl.DateTimeFormat> = new Map();

export function getDateTimeFormatter(options: Intl.DateTimeFormatOptions): Intl.DateTimeFormat {
  const key = buildKey(options);

  let formatter = cachedFormatters.get(key);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(getUserLocale(), options);
    cachedFormatters.set(key, formatter);
  }
  return formatter;
}
