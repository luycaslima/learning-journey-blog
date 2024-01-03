/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          aliceBlue: '#E0EFFF',
          newBlack:'#080808',
          turkeyRed:'#AD0C01',
          ultraViolet:'#564C76',
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

