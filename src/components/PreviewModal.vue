<template>
  <md-dialog
    :md-active.sync="preview.show"
    class="preview-modal">
    <header
      class="md-layout md-layout-nowrap md-alignment-center-space-between preview-modal__header">
      <md-dialog-title>{{ preview.title }}</md-dialog-title>
      <md-button @click="preview.show = false">Закрыть</md-button>
    </header>
    <Previewer
      :src="preview.img"
      :alt="preview.title"
      no-preview
      style="margin:0 20px 20px;min-height:500px"
      />
  </md-dialog>
</template>

<script>

import Previewer from './Preview.vue';

export default {
  name: 'Preview-Modal',
  components: {
    Previewer,
  },

  data: () => ({
    preview: {
      show: false,
      img: '',
      title: '',
    },
  }),

  methods: {
    /**
     * Показать превью
     * @param {object} - данные превью
     */
    showPreview ({ title , picture }) {
      this.preview.show = true;
      this.preview.title = title;
      this.preview.img = picture;
    },
  },

  created () {
    this.$bus.on('show-preview', this.showPreview);
  }
};

</script>

<style lang="scss">

.preview-modal {
  &__header {
    flex-wrap: nowrap !important;
  }
  .md-dialog-title {
    padding-right: 0;
  }
}

</style>
