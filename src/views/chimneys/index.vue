<template>
  <main id="main" class="main">

    <section class="product">
      <h1 class="md-display-2">Дымоходы</h1>
      <p class="md-body-2">
        Вы можете собрать дымоход под свои нужды, для этого свяжитесь с менеджером.<br />
        Мы можем предложить Вам как дорогой дымоход из высококачественной стали, так и более доступный вариант из стали марки AiSi 439.
      </p>
      <p class="md-body-2">
        Дымоход - один из главных элементов газового и дровяного отопительного оборудования,<br />
          он создает естественную тягу, благодаря которой продукты сгорания эффективно выводятся из топочной камеры.<br />
        Мы предлагаем модульные дымоходы высокого качества:<br />
        - из нержавеющей стали марки "Вулкан", "Дымок", производитель Россия, г. Санкт-Петербург (внутренний диаметр, мм: 104-300);<br />
        - керамические дымоходы марки Hart Keramik немецкого производства (внутренний диаметр, мм: 120-300)
      </p>
    </section>

    <section id="single" class="product">
      <h2 class="product__name">Одноконтурный вариант</h2>
      <ul class="md-layout md-gutter md-alignment-top-space-between">
        <Chimney-Card
          v-for="item in single"
          :key="item.src"
          :item="item" />
      </ul>

      <div class="product__description-container">
        <span class="product__characteristics-title">Описание:</span>
        <span class="product__description-text">
          Дымоход "Дымок":<br>
          Внутренние диаметры, мм: 100, 110, 115, 120, 130, 150, 180, 200.<br>
          Материал внутреннего и наружного контура дымохода:<br>
          Нержавеющая сталь марки AiSi 439 0,5мм<br>
          Изоляция: Rockwool Wired Mat (Россия)
        </span>
      </div>
    </section>


    <div class="s-devider">
      <div class="md-cardne"></div>
    </div>

    <section id="double" class="product">

      <div class="product__container">

        <h2 class="product__name">Двухконтурный вариант</h2>

        <ul class="md-layout md-gutter md-amd-cardgnment-center">
          <Chimney-Card
            v-for="item in double"
            :key="item.src"
            :item="item" />
        </ul>

        <div class="product__description-container">

          <span class="product__characteristics-title">Описание:</span>
          <span class="product__description-text">
            Дымоход "Вулкан"Внутренние диаметры, мм: 100, 104, 110, 115, 120, 130, 150, 160, 180, 200, 250, 300.<br />
            1) Материал внутреннего/наружного контуров дымохода:<br />
            Нержавеющая сталь марки AiSi 821 0,5 мм / AiSi 304 0,5 мм<br />
            Изоляция: БАЗ ВАТА Rockwool Wired Mat (Дания)<br />
            2) Материал внутреннего/наружного контуров дымохода:<br />
            Нержавеющая сталь марки: AiSi 321 0,5 мм / оцинкованная сталь 0,5 мм<br />
            Изоляция: БАЗ ВАТА Rockwool Wired Mat (Дания)<br /><br />

            Дымоходы "Вулкан" производятся по европейским стандартам качества.<br />
            Высококачественная нержавеющая сталь (AISI 321Т, AISI 304) обеспечивает устойчивость дымоходов "Вулкан" к воздействию высоких температур и кислот.<br />
            В дымоходах "Вулкан" используется специальная термоустойчивая вата фирмы "Rockwool".<br />
            Из нее создается плотный теплоизолирующий слой толщиной 50 или 100 мм,что отвечает самым высоким требованиям пожарной безопасности.<br />
            Сплошной сварной шов по технологии TIG гарантирует высокую прочность и безопасную работу дымохода "Вулкан" на долгие годы.<br />
            Уникальная система внутренней термокомпенсации дымоходов "Вулкан" исключает деформацию дымохода при естественном расширении металла во время нагревания.<br />
            Все элементы дымоходов "Вулкан" легко стыкуются между собой. Внутренние трубы расположены строго по центру и прочно зафиксированы.<br />
            Все комплектующие дымоходов "Вулкан" имеют упаковку (гофрокартон), которая сохранит внешний вид дымохода во время хранения и транспортировки.<br />
            Качество дымоходов "Вулкан" подтверждено Сертификатом Соответствия Госстандарта России и Сертификатом Пожарной Безопасности.<br />
            Гарантийный срок эксплуатации дымохода "Вулкан" 50 лет, при сроке службы не менее 100 лет.
          </span>

        </div>

      </div>

    </section>

  </main>
