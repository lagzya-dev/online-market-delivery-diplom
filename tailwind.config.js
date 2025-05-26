/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
    './src/**/*.css', // Добавляем CSS файлы
  ],
  theme: {
    extend: {
      colors: {
        // Явно объявляем цвета
        green: {
          100: '#dcfce7',
          500: '#22c55e',
          800: '#166534',
        },
      },
    },
  },
};
