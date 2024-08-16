/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],

	theme: {
		extend: {
			colors: {
				headerTextColor: '#171A1FFF',
				nonPrimeText: '#565E6CFF',
				purpleText: '#6355D8FF',
				bgInput: '#F3F4F6FF',

				buttonPrime: '#6355D8FF',
				buttonPrimeHover: '#4D3ED3FF',
				buttonPrimePressed: '#3D2DC7FF',
				buttonSecondary: '#60CFA5FF',
				buttonSecondaryHover: '#36B584FF',
				buttonSecondaryPressed: '#2F9C72FF',
				buttonImportant: '#ED5D56FF',
				buttonImportantHover: '#F22128FF',
				buttonImportantPressed: '#B90B11FF',
			},
			fontFamily: {
				montserrat: 'Montserrat',
				poppins: 'Poppins',
			},
		},
	},
	plugins: [],
};
