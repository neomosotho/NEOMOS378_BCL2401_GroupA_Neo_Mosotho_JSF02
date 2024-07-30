import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    url: '', // This is for routing
  }
});

export default app;
