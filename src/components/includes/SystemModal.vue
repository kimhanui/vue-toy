<template>
  <div id="systemModal" class="modal is-active" v-if="$store.state.systemModal">
    <div class="modal-background" @click="closeSystemModal()"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">시스템 정보</p>
      </header>
      <section class="modal-card-body">
        {{ this.$store.state.systemModalBodyText }}
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="closeSystemModal()">확인</button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "SystemModal",
  method() {},
};
</script>
