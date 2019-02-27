import Home from '../views/home/';

/* @AlexQuidditch
   асинхронные роуты https://router.vuejs.org/ru/guide/advanced/lazy-loading.html
   один чанк на каждый логический раздел
*/

const About = () => import( /* webpackChunkName: "about" */ '../views/About.vue');

const Buderus = () => import( /* webpackChunkName: "buderus" */ '../views/buderus');
const Chimneys = () => import( /* webpackChunkName: "chimneys" */ '../views/chimneys');
const EnergyTT = () => import( /* webpackChunkName: "energy-tt" */ '../views/energy-tt');
const Ermak = () => import( /* webpackChunkName: "ermak" */ '../views/ermak');
const Kastor = () => import( /* webpackChunkName: "kastor" */ '../views/kastor');
const Kentatsu = () => import( /* webpackChunkName: "kentatsu" */ '../views/kentatsu');
const NMK = () => import( /* webpackChunkName: "nmk" */ '../views/nmk');
const NmkStoves = () => import( /* webpackChunkName: "nmk-stoves" */ '../views/nmk-stoves');
const VezuviyStoves = () => import( /* webpackChunkName: "vezuviy-stoves" */ '../views/stoves/vezuviy');
const Termokraft = () => import( /* webpackChunkName: "termokraft" */ '../views/termokraft');
const Zota = () => import( /* webpackChunkName: "zota" */ '../views/zota');
const ZotaElectrical = () => import( /* webpackChunkName: "zota-electrical" */ '../views/zota-electrical');
const Belkomin = () => import( /* webpackChunkName: "belkomin" */ '../views/belkomin');
const Gikamini = () => import( /* webpackChunkName: "gikamini" */ '../views/gikamini');

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/buderus',
    name: 'Buderus',
    component: Buderus
  },
  {
    path: '/chimneys',
    name: 'Chimneys',
    component: Chimneys
  },
  {
    path: '/energy-tt',
    name: 'EnergyTT',
    component: EnergyTT
  },
  {
    path: '/ermak',
    name: 'Ermak',
    component: Ermak
  },
  {
    path: '/kastor',
    name: 'Kastor',
    component: Kastor
  },
  {
    path: '/kentatsu',
    name: 'Kentatsu',
    component: Kentatsu
  },
  {
    path: '/nmk',
    name: 'NMK',
    component: NMK
  },
  {
    path: '/nmk/stoves',
    name: 'NmkStoves',
    component: NmkStoves
  },
  {
    path: '/vezuviy',
    name: 'VezuviyStoves',
    component: VezuviyStoves
  },
  {
    path: '/termokraft',
    name: 'Termokraft',
    component: Termokraft
  },
  {
    path: '/zota',
    name: 'Zota',
    component: Zota
  },
  {
    path: '/zota/electrical',
    name: 'ZotaElectrical',
    component: ZotaElectrical
  },
  {
    path: '/belkomin',
    name: 'Belkomin',
    component: Belkomin
  },
  {
    path: '/gikamini',
    name: 'Gikamini',
    component: Gikamini
  },
];
