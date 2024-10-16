---
title: Project background
description: A brief history and current state of the Astro Docs navigation.
---

## History

Astro Docs used to be organized mostly by **type of document**. This is helpful to let people know whether they should expect to find an API reference, or a guide on a particular topic. But as our list of features grew, that meant more and more guide pages, making the list longer, which wouldn't scale well. People were complaining that it was difficult to find the topic guide they wanted. 

This is from v2, and we've added so many more since then!

![image](https://hackmd.io/_uploads/By054Nrkkg.png)

We then tried to address this issue by breaking up guides further into guides *for what*: key Astro features? general web dev topics that you need to know how to do in Astro? things you get out of the box vs things you need to add on?

![image](https://hackmd.io/_uploads/H1I7BNSJyg.png)

The problem with this structure is that it **told readers something about the features they did not already know** instead of using the reader's perspective to be able to find content they were looking for.

For example, separating by "built in" vs "add on" **teaches** the reader that content collections just work out of the box, but integrations like UI frameworks and SSR adapters are things you add and configure. Helpful navigation categories should follow what the reader already knows so that even if collapsed, they can make meaningful navigation choices.

To address this, we regrouped "guides" into "use cases", categorizing our guides instead by what they allowed the reader to achieve:

![image](https://hackmd.io/_uploads/B13a8Vrk1x.png)

This did not, however, fix the problem of having more top-level categories with fewer items. If collapsed, then scanning the section headers important for context is easier. When expanded, it is difficult to give a top-level overview of our structure.
