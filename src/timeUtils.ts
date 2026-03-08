import { getUserLocale } from "./core";

/**
 * 
 * @returns 
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Bun 1, Deno 1.8
 */
export function isUsing24HourClock(): boolean {
  const locale = getUserLocale();
  return locale.hourCycle === "h23" || locale.hourCycle === "h24";
}

/**
 * 
 * @returns 
 * @since 1.0.0
 * @remarks Browser support: Chrome 74, Edge 79, Firefox 75, Opera 62, Safari 14, Node 12, Bun 1, Deno 1.8
 */
export function isUsing12HourClock(): boolean {
  return !isUsing24HourClock();
}