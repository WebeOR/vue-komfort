<template>

  <main id="main" class="main">

    <section class="intro">

      <div id="slider" class="slider">

        <div class="slide carousel-cell">

          <div class="slide__column_big">
            <div class="container_flex">
              <span class="slide__text">Твёрдотопливные котлы</span>
            </div>
          </div>

          <div class="slide__column_small">
            <ul class="slide__list">
              <p class="slide__title">Производители:</p>
              <li><a href="kentatsu" class="slide__item" ripple-dark>Kentatsu</a></li>
              <li><a href="termokraft" class="slide__item" ripple-dark>Termokraft</a></li>
              <li><a href="energy-tt" class="slide__item" ripple-dark>Энергия-ТТ</a></li>
              <li><a href="buderus" class="slide__item" ripple-dark>Buderus</a></li>
              <li><a href="zota" class="slide__item" ripple-dark>Zota</a></li>
              <li><a href="nmk" class="slide__item" ripple-dark>НМК</a></li>
            </ul>
          </div>
        </div>

        <div class="slide carousel-cell">

          <div class="slide__column_big">
            <div class="container_flex">
              <span class="slide__text">Банные печи</span>
            </div>
          </div>

          <div class="slide__column_small">
            <ul class="slide__list">
              <p class="slide__title">Производители:</p>
              <li><a href="ermak" class="slide__item" ripple-dark>Ермак</a></li>
              <li><a href="nmk-furnaces" class="slide__item" ripple-dark>НМК</a></li>
              <li><a href="kastor" class="slide__item" ripple-dark>Кастор</a></li>
            </ul>
          </div>
        </div>

        <!-- <div class="slide carousel-cell">

          <div class="slide__column_big">
            <div class="container_flex">
              <span class="slide__text">Печи-камины</span>
            </div>
          </div>

          <div class="slide__column_small">
            <ul class="slide__list">
              <p class="slide__title">Производители:</p>
              <li><a href="#" class="slide__item" ripple-dark>MBS</a></li>
              <li><a href="#" class="slide__item" ripple-dark>OGNIVO</a></li>
              <li><a href="#" class="slide__item" ripple-dark>Ермак</a></li>
            </ul>
          </div>
        </div> -->

        <div class="slide carousel-cell">

          <div class="slide__column_big">
            <div class="container_flex">
              <span class="slide__text">Дымоходы</span>
            </div>
          </div>

          <div class="slide__column_small">
            <ul class="slide__list">
              <p class="slide__title">Линейки:</p>
              <li><a href="chimneys" class="slide__item" ripple-dark>Вулкан</a></li>
              <li><a href="chimneys" class="slide__item" ripple-dark>Дымок</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="catalogue" class="catalogue">

      <div class="container_flex">

        <h2 class="catalogue__title"> Что мы предлагаем:<br> Выберите интересующую категорию и производителя </h2>

        <p class="catalogue__headline-advise"> Вы всегда можете перейти к любому другому продукту, используя меню или кнопки на страницах. </p>

        <div class="grid">

          <div class="cell_wide">
            <div class="cell__container_wide">
              <h6 class="cell__headline">Твёрдотопливные котлы</h6>
              <span class="cell__description_wide">
                <p> Автономны, идеальны для мест, где нет электричества, дёшевы в эксплуатации, неприхотливы. </p>
                <p>&nbsp;</p>
                <p>Мы предлагаем продукцию проверенных производителей, как отечественных, так и зарубежных.</p>
              </span>
            </div>
            <ul class="cell__links-list_wide">
              <li><a href="kentatsu" class="cell__link_wide" ripple-light>Kentatsu</a></li>
              <li><a href="termokraft" class="cell__link_wide" ripple-light>Termokraft</a></li>
              <li><a href="energy-tt" class="cell__link_wide" ripple-light>Энергия-ТТ</a></li>
              <li><a href="buderus" class="cell__link_wide" ripple-light>Buderus</a></li>
              <li><a href="zota" class="cell__link_wide" ripple-light>Zota</a></li>
              <li><a href="nmk" class="cell__link_wide" ripple-light>НМК</a></li>
            </ul>
          </div>

          <div class="cell_wide">
            <div class="cell__container_wide">
              <h6 class="cell__headline">Электрические котлы</h6>
              <span class="cell__description_wide">
                <p> Хороши для объектов с доступом к энергосети, надёжны, безопасны, не создают твёрдых отходов. </p>
                <p>&nbsp;</p>
                <p>Также используются в качестве вспомогательного компонента отопительных систем.</p>
              </span>
            </div>
            <ul class="cell__links-list_wide">
              <li><a href="zotae" class="cell__link_wide" ripple-light>Zota</a></li>
            </ul>
          </div>

          <div class="cell_wide">
            <div class="cell__container_wide">
              <h6 class="cell__headline">Банные печи</h6>
              <span class="cell__description_wide">Печи различных производителей для бань с почти любым объёмом парилки.</span>
            </div>
            <ul class="cell__links-list_wide">
              <li><a href="ermak" class="cell__link_wide" ripple-light>Ермак</a></li>
              <li><a href="nmk-furnaces" class="cell__link_wide" ripple-light>НМК</a></li>
              <li><a href="kastor" class="cell__link_wide" ripple-light>Кастор</a></li>
            </ul>
          </div>

          <div class="cell_wide">
            <div class="cell__container_wide">
              <h6 class="cell__headline">Дымоходы</h6>
              <span class="cell__description_wide"><p>Требуются для отведения летучих продуктов сгорания из помещения, где установлен котёл.</p></span>
            </div>
            <ul class="cell__links-list_wide">
              <li>
                <a href="chimneys" class="cell__link_wide" ripple-light>Перейти на страницу</a>
              </li>
            </ul>
          </div>

          <div class="cell_wide">
            <div class="cell__container_wide">
              <h6 class="cell__headline">Печи-камины</h6>
              <span class="cell__description_wide">Красивое и доступное средство обогрева Вашего дома.</span>
            </div>
            <ul class="cell__links-list_wide">
              <li><a href="stoves#corner-happy" class="cell__link_wide" ripple-light>MBS</a></li>
              <li><a href="stoves#ognivo_1-2" class="cell__link_wide" ripple-light>OGNIVO</a></li>
              <li><a href="stoves#ermak_soffit-grant" class="cell__link_wide" ripple-light>Ермак</a></li>
            </ul>
          </div>

        </div>

      </div>

    </section>

    <section id="about" class="about">

      <div class="container_flex">

        <h4 class="about__title">Почему выбирают нас?</h4>

        <div class="about__grid">

          <div class="about__cell">
            <h6 class="about__headline">Опыт установки и монтажа<br>- 7 лет!</h6>
            <i class="about__icon fa fa-rocket" aria-hidden="true"></i>
            <p class="about__description">Что это значит для Вас? Вы получите качественную установку, которая избавит Вас от лишних хлопот и головной боли.</p>
          </div>

          <div class="about__cell">
            <h6 class="about__headline">Грамотная консультация от специалиста-практика.</h6>
            <i class="about__icon fa fa-thumbs-o-up" aria-hidden="true"></i>
            <p class="about__description">Что это значит для Вас? Доступное и понятное объяснение поможет Вам сэкономить время и средства!</p>
          </div>

          <div class="about__cell">
            <h6 class="about__headline">Гарантии:</h6>
            <i class="about__icon fa fa-wrench" aria-hidden="true"></i>
            <p class="about__description">
              На произведённый монтаж компания «Комфорт» предоставляет гарантию 2 года. На всё оборудование, поставляемое компанией, распространяется гарантия от производителей.
            </p>
          </div>
        </div>
      </div>
    </section>

  </main>

</template>
