import { getUserLocale } from "./core";

const cachedFormatters = new Map<string, Intl.NumberFormat>();

export type RoudingMethod = "ceil" | "floor" | "round"; 

/**
 * 
 * @param amount 
 * @param currencyCode 
 * @returns 
 * @since 1.0.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export function formatCurrency(amount: number, currencyCode: string): string {
  let formatter: Intl.NumberFormat | undefined = cachedFormatters.get(currencyCode);
  if (!formatter) {
    formatter = new Intl.NumberFormat(getUserLocale(), {
      style: "currency",
      currency: currencyCode
    });
    cachedFormatters.set(currencyCode, formatter);
  }
  return formatter.format(amount);
}

/**
 * 
 * @param amount 
 * @param currencyCode 
 * @param roundingMethod 
 * @returns 
 * @since 1.0.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export function formatCurrencyWithoutDecimal(amount: number, currencyCode: string, roundingMethod: RoudingMethod = "round"): string {
  let formatter: Intl.NumberFormat | undefined = cachedFormatters.get(currencyCode);
  if (!formatter) {
    formatter = new Intl.NumberFormat(getUserLocale(), {
      style: "currency",
      currency: currencyCode
    });
    cachedFormatters.set(currencyCode, formatter);
  }
  let amountRounded: number;
  switch (roundingMethod) {
    case "ceil":
      amountRounded = Math.ceil(amount);
      break;
    case "floor":
      amountRounded = Math.floor(amount);
      break;
    case "round":
    default:
      amountRounded = Math.round(amount);
      break;
  }
  return formatter.format(amountRounded);
}