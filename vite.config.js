import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        svgr(),
        react({
            babel: {
                plugins: ['babel-plugin-macros', 'babel-plugin-styled-components'],
            },
        }),
        tsconfigPaths(),
    ],
    build: {
        chunkSizeWarningLimit: 1600,
    },
});
