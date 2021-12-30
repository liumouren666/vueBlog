import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout = () => import('../components/layout/index.vue')
const Personal = () => import('../components/content/personal.vue')
const Mybook = () => import('../components/content/mybook.vue')
Vue.use(VueRouter)
const routes = [
  {
    path: '/', component: Layout,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'personal',
        component: Personal
      }, {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'mybook',
        component: Mybook
      },
    ]
  }


]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router
