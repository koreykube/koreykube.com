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
    <div class="footer">
      <router-link to="/user" class="push"><unicon name="sign-in-alt" height="40" width="40"></unicon></router-link>
      <a href="https://github.com/koreykube"><unicon name="github-alt" height="40" width="40"></unicon></a>
      <a href="https://au.linkedin.com/in/korey-kube-a7857918"><unicon name="linkedin-alt" height="40" width="40"></unicon></a>
    </div>
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
