<script setup>
const props = defineProps(["title"]);
</script>

<template>
  <header :class="$style.HeaderPage">
    <div :class="$style.LinePage"></div>
    <h1 :class="$style.TitlePage">{{ title }}</h1>
  </header>
</template>

<style module>
.HeaderPage {
  position: relative;
  margin: 0 auto;
  max-width: 1152px;
  text-align: center;
  color: var(--primary-color);
}

.LinePage {
  position: absolute;
  top: 22px;
  left: 0;
  width: 100%;
  height: 1.5px;
  background-color: var(--vp-c-divider);
}

.TitlePage {
  position: relative;
  display: inline-block;
  padding: 0 24px;
  letter-spacing: 0px;
  line-height: 44px;
  font-size: 36px;
  font-weight: 500;
  background-color: var(--vp-c-bg);
}

@media (min-width: 768px) {
  .LinePage {
    top: 28px;
  }
  .TitlePage {
    letter-spacing: -0.5px;
    line-height: 56px;
    font-size: 48px;
  }
}
</style>
