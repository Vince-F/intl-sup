import { describe, it, expect } from "vitest";
import { setUserLocale, getUserLocale } from "../src/core";

describe("core", () => {
  describe("getUserLocale", () => {
    it("should throw when the local is not set", () => {
      expect(() => getUserLocale()).toThrow("User locale has not been set.");
    });

    it("should return the set locale", () => {
      setUserLocale("en-US");
      const locale = getUserLocale();
      expect(locale).toBeInstanceOf(Intl.Locale);
      expect(locale.toString()).toBe("en-US");
    });
  });

  describe("setUserLocale", () => {
    it("should set a valid locale", () => {
      expect(() => setUserLocale("en-US")).not.toThrow();
    });

    it("should throw an error for invalid locale", () => {
      expect(() => setUserLocale("not-a-valid-locale")).toThrow();
    });
  });
});
