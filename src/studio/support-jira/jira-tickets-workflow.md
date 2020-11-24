---
title: JIRA Tickets Workflow
review:
    comment: ''
    date: ''
    status: ok
labels:
    - jira
toc: true
confluence:
    ajs-parent-page-id: '4687694'
    ajs-parent-page-title: Support / JIRA
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: JIRA+Tickets+Workflow
    canonical_source: 'https://doc.nuxeo.com/display/Studio/JIRA+Tickets+Workflow'
    page_id: '18448651'
    shortlink: C4EZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/C4EZAQ'
    source_link: /display/Studio/JIRA+Tickets+Workflow
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2014-12-30 16:48'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-01-03 15:34'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-01-02 17:08'
        message: Formatting
        version: '3'
    -
        author: Solen Guitter
        date: '2014-01-02 16:50'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-01-02 16:05'
        message: ''
        version: '1'

---
This is a simplified version of the ticket workflow:

![]({{file name='workflow_en.png'}} ?w=500,border=true)

All along this process, the ticket is assigned to a Nuxeo person, who is responsible to provide answers to the customer.

## Open Status

This is the initial status of the ticket. It indicates the Support team that they need to work on the ticket. From that status, several actions are possible, that make the ticket evolve to a new status.

After a first analysis, the Support team makes the ticket go into one of the statuses below:

*   In Progress: indicating that the issue has been reproduced and the ticket is being processed;
*   Acknowledged: to indicate that the problem has been observed, that all the elements required for the ticket to be processed have been provided and that the problem will be fixed later;
*   Feedback required: is used when the Support team has asked for additional questions to better understand your questions or problems;
*   Resolved: when the Support team has provided a satisfactory answer to the ticket.

## Feedback required Status

This status indicates that the Support team needs more elements from you:

*   if you provide all the answers to the Support team's questions, you must click on the **Give Feedback** button (only visible in **Feedback required** status) so the ticket goes back to the Support team's watch;
*   if you answer only some of the questions or if you say you'll keep investigating on your side, the ticket must stay in the Feedback required status until all the elements needed to keep processing the ticket are provided;
*   the questions asked by the Support team can point you to a solution: in that case, you must close the ticket with a comment.

To summarize, do not click on the **Give Feedback**&nbsp;button until all the required elements have been provided.

## Resolved Status

When the Support team has answered the initial question or provided a fix for a bug, they mark the ticket as resolved. It is now for you to act on the ticket:

*   if the answer provided is not satisfactory or doesn't fix the issue, you must reopen the ticket and indicate why in a comment;
*   if you approve the suggested solution, you must close the ticket.

When the answer has been approved by you, the ticket must not be used to ask new questions or report new bugs, or simply be reopened. It must stay closed and new issues must be reported in new tickets so that a ticket is about a single topic.

However, you can ask for a complementary answer in a comment, without reopening the ticket.

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages'}}

- [Ticket Follow Up]({{page page='ticket-follow-up'}})
- [How to Fill a JIRA Ticket]({{page page='how-to-fill-a-jira-ticket'}})
- [Support / JIRA]({{page page='support-jira'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
