---
layout: page
title: Youtube
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
import {onMounted} from 'vue'

onMounted(()=>{
  const title = document.querySelector(".VPTeamPageTitle").classList.add("title-skill");
  const sections = document.querySelectorAll(".VPTeamPageSection");
  const shadows = document.querySelectorAll(".avatar");
  const logos = document.querySelectorAll(".avatar-img");
  sections.forEach((e) => e.classList.add("section-skill"));
  shadows.forEach((e) => e.classList.add("shadow-skill"));
  logos.forEach((e) => e.classList.add("logo-skill"));
})

const shorts = [
  {
    avatar: '/assets/img/shorts/shorts3.webp',
    name: 'Minecraft pero NO puedo tocar el color AMARILLO',
    title: '',
    sponsor: 'https://www.youtube.com/shorts/d_ocOE-OFQ4'
  },
  {
    avatar: '/assets/img/shorts/shorts2.webp',
    name: 'SEGUNDAS MEGA APERTURA DE RULETAS EN Stumble Guys',
    title: '',
    sponsor: 'https://www.youtube.com/shorts/Wx7nDfxPotI'
  },
  {
    avatar: '/assets/img/shorts/shorts1.webp',
    name: 'ABRIENDO EL PASE DE Stumble Guys parte 2',
    title: '',
    sponsor: 'https://www.youtube.com/shorts/y3bkPIvvNXE'
  },
]

const videos = [
  {
    avatar: '/assets/img/shorts/video.webp',
    name: 'ABRIENDO EL PASE DE Stumble Guys parte 2',
    title: '',
    sponsor: 'https://www.youtube.com/shorts/y3bkPIvvNXE'
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      YouTube
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>Shorts</template>
    <template #members>
      <VPTeamMembers size="small" :members="shorts" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Videos</template>
    <template #members>
      <VPTeamMembers size="small" :members="videos" />
    </template>
  </VPTeamPageSection>
  <!-- <VPTeamPageSection>
    <template #title>Tools</template>
    <template #members>
      <VPTeamMembers size="small" :members="tools" />
    </template>
  </VPTeamPageSection> -->
</VPTeamPage>
