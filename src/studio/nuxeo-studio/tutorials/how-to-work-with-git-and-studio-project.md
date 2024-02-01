---
title: 'HOWTO: Develop Faster with Git and Your Nuxeo Studio Project'
description: Learn how to use Studio Designer Git Access to create your Studio Designer contribution
review:
    date: '2018-10-24'
    status: ok
    comment: ''
details:
  howto:
    excerpt: 'Learn how to synchronize your Studio sources with a local instance and to make the development process of custom elements'
    level: 'Advanced'
    tool: 'Nuxeo CLI'
    topics: 'DevTools, Deployment'
labels:
  - howto
toc: true
tree_item_index: 1000
---
{{! excerpt}}
Using Git in a Nuxeo Studio project and synchronizing your sources with a local instance makes the development process of custom elements (pages, menus, buttons...) faster.
{{! /excerpt}}

{{#> callout type='info' heading='Hyland University'}}
Watch the [Web UI Customization and Nuxeo Frontend Development](https://university.hyland.com/courses/e4174) University course.
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/WEBUI_CUSTOMIZATION_FRONTEND_DEV
    name: Screenshot 2018-10-22 at 14.58.21.png
    1.1.3#screenshot#up_to_date
--}}
![WEBUI_CUSTOMIZATION_FRONTEND_DEV](/nx_assets/233ef043-0939-4ff6-88a6-13dcb92660b0.png ?w=450,border=true)
{{/callout}}

## Concept

Nuxeo Studio Designer allows you to easily create standard components as document type layouts, new buttons or search forms. It is recommended to quick start on Web UI customization as it manages the relation between related elements, it creates all the necessary slot contributions and brings autocompletion, etc.

The Nuxeo Studio Designer configuration is available on the [Resources tab]({{page version='' space='studio' page='resources-designer'}}). It offers a physical representation of the content which will be deployed in your Nuxeo Server, in the `/nxserver/nuxeo.war/ui` folder. From this location, it is possible to edit the generated elements to fit your needs. Once your work is done, save your changes, and do a hot reload to deploy your Studio project.

This process presents one disadvantage: you need to hot reload every time you need to check your changes. As a workaround, you can still directly edit the file deployed on your server, but you need to replicate it in your Studio Configuration so that it is bundled in your Studio Project. To solve this issue, we have created the **Nuxeo Studio Designer Git Access**.

## Prerequisites

- A **running instance** of Nuxeo Server on your machine (example: http://localhost:8080/nuxeo/) to deploy your configuration.
- The **Nuxeo CLI** development tool to execute the replication operation. Please refer to [Nuxeo CLI]({{page space='nxdoc' page='nuxeo-cli'}}) to install it on your computer.
- A **Studio Project** connected to your Nuxeo Server to create the project which will be cloned locally.
- The **Branch Management** feature activated on your Studio Project. If you do not have it, you can only pull your Studio project without pushing the changes you have made locally. In this case, you have to manally copy your contribution in the Nuxeo Studio Designer interface, in the Resources tab.

{{#> callout type='info' heading='Git access'}}
Make sure a token to clone your Studio project has been created by following the instructions on the [Nuxeo Studio Designer Git Access]({{page space='studio' page='nuxeo-studio-designer-git-access'}}) documentation page.
{{/callout}}

{{#> callout type='warning' heading='Hot reload'}}
You must hot-reload your Nuxeo Studio Project once in your local server to allow the resources synchronisation
{{/callout}}

## Setup Your Dev Environment

1. Open https://connect.nuxeo.com/ and navigate to **My Applications** tab
1. Find your project and copy the Git URL
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/How to Work with Git and Your Nuxeo Studio Project/Studio_Git_URL.png
    name: Studio_Git_URL.png
    studio_designer#screenshot#up_to_date
--}}
![Studio_Git_URL.png](/nx_assets/967edd4f-47c6-4635-a206-f0e8b811f34f.png ?w=650,border=true)
1. Create a new directory in your local workspace:
  ```
  mkdir my-custom-project
  ```
1. Go to `my-custom-project`:
  ```
  cd my-custom-project
  ```
1. Clone the Studio project:</br>
  - Example: `git clone https://connect.nuxeo.com/nuxeo/git/my-studio-project.git`
1. Synchronize your git project with your Nuxeo server:
  ```
  nuxeo sync --src <path of your project> --dest <path to the UI folder of your nuxeo server instance>
  ```
  - Example: `nuxeo sync --src university-SANDBOX/studio/resources/nuxeo.war/ui/ --dest nuxeo-server-10.2-tomcat/nxserver/nuxeo.war/ui/`

You should see the synchronization process, with `MKDIR`, `COPY` or `DELETED` instructions on your command line editor:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/How to Work with Git and Your Nuxeo Studio Project/Nuxeo_sync_result.png
    name: Nuxeo_sync_result.png
    studio_modeler#screenshot#up_to_date
--}}
![Nuxeo_sync_result.png](/nx_assets/078d268f-8f85-42b5-86ca-f2f67cb03893.png ?w=650,border=true)

All the actions executed on your local Git project (creation, edition, deletion) are instantly replicated to your local Nuxeo server. To visualize your modifications, you have to refresh your web browser.

## Push Your Contribution into Your Studio Project

When you have finished your modifications, commit and push your code so it will be visible in the Nuxeo Studio Project.

A standard development flow with Studio Designer can be:
1. Create a development branch from Nuxeo Studio
  - Example:`feature/new-doctype`
1. Build some Modeler contribution which are needed for your Designer project
  - Example: Creation of a new document type in Studio Modeler and its associated layouts in Studio Designer
1. Get your Studio Project locally so that you can work on the Designer contribution
```
git clone https://connect.nuxeo.com/nuxeo/git/my-studio-project.git
git pull feature/new-doctype
```
1. Create your custom code.
  - Example: Rework the document type layouts and add some custom client side validations rules

Once finished, push your contributions:
```
git add -A
git commit -m 'New Document Type with Layouts'
git push
```
1. Go back to your Studio Project on https://connect.nuxeo.com
1. Integrate your changes in your Studio Project by clicking the icon ![]({{file name='pull.png' page='studio-icons-index'}} ?w=32): The contributions will be shared between all the contributors.


## Tips and Tricks

- A `.gitignore` file can not be added to your project
- Make sure that you are not editing the default `nuxeo-<PROJECT-NAME>-bundle.html` file, but the `nuxeo-<PROJECT-NAME>-custom-bundle.html` to make your element imports and your slot contributions

<div class="row" data-equalizer data-equalize-on="medium">

<div class="column medium-6">

{{#> panel heading='Related Documentation'}}
- [Studio Designer Git Access]({{page page='nuxeo-studio-designer-git-access'}})
{{/panel}}

</div>

</div>
