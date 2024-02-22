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
                /**  ${screen('tablet')({ display: '', ...tw`` })} 이런식으로 사용 가능 */
                mobile: { max: '640px' },
                tablet: { max: '768px' },
                laptop: { max: '1024px' },
                desktop: { max: '1280px' },
                fullDesktop: { max: '1660px' },
            },
            fontFamily: {
                apple: ['AppleSDGothicNeo', ...defaultTheme.fontFamily.sans],
                sans: ['loos-normal', 'AppleSDGothicNeo', ...defaultTheme.fontFamily.sans],
                loos: ['loos-normal', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#1743B1',
                secondary: '#dadada',
                blackPrimary: '#181717',
                green: '#00BE52',
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
                light: '200',
                normal: '400',
                medium: '500',
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
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
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
