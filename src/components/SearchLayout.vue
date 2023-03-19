<template>
  <div class="container is-max-desktop" style="width: 700px">
      <h1 class="title">검색 결과</h1>
      <div class="box">
        <h1 class="title is-4">유저 검색</h1>
        <div v-if="searchResult.memberList?.content?.length > 0">
          <div>
            <!-- result `grid(2x5)` layout -->
            <div class="grid-container">
              <div class="grid-item"  v-for="(data, index) in searchResult.memberList.content.slice(0, 10)" :key="index" >
                <search-result-box type='profile' :data="data"> </search-result-box>
              </div>
            </div>
          </div>
          <br>
          <my-pagination v-if="searchResult && searchResult.memberList"
              :p_results="searchResult.memberList"
              @goPage="searchMember"
          ></my-pagination>
        </div>
        <div v-else>
          검색 결과가 없습니다
        </div>
      </div>  
      <div class="box">
        <h1 class="title is-4">게시글 검색</h1>
        <div v-if="searchResult.cardList?.content?.length > 0">
          <div>
            <!-- result `tile` layout  -->
            <div class="tile is-ancestor">
              <div class="tile is-parent" v-for="(data, index) in searchResult.cardList.content.slice(0, 3)" :key="index">
                <div class="tile is-child" >
                    <search-result-box type='card' :data="data"> </search-result-box>    
                </div>
              </div>
            </div>
            <!-- result `tile` layout  -->
            <div class="tile is-ancestor">
              <div class="tile is-parent" v-for="(data, index) in searchResult.cardList.content.slice(3, 6)" :key="index">
                <div class="tile is-child" >
                    <search-result-box type='card' :data="data"> </search-result-box>
                </div>
              </div>
            </div>
            <!-- result `tile` layout  -->
            <div class="tile is-ancestor">
              <div class="tile is-parent" v-for="(data, index) in searchResult.cardList.content.slice(6, 9)" :key="index">
                <div class="tile is-child" >
                    <search-result-box type='card' :data="data"> </search-result-box>
                </div>
              </div>
            </div>
          </div>
          <br>
          <my-pagination v-if="searchResult && searchResult.cardList"
            :p_results="searchResult.cardList"
            @goPage="searchCard"
          ></my-pagination>
        </div>
        <div v-else>
          검색 결과가 없습니다
        </div>
        
      </div>
  </div>  
</template>
<style>
.grid-container {
  display: grid;
  grid-template-rows: repeat(2,140px); /* colum설정: 5개를 20%크기로 만든다 */
  grid-template-columns: repeat(5, 20%); /* colum설정: 5개를 20%크기로 만든다 */
  row-gap: 10px;
}

.grid-item{
  display: flex;
  justify-content: center;
}
</style>
<script>
import MyPagination from './MyPagination.vue'
import SearchResultBox from './SearchResultBox.vue'
export default {
  components: { MyPagination, SearchResultBox },
  name: "SearchLayout",
  props: ['search_text'],
  data(){
    return {
      requestMemberData:{
        page: 0,
        size: 10,
        nickname: null,
        search_type: 0,
      },
      requestCardData:{
        page: 0,
        size: 9,
        title: null,
        search_type: 0,
      },
      searchResult: {
        memberList: null,
        cardList: null
      }
    }
  },
  created(){
    console.log("created::search_text=", this.search_text)
    this.requestMemberData.nickname = this.search_text
    this.requestCardData.title = this.search_text
    this.search()
  },
  watch:{
    'search_text': function(newVal){
      console.log("watch::search_text=", newVal)
      this.requestMemberData.nickname = newVal
      this.requestCardData.title = newVal
      this.search()
    }
  },
  methods:{
    search(){
      this.searchMember(0);
      this.searchCard(0);
    },
    searchMember(page){
      this.requestMemberData = Object.assign(this.requestMemberData, {page: page, search_type: 1})
      this.$axios.get('http://localhost:9090/member/v1.0', {params: this.requestMemberData})
      .then(res => {
        console.log("members::", res.data)
        this.searchResult.memberList = res.data
      })
      .catch(err =>{
        this.openSystemModal('검색 중 오류가 발생하였습니다.\n', err)
      })
    },
    searchCard(page){
      this.requestCardData = Object.assign(this.requestCardData, {page: page, search_type: 2})
      this.$axios.get('http://localhost:9090/card/v1.0', {params: this.requestCardData})
      .then(res => {
        console.log("cards::", res.data)
        this.searchResult.cardList = res.data
      })
      .catch(err =>{
        this.openSystemModal('검색 중 오류가 발생하였습니다.\n', err)
      })
    }
  }
}
</script>
