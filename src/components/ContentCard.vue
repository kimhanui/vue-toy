<template>
  <div class="card scrollTrue" :id="`card${idNum}`">
    <div class="card-content">
        <div class="media">
            <div class="media-left">
                <figure class="image is-64x64">
                    <template v-if="intersected">
                        <img class="is-rounded" v-if="contents.profile_img == null || contents.profile_img == ''" :src="profile_alt_img" alt="profile">
                        <img class="is-rounded" v-else :src="contents.profile_img" :alt="profile_alt_img">
                    </template>
                    <b-skeleton circle width="64px" height="64px" :active="!intersected"></b-skeleton>
                </figure>
            </div>
            <div class="media-content" >
                    <div class="title is-4">{{contents.title}}</div>
                    <div class="subtitle is-6">{{contents.author}}</div>
            </div>
        </div>
    </div>
    <div class="card-image" @click="$emit('clickCard')">
        <template v-if="intersected">
            <figure class="image is-4by3">
                <img v-if="contents.content_img == null || contents.content_img == ''" :src="content_alt_img" alt="content">
                <img v-else :src="contents.content_img" alt="content">            
            </figure>
        </template>
        <figure class="image">
            <b-skeleton height="400px" :active="!intersected"></b-skeleton>
        </figure>
    </div>
    <div class="card-content" @click="$emit('clickCard')">
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
    props: ['contents', 'isMainList', 'idNum'],
    created(){
        console.log("CONTENTS", (this.contents.title))
    },
    mounted(){
        this.executeIntersectionAPI()
    },
    destroyed(){
        this.observer.disconnect()
    },
    data(){
        return {
            intersected: false,
            content_alt_img: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
            profile_alt_img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
            limitedDescription: null,
            observer: null
        }
    },
    methods:{
        getDescription(){ /* ??????????????? ??????: 100??? ?????? 2??? ?????? */
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
        },
        executeIntersectionAPI(){
            const observerOption = {
                rootMargin: '0px 0px 0px 0px',
                threshold: 0.5,
            };

            let callback = (entries, observer) => {
                let entry = entries[0]
                if (entry.isIntersecting) { // ???????????? ?????? ????????? threshold?????? ???????????? ??? 
                    this.intersected = true      
                    observer.unobserve(entry.target)    // entry.target??? ?????? ?????? ??????
                }
            };
            this.observer = new IntersectionObserver(callback, observerOption);
            let elems = document.querySelector('#card'+this.idNum)
            this.observer.observe(elems)
        },
    }
}
</script>
<style>
.scrollTrue{
    overflow-y:scroll;
    position:relative;
    max-height: 800px;
}
</style>