</template>

<script>

  import ChimneyCard from './ChimneyCard.vue';

  export default {
    name: 'Chimneys',

    components: { ChimneyCard },

    data: () => ({
      single: [
        {
          src: '/img/vulkan/2.jpg',
          title: 'Отвод 45 градусов'
        },
        {
          src: '/img/vulkan/5.jpg',
          title: 'Отвод 90 градусов'
        },
        {
          src: '/img/vulkan/4.jpg',
          title: 'Опора'
        },
        {
          src: '/img/vulkan/3.jpg',
          title: 'Опора напольная'
        },
        {
          src: '/img/vulkan/6.jpg',
          title: 'Зонтик'
        },
        {
          src: '/img/vulkan/7.jpg',
          title: 'Тройник 90 градусов'
        },
        {
          src: '/img/vulkan/8.jpg',
          title: 'Задвижка'
        },
        {
          src: '/img/vulkan/9.jpg',
          title: 'Дефлектор'
        },
        {
          src: '/img/vulkan/10.jpg',
          title: 'Элемент крепления к стене'
        },
        {
          src: '/img/vulkan/11.jpg',
          title: 'Кронштейн с опорой'
        },
        {
          src: '/img/vulkan/12.jpg',
          title: 'Конденсатосборник'
        },
        {
          src: '/img/vulkan/13.jpg',
          title: 'Труба (250 мм - 1000 мм)'
        },
        {
          src: '/img/vulkan/14.jpg',
          title: 'Отвод 15 градусов'
        },
        {
          src: '/img/vulkan/15.jpg',
          title: 'Крышка-ревизия'
        },
        {
          src: '/img/vulkan/16.jpg',
          title: 'Отвод 30 градусов'
        }
      ],
      double: [
        {
          src: '/img/vulkan/20.jpg',
          title: 'Переходник моно-термо'
        },
        {
          src: '/img/vulkan/21.jpg',
          title: 'Взрывной клапан'
        },
        {
          src: '/img/vulkan/22.jpg',
          title: 'Дефлектор'
        },
        {
          src: '/img/vulkan/24.jpg',
          title: 'Зонт'
        },
        {
          src: '/img/vulkan/23.jpg',
          title: 'Конденсатосборник'
        },
        {
          src: '/img/vulkan/25.jpg',
          title: 'Конус'
        },
        {
          src: '/img/vulkan/26.jpg',
          title: 'Кровельный элемент 0-20 20-45'
        },
        {
          src: '/img/vulkan/28.jpg',
          title: 'Кронштейн с опорой'
        },
        {
          src: '/img/vulkan/29.jpg',
          title: 'Опора напольная'
        },
        {
          src: '/img/vulkan/32.jpg',
          title: 'Отвод 15 градусов'
        },
        {
          src: '/img/vulkan/35.jpg',
          title: 'Отвод 30 градусов'
        },
        {
          src: '/img/vulkan/30.jpg',
          title: 'Отвод 45 градусов'
        },
        {
          src: '/img/vulkan/31.jpg',
          title: 'Отвод 90 градусов'
        },
        {
          src: '/img/vulkan/33.jpg',
          title: 'Опора'
        },
        {
          src: '/img/vulkan/34.jpg',
          title: 'Крышка-ревизия'
        },
        {
          src: '/img/vulkan/36.jpg',
          title: 'Переход термо-моно'
        },
        {
          src: '/img/vulkan/37.jpg',
          title: 'Стакан'
        },
        {
          src: '/img/vulkan/38.jpg',
          title: 'Тройник 45 градусов'
        },
        {
          src: '/img/vulkan/40.jpg',
          title: 'Тройник 90 градусов'
        },
        {
          src: '/img/vulkan/39.jpg',
          title: 'Фланец'
        },
        {
          src: '/img/vulkan/41.jpg',
          title: 'Хомут под растяжки'
        },
        {
          src: '/img/vulkan/42.jpg',
          title: 'Хомут соединительный'
        },
        {
          src: '/img/vulkan/44.jpg',
          title: 'Труба 250 - 1000 мм'
        }
      ]
    }),

  };
</script>


<style lang="scss">
  @import '../../stylesheets/chimneys.scss';
</style>

