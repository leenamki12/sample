import './bootstrap';
import '../css/fonts.css';
import '../css/app.css';

import { ReactElement } from 'react';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

import ConnectLayout from './layouts/ConnectLayout';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: title => `${title} - ${appName}`,
    resolve: async name => {
        const pages = import.meta.glob('./domain/**/*.tsx');
        const pageModule = pages[`./domain/${name}.tsx`];

        const page: any = await pageModule();

        page.default.layout = name.startsWith('public/')
            ? undefined
            : (page: ReactElement) => <ConnectLayout children={page} name={name} />;

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
