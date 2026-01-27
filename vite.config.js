import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: './examples/index.html',
        },
    },
    server: {
        port: 1234,
        open: '/examples/index.html',
    },
});
