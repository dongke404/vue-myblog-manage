// import Vue from 'vue'
// import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/publish'
  },
  {
    path: '/',
    name: 'index',
    component: () => import('../components/layout/index.vue'),
    children: [
      {
        path: '/publish',
        name: 'Publish',
        component: () => import('../views/publish/index.vue'),
        meta: { title: '发表文章' },
      },
      {
        path: '/addtalk',
        name: 'AddTalk',
        component: () => import('../views/addtalk/index.vue'),
        meta: { title: '随便说点什么吧' },
      },
      {
        path: '/addtags',
        name: 'AddTags',
        component: () => import('../views/addtags/index.vue'),
        meta: { title: '添加标签' },
      },
      {
        path: '/addalbum',
        name: 'AddAlbum',
        component: () => import('../views/addalbum/index.vue'),
        meta: { title: '添加图集' },
      },
      {
        path: '/addphotos',
        name: 'AddPhotos',
        component: () => import('../views/addphotos/index.vue'),
        meta: { title: '添加图片' },
      },
      {
        path: '/addfile',
        name: 'Addfile',
        component: () => import('../views/addfile/index.vue'),
        meta: { title: '添加文件' },
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component:() => import('../views/login/Login.vue'),
  },

  {
    path: '*',
    name: 'Error',
    component:() => import( '../views/error/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
