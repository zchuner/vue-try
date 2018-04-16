// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import App from './App'
import hellow from './components/hellow'
import list from './components/list'
import foo from './components/foo'

// Vue.config.productionTip = false

const routes=[
	{path:'/', component:App},
	{path:'/list',component:list},
	{path:'/hellow',component:hellow},
	{path:'/foo',component:foo}
]
const router = new VueRouter({
	history:true,
	routes
})


/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: '<App/>'
})
