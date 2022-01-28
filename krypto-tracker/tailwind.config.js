module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      'dark-blue': '#1e1e30',
      'dark-grey' : '#161625',
      'grey-blue' : '#1E1E30',
      
      
    },
    
  },
  plugins: [require('@tailwindcss/forms'),

    require('@themesberg/flowbite/plugin')

],
}