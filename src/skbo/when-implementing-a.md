---
title: When implementing a custom sort order in tree_children, I notice a different behavior in JSF and WebUI
description: When implementing a custom sort order in tree_children, I notice a different behavior in JSF and WebUI
review: 
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - jsf-jsfdevelopment
    - webui-webuidevelopment
    - jsf
    - tree
    - webui

---
# When implementing a custom sort order in tree_children, I notice a different behavior in JSF and WebUI. How to overcome this?
## Problem
You implement a custom sort-order in the tree_children page provider, and you expect it to be effective both in WebUI and JSF in the same way. However, this is not the case. What might be happening under the hood?
## Solution
If the container of the documents displayed have the fact Children of this document are orderable , then WebUI and JSF behave differently:

Since 9.10-HF03, WebUI react by default as JSF does

However, this is not implemented in the same way at all in JSF and WebUI.

Here,the default tree_children is overwritten by the application
+ WebUI implementation reacts as the new contribution says to do.
+ JSF implementation reacts in respecting the orderable nature of the content (which is respecting the application design decision)
If you want to have WebUI react as JSF does, you need to add


     <sort column="ecm:pos" ascending="true" />

as the first sort order in your contribution.

To have JSF reacting the same as WebUI, you need to remove the orderable nature of the content of the container.


2019-06-01T17:38:07.256Z
## (c) Nuxeo Support Knowledge Base Outline 2019
