<template>
    <div class="post-page-layout">
        <br/>
        <img :src="post.image" class="post-image">
        <div class="post-content">
            <h2 class="post-title">{{post.header}}</h2>
            <p class="post-byline">{{post.byline}}</p>
            <p class="post-body">{{post.body}}</p>
            <h2 class="sub-head">Tools</h2>
            <ul class="dot-points">
                <li v-for="(point, index) in dotPoints" :key="index">{{point}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Post',
    computed: {
        post() {
            console.log(this.$store.state.currentPost)
            return this.$store.state.currentPost;
        },
        dotPoints() {
            if(this.post != null && this.post !== undefined) {
                return this.post.dotpoints.split(',');
            } else {
                return [];
            }
        }
    }
}
</script>