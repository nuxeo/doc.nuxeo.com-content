---
title: Nuxeo Jenkins Report
review:
    comment: ''
    date: '2018-03-26'
    status: ok
labels:
    - nuxeo-jenkins-report
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '11043055'
    ajs-parent-page-title: Adding Features
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Nuxeo+Jenkins+Report
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Nuxeo+Jenkins+Report'
    page_id: '14257459'
    shortlink: M43Z
    shortlink_source: 'https://doc.nuxeo.com/x/M43Z'
    source_link: /display/USERDOC/Nuxeo+Jenkins+Report
tree_item_index: 900
history:
    -
        author: Solen Guitter
        date: '2016-08-30 14:46'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2015-11-25 16:26'
        message: new Edit permission
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-08-26 09:24'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2014-12-08 11:47'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2013-12-20 14:42'
        message: Removed related topics from TOC
        version: '4'
    -
        author: Solen Guitter
        date: '2013-08-06 18:39'
        message: ''
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2013-08-06 17:58'
        message: 'NXDOC-176: review jenkins report doc'
        version: '2'
    -
        author: Solen Guitter
        date: '2013-08-06 17:36'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='/nxdoc/generic-multi-excerpts'}}}

{{! excerpt}}

The [Nuxeo Jenkins Report addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-jenkins-report-mp) enables users of the Nuxeo Platform to generate and send reports on the status of the Continuous Integration on Jenkins, directly from the Nuxeo Platform. This addon is for development teams, to help them follow and share the status of their continuous integration, while leveraging the content management features of the Nuxeo Platform.

{{! /excerpt}}

This addon enables users to create Jenkins Reports Containers, in which the reports will be stored. Users will then be able to generate reports. The workflow of a report is the following:

1.  A developer generates a report.
    He gets a status of the continuous integration, that indicates which jobs are successful and which ones are failing.
2.  On Jenkins, he updates failing jobs with a description explaining the reason why the job fails or any relevant information.
3.  In the Nuxeo Platform, he updates the report, so as to get the descriptions and information he just filled in on Jenkins.
    He gets a report trend when the status changes.
4.  He fills in the Jenkins Duty Comments.
    This comment enables developers to explain the trends of the report, to summarize the automatically generated report and gather related issues. Other developers can have a look at this comment and have an idea of what is currently going on on the CI system without having to scroll down the all jobs lists.
5.  When this summary is done, he can send the report by email to the e-mail address that was set up on the Report Container.

Each of the steps is explained in details below.

## Creating a Jenkins Reports Container

The Jenkins Reports Container is where Jenkins reports will be generated and stored. It defines from which Jenkins instance reports will be generated. It also defines to what e-mail address reports will be sent to. It also enables you to define a planning of who is going to be in charge of generating the reports and when.

Jenkins Reports Containers can be created in workspaces and folders, by users who have at least Edit&nbsp;permissions.

**To create a Jenkins Reports Container:**

1.  In the **Content** tab of the workspace, click on the **New** button.
2.  On the window **Available document types**, click on the Jenkins Reports Containers.
    ![]({{file name='jenkins-report-available-docs.png'}} ?w=500,border=true)
3.  Fill in the creation form.
4.  Click on the **Create** button.
    The **Summary** tab of the container is displayed. It holds no report for now.

**Jenkins Report Container metadata**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1"><span class="widgetLabel  required">Title</span></td><td colspan="1">The name of the folder</td></tr><tr><td colspan="1"><span class="widgetLabel  ">Description</span></td><td colspan="1">A short text that explains what will be in the container, for instance what project it will be about.</td></tr><tr><td colspan="1">Jenkins View URL</td><td colspan="1">The URL from which the report will be generated, allowing you to define reports depending on the view configuration in Jenkins.</td></tr><tr><td colspan="1"><span class="widgetLabel  ">Jenkins Claims URL</span></td><td colspan="1">The URL where Jenkins claims are visible (sadly not showing claims for multi-db jobs)</td></tr><tr><td colspan="1"><span class="widgetLabel  required">Report email</span></td><td colspan="1">The e-mail address to which users will be able to send the reports to. It can typically be a mailing list address for your development team.</td></tr><tr><td colspan="1"><span class="widgetLabel  ">Jira Browse URL</span></td><td colspan="1">The URL of the JIRA instance that will be referenced from Jenkins.
This is used with the "JIRA projects" to generate clickable links in the reports to the JIRA issues.</td></tr><tr><td colspan="1"><span class="widgetLabel  ">Jira projects</span></td><td colspan="1">The ID of the JIRA projects that will be referenced from Jenkins.
This is used with the "JIRA Browse URL" to generate clickable links in the reports to the JIRA issues.</td></tr><tr><td colspan="1"><span class="widgetLabel  ">Duty planning</span></td><td colspan="1">Indicate if you have a planning of who will be in charge of doing the Jenkins reports and when.</td></tr></tbody></table></div>

## Creating a Report

**To create a Jenkins report:**

