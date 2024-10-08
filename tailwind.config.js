/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  // ...
}

export default {
  content: [
    './storage/framework/views/*.php',
    './resource/views/**/*.blade.php',
    './resource/js/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  
  
}

