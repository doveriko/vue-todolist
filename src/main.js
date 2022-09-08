import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

// Register UI components globally
import BaseCard from "./components/UI/BaseCard.vue";
Vue.component("baseCard", BaseCard);

// Set-up Font Awesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCirclePlus,
  faPen,
  faTrash,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCirclePlus, faPen, faTrash, faFloppyDisk);
Vue.component("faIcon", FontAwesomeIcon);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
