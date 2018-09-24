<template>
  <header id="header" class="header">
    <a class="cd-logo" href="">
      <svg class="logo"
           width="250" height="45" xmlns="http://www.w3.org/2000/svg">
        <g>
          <g id="svg_3">
            <text
            xml:space="preserve"
            class="logo__svg"
            text-anchor="start"
            font-family="'Trebuchet MS', Gadget, sans-serif"
            font-size="76"
            id="svg_1" y="61" x="-0.475006"
            stroke-width="0"
            >КОМФОРТ</text>
          </g>
        </g>
      </svg>

    </a>
    <ul class="cd-header-buttons">
      <li>
        <a class="cd-search-trigger" href="#cd-search">Search<span></span></a>
      </li>
      <li>
        <a class="cd-nav-trigger" href="#cd-primary-nav">Menu<span></span></a>
      </li>
    </ul>
  </header>
</template>

<script>

  export default {
    name: 'App-Header'
  };

</script>
