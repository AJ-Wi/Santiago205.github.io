<script setup>
import VideosSection from "./VideosSection.vue";
import { readDataYoutube } from "../composables/UseReadDataYoutube";

const props = defineProps(["type"]);

const { makeRequest, videos } = readDataYoutube();
makeRequest();
</script>

<template>
  <article :class="$style.SectionPage">
    <VideosSection :type="type" :data="videos" />
  </article>
</template>

<style module>
.SectionPage {
  padding: 0 32px;
}

@media (min-width: 768px) {
  .SectionPage {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .SectionPage {
    padding: 0 64px;
  }
}
</style>
