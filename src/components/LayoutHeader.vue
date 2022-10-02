<template>
  <div>
    <nav class="navbar docs-navbar is-spaced has-shadow">
      <div class="navbar-item is-expanded">
        <div class="navbar-start">LOGO</div>
      </div>
      <div class="navbar-item">
        <p class="control has-icons-right">
          <input class="input is-rounded" type="text" placeholder="search..." />
          <span class="icon is-small is-right">
            <i class="fas fa-user-secret"></i>
          </span>
        </p>
      </div>
      <div class="navbar-item is-expanded">
        <div class="navbar-end">END</div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "LayoutHeader",
};
</script>
