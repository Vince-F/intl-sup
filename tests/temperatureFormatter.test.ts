import { describe, it, expect, beforeAll } from "vitest";
import { formatTemperature, TemperatureUnit } from "../src/temperatureFormatter";
import { setUserLocale } from "../src/core";

describe("temperatureFormatter", () => {
  beforeAll(() => {
    setUserLocale("en-US");
  });

  describe("formatTemperature", () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale("en-US");
      });

      describe("Celsius", () => {
        it("should format temperature in Celsius", () => {
          const result = formatTemperature(0, TemperatureUnit.Celsius);
          expect(result).toMatch(/0\s*°.*c/i);
        });

        it("should format positive temperature in Celsius", () => {
          const result = formatTemperature(25, TemperatureUnit.Celsius);
          expect(result).toMatch(/25\s*°.*c/i);
        });

        it("should format negative temperature in Celsius", () => {
          const result = formatTemperature(-40, TemperatureUnit.Celsius);
          expect(result).toMatch(/-40\s*°.*c/i);
        });
      });

      describe("Fahrenheit", () => {
        it("should format temperature in Fahrenheit", () => {
          const result = formatTemperature(32, TemperatureUnit.Fahrenheit);
          expect(result).toMatch(/32\s*°.*f/i);
        });

        it("should format negative temperature in Fahrenheit", () => {
          const result = formatTemperature(-40, TemperatureUnit.Fahrenheit);
          expect(result).toMatch(/-40\s*°.*f/i);
        });
      });

      describe("Kelvin", () => {
        it("should format temperature in Kelvin", () => {
          const result = formatTemperature(273.15, TemperatureUnit.Kelvin);
          expect(result).toMatch(/273\.15\s*K/i);
        });

        it("should format absolute-zero in Kelvin", () => {
          const result = formatTemperature(0, TemperatureUnit.Kelvin);
          expect(result).toMatch(/0\s*K/i);
        });
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale("fr-FR");
      });

      describe("Celsius", () => {
        it("should format temperature in Celsius", () => {
          const result = formatTemperature(0, TemperatureUnit.Celsius);
          expect(result).toMatch(/0\s*°.*c/i);
        });

        it("should format positive temperature in Celsius", () => {
          const result = formatTemperature(25, TemperatureUnit.Celsius);
          expect(result).toMatch(/25\s*°.*c/i);
        });

        it("should format negative temperature in Celsius", () => {
          const result = formatTemperature(-40, TemperatureUnit.Celsius);
          expect(result).toMatch(/-40\s*°.*c/i);
        });
      });

      describe("Fahrenheit", () => {
        it("should format temperature in Fahrenheit", () => {
          const result = formatTemperature(32, TemperatureUnit.Fahrenheit);
          expect(result).toMatch(/32\s*°.*f/i);
        });
        it("should format decimal temperature in Fahrenheit", () => {
          const result = formatTemperature(98.6, TemperatureUnit.Fahrenheit);
          expect(result).toMatch(/98[.,]6\s*°.*f/i);
        });
      });

      describe("Kelvin", () => {
        it("should format temperature in Kelvin", () => {
          const result = formatTemperature(273.15, TemperatureUnit.Kelvin);
          expect(result).toMatch(/273,15\s*K/i);
        });

        it("should format absolute-zero in Kelvin", () => {
          const result = formatTemperature(0, TemperatureUnit.Kelvin);
          expect(result).toMatch(/0\s*K/i);
        });
      });
    });
  });
});
