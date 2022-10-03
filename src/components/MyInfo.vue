<template>
  <div class="container is-max-desktop" style="width: 700px">
    <!-- <section class="section"> -->
    <div class="box">
      <h1 class="title is-2">Who am I?</h1>

      <div class="tile is-ancestor">
        <!-- <div class="tile is-vertical"> -->

          <div class="tile is-vertical">
            <div class="tile is-parent ">
              <article class="tile is-child notification is-primary">
                <p class="title">Vertical...</p>
                <p class="subtitle">Top tile</p>
              </article>
              <article class="tile is-child notification is-warning">
                <p class="title">...tiles</p>
                <p class="subtitle">Bottom tile</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Middle tile</p>
                <p class="subtitle">With an image</p>
                <!-- <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png" />
                </figure> -->
              </article>
            </div>
          </div>

        <!-- </div> -->
      </div>
    </div>
    <!-- </section> -->
    <level>
      <!-- 4 level로 분할: 읽은 책 수, 추천한 책 수, 읽고싶은 책 수, 읽어야하는 책 수 -->
    </level>
  </div>
</template>
<script>
export default {
  name: "MyInfo",
};
</script>
