let userLocaleComplete: Intl.Locale | undefined;

/**
 * 
 * @param locale
 * @throws {Error} Throws if the local is invalid.
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Deno 1.8, Bun 1
 */
export function setUserLocale(locale: string) {
  try {
    userLocaleComplete = new Intl.Locale(locale);
  } catch (e) {
    throw new Error(`Invalid locale string: ${locale}`);
  }
}

/**
 * 
 * @returns 
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Deno 1.8, Bun 1
 */
export function getUserLocale(): Intl.Locale {
  if (!userLocaleComplete) {
    throw new Error('User locale has not been set.');
  }
  return userLocaleComplete;
}

