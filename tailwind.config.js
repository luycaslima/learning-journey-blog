/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        colors: {
          ghostWhite: '#F7F7FF',
          orangeRedCrayole: '#FE5F55',
          richBlackFogra: '#001021',
          coolBlue:'#9389b3',
        }, fontFamily: {
          'nippo' : ['Nippo','sans'],
          'satoshi': ['Satoshi','sans']
        }
      },
    },
    plugins: [],
}

