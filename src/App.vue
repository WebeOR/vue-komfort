<template>
  <fade-transition appear>
    <div id="wrapper" class="wrapper">
      <div id="nav">
        <ul>
          <li v-for="({ name }) in routes" :key="name.id">
            <router-link :to="{ name }">{{ name }}</router-link>
          </li>
        </ul>
      </div>
      <fade-transition mode="out-in" appear>
        <router-view />
      </fade-transition>
    </div>
  </fade-transition>
</template>

<script>

  import { FadeTransition } from 'vue2-transitions';

  export default {
    name: 'Komfort-App',
    components: { FadeTransition },
    data: () => ({
      routes: [
        { name: 'Buderus' },
        { name: 'Chimneys' },
        { name: 'EnergyTT' },
        { name: 'Ermak' },
        { name: 'Kastor' },
        { name: 'Kentatsu' },
        { name: 'NMK' },
        { name: 'NmkStoves' },
        { name: 'Termokraft' },
        { name: 'Zota' },
        { name: 'ZotaElectrical' }
      ]
    }),
  };

</script>

<style lang="scss">

  // @AlexQuidditch
  // сюда впихнуть всё, что в base.css
  // по файлам распихать то, что к ним относится

  @import './stylesheets/base.scss';

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
