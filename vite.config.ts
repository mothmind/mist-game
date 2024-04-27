import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use '$lib/styles/_mixins' as *;
          @use '$lib/styles/_variables' as *;
        `
			}
		}
	}
});
