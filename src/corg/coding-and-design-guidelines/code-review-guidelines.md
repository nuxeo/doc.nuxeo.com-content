---
title: Code Review Guidelines
review:
    comment: ''
    date: ''
    status: ok
tree_item_index: 300
history:
    -
        author: Florent Guillaume
        date: '2018-05-11 18:03'
        message: ''
        version: '1'
---
Code reviews are a collaborative process between coders and reviewers — this is not a battle. The goal of the reviews is to improve the code quality by having several pairs of eyes on the code, for the benefit of all.

## When creating a Pull Request

### Follow the coding standards

Important coding standards are described in the [Java Code Style]({{page page='java-code-style'}}) and [JavaScript Code Style]({{page page='javascript-code-style'}}) pages.

### Design for easy review

The code must be designed for easy review and for future readers of the commits:
- Don't mix cleanups/reformatting with actual code.
- Use several commits for unrelated work.
- Use only one commit for related thing. For example don't have a separate "fix typo" commit if the typo fixed is in another commit of the Pull Request.
- Diffs must be minimal.

### Write tests

Try to test all aspects of the code you write.

For bug fixes, write non-regression tests: the tests must fail before the changes, and work after the changes.

### Re-read yourself

Re-read your branch diff yourself before creating a Pull Request by putting yourself in the shoes of a reviewer.

### Use standard branch names

Use a branch name that obeys the branch naming conventions. These conventions are described in [Git Main Rules and Good Practices]({{page page='git-usage'}}#main-rules-and-good-practices)

### Backport the strict minimum

For code that will be backported, in order to minimize regression risks, you should strictly avoid non-useful changes.

## After your Pull Request is reviewed

You must take into account all comments requesting changes, either by doing requested changes (then it's a good idea to 👍 the comment), or by discussing further and getting to a consensus between you and the commenters.

If there are fixes to do, amend the commits, don't create further commits for the fixes (again, think about people reading commits one by one to understand the logic of the code).

After you've done fixes and amended code, add a message in the Pull Request to summarize your changes, and ask the commenters and reviewers for another review.

## When reviewing Pull Requests

Check that tests are present and cover the changed code.

In your review comments, be clear about whether you're requesting a change or you're just mentioning a FYI to the committer.
