import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: 'resources/images',
                    dest: './'
                }
            ]
        })
    ],
    ssr: {
        noExternal: ['@inertiajs/server'],
    },
});
