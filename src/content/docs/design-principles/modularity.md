---
title: Modularity
description: How we considered the design principle of modularity in this project.
---

> Break up content into independent topics that can be viewed, understoo and updated independent of the whole. A topc or chunk should not be so interconnected with the whole that it cannot stand on its own

## Modularity choices

- **Multiple sidebars accessible by vertical topics**: One, long sidebar became difficult to find specific concepts. Our card sort activity allowed us to think of the sidebar contents in independent sections to create multiple, smaller sidebars that could be easily reached and more navigable. Importantly, the topics must be mutually exclusive and clear enough that it is obvious which content to expect in which section, so that a reader searching for a topic couldn't be confused about which topic section contained which content.
- **Combine pages duplicating topics**: we received feedback doing the [card sort]() activity that we had **two** different pages devoted to rendering: a basic explanation of the different modes then additionally a page devoted to server / on-demand rendering. In tne new version, we have combined this into a single page so that content isn't duplicated or reading both pages isn't necessary for understanding the entire topic as it relates to building an Astro site. Additionally, this page has been reformulated into a guide to enabling on-demand rendering instead of a basic topic introduction to rendering modes, which are general web dev and not Astro-specific topics.
- **Extract `astro:*` modules into their own pages**: We had one, very long "API reference" page which was not only difficult to navigate, but contained too many items for Algolia to index for our search widget! Recognizing that these are independent API items that do not need collocation, and in fact might be easier to maintain as separate pages, we broke these into distinct pages that are easier to read, discover, and update as independent page routes. This reduces the chance of having multiple, unrelated PRs updating the same file and shorter files are less intimidating to update for casual community contributors.
