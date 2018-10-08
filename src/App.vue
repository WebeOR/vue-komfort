<template>
  <app-wrapper>

    <md-app-drawer :md-active.sync="menuVisible">
      <md-toolbar class="md-transparent" md-elevation="1">Navigation</md-toolbar>

      <md-list>
        <md-list-item
          v-for="{ name } in routes" :key="name"
          :to="{ name }">
          <span class="md-list-item-text">{{ name }}</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-toolbar class="md-dense md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button
            @click="menuVisible = !menuVisible"
            class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <span class="md-title">Комфорт 124</span>
        </div>

        <div class="md-toolbar-section-end">
          <md-button @click="showDialog = true" class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
      </div>

      <div class="md-toolbar-row md-scrollbar">
        <md-tabs
          class="md-primary">
          <md-tab
            v-for="{ id , title } in toolbar" :key="id"
            :href="'#' + id"
            :md-label="title"
            :to="{}" />
        </md-tabs>
      </div>
    </md-app-toolbar>

    <md-app-content>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Preferences</md-dialog-title>

      <md-tabs md-dynamic-height>
        <md-tab md-label="General">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
        </md-tab>

        <md-tab md-label="Activity">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
        </md-tab>

        <md-tab md-label="Account">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="showDialog = false">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
      <fade-transition mode="out-in" appear>
        <router-view @set-toolbar="setToolbarMenu" />
      </fade-transition>
    </md-app-content>

  </app-wrapper>
</template>

<script>

  import { FadeTransition } from 'vue2-transitions';

  import AppWrapper from './components/layout/AppWrapper.vue';

  export default {
    name: 'Komfort-App',
    components: {
      AppWrapper,
      FadeTransition
    },
    data: () => ({
      menuVisible: false,
      showDialog: false,
      toolbar: {},
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
    methods: {
      setToolbarMenu (newMenu) {
        this.toolbar = newMenu;
      }
    }
  };

</script>

<style lang="scss">

  @import '~vue-material/dist/theme/engine';

  @include md-register-theme('default', (
    primary: #34495e, // The primary color of your application
    accent: #e74c3c // The accent or secondary color
  ));

  @import '~vue-material/dist/theme/all'; // Apply the theme

  .md-app {
    max-height: 100vh
  }
  .md-app-content {
    padding: 16px 24px !important;
  }
  .md-app-container {
    scroll-behavior: smooth;
  }
  .md-app.md-fixed-last .md-app-toolbar,
  .md-app.md-flexible .md-app-toolbar,
  .md-app.md-overlap .md-app-toolbar,
  .md-app.md-reveal .md-app-toolbar {
    position: fixed !important;
    z-index: 90;
  }

  .md-list-item {
    .md-button,
    .md-button-clean {
      white-space: unset;
    }
  }

  .md-toolbar-row.md-scrollbar {
    overflow-x: auto
  }
  .md-table-cell {
    text-align: center;
  }
  .md-table-head-label {
    width: 100%;
    padding-left: 0 !important;
    padding-right: 0 !important;
    text-align: center;
  }

  ul, ol {
    &.md-layout {
      padding: 0;
    }
  }

  .product > .md-card {
    margin: 24px 0 !important;
  }

  .product-table {
    margin: 25px auto;
    border-collapse: collapse;
    table-layout: fixed;
    text-align: center;
    .md-table-head {
      font-size: 14px;
    }
    .md-table-cell {
      font-size: 15px;
    }
  }

</style>
