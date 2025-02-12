import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/smart_village/',
	optimizeDeps: {
		exclude: ['js-big-decimal'],
	},
	server: {
		proxy: {
			'/geoserver': 'http://175.125.95.209:8888'
		}
	}
});
