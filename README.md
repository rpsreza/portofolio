<p align="center">
    <img alt="RPS Logo" src="#" />
</p>
<h1 align="center">
  RPS Portfolio
</h1>

<p align="center">
  <a href="#?utm_source=github&utm_medium=portfolio">
    <img alt="Website" src="https://img.shields.io/badge/-website-blue?style=flat-square">
  </a>
  <a href="#">
    <img src="https://img.shields.io/netlify/e6d5a4e0-dee1-4261-833e-2f47f509c68f?style=flat-square" alt="Netlify Build Status" />
  </a>
  <a href="#">
  <img src="https://img.shields.io/github/last-commit/rpsreza/portofolio?style=flat-square" alt="Last Commit" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=RPourdian">
    <img src="https://img.shields.io/twitter/follow/RPourdian.svg?label=Follow%20@RPourdian" alt="Follow @RPourdian" />
  </a>
</p>

Minimalistic portfolio of RPS.

### Adding a new project

New projects will be shown on the index page of this theme and can be added by creating MDX files inside `content/projects`. General setup:

1. Create a new folder inside `content/projects`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add images to the created folder (from step 1)
1. Reference your desired images as your `cover` in the frontmatter
1. Write your content below the frontmatter (optional)
1. Use `defer` to opt-in into Deferred Static Generation (DSG) (optional)
1. Add a `slug` to the frontmatter to use a custom slug, e.g. `slug: "/my-slug"` (Optional)

**Frontmatter reference:**

```md
---
cover: './sean-foley-0JD7kvxAq0Y-unsplash.jpg'
date: '2019-09-10'
title: 'Emilia'
defer: false
slug: '/my-slug'
areas:
  - Neon
  - Lights
---
```

The frontmatter alone is enough, if you'd like to add additional content you can do so by writing your content (as usual with MDX) below the frontmatter. It'll be displayed in the header of the project below the date and areas.

### Change your `static` folder

The `static` folder contains the icons, social media images and `robots.txt`. Don't forget to change these files, too! You can use [Real Favicon Generator](https://realfavicongenerator.net/) to generate the image files inside `static`.


