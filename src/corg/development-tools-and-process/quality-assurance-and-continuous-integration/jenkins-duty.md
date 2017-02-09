---
title: Jenkins duty
review:
    comment: ''
    date: ''
    status: ok
labels:
    - nuxeo-jenkins-report
toc: true
confluence:
    ajs-parent-page-id: '3868997'
    ajs-parent-page-title: Quality Assurance and Continuous Integration
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Jenkins+duty
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Jenkins+duty'
    page_id: '12915567'
    shortlink: bxPF
    shortlink_source: 'https://doc.nuxeo.com/x/bxPF'
    source_link: /display/CORG/Jenkins+duty
tree_item_index: 200
history:
    -
        author: Anahide Tchertchian
        date: '2016-03-08 10:12'
        message: ''
        version: '21'
    -
        author: Anahide Tchertchian
        date: '2016-03-08 10:10'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2015-11-30 10:16'
        message: Fix title capitalization
        version: '19'
    -
        author: Solen Guitter
        date: '2015-11-30 10:13'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
        version: '18'
    -
        author: Ronan Daniellou
        date: '2015-11-02 10:11'
        message: 'Typo: Jankins -> Jenkins'
        version: '17'
    -
        author: Pierre-Gildas Millon
        date: '2015-10-05 08:54'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2015-09-29 13:52'
        message: ''
        version: '15'
    -
        author: Anahide Tchertchian
        date: '2014-08-27 13:51'
        message: no need to report previous stats anymore
        version: '14'
    -
        author: Anahide Tchertchian
        date: '2014-08-12 17:58'
        message: no need to report previous stats anymore
        version: '13'
    -
        author: Anahide Tchertchian
        date: '2013-09-17 10:12'
        message: 'explain that report must be updated regurlarly, not just on Friday '
        version: '12'
    -
        author: Solen Guitter
        date: '2013-08-06 18:02'
        message: Added links to other Jenkins Report documentation
        version: '11'
    -
        author: Julien Carsique
        date: '2013-04-22 19:13'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2013-04-22 18:53'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2013-04-22 18:04'
        message: ''
        version: '8'
    -
        author: Julien Carsique
        date: '2013-04-22 15:44'
        message: ''
        version: '7'
    -
        author: Julien Carsique
        date: '2013-04-22 15:39'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2013-04-22 15:30'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2013-04-22 15:03'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2013-04-19 13:14'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2013-04-19 13:13'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2013-04-19 12:57'
        message: ''
        version: '1'

---
Of course, every commit is validated and all developers must be aware of the CI status, giving attention to the CI notifications. But, given the size of our code base, the number of repositories under continuous integration, the high level of expected quality and the variations in the feedback delay, there is still the need of a permanent work on CI to watch the global status, identify failure causes, set comprehensive descriptions and associated JIRA issues, fix or ping potential culprits, ... This repetitive task, called "Jenkins duty" has been affected to the whole team: every week, a developer is responsible of the Jenkins duty.

## Duty Procedure

### Week Organization

