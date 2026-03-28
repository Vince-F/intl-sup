import { describe, it, expect, beforeAll } from "vitest";
import { getWeekDayssNames, getShortWeekDayssNames, getNarrowWeekDayssNames } from "../src/weekUtils";
import { setUserLocale } from "../src/core";

describe("weekUtils", () => {
  describe("getWeekDayssNames", () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale("en-US");
      });

      it("should return long weekday names", () => {
        const result = getWeekDayssNames();
        expect(result).toEqual(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale("fr-FR");
      });

      it("should return long weekday names", () => {
        const result = getWeekDayssNames();
        expect(result).toEqual(["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]);
      });
    });
  });

  describe("getShortWeekDayssNames", () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale("en-US");
      });

      it("should return short weekday names", () => {
        const result = getShortWeekDayssNames();
        expect(result).toEqual(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale("fr-FR");
      });

      it("should return short weekday names", () => {
        const result = getShortWeekDayssNames();
        expect(result).toEqual(["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."]);
      });
    });
  });

  describe("getNarrowWeekDayssNames", () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale("en-US");
      });

      it("should return narrow weekday names", () => {
        const result = getNarrowWeekDayssNames();
        expect(result).toEqual(["S", "M", "T", "W", "T", "F", "S"]);
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale("fr-FR");
      });

      it("should return narrow weekday names", () => {
        const result = getNarrowWeekDayssNames();
        expect(result).toEqual(["D", "L", "M", "M", "J", "V", "S"]);
      });
    });
  });
});
