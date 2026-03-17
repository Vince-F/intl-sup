export type TimeStyleShort = "full" | "long" | "medium" | "short";
export type TimeStyleLong = {
    hour: "numeric" | "2-digit";
    minute?: "numeric" | "2-digit";
    second?: "numeric" | "2-digit";
    fractionalSecondDigits?: 1 | 2 | 3;
};
/**
 * Format a time part of a date based on current user locale.
 *
 * @param date The date for which to format the time, the date itself (year, month, day) doesn't matter.
 * @param format Format options either in shortcut form with ({@link TimeStyleShort} or detailled form with {@link TimeStyleLong}).
 * @returns The formatted time string.
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Bun 1, Deno 1.8
 */
export declare function formatTime(date: Date, format: TimeStyleShort | TimeStyleLong): string;
