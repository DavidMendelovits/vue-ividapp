import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore';
import { Config } from './firebaseconfig';
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false


Vue.use(firestorePlugin);
firebase.initializeApp(Config);
export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
