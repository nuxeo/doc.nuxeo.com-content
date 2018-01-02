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

#### 1. Switching to an Appropriate Commit Mode
1. Head to the Source Control, Commit preferences menu.
2. Switch to advanced commit mode and save.

{{#> callout type='info' heading='Commit Mode'}}
For a configuration review, using the intermediate or advanced commit mode is necessary to benefit from the possibilities described below. We recommend advanced commit mode for a finer control. You should not use simple commit mode though or you wouldn't be able to review the changes before they are shared.

<p>
Once the configuration review is finished, you can switch back to another commit mode if you want to.
</p>
{{/callout}}

#### 2. Add Branch Content
Goal is now to review the asset management branch's content. Let's add it to the master branch's content and check the results.

1. Go to Source Control, branch management menu.
2. Checkout the master branch.
3. Press the "Merge in my workspace" button for the asset management branch and confirm the change.

![]({{file name='merge-branch.png'}} ?border=true)

The two branches' content is now merged.

4. In the branch management screen, select the master branch. Changes brought over from the other branch are visible in the work in progress zone and marked in green, meaning that they are only visible from you at this stage until you decide to push them.

![]({{file name='wip.png'}} ?border=true)

Should you wish to gather more information about the changes merged, feel free to click on the commits and take a look at the diff provided.

#### 3. Review and Take a Decision
Several decisions are possible at this stage to finish the review.

###### Confirming the changes
Confirming the change is done by pushing the commits directly.

Press the green button in the top right corner of the screen. The changes are pushed and review is finished.

![]({{file name='push.png'}} ?border=true)

###### Reverting the changes
Reverting the changes can be done using the revert button in the merged commits listing.

1. Press the revert button of the first commit in the merged commits listing.

![]({{file name='revert.png'}} ?border=true)

A new commit will be created to take configuration back to this step.
2. Push all commits using the green button in the top right corner of the screen.

![]({{file name='revert-push.png'}} ?border=true)

Changes are pushed and review is finished.

###### Amending the Configuration
A third option is to bring changes before sharing the final result.

1. Make the changes you see fit using Nuxeo Studio, and save your work in progress.
2. As you are using the advanced commit mode, you can pile up commits without ending the review by using the **commit** button when pressing the blue commit icon on top of the screen.

![]({{file name='commit-button.png'}} ?border=true)<br/><br/>
![]({{file name='commit-changes.png'}} ?border=true)

{{#> callout type='note' heading='Commit and Push'}}
Using the *Commit and Push* button would share all changes with your coworkers right away. You should avoid it until you are ready to end the review.
{{/callout}}

3. When your changes are finished, push the changes using the green button in the top right corner of the screen. Changes are pushed and review is finished.
