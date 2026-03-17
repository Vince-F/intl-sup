export type RoudingMethod = "ceil" | "floor" | "round";
/**
 * Format number based on current user locale.
 * @param number Number to display, either as a float or an integer.
 * @returns formatted number string.
 * @since 1.1.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export declare function formatNumber(number: number): string;
/**
 * Format number based on current user locale, without decimals.
 * @param number Number to display, either as a float or an integer.
 * @param roundingMethod The rounding method, "round" will round to the nearest integer, "ceil" will round up and "floor" will round down. Default is "round".
 * @returns formatted number string.
 * @since 1.1.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export declare function formatNumberWithoutDecimal(number: number, roundingMethod?: RoudingMethod): string;
