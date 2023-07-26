---
layout: page
title: YouTube
---

<script setup>
  import HeaderSection from "../components/HeaderSection.vue"
  import ItemsSection from "../components/ItemsSection.vue"
  import { Shorts } from "../public/data/shorts";
</script>

<header :class="$style.HeaderPage">
  <h1 :class="$style.TitlePage">YouTube</h1>
</header>
<article :class="$style.SectionPage">
  <HeaderSection title="Shorts"/>
  <ItemsSection :data="Shorts" />
</article>

<style module>
  .HeaderPage{
    color: var(--primary-color);
    padding: 0;
    text-align: center;
  }

  .TitlePage{
    letter-spacing: 0px;
    line-height: 44px;
    font-size: 36px;
    font-weight: 500;
  }

  .SectionPage{
    padding: 0 32px;
  }

  @media (min-width: 768px){
    .HeaderPage{
      margin-bottom: 16px;
    }

    .TitlePage{
      letter-spacing: -0.5px;
      line-height: 56px;
      font-size: 48px;
    }

    .SectionPage{
      padding: 0 48px;
    }
  }

  @media (min-width: 960px){
    .SectionPage{
      padding: 0 64px;
    }
  }
</style>
