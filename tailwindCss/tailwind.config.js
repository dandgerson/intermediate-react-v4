/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // stands for 'just in time'
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {},
  },
  variant: {},
  plugins: [require("@tailwindcss/forms")],
};
