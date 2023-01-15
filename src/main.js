/* eslint-disable no-unused-vars */
import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import { router } from "./router/index.js";
import { store } from "./store/index.js";

Vue.use(Buefy);
Vue.config.productionTip = false;

// mixin을 사용할 어플리케이션 정의
Vue.mixin({
  methods: {
    openDangerMsg(msg) {
      this.$buefy.notification.open({
        duration: 5000,
        message: msg,
        // position: 'is-bottom-right',
        type: "is-danger",
        // hasIcon: true,
      });
    },
    openToast(msg){ /* only for success */
      this.$buefy.toast.open({
        message: msg,
        type: "is-success",
      });
    },
    openModal(name) {
      if (Object.prototype.hasOwnProperty.call(this.modals, name)) {
        this.modals[name] = true;
        document.querySelector("html").classList.add('is-clipped');
      }
    },
    closeModal(name) {
      if (Object.prototype.hasOwnProperty.call(this.modals, name)) {
        this.modals[name] = false;
        document.querySelector("html").classList.remove('is-clipped');
      }
    },
    openSystemModal(bodyText){
      this.$store.state.systemModal = true;
      this.$store.state.systemModalBodyText = bodyText
    },
    closeSystemModal(bodyText){
      console.log("CLOSE MODAL")
      this.$store.state.systemModal = false;
      this.$store.state.systemModalBodyText = null
    }
  },
});

new Vue({
  store: store,
  router: router,
  render: (h) => h(App),
}).$mount("#app");