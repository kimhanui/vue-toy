<template>
  <div>
    <div id="scrollTrue">
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img class="is-rounded" src="https://promotionjobs.sales-port.com/wp-content/uploads/2021/11/alexander-hipp-iEEBWgY_6lA-unsplash4.jpg" />
        </p>
      </figure>
      <div class="media-content" style="color: #FFFFFF">
        <div class="content" >
          <p>
            <span >John Smith</span> <small>@johnsmith</small>
            <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
            non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-reply"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-retweet"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardComments",
};
</script>
<style>
#scrollTrue{
    overflow-y:scroll;
    position:relative;
    max-height: 800px;
}
</style>