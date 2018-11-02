<template>
  <div class="main">

    <section class="product">
      <h1 class="md-display-2">Банные печи Kastor</h1>
    </section>

    <Kastor-Template
      v-for="line in lines"
      :key="line.id"
      :Line="line" />

  </div>
</template>

<script>

  import KastorTemplate from './KastorTemplate.vue';

  export default {
    name: 'Kastor',
    components: { KastorTemplate },
    data: () => ({
      lines: [

        {
          id: 'k12',
          title: 'Кастор 12',
          description: null,
          table: '<colgroup> <col width="110"> <col width="121"> <col width="109"> <col width="130"> <col width="93"> </colgroup> <tbody> <tr height="59"> <td>Модель</td> <td>Объём парилки, м³</td> <td>Габариты, см</td> <td>Ёмкость каменки, кг</td> <td>Диаметр дымохода, мм</td> </tr> <tr height="20"> <td>KL-12 V</td> <td>5-9</td> <td>58*66*50</td> <td>40</td> <td>104</td> </tr> <tr height="20"> <td>KL-12</td> <td>5-10</td> <td>41*66*50</td> <td>40</td> <td>104</td> </tr> <tr height="20"> <td>KS-12</td> <td>5-12</td> <td>42*66*51</td> <td>40</td> <td>104</td> </tr> <tr height="20"> <td>Karhu 12 JK</td> <td>5-12</td> <td>41*66*48</td> <td>40</td> <td>104</td> </tr> </tbody>',
          products: [
            {
              name: '12 JK',
              image: '/img/kastor/12_jk.jpg',
              instruction: null,
              price: null
            },
            {
              name: 'KL 12',
              image: '/img/kastor/12_kl.jpg',
              instruction: null,
              price: null
            },
            {
              name: 'KL12 V',
              image: '/img/kastor/12_klv.jpg',
              instruction: null,
              price: null
            },
          ]
        },

        {
          id: 'k16',
          title: 'Кастор 16',
          description: '',
          table: '<colgroup> <col width="110"> <col width="121"> <col width="109"> <col width="130"> <col width="93"> </colgroup> <tbody> <tr height="59"> <td>Модель</td> <td>Объём парилки, м³</td> <td>Габариты, см</td> <td>Ёмкость каменки, кг</td> <td>Диаметр дымохода, мм</td> </tr> <tr height="20"> <td>9-16</td> <td>KL-16</td> <td>43,5*71*49</td> <td>40</td> <td>104</td> </tr> <tr height="20"> <td>Karhu 16 JK</td> <td>9-16</td> <td>43,5*70*49</td> <td>40</td> <td>104</td> </tr> <tr height="20"> <td>ATTO 16</td> <td>6-16</td> <td>40*75*50</td> <td>50</td> <td>119</td> </tr> <tr height="20"> <td>KL-16 JKVPL</td> <td>9-19</td> <td>43,5*71*49</td> <td>40</td> <td>104</td> </tr> </tbody>',
          products: [
            {
              name: 'KL-16',
              image: '/img/kastor/16_kl.jpg',
              instruction: null,
              price: null
            },
            {
              name: 'KL 16 JK',
              image: '/img/kastor/16_jk.jpg',
              instruction: null,
              price: null
            },
            {
              name: 'Karhu 16 JK',
              image: '/img/kastor/16_kljk.jpg',
              instruction: null,
              price: null
            },
          ]
        },

        {
          id: 'k20',
          title: 'Кастор 20',
          description: '',
          table: '<colgroup> <col width="110"> <col width="121"> <col width="109"> <col width="130"> <col width="93"> </colgroup> <tbody> <tr height="59"> <td>Модель</td> <td>Объём парилки, м&sup3;</td> <td>Габариты, см</td> <td>Ёмкость каменки, кг</td> <td>Диаметр дымохода, мм</td> </tr> <tr height="20"> <td>KL-20 VV</td> <td>8-17</td> <td>65*78*50</td> <td>65</td> <td>104</td> </tr> <tr height="20"> <td>KS-20</td> <td>8-20</td> <td>49*78*51</td> <td>60</td> <td>104</td> </tr> <tr height="20"> <td>HELO-20 SIL</td> <td>8-20</td> <td>41*73*52</td> <td>40</td> <td>104</td> </tr> <tr height="20"> <td>Karhu 20PK VO</td> <td>13-20</td> <td>67*79*48</td> <td>45-50</td> <td>104</td> </tr> </tbody>',
          products: [
            {
              name: 'KS 20',
              image: '/img/kastor/20_ks.jpg',
              instruction: null,
              price: null
            },
            {
              name: 'KL 20 VV',
              image: '/img/kastor/20_klvv.jpg',
              instruction: null,
              price: null
            },
            {
              name: 'Karhu 20 PK VO',
              image: '/img/kastor/20_pk_vo.jpg',
              instruction: null,
              price: null
            },
            {
              name: 'Helo 20 Sil Helo',
              image: '/img/kastor/20_sil_helo.jpg',
              instruction: null,
              price: null
            },
          ]
        },

        {
          id: 'k27',
          title: 'Кастор 27',
          description: '',
          table: '<colgroup> <col width="110"> <col width="121"> <col width="109"> <col width="130"> <col width="93"> </colgroup> <tbody> <tr height="59"> <td>Модель</td> <td>Объём парилки, м³</td> <td>Габариты, см</td> <td>Ёмкость каменки, кг</td> <td>Диаметр дымохода, мм</td> </tr> <tr height="20"> <td>KL-27</td> <td>17-27</td> <td>48*92*50</td> <td>65</td> <td>129</td> </tr> <tr height="20"> <td>KS-27 JK</td> <td>17-27</td> <td>48*92*50</td> <td>65-70</td> <td>129</td> </tr> <tr height="20"> <td>Karhu 27 JK</td> <td>17-27</td> <td>48*92*48</td> <td>65</td> <td>129</td> </tr> <tr height="20"> <td>KL 27V</td> <td>15-24</td> <td>65*92*50</td> <td>65</td> <td>129</td> </tr> </tbody>',
          products: [
            {
              name: '27 JK',
              image: '/img/kastor/27_jk.jpg',
              instruction: null,
              price: null
            },
            {
              name: 'KL 27V',
              image: '/img/kastor/27_klv.jpg',
              instruction: null,
              price: null
            },
            {
              name: 'KS 27JK',
              image: '/img/kastor/27_ksjk.jpg',
              instruction: null,
              price: null
            },
            {
              name: 'KL 271',
              image: '/img/kastor/27_kl.jpg',
              instruction: null,
              price: null
            },
          ]
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
