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
4. The **Branch Management** feature activated on your Studio Project. If you don't have it, you can only pull your Studio project without pushing the changes you've made locally. In this case, you have to manally copy your contribution in the Nuxeo Studio Designer interface, in the Resources tab.

{{#> callout type='info' heading='Git access'}}
Ensure you have generated a token to clone your Studio project by following the instructions on the [Nuxeo Studio Designer Git Access]({{page space='studio' page='nuxeo-studio-designer-git-access'}}) documentation page
{{/callout}}
{{#> callout type='warning' heading='Hot reload'}}
You must hot-reload your Nuxeo Studio Project once in your local server to allow the resources synchronisation
{{/callout}}

# Setup your dev environment

- Open https://connect.nuxeo.com/ and navigate to **My Applications** tab
- Find your project and copy the Git URL

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/How to Work with Git and Your Nuxeo Studio Project/Studio_Git_URL.png
    name: Studio_Git_URL.png
    studio_designer#screenshot#up_to_date
--}}
![Studio_Git_URL.png](nx_asset://967edd4f-47c6-4635-a206-f0e8b811f34f ?w=650,border=true)

- Create a new directory in your local workspace
- Clone the Studio project
  - Example: `git clone https://connect.nuxeo.com/nuxeo/git/my-studio-project.git`
- Synchronize your Git project with your Nuxeo server
  - `nuxeo sync --src <path of your project> --dest <path to the UI folder of your nuxeo server instance>`
  - Example: `nuxeo sync --src university-SANDBOX/studio/resources/nuxeo.war/ui/ --dest nuxeo-server-10.2-tomcat/nxserver/nuxeo.war/ui/`

You should see the synchronization process, with `MKDIR`, `COPY` or `DELETED` instructions on your command line editor:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/How to Work with Git and Your Nuxeo Studio Project/Nuxeo_sync_result.png
    name: Nuxeo_sync_result.png
    studio_modeler#screenshot#up_to_date
--}}
![Nuxeo_sync_result.png](nx_asset://078d268f-8f85-42b5-86ca-f2f67cb03893 ?w=650,border=true)

All the actions executed on your local Git project (creation, edition, deletion) are instantly replicated to your local Nuxeo server. To visualize your modifications, you have to refresh your web browser.

# Push your contribution into your Studio project

When you have finished your modifications, commit and push your code so it will be visible in the Nuxeo Studio Project.

A standard development flow with Studio Designer can be:
- Create a development branch from Nuxeo Studio
  - Example:`feature/new-doctype`
- Build some Modeler contribution which are needed for your Designer project
  - Example: Creation of a new document type (Modeler) and its associated layouts (Designer)
- Get your Studio Project locally so that you can work on the Designer contribution

```
git clone https://connect.nuxeo.com/nuxeo/git/my-studio-project.git
git pull feature/new-doctype
```

- Create your custom code.
  - Example: Rework the document type layouts and add some custom client side validations rules  

Once finished, push your contribution

```
git add -A
git commit -m 'New Document Type with Layouts'
git push
```

- Go back to your Studio Project
- Integrate your changes in your Studio Project by clicking the icon ![]({{file name='pull.png' page='studio-icons-index'}} ?w=32): The contributions will be shared between all the contributors


# Tricks and tips

- You can not add a `.gitignore` file in your project
- Ensure you're not modifying the default `nuxeo-<PROJECT-NAME>-bundle.html` file as all your contributions (the ones not generated by Studio Designer) should be centralized inthe `nuxeo-<PROJECT-NAME>-custom-bundle.html` tfile.

{{#> callout type='warning' heading='Cache management with FT 10.2'}}
As the cache management policy is strict on FT 10.2, you may have to clear your cache to visualize your changes
{{/callout}}
