/* eslint-disable no-unused-vars */
import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import { router } from "./router/index.js";
import { store } from "./store/index.js";
import  axios  from 'axios';

Vue.use(Buefy);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

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
    openSystemModal(bodyText, redirect){
      this.$store.state.systemModal = true;
      this.$store.state.systemModalBodyText = bodyText;
      this.$store.state.systemModalRedirect = redirect;
    },
    closeSystemModal(){
      this.$store.state.systemModal = false;
      this.$store.state.systemModalBodyText = null;
      if(this.$store.state.systemModalRedirect){
        window.location.href= this.$store.state.systemModalRedirect
      }
    }
  },
});

new Vue({
  store: store,
  router: router,
  render: (h) => h(App),
}).$mount("#app");