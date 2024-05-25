/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],

	theme: {
		extend: {
			colors: {
				headerTextColor: '#171A1FFF',
				nonPrimeText: '#565E6CFF',
				bgInput: '#F3F4F6FF',
				buttonPrime: '#6355D8FF',
				buttonPrimeHover: '#4D3ED3FF',
				buttonPrimePressed: '#3D2DC7FF',
			},
			fontFamily: {
				montserrat: 'Montserrat',
				poppins: 'Poppins',
			},
		},
	},
	plugins: [],
};
