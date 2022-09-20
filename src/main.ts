import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueDragscroll from "vue-dragscroll";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(VueDragscroll);
app.mount("#app");
