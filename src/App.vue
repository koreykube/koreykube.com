<template>
  <div class="app">
    <div class="nav">
      <router-link to="/" class="logo"><img alt="Korey Kube Logo" src="./assets/logo.png"></router-link>
      <router-link to="/portfolio" class="push">Portfolio</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <a href="javascript:void(0);" class="burger" v-on:click="dropMenu">
        <unicon name="bars" id="bars" height="40" width="40"></unicon>
      </a>
      <div class="break"></div>
      <div id="mobileMenuLinks">
        <router-link to="/portfolio" class="mobileMenu" @click.native="dropMenu()">Portfolio</router-link>
        <router-link to="/about" class="mobileMenu" @click.native="dropMenu()">About</router-link>
        <router-link to="/contact" class="mobileMenu" @click.native="dropMenu()">Contact</router-link>
        <a href="https://github.com/koreykube" class="mobileMenu icon"><unicon name="github-alt" height="30" width="30"></unicon></a>
        <a href="https://au.linkedin.com/in/korey-kube-a7857918" class="mobileMenu icon"><unicon name="linkedin-alt" height="30" width="30"></unicon></a>
      </div>
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
  methods: {
    dropMenu() {
      const e = document.getElementById("mobileMenuLinks");
      if(e.style.display === "block") {
        e.style.display = "none";
      } else {
        e.style.display = "block";
      }
    }
  },
}
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
