import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes:[
      {
        path: '/',
        name:'home',
        component: () => import('../views/home.vue')
      },
      {
        path:'/login',
        name:'login',
        component: () => import('../components/login/loginComponent.vue')
      },
      {
        path:'/dashboard',
        name:'index',
        component : () => import('../components/dasboard/index.vue')
      },
      {
        path:'/register',
        name:'register',
        component: () => import('../components/dasboard/registro.vue')
      },
      {
        path:'/course',
        name:'course',
        component : () => import('../components/dasboard/course.vue')
      },
      {
        path: '/gradeS',
        name: 'grades',
        component: () => import('../components/dasboard/gradeS.vue')
      },
      {
        path: '/calification',
        name: 'calification',
        component: () => import('../components/dasboard/calification.vue')
      },
      {
        path: '/asignateC',
        name: 'asignateC',
        component: () => import('../components/dasboard/asignateC.vue')
      },
      {
        path: '/asignateN',
        name: 'asignateN',
        component: () => import('../components/dasboard/asignateN.vue')
      },
      {
        path: '/asignateA',
        name: 'asignateA',
        component: () => import('../components/dasboard/asignateA.vue')
      },
      {
        path: '/asignateM',
        name: 'asignateM',
        component: () => import('../components/dasboard/asignateM.vue')
      },
      {
        path: '/reportN',
        name: 'reportN',
        component: () => import('../components/dasboard/reportN.vue')
      },
      {
        path: '/reportM',
        name: 'reportM',
        component: () => import('../components/dasboard/reportM.vue')
      }
    ],
    mode:'history'
})