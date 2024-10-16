---
title: Project goals
description: A statement of the goals of the navigation resdesign.
---

## Current Issues


While our categories are more "meaningful," we are already starting to see how this structure is not serving us and may not scale:

- we are already seeing areas of overlap when attempting to add or update pages
    - "content" and "data" are similar concepts, especially with the new content layer API
    - Is Contentful a CMS?
- they are not easy to scan at a glance
    - while any one header might have sensible contents, part of navigation is choosing between mutually exclusive categories.
    - You often know you're choosing the *correct* categoy by seeing that none of the others are what you want. 
    - "Press 1 for . . . " (how often do you wait until you hear whether there's a "better" choice?)
- We hear negative feedback about the current navigation experience:
    - "I have trouble finding the page I'm looking for"
    - "I feel overwhelmed looking at the sidebar"
    - These could come from poorly-chosen sections/groupings, showing too much at once, a lack of scannability...
    - We won't address cases here where the information is not on the "correct" or expected page. This may also be the case in some situations! But it's not the majority of our navigation problems.

## Areas of Exploration

- having some sections collapsed
    - this ONLY works if you expect people NOT to need to open them to see what's inside
    - more clicks on "wrong" headings = more frustration
- different category groupings
    - rethinking how our content is organized so that it is where people looking for it will find it
- multiple sidebars depending on the larger nav item chosen
    - tabs/vertical links to allow people to filter to one particular sidebar that is easier to scan and find what they're looking for
    - these headings **must** be mutually exclusive and obvious to the reader so they are not checking inside each one
- visual tweaks to guide readers' eyes to specific sections and/or break up feelings of being overwhelmed or "wall of text" fatigue
    - icons or badges?
    - horizontal separator lines