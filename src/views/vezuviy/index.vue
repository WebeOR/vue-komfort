<template>
  <div class="main">

    <section class="product">
      <h1 class="md-display-2">Твёрдотопливные котлы Belkomin</h1>
      <p class="md-body-2">
        Котельная на твёрдом топливе может использоваться даже там, куда не подведены ни газопровод, ни линия электропередач, - твердотопливные котлы полностью автономны. Это преимущество твердотопливных отопительных котлов в сочетании с невысокой стоимостью котла, а также доступностью и дешевизной топлива, обусловливает их популярность в России
      </p>
    </section>

    <Belkomin-Template
      v-for="line in lines"
      :key="line.id"
      :Line="line" />

  </div>
</template>

<script>

  import BelkominTemplate from './BelkominTemplate.vue';

  export default {
    name: 'Belkomin',
    components: { BelkominTemplate },
    data: () => ({
      lines: [

        {
          id: '',
          title: '',
          image: null,
          images: [
            '',
          ],
          price: null,
          characteristics: [
            ''
          ],
          docs: [
            ''
          ],
          descriptions: [
            ''
          ],
          table: null
        },

      ]
    }),
    computed: {
      toolbar () {
        return this.lines.map( ({ id , title }) => ({ id , title }) );
      }
    },
    created () {
      this.$emit( 'set-toolbar' , this.toolbar );
    }
  };

</script>
