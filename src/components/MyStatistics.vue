<template>
  <div class="box">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>책 제목</th>
          <th>장르</th>
          <th>완독일</th>
          <th v-if="getEtcColumnName()">{{getEtcColumnName()}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in p_results.contents" :key="index">
          <td>
            <a :href="`${data.link}`" target="_blank">{{ data.title }}</a>
          </td>
          <td>{{ data.genre }}</td>
          <td>{{ data.read_dt }}</td>
          <td v-if="getEtcColumnName()">{{getEtcColumnValue(data)}}</td>
        </tr>
      </tbody>
    </table>
    <my-pagination
      v-if="p_type != null && p_results != null"
      :p_results="p_results"
    ></my-pagination>
  </div>
</template>
<script>
export default {
  name: "MyStatistics",
  props: {
    p_type: null, //조회 항목
    p_results: {
      contents: null,
      totalPage: null, //총 페이지 수
      page: null, //현재 페이지
      size: null,
    },
  },
  data() {
    return {
    }
  },
  mounted() {
    this.getEtcColumnName();
  },
  methods: {
    getEtcColumnName() {
        if(this.p_type ===1){
            return "추천여부"
        }
        else if(this.p_type===2){
            return "읽은 이유"
        }
    },
    getEtcColumnValue(data){
        if(this.p_type ===1){
            return data.recommend_yn ===1?'O':'X'
        }
        else if(this.p_type===2){ //icon(표정), tag타입, tooltip으로 설명
            let result = ''
            if(data.must_read_yn ===1){
                result += '필독'
            }
            else if(data.willing_yn === 1){
                result += '읽고싶어서'
            }
            return result
        }
    }
  },
};
</script>
