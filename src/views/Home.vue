<template>
  <div class="main">
    <h3>Freelance software and web developer based in Melbourne.</h3>
    <div class="text-body">
      <p>Hi there! I'm Korey.</p> 
      <p>I fell in to coding making a small match-3 game for my Bejewelled-obsessed partner to announce our wedding.</p> 
      <p>Since then I've been growing as a developer with a focus on front-end development for Vue based web applications as well as AWS S3 and Serverless for back end.</p> 
      <p>I still make small games for friends, family and loved ones on special occasions and even you if you ask nicely.</p>
    </div>
    <div class="portfolio-items-holder">
      <div v-for="(item, index) in posts" :key="index" class="portfolio-item-tile">
        <img :src="item.image" class="pi-image">
        <h2 class="pi-header">{{item.header}}</h2>
        <p class="pi-byline">{{item.byline}}<p>
        <p class="pi-body">{{item.body}}</p>
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
      return store.state.posts;
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
