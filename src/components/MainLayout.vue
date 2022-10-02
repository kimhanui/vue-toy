<template>
  <div class="container is-max-desktop" style="background-color: grey; width:700px;">
    <!-- <v-for="cardList"  -->
      <card-list></card-list>
  </div>
</template>

<script>
import CardList from './CardList.vue';
export default {
  components: { CardList },
  name: "MainLayout",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
