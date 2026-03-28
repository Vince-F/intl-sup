import { getUserLocale } from "./core";
import { getDateTimeFormatter } from "./internal/cachedDateFormatters";

const weekDaysNamesCache = new Map<string, string[]>();

export function getWeekDayssNames() {
  return getWeekDaysNameWithOptions("long");
}

export function getShortWeekDayssNames() {
  return getWeekDaysNameWithOptions("short");
}

export function getNarrowWeekDayssNames() {
  return getWeekDaysNameWithOptions("narrow");
}

function getWeekDaysNameWithOptions(weekDaysFormat: "long" | "short" | "narrow") {
  const locale = getUserLocale().toString();
  if (weekDaysNamesCache.has(locale)) {
    return weekDaysNamesCache.get(locale)!;
  }
  const formatter = getDateTimeFormatter({ weekday: weekDaysFormat });
  const weekDaysNames: string[] = [];
  const date = new Date(2026, 2, 22);
  for (let weekDays = 0; weekDays < 7; weekDays++) {
    date.setDate(22 + weekDays);
    const weekDaysName = formatter.format(date);
    weekDaysNames.push(weekDaysName);
  }
  weekDaysNamesCache.set(`${locale}_${weekDaysFormat}`, weekDaysNames);
  return weekDaysNames;
}
