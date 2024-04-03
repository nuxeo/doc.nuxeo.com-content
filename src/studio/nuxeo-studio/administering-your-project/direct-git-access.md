---
title: Studio Direct Git Access
description: Learn how to use direct Git access to your Studio project.
review:
  comment: ''
  date: ''
  status: ok
toc: true
tree_item_index: 500
---

## About Studio Direct Git Access

When using Studio UI, Modeler and Designer allow to edit some files (Javascript, HTML, JSON, XML) directly in the browser.

While this is great, the browser is not the right place to do anything beyond simple tweaks, and as a developer, we understand that you want to use the tools you are familiar with. Studio Direct Git access aims at solving this problem: you can clone your project, edit it locally with your favorite tools and benefit from advanced Git features, then push your changes back in Nuxeo Studio.

## Who Can Use It?

Studio Direct Git Access is available to any customer benefiting from the branch management feature.
To activate it, request it through a support ticket by indicating:

- Who should be given access: username?
- Which access these people should obtain : read, write, force push, only designer files?
- On which project(s)?

## Feature Scope and Restrictions

Studio Direct Git access has been designed to allow for productivity while keeping reasonable restrictions for security and ease of use reasons.

### Scope

- Access to Studio Git repositories through HTTPS protocol.
- Leverage the full power of Git locally.
- Branches can be created and pushed as long as their name starts with `feature/` (similar to Studio).
- Push to any branch, including master.
- Create and push tags.
- Launch git commands on your repositories, with some restrictions.

### Restrictions

- By default, **only Studio Designer files can be pushed on any branch**. Nevertheless, changes to the Studio Modeler files can be allowed through specific request (support ticket). This privilege is granted by user and will apply to all the Studio project she has Git write access on.
- By default, **rewriting history is not allowed**. But again, force push on feature branches (not master) can be allowed through specific request (support ticket). This privilege is granted by user and by project.
- **Deleting Studio branches from Git is not allowed**.

{{#> callout type='warning' heading='AT YOUR OWN RISKS'}}
Asking for Modeler files update and/or push force permission on your project sources makes you responsible for it. Nuxeo/Hyland support team may not be able help you if you break the loading of your project in the UI or lose some work while rewriting your source history, ask only if you know what you are doing!
{{/callout}}

## How to Use Git Access

### Cloning Your Project

{{! multiexcerpt name="cloning-git-studio-project"}}
As a prerequisite, a Git client should be installed on your computer.

Once logged in to Nuxeo Online Services:

1. Generate a [personal access token]({{page page='token-management'}}) in the `My Tokens` tab if you don't have one yet. It will be requested as a password to clone the project.
1. Visit the `My Applications` tab
1. Copy the Git URL to clone your project
1. On your computer, clone your project using your Git client (typically `git clone [project URL]`). When prompted, use your Nuxeo Online Services username and your personal access token.

To avoid having to type your token's content repeatedly, we recommend storing it using [Git's standard credentials mechanisms](https://git-scm.com/docs/gitcredentials).

{{#> callout type='tip' heading='Security management'}}
If your computer is compromised or stolen, then it is possible to [revoke the token]({{page page='token-management'}}#revoking-a-token) access directly from Nuxeo Online Services: Your password remains safe and no one can use the token to launch commands anymore.
{{/callout}}
{{! /multiexcerpt}}

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
