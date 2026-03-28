export declare enum TemperatureUnit {
    Celsius = "Celsius",
    Fahrenheit = "Fahrenheit",
    Kelvin = "Kelvin"
}
export declare const zeroCelsiusInKelvin = 273.15;
export declare function convertTemperature(value: number, fromUnit: TemperatureUnit, toUnit: TemperatureUnit): number;
