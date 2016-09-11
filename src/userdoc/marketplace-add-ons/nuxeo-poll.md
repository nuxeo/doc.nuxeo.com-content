---
title: Nuxeo Poll
review:
    comment: ''
    date: ''
    status: ok
labels:
    - marketplace-package
    - polls
toc: true
confluence:
    ajs-parent-page-id: '16092550'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Nuxeo+Poll
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Nuxeo+Poll'
    page_id: '16092596'
    shortlink: tI31
    shortlink_source: 'https://doc.nuxeo.com/x/tI31'
    source_link: /display/USERDOC58/Nuxeo+Poll
history:
    - 
        author: Solen Guitter
        date: '2016-08-30 14:21'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-10-08 16:39'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-10-08 16:38'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-10-08 16:35'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-10-08 16:33'
        message: Moving Installation section to Admin doc
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-06-19 16:12'
        message: ''
        version: '1'

---
## Creating a New Poll

Poll can be created only in spaces that have the "SuperSpace" facet. On a default Nuxeo Platform, this means workspaces, sections and templates. Only users with Manage everything right in these spaces can access the **Polls** tab and so create new polls.

**To create a new poll:**

1.  On a workspace, section or template, click on the **Polls** tab.
2.  Click on the **Create a new poll** button.
3.  Fill in the creation form and click on the **Create** button.
    The poll is created. Depending on the start date you selected, the poll is immediately started or not:

*   if the start date is the current date, the poll is immediately started and users can start voting;
*   if the start date is after the current date, the poll is not started immediately. Users don't see it yet. The poll will start automatically when the starting date is reached. Or you can start the poll before by clicking the **Open it** link in the **Poll status** box.

**Poll parameters**

<table><tbody><tr><th colspan="1">

Field

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

Question

</td><td colspan="1">

Type the question users will be answering.

</td></tr><tr><td colspan="1">

Description

</td><td colspan="1">

Type an optional text that explains why you do this poll for instance. This description is not displayed to users in the poll widget.

</td></tr><tr><td colspan="1">

Answers

</td><td colspan="1">

Click on **Add** and type the first possible answer in the displayed text box. Repeat this for each choice users will have.

</td></tr><tr><td colspan="1">

Start Date

</td><td colspan="1">

Select the date from which the poll should be available to users.

</td></tr><tr><td colspan="1">

End Date

</td><td colspan="1">

Select the date at which the poll will close.

</td></tr></tbody></table>

## Defining Who Can Participate to the Poll

Polls are created in workspaces and sections. By default, the same access rights are applied on the poll as on the space in which they are created. This means that by default the poll is displayed to the users that have access to the workspace or the section. However, you may want to address more users, or on the contrary only a specific population of users. You can [manage the access rights]({{page page='managing-access-rights'}}) on the poll directly.

To be able to participate to the poll, users just need to have Read access to it. It is then automatically displayed to them on the left column of pages below the worklist, until they vote on it or the poll ends.

## Opening a Poll

When you create a poll, you can indicate when the poll should start. If you select the current date as the starting date, the poll is immediately "Open" and available to users. However, if you select a future date, the poll is "In project" and is not displayed to users yet. In that case, the poll will automatically be opened by the system when the start date is closed.

If you haven't selected a start date, you can open the poll manually at any time by clicking the **Open it** link in the **Poll status** box on the **Summary** tab. The poll is then started and displayed to users.

![]({{file name='NxPolls_poll_in_project.png'}} ?w=300,border=true)

## Closing a Poll

Just like you indicate when the poll should start, you can also select an end date. In that case, your poll will automatically close when the end date is reached. If you haven't selected an end date, you can close it manually at any time by clicking the **Close it** link in the **Poll status** box on the **Summary** tab.
The poll results are now displayed on the poll Summary tab. Users cannot vote on the poll, which is not displayed in the poll widget in the left column.

![]({{file name='NxPolls_poll_summary_tab.png'}} ?w=650,border=true)

## Participating to a Poll

When a poll is open, it is automatically displayed to users in the left column of pages so they can vote on it. To vote on a poll, select your answer and click on the **Cast vote** button. The temporary results of the poll are displayed. The poll is not available anymore for votes or consultation after you browsed another page or logged out.By default, results are displayed as a pie chart. Use the drop down list to display them as a bar chart.

![]({{file name='NxPolls_results_pie_chart.png'}} ?border=true) ![]({{file name='NxPolls_results_bar_chart.png'}} ?border=true)

&nbsp;