<template>
    <div class="main">
        <h3>Here are some examples of previous projects</h3>
        <br/>
        <p>Where GitHub links are not available, <router-link to="/contact"> get in touch</router-link>. I'd be more than happy to have a chat with previous clients to see if I can get you access to portions of my work.</p>
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
    </div>
</template>

<script>
import store from '../store';

export default {
    name: "Portfolio",

    computed: {
        posts() {
        return store.state.posts;
        }
    },
}
</script>