<script setup>
import ItemVideo from "./ItemVideo.vue";
const props = defineProps(["data", "type"]);
</script>

<template>
  <section :class="[$style.ItemsSection, $style[type]]">
    <ItemVideo
      v-for="video in data"
      :title="video.title"
      :link="video.videoId"
      :thumbnail="video.thumbnail"
      :isShort="video.isShort"
      :isLive="video.isLive"
      :date="video.date"
      :type="type"
    />
  </section>
</template>

<style module>
.ItemsSection {
  display: grid;
  column-gap: 10px;
  row-gap: 40px;
  margin: 40px auto;
}
.shorts {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  max-width: calc(150px * 6 + 10px * 5);
}
.videos {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  max-width: calc(180px * 5 + 10px * 4);
}
.lives {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  max-width: calc(180px * 5 + 10px * 4);
}
</style>
