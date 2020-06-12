<template>
    <div>
        <br/>
        <div class="sign-in-form" v-if="!   this.$store.getters.signedIn">
            <h2 v-if="!loading">Sign in</h2>
            <h2 v-if="loading">Logging in...</h2>
            <rotate-square v-if="loading"></rotate-square>
            <input v-if="!loading" type="text" placeholder="User name" v-model="uname">
            <input v-if="!loading" type="password" placeholder="Password" v-model="pword">
            <button v-if="!loading" v-on:click="signIn">Submit</button>
        </div>
        <div v-else class="sign-in-form out">
            <h2 v-if="!loading">You are logged in as {{this.$store.state.user.username}}. Click below to sign out</h2>
            <h2 v-if="loading">Signing out...</h2>
            <rotate-square v-if="loading"></rotate-square>
            <button v-if="!loading" v-on:click="signOut">Sign out</button>
        </div>
    </div>
</template>

<script>

import { Auth } from 'aws-amplify';
import { RotateSquare } from 'vue-loading-spinner';

export default {
    name: "User",
    data: function() {
        return {
             uname: '',
             pword: '',
             loading: false
        }
    },
    components: {
        RotateSquare
    },
    methods: {
        async signIn() {
            this.loading = true;
            try {
                await Auth.signIn(this.uname, this.pword);
                this.$store.commit("setUser")
                this.loading = false;
                this.$router.push('/');
            } catch (error) {
                this.loading = false;
                alert('error signing in: ', error);
            }
        },
        async signOut() {
            this.loading = true;
            try {
                await Auth.signOut();
                this.loading = false;
                console.log("Signed out");
                this.$router.go(0);
            } catch (error) {
                this.loading = false;
                alert('error signing out: ', error);
            }
        }
    },
}
</script>

<style>

</style>