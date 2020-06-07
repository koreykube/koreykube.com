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

<script>
import store from "./store"

const AWS = require("aws-sdk");
AWS.config.region = 'ap-southeast-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-southeast-2:c69bc184-d7bc-4007-8346-62b7f26ca00e',
});

export default {
  data() {
    return {
    };
  },
  created() {
    if(store.state.credentials.length === 0) {
      return;
    } else {
      this.getCredentials();
    }
  },
  methods: {
    getCredentials() {
      var promise = AWS.config.credentials.getPromise();
      promise.then(
        function() {
          var creds = {
            accessKeyId: AWS.config.credentials.accessKeyId,
            secretAccessKey: AWS.config.credentials.secretAccessKey,
            sessionToken: AWS.config.credentials.sessionToken
          };
          store.commit("setCredentials", creds);
        },
        function(err) {
          console.log("err... " + JSON.stringify(err, null, 2));
        }
      );
    }
  }
}
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
