import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
		environment: 'jsdom'
	},
	resolve: {
		alias: {
			$components: '/src/components',
			$stores: '/src/stores',
			$tailwind: '/src/tailwind.css'
		}
	}
});
