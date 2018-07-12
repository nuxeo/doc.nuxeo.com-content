---
title: Nuxeo Studio - Designer Git Access
description: Learn how to use direct access to the underlying Git project for Studio Designer.
review:
    comment: ''
    date: ''
    status: ok
toc: false
tree_item_index: 700
---

## About Studio Designer Git Access
When configuring Web UI, Studio Designer allows to edit the generated files directly and add your custom HTML / Javascript code. This allows developers to do advanced customization.

While this is great, the browser is not a good place to do anything beyond simple tweaks and as a developer, we understand that you want to use the tools you are familiar with. Nuxeo Studio Designer Git access aims at solving this problem: you can clone your project, edit it locally with your favorite tools and benefit from advanced Git features, then push your changes back in Nuxeo Studio.

## Who Can Use It?
Studio Designer Git Access is available to any customer benefiting from the branch management feature.
To activate it, simply request it through a support ticket by indicating:
- Who should be given access
- Which access these people should obtain (read or write)
- On which project(s)

## Feature Scope and Restrictions

 Nuxeo Studio Designer Git access has been designed to allow for productivity, while keeping sane restrictions for security and ease of use reasons.

### What's possible
- Access to Nuxeo Studio Git repositories through HTTPS protocol
- Launch git commands on your repositories, with some restrictions
- Automatic refresh of the Studio project cache when git commands have been launched

### Restrictions
- Only **fast-forward changes** can be pushed.
- Only **Studio Designer files** can be managed. Changes to the Modeler side of your project will automatically be rejected as we currently have no way to ensure the validity of your configuration made through this mean.
- **We don't and will never allow rewriting history** to make sure you can always revert your project to a working state. Push force for instance will be rejected.
- **Creating / Deleting Studio branches from Git is not allowed**. You need to use Studio for this. Reason is Nuxeo Studio manages business logic on top of them.
- **Creating / Updating / Deleting tags from Git is not allowed**. Releases can be created through Studio’s interface or using a REST API. Again, this is tied to Studio managing business logic on top of this.

### Known Limitations
- No SSH protocol access.

## How to Use Git Access
### Cloning Your Project
Cloning your repositories can be done using your Nuxeo Online Services credentials. As a prerequisite, a Git client should be installed on your computer.

Once logged in to Nuxeo Online Services:
1. Visit the `My Applications` tab
2. Copy the Git url to clone your project
3. Clone your project using your Git client (typically `git clone [project URL]`)

{{#> callout type='info' heading='Password Storage'}}
If you want to avoid typing your password repeatedly, we recommend generating a [token]({{page page='token-management'}}) in your Nuxeo Online Services portal and storing it using Git's standard `.netrc` file mechanism.
{{/callout}}

### Making Changes
The recommended flow is the following:

1. In Nuxeo Studio, create a branch for your changes. It will be named `feature/your-branch-name`.
1. Pull your changes
1. Checkout the `feature/your-branch-name` branch
1. Make some changes
1. Commit and push your changes

{{#> callout type='info' heading='Branch Usage'}}
It is also possible to use any existing feature branch (feature branches are all named `feature/branch-name`) or master to push your changes. Nevertheless, we recommend using a dedicated branch to have more control.
{{/callout}}

### Checking and Integrating the Result
Have a look at your changes in Studio:

1. Checkout the feature/your-branch-name branch if needed
1. Pull changes. Studio checks every 10 seconds for new commits to pull.
1. You can follow the procedure described in the [Studio configuration review how-to]({{page page='how-to-review-nuxeo-studio-configuration'}}) to integrate your changes in the master branch.
