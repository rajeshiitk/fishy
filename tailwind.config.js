/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./build/*.html", "./build/js/*.js"],
  content:["./build/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/build/img/3D render of a cute tropical fish in an aquarium on a dark blue background, digital art.webp')",
        'footer-texture': "url('/build/img/DALL·E 2023-05-02 09.28.54 - 3D render of a cute tropical fish in an aquarium on a dark blue background, digital art.png')",
      },
      screens:{
        'wideScreen':{'raw':'(min-aspect-ratio:3/2)'},
        'tallScreen':{'raw':'(max-aspect-ratio:13/20)'},
      },
      keyframes:{
       'open-menu':{
        '0%' : { transform: 'scaleY(0)'},
        '80%' : { transform: 'scaleY(1.2)'},
        '100%' : { transform: 'scaleY(1)'},
       }
      },
      animation:{
        'open-menu': 'open-menu 0.4s ease-in-out forwards',

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


