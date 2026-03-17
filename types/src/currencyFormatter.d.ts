export type RoudingMethod = "ceil" | "floor" | "round";
/**
 * Format currency based on current user locale and provided currency code, with cents if local supports it.
 * @param amount Amount to display, either as a float or an integer.
 * @param currencyCode The currency code (for instance "USD", "EUR", "JPY", etc.).
 * @returns formatted amount with the currency symbol.
 * @since 1.0.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export declare function formatCurrency(amount: number, currencyCode: string): string;
/**
 * Format currency based on current user locale and provided currency code, without cents.
 * @param amount Amount to display, either as a float or an integer.
 * @param currencyCode The currency code (for instance "USD", "EUR", "JPY", etc.).
 * @param roundingMethod The rounding method, "round" will round to the nearest integer, "ceil" will round up and "floor" will round down. Default is "round".
 * @returns formatted amount with the currency symbol.
 * @since 1.0.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export declare function formatCurrencyWithoutDecimal(amount: number, currencyCode: string, roundingMethod?: RoudingMethod): string;
