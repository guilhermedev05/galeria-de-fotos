import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'madrugada': 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        'manha': 'linear-gradient(135deg, #fbc2eb, #a6c1ee)',
        'tarde': 'linear-gradient(135deg, #f6d365, #fda085)',
        'noite': 'linear-gradient(135deg, #232526, #414345)',
      },
    },
  },
  plugins: [],
} satisfies Config;
