---
layout: page
title: About Me
og_image: index.png
---

<script setup lang="ts">
import Contact from '@theme/components/About/About.vue';

import { AboutLink, footerSections } from './links';

</script>

<Contact
  :ContactLink="AboutLink"
  :footerSections="footerSections"
/>
