import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../components/MainLayout.vue'
import MyInfo from '../components/MyInfo.vue'
import MyStatistics from '../components/MyStatistics.vue'
import MyPagination from '../components/MyPagination.vue'
import AddCard from '../components/AddCard.vue'
import CardComments from '../components/CardComments.vue'
import ContentCard from '../components/ContentCard.vue'
import LayoutHeader from '../components/LayoutHeader.vue'

Vue.use(VueRouter)
Vue.component(LayoutHeader.name, LayoutHeader)
Vue.component(ContentCard.name, ContentCard)
Vue.component(CardComments.name, CardComments)
Vue.component(MyStatistics.name, MyStatistics)
Vue.component(MyPagination.name, MyPagination)

export const router = new VueRouter({
    mode: 'history', // default는 hash 모드이다. history 모드를 적용하지 않으면 localhost:8080/#/ 이렇게 표시된다.
    routes: [
      { path: '/', name: 'MainLayout', component: MainLayout },
      { path: '/my/info', name: 'MyInfo', component: MyInfo },
      { path: '/add/card', name: 'AddCard', component: AddCard },
    ]
})
  