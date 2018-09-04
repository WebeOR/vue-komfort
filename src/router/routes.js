import Home from '../views/Home.vue';

/* @AlexQuidditch
   асинхронные роуты https://router.vuejs.org/ru/guide/advanced/lazy-loading.html
   один чанк на каждый логический раздел
*/

const About = () => import( /* webpackChunkName: "about" */ '../views/About.vue');

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
];