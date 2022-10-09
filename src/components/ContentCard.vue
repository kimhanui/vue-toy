<template>
  <div id="scrollTrue" class="card" >
    <div class="card-content">
        <div class="media">
            <div class="media-left">
                <figure class="image is-64x64">
                    <img class="is-rounded" v-if="contents.profile_img == null || contents.profile_img == ''" :src="profile_alt_img" alt="profile">
                    <img class="is-rounded" v-else :src="contents.profile_img" :alt="profile_alt_img">
                </figure>
            </div>
            <div class="media-content" >
                <div class="title is-4">{{contents.title}}</div>
                <div class="subtitle is-6">{{contents.author}}</div>
            </div>
        </div>
    </div>
    <div class="card-image">
        <figure class="image is-4by3">
            <img v-if="contents.content_img == null || contents.content_img == ''" :src="content_alt_img" alt="content">
            <img v-else :src="contents.content_img" alt="content">
        </figure>
    </div>
    <div class="card-content">
        <div>{{contents.reg_dt}}</div>
        <div>
        <div class="content">
            {{getDescription()}}
        </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "ContentCard",
    props: ['contents', 'isMainList'],
    created(){
        console.log("CONTENTS", JSON.stringify(this.contents))
    },
    data(){
        return {
            content_alt_img: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
            profile_alt_img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
            limitedDescription: null,
        }
    },
    methods:{
        getDescription(){ /* 메인노출인 카드: 100자 또는 2줄 제한 */
            if(this.isMainList === true){
                let desc = this.contents.description
                const limit1lines = desc.indexOf("\n") 
                const limit2lines = desc.indexOf("\n",limit1lines+1) 
                console.log("LIMIT2LINES", limit2lines)
                if(0<=limit2lines && limit2lines < 100){
                    return desc.substring(0,limit2lines)+ "..."
                }
                    return desc.substring(0,100)+ "..."
                // }
            }
            return this.contents.description
        }
    }
}
</script>
<style>
#scrollTrue{
     overflow-y:scroll;
    position:relative;
    max-height: 800px;
}
</style>