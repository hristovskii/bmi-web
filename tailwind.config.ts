import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      fontFamily: {
        eestec: ["Roboto", "sans-serif"],
      },
      colors: {
        eestec: "#E6BB99",
      },
      backgroundColor: {
        eestec: "#082428",
      },
      fill: {
        eestec: "#082428",
      },
      border: {
        eestec: "#FFF8EE",
      },
    },
  },
  plugins: [],
};
export default config;
