import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

router.afterEach((to) => {
  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_path: to.fullPath,
    });
  }
});

app.use(router);
app.mount("#app");
