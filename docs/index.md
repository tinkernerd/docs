---
layout: page
title: TinkerDocs
description: This is the home page of TinkerDocs, providing an overview of the platform and quick access to various sections.
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
