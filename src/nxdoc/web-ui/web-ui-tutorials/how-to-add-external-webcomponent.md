---
title: 'HOWTO: Add an External Web Components'
review:
    comment: ''
    date: '2019-08-22'
    status: ok
toc: true
details:
    howto:
        excerpt: Add an External Web Components
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - lts2017-ok
    - webui
    - designer
tree_item_index: 1700
---

{{! excerpt}}
In this tutorial you will learn how to import an external web components within your Nuxeo Studio project.
{{! /excerpt}}

## Use Case

To fit specific business need, the element catalog can miss specific elements. To solve this problem, it would be useful **to import external web elements** and reuse them in document type layouts, search layouts or any other UI element in Nuxeo Web UI.

In this tutorial, we will import a **colour picker element**.

## Build the element

The first step is to build the element locally. It can be with `npm`, `bower` etc. In this case, the element is available on [npmjs.com](https://www.npmjs.com/package/@fooloomanzoo/color-picker), and it can be built with:

```
npm i @fooloomanzoo/color-picker
```

At the end of the build, you would get:

```
+ @fooloomanzoo/color-picker@3.0.2
added 12 packages from 5 contributors and audited 78 packages in 11.245s
found 0 vulnerabilities
```

Thn navigate to `node_modules` > `@fooloomanzoo`


...

## Upload the external element

Open the **Resources** tab of Nuxeo Studio Designer and upload the file which were generated. You can use [Git Access]({{page version='' space='studio' page='nuxeo-studio-designer-git-access''}}).

## Reference the external elements

The external element should be referenced in the main `*.bundle.html` file with html imports:

```
<link rel="import" href="tabs/application-attachments.html">
```

## Use the external elements

You can reuse your custom element from any Nuxeo element with its own synthax: `<color-picker>`

## Security aspects

Using external elements involves to take security controls: in particular, it is important to check the element dependencies, in particular in termes of licencing and security risks. The element compatibility should be checked when Nuxeo Web UI addon is upgraded.
