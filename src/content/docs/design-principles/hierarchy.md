---
title: Hierarchy
description: How we considered the design principle of hierarchy in this project.
---
> A hierarchical outline of the content (with parent and child items organized in trees) helps users both understand and visualize complex information.
>
> Hierarchies that are too complex or which hide parent-child display fail to communicate. Find a balance that allows users to take in the hierarchy at a glance in a meaningful way.

## Hierarchy choices

- **Follow industry standards that favour left-sidebar navigation**: Continue to enforce our industry standard left site nav right "on this page" table of content in-page navigation. We intentionally rejected horizontal navigation **for docs content** to avoid forcing the reader to navigate in multiple ways. Similarly, the same navigation choices should not be offered in multiple ways (e.g. a horizontal navigation option that *also* can update the vertical sidebar in addition to the topic links). This is often confusing for a reader, makes them check **both** to see if they are in fact the same, and duplicates maintenance by keeping two systems in place. The reader should not have to need to learn how to navigate the website, but rather provide a consistent, vertical-focused option for each and every level of navigation (major topic, within-sidebar, within-page).
- **Improve content groupings**: Initially, all guides were listed under "Guides", which conveyed the *type* of content to the reader (self-contained, high-level topic help) but was otherwise flat and did not provide guidance / grouping for discovering the **topic** of the content. A further interation attempting to group the guides into related topics failed to create mutually-exclusive groupings: some pages could reasonably exist within multiple groups. The card sort activity allowed us to reimagine our groups to help readers navigate down the hierarchy tree from type to content and be more confident that there was a logical, "correct" choice at every branch of the navigation tree.
- **Create multiple sidebar navs**: Instead of one long sidebar, create independent, modular sidebar views that are more easily scannable at a glance and allow readers to understand the full site hierarchy, through progressive disclosure.