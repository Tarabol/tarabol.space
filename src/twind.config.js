export default {
  theme: {
    extend: {
      fontFamily: {
        sans: `Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      },
    },
    // colors: {
    //   mainColor: '#4337C9',
    //   white: '#fff',
    // },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    })   
  ],
};
