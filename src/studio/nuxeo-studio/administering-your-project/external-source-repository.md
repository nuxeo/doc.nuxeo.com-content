---
title:  External Source Repository
description: Nuxeo Studio Integration with External Git Repositories
review:
    comment: ''
    date: ''
    status: ok
toc: true
tree_item_index: 400
---


Managing your Studio project sources on your own is now possible with the External Source Repository feature. It allows more flexibility on your project sources lifecyle:
* Pull requests
* History edition / Force push
* Custom hooks and validation workflows
* etc...

{{#> callout type='info'}}
External Source Repository configuration requires specific permissions, please contact Support to be granted.
{{/callout}}

{{#> callout type='warning'}}
Managing your project sources makes you responsible for it. Nuxeo/Hyland will not be responsible anymore for backups or any data loss
{{/callout}}


### Step 1: Navigate to Settings to enable Git external repository

1. Within your Studio project, navigate to the top-right corner and locate the "Settings" button.

    ![Settings Button]({{file name='settings.png'}}?w=650,border=true)

OR
1. From the Connect dashboard "My Studio Projects" page, locate your Studio project and click on the "Edit" button.

### Step 2: Configuring Git Credentials

1. On your project settings page, navigate to the "source repo" tab.

    ![Source Repo Config Tab]({{file name='sourcerepo.png'}}?w=650,border=true)

2. Fill the form with your external Git repository URL and the associated credentials.

    {{#> callout type='warning'}}
    Requirements for the external Git repository are the followings:
    - It has a "master" branch
    - It is empty or has the required folder structure: this structure can change along with Studio versions so it's recommended to start with an empty repository or with a recent copy of an existing Studio project sources.

    **PRO TIP:** A Studio project sources can be copied either by direct Git access (https://doc.nuxeo.com/studio/how-to-work-with-git-and-studio-project/) or within the .metadata folder of Studio project zip package
    {{/callout}}

3. Enable the "External Source Repository" toggle button and click "Save".

Once the enablement process is complete, your Studio project is now linked to the specified external Git repository associated with your studio project.

![External Git Linked Project]({{file name='linkedrepo.png'}}?w=650,border=true)

---
## The WIP branch concept
While editing your project using the Studio UI, you will notice the creation of branches with the following pattern in your external Git repository:

`wip/[USERNAME]_[USERHASH]/[FEATURE_BRANCH]`

These branches are used as workspaces for each user working on a specific feature branch and are not meant to be edited "manually" unless you know what you are doing, otherwise the corresponding user may not be able to load the UI.
Nevertheless, playing with these branches can sometimes be useful and allows you to control what is effectively loaded when doing hotreloads for example !

## Commit preferences
The recommended Commit preferences when External Source Repository is configured is "Advanced" or "Intermediate", the "Simple" mode will have degraded performances when hitting the "Save" button has the automatic pull/merge will be triggered every time.
