/** @type {import('tailwindcss').Config} */
export default {
    important: true,
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                ep: {
                    25: '#F5FAFF',
                    50: '#EFF8FF',
                    100: '#D1E9FF',
                    200: '#B2DDFF',
                    300: '#84CAFF',
                    400: '#53B1FD',
                    500: '#2E90FA',
                    600: '#1570EF',
                    700: '#175CD3',
                    800: '#1849A9',
                    900: '#194185',
                },
            },
            fontFamily: {
                openSans: ['Open Sans'],
                outfit: ['Outfit'],
                dmSans: ['DM Sans'],
                inter: ['Inter'],
                // sfPro: ['SF Pro Text'],
            },
        },
        screens: {
            xs: '480px',
            ss: '620px',
            sm: '768px',
            md: '1060px',
            lg: '1200px',
            lgx: '1390px',
            xl: '1700px',
        },

    },
    plugins: [],
};
