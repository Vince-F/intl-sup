import { getUserLocale } from "./core";
import { getDateTimeFormatter } from "./internal/cachedDateFormatters";

const monthNamesCache = new Map<string, string[]>();

export function getMonthsNames() {
  return getMonthNameWithOptions("long");
}

export function getShortMonthsNames() {
  return getMonthNameWithOptions("short");
}

export function getNarrowMonthsNames() {
  return getMonthNameWithOptions("narrow");
}

function getMonthNameWithOptions(monthFormat: "long" | "short" | "narrow") {
  const locale = getUserLocale().toString();
  if (monthNamesCache.has(locale)) {
    return monthNamesCache.get(locale)!;
  }
  const formatter = getDateTimeFormatter({ month: monthFormat });
  const monthsNames: string[] = [];
  const date = new Date(2000, 0, 25);
  for (let month = 0; month < 12; month++) {
    date.setMonth(month);
    const monthName = formatter.format(date);
    monthsNames.push(monthName);
  }
  monthNamesCache.set(`${locale}_${monthFormat}`, monthsNames);
  return monthsNames;
}
