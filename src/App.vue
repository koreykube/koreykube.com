<template>
  <div class="app">
    <div class="nav">
      <img alt="Korey Kube Logo" src="./assets/logo.png">
      <router-link to="/" class="push">Home</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
}
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
