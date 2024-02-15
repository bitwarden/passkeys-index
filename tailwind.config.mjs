/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      body: [
        "DM Sans",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        primary: "#175DDC",
        indigoBlue: "#020F66",
        lightGray: "#F3F6F9",
        red: "#FF4E631A",
        purple: "#976FD91A",
      },
    },
  },
  plugins: [],
};
