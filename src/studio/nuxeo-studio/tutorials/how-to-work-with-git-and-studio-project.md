---
title: How to Work with Git and Your Nuxeo Studio Project
description: Learn how to use Studio Designer Git Access to create your Studio Designer contribution
review:
    date: '2018-10-24'
    status: ok
    comment: ''
toc: true
tree_item_index: 1000
---

Using Git in a Studio project and synchronize your sources with a local instance makes the development process of custom elements (pages, menus, buttons...) faster.

{{#> callout type='info' heading='Nuxeo University'}}
Watch the [WebUI Customization and Nuxeo Frontend Development](https://university.nuxeo.com/learn/course/external/view/elearning/164/webui-customization-and-nuxeo-frontend-development) University course.
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/WEBUI_CUSTOMIZATION_FRONTEND_DEV
    name: Screenshot 2018-10-22 at 14.58.21.png
    1.1.3#screenshot#up_to_date
--}}
![WEBUI_CUSTOMIZATION_FRONTEND_DEV](nx_asset://233ef043-0939-4ff6-88a6-13dcb92660b0 ?w=450,border=true)
{{/callout}}

# Prerequisite

1. A **running instance** of Nuxeo server on your machine (http://localhost:8080/nuxeo/) to deploy your configuration
2. The **nuxeo CLI** development tool to execute the replication operation. Please refer to [Nuxeo CLI]({{page space='nxdoc' page='nuxeo-cli'}}) to install it on your computer
3. A **Studio project** to create the project which will be cloned locally
4. The **Branch Management** feature activated on your Studio Project. If you don't have it, you can only pull your coding without pulling it

{{#> callout type='info' heading='Git access'}}
Ensure you have created a token to clone your Studio project by following the instructions on the [Nuxeo Studio Designer Git Access]({{page space='studio' page='nuxeo-studio-designer-git-access'}}) documentation page
{{/callout}}
{{#> callout type='warning' heading='Hot reload'}}
Your studio project should be hot-reloaded in your server once at least to load the Nuxeo Studio project web resources
{{/callout}}

# Setup your dev environment

- Open https://connect.nuxeo.com/ and navigate to **My Applications** tab
- Find your project and copy the git URL

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/How to Work with Git and Your Nuxeo Studio Project/Studio_Git_URL.png
    name: Studio_Git_URL.png
    studio_designer#screenshot#up_to_date
--}}
![Studio_Git_URL.png](nx_asset://967edd4f-47c6-4635-a206-f0e8b811f34f ?w=650,border=true)

- Create a new directory in your local workspace
- Clone the Studio project
  - `git clone https://connect.nuxeo.com/nuxeo/git/my-studio-project.git` for example
- Synchronize your git project with your Nuxeo server
  - `nuxeo sync --src <path of your project> --dest <path to the UI folder of your nuxeo server instance>`
  - Example: `nuxeo sync --src university-SANDBOX/studio/resources/nuxeo.war/ui/ --dest nuxeo-server-10.2-tomcat/nxserver/nuxeo.war/ui/`

You should read the following lines in your command line editor:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/How to Work with Git and Your Nuxeo Studio Project/Nuxeo_sync_result.png
    name: Nuxeo_sync_result.png
    studio_modeler#screenshot#up_to_date
--}}
![Nuxeo_sync_result.png](nx_asset://078d268f-8f85-42b5-86ca-f2f67cb03893 ?w=650,border=true)

All the actions executed on your local project (creation, edition, deletion) are instantly replicated to your local Nuxeo server. To load your modification, all you need to do is to refresh the Web UI webpage to visualize your changes.

# Push your contribution into your Studio project

When you've finished your project, you can commit and push your changes back to your Nuxeo Studio Project.

A standard development flow with Studio Designer can be:
- Create a development branch from Nuxeo Studio
  - `feature/new-admin-interface` for example
- Build some Modeler contribution which are needed for your Designer project
  - Typically to create a page provider
- Get your Studio project locally so that you can work on the Designer contribution

```
git clone https://connect.nuxeo.com/nuxeo/git/my-studio-project.git
git pull feature/new-admin-interface
```

- Create your custom code. Once finished, push your contribution

```
git add -A
git commit -m 'New Admin Interface'
git push
```

- Go back to your Studio Project on https://connect.nuxeo.com and integrate your changes in your Studio Project by clicking the icon ![]({{file name='pull.png' page='studio-icons-index'}} ?w=32) so that it can be available for all project contributors, and create the Studio marketplace package



# Tricks and tips

- You can not add a `.gitignore file` in your project
- Ensure you're not editing the default `nuxeo-<PROJECT-NAME>-bundle.html` file, but the `nuxeo-<PROJECT-NAME>-custom-bundle.html` to make your element imports and your slot contributions

{{#> callout type='warning' heading='Cache management with FT 10.2'}}
As the cache managemnt policy is strict on FT 10.2, you may have to clear you cache to visualize your changes
{{/callout}}
