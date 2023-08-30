/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";

const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: [
//     "./src/**/*. {html,js,jsx,ts,tsx}",
//     "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
//     "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/@nextui-org/button/dist/button.js",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     nextui(),
//     require('@tailwindcss/typography'),
//   ],
// });

export const content = [
  "./src/**/*.{html,js,jsx,ts,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/button/dist/button.js",
  "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {},
};
export const darkMode = "class";
export const plugins = [
  nextui(),
  require('@tailwindcss/typography'),
];

