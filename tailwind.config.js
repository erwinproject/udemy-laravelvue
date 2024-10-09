/** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'selector',
//   // ...
// }

export default {
  content: [
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],


}

