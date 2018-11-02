<template>
  <fade-transition appear>
    <div
      v-bind="$attrs"
      v-on="$listeners"
      id="wrapper"
      class="wrapper page-container">
      <md-app
        md-mode="fixed">
        <slot></slot>
      </md-app>
    </div>
  </fade-transition>
</template>

<script>

  import { FadeTransition } from 'vue2-transitions';

  export default {
    name: 'App-Wrapper',
    components: { FadeTransition }
  };

</script>

<style lang="scss">

  body {
    background-image: url('/img/body_bg.png');
    background-position: center center;
  }

  .wrapper {
    max-width: 1360px;
    margin: 0 auto;
  }

</style>
