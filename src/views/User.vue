<template>
    <div>
        <div class="sign-in-form">
            <h2 v-if="!loading">Sign in</h2>
            <rotate-square v-if="loading"></rotate-square>
            <input v-if="!loading" type="text" placeholder="User name" v-model="uname">
            <input v-if="!loading" type="password" placeholder="Password" v-model="pword">
            <button v-if="!loading" v-on:click="signIn">Submit</button>
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
                const user = await Auth.signIn(this.uname, this.pword);
                this.loading = false;
                console.log(user);
                this.$router.push('/');
            } catch (error) {
                this.loading = false;
                alert('error signing in: ', error);
            }
        }
    },
}
</script>

<style>

</style>