/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "my-orange": {
          50: "#FFC543",
          100: "#FF8412",
        },
        violet: {
          10: "#EDEBFB",
          20: "#F0F0FC",
          50: "#686DE0",
          100: "#4834D4",
        },
        "logo-blue": {
          100: "#4D6AE4",
        },
        "link-blue": {
          100: "#86BFEB",
        },
        grey: {
          50: "#F3F5F5",
        },
        black: {
          80: "#1E1E2E",
        },
      },

    },
  },
  plugins: [],
};

