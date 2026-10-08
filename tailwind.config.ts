import type { Config } from "tailwindcss";
export default { darkMode: "class", content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: { extend: { fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], mono: ["var(--font-mono)", "monospace"] } } },
  plugins: [] } satisfies Config;
