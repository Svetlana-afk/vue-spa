<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
      </div>
      <h5>VUE SPA</h5>
    </div>
  </nav>
</template>

<script>
export default {
  name: "mai",
};
</script>