export type DateStyleShort = "full" | "long" | "medium" | "short";
export type DateStyleLong = {
    dayPeriod?: "narrow" | "short" | "long";
    weekday?: "long" | "short" | "narrow";
    day?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
    year?: "numeric" | "2-digit";
    era?: "long" | "short" | "narrow";
};
/**
 * Format a date only based on current user locale.
 *
 * @param date The date to format, the time doesn't matter.
 * @param format Format options either in shortcut form with ({@link DateStyleShort} or detailled form with {@link DateStyleLong}).
 * @returns The formatted date string.
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Bun 1, Deno 1.8
 */
export declare function formatDate(date: Date, format: DateStyleShort | DateStyleLong): string;
