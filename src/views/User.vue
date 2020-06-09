<template>
    <div>
        <amplify-authenticator>
            <div class="sign-in-form">
            <p>You're currently signed in to edit the page. Click below to sign out.</p>
            <amplify-sign-out style="color: red"></amplify-sign-out>
            </div>
        </amplify-authenticator>
    </div>
</template>

<script>

export default {
    name: "User",
    data: function() {
        return {
        }  
    },
}
</script>

<style>

</style>