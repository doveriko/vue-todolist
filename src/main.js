import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

// Register UI components globally
import BaseCard from "./components/UI/BaseCard.vue";
import CheckboxInput from "./components/UI/CheckboxInput.vue";
Vue.component("base-card", BaseCard);
Vue.component("checkbox-input", CheckboxInput);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
