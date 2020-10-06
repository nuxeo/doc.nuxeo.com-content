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

Before you read this page, make sure you've read the basic [Contribution Principles]({{page space='nxdoc' page='contributing-to-nuxeo'}}#contribution-principles).

These guidelines apply to the repositories of the [Nuxeo](https://github.com/nuxeo/) GitHub organization. Yet, some specific rules apply to the [Platform repositories](#platform-repositories), i.e. the ones maintained by the Platform team and built in a dedicated CI system.

## When Creating a Pull Request (PR)

### Use the Draft Feature

Don’t hesitate to start with creating a draft PR. Then, you can ask for an early review if you feel it’s worth it, by using the GitHub [Reviewers](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review) feature.

When the draft PR sounds mature enough and you want some people to actually review it, switch it to "Ready for review".

You can, of course, create a PR and ask for reviews directly.
In any case, make sure you read your own PR before submitting it to other people.

### Follow the Coding and Design Guidelines

Before you start writing some code, make sure you've read the [Coding and Design Guidelines]({{page page='coding-and-design-guidelines'}}).

Important coding standards are described in the [Java Code Style]({{page page='java-code-style'}}) and [JavaScript Code Style]({{page page='javascript-code-style'}}) pages.

It is important to understand that changes will be requested if the code is not well-formatted.

### Design for Easy Review

The code must be designed for easy review and for future readers of the commits:

- Don't mix cleanups/reformatting with actual code. For example, if you've changed a simple line of code in a class and re-formatted the whole file in a single commit, then your change is invisible in the diff, hidden by all the formatting changes.
- Add the cleanup/format commit first.
- Use several commits for unrelated work.
- Use only one commit for related things. For example, don't have a separate "fix typo" commit if the typo fixed is in another commit of the PR.
- Set a detailed commit description.
- Diffs must be minimal.
- PRs with a lot of commits, let's say 10 for instance, should be avoided. We should be able to make PRs with light diffs. If not possible, create a draft PR and ask for a review as soon as possible.

Also, since good commit messages matter, please follow the [seven rules of a great Git commit message](https://chris.beams.io/posts/git-commit/#seven-rules).

### Write Tests

Try to test all aspects of the code you write.

For bug fixes, writing non-regression tests is mandatory: the tests must fail before the changes, and work after the changes.

If writing a test seems too complicated, don’t hesitate to discuss it with the Nuxeo developers. They may, when possible, take over the non-regression test and finalize the PR.

### Re-read Yourself

Re-read your branch diff before creating a PR to put yourself in the shoes of a reviewer.

Don't leave things in your code if you _know_ they are going to be commented on by reviewers.

## When Reviewing a Pull Request

### Main Recommendations

In your review, be clear about whether you're requesting a change or you're just mentioning a FYI to the committer. Also, be consistent and don't approve while asking for changes in the comments.

Do not be overly picky: adjust your review level to the level of the coder. The code doesn't have to be perfect, but the goal is still to have a good code quality.

While it's OK to write short and to-the-point comments, try not to be needlessly abrupt.

Note that coders and reviewers may be geographically distant, if you cannot do the review side by side, you should just always assume the best intentions: people are trying to help, not to criticize you personally.

Approving a PR both _does_ and _does not_ engage the reviewer's responsibility: the reviewer is not expected to be foolproof but it must be a promise that a human eye effectively did look at the code. If a reviewer does not understand the JIRA issue or the majority of the code, they should not approve the PR (it's always OK to add comments).

### Check-list and Review Types

When reviewing or submitting a PR, there are a lot of things that can be checked. Here is a non-exhaustive and unsorted list of points that should draw your attention:

- Are the [Coding and Design Guidelines]({{page page='coding-and-design-guidelines'}}) respected?
- Are there non-regression tests covering the changed code?
- Does the PR do what it is supposed to do? If it covers more, maybe some code should go to another PR. If it doesn't cover the full scope of the original issue, there might be some missing content.
- Are there potential security issues?
- Are there any extra files included in the PR that shouldn't be there?
- Were new dependencies added to the project? If yes, why were they added?
- Can I build the branch without any compilation error?
- Are there any new compilation warnings brought by the changes when building the impacted modules?
- Are there any failing tests? If yes, why are they failing?
- Has the related JIRA issue been updated: description, release notes, upgrade notes?
- Is there any impact on the documentation to reflect the changes? In this case, do we need an [NXDOC](https://jira.nuxeo.com/projects/NXDOC/) JIRA issue?

Obviously, we can't expect from a reviewer to address the whole list, neither to always spend a lot of time reviewing a PR. It's up to the reviewers to choose the type of review they are ready to do, for instance:

- "Quick": read the PR globally, check the basic coding guidelines, make sure the non-regression tests aren't missing. This shouldn't take more than one or two hours. This can be the case of reviewers not considering themselves as experts on the topic but can judge if the PR seems globally OK/not OK.
- "Deep and complete": read the commits in detail, checkout the branch, run the tests, open the code in an IDE, etc. This could take up to several days!
- "Compromise": a subtle mix of the above-mentioned strategies.

In any case, a review is always good to have!

### Good Practices

#### Start on a Positive Note

Even if there are a lot of issues with the code that need to be addressed, it's important to thank the person for their contribution and say something nice.

For instance, start with something like "Nice work!" or "Thanks for this great refactoring".

Make the people more receptive to feedback by letting them know that you've spent time thoroughly checking their code.

For instance, if their logic for X wasn't so great, but they did Y and Z well, let them know!

#### There's More Than One Solution

Don't always think of how you would have done something. Because it isn't how you would have approached and solved the problem, doesn't mean it isn't good.

Take into account the initiator's point of view.

If something is not clear or no consensus is reached, maybe ask the initiator/other reviewers directly before adding a comment.

Let your ego at the door and be open-minded to considering new solutions.

Ultimately, pair program before the code review stage!

#### It's not "You", it's "the Code"

Prefer "The logic isn't clear to me." to "Your logic isn't clear."

#### Discuss and Improve the Review Process Often

Ask people what kind of feedback is useful, if they agree with the comments in general, if the comments don't sound too rude, etc.

Consider how much time people spent doing reviews and identify any patterns from it. If people are frequently commenting on the same types of issues, are there steps we can take to address it so there are less of those issues on the next project? E.g.: improve formatting, add some automatic style checking, have better guidelines, etc.

## After your Pull Request is Reviewed

Read all comments made, and try not to be offended by the short, sharp or abrupt sentence formulations that a reviewer may use. There may not always be complete phrases or "please", or "could you", but that's OK, it's a technical review, not a social encounter.

You must take into account all comments requesting changes, either by doing the requested changes (then it's a good idea to 👍 the comment), or by discussing further and getting to a consensus between you and the commenters.

Reply to any other comment, or simply acknowledge with an appropriate emoji reaction.

If there are some changes to do, there are basically two solutions:

- If the PR contains a few commits, let's say 3 or 4, you should amend the appropriate commits and force push the branch. Don't create further commits for the fixes (again, think about people reading commits one by one to understand the logic of the code).
- If there are a lot of commits, let's say 5 or more, it's OK and probably a good idea to add some additional commits including the new changes:
  - It makes things clearer and easier to re-review.
  - It's safer: rebasing the PR is a risk of impacting some changes that have already been fully reviewed and validated.
  - It is interesting to have in the history the result of a (possibly long) discussion and process that lead to these additional changes.

Of course, these are only recommendations and there is no absolute way of doing, it always depends on the case.

After you've done fixes and amended code:

- Use the "Resolve conversation" button to let the reviewers know that comments were taken into account.
- It's a good idea to add a message in the PR to summarize your changes and ask the reviewers for another review.

## Platform Repositories

Some rules apply specifically to the Platform repositories, built by the Platform [CI](#ci), the main ones being:

- [nuxeo](https://github.com/nuxeo/nuxeo/)
- [nuxeo-java-client](https://github.com/nuxeo/nuxeo-java-client/)
- [nuxeo-arender-connector](https://github.com/nuxeo/nuxeo-arender-connector/)

### Who Should Review a PR

As the PR initiator, you should **request a review from at least two people**.

This assumes that you know who's in charge of the piece of code touched by the PR, or you simply think of someone legitimate or who could be interested.
If you have no idea of whom to request a review from, then ask the Platform team before requesting a review.

Anyone else who feels legitimate or just interested, in the team of the initiator or not, can review the PR.
Reviewing a PR is always a way to learn something about the platform, the way other people code, the good or bad practices. It’s also a way to improve the platform and share knowledge. If you are starting a review on a PR but you were not requested as a reviewer, **request a review from yourself** in GitHub to be marked as a reviewer.

As a requested reviewer you **must review the PR**, unless you have a good reason not to, which you should mention to the PR initiator.

It is up to the reviewer to start the review immediately or to wait for the GitHub [status checks](#ci). On the one hand, it's interesting to parallelize the code review and the CI checks, on the other hand, there might be a risk of reviewing code that will not pass all the checks.

### Timeframe

Requesting a reviewer does not imply an immediate review, everyone [handles the PR queue](#how-to-handle-the-pr-queue) in their own way.

On the contrary, someone taking too long to do a review or post a comment shouldn't necessarily expect it to be taken into account.

Indeed, a late comment doesn't "weigh" as much as an early one: if it doesn't have a consequence on the code itself (format or wording only for instance), the reviewer shouldn't expect it to be systematically taken into account. It is understandable that after a big number of forced push changes, the PR initiator won't want to force push again and add a risk about the already reviewed and validated commits.

A review cannot take forever, so, at some point, a decision must be made. It's all about providing the best effort and agreeing on a compromise.

Moreover, nothing is set in stone. The code can always evolve and be improved later.

In any case, as the PR initiator, do not hesitate to schedule a short meeting with the requested reviewers to guide them through the PR. In the same way, as a reviewer, feel free to schedule a meeting with the initiator if things are unclear.

### When/How to Merge a Pull Request

After having resolved all the conversations, meaning you agreed on a consensual solution with the reviewers, you will probably have force pushed the branch. Then, you need to **re-request a review from at least two people**, most certainly the two initially requested reviewers. This way:

- It is clear that you have taken into account the requested changes or comments and the PR is ready for a re-review.
- The reviewers will get notified that they have been re-requested.

It's good practice to check that all the reviewers, including self-requested ones, are satisfied before merging.

When the PR has been approved by two reviewers and all the GitHub [status checks](#ci) have passed, it can be rebased and merged.

You shouldn’t squash the commits as they have been reviewed. In the [nuxeo](https://github.com/nuxeo/nuxeo/) repository, the "Squash and merge" option is disabled in GitHub. This doesn’t mean you can’t squash in the branch before the PR is ready for review.

### CI

Once a PR is created in GitHub, a [Jenkins pipeline](https://jenkins.platform.dev.nuxeo.com/job/nuxeo/) is triggered on the related branch and sets some GitHub status checks on the PR.

Typically, for the [nuxeo](https://github.com/nuxeo/nuxeo/) repository, the [nuxeo](https://jenkins.platform.dev.nuxeo.com/job/nuxeo/job/nuxeo/) pipeline sets the following statuses that are required to merge the PR:

- maven/build
- utests/runtime
- utests/dev
- packages/build
- ftests/dev
- docker/build
- docker/test

## How to Handle the PR Queue

There can be a lot of PRs and it's not always easy to be aware of them, choose the ones to review and spend the right amount of time on reviews.
Here are a few pieces of advice about how to get involved in the review process.

### Establish Dedicated Review Time

Doing a thorough and productive code review takes time and that's OK. Even if the PR is small, it still (usually) requires reading the whole code, checking the logic, reviewing the original issue and understand how the PR fixes it, etc.

You should not hesitate to allocate some dedicated time to make code reviews. Depending on the incoming PRs, it could be for instance:

- One or two hours every morning.
- Once or twice a week for half a day.
- On the fly, as soon as you get notified about a PR.

### Find the Right Way of Being Aware of Pending PRs

It's important to find a good way to monitor the PR queue and make sure that there are no "dead" PRs.
Here are several ways of getting informed about the open PRs that could require your attention:

- Look at the [Review requests](https://github.com/pulls/review-requested/) tab in the GitHub *Pull requests* section (cross-repository).
- Look at the *Pull requests* tab of a GitHub repository, typically in the [nuxeo](https://github.com/nuxeo/nuxeo/pulls/) repository.
- Use the GitHub email notifications. To avoid getting spammed, you can unwatch or ignore some repositories and unsubscribe from any PR discussion thread.
- Use the GitHub [Scheduled Reminders](https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-team) to get notified in Slack.

### Review Flow Samples

Here are a few examples of Nuxeo developer's review flow, get inspired!

> At the beginning of the day, I start by reading my emails, I look at the GitHub notifications, I choose the ones I want to deal with right away (new PR, comment on one of my PRs, response to one of my comments, etc.), I open the PRs in new tabs and I work on them in the morning. It can take the whole morning. The other ones stay as unread emails and will be dealt with later. If it's a big PR or if I want to spent some more time on it (checkout, open in IDE, test, etc.), I schedule its review for another day as it might take half a day, a whole day or even more.

> The morning, it's PR review time, I check my emails to deal with the reviews in progress, if none, I go to GitHub to check the list of open PRs. Usually, I skip the drafted ones. I try to judge if I would be relevant as a reviewer on the subject. I check at the number of changed lines to have a global idea. Generally, I look at the commits one by one, then I read the "Files changed" tab. In case of force push, I compare the impacted commits. If I start getting lost in the method/variable references, then I checkout the branch, build it and open my IDE.

> I get notified in Slack as soon as I get requested for review, I receive a comment, changes are requested or a PR is approved. When I get the notification, I open the PR and decide if I will handle it right away or not, depending on the number of lines of code, the priority and my current task. If I don't handle it right away, the tab stays open until the next morning where I will read the unreviewed PRs, emails and Slack notifications. During the review, I use the "Viewed" checkbox for each file in the "Files changed" tab, which allows me to follow what has changed after a force push, then do a partial review. I rarely checkout the branch, unless to test the changes I suggest.

> I review when I've resolved a task and it is not morning (which I reserve for coding), when I've been requested for review, when I have a PR in my "Review requests" tab in GitHub or when I decide to check the open PRs in nuxeo/nuxeo/pulls. Then, if it sounds simple, I deal with it right away, otherwise, I estimate if I'm the right person for a review. When reviewing, I try to understand the why and how it is done and I ask questions on the PR or by direct message.
