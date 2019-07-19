import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import MyTimesheet from '@/components/Timesheet/MyTimesheet'
import PrjTimesheet from '@/components/Timesheet/PrjTimesheet'
import TaskList from '@/components/Task/TaskList'
import PrjManagement from '@/components/Management/PrjManagement'
import Charts from '@/components/Others/Charts'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/Login'},
    {path: '/Timesheet', redirect: '/Timesheet/MyTimesheet'},
    {path: '/Task', redirect: '/Task/TaskList'},
    {path: '/Management', redirect: '/Management/PrjManagement'},
    {path: '/Others', redirect: '/Others/Charts'},
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'Login',
          name: 'Login',
          component: Login
        },
        {
          path: 'Timesheet/MyTimesheet',
          name: 'MyTimesheet',
          component: MyTimesheet
        },
        {
          path: 'Timesheet/ProjectTimesheet',
          name: 'PrjTimesheet',
          component: PrjTimesheet
        },
        {
          path: 'Task/TaskList',
          name: 'TaskList',
          component: TaskList
        },
        {
          path: 'Management/PrjManagement',
          name: 'PrjManagement',
          component: PrjManagement
        },
        {
          path: 'Others/Charts',
          name: 'Charts',
          component: Charts
        }
      ]
    },
    {path: '*', name: 'Error', component: Error}
  ]
})
