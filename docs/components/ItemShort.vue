<script setup>
const baseLink = "https://www.youtube.com/shorts/";

const props = defineProps(["title", "link", "thumbnail", "isShort"]);
</script>

<template>
  <article v-if="isShort" :class="$style.Item">
    <section :class="$style.BodyItem">
      <img :src="thumbnail" :alt="title" />
      <h3 :class="$style.TitleItem">{{ title }}</h3>
    </section>
    <section>
      <a :class="$style.LinkItem" :href="baseLink + link" target="_self" rel="noreferrer">Ver</a>
    </section>
  </article>
</template>

<style module>
.Item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 12px;
  width: 100%;
  max-width: 210px;
  height: 100%;
  overflow: hidden;
  justify-self: center;
}

.BodyItem {
  background-color: var(--vp-c-bg-soft);
}

.item-body img {
  object-fit: cover;
}

.TitleItem {
  padding: 5px;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* Número de líneas que deseas mostrar (en este caso, 2) */
  overflow: hidden;
  min-height: 58px;
}

.LinkItem {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
  color: var(--primary-color);
  background-color: var(--vp-c-bg-soft);
  transition: color 0.25s, background-color 0.25s;
}

.LinkItem:hover {
  outline: none;
  color: var(--vp-c-white);
  background-color: var(--primary-color);
}
</style>
