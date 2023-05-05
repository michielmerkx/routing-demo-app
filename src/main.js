import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

import NotFound from './components/nav/NotFound.vue'
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      // component: TeamsList,
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true } // /teams/t1
      ]
    },
    // { path: '/users', component: UsersList },
    { 
      path: '/users', 
      components: {
        default: UsersList, 
        footer: UsersFooter
      },
      beforeEnter() {
        // possible navigation guard logic can go here
      } 
    },    
    // Before turning into a child:
    // { path: '/teams/:teamId', component: TeamMembers, props: true },
    // Always keep at the bottom:
    { path: '/:notFound(.*)', component: NotFound},
  ],
  // Optional override:
  // linkActiveClass: 'active'
  // scrollBehavior(to, from, savedPosition) {
  scrollBehavior(_, _2, savedPosition) {    
    // console.log(to, from, savedPosition)
    if (savedPosition) return savedPosition;
    return {left: 0, top: 0} // scroll to top of page
  }
});
// Global beforeEach:
// router.beforeEach(function(to, from, next){
//   console.log('global beforeEach')
//   console.log(to,from)
    // This would cancel the navigation:
    // next(false)
    // Causes infinite redirect in current setup:
    // next('/users')
    // A check can prevent infinite redirect:
    // if (to.name === 'team-members') {
    //   next();
    // } else {
    //   next({name: 'team-members', params: {teamId: 't2'}})
    // }
//   next();
// })
  // Only runs when navigation has already been confirmed:
// router.afterEach(function(to,from){
//   console.log(to,from)  
// });

const app = createApp(App);

app.use(router);
app.mount('#app');
