<script setup>
import ItemShort from "./ItemShort.vue";
const props = defineProps(["data"]);
</script>

<template>
  <section :class="$style.ItemsSection">
    <ItemShort
      v-for="short in data"
      :title="short.title"
      :link="short.videoId"
      :thumbnail="short.thumbnail"
      :isShort="short.isShort"
      :date="short.date"
    />
  </section>
</template>

<style module>
.ItemsSection {
  display: grid;
  column-gap: 10px;
  row-gap: 40px;
  margin: 40px auto;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  max-width: calc(150px * 6 + 10px * 5);
}
</style>
