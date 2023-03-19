<template>
  <div class="container is-max-desktop" style="width: 700px">
    <div v-if="cards">
      <div v-for="(item, index) in cards.content" :key="index">
        <content-card style="overflow:hidden" :card="item" :isMainList="true" :idNum="index" @clickCard="onClickCard(index)"/>
      </div>

      <scroll-observer @intersect="getMoreContents()" />
    </div>
    <div v-else>
      <div class="center">게시글이 없습니다.</div>
    </div>

    <!-- modal -->  
    <template v-if="modals.selectedCard">
      <div class="modal is-active ">
        <div class="modal-background" @click="closeModal('selectedCard')"></div>
        <div class="modal-card" style="width: 70%; height: 80%;">
          <div class="columns" style="height: 100%; margin: 0px auto;">
            <div class="column is-half">
              <content-card :card="cards.content[selectedIndex]" :isMainList="false"/>
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
import ContentCard from "./ContentCard.vue";
import ScrollObserver from './includes/ScrollObserver.vue';

export default {
  components: { ContentCard, CardComments, ScrollObserver },
  name: "MainLayout",
  data() {
    return {
      cards: null,
      selectedIndex: null,
      modals: {
        selectedCard: false,
      },
      requestData:{
        page: 0
        , size: 10
      }
    };
  },
  mounted() {
    this.getContents();
  },
  methods: {
    getContents() {
      this.$axios.get('http://localhost:9090/card/v1.0', {params:this.requestData}, { headers: {
      }})
      .then(res => {
        const data = res.data
        if(data.content.length > 0){
          const currCards = this.cards?.content ?? []
          currCards.push(...data.content) //content push

          this.cards = Object.assign(data, {content: currCards})
        }
      })
      .catch(err =>{
        this.openSystemModal('게시글 조회 중 오류가 발생하였습니다.\n', err)
      })
    },
    getMoreContents(){
      if(this.cards && this.cards.page <= this.cards.total_page){
        this.requestData = Object.assign(this.requestData, {page: this.cards.page + 1})
      }
      this.getContents()
    },
    onClickCard(index) {
      this.selectedIndex = index;
      this.openModal('selectedCard')
    },
  },
};
</script>
