<template>
  <div class="app">
    <div class="nav">
      <img alt="Korey Kube Logo" src="./assets/logo.png">
      <router-link to="/" class="push">Home</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./styles/main.scss";
</style>
