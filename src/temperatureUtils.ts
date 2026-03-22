export enum TemperatureUnit {
  Celsius = "Celsius",
  Fahrenheit = "Fahrenheit",
  Kelvin = "Kelvin",
}

export const zeroCelsiusInKelvin = 273.15;

export function convertTemperature(value: number, fromUnit: TemperatureUnit, toUnit: TemperatureUnit): number {
  if (fromUnit === toUnit) {
    return value;
  }
  let celsiusValue: number;
  switch (fromUnit) {
    case TemperatureUnit.Celsius:
      celsiusValue = value;
      break;
    case TemperatureUnit.Fahrenheit:
      celsiusValue = ((value - 32) * 5) / 9;
      break;
    case TemperatureUnit.Kelvin:
      celsiusValue = value - zeroCelsiusInKelvin;
      break;
  }

  switch (toUnit) {
    case TemperatureUnit.Celsius:
      return celsiusValue;
    case TemperatureUnit.Fahrenheit:
      return (celsiusValue * 9) / 5 + 32;
    case TemperatureUnit.Kelvin:
      return celsiusValue + zeroCelsiusInKelvin;
  }
}
