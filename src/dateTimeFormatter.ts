import { getDateTimeFormatter } from "./internal/cachedDateFormatters";

/**
 * Format date & time based on current user locale.
 *
 * @param date The date and time to format.
 * @param format Format options.
 * @returns The formatted date and time string.
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Bun 1, Deno 1.8
 */
export function formatDate(date: Date, format: Intl.DateTimeFormatOptions): string {
  const formatter = getDateTimeFormatter(format);
  return formatter.format(date);
}
