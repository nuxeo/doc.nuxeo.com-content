---
title: How to have a drag-n-drop-able icon in a content view in JSF
description: How to have a drag-n-drop-able icon in a content view in JSF
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - jsf-jsfdevelopment
    - drag-n-drop
    - jsf
    - studio

---
# How to have a drag-n-drop-able icon in a content view in JSF?
## Problem
When adding the widget “**Icon and document type**” in a content view, the icon is displayed correctly but it cannot be drap-and-dropped in the left tree, while this is possible with the default content view.  
How to make this possible?
## Solution
In the definition of the content view, in the “Result” tab, in the section “Result columns” , there are 2 zones, organized in lines:

+ The first line defines the column title and the column display type
+ The second line defines the content of the lines column by column.

In the first line of definition of columns and their display type, you have to edit the column “**icon and document type**” and enter in the box “**Style class**” the entry

    iconColumn

This enables the displayed icon to be dragged and dropped in the left directory tree to move files between directories


2019-06-01T17:37:49.566Z
## (c) Nuxeo Support Knowledge Base Outline 2019
