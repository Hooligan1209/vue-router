/**
 * 路由器模块
 */
import Vue from 'vue';

import Router from 'vue-router'

//引入组件
import about from '../components/about.vue'
import home from '../components/home.vue'
import news from '../components/news.vue'
import messages from '../components/messages.vue'
import messageDetail from '../components/messageDetail.vue'

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',// 指定选中按钮的class
  mode: 'history', // 隐藏路径中的 # 号
  routes: [// 所有路由的数组
    {path: '/about' , component: about},
    {
      path: '/home' ,
      component: home,
      children: [// 嵌套路由
        {path: 'news' , component: news},
        {
          path: 'messages',
          component: messages,
          children: [
            {path: 'detail/:id' , component: messageDetail}
          ]
        }
      ]
    },
    {path: '/' , redirect: '/about'}
  ]
})
