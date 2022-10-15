<template>
  <div class="container is-max-desktop" style="width: 700px">
    <div v-if="contents != null">
      <div id="content-list" v-for="(item, index) in contents" :key="index">
        <content-card style="overflow:hidden" :contents="item" :isMainList="true" @clickCard="onClickCard(index)"/>
      </div>
    </div>

    <!-- modal -->
    <template v-if="modals.selectedCard">
      <div class="modal is-active ">
        <div class="modal-background" @click="closeModal('selectedCard')"></div>
        <div class="modal-card" style="width: 70%; height: 80%;">
          <div class="columns" style="height: 100%; margin: 0px auto;">
            <div class="column is-half">
              <content-card :contents="contents[selectedIndex]" :isMainList="false"/>
            </div>
            <div class="column">
              <div>
                <h1 class="title" style="color: white">댓글</h1>
                <card-comments/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import CardComments from './CardComments.vue';
const card_list = require("../data/card_list.json");

import ContentCard from "./ContentCard.vue";

export default {
  components: { ContentCard, CardComments },
  name: "MainLayout",
  data() {
    return {
      contents: null,
      loading: true,
      selectedIndex: null,
      modals: {
        selectedCard: false,
      },
    };
  },
  mounted() {
    this.getContents();
  },
  methods: {
    getContents() {
      // TODO : change to api call
      this.contents = card_list.contents;
    },
    onClickCard(index) {
      console.log("CLICK");
      this.selectedIndex = index;
      this.openModal('selectedCard')
    },
    executeIntersectionAPI(){
      const observerOption = {
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.2,
      };

      let callback = (entries, observer) => {
        entries.forEach((entry, index) => {
            console.log("FOR EACH")
            if (entry.isIntersecting) { // 뷰포트와 해당 요소가 threshold(0.2 =20%만큼 교차)만큼 교차됐을 때 
                console.log("INTERSECT", true)
                entry.target.src = this.contents[index].content_img
                observer.unobserve(entry.target)    // entry.target에 대해 관찰 종료
            }
        });
      };
        
      let observer = new IntersectionObserver(callback, observerOption);
      
      /**
       * TODO - `ContentCard`를 어느 시점에 observe할 수 있는가?
       * (api로 한번에 리스트 받아오는 동안 해당 객체는 모두 스켈레톤 처리함. 로드된 이후엔 굳이 Observer를 사용할 이유가 있나?)
       */
      let elems = document.querySelectorAll('content-card')
      elems.forEach(el => {observer.observe(el)})
    },
  },
};
</script>
