<template>
  <md-list>
    <template
      v-for="category in categories">
      <md-subheader :key="`sub-${ category.title }`">{{ category.title }}</md-subheader>
      <md-list-item
        v-for="{ name , text } in category.subCategories"
        :key="`${ category.title } ${ name }`"
        :to="{ name }">
        <span class="md-list-item-text">{{ text }}</span>
      </md-list-item>
      <md-divider :key="`divider-${ category.title }`" />
    </template>
  </md-list>
</template>

<script>

export default {
  name: 'App-Sidebar',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
};

</script>

<style lang="scss">

  .md-list-item-router._exact-active {
    box-shadow: inset 3px 0 0 rgba(#34495e, .75)
  }

</style>

