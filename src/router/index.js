import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../components/MainLayout.vue'
import MyInfo from '../components/MyInfo.vue'
import MyInfoPagination from '../components/MyInfoPagination.vue'
import ContentCard from '../components/ContentCard.vue'
import CardList from '../components/CardList.vue'
import LayoutHeader from '../components/LayoutHeader.vue'
import LayoutFooter from '../components/LayoutFooter.vue'

Vue.use(VueRouter)
Vue.component(LayoutHeader.name, LayoutHeader)
Vue.component(LayoutFooter.name, LayoutFooter)
Vue.component(ContentCard.name, ContentCard)
Vue.component(CardList.name, CardList)
Vue.component(MyInfoPagination.name, MyInfoPagination)

export const router = new VueRouter({
    mode: 'history', // default는 hash 모드이다. history 모드를 적용하지 않으면 localhost:8080/#/ 이렇게 표시된다.
    routes: [
      { path: '/', name: 'MainLayout', component: MainLayout },
      { path: '/my/info', name: 'MyInfo', component: MyInfo },
      { path: '/my/info/statistic', name: 'MyInfoPagination', component: MyInfoPagination },
    ]
})
  