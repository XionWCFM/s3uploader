import { config } from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

const baseConfig: Config = {
  ...config,
  content: ["./src/**/*.{ts,tsx}"],
};

export default baseConfig;
