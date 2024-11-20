---
outline: deep
title: International Space Station Image Gallery
---
<script setup>
import SpaceStation from '@theme/components/Projects/SpaceStation.vue'
</script>

# International Space Station Image Gallery
This project demonstrates a simple image gallery showcasing photos of the International Space Station (ISS) over the years. The gallery is dynamically generated using JavaScript.
### Full Working Example:
<SpaceStation/>

## Explanation:

### HTML Structure

The HTML structure includes a header, article title, and a `div` (`#gallery`) where images and captions are dynamically inserted by JavaScript.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!--
        JavaScript 7th Edition
        Chapter 3 - Hands-on Project 3-2
        Author: Nick Stull
        Date: 09.24.2024
        Github Repo: tinkernerd/ISYS115
        Filename: project03-02.html
    -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ISS Image Gallery</title>
    <link rel="stylesheet" href="styles.css">
    <script src="project03-02.js" defer></script>
</head>

<body>
    <header>
        <h1>International Space Station Image Gallery</h1>
    </header>
    <article>
        <h2>International Space Station Images</h2>
        <div id="gallery"></div>
    </article>
</body>
</html>
```

### JavaScript Code Explanation

The JavaScript code creates a gallery of ISS images by looping through an array of captions. Each image has an accompanying caption, displayed in the gallery with a `<figure>` and `<figcaption>`.

### JavaScript Functions

The JavaScript function dynamically adds images and captions from the `captions` array to the gallery `div`:

```javascript
/* JavaScript 7th Edition
    Chapter 3
    Project 03-02

    Application to generate a slide gallery
    Author: Nick Stull
    Date: 2024.09.24
    
    Github Repo: tinkernerd/ISYS115

    Filename: project03-02.js
*/

let captions = [
    "International Space Station fourth expansion [2009]",
    "Assembling the International Space Station [1998]",
    "The Atlantis docks with the ISS [2001]",
    "The Atlantis approaches the ISS [2000]",
    "The Atlantis approaches the ISS [2000]",
    "International Space Station over Earth [2002]",
    "The International Space Station first expansion [2002]",
    "Hurricane Ivan from the ISS [2008]",
    "The Soyuz spacecraft approaches the ISS [2005]",
    "The International Space Station from above [2006]",
    "Maneuvering in space with the Canadarm2 [2006]",
    "The International Space Station second expansion [2006]",
    "The International Space Station third expansion [2007]",
    "The ISS over the Ionian Sea [2007]"
];

let htmlCode = "";

for (let i = 0; i < captions.length; i++) {
    htmlCode += `<figure>
        <img alt='' src='slide${i}.jpg' />
        <figcaption>${captions[i]}</figcaption>
    </figure>`;
}

document.getElementById("gallery").innerHTML = htmlCode;
```
---