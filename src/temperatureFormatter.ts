import { getNumberFomatter } from "./internal/cachedNumberFormatters";

export enum TemperatureUnit {
  Celsius = "Celsius",
  Fahrenheit = "Fahrenheit",
  Kelvin = "Kelvin",
}

export function formatTemperature(value: number, unit: TemperatureUnit): string {
  if (unit === TemperatureUnit.Kelvin) {
    const formatter = getNumberFomatter({
      style: "decimal",
    });
    return `${formatter.format(value)} K`;
  }
  const formatter = getNumberFomatter({
    style: "unit",
    unit: unit.toLocaleLowerCase(),
  });
  return formatter.format(value);
}
