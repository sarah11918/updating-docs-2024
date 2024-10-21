---
title: Five Hat Racks
description: How we considered the design principle of five hat racks in this project.
---

> You can organize content in 5 ways:
>
> - Alphabet
> - Time
> - Location
> - Continuum (degree)
> - Category (likeness)
>
> Generally, documentation is grouped by category more than location (except with context-sensitive help)

## In-section organizational choices

- **Stragetic use (or non-use) of alphabetical sort within sections**: Alphabetical ordering is useful when people are looking up the name of a thing they know, such as in a glossary. However, alphabetical ordering is not generally a useful way to list out topics in a sidebar section when people don't know in advance what content exists, or what it might be called. (e.g does Astro docs have a guide for "images" or "assets" or "media" or...?) We do list our API modules in alphabetical order as these are named, equivalent items with no logical sequence, nor assumption as to which may be more popular. However, this is not our general organization strategy.
- **Structuring the Start topic for reader entry journeys**: One of the results of the card sort activity was that "Why Astro" and "Installation" were similar, perhaps equivalent starting points into docs. Participants gave strong weighting to "Why Astro?" as a key starting place for a docs journey. We are considering the journey through docs especially in the early ang getting started pages to lead readers through a particular sequence and progression of pages so they can both get up and running and learn basic information before being presented with more indepth content.
- **In-section grouping by use/popularity**: After the getting started journey, it is more difficult to predict a path that readers might take next. In fact, their journey through the rest of the docs may not be a "journey" at all, only coming to visit specific topics or reference items as they have specific needs. In most cases, pages within sections will be ordered based on use as determined by web traffic stats, integration installations, support topic threads etc. so that the pages people use the most are easy to find and navigate to. This may also involve a "popular" subsection to allow easy access to integrations that are an order of magnitude more popular than others, rather than force them to travel through the hierarchy for very common docs such as React and Tailwind.