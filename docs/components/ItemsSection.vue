<script setup>
import ItemShort from "./ItemShort.vue";
const props = defineProps(["data"]);
</script>

<template>
  <section :class="$style.ItemsSection">
    <ItemShort v-for="short in data" :title="short.title" :link="short.link" />
  </section>
</template>

<style module>
.ItemsSection {
  display: grid;
  gap: 24px;
  margin: 40px auto;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  max-width: calc(210px * 4 + 24px * 3);
}
</style>