*   Monday: Jenkins report creation

    1.  Browse [https://intranet.nuxeo.com/nuxeo/nxpath/default/default-domain/workspaces/team-r-d/QA/QA%20reports@view_documents](https://intranet.nuxeo.com/nuxeo/nxpath/default/default-domain/workspaces/team-r-d/QA/QA%20reports@view_documents).
    2.  Create a new Jenkins Report: previous number of failing and unclaimed jobs should already be filled.
    3.  Start analyzing problems: these "reference" failing builds will keep on being listed by your report after each update, and will be updated if you fill information about them on Jenkins.

        *   For each build, there must be a claim (with description/JIRA ref) or a description.
        *   For each unclaimed build:

            *   If there's no description, analyze it and set a description.
            *   Depending on the cause,

                *   fix it yourself if it's quick and easy,
                *   find a culprit/volunteer/responsible and **ask him to claim.**
        *   For each claimed build, check the failure duration and optionally ask the claimer if he's effectively working on.
*   Tuesday to Friday
    *   Regularly click on "update from Jenkins" to see new failing builds, as well as builds that have been fixed: this will also update the report trend.
    *   Keep on watching the CI, analyzing issues, ...
    *   Reject new failures as much as possible: **if a failure is not quickly claimed and fixed, the responsible commits must be reverted**.
*   Friday: send Jenkins report

    1.  Fill duty comments as a summary of issues that have been fixed, and issues that still need some work. You do not need to list all failures if the list is long, just pick up failures that seem the most important (for instance IT and fullbuild jobs). Also explain everything needed about remaining duty work for the next player.
    2.  Send the report by email for the dev team by using the top right icon.

### Goals by Priority

1.  Ideally, there's no more failing jobs.
2.  All failing builds are claimed/described.
3.  At least, the trend is negative.

### Benefits

The Jenkins duty helps a lot to involve developers into QA&CI:

*   better understanding of the processes, constraints and advantages, focusing on build automation and generic code requirements, build reproducibility, comments and documentation, ...;
*   turn-over generates empathy and awareness: experiencing others' bad practices increases the attention bought to his own code and usages;
*   quickly, the spirit becomes "everyone is responsible of the whole software good quality" instead of "no one is responsible (neither aware) of its poor quality parts".

## Jenkins Claims and JIRA Issues

Most of the time, a claim must be associated to a JIRA issue (to be created if needed). Consider a Jenkins claim like a JIRA assignation+start progress: if you've claimed a failing build, you have to actually be working on it (not 1 week later). If you see you won't be able to do so, then you have to ensure the associated JIRA issue has enough details explaining the cause and possible fixes and shout around for help/warn others.

JIRA issues associated with a Jenkins failure must be **tagged as "QAEmergency"**.
Note: a failure has symptoms and a suspected cause. When filling a build description, starting with the symptoms is fine (to avoid other people looking at them) but writing the root cause (if known) is better: when the cause is known and confirmed, fill the description with a JIRA issue which will contain the symptoms, the cause and the suggested fix. Before creating a JIRA issue, you must check if there's not already one: search for the same symptoms in existing JIRA issues.

## Build Failure Analysis

When analyzing a failure, here is a usage suggestion:

1.  Go to the job page to see builds history.
2.  Is it the first failure? If not, look at the previous failures' descriptions/claims: it can be the same cause.
3.  Go to the failing build page.
4.  Look at the build color:

    *   Gray means "Aborted". Caused by a timeout or a manual abort.
    *   Yellow means "Unstable". Caused by a failing test, errors detected in the logs or an unsatisfied quality constraint.
    *   Red means "Broken". Caused by a build execution failure.
5.  Some publisher (JUnit report, Selenium reports, ...) may have raised the failure on the build summary page such as:

    *   <pre>numTestPasses: 33, numTestFailures: 2</pre>

    *   <pre>Tests results (1 fail / +1)
        org.nuxeo.cm.service.synchronization.TestMailboxSynchronizationService.testSynchro</pre>

6.  Go to the console page.
7.  Look at the end: there should be a message about the detected error such as:

    *   <pre>[ERROR] BUILD FAILURE        </pre>

    *   <pre>[ERROR] BUILD ERROR
        (...)
        Build step 'Invoke top-level Maven targets' marked build as failure.</pre>

    *   <pre>Build step 'Invoke Gradle script' changed build result to FAILURE.
        Build step 'Invoke Gradle script' marked build as failure.</pre>

    *   <pre>Build timed out (after 300 minutes). Marking the build as aborted.</pre>

    *   <pre>Build step 'Jenkins Text Finder' changed build result to UNSTABLE.</pre>

8.  Look at the build artifacts: some jobs are storing server/execution logs.

## Jenkins Report Nuxeo Plugin

The Jenkins report Nuxeo plugin generates reports from Jenkins builds inside Nuxeo. It helps to monitor the global CI status and to manage the duty planning between developers.

### Usage

The claims and descriptions are retrieved from Jenkins, copied to the Jenkins report. There's no copy back to Jenkins from the report, so **you must set the descriptions in Jenkins, not directly in the report**.

During the duty, you can update the report as often as you want.

You can email a report by clicking on the top right mail icon.

### References

Nuxeo Package: [https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-jenkins-report-mp](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-jenkins-report-mp)

Source code:

*   Java code: [https://github.com/nuxeo/nuxeo-jenkins-report](https://github.com/nuxeo/nuxeo-jenkins-report)
*   Studio code: [https://connect.nuxeo.com/nuxeo/site/studio/ide?project=nuxeo-jenkins-report](https://connect.nuxeo.com/nuxeo/site/studio/ide?project=nuxeo-jenkins-report)
    Note: the Nuxeo Studio project is not yet publicly visible but the produced artifact will be soon available for anonymous users.

Issue management: [https://jira.nuxeo.com/browse/NXBT/component/12309](https://jira.nuxeo.com/browse/NXBT/component/12309).

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Nuxeo Jenkins Report user documentation]({{page space='userdoc' page='nuxeo-jenkins-report'}})
- [Nuxeo Jenkins Report admin documentation]({{page space='nxdoc' page='nuxeo-jenkins-report'}})

{{/panel}}
</div>

<div class="column medium-6">

&nbsp;

</div>
</div>
