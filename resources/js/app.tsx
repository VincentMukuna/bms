import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import {ThemeProvider} from "@/components/theme-provider";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx'))
        .then((page:any)=>{
            if (page.default.layout){
                return page.default
            }
            return (props:any)=> {
                return (<AuthenticatedLayout user={props.auth.user}>{page.default({...props})}</AuthenticatedLayout>)
            }
        }),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <ThemeProvider defaultTheme="system" storageKey="bms-ui-theme">
                <App {...props} />
            </ThemeProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
