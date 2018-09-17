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


<style>
.intro {
  @include MDShadow-1
}

.slider {
  height: 70vh;
}

.slide {
  display: flex;
  flex-direction: row;
  size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @each $numder in 1, 2, 3, 4, 5, 6 {
    &:nth-child(#{$numder}) {
      background-image: url('../assets/img/slide-#{$numder}.jpg');
    }
  }

  &__column_small {
    flex-basis: percentage(.2);
    background-color: rgba($red, 0.95);
  }

  &__column_half {
    flex-basis: percentage(.5);
  }

  &__column_big {
    flex-basis: percentage(.8);
    background-color: rgba($blacked, 0.35);
  }

  &__column_full {
    flex-basis: 100%;
  }

  &__text {
    font-size: 3rem;
    color: $red;
    text-shadow: 1px 1px 0 $white, 2px 2px 0 $red;
  }

  &__list {}

  &__title {
    display: block;
    text-align: center;
    padding: 15px 0;
    font-size: 24px;
    color: $white;
  }

  &__item {
    display: block;
    padding: 10px 30px;
    color: $white;
    @include transition(.2s);

    &:hover {
      color: $red;
      background-color: $white;
      @include MDShadow-1;
    }

    &:active {
      @include MDShadow-2;
    }
  }
}

.carousel-cell-image {
  display: block;
  max-size: 100%;
  margin: 0 auto;
  opacity: 0;
  background-size: cover;
  transition: opacity 0.4s ease-in-out;

  &.flickity-lazyerror,
  &.flickity-lazyloaded {
    opacity: 1;
  }
}

.flickity-page-dots {
  bottom: 2%;

  .dot {
    opacity: 0.8;
    size: 12px;
    background: transparent;
    border: 2px solid $red;
    @include MDShadow-2;
    @include transition(.3s);

    &:hover {
      opacity: 1;
    }

    &.is-selected {
      background: $red;
      box-shadow: 0 0 5px rgba($red, .5);
    }
  }
}

@import 'sections/catalogue';

