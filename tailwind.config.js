/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/build/img/3D render of a cute tropical fish in an aquarium on a dark blue background, digital art.webp')",
        'footer-texture': "url('/build/img/DALL·E 2023-05-02 09.28.54 - 3D render of a cute tropical fish in an aquarium on a dark blue background, digital art.png')",
      },
      screens:{
        'wideScreen':{'raw':'(min-aspect-ratio:3/2)'},
        'tallScreen':{'raw':'(min-aspect-ratio:1/2)'},
      }
    }
  },
  variants: {
    lineClamp: ['responsive', 'hover']
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  
}


