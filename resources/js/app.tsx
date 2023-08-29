import './bootstrap';
import '../css/app.css';

import { ReactElement } from 'react';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

import ConnectLayout from './layouts/ConnectLayout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: title => `${title} - ${appName}`,
    resolve: name => {
        const pages = import.meta.glob('./domain/**/*.tsx', { eager: true });
        let page: any = pages[`./domain/${name}.tsx`];

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
        color: '#4B5563',
    },
});
