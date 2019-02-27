<template>
  <footer class="md-layout md-gutter">

    <md-card
      class="md-layout-item md-size-65 md-small-size-100"
      style="margin-bottom:16px">
      <md-card-header>
        <div class="md-title">«КОМФОРТ»</div>
        <div class="md-subhead">Общество с ограниченной ответственностью</div>
      </md-card-header>

      <md-card-content>
        Реализация котельного оборудования, банных печей, дополнительного оборудования.<br>
        Монтаж систем отопления, дымоходов, котельного и иного оборудования.
      </md-card-content>

      <md-card-content>
        ИНН\КПП:<br>
        2443046311\244301001<br>
        ОГРН: 1152443001391
      </md-card-content>

      <md-card-actions>
        <md-button href="//yandex.ru/maps/?um=constructor%3AjGfZNoAoTAFw3F9Lbigo7aT5PhGaSKYu&source=constructorLink" target="_blank">Как нас найти? (Яндекс Карты)</md-button>
      </md-card-actions>
    </md-card>

    <md-card
      class="md-layout-item md-small-size-100"
      style="margin-bottom:16px">
      <md-card-header>
        <div class="md-title">Адрес и контакты:</div>
      </md-card-header>

      <md-card-content>г. Ачинск, ул. Дзержинского, 38, стр. 1, офис 1</md-card-content>

      <md-card-content>
        <p>+7 (39151) 5-89-52</p>
        <p>+7 (908) 209-11-47</p>
        <p>+7 (39151) 4-00-40</p>
      </md-card-content>

      <md-card-content>
        <a href="komfort124.ru">komfort124.ru</a>
      </md-card-content>
      <md-card-actions>
        <md-button href="mailto:domkotel124@mail.ru" title="Написать электронное письмо">domkotel124@mail.ru</md-button>
      </md-card-actions>
    </md-card>
  </footer>
</template>

<script>

// импорт здесь

export default {
  name: 'App-Footer',
  components: {},
};

</script>

<style lang="scss">

.footer {
  margin-top: 24px;
  .md-card {
    margin: 0 !important;
  }
  .md-card-content {
    padding-bottom: 0;
  }
}

</style>
