<template>
  <app-wrapper>

    <md-app-toolbar class="md-dense md-primary">
      <div class="md-toolbar-row">
        <md-button
          @click="menuVisible = !menuVisible"
          class="toolbar__menu-button md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>
        <div class="md-toolbar-section-start">
          <span class="md-title">Комфорт 124</span>
        </div>
        <div class="md-toolbar-section-end">
          <Cart-Button>Корзина</Cart-Button>
        </div>
      </div>

      <fade-transition>
        <div v-if="toolbar && toolbar.length" class="md-toolbar-row md-scrollbar">
          <md-tabs class="md-primary">
            <md-tab
              v-for="{ id , title } in toolbar"
              :key="id"
              :href="'#' + id"
              :md-label="title"
              md-sync-route
              :to="{}" />
          </md-tabs>
        </div>
      </fade-transition>
    </md-app-toolbar>

    <md-app-drawer
      :md-active.sync="menuVisible"
      class="md-scrollbar md-left"
      md-permanent="full">
      <md-toolbar
        class="md-transparent"
        md-elevation="1">
        <md-button :to="{ name: 'Home' }">Главная</md-button>
        <div class="md-toolbar-section-end toolbar__menu-button">
          <md-button
            @click="menuVisible = !menuVisible"
            class="md-icon-button md-dense">
            <md-icon>keyboard_arrow_left</md-icon>
          </md-button>
        </div>
      </md-toolbar>
      <App-Sidebar-List :categories="categories" />
    </md-app-drawer>

    <md-app-content class="flex-container">
      <fade-transition mode="out-in" appear>
        <router-view @set-toolbar="setToolbarMenu" />
      </fade-transition>

      <App-Footer />

      <Preview-Modal />
      <Cart-Modal />

    </md-app-content>
  </app-wrapper>
</template>

<script>

import { FadeTransition } from 'vue2-transitions';

import AppWrapper         from './components/layout/AppWrapper.vue';
import AppFooter          from './components/layout/AppFooter.vue';
import AppSidebarList     from './components/layout/AppSidebarList.vue';

import CartButton         from './components/CartButton.vue';

import PreviewModal       from './components/PreviewModal.vue';
import CartModal          from './components/cart';

export default {
  name: 'Komfort-App',

  components: {
    FadeTransition,

    AppWrapper,
    AppFooter,
    AppSidebarList,
    PreviewModal,
    CartModal,
    CartButton,
  },

  data: () => ({
    menuVisible: false,
    showSidepanel: false,
    toolbar: [],
    categories: [
      {
        title: 'Твёрдотопливные котлы',
        subCategories: [
          {
            name: 'Termokraft',
            text: 'Термокрафт'
          },
          {
            name: 'Belkomin',
            text: 'Belkomin'
          },
          {
            name: 'Zota',
            text: 'Zota'
          },
          {
            name: 'Kentatsu',
            text: 'Kentatsu'
          },
          {
            name: 'Buderus',
            text: 'Buderus'
          },
          {
            name: 'EnergyTT',
            text: 'Энергия-ТТ'
          },
          {
            name: 'NMK',
            text: 'НМК'
          },
        ]
      },
      {
        title: 'Электрические котлы',
        subCategories: [
          {
            name: 'ZotaElectrical',
            text: 'Zota'
          },
        ]
      },
      {
        title: 'Банные печи',
        subCategories: [
          {
            name: 'Ermak',
            text: 'Ермак'
          },
          {
            name: 'Kastor',
            text: 'Кастор'
          },
          {
            name: 'NmkStoves',
            text: 'НМК'
          },
          {
            name: 'VezuviyStoves',
            text: 'Везувий'
          },
        ]
      },
      {
        title: 'Дымоходы',
        subCategories: [
          {
            name: 'Chimneys',
            text: 'Дымок / Вулкан'
          },
        ]
      },
      {
        title: 'Краны',
        subCategories: [
          {
            name: 'Gikamini',
            text: 'Gikamini'
          },
        ]
      },
    ]
  }),

  watch: {
    '$route' ({ name }) {
      if ( name === 'Home' ) {
        this.toolbar = [];
      }
    }
  },

  methods: {
    setToolbarMenu (newMenu) {
      this.toolbar = newMenu;
      this.resetToolbarScroll('.md-toolbar-row.md-scrollbar');
    },

    resetToolbarScroll (selector) {
      const element = document.querySelector(selector);
      if (element) element.scroll({ left: 0, top: 0, behavior: 'smooth' });
    }
  },

  created () {
    this.$router.beforeEach((to, from, next) => {
      this.menuVisible = false;
      next();
    });
  }

};

</script>

<style lang="scss">

@import '~vue-material/dist/theme/engine';
@import './stylesheets/partials/_layout.scss';

@include md-register-theme('default', (
  primary: #34495e, // The primary color of your application
  accent: #e74c3c // The accent or secondary color
));

@import '~vue-material/dist/theme/all'; // Apply the theme

</style>

<style lang="scss" src="./stylesheets/main.scss"></style>
