import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDmq82IVCjIdimr6lQLuM_cc1CNxKPzZ2k",
  authDomain: "vue-todo-19652.firebaseapp.com",
  databaseURL: "https://vue-todo-19652.firebaseio.com",
  projectId: "vue-todo-19652",
  storageBucket: "vue-todo-19652.appspot.com",
  messagingSenderId: "474486675187",
  appId: "1:474486675187:web:4b9e8048ae0eb6f3e64986",
  measurementId: "G-WRRV3RFMY9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
