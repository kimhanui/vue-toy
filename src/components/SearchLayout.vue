<template>
  <div class="container is-max-desktop" style="width: 700px">
      <h1 class="title">검색 결과</h1>
      <div class="box">
        <h1 class="title is-4">유저 검색</h1>
        <div v-if="searchResult && searchResult.memberList?.content?.length > 0">
          <div v-for="(data, index) in searchResult.memberList.content" :key="index">
            <div>{{data.nickname}}</div>
          </div>
          
        </div>
        <my-pagination v-if="searchResult && searchResult.memberList"
              :p_results="searchResult.memberList"
              @goPage="searchMember"
          ></my-pagination>
        <!-- <div v-else>
          검색 결과가 없습니다
        </div> -->
      </div>  
      <div class="box">
        <h1 class="title is-4">게시글 검색</h1>
        <div v-if="searchResult && searchResult.cardList?.content?.length > 0">
          <div v-for="(data, index) in searchResult.cardList.content" :key="index">
            <div>{{data.title}}</div>
          </div>
        </div>
        <my-pagination v-if="searchResult && searchResult.cardList"
            :p_results="searchResult.cardList"
            @goPage="searchCard"
          ></my-pagination>
        <!-- <div v-else>
          검색 결과가 없습니다
        </div> -->
        
      </div>
  </div>  
</template>
<script>
import MyPagination from './MyPagination.vue'
export default {
  components: { MyPagination },
  name: "SearchLayout",
  props: ['search_text'],
  data(){
    return {
      requestData:{
        page: 0,
        size: 10,
        search_text: null,
        search_type: 0,
      },
      searchResult: null
    }
  },
  created(){
    console.log("created::search_text=", this.search_text)
    this.requestData.search_text = this.search_text
    this.search()
  },
  watch:{
    'search_text': function(newVal){
      console.log("watch::search_text=", newVal)
      this.requestData.search_text = newVal
      this.search()
    }
  },
  methods:{
    search(){
      this.$axios.get('http://localhost:9090/search/v1.0', {params: this.requestData})
      .then(res => {
        this.searchResult = res.data
      })
      .catch(err =>{
        this.openSystemModal('검색 중 오류가 발생하였습니다.')
      })
    },
    searchMember(page){
      console.log("emit::searchMember page=", page)
      this.requestData = Object.assign(this.requestData, {page: page, search_type: 1})
      this.$axios.get('http://localhost:9090/search/v1.0', {params: this.requestData})
      .then(res => {
        this.searchResult.memberList = Object.assign({}, res.data.memberList)
      })
      .catch(err =>{
        this.openSystemModal('검색 중 오류가 발생하였습니다.')
      })
    },
    searchCard(page){
      console.log("emit::searchCard page=", page)
      this.requestData = Object.assign(this.requestData, {page: page, search_type: 2})
      this.$axios.get('http://localhost:9090/search/v1.0', {params: this.requestData})
      .then(res => {
        this.searchResult.cardList = Object.assign({}, res.data.cardList)
      })
      .catch(err =>{
        this.openSystemModal('검색 중 오류가 발생하였습니다.')
      })
    }
  }
}
</script>
