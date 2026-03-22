import { describe, it, expect } from "vitest";
import { convertTemperature, TemperatureUnit } from "../src/temperatureUtils";

describe("temperatureUtils", () => {
  describe("convertTemperature", () => {
    describe("same unit conversion", () => {
      it("should return the same value when converting Celsius to Celsius", () => {
        expect(convertTemperature(25, TemperatureUnit.Celsius, TemperatureUnit.Celsius)).toBe(25);
      });

      it("should return the same value when converting Fahrenheit to Fahrenheit", () => {
        expect(convertTemperature(32, TemperatureUnit.Fahrenheit, TemperatureUnit.Fahrenheit)).toBe(32);
      });

      it("should return the same value when converting Kelvin to Kelvin", () => {
        expect(convertTemperature(273.15, TemperatureUnit.Kelvin, TemperatureUnit.Kelvin)).toBe(273.15);
      });
    });

    describe("Celsius to Fahrenheit conversion", () => {
      it("should convert 100 Celsius to 212 Fahrenheit", () => {
        expect(convertTemperature(100, TemperatureUnit.Celsius, TemperatureUnit.Fahrenheit)).toBe(212);
      });

      it("should convert -40 Celsius to -40 Fahrenheit", () => {
        expect(convertTemperature(-40, TemperatureUnit.Celsius, TemperatureUnit.Fahrenheit)).toBe(-40);
      });
    });

    describe("Celsius to Kelvin conversion", () => {
      it("should convert 0 Celsius to 273.15 Kelvin", () => {
        expect(convertTemperature(0, TemperatureUnit.Celsius, TemperatureUnit.Kelvin)).toBe(273.15);
      });

      it("should convert -273.15 Celsius to 0 Kelvin", () => {
        expect(convertTemperature(-273.15, TemperatureUnit.Celsius, TemperatureUnit.Kelvin)).toBe(0);
      });
    });

    describe("Fahrenheit to Celsius conversion", () => {
      it("should convert 32 Fahrenheit to 0 Celsius", () => {
        expect(convertTemperature(32, TemperatureUnit.Fahrenheit, TemperatureUnit.Celsius)).toBe(0);
      });

      it("should convert 212 Fahrenheit to 100 Celsius", () => {
        expect(convertTemperature(212, TemperatureUnit.Fahrenheit, TemperatureUnit.Celsius)).toBe(100);
      });
    });

    describe("Fahrenheit to Kelvin conversion", () => {
      it("should convert 32 Fahrenheit to 273.15 Kelvin", () => {
        expect(convertTemperature(32, TemperatureUnit.Fahrenheit, TemperatureUnit.Kelvin)).toBe(273.15);
      });

      it("should convert 212 Fahrenheit to 373.15 Kelvin", () => {
        expect(convertTemperature(212, TemperatureUnit.Fahrenheit, TemperatureUnit.Kelvin)).toBe(373.15);
      });
    });

    describe("Kelvin to Celsius conversion", () => {
      it("should convert 273.15 Kelvin to 0 Celsius", () => {
        expect(convertTemperature(273.15, TemperatureUnit.Kelvin, TemperatureUnit.Celsius)).toBe(0);
      });

      it("should convert 0 Kelvin to -273.15 Celsius", () => {
        expect(convertTemperature(0, TemperatureUnit.Kelvin, TemperatureUnit.Celsius)).toBe(-273.15);
      });
    });

    describe("Kelvin to Fahrenheit conversion", () => {
      it("should convert 273.15 Kelvin to 32 Fahrenheit", () => {
        expect(convertTemperature(273.15, TemperatureUnit.Kelvin, TemperatureUnit.Fahrenheit)).toBe(32);
      });

      it("should convert 0 Kelvin to -459.67 Fahrenheit", () => {
        const result = convertTemperature(0, TemperatureUnit.Kelvin, TemperatureUnit.Fahrenheit);
        expect(result).toBeCloseTo(-459.67, 5);
      });
    });
  });
});
