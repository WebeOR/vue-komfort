<template>
  <v-lazy-image
    v-if="src && src.length"
    :src="src"
    :alt="alt"
    @click.native="showPreview(alt, src)"
    v-on="$listeners"
    v-bind="$attrs"
    class="md-layout-item md-image"
    style="object-fit:contain;min-height:250px"
    />
    <!-- src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg" -->
</template>

<script>
import VLazyImage from 'v-lazy-image';

export default {
  name: 'Preview',
  components: { VLazyImage },

  props: {
    src: {
      default: null,
      required: true,
    },
    alt: {
      default: null,
      required: true,
    },
    noPreview: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    showPreview (title, picture) {
      if (!this.noPreview) {
        this.$bus.emit('show-preview', { title, picture });
      }
    }
  },
};

</script>

<style>

.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}

</style>
