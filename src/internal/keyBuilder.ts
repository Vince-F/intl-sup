import { getUserLocale } from "../core";

export function buildKey(object: unknown): string {
  const prefix = getUserLocale().toString();
  if (typeof object === "object" && object !== null) {
    const entries = Object.entries(object).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
    return prefix + "_" + entries.map(([key, value]) => `${key}:${buildKey(value)}`).join("|");
  }
  return prefix + "_" + String(object);
}
