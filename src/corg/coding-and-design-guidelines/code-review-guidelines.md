---
title: Code Review Guidelines
review:
    comment: ''
    date: ''
    status: ok
tree_item_index: 300
toc: true
---
Code reviews are a collaborative process between coders and reviewers — this is not a battle. The goal of the reviews is to improve the code quality by having several pairs of eyes on the code, for the benefit of all.

## When Creating a Pull Request

### Follow the Coding Standards

Important coding standards are described in the [Java Code Style]({{page page='java-code-style'}}) and [JavaScript Code Style]({{page page='javascript-code-style'}}) pages.

### Design for Easy Review

The code must be designed for easy review and for future readers of the commits:
- Don't mix cleanups/reformatting with actual code.
- Use several commits for unrelated work.
- Use only one commit for related things. For example, don't have a separate "fix typo" commit if the typo fixed is in another commit of the Pull Request.
- Diffs must be minimal.

### Write Tests

Try to test all aspects of the code you write.

For bug fixes, write non-regression tests: the tests must fail before the changes, and work after the changes.

### Re-read Yourself

Re-read your branch diff yourself before creating a Pull Request by putting yourself in the shoes of a reviewer.

Don't leave things in your code if you _know_ they are going to be commented on by reviewers.

### Use Standard Branch Names

Use a branch name that obeys the branch naming conventions. These conventions are described in [Git Main Rules and Good Practices]({{page page='git-usage'}}#main-rules-and-good-practices)

### Be Careful About Backports

#### Never Break Anything

Backports must *never change existing behavior* (except to fix bugs of course). Customers that apply hotfixes need a 100% guarantee that their code will continue to work, even if they are using uncommon or undocumented APIs.

#### Backport the Strict Minimum

For code that will be backported, in order to minimize regression risks, you should strictly avoid non-useful changes.

#### Isolate Backport-Specific Changes in a Separate Commit

Sometimes, when doing a backport, the code coming from the master branch has to be adjusted to work in the older branch. Try to do these adjustments in a separate backport-specific commit in addition to the cherry-pick, in order for the readers to easily understand what the differences are between the master branch and the older branch. It's better to do this than amend the cherry-pick, as this avoids drowning the backport-specific changes in a much bigger commit.

Note that this applies to logic or behavior changes that would be interesting to a reader, not cosmetic changes like conflict resolution for imports or slightly different exceptions thrown by a method for instance.

## When Reviewing Pull Requests

Check that tests are present and cover the changed code.

In your review, be clear about whether you're requesting a change or you're just mentioning a FYI to the committer.

Do not be overly picky: adjust your review level to the level of the coder. Code doesn't have to be perfect, but the goal is still to have it good code quality.

While it's ok to write short and to-the-point comments, try not to be needlessly abrupt.

Note that coders and reviewers may be geographically distant, if you cannot do the review side by side, you should just always assume the best intentions: people are trying to help, not to criticize you personally.

Approving a Pull Request both _does_ and _does not_ engage the reviewer responsibility: the reviewer is not expected to be foolproof but it must be a promise that a human eye effectively did look at the code. If a reviewer does not understand the JIRA ticket or the majority of the code, they should not approve the Pull Request (it's always ok to add comments).

## After your Pull Request is reviewed

Read all comments made, and try not to be offended by the short, sharp or abrupt sentence formulation that a reviewer may use. There may not always be complete phrases or "please", or "could you", but that's ok, it's a technical review, not social encounter.

You must take into account all comments requesting changes, either by doing requested changes (then it's a good idea to 👍 the comment), or by discussing further and getting to a consensus between you and the commenters.

If there are fixes to do, amend the commits, don't create further commits for the fixes (again, think about people reading commits one by one to understand the logic of the code).

After you've done fixes and amended code, add a message in the Pull Request to summarize your changes, and ask the commenters and reviewers for another review.
