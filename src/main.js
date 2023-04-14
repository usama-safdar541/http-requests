import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import { request } from 'stream-http';
Vue.use(VueResource);
//globally set the database URL
Vue.http.options.root = 'https://http-practice-27bf9-default-rtdb.firebaseio.com/';
Vue.http.interceptors.push ((request, next)=>{
  console.log(request); 
  if(request.method=='POST'){
    request.method = 'PUT';
  }
  //changing resonse using  interceptors
  next(response=>{
    response.json = ()=>{
      return ({messages : response.body})
    }
  });
})
//it tells vue to add plugins
// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
