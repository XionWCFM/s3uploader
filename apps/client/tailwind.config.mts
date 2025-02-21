import { config } from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

const baseConfig: Config = {
  ...config,
  content: ["../../packages/ui/src/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
};

export default baseConfig;
