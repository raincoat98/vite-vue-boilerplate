import { createApp } from "vue";
import "./style.css";

import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

import Lara from "@/presets/lara";
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(PrimeVue, { unstyled: true, pt: Lara });

app.mount("#app");
