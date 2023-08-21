<script setup>
const baseLink = "https://www.youtube.com/shorts/";

const props = defineProps(["title", "link", "thumbnail", "isShort", "date", "isLive", "type"]);
const type = props.isShort ? "shorts" : props.isLive ? "lives" : "videos";
const imageContainer = props.type === "shorts" ? "" : "ImageContainer";
const responsiveImage = props.type === "shorts" ? "" : "ResponsiveImage";
</script>

<template>
  <a v-if="type === props.type" :class="$style.Item" :href="baseLink + link" target="_blank" rel="noreferrer">
    <div :class="$style[imageContainer]">
      <img :src="thumbnail" :alt="title" :class="$style[responsiveImage]" />
    </div>
    <section :class="$style.Description">
      <h3 :class="$style.TitleItem">{{ title }}</h3>
      <h3 :class="$style.DateItem">{{ date }}</h3>
    </section>
  </a>
</template>

<style module>
.Item {
  border-radius: 10px;
  width: 100%;
  max-width: 180px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  overflow: hidden;
  justify-self: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.Item:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}

.ImageContainer {
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;
  overflow: hidden;
}
.ResponsiveImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.Description {
  padding: 10px;
}

.TitleItem {
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; /* Número de líneas que deseas mostrar (en este caso, 1) */
  overflow: hidden;
}

.DateItem {
  font-size: 12px;
}
</style>