1.  On the Jenkins Reports Container **Summary** tab, click on the **New Jenkins Report** button.
    The Jenkins report creation form is displayed.
2.  Fill in the form.
3.  Click on the **Update from Jenkins** button to get the list of unstable jobs.

    {{#> callout type='tip' }}

    You can get this list after you created the report, by clicking the **Update from Jenkins** button from the report's Summary or Edit tabs.

    {{/callout}}
4.  Click on the **Create** button.
    The Summary tab of the report is displayed. It shows the information below:

    *   The trend of the report: the trend is currently 0 since this is the first version of the report. It will be updated when you [update the report](#updating-report).
    *   The number of failing jobs and unclaimed errors and their trends as compared with the previous report;
    *   The Duty Comment, as filled in on the Creation form;
    *   The list of unstable jobs.![]({{file name='jenkins-report-report-created.png'}} ?w=650,border=true)
    You can now take a look at the failing jobs and [update the report](#updating-report).

**Jenkins report metadata**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1">Title</td><td colspan="1">This is prefilled with the current date, but you can edit it to put any name that is relevant for your report.</td></tr><tr><td colspan="1"><span class="widgetLabel  required">Reporter</span></td><td colspan="1">This is already filled in with the current user. It can be changed with any user of the application using the suggestion search.</td></tr><tr><td colspan="1"><span class="widgetLabel  required">Report date</span></td><td colspan="1">

Date of the report. Already filled in with the current date.

</td></tr><tr><td colspan="1">Previous nb failing jobs</td><td colspan="1">

The number of failing jobs from the previous report. This number must be manually filled in.

</td></tr><tr><td colspan="1">Previous nb unclaimed errors</td><td colspan="1">The number of unclaimed jobs from the previous report. This number must be manually filled in.</td></tr><tr><td colspan="1">Unstable Jobs</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">Jenkins Duty Comments</td><td colspan="1">A summary of the report. This is usually filled in after a first version of the report has been audited and the report has been updated. See the [Updating a report](#updating-report) section.</td></tr></tbody></table></div>

## {{> anchor 'updating-report'}}Updating a Report

### Examining unstable jobs

After a report has been created, you need to take a look at the unstable jobs to see what makes them fail.

The report displays the list of unstable jobs with the information below to help you examine them:

*   Status: an icon that shows the job's status;
*   Link: a link to the job, and a link to the last build at the moment of the report creation;
*   Claimer: the developer who claimed the job. This is most probably empty at the time the report is created;
*   Details: Information about the job.

![]({{file name='jenkins-report-unstable-jobs.png'}} ?w=650,border=true)

What you now need to do is to go on the problematic builds for unstable jobs on Jenkins and add a description to the build. This description is then displayed in the job's details after you update the report in Nuxeo.

### Updating the Report With Latest Jenkins Changes

After you examined the unstable jobs and added descriptions where they were relevant in Jenkins, you can update the report in Nuxeo so other developers can see the jobs qualification you just did.

To update a report, click on the **Update from Jenkins** button on the report's **Summary** tab, The report is updated. This means that:

*   The jobs that were unstable when the report was created are updated with the description you provided. If another build of the job occured since the report creation, it is added to the initial build in the Link column. If the job's status changed, an icon showing its new status is added to the initial status icon.
*   If new jobs are unstable, they are appended to the list of jobs, and a warning icon is displayed at the beginning of their row.
*   A trend is computed, showing if more or less jobs are unstable between the report creation and the last update.

### Filling In the Duty Comment

You can now make a summary of the CI status in the Jenkins Duty Comment field. This uses the same editor as a [note]({{page page='nxdoc/document-types'}}#note), which enables to add links to jobs and format your comment so it's easier to organize and read.

To fill in the Jenkins Duty Comment:

1.  In the Jenkins Duty Comment section of the report's **Summary** tab, click on the **Edit** button.
2.  Type your content and format it as you wish.
3.  Click on the **Save** button.
    Your comment is displayed on the report's **Summary** tab.
    ![]({{file name='jenkins-report-duty-comments.png'}} ?w=650,border=true)
    You can now send the report.

## Sending a Report

After you created and updated the report, you want to share it to the team. The Report Container is configured to enable sending reports to a predefined e-mail address. This e-mail address was filled in when the container was created, and can be edited at anytime from the **Edit** tab of the container.

To send the report:

1.  Click on the icon ![]({{file name='jenkins_send_email.png'}} ?w=16).</br>
    A confirmation window pops up. You can see the e-mail address the report will be sent to.
2.  Click on **OK** to confirm.
    An email is sent to the e-mail address. This email includes the information below:

    *   The number of failing jobs,
    *   The number of unclaimed jobs,
    *   The Jenkins Duty Comment.![]({{file name='jenkins-report-email.png'}} ?w=650,h=377,border=true)

&nbsp;

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Jenkins duty]({{page space='corg' page='jenkins-duty'}})
- [Nuxeo Jenkins Report dev documentation]({{page space='nxdoc' page='nuxeo-jenkins-report'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
