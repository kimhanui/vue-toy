<template>
  <div class="container is-max-desktop" style="width: 700px">
    <div v-if="contents != null">
      <div id="content-list" v-for="(item, index) in contents" :key="index">
        <content-card style="overflow:hidden" :contents="item" :isMainList="true" @click.native="onClickCard(index)"/>
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
  },
};
</script>
