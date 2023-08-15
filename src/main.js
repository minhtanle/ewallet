import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import { projectAuth } from "./configs/firebase";

/* Import css */
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";

/* Import component */
import { registerGlobalComponent } from "./utils/import";

let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    registerGlobalComponent(app);

    app.use(router);

    app.use(i18n);

    app.mount("#app");
  }
});
