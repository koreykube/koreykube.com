import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    credentials: {},
    user: null
  },  
  mutations: {
    setCredentials (state, payload) { state.credentials = payload; console.log("Credentials received")},
    user(state, user){ state.user = user },
  },
  getters: {
    status: state => state.credentials.length !== 0,
    signedIn: state => state.user.attributes.email_verified,
    currentUser: state => {
      if(state.user) { 
        state.user.username
      } else {
        return null
      }
    }
  },
})
