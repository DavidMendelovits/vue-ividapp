import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore';
import { Config } from './firebaseconfig';
Vue.config.productionTip = false


Vue.use(firestorePlugin);
firebase.initializeApp(Config);
export const db = firebase.firestore();

new Vue({
  render: h => h(App),
}).$mount('#app')
