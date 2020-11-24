---
title: How to Fill a JIRA Ticket
description: This page lists the best practices to fill in a JIRA ticket so that's it's correctly handled by our Support team.
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
    canonical: How+to+Fill+a+JIRA+Ticket
    canonical_source: 'https://doc.nuxeo.com/display/Studio/How+to+Fill+a+JIRA+Ticket'
    page_id: '18448649'
    shortlink: CYEZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/CYEZAQ'
    source_link: /display/Studio/How+to+Fill+a+JIRA+Ticket
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2015-10-30 13:55'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2015-09-18 12:28'
        message: Change layout to use 2/3 layout
        version: '15'
    -
        author: Solen Guitter
        date: '2014-12-30 16:46'
        message: format
        version: '14'
    -
        author: Solen Guitter
        date: '2014-08-28 15:20'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-08-28 15:15'
        message: ''
        version: '12'
    -
        author: Thierry Martins
        date: '2014-06-30 14:19'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2014-01-27 11:24'
        message: ''
        version: '10'
    -
        author: Thierry Martins
        date: '2014-01-15 10:43'
        message: Detail on severity
        version: '9'
    -
        author: Solen Guitter
        date: '2014-01-03 15:33'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-01-03 15:33'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-01-02 17:04'
        message: typos
        version: '6'
    -
        author: Solen Guitter
        date: '2014-01-02 16:58'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-01-02 16:56'
        message: Added anchors
        version: '4'
    -
        author: Solen Guitter
        date: '2014-01-02 16:45'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-01-02 16:06'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-01-02 16:04'
        message: ''
        version: '1'
---

