<script setup>
const props = defineProps(["title"]);
</script>

<template>
  <header :class="$style.HeaderSection">
    <div :class="$style.LineSection"></div>
    <h2 :class="$style.TitleSection">{{ title }}</h2>
  </header>
</template>

<style module>
.HeaderSection {
  position: relative;
  margin: 0 auto;
  max-width: 1152px;
  text-align: center;
  color: var(--vp-c-text-2);
}

.LineSection {
  position: absolute;
  top: 16px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--vp-c-divider);
}

.TitleSection {
  position: relative;
  display: inline-block;
  padding: 0 24px;
  letter-spacing: 0;
  line-height: 32px;
  font-size: 20px;
  font-weight: 500;
  background-color: var(--vp-c-bg);
}
</style>
