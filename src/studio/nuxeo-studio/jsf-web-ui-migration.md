---
title: 'How to migrate your JSF UI configuration to Web UI'
description:
tree_item_index: 985
review:
  comment: ''
  date: '2018-10-15'
  status: ok
toc: true
---

{{#> callout type='info' heading='part of early access program'}}
JSF UI to Web UI migration tool is available through our early access program, offering stable features you can co-create with us as they are only partially complete.<br /><br />

- Not a member of it yet? [Learn about its benefits, what's planned and how to get in]({{page page="early-access-program"}}).
<br /><br />
- Already a member? Help us co-creating it by <a href="https://docs.google.com/forms/d/e/1FAIpQLSdoDfpJOnFwkxHAHOk5aq5KHh9myxF6fISugnMzVmvuQSp-fw/viewform?usp=pp_url" target="_blank">telling us about your experience</a>.
{{/callout}}

The JSF UI to Web UI migration tool is a safe and automated way to create an equivalent Web UI configuration based on your existing JSF UI configuration.

## What Value Does it Bring?
The migration tool dramatically reduces the effort needed to transition to Web UI, our user interface that makes use of modern web standard technologies to provide an exceptional user experience.

It has been designed to be:

### Safe
No data is deleted when the migration tool is run. If you are not satisfied with the result, you can:
- go back to the state your project was before triggering it anytime,
- delete the additional configuration that was generated partially or totally.

### Informative
After a migration run, a detailed report is created so that you can check the results.

### Fast
A complete run typically finishes in a few minutes.

## How Does it Work?
### Launching Migration
Steps below assume early access is activated on your project. If it's not yet, you can have a look at [how to activate it]({{page page="early-access-program"}}).

1. Checkout the branch you want to migrate in `Source Control -> Branch Management` screen. If your project does not benefit from branch management, you can skip this step.
2. Go to the `Configuration -> Migration Services` screen.
3. Press the `start migration` button and confirm.

Note that if you are using the intermediate or advanced commit modes, you need to discard or commit and push any work in progress before the migration can be launched.

{{#> callout type='info' heading='migration conditions'}}
Your branch can be migrated if it fulfills the following conditions:
1. Target Nuxeo Server version is LTS 2017
1. Your dependencies include the JSF UI package and the Web UI package

Otherwise, you may visit the `Settings -> Application Definition` page to change your dependencies if needed.
{{/callout}}

### Can I work during the migration?
Although it is possible, **we recommend not to** work while the migration is happening.

Any configuration you would do in that time frame would not be taken into account by the migration tool, and could lead to conflicts if you decide to merge changes afterwards.

### Where is the result?
See the <a href="#integrating-changes">integrating changes</a> section.

## What is Migrated?
- Document layouts
- Workflow tasks layouts
- Form layouts
- Content views that do not reference a table layout
- User actions

## What is NOT Migrated Currently?
- Content views that contain parameters or that reference a table layout
- Translation files
- Tabs

This scope is subject to change. Feel free to let us know about <a href="https://docs.google.com/forms/d/e/1FAIpQLSdoDfpJOnFwkxHAHOk5aq5KHh9myxF6fISugnMzVmvuQSp-fw/viewform?usp=pp_url" target="_blank">your migration priorities</a>.

## How to Review and Integrate Changes?
Whenever a migration is run, Nuxeo Studio will create two tags: one before the migration, and one after. If your project benefits from branch management, a dedicated branch is also created for you to easily review, possibly update, and merge changes made.

### Reviewing Changes
When the migration is finished, a report will become available in the migration services screen.

You can access the report to get instantly an understanding of the result, browse and search through it easily in order to find a particular information.

<a name="integrating-changes"></a>
### Integrating Changes
Result will be put in a dedicated branch, whose name is indicated in the previous migration list.

From there, you can take a look at the result by going into the `Source Control -> Branch Management` menu and switching to the new branch by pressing the `checkout` button on it.

No configuration is deleted when the migration is run: we add more, some of it may be slightly updated (typically to put constraints expressed in your layouts only back at schema level as it's a good practice), but we don't remove anything. The configuration produced can be reviewed and changed if needed, at your own pace.

Merging the changes follows the usual [feature implementation process]({{page page="how-to-implement-features-using-branches"}}). If your project benefits from branch management features, you can also take advantage of the [configuration review process]({{page page="how-to-review-nuxeo-studio-configuration"}}) to ease the merge.

The JSF UI configuration can be hidden when you are ready to migrate, see the <a href="#finalizing-migration">finalizing migration</a> section.

### Discarding Changes
If your project benefits from branch management, you can go to the `Settings -> Branch Management` screen to delete the branch created by the migration.

If your project doesn't benefit from branch management, changes can be discarded by reverting to the tag made before the migration was triggered.

<a name="#finalizing-migration"></a>
## How do I Remove JSF UI Configuration?
If you are happy with the final result and want to finalize the migration to Web UI, in the branch used to create your release that will be used in production go to the `Settings -> Application Definition` page, remove the JSF UI dependency and save.

JSF UI related configuration will be hidden in Studio and kept outside from your deployed configuration. If you change your mind, just add it back and your JSF UI configuration will be back.

{{#> callout type='info' heading='Nuxeo Server Update'}}
Remember that these instructions only cover your Nuxeo Studio configuration. You will also need to make sure the proper packages are installed on our Nuxeo Server instance to match your changes.
{{/callout}}

## Can I launch Migration Multiple Times?

Migration can be launched as many times as you wish: this can allow you to test configuration changes made on your JSF UI configuration or benefit from new features that have been added to the migration tool for instance.

{{#> callout type='warning'}}
The branch created for the migration will be deleted and created again with every migration attempt, resulting in the loss of any changes made into it that would have not been merged yet.
{{/callout}}
