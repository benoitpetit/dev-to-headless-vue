import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createHead } from "@unhead/vue";

// Import styles
import "./assets/styles/app.css";
import "highlight.js/styles/atom-one-dark.css";

const app = createApp(App);
const head = createHead();

app.use(store);
app.use(router);
app.use(head);
app.mount("#app");
