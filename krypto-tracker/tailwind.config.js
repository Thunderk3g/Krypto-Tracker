module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      'dark-blue': '#17171A',
      'dark-grey' : '#161625',
      'grey-blue' : '#1E1E30',
      'pure-black': '#000000',
      
      
    },
    
  },
  plugins: [require('@tailwindcss/forms'),

    require('@themesberg/flowbite/plugin')

],
}