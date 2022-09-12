---
home: true
heroImage: img/eXo.png
tagline: eXo documentation
actionText: Quick Start →
actionLink: /guide/
customFeatures:
- title: Getting started
  details: Getting started documentation
  link: /guide/getting-started/Introduction
- title: Developer Guides
  details: Guides to follow
  link: /guide/developer-guide/
footer: Made by eXo with ❤️
---

<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.customFeatures">
    <h2><a v-bind:href="feat.link">{{ feat.title }}</a></h2>
    <p>{{ feat.details }}</p>
  </div>
</div>