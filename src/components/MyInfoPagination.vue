<template>
  <div>
    <div class="box">
      <div class="pagination is-centered">
        <a class="pagination-previous">이전10개</a>
        <a class="pagination-next">다음10개</a>
        <ul class="pagination-list">
          <li>
            <a v-if="page-2 >0" class="pagination-link">{{page-2}}</a>
          </li>
          <li>
            <a v-if="page-1 >0" class="pagination-link">{{page-1}}</a>
          </li>
          <li>
            <a
              class="pagination-link is-current"
              aria-current="page"
              >{{page}}</a
            >
          </li>
          <li>
            <a v-if="page+1 <= totalPage" class="pagination-link">{{page+1}}</a>
          </li>
          <li>
            <a v-if="page+2 <= totalPage" class="pagination-link">{{page+2}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyInfoPagination",
  props: {
    p_title: null, //조회 항목
    p_results: {
      totalPage: null, //총 페이지 수
      page: null, //현재 페이지
      size: null,
    },
  },
  data(){
    return {
      page: null,
      totalPage: null,
    }
  },
  mounted(){ /* FIXME: MyInfo에서 로드된 후 최초한번만 아래 실행됨.*/
    this.page = this.p_results.page 
    this.totalPage = this.p_results.totalPage
  },
  methods:{

  },
};
</script>
