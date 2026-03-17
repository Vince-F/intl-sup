/**
 *
 * @param locale
 * @throws {Error} Throws if the local is invalid.
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Deno 1.8, Bun 1
 */
export declare function setUserLocale(locale: string): void;
/**
 *
 * @returns
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Deno 1.8, Bun 1
 */
export declare function getUserLocale(): Intl.Locale;
