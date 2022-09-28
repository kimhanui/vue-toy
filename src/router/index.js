import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import LayoutHeader from '../components/LayoutHeader.vue'
import LayoutFooter from '../components/LayoutFooter.vue'

Vue.use(VueRouter)
Vue.component(LayoutHeader.name, LayoutHeader)
Vue.component(LayoutFooter.name, LayoutFooter)

export const router = new VueRouter({
    mode: 'history', // default는 hash 모드이다. history 모드를 적용하지 않으면 localhost:8080/#/ 이렇게 표시된다.
    routes: [
      { path: '/', name: 'HelloWorld', component: HelloWorld },
    ]
})
  