.about {
  &__title {
    text-align: center;
    font-size: 3rem;
  }

  &__grid {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    justify-content: center;
    width: 100%;
    padding: 30px;
  }

  &__cell {
    flex: 1 1 30%;
    display: flex;
    flex-flow: column wrap;
    height: 300px;
    margin: 1vh;
    padding: 10px 20px;
    background-color: $white;
    @include MDShadow-1;
    @include transition(.3s)
  }

  &__headline {
    flex: 1 1 2rem;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    padding: 1rem 0;
    text-align: center;
    font-size: 1.3rem;
  }

  &__icon {
    text-align: center;
    font-size: 5rem;
    color: $red;
    cursor: default;
  }

  &__description {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
    
}
    $wrapperTop: 5vh;

// z-index
$below-zindex: 10;
$content-zindex: 20;
$header-zindex: 30;
$overlay-zindex: 90;
$modal-zindex: 100;

// header size
$header-height-S: 50px;
$header-height-L: 70px;

// Navigation size
$nav-width-S: 260px;

// Search size
$search-height-S: 50px;
$search-height-L: 70px;

//Fonts
$primaryFont: 'PT Sans',
sans-serif;
$regularFont: 'Open Sans',
sans-serif;

// colors

//Blue
$blue: #3d70aa;
$river-blue: #3498db;
$deep-blue: #2980b9;

//Green
$emerald: #2ecc71;
$nephritis: #27ae60;

//Dark
$asphalt: #34495e;
$midnight: #2c3e50;

//Gray
$concrete: #95a5a6;
$asbestos: #7f8c8d;

//White
$cloud: #ecf0f1;
$silver: #bdc3c7;

//Red
$alizarin: #e74c3c;
$pomegranate: #c0392b;

//Yellow
$sun: #f1c40f;
$orange: #f39c12;

// colors
$red: #F44336;
$green: #BDDD6A; //#b9e067
$blue: #2c8be3;
$moloko: #E5E8EE;
$gray: #333333;
$white: #fff;
$blacked: #000;

$ripple-opacity: .6;

//
//
//	Color Schemes
//
//

//	Header

$headerBg: $red;
$headerBgSnd: $white;
$headerMenu: $red;
$headerMenuHover: lighten($red, 10%);
$headerSvg: $white;
$headerSymbs: $white;
$headerSymbsHover: $white;
$headerSearch: $white;
$headerSearcHover: $white;
    
// breakpoints
$S: 0;
$M: 992px;
$L: 1200px;

// media queries
@mixin MQ($canvas) {
  @if $canvas==S {
    @media only screen and (min-width: $S) {
      @content;
    }
  }

  @else if $canvas==M {
    @media only screen and (min-width: $M) {
      @content;
    }
  }

  @else if $canvas==L {
    @media only screen and (min-width: $L) {
      @content;
    }
  }
}

// super light grid - it works with the .cd-container class inside style.scss
@mixin column($percentage, $float-direction:left) {
  width: 100% * $percentage;
  float: $float-direction;
}

    // center vertically and/or horizontally an absolute positioned element

@import '_variables';

@mixin center($xy:xy) {
  @if $xy==xy {
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    @include transform(translateX(-50%) translateY(-50%));
  }

  @else if $xy==x {
    left: 50%;
    right: auto;
    @include transform(translateX(-50%));
  }

  @else if $xy==y {
    top: 50%;
    bottom: auto;
    @include transform(translateY(-50%));
  }
}

// antialiasing mode font rendering
@mixin font-smoothing {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/*
  This mixin can be used to set the object-fit:
  @include object-fit(contain);
  or object-fit and object-position:
  @include object-fit(cover, top);
*/
@mixin object-fit($fit: fill, $position: null) {
  object-fit: $fit;

  @if $position {
    object-position: $position;
    font-family: 'object-fit: #{$fit}; object-position: #{$position}';
  }

  @else {
    font-family: 'object-fit: #{$fit}';
  }
}

@mixin box-shadow($radius) {
  box-shadow: 0 0 $radius 0 rgba($blacked, .3);
}

// rem fallback - credits: http://zerosixthree.se/
@function calculateRem($size) {
  $remSize: $size / 16px;
  @return $remSize * 1rem;
}

@mixin font-size($size) {
  font-size: $size;
  font-size: calculateRem($size);
}

@mixin select_none {
  user-select: none;
  cursor: default;
}

@mixin transition($time) {
  transition: ($time) ease-in-out;
}

// making sharper Waves border

@mixin waves-dark($waves-dark-color, $waves-opacity) {
  .waves-effect.waves-dark .waves-ripple {
    background: rgba($waves-dark-color, $waves-opacity);
    $gradient:
      rgba($waves-dark-color, $waves-opacity) 0,
      rgba($waves-dark-color, $waves-opacity) 40%,
      rgba($waves-dark-color, $waves-opacity) 50%,
      rgba($waves-dark-color, $waves-opacity) 70%,
      rgba($waves-dark-color, 0) 70%;
    background: radial-gradient($gradient);
  }
}

@mixin waves-light($waves-light-color, $waves-opacity) {
  .waves-effect.waves-light .waves-ripple {
    background: rgba($waves-light-color, $waves-opacity);
    $gradient:
      rgba($waves-light-color, $waves-opacity) 0,
      rgba($waves-light-color, $waves-opacity) 40%,
      rgba($waves-light-color, $waves-opacity) 50%,
      rgba($waves-light-color, $waves-opacity) 70%,
      rgba($waves-light-color, 0) 70%;
    background: radial-gradient($gradient);
  }
}

// Material Design Shadows
// http://materializecss.com/shadow.html

@mixin MDShadow-1 {
  box-shadow:
    0 2px 2px 0 rgba($blacked, 0.14),
    0 1px 5px 0 rgba($blacked, 0.12),
    0 3px 1px -2px rgba($blacked, 0.2)
}

@mixin MDShadow-2 {
  box-shadow:
    0 4px 5px 0 rgba($blacked, 0.14),
    0 1px 10px 0 rgba($blacked, 0.12),
    0 2px 4px -1px rgba($blacked, 0.3)
}

@mixin MDShadow-3 {
  box-shadow:
    0 6px 10px 0 rgba($blacked, 0.14),
    0 1px 18px 0 rgba($blacked, 0.12),
    0 3px 5px -1px rgba($blacked, 0.3)
}

@mixin MDShadow-4 {
  box-shadow:
    0 8px 10px 1px rgba($blacked, 0.14),
    0 3px 14px 2px rgba($blacked, 0.12),
    0 5px 5px -3px rgba($blacked, 0.3)
}

@mixin MDShadow-5 {
  box-shadow:
    0 16px 24px 2px rgba($blacked, 0.14),
    0 6px 30px 5px rgba($blacked, 0.12),
    0 8px 10px -5px rgba($blacked, 0.3)
}
.intro {
    position: relative;
    &__back-image-container {
        overflow: hidden;
        top: 0;
        left: 0;
        display: block;
        height: 70vh;
        @include MDShadow-2;
    }
    &__back-image {
        width: 100%;
    }
    &__overlay {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        size: 100%;
        padding: 0 60px;
        background-color: rgba($blacked, .6);
    }
    &__title {
        display: block;
        text-align: center;
        font-size: 3rem;
        color: $white;
    }
    &__subtitle {
        text-align: center;
        margin: 20px auto;
        color: $white;
    }
    &__list {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        width: 100%;
    }
    &__link {
        display: inline-block;
        padding: 7px 9px;
        margin: 5px;
        color: $white $red;
        border-radius: 2px;
        @include MDShadow-1;
        @include transition(.3s);
        &:hover {
            color: $white lighten($red, 10%);
        }
        &:active {
            @include MDShadow-2;
        }
    }
    &__additional-text {
        text-align: center;
        margin: 20px auto;
        color: $white;
    }
    &__list-title {
        margin: 20px auto;
        color: $white;
    }
}
.product {
  &__container {
    background-color: $white
  }

  &__column {
    flex: 1 1 24%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    margin: 0.5vh;
    border-radius: 2px;
    @include MDShadow-1;
    @include transition(.3s);

    &:hover {
      @include MDShadow-2;
    }
  }

  &__column-half {
    display: flex;
    flex-flow: column nowrap;
    width: 50%
  }

  &__name {
    display: block;
    text-align: center;
    padding: 10px 0 5px;
    margin: 10px 200px 35px;
    border: solid $blacked;
    border-width: 0 0 2px;
  }

  &__title {
    display: block;
    text-align: center;
    width: 100%;
    padding: 10px;
    font-size: 1.5rem;
    color: $white lighten($red, 5%);
  }

  &__image-container {
    flex: 1 1 50%;
    display: flex;
    max-width: 50%;
    justify-content: center;
  }

  &__slider-container {
    flex: 1 1 50%;
    display: block;
    max-width: 50%;
    height: $height;
  }

  &__image {
    size: auto $height;

    &_half {
      @extend .product__image;
      max-width: 100%;
      height: auto
    }
  }

  &__image_wide {
    width: 100%;
  }

  &__description-container {
    flex: 1 1 50%;
    min-height: $height;
    padding-right: 40px;
    border: solid $border-color;
    border-width: 0 0 0 1px;
  }

  &__characteristics-list {
    margin-top: 10px;
    margin-left: 30px;
    margin-bottom: 10px;
  }

  &__characteristics-title {
    display: block;
    padding: 10px 20px;
    font-size: 1rem;
    line-height: 2;
    background-color: darken($white, 5%);
  }

  &__characteristics-item {
    font-size: 0.9rem;
    line-height: 1.7;
    list-style-type: disc !important;

    &_columned {
      display: flex;
    }
  }

  &__column-1 {
    flex: auto;
  }

  &__column-2 {
    flex: auto;
    text-align: right;
  }

  &__description-title {
    text-align: center;
    width: 100%;
    padding: 10px 20px;
    margin: auto 100px;
    margin-top: 50px;
    font-size: 1.2rem;
    line-height: 1.5;
    background-color: darken($white, 5%);
    border: solid $border-color;
    border-width: 0 0 1px;
  }

  &__description-text {
    display: block;
    width: 80%;
    margin: 30px auto 0px;
    font-size: 0.9rem;
    line-height: 1.5;

    &_wide {
      display: block;
      width: 100%;
      padding: 10px 100px;
      font-size: 0.9rem;
      line-height: 1.7;
    }
  }

  &__banner {
    display: block;
  }

  &__link {
    display: block;
    padding: 10px 15px;
    margin: 5px;
    text-align: center;
    font-size: 0.9rem;
    color: $white $red;
    border-radius: 2px;
    @include MDShadow-1;
    @include transition(.3s);

    &:hover {
      color: $white lighten($red, 10%);
    }

    &:active {
      @include MDShadow-2;
    }
  }

  &__table-container {
    margin: 25px auto;
  }

  &__price {
    font-size: 2rem;
    text-align: center;
    margin: 50px auto;

    &_narrow {
      width: 100%;
      padding: 5px;
      text-align: center;
      font-size: 1.5rem;
      color: $white lighten($red, 5%);
    }

    &_wide {
      @extend .product__price;
      flex: 1 1 100%;
      margin: 20px auto;
    }
  }
}

.carousel-cell {
  display: block;
  text-align: center;
  width: 100%;
  height: 100%;
}

.carousel-cell-image {
  display: block;
  max-size: 100%;
  margin: 0 auto;
  opacity: 0;
  background-size: cover;
  transition: opacity .4s ease-in-out;

  &.flickity-lazyloaded,
  &.flickity-lazyerror {
    opacity: 1;
  }
}

.flickity-page-dots {
  bottom: 2%;

  .dot {
    opacity: 0.8;
    size: 12px;
    background: transparent;
    border: 2px solid $red;
    @include MDShadow-2;
    @include transition(.3s);

    &:hover {
      opacity: 1;
    }

    &.is-selected {
      background: $red;
      box-shadow: 0 0 5px rgba($red, .5);
    }
  }
}

tr,
td {
  padding: 5px;
  color: $blacked;
  font-size: 11.0pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: Calibri, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid $blacked;
}
</style>