<script setup>
import ItemVideo from "./ItemVideo.vue";
const props = defineProps(["data"]);
</script>

<template>
  <section :class="$style.ItemsSection">
    <ItemVideo
      v-for="video in data"
      :title="video.title"
      :link="video.videoId"
      :thumbnail="video.thumbnail"
      :isShort="video.isShort"
      :date="video.date"
    />
  </section>
</template>

<style module>
.ItemsSection {
  display: grid;
  column-gap: 10px;
  row-gap: 40px;
  margin: 40px auto;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  max-width: calc(180px * 5 + 10px * 4);
}
</style>
