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
## Goals
This short tutorial demonstrates how branch management features in Nuxeo Studio can be used to review configuration made by other developers before it is pushed on a given branch.

Let's consider two users:
- Bob is a new developer that just joined the project.
- Sarah is his manager and wants to review his work before it gets pushed to the master branch.

Let's see how this can be done.

## Isolating Changes
First step is to create a feature branch where Bob can work without interferring with what's going on in the master branch.

Head to the source control, branch management menu. Get back to the branches listing if necessary and create a new branch with the according button.

[new branch button]

We will consider that Bob wants to implement features around assets management, and so name the branch `assetsmgt`.

Two branches are now available. Bob will checkout the `feature/assetsmgt` branch and work in it.

## Reviewing the Changes
Time passed and Bob has some configuration ready to be reviewed. Sarah has to select the appropriate commit mode, merge the feature branch's content and take a decision.

#### Changing Commit Mode
Head to the Source Control, Commit preferences menu.
Switch to advanced commit mode and save.

For a configuration review, both intermediate and advanced commit modes can be used and will provide the same behavior. We simply chose to use advanced in this example.

#### Add Branch Content
Goal is now to review the asset management branch's content. Let's add it to the master branch's content and check the results.

Go to Source Control, branch management menu.
Checkout the master branch.
Press the "Merge in my workspace" button for the asset management branch and confirm the change.

The two branches' content is now merged.

In the branch management screen, select the master branch. Changes brought over from the other branch are visible in the work in progress zome and marked in green, meaning that they are only visible from you at this stage until you decide to push them.

Should you wish to gather more information about the changes merged, feel free to click on the commits and take a look at the diff provided.

#### Ending the Review
Several decisions are possible at this stage to finish the review.

###### Confirming the changes
Confirming the change is done by pushing the commits directly.

Press the green button in the top right corner of the screen. The changes are pushed and review is finished.

###### Reverting the changes
Reverting the changes can be done using the revert button in the merged commits listing.

Press the revert button of the first commit in the merged commits listing. A new commit will be created to take configuration back to this step.

Push the changes using the green button in the top right corner of the screen. Changes are pushed and review is finished.

###### Amending the Configuration
A third option is to bring changes before sharing the final result.

Make the changes you see fit using Studio. Note you can commit them but you should not push them yet.
When your changes are finished, push the changes using the green button in the top right corner of the screen. Changes are pushed and review is finished.
