---
title: How to inherit metadata from parent at creation using WebUI
description: How to inherit metadata from parent at creation using WebUI
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - webui-webuidevelopment
    - automation
    - webui

---
# How to inherit metadata from parent at creation using WebUI?
## Problem
Using the new WebUI, you want to automatically fill some fields in the creation with the parent metadata
## Solution
When you were using the JSF UI, you used to define an Event Handler in Studio which listened to the “**Empty Document Created**” event and in the associated Automation chain, the parent document was fetched by the operation “**Fetch > UI Current Document**” from the Seam context.

When you use the Web UI, you cannot fetch the parent from Seam context (obviously because there is no seam context). The parent has to be retrieved from the properties of the event caught by your Event Handler. You will use this expression:

    @{Event.context.getProperty('parentPath')}"

*Example*  
Here is an example of Automation chain which will automatically fill the document title with a value computed from the parent title

    - Context.FetchDocument
    - Context.PushDocument
    - Repository.GetDocument:
        value: "@{Event.context.getProperty('parentPath')}"
    - Context.SetInputAsVar:
        name: parentDoc
    - Context.PopDocument
    - Document.SetProperty:
        xpath: "dc:title"
        save: "false"
        value: "Son of @{Context[\"parentDoc\"].title}"


2019-06-01T17:37:58.150Z
## (c) Nuxeo Support Knowledge Base Outline 2019
