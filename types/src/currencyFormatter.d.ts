export type RoudingMethod = "ceil" | "floor" | "round";
/**
 *
 * @param amount
 * @param currencyCode
 * @returns
 * @since 1.0.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export declare function formatCurrency(amount: number, currencyCode: string): string;
/**
 *
 * @param amount
 * @param currencyCode
 * @param roundingMethod
 * @returns
 * @since 1.0.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export declare function formatCurrencyWithoutDecimal(amount: number, currencyCode: string, roundingMethod?: RoudingMethod): string;
