import { describe, it, expect } from "vitest";
import { isUsing24HourClock, isUsing12HourClock } from "../src/timeUtils";
import { setUserLocale } from "../src/core";

describe("timeUtils", () => {
  describe("isUsing24HourClock", () => {
    it("should return true for 24-hour locales", () => {
      setUserLocale("fr-FR");
      expect(isUsing24HourClock()).toBe(true);
    });

    it("should return false for 12-hour locales", () => {
      setUserLocale("en-US");
      expect(isUsing24HourClock()).toBe(false);
    });
  });

  describe("isUsing12HourClock", () => {
    it("should return true for 12-hour locales", () => {
      setUserLocale("en-US");
      expect(isUsing12HourClock()).toBe(true);
    });

    it("should return false for 24-hour locales", () => {
      setUserLocale("fr-FR");
      expect(isUsing12HourClock()).toBe(false);
    });
  });
});
