import { getUserLocale } from "./core";
import { buildKey } from "./internal/keyBuilder";

const cachedFormatters = new Map<string, Intl.NumberFormat>();

export type RoudingMethod = "ceil" | "floor" | "round"; 

/**
 * Format number based on current user locale.
 * @param number Number to display, either as a float or an integer.
 * @returns formatted number string.
 * @since 1.1.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export function formatNumber(number: number): string {
  const key = buildKey("number");
  let formatter: Intl.NumberFormat | undefined = cachedFormatters.get(key);
  if (!formatter) {
    formatter = new Intl.NumberFormat(getUserLocale(), {
      style: "decimal"
    });
    cachedFormatters.set(key, formatter);
  }
  return formatter.format(number);
}

/**
 * Format number based on current user locale, without decimals.
 * @param number Number to display, either as a float or an integer.
 * @param roundingMethod The rounding method, "round" will round to the nearest integer, "ceil" will round up and "floor" will round down. Default is "round".
 * @returns formatted number string.
 * @since 1.1.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export function formatNumberWithoutDecimal(number: number, roundingMethod: RoudingMethod = "round"): string {
  const key = buildKey("numberWoDecimal");
  let formatter: Intl.NumberFormat | undefined = cachedFormatters.get(key);
  if (!formatter) {
    formatter = new Intl.NumberFormat(getUserLocale(), {
      style: "decimal",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    });
    cachedFormatters.set(key, formatter);
  }
  let amountRounded: number;
  switch (roundingMethod) {
    case "ceil":
      amountRounded = Math.ceil(number);
      break;
    case "floor":
      amountRounded = Math.floor(number);
      break;
    case "round":
    default:
      amountRounded = Math.round(number);
      break;
  }
  return formatter.format(amountRounded);
}