<template>
    <div>
        <div v-if="contents!=null" >
            <div v-for="(item, index) in contents" :key="index">
                <content-card  :contents="item"> </content-card>
            </div>
        </div>
    </div>
</template>
<script>
const card_list=require("../data/card_list.json");

import ContentCard from './ContentCard.vue'

export default {
  components: { ContentCard },
    name: 'CardList',
    data() {
        return{
            contents: null,
        }
    },
    mounted(){
        console.log("MOUNTED START")
        this.getContents()
    },
    methods:{
        getContents(){ // TODO : change to api call
            this.contents = card_list.contents
        },
    },
}
</script>