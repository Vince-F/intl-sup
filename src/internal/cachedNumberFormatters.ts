import { getUserLocale } from "../core";
import { buildKey } from "./keyBuilder";

const cachedFormatters = new Map<string, Intl.NumberFormat>();

export function getNumberFomatter(options: Intl.NumberFormatOptions): Intl.NumberFormat {
  const key = buildKey(options);
  let formatter: Intl.NumberFormat | undefined = cachedFormatters.get(key);
  if (!formatter) {
    formatter = new Intl.NumberFormat(getUserLocale(), options);
    cachedFormatters.set(key, formatter);
  }
  return formatter;
}
