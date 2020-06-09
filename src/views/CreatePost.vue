<template>
    <div style="main">
        <h2>Create a new post</h2>
        <div class="post-form">
            <input type="text" required placeholder="Post Title" v-model="postTitle">
            <input type="text" required placeholder="Post Byline" v-model="postByline">
            <textarea rows="12" required placeholder="Post Body" v-model="postBody"></textarea>
            <select class="custom-select" name="post-type" required v-model="postType">
                <option value="" disabled selected>Post Type</option>
                <option value="portfolio">Portfolio</option>
                <option value="blog">Blog</option>
            </select>
            <input type="file" accept="image/" required v-on:change="imageChange($event)" class="custom-file-input">
        </div>
        <button v-on:click="submitPost">Submit Post</button>
    </div>
</template>

<script>

import AWS from 'aws-sdk';

export default {
    name: "CreatePost",
    data: function() {
        return {
            postTitle: '',
            postByline: '',
            postBody: '',
            postImage: null,
            postType: '',
        }
    },
    methods: {
        submitPost() {            
            let currentTime = new Date()
            const imageKey = this.postImage.name + currentTime.toString();

            const upload = new AWS.S3.ManagedUpload({
                params: {
                    Bucket: "koreykubepersonalwebsitebucket",
                    Key: imageKey,
                    Body: this.postImage,
                }
            })

            var promise = upload.promise();

            promise
                .then((data) => {
                    this.dynamoDBUpload(data.Location);
                });
        },
        dynamoDBUpload(imageUrl) {
            const currentTime = new Date();

            const docClient = new AWS.DynamoDB.DocumentClient({
                apiVersion: "2012-08-10"
            });

            const params = {
                TableName: "PersonalWebsitePosts",
                Item: {
                    postid: currentTime.toString(),
                    body: this.postBody,
                    byline: this.postByline,
                    header: this.postTitle,
                    posttype: this.postType,
                    image: imageUrl
                }
            }

            docClient.put(params, function(err) {
                if(err) {
                    console.log("Error adding item", JSON.stringify(err, null, 2));
                }
            });
        },
        imageChange(e) {
            this.postImage = e.target.files[0];
        }
    },
}
</script>

<style>

</style>