/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],

	theme: {
		extend: {
			colors: {
				white: '#FFFFFF',
				black: '#000000',
				primary: {
					100: '#f3f2fc',
					150: '#e1dff8',
					200: '#cfcbf3',
					250: '#bdb7ef',
					300: '#aba4ea',
					350: '#9890e6',
					400: '#867ce1',
					450: '#7468dd',
					500: '#6355D8',
					550: '#4d3ed3',
					600: '#3d2dc7',
					650: '#3628b1',
					700: '#2f239a',
					750: '#281e83',
					800: '#21196c',
					850: '#1a1355',
					900: '#130e3e',
					DEFAULT: '#6355D8',
				},
				secondary: {
					100: '#fcf2fc',
					150: '#f9e1f8',
					200: '#f5d0f4',
					250: '#f2bff0',
					300: '#efafec',
					350: '#eb9ee8',
					400: '#e88de5',
					450: '#e47ce1',
					500: '#E16DDE',
					550: '#db4ed6',
					600: '#d532d0',
					650: '#bd27b8',
					700: '#a1219d',
					750: '#841b81',
					800: '#681565',
					850: '#4b0f49',
					900: '#2e0a2d',
					DEFAULT: '#E16DDE',
				},
				info: {
					100: '#f0f8fe',
					150: '#d4ebfd',
					200: '#b8defc',
					250: '#9cd2fa',
					300: '#80c5f9',
					350: '#64b8f8',
					400: '#48abf6',
					450: '#2c9ef5',
					500: '#1091f4',
					550: '#0b83df',
					600: '#0974c6',
					650: '#0865ad',
					700: '#075794',
					750: '#06487a',
					800: '#053961',
					850: '#032a48',
					900: '#021b2f',
					DEFAULT: '#1091f4',
				},
				warning: {
					100: '#fef8f1',
					150: '#fcecd9',
					200: '#fae0c2',
					250: '#f8d4aa',
					300: '#f6c892',
					350: '#f4bc7b',
					400: '#f2b063',
					450: '#f0a44c',
					500: '#ef9834',
					550: '#ec8917',
					600: '#d37911',
					650: '#b7680f',
					700: '#9a580c',
					750: '#7d470a',
					800: '#603708',
					850: '#432605',
					900: '#271603',
					DEFAULT: '#ef9834',
				},
				danger: {
					100: '#fef0f1',
					150: '#fdd7d8',
					200: '#fbbdbf',
					250: '#faa3a6',
					300: '#f8898d',
					350: '#f76f73',
					400: '#f5555a',
					450: '#f43b41',
					500: '#f22128',
					550: '#eb0e15',
					600: '#d20c13',
					650: '#b90b11',
					700: '#9f090e',
					750: '#86080c',
					800: '#6d060a',
					850: '#540508',
					900: '#3b0305',
					DEFAULT: '#f22128',
				},
				success: {
					100: '#eefdf3',
					150: '#d3f9e0',
					200: '#b8f5cd',
					250: '#9df2b9',
					300: '#82eea6',
					350: '#67ea93',
					400: '#4ce77f',
					450: '#31e36c',
					500: '#1dd75b',
					550: '#1ac052',
					600: '#17a948',
					650: '#14923e',
					700: '#117b34',
					750: '#0e642a',
					800: '#0a4d20',
					850: '#073517',
					900: '#041e0d',
					DEFAULT: '#1dd75b',
				},
				'color-1': {
					100: '#fef2f1',
					150: '#fbdfdd',
					200: '#f9ccca',
					250: '#f7b9b6',
					300: '#f5a7a3',
					350: '#f3948f',
					400: '#f1817b',
					450: '#ef6f68',
					500: '#ED5D56',
					550: '#ea4037',
					600: '#e72419',
					650: '#ca1e15',
					700: '#ad1a12',
					750: '#90160f',
					800: '#72110c',
					850: '#550d09',
					900: '#370806',
					DEFAULT: '#ED5D56',
				},
				'color-2': {
					100: '#fef9ee',
					150: '#fbf1d6',
					200: '#f9e9be',
					250: '#f7e1a5',
					300: '#f5d98d',
					350: '#f3d175',
					400: '#f1c95c',
					450: '#efc144',
					500: '#ECB82B',
					550: '#e6ae14',
					600: '#ca9912',
					650: '#ad830f',
					700: '#916e0d',
					750: '#75590a',
					800: '#594308',
					850: '#3d2e05',
					900: '#201903',
					DEFAULT: '#ECB82B',
				},
				tertiary3: {
					100: '#f3fbf8',
					150: '#e0f6ee',
					200: '#cef0e3',
					250: '#bbebd9',
					300: '#a9e5ce',
					350: '#96e0c3',
					400: '#83dab9',
					450: '#71d4ae',
					500: '#60CFA5',
					550: '#45c795',
					600: '#36b584',
					650: '#2f9c72',
					700: '#278360',
					750: '#1f694d',
					800: '#18503b',
					850: '#103728',
					900: '#091e16',
					DEFAULT: '#60CFA5',
				},
			},
			fontFamily: {
				body: 'Montserrat',
				h2: 'Montserrat',
				montserrat: 'Montserrat',
				poppins: 'Poppins',
			},
			boxShadow: {
				xs: '0px 0px 1px rgba(23, 26, 31, 0.07), 0px 0px 2px rgba(23, 26, 31, 0.12)',
				s: '0px 2px 5px rgba(23, 26, 31, 0.09), 0px 0px 2px rgba(23, 26, 31, 0.12)',
				m: '0px 4px 9px rgba(23, 26, 31, 0.11), 0px 0px 2px rgba(23, 26, 31, 0.12)',
				l: '0px 8px 17px rgba(23, 26, 31, 0.15), 0px 0px 2px rgba(23, 26, 31, 0.12)',
				xl: '0px 17px 35px rgba(23, 26, 31, 0.24), 0px 0px 2px rgba(23, 26, 31, 0.12)',
			},
		},
	},
	plugins: [],
};
