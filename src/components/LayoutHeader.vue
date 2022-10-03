<template>
  <div>
    <div class="columns" style="padding: 10px">
      <!-- left -->
      <div class="column" id="left-column">
        <nav navbar>
          <div class="navbar-brand">
            <div class="navbar-item">
              <a href="/">
                <img
                  id="logo-img"
                  src="https://see.fontimg.com/api/renderfont4/w1OB8/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/bG9nbw/millenia-personal-use.png"
                />
              </a>
            </div>
            <div class="navbar-item">
              <a href="https://github.com/kimhanui/vue-toy">
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
        <nav navbar>
          <div class="navbar-item is-expanded">
            <p :class="inputStyleClass">
              <input
                class="input is-rounded"
                type="text"
                size="50"
                :value="searchText"
                @input="onInput"
                @keydown.enter="search"
                placeholder="search..."
              />
              <template v-if="isLoading === false">
                <span class="icon is-small is-right">
                  <i class="fas fa-search"></i>
                </span>
              </template>
            </p>
          </div>
        </nav>
      </div>
      <!-- right -->
      <div class="column" id="right-column">
        <nav navbar>
          <div class="navbar-menu">
            <div class="navbar-start"></div>
            <div class="navbar-end">
              <a href="https://github.com/kimhanui/vue-toy">
                <span class="icon is-large">
                  <i class="fab fa-2x fa-github-alt"></i>
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
    isLoading(newVal) {
      console.log("WATCH", newVal, this.inputStyleClass);
      if (newVal === true) {
        this.inputStyleClass = "control has-icons-right is-loading";
      } else {
        this.inputStyleClass = "control has-icons-right";
      }
    },
  },
  methods: {
    onInput(event) {
      this.searchText = event.target.value;
    },
    search() {
      // TODO : chnage to api call
      //loading icon
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        //toast
        this.$buefy.toast.open({
          message: "검색되었습니다!",
          type: "is-success",
        });
      }, 3 * 1000);
    },
  },
};
</script>
<style>
#logo-img {
  width: auto;
  height: 56px;
}

/* #center-column { */
#colum {
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
