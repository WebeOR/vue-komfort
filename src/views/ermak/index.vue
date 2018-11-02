<template>
  <div class="main">

    <section class="product">
      <h1 class="md-display-2">Банные печи Ермак</h1>
      <p class="md-body-2">
        Конструкция и тщательно подобранные материалы обеспечивают жесткость и условие тепловой равнопрочности, устраняют появление деформации при нагреве, формируют развитую систему теплопередачи. В различных исполнениях наиболее термически нагруженные элементы выполнены из стали толщиной до 6 мм или специальной жаростойкой нержавеющей стали (Элит) с содержанием хрома до 17% и температурой окалино-образования до 900 °C.<br>
      </p>
      <p class="md-body-2">
        Модельный ряд рассчитан на самые популярные объемы парной: 6-14, 8-18, 12-24, 15-30, 35-50 м&sup3;.
      </p>
    </section>

    <Ermak-Template
      v-for="line in lines"
      :key="line.id"
      :Line="line" />

    <div class="families">
      <span class="families__list-title">Другие семейства банных печей:</span>
      <ul class="families__list">
        <li><a href="nmk-furnaces" class="families__link" ripple-light>НМК</a></li>
        <li><a href="kastor" class="families__link" ripple-light>Кастор</a></li>
      </ul>
    </div>

  </div>
</template>

