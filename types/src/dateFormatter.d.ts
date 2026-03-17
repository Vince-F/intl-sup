export type DateStyleShort = "full" | "long" | "medium" | "short";
export type DateStyleLong = {
    dayPeriod?: "narrow" | "short" | "long";
    weekday?: "long" | "short" | "narrow";
    day?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
    year?: "numeric" | "2-digit";
    era?: "long" | "short" | "narrow";
};
export declare function formatDate(date: Date, format: DateStyleShort | DateStyleLong): string;
