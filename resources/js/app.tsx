import './bootstrap';
import '../css/fonts.css';
import '../css/app.css';

import { ReactElement } from 'react';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import AppLayout from './templates/AppLayout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: title => `${title} - ${appName}`,
    resolve: async name => {
        const pages = import.meta.glob('./pages/**/*.tsx');
        const pageModule = pages[`./pages/${name}.tsx`];

        const page: any = await pageModule();

        page.default.layout = (page: ReactElement) => <AppLayout children={page} name={name} />;

        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        // The delay after which the progress bar will appear, in milliseconds...
        delay: 250,

        // The color of the progress bar...
        color: '#00be52',

        // Whether to include the default NProgress styles...
        includeCSS: true,

        // Whether the NProgress spinner will be shown...
        showSpinner: false,
    },
});
