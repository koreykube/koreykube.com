<template>
    <div class="main">
        <h3>Here are some examples of previous projects</h3>
        <br/>
        <p>Where GitHub links are not available, <router-link to="/contact"> get in touch</router-link>. I'd be more than happy to have a chat with previous clients to see if I can get you access to portions of my work.</p>
        <br/>
        <div class="portfolio-items-holder">
            <div v-for="(item, index) in posts" :key="index" class="portfolio-item-tile" v-on:click="goToPost(item)">
                <img :src="item.image" class="pi-image">
                <div class="text-in-image">
                    <h2 class="pi-header">{{item.header}}</h2>
                    <p class="pi-byline">{{item.byline}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../store';
import AWS from 'aws-sdk';

export default {
    name: "Portfolio",

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
    },
    goToPost(post) {
      this.$store.commit('setCurrentPost', post);
      this.$router.push({name: 'Post', params: {header: post.header}});
    }
  },
  mounted: function () {
    this.fetchPosts();
  },
}
</script>