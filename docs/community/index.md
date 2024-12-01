---
layout: page
title: Comunidad
---

<script setup>
  import CardPatreon from "../components/CardPatreon.vue"
</script>

<section :class="$style.Container">
  <CardPatreon/>
</section>

<style module>
.Container{
  display: grid;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  justify-self: center;
}
</style>
