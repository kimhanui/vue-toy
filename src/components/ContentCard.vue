<template>
  <div id="scrollTrue" class="card" >
    <div class="card-content">
        <div class="media">
            <div class="media-left">
                <figure class="image is-64x64">
                    <template v-if="!loading">
                        <img class="is-rounded" v-if="contents.profile_img == null || contents.profile_img == ''" :src="profile_alt_img" alt="profile">
                        <img class="is-rounded" v-else :src="contents.profile_img" :alt="profile_alt_img">
                    </template>
                    <b-skeleton circle width="64px" height="64px" :active="loading"></b-skeleton>
                </figure>
            </div>
            <div class="media-content" >
                <template v-if="!loading">
                    <div class="title is-4">{{contents.title}}</div>
                    <div class="subtitle is-6">{{contents.author}}</div>
                </template>
                <b-skeleton size="is-large"  width="80%" :active="loading"></b-skeleton>
                <b-skeleton width="30%" :active="loading"></b-skeleton>
            </div>
        </div>
    </div>
    <div class="card-image" @click="$emit('clickCard')">
        <template v-if="!loading">
            <figure class="image is-4by3">
                <img v-if="contents.content_img == null || contents.content_img == ''" :src="content_alt_img" alt="content">
                <img v-else :src="contents.content_img" alt="content">            
            </figure>
        </template>
        <figure class="image">
            <b-skeleton height="400px" :active="loading"></b-skeleton>
        </figure>
    </div>
    <div class="card-content" @click="$emit('clickCard')">
        <template v-if="!loading">
            <div>{{contents.reg_dt}}</div>
            <div>
            <div class="content">
                {{getDescription()}}
            </div>
            </div>
        </template>
        <b-skeleton width="30%" :active="loading"></b-skeleton>
        <b-skeleton width="80%" :active="loading" :count=3 ></b-skeleton>
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
    mounted(){
        setInterval(() => {
            this.loading = false
        }, 2*1000);
    },
    data(){
        return {
            loading: true,
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
                if(0<=limit2lines && limit2lines < 100){
                    return desc.substring(0,limit2lines)+ "..."
                }
                return desc.substring(0,100)+ "..."
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