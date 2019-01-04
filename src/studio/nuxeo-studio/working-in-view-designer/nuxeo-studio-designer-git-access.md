---
title: Studio Designer Git Access
description: Learn how to use direct access to the underlying Git project for Studio Designer.
review:
    comment: ''
    date: ''
    status: ok
toc: false
tree_item_index: 500
---

## About Studio Designer Git Access
When configuring Web UI, Studio Designer allows to edit the generated files directly and add your custom HTML / JavaScript code. This allows developers to do advanced customization.

{{#> callout type='info' heading='Nuxeo University'}}
Watch the [Nuxeo Studio Designer Git Access](https://university.nuxeo.com/nuxeo/learn/course/external/view/elearning/160/NuxeoFrontendDevelopment-Howtocreateacustomelement) University video
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/GIT_ACCESS
    name: Screenshot 2018-10-22 at 15.42.28.png
    studio_designer#screenshot#up_to_date
--}}
![GIT_ACCESS](nx_asset://198d7099-b926-4cb9-ae1e-e12459b39b35 ?w=450,border=true)
{{/callout}}

While this is great, the browser is not the right place to do anything beyond simple tweaks, and as a developer, we understand that you want to use the tools you are familiar with. Nuxeo Studio Designer Git access aims at solving this problem: you can clone your project, edit it locally with your favorite tools and benefit from advanced Git features, then push your changes back in Nuxeo Studio.

## Who Can Use It?

Studio Designer Git Access is available to any customer benefiting from the branch management feature.
To activate it, request it through a support ticket by indicating:
- Who should be given access
- Which access these people should obtain (read or write)
- On which project(s)

## Feature Scope and Restrictions

 Nuxeo Studio Designer Git access has been designed to allow for productivity while keeping reasonable restrictions for security and ease of use reasons.

### Scope

- Access to Nuxeo Studio Git repositories through HTTPS protocol.
- Leverage the full power of Git locally.
- Branches can be created and pushed as long as their name starts with `feature/` (similar to Studio).
- Push to any branch, including master.
- Create and push tags.
- Launch git commands on your repositories, with some restrictions.

### Restrictions

- Only **Studio Designer files** can be managed. Changes to the Studio Modeler side of your project will automatically be rejected as we currently have no way to ensure the validity of your configuration made through this mean.
- **We don't and will never allow rewriting history** to make sure you can always revert your project to a working state. Push force, for instance, will be rejected.
- **Deleting Studio branches from Git is not allowed**.

## How to Use Git Access

### Cloning Your Project

As a prerequisite, a Git client should be installed on your computer.

Once logged in to Nuxeo Online Services:
1. Generate a [personal access token]({{page page='token-management'}}) in the `My Tokens` tab if you don't have one yet. It will be requested as a password to clone the project.
1. Visit the `My Applications` tab
1. Copy the Git URL to clone your project
1. On your computer, clone your project using your Git client (typically `git clone [project URL]`). When prompted, use your Nuxeo Online Services username and your personal access token.

To avoid having to type your token's content repeatedly, we recommend storing it using Git's standard `.netrc` file mechanism. On Linux operating systems, it is generally created under `~/.netrc`. On Windows machines, you have to create a `_netrc` file in `%HOME%` (More information [here](https://stackoverflow.com/questions/6031214/git-how-to-use-netrc-file-on-windows-to-save-user-and-password#6031266)). The file contains the following lines:
```
machine connect.nuxeo.com
login yourNOSLoginHere
password yourTokenHere
```

{{#> callout type='tip' heading='Security management'}}
If your computer is compromised or stolen, then it is possible to revoke the token access directly from Nuxeo Online Services: Your password remains safe and no one can use the token to launch commands anymore.
{{/callout}}


### Making Changes
The recommended flow is the following:

1. On your computer, create a branch for your changes. It has to start with `feature/`.
1. Check out the `feature/your-branch-name` branch
1. Make some changes
1. Commit and push your changes

{{#> callout type='info' heading='Branch Usage'}}
It is also possible to use any existing feature branch (feature branches are all named `feature/branch-name`) or master to push your changes. Nevertheless, we recommend using a dedicated branch to have more control.
{{/callout}}

### Checking and Integrating the Result
Have a look at your changes in Studio:

1. Check out the `feature/your-branch-name` branch if needed
1. Pull changes.
    Studio regularly checks for new commits to pull.
1. You can follow the procedure described in the [Studio configuration review how-to]({{page page='how-to-review-nuxeo-studio-configuration'}}) to integrate your changes in the master branch.

<div class="row" data-equalizer data-equalize-on="medium">

<div class="column medium-6">

{{#> panel heading='Related Documentation'}}
- [How to Develop Faster with Git and Your Nuxeo Studio Project]({{page page='how-to-work-with-git-and-studio-project'}})
{{/panel}}

</div>

</div>
