export type CurrencyPosition = "before" | "after";
/**
 * Checks if the currency is supported by the current environment.
 * @param currencyCode The currency code (for instance "USD", "EUR", "JPY", etc.).
 * @returns true if supported, false otherwise.
 * @since 1.0.0
 * @remarks Browser support: Chrome 99, Edge 99, Firefox 93, Opera 85, Safari 15.4, Node 18, Deno 1.19, Bun 1
 */
export declare function isCurrencySupported(currencyCode: string): boolean;
/**
 * Get the symbol of a currency.
 * @param currencyCode The currency code (for instance "USD", "EUR", "JPY", etc.).
 * @returns Symbol of the currency, if the currency is not supported, it will return the currency code.
 * @since 1.0.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export declare function getCurrencySymbol(currencyCode: string): string;
/**
 * Get the symbol of a currency in its narrow form.
 * @param currencyCode The currency code (for instance "USD", "EUR", "JPY", etc.).
 * @returns Symbol of the currency, if the currency is not supported, it will return the currency code.
 * @since 1.0.0
 * @remarks Browser support: Chrome 77, Edge 79, Firefox 42, Opera 64, Safari 14.1, Node 12.11; Deno 1.8, Bun 1
 */
export declare function getCurrencyNarrowSymbol(currencyCode: string): string;
/**
 * Get the position of the currency symbol for given currency and user locale.
 * @param currencyCode The currency code (for instance "USD", "EUR", "JPY", etc.).
 * @returns "before" if the symbol is before the amount, "after" if the symbol is after the amount.
 * @since 1.0.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export declare function getCurrencyPosition(currencyCode: string): CurrencyPosition;
/**
 * Checks if the currency symbol is positioned before the amount for the given currency and user locale.
 * @param currencyCode The currency code (for instance "USD", "EUR", "JPY", etc.).
 * @returns true if the currency symbol is before the amount, false otherwise.
 * @since 1.0.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export declare function isCurrencySymbolBeforeAmount(currencyCode: string): boolean;
/**
 * Checks if the currency symbol is positioned after the amount for the given currency and user locale.
 * @param currencyCode The currency code (for instance "USD", "EUR", "JPY", etc.).
 * @returns true if the currency symbol is after the amount, false otherwise.
 * @since 1.0.0
 * @remarks Browser support: Chrome 24, Edge 12, Firefox 29, Opera 15, Safari 10, Node 0.23, Deno 1.8, Bun 1
 */
export declare function isCurrencySymbolAfterAmount(currencyCode: string): boolean;
