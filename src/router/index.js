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
import ScrollObserver from '../components/includes/ScrollObserver.vue'
import SystemModal from '../components/includes/SystemModal.vue'
import SearchLayout from '../components/SearchLayout.vue'
/* 라우터, 컴포넌트 등록 */
Vue.use(VueRouter)
Vue.component(LayoutHeader.name, LayoutHeader)
Vue.component(ContentCard.name, ContentCard)
Vue.component(CardComments.name, CardComments)
Vue.component(MyStatistics.name, MyStatistics)
Vue.component(MyPagination.name, MyPagination)
Vue.component(ScrollObserver.name, ScrollObserver)
Vue.component(SystemModal.name, SystemModal)
Vue.component(SearchLayout.name, SearchLayout)

/* 이미 이동할 위치에 있는 경우 발생하는 에러 무시 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => {
		if (err.name !== 'NavigationDuplicated') throw err;
	});
};


export const router = new VueRouter({
    mode: 'history', // default는 hash 모드이다. history 모드를 적용하지 않으면 localhost:8080/#/ 이렇게 표시된다.
    routes: [
      { path: '/', name: 'MainLayout', component: MainLayout },
      { path: '/my/info', name: 'MyInfo', component: MyInfo },
      { path: '/add/card', name: 'AddCard', component: AddCard },
      { path: '/search', name: 'SearchLayout', component: SearchLayout , props: route => ({search_text: route.query.search_text})},
    ]
})
  