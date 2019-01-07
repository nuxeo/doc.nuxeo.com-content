---
title: Migration Services
description:
review:
    comment: ''
    date: '2018-12-05'
    status: ok
tree_item_index: 950
toc: true
---
The JSF UI to Web UI migration tool is a safe and automated way to create an equivalent Web UI configuration based on your existing JSF UI configuration.

To process the JSF UI to Web UI migration:
From Studio Modeler, go to **Configuration menu** > **Migration Service**.

![]({{file name='studio-early-access-migration-services.png'}} ?w=650,border=true)

The migration tool is designed to reduce the effort needed to transition to [Web UI]({{page space="nxdoc" page="web-ui"}}).

Migration tool creates the updated configuration in a dedicated branch, and does not delete anything. This lets you:
- review what the result looks like at your leisure and possibly launch the migration again,
- keep working on your master branch and/or other branches if you want to,
- delete the additional configuration that was generated partially or totally (just remove features or delete the branch).

Once the migration done, a detailed report is created in **Migration Services** so that you can check the results.

{{#> callout type='info' heading='part of early access program'}}
JSF UI to Web UI migration tool is available through our early access program, offering stable features you can co-create with us as they are only partially complete.  

- Not a member of it yet? [Learn about its benefits, what's planned and how to get in]({{page page="early-access-program"}}).
<br /><br />
- Already a member? Help us co-creating it by [telling us about your experience](https://docs.google.com/forms/d/e/1FAIpQLSdoDfpJOnFwkxHAHOk5aq5KHh9myxF6fISugnMzVmvuQSp-fw/viewform?usp=pp_url) </a>.
{{/callout}}

## Migration Scope

| Items                                              | Migration State                             |
| -------------------------------------------------- | ------------------------------------------- |
| Document layouts                                   | &#10003;                                    |
| Workflow tasks layouts                             | &#10003;                                    |
| Form layouts                                       | &#10003;                                    |
| Content views that do not reference a table layout | &#10003;                                    |
| User actions                                       | &#10003;                                    |
| Tabs                                               | N/A                                         |
| Translation files                                  | N/A                                         |
| Content views that reference a table layout        | N/A                                         |

This scope is subject to change, feel free to [let us know about your experience](https://docs.google.com/forms/d/e/1FAIpQLSdoDfpJOnFwkxHAHOk5aq5KHh9myxF6fISugnMzVmvuQSp-fw/viewform?usp=pp_url).

## Processing Migration

{{#> callout type='warning' heading='working during migration'}}
Although it is possible, we recommend not to work while the migration is happening.

Any configuration you would do in that time frame would not be taken into account by the migration tool, and could lead to conflicts if you decide to merge changes afterwards.
{{/callout}}

### Launching Migration

If your project benefits from branch management: In **Source Control**, go to **Branch Management**, checkout the branch you want to migrate.

1. In **Configuration**, go to **Migration Services**.
1. Click on **Start Migration**.</br>
A pop-up appears to ensure you want to start migrating.
1. Click **OK** to confirm.

![]({{file name='migration-services-jsf-to-web-ui-screen.png'}} ?w=650,border=true)

{{#> callout type='note' }}
If you are using the intermediate or advanced commit modes, you need to discard or commit and push any work in progress before the migration can be launched.
{{/callout}}

Migration can be launched as many times as you wish: for example, to allow you to test changes made on your JSF UI configuration or benefit from new features that have been added to the migration tool.

{{#> callout type='warning' }}
If you don't have the branch management enabled, the branch created for the migration will be deleted and created again with every migration attempt, resulting in the loss of any changes made into it that would have not been merged yet.
{{/callout}}

### Reviewing Changes

When the migration is finished, a report is available in **Migration Services**.

![]({{file name='migration-services-access-report.png'}} ?w=650,border=true)

Click on **Access Report** to see and easily search through the result in order to find any particular information.

The report provides a summary of the migration. Details for each component of your project are displayed, with descriptions and recommendations when errors occurred.

It also provides information concerning the migration itself, such as the tool version, source branch, result branch, source tag, destination tag and date.

### Integrating Changes

Results appear in a branch indicated in the **Previous Migration** list.

To check the result of your migration, go to **Source Control** and **Branch Management**.  

To switch to the new branch, press **Checkout** on it.

The migration process does not delete any configuration but it adds more configuration that might be slightly updated. For example, to enforce a good practice such as putting constraints expressed only in your layouts back at schema level. The configuration produced can be reviewed and changed if needed, at your own pace.

To merge the changes, follow the usual [feature implementation process]({{page page="how-to-implement-features-using-branches"}}). If your project benefits from branch management features, you can also take advantage of the [configuration review process]({{page page="how-to-review-nuxeo-studio-configuration"}}) to ease the merge.

The JSF UI configuration can be hidden when you are ready to migrate. For more information, see the finalizing migration section.

### Discarding Changes

If your project benefits from branch management, everytime you launch a migration, a branch is created.

If you don't benefit from branch management, a branch is created the first time you launch a migration. It is deleted and created again with every migration, involving the loss of the previous migration.

To discard changes, revert to the tag made before the migration was triggered.

### Removing JSF UI Configuration

If you are satisfied with the result, you can finalize the migration to Web UI in the branch where the release used in production will be created.

In **Settings**, click on **Application Definition**, remove the JSF UI dependency and click on **Save Changes**.

JSF UI related configuration will be hidden in Studio and kept outside from your deployed configuration. If you change your mind, just add it back and your JSF UI configuration will be back.
