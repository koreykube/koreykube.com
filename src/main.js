import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as AwsUi from '@aws-amplify/ui-vue'
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'
import AWS from 'aws-sdk'
import Unicon from 'vue-unicons'
import { uniGithubAlt, uniLinkedinAlt, uniTimes, uniBars, uniSignInAlt } from 'vue-unicons/src/icons'

Unicon.add([uniGithubAlt, uniLinkedinAlt, uniTimes, uniBars, uniSignInAlt]);

Amplify.configure(aws_exports);

AWS.config.region = 'ap-southeast-2';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-southeast-2:c69bc184-d7bc-4007-8346-62b7f26ca00e',
});

Vue.config.productionTip = false;
Vue.use(AwsUi);
Vue.use(Unicon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
