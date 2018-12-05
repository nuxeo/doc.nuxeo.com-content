---
title: Migration Services
review:
    comment: ''
    date: '2018-12-05'
    status: ok
tree_item_index: 950
toc: true
---
The JSF UI to Web UI migration tool is a safe and automated way to create, within a few minutes, an equivalent Web UI configuration based on your existing JSF UI configuration.


The migration tool reduces dramatically the effort needed to transition to [Web UI]({{page space="nxdoc" page="web-ui"}}), our user interface that uses modern web standard technologies to provide an outstanding user experience.

Running the migration tool does not delete any data. If you are not satisfied with the result, you can:
* go back to the state your project was before triggering it anytime,
* delete the additional configuration that was generated partially or totally.

After migration is run, a detailed report is created in **Migration Services** so that you can check the results.

{{#> callout type='info' heading='part of early access program'}}
JSF UI to Web UI migration tool is available through our early access program, offering stable features you can co-create with us as they are only partially complete.<br /><br />

- Not a member of it yet? [Learn about its benefits, what's planned and how to get in]({{page page="early-access-program"}}).
<br /><br />
- Already a member? Help us co-creating it by [telling us about your experience](https://docs.google.com/forms/d/e/1FAIpQLSdoDfpJOnFwkxHAHOk5aq5KHh9myxF6fISugnMzVmvuQSp-fw/viewform?usp=pp_url) </a>.
{{/callout}}

## What is migrated?

| Migrated items| Not currently migrated |
|----------------|-------------------|
| Document layouts | Content views that contain query parameters or that reference a table layout |
| Workflow tasks layouts | Translation files  |
| Form layouts | Tabs     |
| Content views that do not reference a table layout |          |
| User actions |             |

This scope is subject to change. Feel free to [let us know about your experience](https://docs.google.com/forms/d/e/1FAIpQLSdoDfpJOnFwkxHAHOk5aq5KHh9myxF6fISugnMzVmvuQSp-fw/viewform?usp=pp_url)

## Processing Migration

{{#> callout type='warning' heading='working during migration'}}
Although it is possible, we recommend not to work while the migration is happening.

Any configuration you would do in that time frame would not be taken into account by the migration tool, and could lead to conflicts if you decide to merge changes afterwards.

{{/callout}}

### Launching Migration

If your project benefit from branch management: In Source Control -> Branch Management, checkout the branch you want to migrate.
1. Go to  Configuration -> Migration Services.
1. Press the Start Migration button and confirm.

{{#> callout type='note' }}

If you are using the intermediate or advanced commit modes, you need to discard or commit and push any work in progress before the migration can be launched.

{{/callout}}

Migration can be launched as many times as you wish: for example, to allow you to test changes made on your JSF UI configuration or benefit from new features that have been added to the migration tool.

{{#> callout type='warning' }}

The branch created for the migration will be deleted and created again with every migration attempt, resulting in the loss of any changes made into it that would have not been merged yet.

{{/callout}}

### Reviewing Changes

When the migration is finished, a report is available in **Migration Services**.
You can access the report to see the result, browse and search through it easily in order to find any particular information.

### Integrating Changes

Results appear in a branch indicated in the **Previous Migration** list.

To check the result of your migration, go to  **Source Control** and **Branch Management**.  

To switch to the new branch, press **Checkout** on it.

The migration process does not delete any configuration but it adds more configuration that might be slightly updated. For example, to enforce a good practice such as putting constraints expressed only in your layouts back at schema level. The configuration produced can be reviewed and changed if needed, at your own pace.

To merge the changes, follow the usual [feature implementation process]({{page page="how-to-implement-features-using-branches"}}). If your project benefits from branch management features, you can also take advantage of the [configuration review process]({{page page="how-to-review-nuxeo-studio-configuration"}}) process to ease the merge.

The JSF UI configuration can be hidden when you are ready to migrate. For more information, see the finalizing migration section.

### Discarding Changes

If your project benefits from branch management, click on **Settings**, go to  **Branch Management** and then delete the branch created by the migration.

If your project does not benefit from branch management, to discard changes, revert to the tag made before the migration was triggered.

### Removing JSF UI Configuration

If you are satisfied with the final result, in the branch used to create the release that will be used in production you can finalize the migration to Web UI.

In **Settings**, click on **Application Definition**, remove the JSF UI dependency and click on Save Changes.
JSF UI related configuration will be hidden in Studio and kept outside from your deployed configuration. If you change your mind, just add it back and your JSF UI configuration will be back.
