<template>
  <div class="main">
    <h3>Freelance software and web developer based in Melbourne.</h3>
    <br/>
    <div class="portfolio-items-holder">
      <div v-for="(item, index) in posts" :key="index" class="portfolio-item-tile">
        <img :src="item.image" class="pi-image">
        <div class="text-in-image">
          <h2 class="pi-header">{{item.header}}</h2>
          <p class="pi-byline">{{item.byline}}</p>
        </div>
      </div>
    </div>
    <div v-if="this.$store.getters.signedIn" class="fab" v-on:click="createPost">+</div>
  </div>
</template>

<script>

import AWS from 'aws-sdk';
import store from '../store';

export default {
  name: 'Home',
  data: function() {
    return {
    }
  },
  computed: {
    posts() {
      if(store.state.posts.length >= 3) {
        return store.state.posts.slice(3);
      } else {
        return store.state.posts;
      }
    }
  },
  methods: {
    createPost() {
      this.$router.push('create-post');
    },
    fetchPosts() {
      const docClient = new AWS.DynamoDB.DocumentClient();

      const params = {
        TableName: "PersonalWebsitePosts",
        FilterExpression: "#pt = :p",
        ExpressionAttributeNames: {
          "#pt": "posttype"
        },
        ExpressionAttributeValues: {
          ":p" : "portfolio"
        }
      };
      return new Promise((resolve) => {
        docClient.scan(params, function(err, data) {
          if(err) {
            console.log(JSON.stringify(err));
            resolve({});
          } else {
            store.commit('setPosts', data.Items);
          }
        });
      })
    }
  },
  mounted: function () {
    this.fetchPosts();
  },
}
</script>
