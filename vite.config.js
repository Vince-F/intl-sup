import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: {
        core: resolve(__dirname, "src/core.ts"),
        currencyFormatter: resolve(__dirname, "src/currencyFormatter.ts"),
        currencyHelper: resolve(__dirname, "src/currencyHelper.ts"),
        dateFormatter: resolve(__dirname, "src/dateFormatter.ts"),
        dateTimeFormatter: resolve(__dirname, "src/dateTimeFormatter.ts"),
        numberFormatter: resolve(__dirname, "src/numberFormatter.ts"),
        temperatureFormatter: resolve(__dirname, "src/temperatureFormatter.ts"),
        temperatureUtils: resolve(__dirname, "src/temperatureUtils.ts"),
        timeFormatter: resolve(__dirname, "src/timeFormatter.ts"),
        timeUtils: resolve(__dirname, "src/timeUtils.ts"),
      },
      name: "intl-sup",
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  test: {
    globals: true,
    environment: "node",
  },
});
