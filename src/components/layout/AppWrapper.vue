<template>
  <fade-transition appear>
    <div
      v-bind="$attrs"
      v-on="$listeners"
      id="wrapper"
      class="wrapper page-container">
      <md-app md-waterfall md-mode="fixed-last">
        <slot></slot>
      </md-app>
    </div>
  </fade-transition>
</template>

<script>

  import { FadeTransition } from 'vue2-transitions';

  export default {
    name: 'app-wrapper',
    components: { FadeTransition }
  };

</script>

<style lang="scss">

  body {
    background-image: url('/img/body_bg.png');
    background-position: center center;
  }

  .wrapper {
    max-width: 1280px;
    margin: 0 auto;
  }

</style>
