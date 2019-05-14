---
title: 'HOWTO: Review Nuxeo Studio Configuration'
review:
  comment: ''
  date: ''
  status: ok
details:
  howto:
    excerpt: Learn how to use the branch management features of Nuxeo Studio to set up a configuration process review.
    level: Intermediate
    tool: Studio
    topics: 'Branch Management'
labels:
  - howto
toc: true
tree_item_index: 850
---

{{! excerpt}}
This short tutorial demonstrates how branch management features in Nuxeo Studio can be used to review configuration made by other developers before it is pushed on a given branch.
{{! /excerpt}}

Let's consider two users:

- Bob is a new developer that just joined the project.
- Sarah is his manager and wants to review his work before it gets pushed to the master branch.

## Reviewing the Changes

Bob has some configuration made in a dedicated branch named `feature/assetsmgt` that is now ready to be reviewed. Sarah has to select the appropriate commit mode, merge the feature branch's content and take a decision.

## Switching to an Appropriate Save Mode

To review a configuration, you need to use the advanced save mode to benefit from the possibilities described below. The advanced save mode provides a precise control.

1. Go to **Source Control** > **Commit Preferences**.
1. Switch to **Advanced** save mode.
1. Save your changes.

{{#> callout type='info' heading='Commit Mode'}}

Once the configuration review is finished, you can switch back to another commit mode if you want to.

{{/callout}}

## Adding Branch Content

Your goal is now to review the content in the asset management branch. Let's add it to the content of the master branch and check the results.

1. Go to **Source Control** > **Branch Management**.
1. Checkout the `master` branch.
1. Click the **Merge into my workspace** button for the `assetsmgt` branch and confirm the change.
   ![]({{file name='merge-branch.png'}} ?border=true,w=600)
   The two branches are now merged.
1. In **Branch Management**, select the `master` branch.

Changes pulled over from the other branch are visible in the **Your Work In Progress** zone. They are marked in green, because they are only visible from you at this stage until you decide to push them.

![]({{file name='wip.png'}} ?border=true,w=600)

For more information about the changes, click on the corresponding commit.

## Reviewing Changes

Several decisions are possible at this stage to finish the review:

- [Confirm changes](#confirming-changes) and push them in `master`
- [Revert changes](#reverting-changes)
- [Add some modifications](#amending-configuration) before pushing proposed changes to `master`

### Confirming Changes

To confirm the changes, you need to push the commits directly.

Click on the **Push** ![]({{file name='push.png' page='studio-icons-index'}} ?w=32) button in the bottom-right corner of the screen, in the status bar. The changes are pushed and your review is complete.

### Reverting Changes

To revert changes, you need to **Revert To** a previous commit in the commits list.

1. Click the **Revert To** button of the first commit in the **Merged Commits** listing.
   ![]({{file name='revert.png'}} ?border=true,w=600)
   A new commit is created to take the configuration back to a previous step.

1. Push all commits using the **Push** ![]({{file name='push.png' page='studio-icons-index'}} ?w=32) button.
   ![]({{file name='revert-push.png'}} ?border=true,w=600)
   Changes are pushed and your review is complete.

### Amending Configuration

A third option is to bring changes before sharing the final result.

1. Make the changes you need using Nuxeo Studio, and save your work in progress.
1. As you are using the **Advanced** save mode, you can pile up commits without ending the review by clicking **Commit** ![]({{file name='commit.png' page='studio-icons-index'}} ?w=32).
1. When your changes are complete, push the changes using the Push button at the bottom-right corner of the screen, in the status bar.</br>
   Changes are pushed and your review is complete.
