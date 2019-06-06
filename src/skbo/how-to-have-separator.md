---
title: How to have separators in the breadcrumb in JSF
description: How to have separators in the breadcrumb in JSF
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - jsf-jsfdevelopment
    - studio-customization
    - css
    - jsf
    - studio

---
# How to have separators in the breadcrumb in JSF?
## Problem
In the breadcrumb at the top of the page, there is no separator between the different levels.  
This is disturbing users thinking there is only 1 level (containing spaces), as having separators is mostly “standard”.
## Solution
Default presentation styles are a basis on top of which you can add your customizations through the CSS tab in the “**Studio > Branding**” section.
In this case, you can add the following styles to retrieve the separators:

    /* Add separators in breadcrumb */
    .breadcrumbs a, .breadcrumbs a:link, .breadcrumbs a:visited {
      padding: 0 .5em 0 .2em !important; }

    .breadcrumbs a::after {
      display: block;
      position: absolute;
      content: '/';
      top: 0;
      right: 0; }


2019-06-01T17:37:48.380Z
## (c) Nuxeo Support Knowledge Base Outline 2019