{{#> callout type='info' heading='Before you start'}}
Tickets that follow the recommendations below will be processed more quickly. Tickets can be filled in English or in French.
{{/callout}}

The ticket creation screen is divided in two parts: the first tab, **Main fields**, displays the main fields that you need to fill in (title, description, priority, version), and the second tab, **Advanced fields**, presents optionals fields or fields that are less important for the ticket's resolution.

{{#> callout type='info' }}
A ticket must concern only one issue. Do not hesitate to create a new ticket to report another issue.
{{/callout}}

**To create a JIRA ticket:**

{{! multiexcerpt name='jira-ticket-creation-steps'}}

1. In JIRA, click on **Create Issue**.
2. Select the project **Support Nuxeo Connect**.
3. Fill in the description as precisely as possible. Depending on the type of your issue, provide the appropriate items in the following list:
    * steps to reproduce the issue
    * logs
    * screenshots
    * customer development
    * environment.
    See below for detailed field descriptions.
4. Click on the **Create** button.

{{! /multiexcerpt}}

**JIRA ticket fields**

This is the list of fields you should fill in, if possible, when you create a new ticket. The other fields will be filled in by the Nuxeo Support team when the ticket is analyzed.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><th colspan="2">Main fields</th></tr><tr><td colspan="1">Project</td><td colspan="1">

Select the Support Nuxeo Connect project.
See the [Project section](#field-project).

</td></tr><tr><td colspan="1">Issue type</td><td colspan="1">

Select what kind of ticket you want to create and so what you want to do: ask a question, report a bug or a problem, etc.
See the [Issue type section](#field-issue-type).

</td></tr><tr><td colspan="1">

Summary

</td><td colspan="1">

Type a brief description of the issue.

</td></tr><tr><td colspan="1">

Description

</td><td colspan="1">

Type the detailed description of what you are trying to achieve. If possible, provide steps to reproduce.
See the [Description section](#field-description).

</td></tr><tr><td colspan="1">Affects version</td><td colspan="1">

Select the version of the Nuxeo Platform your application is based on.
See the [Affects version section](#field-affects-version).

</td></tr><tr><td colspan="1">

Severity

</td><td colspan="1">

Select the degree of gravity of your issue.
See the [Severity section](#field-severity).

</td></tr><tr><td colspan="1">Nuxeo Connect support</td><td colspan="1">

Select the Nuxeo Connect contract associated to your issue. If your Nuxeo Connect account is associated to one contract, only this contract is available in the list.
See the [Nuxeo Connect support section](#field-nuxeo-connect-support).

</td></tr><tr><td colspan="1">Instance type</td><td colspan="1">

Select what kind of Nuxeo instance is concerned by the ticket: a development instance, a production server, etc.
See the [Instance Type section](#field-instance-type).

</td></tr><tr><th colspan="2">Advanced fields</th></tr><tr><td colspan="1">

Environment

</td><td colspan="1">

Type as much detail as you can about your environment: your machine configuration including operating system and database, browser, etc.
See the [Environment section](#field-environment).

</td></tr><tr><td colspan="1">

Component/s

</td><td colspan="1">

Select the Nuxeo feature or component your ticket is about.
See the [Components section](#field-components).

</td></tr><tr><td colspan="1">

Additional Participant Groups

</td><td colspan="1">

If you are several Connect users working on the same project, select your support group so other users can participate and get alerts on the ticket.
See the [Additional Participant Groups section](#field-additional-participant-group).

</td></tr>
<tr>
<td>Additional Readonly Groups</td>
<td>If you need some users to be able able to follow the support issues evolutions without opening or modifying tickets, select the read-only group associated to your support group.
See the [Additional Readonly Groups section](#field-additional-read-only-group).</td>
</tr>

<tr><td colspan="1">

Reporter

</td><td colspan="1">

This is prefilled with your username.

</td></tr><tr><td colspan="1">R&eacute;f&eacute;rence SFD</td><td colspan="1">If you have functional specifications, you can fill in their reference here for your own team's benefit.</td></tr><tr><td colspan="1">Tags</td><td colspan="1">Type labels that can help you categorise your tickets.</td></tr></tbody></table></div>

## {{> anchor 'field-project'}}Project

All support tickets must be created in the Support Nuxeo Connect category. Should the ticket not be created in the correct project, it will not be seen by the Support team, which won't be able to answer your request.

## {{> anchor 'field-issue-type'}}Issue Type

This field indicates the type of incident described by the ticket. Possible ticket types are:

* [Question](#ticket-question): any question about the Nuxeo Platform,
* [Bug](#ticket-bug): incident linked to the Nuxeo Platform,
* [Problem](#ticket-problem): incident linked to the customer's developments,
* [Improvement](#ticket-improvement): request for improvements or new features, for which Nuxeo can do an estimate for a development package.

Identifying the type of issue is important because it determines what elements will be needed to describe the ticket (see the [Description section](#field-description)).

## {{> anchor 'field-description'}}Description

The content of this field depends on the [type of the ticket](#field-issue-type) and is necessary to its process. You should then carefully fill this field in.

### {{> anchor 'ticket-question'}}Question Ticket

You must describe precisely what information you're looking for or what you're trying to do, providing the context of the question so we can give an accurate answer.

If the question is too complex or too dependent on the business context, the Support team can suggest a consulting service so Nuxeo can analyze the customer needs more precisely and provide a more complete answer.

### {{> anchor 'ticket-bug'}}Bug Ticket

First, you must check it is actually a bug from the Nuxeo Platform and not a problem, i.e. an incident linked to the customer's developments.
To do so, check your scenario can be reproduced on a stock Nuxeo Platform, without the customer's plugins or Studio customizations.

If not sure, it is better to create a "Problem" issue for which the customer provides more information.

In case of a bug, it is essential to provide the Support team with a way to reproduce the bug. You must provide:

* the step-by-step scenario to reproduce the bug;
* the server logs: you can try to extract the last stacktrace from the console or the `server.log` file or the message displayed on the web user interface;
* a screenshot showing the user interface before and after the bug, if relevant.

Even if only one of these elements might be enough to identify the bug, the better the bug is described, the quicker and more efficiently the bug will be fixed.

### {{> anchor 'ticket-problem'}}Problem Ticket

This type is for incidents linked to the customer's developments. In that case, you must provide the elements needed in case of a bug and you should also:

* provide the plugins you developed AND/OR the developments you think are related to the problem (Java classes, templates, unit tests, XML configuration files),
* identify the last changes done on the platform since the moment it worked fine.

If you work with Nuxeo Studio, you will probably keep working on your project as Nuxeo works on the ticket. In that case, Nuxeo needs to be able to work on a frozen version of the project. To enable that, you can:

* attach the Studio plugin (.jar file) used at the time of the tests to the JIRA ticket,
* put a tag on the Studio project, named from the JIRA ticket.

On a production environment, it is important to identify the date at which the incident occurred, to find the corresponding errors in the logs.

### {{> anchor 'ticket-improvement'}}Improvement Ticket

This type is for behaviors that are not available by default on the Nuxeo Platform and that you would like to implement. It enables you to ask the Nuxeo team for advices or good practices to implement a new behavior. For this type of ticket, you just need to indicate the wanted behavior and possible constraints in the Description field.

## {{> anchor 'field-affects-version'}}Affects Versions

You must indicate which version of Nuxeo you are using (6.0, 7.10, etc.), independently from the installed hotfixes (which will be indicated in the [ **Environment** field](#field-environment)).

## {{> anchor 'field-severity'}}Severity

Indicate the criticality of the issue, which also depends on the target environment (Production vs Staging/Development):

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Severity Level

</th><th colspan="1">

NUXEO Severity Definitions for Nuxeo Document Repository in Production environment

</th><th colspan="1">

NUXEO Severity Definitions for Nuxeo Document in Development and Test environment.

</th></tr><tr><td colspan="1">

1\. Blocker

</td><td colspan="1">

Catastrophic production problem which severely impacts your production systems, or during which, your production systems are down or not functioning; loss of production data and no procedural work around exists. Severity 1 problems also include security breaches.

</td><td colspan="1">

Critical blocking problem, preventing you from any development progress

</td></tr><tr><td colspan="1">

2\. Critical

</td><td colspan="1">

High-impact problem in which your operation is disrupted but there is capacity to remain productive and maintain necessary business-level operations.

</td><td colspan="1">

Any problem which makes the use or continued use of any one or more functionalities of the Nuxeo Platform difficult in development, has a significant impact on the progress of software projects, and cannot be reasonably circumvented or avoided on a temporary basis without the expenditure of significant time or effort.

</td></tr><tr><td colspan="1">

3\. Major

</td><td colspan="1">

Medium-to-low impact problem that involves partial non-critical functionality loss impairing some operations but allowing you to continue to operate.

</td><td colspan="1">

General queries relating to use and/or implementation of the Nuxeo Platform, which do not qualify as a Severity 2 problem.

</td></tr><tr><td colspan="1">

4\. Minor

</td><td colspan="1">

Display or translation problems; general use questions, recommendations for future product enhancements or modifications. There is no impact on the quality, performance or functionality of the Nuxeo Platform .

</td><td colspan="1">N/A</td></tr><tr><td colspan="1">5\. Detail</td><td colspan="1">Cosmetic issue (label, style, etc.).</td><td colspan="1">Cosmetic issue (label, style, etc.).</td></tr></tbody></table></div>

The severity depends only on the ticket criticality, as it is described above.

The detailed information on the response and resolution time depending on the SLA (Service Level Agreement) are available on this page: [http://www.nuxeo.com/products/support/](http://www.nuxeo.com/products/support/).

## {{> anchor 'field-nuxeo-connect-support'}}Nuxeo Connect Support

That drop down list enables to link the JIRA ticket and the Connect contract. This enables the Support team to have a minimum set of information on the customer's application (Nuxeo Platform version, OS, database), and to have a quick overview of the environment in which Nuxeo is deployed.

If your Nuxeo Connect account is associated to one contract, only this contract is available in the list. If you have several contracts, you should be careful to select the good one.

## {{> anchor 'field-instance-type'}}Instance Type

The fields enables the Support team to know about possible constraints linked to the type of instance. This may have an impact on the recommendations the Support team will give you.

The different types of instance are:

* Development: the issue occurs on a development environment. On a development instance, some criteria like data conservation my be considered as not critical.
* Testing/QA: the issue occurs on the testing environment, which may typically have a limited number of users.
* Production: the issue occurs on the live environment. The Support team may provide a workaround solution first so as to unblock users quickly, before providing a long-term solution. They may also suggest a conference call to get some more detailed information more quickly.

## {{> anchor 'field-environment'}}Environment

In case of a bug or a problem, it is important to describe the application's environment.

From Nuxeo Platform 5.6, the easiest way is to provide the result of the `showconf` command, that gives a summary of the configuration (nuxeo.conf and packages) with passwords obfuscated.

* On Linux:

    ```
    # ./nuxeoctl showconf
    ```

* On MS Windows:

    ```
    > nuxeoctl.bat showconf
    ```

It can also be interesting to precise the information below so the test server corresponds to the client's :

* OS (Redhat EL 5.4 64 bits, Windows 2003 SP2 32 bits, &hellip;) of both the server and the client machine,
* browser (IE8, Firefox 17, Chrome 23, etc &hellip;): important for incidents linked to the client machine,
* database (PostgreSQL 9.1, Oracle 11g, etc &hellip;),
* additional packages installed,
* application server (Tomcat by default, JBoss),
* installed hotfixes.

## {{> anchor 'field-components'}}Component/s

Amongst the additional fields, you can indicate the components the tickets is about. You can select one or several components from the multiple choice list. If you don't know which components are relevant, you can leave this field empty and the Support team will update the ticket.

This field is mainly used for statistic purposes, since it enables us to know which components require some developments.

## {{> anchor 'field-additional-participant-group'}} Additional Participant Groups

This field enables to share a ticket with a group of users. This is particularly useful for customers with several contacts.

The expected group is one of the groups the user is a member of, which can be seen from the user's profile ([https://jira.nuxeo.com/secure/ViewProfile.jspa](https://jira.nuxeo.com/secure/ViewProfile.jspa)), and usually looks like "support-COMPANYNAME".

## {{> anchor 'field-additional-read-only-group'}} Additional Readonly Groups

This field enables to share a ticket with a group of read-only users. These users would typically be IT managers who only need visibility into support issues and do not need to open or modify support tickets.

Read-only groups are available for contracts specifying read-only contacts. Read-only group names usually look like "support-ro-COMPANYNAME".

## Additional Recommendations

Here are some good practices to improve the ticket:

* Do not describe your issue in a .doc or .docx file, so that the ticket remains readable on any device or media (smartphone browser, smartphone application, tablet, computer browser).
* Do not paste hundreds of lines of logs in a comment, but attach the logs to the ticket in a .txt file if the stacktrace is longer than 20 lines or so.
* For advanced users, do not hesitate to use the formatting features of JIRA to improve your description:
    * formatted text
    * source code
    * links
    * bullet lists

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related pages'}}

- [JIRA Tickets Workflow]({{page page='jira-tickets-workflow'}})
- [Ticket Follow Up]({{page page='ticket-follow-up'}})
- [Support / JIRA]({{page page='support-jira'}})

{{/panel}}
</div>
<div class="column medium-6"></div>
</div>
