import { defineAsyncComponent } from "vue";
import useClickOutSide from "@/composables/useClickOutSide";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(fas, far, fab);

import "vue3-toastify/dist/index.css";

export function registerGlobalComponent(app) {
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/default"))
  );
  app.component(
    "system-layout",
    defineAsyncComponent(() => import("@/layouts/system"))
  );
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/auth"))
  );

  app.component("font-awesome-icon", FontAwesomeIcon);

  app.directive("click-outside", useClickOutSide);
}
