import { describe, it, expect, beforeAll } from "vitest";
import { formatDate, type DateStyleLong } from "../src/dateFormatter";
import { setUserLocale } from "../src/core";

describe("dateFormatter", () => {
  describe("formatDate", () => {
    const testDate = new Date("2023-10-05T14:30:00");
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale("en-US");
      });

      it("should format date with short style", () => {
        const result = formatDate(testDate, "short");
        expect(result).toBe("10/5/23");
      });

      it("should format date with long style", () => {
        const result = formatDate(testDate, "long");
        expect(result).toBe("October 5, 2023");
      });

      it("should format date with custom options", () => {
        const options: DateStyleLong = { year: "numeric", month: "long", day: "numeric" };
        const result = formatDate(testDate, options);
        expect(result).toBe("October 5, 2023");
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale("fr-FR");
      });

      it("should format date with short style", () => {
        const result = formatDate(testDate, "short");
        expect(result).toBe("05/10/2023");
      });

      it("should format date with long style", () => {
        const result = formatDate(testDate, "long");
        expect(result).toBe("5 octobre 2023");
      });

      it("should format date with custom options", () => {
        const options: DateStyleLong = { year: "numeric", month: "long", day: "numeric" };
        const result = formatDate(testDate, options);
        expect(result).toBe("5 octobre 2023");
      });
    });
  });
});
