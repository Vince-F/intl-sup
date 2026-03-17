/**
 * Initliaze the locale for the library, all other utilities rely on this.
 * It can be called multiple times to change the locale.
 *
 * @param locale The local to be set, it's expected to be valid or the function will throw.
 * @throws {Error} Throws if the local is invalid.
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Deno 1.8, Bun 1
 */
export declare function setUserLocale(locale: string): void;
/**
 * Retrieve the current user locale.
 *
 * @throws {Error} Throws if the local is invalid.
 * @returns The current user locale.
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Deno 1.8, Bun 1
 */
export declare function getUserLocale(): Intl.Locale;
