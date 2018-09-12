---
title: How to Review Nuxeo Studio Configuration
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
## Goal
This short tutorial demonstrates how branch management features in Nuxeo Studio can be used to review configuration made by other developers before it is pushed on a given branch.

Let's consider two users:
- Bob is a new developer that just joined the project.
- Sarah is his manager and wants to review his work before it gets pushed to the master branch.

## Reviewing the Changes
Bob has some configuration made in a dedicated branch named `feature/assetsmgt` that is now ready to be reviewed. Sarah has to select the appropriate commit mode, merge the feature branch's content and take a decision.

### 1. Switching to an Appropriate Commit Mode

For a configuration review, using the intermediate or advanced commit mode is necessary to benefit from the possibilities described below. We recommend advanced commit mode for a finer control. You should not use simple commit mode or you wouldn't be able to review the changes before they are shared.

1. Head to the **Source Control**, **Commit Preferences** menu.
2. Switch to **Advanced** commit mode and save.

{{#> callout type='info' heading='Commit Mode'}}

Once the configuration review is finished, you can switch back to another commit mode if you want to.

{{/callout}}

### 2. Adding Branch Content
Goal is now to review the asset management branch's content. Let's add it to the master branch's content and check the results.

1. Go to **Source Control**, **Branch Management** menu.
2. Checkout the `master` branch.
3. Click the **Merge in my workspace** button for the `assetsmgt` branch and confirm the change.

![]({{file name='merge-branch.png'}} ?border=true,w=600)

The two branches are now merged.

4. In the branch management screen, select the `master` branch.

<br/>Changes pulled over from the other branch are visible in the **Your Work In Progress** zone and marked in green, meaning that they are only visible from you at this stage until you decide to push them.

![]({{file name='wip.png'}} ?border=true,w=600)

If you want to have more informations about the changes, click on the corresponding commit.

### 3. Reviewing and Taking a Decision
Several decisions are possible at this stage to finish the review:
* Confirm changes and push them in `master`
* Revert changes
* Add some modifications before pushing proposed changes to `master`

#### Confirming Changes
Confirming the change is done by pushing the commits directly.

Click the green button in the top right corner of the screen. The changes are pushed and review is finished.

![]({{file name='push.png'}} ?border=true,w=600)

#### Reverting Changes
Reverting the changes can be done using the **Revert To** button in the merged commits listing.

1. Click the **Revert To** button of the first commit in the **Merged Commits** listing.

![]({{file name='revert.png'}} ?border=true,w=600)

A new commit is created to take the configuration back to a previous step.
2. Push all commits using the green button in the top right corner of the screen.

![]({{file name='revert-push.png'}} ?border=true,w=600)

Changes are pushed and the review is finished.

#### Amending Configuration
A third option is to bring changes before sharing the final result.

1. Make the changes you see fit using Nuxeo Studio, and save your work in progress.
2. As you are using the advanced commit mode, you can pile up commits without ending the review by using the **Commit** ![]({{file name='commit-button.png'}} ?w=30) button when clicking the blue commit icon on top of the screen.

![]({{file name='commit-changes.png'}} ?border=true,w=350)

{{#> callout type='note' heading='Do not use Commit and Push'}}
Make sure you click the **Commit** button on the Commit popup.
<br/>Using the **Commit and Push** button would share all changes with your coworkers right away. You should avoid it until you are ready to end the review.
{{/callout}}

3. When your changes are finished, push the changes using the green button in the top right corner of the screen. Changes are pushed and the review is finished.
