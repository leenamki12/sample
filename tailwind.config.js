import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['NanumSquareNeo', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#1743B1',
                secondary: '#dadada',
            },
            borderRadius: {
                none: '0',
                sm: '5px',
                DEFAULT: '10px',
                lg: '15px',
                full: '9999px',
            },
            fontWeight: {
                fontLight: 'font-weight: 100',
                fontNormal: 'font-weight: 300',
                fontMedium: 'font-weight: 400',
                fontBold: 'font-weight: 700',
            },
        },
    },

    plugins: [forms],
};
