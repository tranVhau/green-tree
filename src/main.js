import Vue from "vue";
import App from "./App.vue";
import VueI18n from "vue-i18n";
import vi from "./languages/vi.json";
import en from "./languages/en.json";
import "./assets/css/globalStyle.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueI18n);

const messages = {
  en: en,
  vi: vi,
};

// Create VueI18n instance with options

const currentLang = localStorage.getItem("lang");
if (!currentLang) {
  if (navigator.language.split("-")[0] == "vi") {
    localStorage.setItem("lang", "vi");
  } else {
    localStorage.setItem("lang", "en");
  }
}

const i18n = new VueI18n({
  locale: localStorage.getItem("lang"),
  fallbackLocale: "en",
  messages,
});

Vue.config.productionTip = false;

export default new Vue({
  i18n,
  render: (h) => h(App),
}).$mount("#app");
