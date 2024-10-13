/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/ng-zorro-antd/**/*.js",  // Incluir los estilos de NG-ZORRO
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}