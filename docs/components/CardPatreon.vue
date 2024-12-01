<script setup>
//200x87
</script>

<template>
  <article :class="$style.Item">
    <div :class="$style.ImageContainer">
      <img src="/assets/img/patreon.jpg" alt="prueba" :class="$style.ResponsiveImage" />
    </div>
  </article>
</template>

<style module>
.Item {
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
  height: 400px;
  background-color: var(--vp-c-bg-soft);
  overflow: hidden;
  justify-self: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.Item:hover {
  transform: scale(1.1);
  border: 2px solid var(--vp-c-gutter);
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
</style>
