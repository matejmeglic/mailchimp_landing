module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        back: "url('/src/pexels-nitin-arya-1029141.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
