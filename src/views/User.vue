<template>
    <div>
        <amplify-authenticator>
            <div class="sign-in-form">
            <h2> WELCOME {{String(this.$store.getters.currentUser).toUpperCase()}}</h2>
            <p>You're currently signed in to edit the page. Click below to sign out.</p>
            <amplify-sign-out style="color: red"></amplify-sign-out>
            </div>
        </amplify-authenticator>
    </div>
</template>

<script>
import {Auth} from 'aws-amplify';
//import store from '../store';

export default {
    name: "User",
    data: function() {
        return {
        }  
    },
    asyncComputed: {
        async loggedIn() {
            let promise = Auth.currentAuthenticatedUser();
            let result = await promise;
            if(result !== null) {
                this.$store.commit("user", result);
                return true;
            } else {
                return false;
            }
        }
    },
    created() {
        Auth.configure({
            Auth: {
                identityPoolId: "ap-southeast-2:c69bc184-d7bc-4007-8346-62b7f26ca00e",
                identityPoolRegion: "ap-southeast-2",
                userPoolId: "ap-southeast-2_0az65PjQI",
                region: "ap-southeast-2",
                userPoolWebClientId: "fkiriq809qe7maiunlrm6fg9v"
            }
        })
    }
}
</script>

<style>

</style>