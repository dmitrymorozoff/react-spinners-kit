import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: './demo/index.html',
        },
    },
    server: {
        port: 1234,
        open: '/demo/index.html',
    },
});
