---
layout: page
title: Contact
og_image: index.png
---

<script setup lang="ts">
import Contact from '@theme/components/Contact/Contact.vue';

import { contactCardLink, footerSections } from './links';

</script>

<Contact
  :topLinks="contactCardLink"
  :footerSections="footerSections"
/>
