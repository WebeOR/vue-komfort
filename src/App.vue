<template>
  <fade-transition appear>
    <div id="wrapper">
      <div id="nav">
        <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>
      </div>
      <fade-transition mode="out-in" appear>
        <router-view />
      </fade-transition>
    </div>
  </fade-transition>
</template>

<script>

import { FadeTransition } from 'vue2-transitions';
import index from './buderus';
import index from './chimneys';
import index from './energy-tt';  
import index from './ermak';
import index from './index';
import index from './kastor';
import index from './kentatsu';
import index from './nmk';
import index from './nmk-stoves';
import index from './stoves';
import index from './stoves';
import index from './zota';
import index from './zota-electrical';    

export default {
  components: { FadeTransition }
}

</script>


<style lang="scss">

  #wrapper {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

</style>
