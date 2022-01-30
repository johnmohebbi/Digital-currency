module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // separator: ':',
  // important: true,
  
 
  theme: {
    screens:{
      'xs':"400px",
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily:{
        "RobotoM":'RobotoMedium',
        
      },
      flexGrow: {
        '2': 2
      }
     
    },
  },
  plugins: [
  ],
};