<script>

  import ErmakTemplate from './ErmarkTemplate.vue';

  export default {
    name: 'Ermak',
    components: { ErmakTemplate },
    data: () => ({
      lines: [

        {
          id: '12',
          title: 'Ермак 12',
          description: 'Самая компактная дровяная банная печь на основе «Свободной Трансформации - FT», с изменяемой функциональностью. Печь создана для небольшой русской бани или финской сауны с объемом парной от 6-14 м&sup3;.',
          products: [
            {
              name: 'Ермак 12',
              image: '/img/ermak/e12.jpg',
              instruction: '//www.ermak-termo.ru/upload/iblock/253/%D0%9F%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D0%95%D1%80%D0%BC%D0%B0%D0%BA%2012,%2012-%D0%9F%D0%A1-.pdf',
              price: {
                value: 11600,
                currency: 'rub'
              }
            },
            {
              name: 'Ермак 12 ПС',
              image: '/img/ermak/e12ps.jpg',
              instruction: '//www.ermak-termo.ru/upload/iblock/253/%D0%9F%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D0%95%D1%80%D0%BC%D0%B0%D0%BA%2012,%2012-%D0%9F%D0%A1-.pdf',
              price: {
                value: 16750,
                currency: 'rub'
              }
            },
            {
              name: 'Ермак 12 Элит С',
              image: '/img/ermak/e12es.jpg',
              instruction: '//www.ermak-termo.ru/upload/iblock/253/%D0%9F%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D0%95%D1%80%D0%BC%D0%B0%D0%BA%2012,%2012-%D0%9F%D0%A1-.pdf',
              price: {
                value: 14650,
                currency: 'rub'
              }
            },
            {
              name: 'Ермак 12 Элит ПС',
              image: '/img/ermak/e12.jpg',
              instruction: 'http://www.ermak-termo.ru/upload/iblock/253/%D0%9F%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D0%95%D1%80%D0%BC%D0%B0%D0%BA%2012,%2012-%D0%9F%D0%A1-.pdf',
              price: {
                value: 18900,
                currency: 'rub'
              }
            }
          ]
        },

        {
          id: '16',
          title: 'Ермак 16',
          description: 'Банная печь с оптимальным соотношением простоты, эффективности и изменяемой функциональности («Free Transformation»). Создана для обладателей небольшой русской бани или финской сауны, получения пара и нагрева воды, с объемом парной от 8-16 м&sup3;.',
          products: [
            {
              name: 'Ермак 16',
              image: '/img/ermak/e16.jpg',
              instruction: '//www.ermak-termo.ru/upload/iblock/6d4/%D0%9F%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D0%95%D1%80%D0%BC%D0%B0%D0%BA%2016(2012).pdf',
              price: {
                value: 12300,
                currency: 'rub'
              }
            },
            {
              name: 'Ермак 16 ПС',
              image: '/img/ermak/e16ps.jpg',
              instruction: '//www.ermak-termo.ru/upload/iblock/6d4/%D0%9F%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D0%95%D1%80%D0%BC%D0%B0%D0%BA%2016(2012).pdf',
              price: {
                value: 23500,
                currency: 'rub'
              }
            },
            {
              name: 'Ермак 16 Элит С',
              image: '/img/ermak/e16es.jpg',
              instruction: '//www.ermak-termo.ru/upload/iblock/6d4/%D0%9F%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D0%95%D1%80%D0%BC%D0%B0%D0%BA%2016(2012).pdf',
              price: {
                value: 19800,
                currency: 'rub'
              }
            },
            {
              name: 'Ермак 16 Элит ПС',
              image: '/img/ermak/e16eps.jpg',
              instruction: '//www.ermak-termo.ru/upload/iblock/6d4/%D0%9F%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D0%95%D1%80%D0%BC%D0%B0%D0%BA%2016(2012).pdf',
              price: {
                value: 25450,
                currency: 'rub'
              }
            }
          ]
        },

        {
          id: '20',
          title: 'Ермак 20',
          description: '20 серия уверенно стоит в золотой середине линейки банных печей, сочетая мощность и преимущества изменяемой функциональности «FT». Печь - для средней русской бани или финской сауны, получения пара и нагрева воды с объемом парной от 12-24 м&sup3;',
          products: [
            {
              name: 'Ермак 20',
              image: '/img/ermak/e20.jpg',
              instruction: '//www.ermak-termo.ru/upload/iblock/c6a/%D0%9F%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D0%95%D1%80%D0%BC%D0%B0%D0%BA%2020(2012).pdf',
              price: {
                value: 16450,
                currency: 'rub'
              }
            },
            {
              name: 'Ермак 20 ПС',
              image: '/img/ermak/e20ps.jpg',
              instruction: '//www.ermak-termo.ru/upload/iblock/c6a/%D0%9F%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D0%95%D1%80%D0%BC%D0%B0%D0%BA%2020(2012).pdf',
              price: {
                value: 22850,
                currency: 'rub'
              }
            },
            {
              name: 'Ермак 20 Элит С',
              image: '/img/ermak/e20es.jpg',
              instruction: '//www.ermak-termo.ru/upload/iblock/c6a/%D0%9F%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D0%95%D1%80%D0%BC%D0%B0%D0%BA%2020(2012).pdf',
              price: {
                value: 21300,
                currency: 'rub'
              }
            },
            {
              name: 'Ермак 20 Элит ПС',
              image: '/img/ermak/e20eps.jpg',
              instruction: '//www.ermak-termo.ru/upload/iblock/c6a/%D0%9F%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D0%95%D1%80%D0%BC%D0%B0%D0%BA%2020(2012).pdf',
              price: {
                value: 27550,
                currency: 'rub'
              }
            }
          ]
        },

        {
          id: '30',
          title: 'Ермак 30',
          description: 'Одна из самых мощных печей в ряду банных дровяных печей с возможностью изменения функциональности (FT). С легкостью нагреет среднюю и просторную русскую баню или финскую сауну, с объемом парной от 15-30 м&sup3;, позволит получить пар и нагреть воду.',
          products: [
            {
              name: 'Ермак 30-ПС РТ',
              image: '/img/ermak/e30psrt.jpg',
              instruction: '//www.ermak-termo.ru/upload/iblock/701/%D0%9F%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D0%95%D1%80%D0%BC%D0%B0%D0%BA%2030%20%D0%9F%D0%A1%20(2014)-.pdf',
              price: {
                value: 32600,
                currency: 'rub'
              }
            },
            {
              name: 'Ермак 30 ПС 2К РТ',
              image: '/img/ermak/e30ps2krt.jpg',
              instruction: '//www.ermak-termo.ru/upload/iblock/f7c/%D0%9F%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D0%95%D1%80%D0%BC%D0%B0%D0%BA%2030-%D0%9F%D0%A1%202%D0%9A%20%D0%A0%D0%A2%20%D0%9F%D0%93%20(2012)%20%20.pdf',
              price: {
                value: 41750,
                currency: 'rub'
              }
            },
            {
              name: 'Ермак 30 2ПС 2К РТ',
              image: '/img/ermak/e30-2ps2k2rt.jpg',
              instruction: '//www.ermak-termo.ru/upload/iblock/3cf/%D0%9F%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D0%95%D1%80%D0%BC%D0%B0%D0%BA%2030-%D0%9F%D0%A1%202%D0%9A%20%D0%A0%D0%A2%20%D0%9F%D0%93%20(2015).pdf',
              price: {
                value: 55700,
                currency: 'rub'
              }
            }
          ]
        }

      ]
    }),
    computed: {
      toolbar () {
        return this.lines.map( ({ id , title }) => ({ id: 'e' + id , title }) );
      }
    },
    created () {
      this.$emit( 'set-toolbar' , this.toolbar );
    }
  };

</script>
