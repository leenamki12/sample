import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

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
            screens: {
                mobile: { max: '640px' },
                tablet: { max: '768px' },
                laptop: { max: '1024px' },
                desktop: { max: '1280px' },
            },
            fontFamily: {
                sans: ['WanderLoch', 'Pretendard', ...defaultTheme.fontFamily.sans],
                pretendard: ['Pretendard', ...defaultTheme.fontFamily.sans],
                wanderlochSecondary: ['WanderLoch-secondary', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#1743B1',
                secondary: '#dadada',
                blackPrimary: '#181717',
            },
            borderRadius: {
                none: '0',
                sm: '5px',
                DEFAULT: '10px',
                lg: '15px',
                xl: '20px',
                full: '9999px',
            },
            fontWeight: {
                light: '100',
                normal: '300',
                medium: '400',
                bold: '700',
                extrabold: '800',
            },
            fontSize: {
                xs: ['12px', '18px'],
                sm: ['13px', '20px'],
                base: ['14px', '22px'],
                lg: ['16px', '26px'],
                xl: ['18px', '30px'],
            },
        },
    },
    plugins: [
        forms,
        plugin(({ addBase, theme }) => {
            addBase({
                '.scrollbar': {
                    overflowY: 'auto',
                },
                '.scrollbar::-webkit-scrollbar': {
                    width: '8px',
                },
                '.scrollbar::-webkit-scrollbar-thumb': {
                    backgroundColor: '#aaa',
                    borderRadius: '5px',
                    backgroundClip: 'padding-box',
                },
                '.scrollbar::-webkit-scrollbar-track-piece': {
                    backgroundColor: theme('colors.secondary'),
                    borderRadius: '5px',
                },
            });
        }),
    ],
};
