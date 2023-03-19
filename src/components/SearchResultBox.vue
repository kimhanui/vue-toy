<template>
    <div>
        <template v-if="type == 'card'">
            <div class="card" >
                <div class="text-wrap">{{data.title}}</div>
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img :src="data.img_url ?? 'https://bulma.io/images/placeholders/1280x960.png'" alt="Placeholder image">
                    </figure>
                </div>
            </div>
        </template>
        <template v-if="type =='profile'">
            <b-tooltip position="is-bottom" multilined>
                <template v-slot:content>
                    <b>Hi, I'm {{data.nickname}}!</b>
                    <p>
                        <span v-if="data.genre">
                            I love {{data.genre}}. Yeah!
                        </span>
                        <span v-else>
                            I don't have a favorite genre yet, but I'm getting to know it.
                        </span>
                    </p>
                </template>
                <div>
                    <div class="center">
                    <figure class="image is-96x96">
                        <img class="is-rounded" :src="data.profile_img_url ?? 'https://bulma.io/images/placeholders/96x96.png'" alt="Placeholder image">
                    </figure>
                    </div>
                    <div class="text-wrap-multilines">{{data.nickname}}</div>
                </div>
            </b-tooltip>
        </template>
    </div>
</template>
<style scoped>
.center{
    display: flex;
    justify-content: center;
}
.text-wrap{
    /* 말줄임 start */
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* 말줄임 end */
    text-align:center; 
    word-break: break-all;
}
.text-wrap-multilines{
    /* 말줄임 start */
    height:50px;
    display: -webkit-box;
    -webkit-line-clamp:2; /* 2줄 넘어가면 말줄임 표시 */
    -webkit-box-orient:vertical;
    overflow:hidden;
    text-overflow:ellipsis;
    /* 말줄임 end */  
    text-align:center; 
    word-break: break-all;
}
</style>
<script>
import SearchResultBox from './SearchResultBox'
export default {
  components: { SearchResultBox },
  name: "SearchResultBox",
  props:['type', 'data'],
  data(){
    return {}
  },
  created(){

  },
  methods:{
  }
}
</script>
