import sveltePreprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: node(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      server: {
        hmr: {
          clientPort: process.env.HMR_HOST ? 443 : 24678,
          host: process.env.HMR_HOST ? process.env.HMR_HOST.substring("https://".length) : "localhost"
        }
      }
    }
  }
};
