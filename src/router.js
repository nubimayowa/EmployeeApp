import Vue from "vue";
import Router from 'vue-router';


import MainApp from './views/MainApp.vue';
import Home from './views/Home.vue';
import user from "./views/user.vue";
import NotFound from "./views/NotFound.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import employeelist from "./views/employeelist.vue";
import addposdept from "./views/addposdept.vue";
import Editemployee from "./views/Editemployee.vue";
import viewemployee from "./views/viewemployee.vue";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'Login',

      component: Login
    },
     {
       path: '/login',
      name: 'Login',
       component: Login,
      
     },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '*',

      component: NotFound
    },

    {
      path: '/app',
      name: 'MainApp',
      component: MainApp,

      children: [
        {
          path: '/app',
          name: 'Home',
          component: Home
        },
   
        {
          path: '/app/user',
          name: 'user',
          component: user
        },
     
        
        {
          path: '/app/employeelist',
          name: 'employeelist',
          component: employeelist,
        },
        {
          path: '/app/addposdept',
          name: 'addposdept',
          component: addposdept
        },
        {

          path: '/app/editemployee',
          name: 'Editemployee',
          component: Editemployee,

        },

        {
          path: '/app/:employee_id',
          name: 'viewemployee',
          component: viewemployee
        }
      ],
    },
  ],
});
export default router;
