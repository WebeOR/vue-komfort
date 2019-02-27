<template>
  <div class="main">

    <section class="product">
      <h1 class="md-display-2">Банные печи Везувий</h1>
      <p class="md-body-2">
        <!-- Котельная на твёрдом топливе может использоваться даже там, куда не подведены ни газопровод, ни линия электропередач, - твердотопливные котлы полностью автономны. Это преимущество твердотопливных отопительных котлов в сочетании с невысокой стоимостью котла, а также доступностью и дешевизной топлива, обусловливает их популярность в России -->
      </p>
    </section>

    <ul class="md-layout md-alignment-top-space-between">
      <Gikamini-Template
        v-for="line in lines"
        :key="line.id"
        :Line="line" />
      <div key="filler" class="filler md-layout-item"></div>
    </ul>

  </div>
</template>

<script>

import GikaminiTemplate from './GikaminiTemplate.vue';

export default {
  name: 'Gikamini',

  components: { GikaminiTemplate },

  data: () => ({
    lines: [
      {
        id: 'ball-valve-1-1',
        title: 'R252 Фитинг с шаровым краном',
        image: '/img/ball-valve/ball-valve-1-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-1-2',
        title: 'R950 Кран шаровой DADO© с вн./вн. резьбой, усиленный',
        image: '/img/ball-valve/ball-valve-1-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-1-3',
        title: 'R951 Кран шаровой DADO© с вн./вн. резьбой, усиленный',
        image: '/img/ball-valve/ball-valve-1-3.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-2-1',
        title: 'R910 Кран шаровой DADO© с вн./вн. резьбой',
        image: '/img/ball-valve/ball-valve-2-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-2-2',
        title: 'R911 Кран шаровой DADO© с вн./вн. резьбой',
        image: '/img/ball-valve/ball-valve-2-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-2-3',
        title: 'R910S Кран шаровой DADO© с вн./вн. резьбой и сливом',
        image: '/img/ball-valve/ball-valve-2-3.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-3-1',
        title: 'R914L Кран шаровой DADO© с вн./нар. резьбой',
        image: '/img/ball-valve/ball-valve-3-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-3-2',
        title: 'R914 Кран шаровой DADO© с вн./нар. резьбой',
        image: '/img/ball-valve/ball-valve-3-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-3-3',
        title: 'R850 Кран шаровой с вн./вн. резьбой',
        image: '/img/ball-valve/ball-valve-3-3.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-4-1',
        title: 'R285L Кран шаровой с рычажной ручкой',
        image: '/img/ball-valve/ball-valve-4-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-4-2',
        title: 'R851 Кран шаровой с вн./вн. резьбой',
        image: '/img/ball-valve/ball-valve-4-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-4-3',
        title: 'R913L Кран шаровой DADO© с нар./нар. резьбой',
        image: '/img/ball-valve/ball-valve-4-3.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-5-1',
        title: 'R854L Кран шаровой с вн./нар. резьбой',
        image: '/img/ball-valve/ball-valve-5-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-5-2',
        title: 'R854 Кран шаровой с вн./нар. резьбой',
        image: '/img/ball-valve/ball-valve-5-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,

        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-5-3',
        title: 'R285 Кран шаровой с ручкой-бабочкой',
        image: '/img/ball-valve/ball-valve-5-3.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-6-1',
        title: 'R913 Кран шаровой DADO© с нар./нар. резьбой',
        image: '/img/ball-valve/ball-valve-6-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-6-2',
        title: 'R919 Кран шаровой DADO© с отводом',
        image: '/img/ball-valve/ball-valve-6-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-6-3',
        title: 'R919S Кран шаровой DADO© с отводом и сливом',
        image: '/img/ball-valve/ball-valve-6-3.jpg',
        images: [],

        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-7-1',
        title: 'R287 Шаровой клапан с выводом для термометра',
        image: '/img/ball-valve/ball-valve-7-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-7-2',
        title: 'R287M Комплект кранов с термометрами',
        image: '/img/ball-valve/ball-valve-7-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-7-3',
        title: 'R851TH Кран шаровой с вн./вн. резьбой и удлин. ручкой',
        image: '/img/ball-valve/ball-valve-7-3.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-8-1',
        title: 'R851T Кран шаровой для зонда с вн./вн. резьбой',
        image: '/img/ball-valve/ball-valve-8-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-8-2',
        title: 'R859 Кран шаровой с отводом',
        image: '/img/ball-valve/ball-valve-8-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-8-3',
        title: 'R859T Кран шаровой для зонда с отводом',
        image: '/img/ball-valve/ball-valve-8-3.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-9-1',
        title: 'R859K Комплект из двух шаровых кранов R859 с красной и синей рукояткой-бабочкой',
        image: '/img/ball-valve/ball-valve-9-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-9-2',
        title: 'R789 Кран шаровой угловой с отводом',
        image: '/img/ball-valve/ball-valve-9-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-9-3',
        title: 'R781P Кран шаровой угловой для счетчиков',
        image: '/img/ball-valve/ball-valve-9-3.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-10-1',
        title: 'R781P-1 Кран шаровой угловой c вн. резьбой для котлов и счетчиков',
        image: '/img/ball-valve/ball-valve-10-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-10-2',
        title: 'R250D Кран шаровой с вн./вн. резьбой',
        image: '/img/ball-valve/ball-valve-10-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-10-3',
        title: 'R251D Кран шаровой с вн./вн. резьбой',
        image: '/img/ball-valve/ball-valve-10-3.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-11-1',
        title: 'R253DL Кран шаровой с нар./нар. резьбой',
        image: '/img/ball-valve/ball-valve-11-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-11-2',
        title: 'R253D Кран шаровой с нар./нар. резьбой',
        image: '/img/ball-valve/ball-valve-11-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-11-3',
        title: 'R254DL Кран шаровой с вн./нар. резьбой',
        image: '/img/ball-valve/ball-valve-11-3.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },


      {
        id: 'ball-valve-12-1',
        title: 'R254D Кран шаровой с вн./нар. резьбой',
        image: '/img/ball-valve/ball-valve-12-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-12-2',
        title: 'R602 Кран шаровой с вн./вн. резьбой',
        image: '/img/ball-valve/ball-valve-12-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-12-3',
        title: 'R780P-1 Кран шаровой угловой c нар. резьбой для котлов и счетчиков',
        image: '/img/ball-valve/ball-valve-12-3.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-13-1',
        title: 'R251TH Кран шаровой с вн./вн. резьбой и удлин. ручкой',
        image: '/img/ball-valve/ball-valve-13-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-13-2',
        title: 'R250DS Кран шаровой с вн./вн. резьбой и сливом',
        image: '/img/ball-valve/ball-valve-13-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-13-3',
        title: 'R251S Кран шаровой с вн./вн. резьбой и сливом',
        image: '/img/ball-valve/ball-valve-13-3.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-14-1',
        title: 'R251T Кран шаровой для зонда с вн./вн. резьбой',
        image: '/img/ball-valve/ball-valve-14-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-14-2',
        title: 'R259D Кран шаровой с отводом',
        image: '/img/ball-valve/ball-valve-14-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-14-3',
        title: 'R259DS Кран шаровой с отводом и сливом',
        image: '/img/ball-valve/ball-valve-14-3.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-15-1',
        title: 'R259DST Комплект кранов для коллекторов',
        image: '/img/ball-valve/ball-valve-15-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-15-2',
        title: 'R258D Кран шаровой под пайк',
        image: '/img/ball-valve/ball-valve-15-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-15-3',
        title: 'R258CC Кран шаровой с компрессионным соединением',
        image: '/img/ball-valve/ball-valve-15-3.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-16-1',
        title: 'R251P Кран шаровой с вн. резьбой для счетчиков',
        image: '/img/ball-valve/ball-valve-16-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-16-2',
        title: 'R254P Кран шаровой с нар. резьбой для счетчиков',
        image: '/img/ball-valve/ball-valve-16-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-16-3',
        title: 'R251P-1 Кран шаровой с вн. резьбой для котлов и счетчиков',
        image: '/img/ball-valve/ball-valve-16-3.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-17-1',
        title: 'R254P-1 Кран шаровой с нар. резьбой для котлов и счетчиков',
        image: '/img/ball-valve/ball-valve-17-1.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },

      {
        id: 'ball-valve-17-2',
        title: 'R752 Кран шаровой с вн. резьбой для счетчиков, регул. отвод',
        image: '/img/ball-valve/ball-valve-17-2.jpg',
        images: [],
        price: null,
        characteristics: null,
        docs: null,
        descriptions: null,
        table: {
          head: null,
          body: null,
        },
      },
    ],
  }),

  computed: {
    toolbar () {
      return this.lines.map( ({ id , title }) => {
        return {
          id,
          title: title.includes('Zota') ? title.slice(5) : title
        };
      });
    }
  },

  created () {
    this.$emit( 'set-toolbar' , this.toolbar );
  },
};

</script>

<style lang="scss">

.filler {
  max-width: 31%;
  flex: 0 1 31%;
}

</style>
