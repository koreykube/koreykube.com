import Vue from 'vue'
import Vuex from 'vuex'
import {Auth} from 'aws-amplify'
import { CognitoUserPool } from 'amazon-cognito-identity-js'
import AWS from 'aws-sdk'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: null,
    user: null,
    currentPost: null,
  },  
  mutations: {
    setPosts (state, payload) {
      state.posts = payload;
    },
    setUser (state) {
      Auth.currentUserInfo().then((response) => {
        state.user = response;
      });
    },
    setCurrentPost (state, post) {
      state.currentPost = post;
    }
  },
  getters: {
    signedIn(state) {
      if(state.user !== null) {

        const poolData = {
          UserPoolId: "ap-southeast-2_IECJrfsBS",
          ClientId: "70tukoi6g0s2aqav09tlkv8f0j"
        };

        const userPool = new CognitoUserPool(poolData);
        const cognitoUser = userPool.getCurrentUser();

        if(cognitoUser !== null) {
          cognitoUser.getSession((err, result) => {
            if(result) {
              console.log("You are logged in");
              AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: 'ap-southeast-2:9a85229d-ec5e-4d19-85f2-88ddbff55c12',
                Logins: {
                  'cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_IECJrfsBS': result.getIdToken().getJwtToken()
                }
              })
              AWS.config.credentials.getPromise();
            }
          })
        }

        return state.user.attributes.phone_number_verified;
      } else {
        return false
      }
    }
  },
})
