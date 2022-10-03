<template>
  <div class="container is-max-desktop" style="background-color: grey; width:700px;">
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