import { describe, it, expect, beforeAll } from "vitest";
import { getWeekDaysNames, getShortWeekDaysNames, getNarrowWeekDaysNames } from "../src/weekUtils";
import { setUserLocale } from "../src/core";

describe("weekUtils", () => {
  describe("getWeekDaysNames", () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale("en-US");
      });

      it("should return long weekday names", () => {
        const result = getWeekDaysNames();
        expect(result).toEqual(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale("fr-FR");
      });

      it("should return long weekday names", () => {
        const result = getWeekDaysNames();
        expect(result).toEqual(["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]);
      });
    });
  });

  describe("getShortWeekDaysNames", () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale("en-US");
      });

      it("should return short weekday names", () => {
        const result = getShortWeekDaysNames();
        expect(result).toEqual(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale("fr-FR");
      });

      it("should return short weekday names", () => {
        const result = getShortWeekDaysNames();
        expect(result).toEqual(["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."]);
      });
    });
  });

  describe("getNarrowWeekDaysNames", () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale("en-US");
      });

      it("should return narrow weekday names", () => {
        const result = getNarrowWeekDaysNames();
        expect(result).toEqual(["S", "M", "T", "W", "T", "F", "S"]);
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale("fr-FR");
      });

      it("should return narrow weekday names", () => {
        const result = getNarrowWeekDaysNames();
        expect(result).toEqual(["D", "L", "M", "M", "J", "V", "S"]);
      });
    });
  });
});
