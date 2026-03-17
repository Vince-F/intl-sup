export type CurrencyPosition = "before" | "after";
/**
 *
 * @param currencyCode
 * @returns
 * @since 1.0.0
 * @remarks Browser support: Chrome 99, Edge 99, Firefox 93, Opera 85, Safari 15.4, Node 18, Deno 1.19, Bun 1
 */
export declare function isCurrencySupported(currencyCode: string): boolean;
/**
 *
 * @param currencyCode
 * @returns
 * @since 1.0.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export declare function getCurrencySymbol(currencyCode: string): string;
/**
 *
 * @param currencyCode
 * @returns
 * @since 1.0.0
 * @remarks Browser support: Chrome 77, Edge 79, Firefox 42, Opera 64, Safari 14.1, Node 12.11; Deno 1.8, Bun 1
 */
export declare function getCurrencyNarrowSymbol(currencyCode: string): string;
/**
 *
 * @param currencyCode
 * @returns
 * @since 1.0.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export declare function getCurrencyPosition(currencyCode: string): CurrencyPosition;
/**
 *
 * @param currencyCode
 * @returns
 * @since 1.0.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export declare function isCurrencySymbolBeforeAmount(currencyCode: string): boolean;
/**
 *
 * @param currencyCode
 * @returns
 * @since 1.0.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export declare function isCurrencySymbolAfterAmount(currencyCode: string): boolean;
