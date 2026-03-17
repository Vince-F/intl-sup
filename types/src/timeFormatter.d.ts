export type TimeStyleShort = "full" | "long" | "medium" | "short";
export type TimeStyleLong = {
    hour: "numeric" | "2-digit";
    minute?: "numeric" | "2-digit";
    second?: "numeric" | "2-digit";
    fractionalSecondDigits?: 1 | 2 | 3;
};
export declare function formatTime(date: Date, format: TimeStyleShort | TimeStyleLong): string;
