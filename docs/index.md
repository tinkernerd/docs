---
layout: page
title: TinkerDocs
og_image: index.png
---

<script setup lang="ts">
import Home from '@theme/components/Home/Home.vue';
import { homeTopLinks, homeExternalLinks, footerSections } from './links';
</script>

<Home
  :topLinks="homeTopLinks"
  :externalLinks="homeExternalLinks"
  :footerSections="footerSections"
/>
