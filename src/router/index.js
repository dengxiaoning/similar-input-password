import Vue from 'vue'
import Router from 'vue-router'
import SimilarTypePwd from '@/components/similarTypePwdInput/test.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: SimilarTypePwd
  }]
})
