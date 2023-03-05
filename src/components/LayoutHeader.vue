<template>
  <div>
    <div class="columns" style="margin: 0% 4%">
      <!-- left -->
      <div class="column" id="left-column">
        <nav class="navbar">
          <div class="navbar-brand">
            <a href="/">
              <img
                id="logo-img"
                src="https://see.fontimg.com/api/renderfont4/w1OB8/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/bG9nbw/millenia-personal-use.png"
              />
            </a>
            <div class="navbar-item">
              <a href="https://github.com/kimhanui/vue-toy" target="_blank">
                <span class="icon is-large">
                  <i class="fab fa-2x fa-github-alt"></i>
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
      <!-- center -->
      <div class="column" id="center-column">
        <nav class="navbar">
          <div class="navbar-item" style="width: 100%; display: block">
            <p :class="inputStyleClass">
              <input
                class="input is-rounded"
                type="text"
                :value="searchText"
                @input="onInput"
                @keydown.enter="search"
                placeholder="search..."
              />
              <template v-if="isLoading === false">
                <span class="icon is-small is-right is-clickable" @click="search">
                  <i class="fas fa-search"></i>
                </span>
              </template>
            </p>
          </div>
        </nav>
      </div>
      <!-- right -->
      <div class="column">
        <nav class="navbar" id="right-column">
          <div class="navbar-brand">
            <div class="navbar-item">
              <a href="/add/card">
              <span class="icon is-large">
                <i class="fas fa-2x fa-plus-circle"></i>
              </span>
              </a>
            </div>
            <div class="navbar-item">
              <a href="/my/info">
                <span class="icon is-large">
                  <i class="fas fa-2x fa-user"></i>
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import SearchLayout from './SearchLayout'
export default {
  name: "LayoutHeader",
  data() {
    return {
      inputStyleClass: "control has-icons-right",
      searchText: null,
      isLoading: false,
    };
  },
  watch: {
    // isLoading(newVal) {
    //   console.log("WATCH", newVal, this.inputStyleClass);
    //   if (newVal === true) {
    //     this.inputStyleClass = "control has-icons-right is-loading";
    //   } else {
    //     this.inputStyleClass = "control has-icons-right";
    //   }
    // },
  },
  methods: {
    onInput(event) {
      this.searchText = event.target.value;
    },
    search() {
      //loading icon
      // this.isLoading = true;
      this.$router.push({name: SearchLayout.name, query:{'search_text': this.searchText}})
      console.log("search")
      // Previous Code
      // setTimeout(() => {
      //   this.isLoading = false;
      //   //toast
      //   this.$buefy.toast.open({
      //     message: "검색되었습니다!",
      //     type: "is-success",
      //   });
      // }, 3 * 1000);
    },
  },
};
</script>
<style>
#logo-img {
  width: auto;
  height: 56px;
}
#right-column {
  float: right;
}
</style>
