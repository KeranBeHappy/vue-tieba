import Vue from 'vue'
import Router from 'vue-router'
/*import Hello from '@/components/Hello'*/
/*引入首页*/
import Home from '@/page/Home'
// 引入新闻页
import News from '@/page/News'
// 引入发现页
import Discovery from '@/page/Discovery'
// 引入我的页
import Mine from '@/page/Mine'
// 引入用户信息页
import UserInfo from '@/page/UserInfo'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    /*{
      path: '/',
      name: 'Hello',
      component: Hello
    }*/
    {
      path: '/',
      component: Home
    },
    {
      path:'/News',
      component:News
    },
    {
      path:'/Discovery',
      component:Discovery
    },
    {
      path:'/Mine',
      component:Mine
    },
    {
      path:'/UserInfo',
      component:UserInfo
    }
  ]
})
