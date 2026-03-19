import { describe, it, expect, beforeAll } from "vitest";
import {
  isCurrencySupported,
  getCurrencySymbol,
  getCurrencyNarrowSymbol,
  getCurrencyPosition,
  isCurrencySymbolBeforeAmount,
  isCurrencySymbolAfterAmount,
} from "../src/currencyHelper";
import { setUserLocale } from "../src/core";

describe("currencyHelper", () => {
  describe("isCurrencySupported", () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale("en-US");
      });
      it("should return true for supported currency", () => {
        expect(isCurrencySupported("USD")).toBe(true);
      });

      it("should return false for unsupported currency", () => {
        expect(isCurrencySupported("INVALID")).toBe(false);
      });
    });
  });

  describe("getCurrencySymbol", () => {
    it("should return the currency symbol for dollar", () => {
      const symbol = getCurrencySymbol("USD");
      expect(symbol).toBe("$");
    });

    it("should return currency symbol for euro", () => {
      const symbol = getCurrencySymbol("EUR");
      expect(symbol).toBe("€");
    });
  });

  describe("getCurrencyNarrowSymbol", () => {
    it("should return the narrow currency symbol", () => {
      const symbol = getCurrencyNarrowSymbol("USD");
      expect(symbol).toBe("$");
    });
  });

  describe("getCurrencyPosition", () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale("en-US");
      });
      it("should return before for USD", () => {
        const position = getCurrencyPosition("USD");
        expect(position).toBe("before");
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale("fr-FR");
      });
      it("should return after for EUR", () => {
        const position = getCurrencyPosition("EUR");
        expect(position).toBe("after");
      });
    });
  });

  describe("isCurrencySymbolBeforeAmount", () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale("en-US");
      });
      it("should return true for USD", () => {
        expect(isCurrencySymbolBeforeAmount("USD")).toBe(true);
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale("fr-FR");
      });
      it("should return false for EUR", () => {
        expect(isCurrencySymbolBeforeAmount("EUR")).toBe(false);
      });
    });
  });

  describe("isCurrencySymbolAfterAmount", () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale("en-US");
      });
      it("should return false for USD", () => {
        expect(isCurrencySymbolAfterAmount("USD")).toBe(false);
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale("fr-FR");
      });
      it("should return true for EUR", () => {
        expect(isCurrencySymbolAfterAmount("EUR")).toBe(true);
      });
    });
  });
});
