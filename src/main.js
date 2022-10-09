import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import { router } from "./router/index.js";

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
  },
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
