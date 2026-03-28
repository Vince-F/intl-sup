import { describe, it, expect, beforeAll } from "vitest";
import { getMonthsNames, getShortMonthsNames, getNarrowMonthsNames } from "../src/monthUtils";
import { setUserLocale } from "../src/core";

describe("monthUtils", () => {
  describe("getMonthsNames", () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale("en-US");
      });

      it("should return long month names", () => {
        const result = getMonthsNames();
        expect(result).toEqual([
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ]);
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale("fr-FR");
      });

      it("should return long month names", () => {
        const result = getMonthsNames();
        expect(result).toEqual([
          "janvier",
          "février",
          "mars",
          "avril",
          "mai",
          "juin",
          "juillet",
          "août",
          "septembre",
          "octobre",
          "novembre",
          "décembre",
        ]);
      });
    });
  });

  describe("getShortMonthsNames", () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale("en-US");
      });

      it("should return short month names", () => {
        const result = getShortMonthsNames();
        expect(result).toEqual(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale("fr-FR");
      });

      it("should return short month names", () => {
        const result = getShortMonthsNames();
        expect(result).toEqual([
          "janv.",
          "févr.",
          "mars",
          "avr.",
          "mai",
          "juin",
          "juil.",
          "août",
          "sept.",
          "oct.",
          "nov.",
          "déc.",
        ]);
      });
    });
  });

  describe("getNarrowMonthsNames", () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale("en-US");
      });

      it("should return narrow month names", () => {
        const result = getNarrowMonthsNames();
        expect(result).toEqual(["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]);
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale("fr-FR");
      });

      it("should return narrow month names", () => {
        const result = getNarrowMonthsNames();
        expect(result).toEqual(["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]);
      });
    });
  });
});
