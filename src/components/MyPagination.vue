<template>
  <div>
      <div class="pagination is-centered">
        <a class="pagination-previous" @click="goPage(page-10)">이전10개</a>
        <a class="pagination-next" @click="goPage(page+10)">다음10개</a>
        
        <ul class="pagination-list">
          <li>
            <a v-if="page-1 >0" class="pagination-link" @click="goPage(page-2)">{{page-1}}</a>
          </li>
          <li>
            <a v-if="page >0" class="pagination-link" @click="goPage(page-1)">{{page}}</a>
          </li>
          <li>
            <a
              class="pagination-link is-current"
              aria-current="page"
              >{{page+1}}</a
            >
          </li>
          <li>
            <a v-if="page+2 <= total_page" class="pagination-link" @click="goPage(page+1)">{{page+2}}</a>
          </li>
          <li>
            <a v-if="page+3<= total_page" class="pagination-link" @click="goPage(page+2)">{{page+3}}</a>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: "MyPagination",
  props: {
    p_results: {
      total_page: null, //총 페이지 수
      page: null, //현재 페이지
      size: null,
    },
  },
  data(){
    return {
      page: null,
      total_page: null,
    }
  },
  mounted(){
    this.page = this.p_results.page
    this.total_page = this.p_results.total_page
  },
  watch:{
    'p_results': function(newVal){
      this.page = this.p_results.page
      this.total_page = this.p_results.total_page
      if(this.page == this.total_page){
        this.page -= 1 // display 시 +1 방지
      }
      console.log("watch::total_page=", this.total_page)
    }
  },
  methods:{
    goPage(clickedPage){
      if(clickedPage > this.total_page){
        clickedPage = this.total_page 
      }
      else if(clickedPage <0 ){
        clickedPage = 0
      }
      this.$emit('goPage', clickedPage)
    }
  },
};
</script>
