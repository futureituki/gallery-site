import { defineConfig } from "@pandacss/dev"

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    
    // Where to look for your css declarations
    include: ["./app/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}", './components/**/*.{js,jsx,ts,tsx}'],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
      extend: {
          keyframes: {
              circleanime: {
                  '0%': {scale:' 0.68'},
              '100%': {scale: '1.2',opacity: '0'},
              }
          }
      }
    },

    // The output directory for your css system
    outdir: "styled-system",
    
    
})