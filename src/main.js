import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {createClient} from 'contentful'
import {createClient as createManager} from 'contentful-management'

window.contentfulClient = createClient({
  accessToken: '64d6a750c7ae5a7c93603911e56166b198ce5ab94be05261848e8a280ba8972c',
  space: '7la5sjify8om'
});

window.manager = createManager({
  accessToken: 'CFPAT-bab824b2020625703187307def6023e2e39cef0be6875d23adc17582ab0ee734'
 });

contentfulClient.getEntries()
.then((response) => console.log(response.items))
.catch(console.error);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
