---
title: Jenkins plugins
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '3868997'
    ajs-parent-page-title: Quality Assurance and Continuous Integration
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Jenkins+plugins
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Jenkins+plugins'
    page_id: '12913959'
    shortlink: Jw3F
    shortlink_source: 'https://doc.nuxeo.com/x/Jw3F'
    source_link: /display/CORG/Jenkins+plugins
tree_item_index: 400
history:
    -
        author: Julien Carsique
        date: '2016-06-30 14:45'
        message: pdate plugin usag
        version: '11'
    -
        author: Julien Carsique
        date: '2014-09-26 17:34'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-07-23 18:14'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-07-23 18:07'
        message: ''
        version: '8'
    -
        author: Julien Carsique
        date: '2014-05-06 16:20'
        message: ''
        version: '7'
    -
        author: Julien Carsique
        date: '2013-04-29 17:13'
        message: JIRA Issue macro params updated with additional server info
        version: '6'
    -
        author: Julien Carsique
        date: '2013-04-29 17:13'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2013-02-14 18:19'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-02-14 18:18'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2013-02-14 18:15'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2013-02-14 12:24'
        message: ''
        version: '1'

---
Here is a quick overview of the Jenkins plugins used at Nuxeo. Core plugins (and those used to be part of the core) are not listed (i.e. Ant, Javadoc, SVN).

A lot of other plugins are under tests, for adding capabilities or replacing earlier solutions. The "Usage" column indicates how much we consider a plug-in as recommended (somehow useful) or required (we couldn't live without or it was a pain before). Of course, this is fully subjective.

Comments and recommendations are welcome.

&nbsp;

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Usage</th><th colspan="1">Jenkins administration, job configuration and capabilities</th></tr><tr><td colspan="1">Required</td><td colspan="1">[LDAP Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/LDAP+Plugin)</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

<div>[Priority Sorter](http://wiki.hudson-ci.org/display/HUDSON/Priority+Sorter+Plugin)</div>

<div class="excerpt">

<div>This plug-in allows for the build queue to be sorted based on pre-assigned priorities for each job.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Hudson Port Allocator Plug-in](http://wiki.hudson-ci.org/display/HUDSON/Port+Allocator+Plugin)</div>

<div class="excerpt">

<div>This plug-in allocates free ports as environment variables.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Hudson Google Analytics Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Google+Analytics+Plugin)</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Hudson Setenv Plug-in](http://wiki.hudson-ci.org/display/HUDSON/Setenv+Plugin)</div>

<div class="excerpt">

<div>This plug-in can be used to set environment variables to be applied to all build steps in a given job.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Jenkins Multiple SCMs Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Multiple+SCMs+Plugin)</div>

<div class="excerpt">

<div>This plug-in enables the selection of multiple source code management systems for a build. For example, it enables checking out the source code from one SCM while checking out legacy or third-party code from another.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Hudson Post build task](http://wiki.hudson-ci.org/display/HUDSON/Post+build+task)</div>

<div class="excerpt">

<div>This plug-in allows to execute a batch/shell task depending on the build log output.</div>

</div>

</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

<div>[Jenkins java.io.tmpdir cleaner Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Tmp+Cleaner+Plugin)</div>

</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

<div>[Matrix Reloaded Plug-in](https://wiki.jenkins-ci.org/display/JENKINS/Matrix+Reloaded+Plugin)</div>

<div class="excerpt">

<div>The Matrix Reloaded plug-in. Used for rebuilding a subset of a matrix' configurations, reusing the rest.</div>

</div>

</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

<div>[Jenkins Parameterized Trigger Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Parameterized+Trigger+Plugin)</div>

<div>This plug-in lets you trigger new builds when your build has completed, with various ways of specifying parameters for the new build.</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Jenkins GIT Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Git+Plugin)</div>

<div class="excerpt">

<div>This plug-in integrates [GIT](http://git.or.cz/) with Jenkins.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Git server Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Git+Server+Plugin)</div>

<div class="excerpt">

<div>Allows Jenkins to act as a Git server.</div>

</div>

</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

<div>[Node and Label parameter Plug-in](https://wiki.jenkins-ci.org/display/JENKINS/NodeLabel+Parameter+Plugin)</div>

<div>This plug-in adds two new parameter types to job configuration - node and label, this allows to dynamically select the node where a job/project should be executed.</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Jenkins Email Extension Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Email-ext+plugin)</div>

<div class="excerpt">

<div>This plug-in is a replacement for Jenkins's email publisher</div>

</div>

</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

<div>[next-executions](https://wiki.jenkins-ci.org/display/JENKINS/Next+Executions)</div>

<div>Adds a widget in the sidebar with the next _build_ date for all the scheduled projects. It also creates a column definition.</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Bulk Builder](http://wiki.jenkins-ci.org/display/JENKINS/Bulk+Builder+Plugin)</div>

<div class="excerpt">

<div>Trigger multiple builds with ease. Useful for Jenkins users with many jobs.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Jenkins Dry Run Plug-in](https://wiki.jenkins-ci.org/display/JENKINS/DryRun+Plugin)</div>

<div>This plug-in makes it possible a execute a dry-run for the job.</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Rebuilder](http://wiki.jenkins-ci.org/display/JENKINS/Rebuild+Plugin)</div>

<div class="excerpt">

<div>This plug-in is for rebuilding a job using the same parameters.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[SCM Sync Configuration Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/SCM+Sync+configuration+plugin)</div>

<div class="excerpt">

<div>This plug-in allows you to synchronize your hudson configuration files with an SCM, allowing you to specify a commit message every time a config file is modified.</div>

</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[GitHub Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Github+Plugin)</div>

<div class="excerpt">

<div>This plug-in integrates [GitHub](http://github.com/) to Jenkins.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Job Import Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Job+Import+Plugin)</div>

<div class="excerpt">

<div>The [Job Import Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Job+Import+Plugin) lets you import jobs from another Jenkins instance.</div>

</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Jenkins Mercurial Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Mercurial+Plugin)</div>

<div class="excerpt">

<div>This plug-in integrates [Mercurial SCM](http://www.selenic.com/mercurial/) with Hudson. It includes repository browsing support for `hg serve`/`hgweb`, Google Code, Bitbucket, FishEye, KilnHG and RhodeCode. Features include guaranteed clean builds, named branch support, module lists, Mercurial tool installation, and automatic caching.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Join Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Join+Plugin)</div>

<div>This plug-in allows a job to be run after all the immediate downstream jobs have completed.</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Monitoring](http://wiki.jenkins-ci.org/display/JENKINS/Monitoring)</div>

<div class="excerpt">

<div>Hudson/Jenkins' monitoring with [JavaMelody](http://javamelody.googlecode.com). Open [report](http://qa.nuxeo.org/jenkins/monitoring) after installation.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">[File Leak Detector Plugin](https://wiki.jenkins-ci.org/display/JENKINS/File+Leak+Detector+Plugin)
Runtime diagnosis tool for "too many open files" problem.</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">[CloudBees Monitoring Plugin](https://release-notes.cloudbees.com/product/CloudBees+Monitoring+Plugin)
This plugin provides metrics based monitoring for Jenkins.</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Jenkins Gradle Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Gradle+Plugin)</div>

<div class="excerpt">

<div>This plug-in allows Jenkins to invoke [Gradle](http://www.gradle.org/) build scripts directly.</div>

</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Jenkins MSBuild Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/MSBuild+Plugin)</div>

<div class="excerpt">

<div>This plug-in makes it possible to build a Visual Studio project (.proj) and solution files (.sln).</div>

</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Android Emulator Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Android+Emulator+Plugin)</div>

<div class="excerpt">

<div>Starts an Android emulator with given properties before a build, then shuts it down after.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Build Pipeline Plug-in](https://code.google.com/p/build-pipeline-plugin)</div>

<div class="excerpt">

<div>This plug-in renders upstream and downstream connected jobs that typically form a build pipeline. In addition, it offers the ability to define manual triggers for jobs that require intervention prior to execution, e.g. an approval process outside of Jenkins.</div>

</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Jenkins build timeout Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Build-timeout+Plugin)</div>

<div class="excerpt">

<div>This plug-in allows builds to be automatically terminated after the specified amount of time has elapsed.</div>

</div>

</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

<div>[Timestamper](http://wiki.jenkins-ci.org/display/JENKINS/Timestamper)</div>

<div>Adds timestamps to the Console Output.</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Jenkins promoted builds Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Promoted+Builds+Plugin)</div>

<div class="excerpt">

<div>This plug-in implements a "promoted build" feature where a build of one job can be marked as "promoted" when it passes certain criteria.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Naginator](http://wiki.hudson-ci.org/display/HUDSON/Naginator+Plugin)</div>

<div class="excerpt">

<div>This plug-in allows you to reschedule job upon failure.</div>

</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Jenkins batch task Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Batch+Task+Plugin)</div>

<div class="excerpt">

<div>This plug-in adds the "task" action to the project for performing batch tasks on the server workspace.</div>

</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Jenkins SSH Slaves Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/SSH+Slaves+plugin)</div>

<div>This plug-in allows you to manage slaves running on *nix machines over SSH. It adds a new type of slave launch method.</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Scriptler](http://wiki.jenkins-ci.org/display/JENKINS/Scriptler+Plugin)</div>

<div class="excerpt">

<div>Scriptler allows you to store/edit/execute groovy scripts on any of the slaves/nodes... no need for copy paste groovy code anymore. Beside administer your scripts, Scritpler also provides a way to share scripts between users via hosted script catalogs on the internet.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Dependency Graph Viewer Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Dependency+Graph+View+Plugin)</div>

<div class="excerpt">

<div>This plug-in shows a dependency graph of the projects. It uses dot (from graphviz) for drawing.</div>

</div>

</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

<div>[Jenkins disk-usage Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Disk+Usage+Plugin)</div>

<div class="excerpt">

<div>This plug-in counts disk usage.</div>

</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[XCode integration](https://wiki.jenkins-ci.org/display/JENKINS/Xcode+Plugin)</div>

<div class="excerpt">

<div>This plug-in provides builders to build xcode projects, invoke agvtool and package .ipa files</div>

</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">[Amazon EC2](https://wiki.jenkins-ci.org/display/JENKINS/Amazon+EC2+Plugin)

<div class="excerpt">

<div>This plug-in integrates Jenkins with [Amazon EC2](http://aws.amazon.com/ec2/) or anything implementing the EC2 API's such as [Ubuntu Enterprise Cloud](http://www.ubuntu.com/cloud/private) (Eucalyptus).</div>

</div>

</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

[CloudBees Template Plug-in](http://jenkins-enterprise.cloudbees.com/docs/user-guide-bundle/template.html)
The template plug-in gives the Jenkins administrator the opportunity to provide users a simplified and directed experience for configuring jobs.

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">[CloudBees Folders Plugin](https://wiki.jenkins-ci.org/display/JENKINS/CloudBees+Folders+Plugin)
This plugin allows users to create "folders" to organize jobs.</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">[CloudBees Folders Plus Plugin](https://release-notes.cloudbees.com/product/Folders+Plus+Plugin)
This plugin adds enterprise extensions to the CloudBees Folders Plugin.</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">[PowerShell Plugin](https://wiki.jenkins-ci.org/display/JENKINS/PowerShell+Plugin)
Integrates with Windows PowerShell.</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

[Pipeline Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Pipeline+Plugin)
A suite of plugins that lets you orchestrate automation.

Related plugins:

*   [CloudBees Pipeline: Groovy Checkpoint Plugin](https://release-notes.cloudbees.com/product/CloudBees+Pipeline%3A+Groovy+Checkpoint+Plugin)
    Adds the ability to checkpoint a Groovy script and later rerun a build starting from the checkpoint.
*   [CloudBees Pipeline: Templates Plugin](https://release-notes.cloudbees.com/product/CloudBees+Pipeline%3A+Templates+Plugin)
    A specialized job template transformer for Pipelines
*   [CloudBees Docker Pipeline Plugin](https://wiki.jenkins-ci.org/display/JENKINS/CloudBees+Docker+Pipeline+Plugin)
    Allows to build and use Docker containers from [pipelines](https://wiki.jenkins-ci.org/display/JENKINS/Pipeline+Plugin).

</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">[CloudBees GitHub Branch Source Plugin](https://wiki.jenkins-ci.org/display/JENKINS/CloudBees+GitHub+Branch+Source+Plugin)
Multibranch projects and organization folders from GitHub.</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">[GitHub Organization Folder Plugin](https://wiki.jenkins-ci.org/display/JENKINS/GitHub+Organization+Folder+Plugin)
Pipeline-as-Code support for a whole GitHub organization. Scans all the branches & repositories in GitHub organization and build them via [Jenkins pipelines](http://jenkins-ci.org/solutions/pipeline/) automatically</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">[Multi Branch Project Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Multi-Branch+Project+Plugin)
This plugin adds additional project types that create sub-projects for each branch using a shared configuration.</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">[JobConfigHistory Plugin](https://wiki.jenkins-ci.org/display/JENKINS/JobConfigHistory+Plugin)
Saves copies of all job and system configurations.</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">[Job DSL Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Job+DSL+Plugin)
The job-dsl-plugin allows the programmatic creation of projects using a DSL.</td></tr><tr><td colspan="1">Required</td><td colspan="1">[Github OAuth Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Github+OAuth+Plugin)
The GitHub Authentication Plugin provides a means of using GitHub for authentication and authorization to secure Jenkins.</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">[Docker Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Docker+Plugin)
This plugin allows slaves to be dynamically provisioned using [Docker](http://www.docker.io/).</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">[Docker build step plugin](https://wiki.jenkins-ci.org/display/JENKINS/Docker+build+step+plugin)
This plugin allows to add various [Docker](https://www.docker.com/) commands into your job as a build step</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">[CloudBees Pull Request Builder for GitHub](https://release-notes.cloudbees.com/product/CloudBees+Pull+Request+Builder+for+GitHub)
Automatically build GitHub pull requests</td></tr><tr><td colspan="1">Required</td><td colspan="1">[CloudBees Quiet Start Plugin](https://release-notes.cloudbees.com/product/CloudBees+Quiet+Start+Plugin)
Allows you to request that Jenkins be in the &ldquo;quieting down&rdquo; state after a restart.</td></tr>
<tr><td colspan="1">Required</td><td colspan="1">[Role Based Access Control Plugin (RBAC)](https://release-notes.cloudbees.com/product/Role+Based+Access+Control+Plugin)
CloudBees Jenkins Enterprise plugin that provides an authorization strategy that provides for role-based access control.</td></tr>
<tr><td colspan="1"></td><td colspan="1">[Convert To Pipeline](https://plugins.jenkins.io/convert-to-pipeline) converts jobs to scripted Pipeline jobs.</td></tr>
</tbody></table></div>

&nbsp;

&nbsp;

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Usage</th><th colspan="1">Build management, analysis and reporting</th></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Change Log History](http://wiki.jenkins-ci.org/display/JENKINS/Change+Log+History+Plugin)</div>

<div class="excerpt">

<div>This plug-in copies change log data to a later build when a build is deleted.</div>

</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Claim Plug-in](https://wiki.jenkins-ci.org/display/JENKINS/Claim+plugin)</div>

<div class="excerpt">

<div>Allow users to claim failed builds.</div>

</div>

</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

<div>[Hudson Seleniumhq Plug-in](http://wiki.hudson-ci.org/display/HUDSON/Seleniumhq+Plugin)</div>

<div class="excerpt">

<div>This plug-in integrates [Seleniumhq](http://www.seleniumhq.org) to Hudson.</div>

</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Selenium HTML report](https://wiki.jenkins-ci.org/display/JENKINS/seleniumhtmlreport+Plugin)</div>

<div>This plug-in visualizes the results of selenium tests.</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Jenkins description setter Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Description+Setter+Plugin)</div>

<div class="excerpt">

<div>This plug-in sets the description for each build, based upon a [RegEx](http://java.sun.com/j2se/1.5.0/docs/api/java/util/regex/Pattern.html) test of the build log file.</div>

</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Jenkins TextFinder Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Text-finder+Plugin)</div>

<div class="excerpt">

<div>This plug-in is used to search for strings in workspace files. The outcome of this search can be used to mark the build as normal or failed.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Jenkins Cobertura Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Cobertura+Plugin)</div>

<div class="excerpt">

<div>This plug-in integrates [Cobertura coverage reports](http://cobertura.sf.net/) to Jenkins.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Task Scanner Plug-in](http://wiki.jenkins-ci.org/x/XoAs)</div>

<div class="excerpt">

<div>This plug-in scans for open tasks in a specified set of files in the project modules and visualizes the results.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Hudson global-build-stats Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Global+Build+Stats+Plugin)</div>

<div class="excerpt">

<div>This plug-in will allow you to manage global hudson build stats concerning build failures</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Checkstyle Plug-in](http://wiki.jenkins-ci.org/x/GYCGAQ)</div>

<div class="excerpt">

<div>This plug-in collects the [Checkstyle](http://checkstyle.sourceforge.net/) analysis results of the project modules and visualizes the found warnings.</div>

</div>

</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

<div>[Warnings Plug-in](http://wiki.jenkins-ci.org/x/G4CGAQ)</div>

<div class="excerpt">

<div>This plug-in collects the compiler warnings of the project modules and visualizes the results.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[JUnit Attachments Plug-in](https://wiki.jenkins-ci.org/display/JENKINS/JUnit+Attachments+Plugin)</div>

<div>This plug-in can archive certain files (attachments) together with your JUnit results.</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[All changes plug-in](http://wiki.jenkins-ci.org/display/JENKINS/All+Changes+Plugin)</div>

<div class="excerpt">

<div>This plug-in shows all changes (also from dependent projects, sub-projects, ...) for a project</div>

</div>

</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

<div>[Jenkins JIRA Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/JIRA+Plugin)</div>

<div class="excerpt">

<div>This plug-in integrates Jenkins to [Atlassian JIRA](http://www.atlassian.com/software/jira/).</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[PMD Plug-in](http://wiki.jenkins-ci.org/x/GAAHAQ)</div>

<div class="excerpt">

<div>This plug-in collects the [PMD](http://pmd.sourceforge.net/) analysis results of the project modules and visualizes the found warnings.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[FindBugs Plug-in](http://wiki.jenkins-ci.org/x/GYAs)</div>

<div class="excerpt">

<div>This plug-in collects the [FindBugs](http://findbugs.sourceforge.net/) analysis results of the project modules and visualizes the found warnings.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Jenkins Continuous Integration game](http://wiki.jenkins-ci.org/display/JENKINS/The+Continuous+Integration+Game+plugin)</div>

<div class="excerpt">

<div>The continuous integration build game.</div>

</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Jenkins Jabber notifier Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Jabber+Plugin)</div>

<div>Sends build notifications to jabber contacts and/or chatrooms. Also allows control of builds via a jabber 'bot'.</div>

</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

<div>[Show Build Parameters Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Show+Build+Parameters+Plugin)</div>

<div class="excerpt">

<div>This plug-in shows the parameter values on the main build page</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Duplicate Code Scanner Plug-in](http://wiki.jenkins-ci.org/x/X4IuAg)</div>

<div class="excerpt">

<div>This plug-in collects the duplicate code analysis results of the project modules and visualizes the found warnings.</div>

</div>

</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

<div>[Maven Deployment Linker](http://wiki.hudson-ci.org/display/HUDSON/Maven+Deployment+Linker)</div>

<div>This plug-in will add a summary on the build of the artifacts uploaded to your maven repository.</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Display Upstream Changes](http://wiki.jenkins-ci.org/display/JENKINS/Display+Upstream+Changes+Plugin)</div>

<div class="excerpt">

<div>Display upstream changes plug-in.</div>

</div>

</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

<div>[Jenkins Sonar Plug-in](http://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner+for+Jenkins)</div>

<div class="excerpt">

<div>Trigger [SonarQube](http://www.sonarqube.org/) analysis from Jenkins to quickly benefit from the leading open-source tool for continuous inspection.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Performance Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Performance+Plugin)</div>

<div class="excerpt">

<div>This plug-in integrates [JMeter reports](http://jakarta.apache.org/jmeter/) and the [JUnit reports](http://www.junit.org/) to Hudson.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">[Slack Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Slack+Plugin)
This plugin allows to post build notifications to a [Slack](https://slack.com/) channel.</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">[Gatling Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Gatling+Plugin)
This plugin integrates [Gatling](http://gatling-tool.org), an Open Source stress tool, with Jenkins.</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">[CloudBees Restart Aborted Builds Plugin](https://release-notes.cloudbees.com/product/CloudBees+Restart+Aborted+Builds+Plugin)
Tracks builds interrupted by abrupt halts and offers to restart them.</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">[Skip Next Build Plugin](https://release-notes.cloudbees.com/product/Skip+Next+Build+Plugin)
Stop running builds for a specified period of time (usually if there are known errors that are being fixed)</td></tr></tbody></table></div>

&nbsp;

&nbsp;

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Usage</th><th colspan="1">View, display</th></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Radiator View Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Radiator+View+Plugin)</div>

<div class="excerpt">

<div>Adds a new high visibility view of project status.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[built-on-column](http://wiki.jenkins-ci.org/display/JENKINS/Built-on+Column)</div>

<div class="excerpt">

<div>Shows the actual node that a job was built on</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Compact Columns](http://wiki.hudson-ci.org/display/HUDSON/Compact+Columns)</div>

<div class="excerpt">

<div>More compact columns for showing last success and failure. Easier to understand, and takes less room in your view.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Jenkins Version Column Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/VersionColumn+Plugin)</div>

<div class="excerpt">

<div>This plug-in shows the version of slaves column on "Manage Nodes" page.</div>

</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[Dashboard View](http://wiki.jenkins-ci.org/display/JENKINS/Dashboard+View)</div>

<div class="excerpt">

<div>Customizable dashboard that can present various views of job information.</div>

</div>

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

<div>[View Job Filters](http://wiki.jenkins-ci.org/display/JENKINS/View+Job+Filters)</div>

<div class="excerpt">

<div>Create smart views with exactly the jobs you want. Your smart views can automatically include or exclude jobs by using things like the SCM path or type, the job type, build statuses or trends or triggers, relevance to the logged-in user, email recipients, Maven configuration, job parameterization, and user permissions. Mix and match filters to narrow down to exactly what you want.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Extra Columns Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Extra+Columns+Plugin)</div>

<div class="excerpt">

<div>This is a general listview-column plug-in that currently contains the following columns: Test Result, Configure Project button, Disable/Enable Project button, Project Description, Build Description & SCM Type.</div>

</div>

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

<div>[Simple Theme Plug-in](http://wiki.jenkins-ci.org/display/JENKINS/Simple+Theme+Plugin)</div>

<div class="excerpt">

<div>A plug-in for Jenkins that supports custom CSS & JavaScript. You can customize Jenkins's appearance (ex. his gentle face on the background).</div>

</div>

</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">[Suppress Stack Trace Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Suppress+Stack+Trace+Plugin)
This plugin prevents the stack trace reported by Jenkins when a processing fails unexpectedly. This allows security sensitive deployments of Jenkins to minimize the information revealed to unprivileged/anonymous users.</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">[Embeddable Build Status Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Embeddable+Build+Status+Plugin)
This plugin allows Jenkins to&nbsp;expose the current status of your build as an image in a fixed URL.</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">[CloudBees Groovy View Plugin](https://release-notes.cloudbees.com/product/CloudBees+Groovy+View+Plugin)
Adds a view type rendering a Groovy script. Useful in conjunction with Templates.</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">[Build Trigger Badge Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Build+Trigger+Badge+Plugin)
This plugin&nbsp;displays icon(s) representing the cause(s) of a build directly in the build history. It lets you quickly know which cause triggered a build.</td></tr></tbody></table></div>

See {{jira server='Nuxeo Issue Tracker' key='NXBT-306'}} for plugins under review.

Beside the pure Jenkins plugins, there are external tools related with Jenkins:

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Usage</th><th colspan="1">Tools</th></tr><tr><td colspan="1">Required</td><td colspan="1">

[Nuxeo Jenkins report](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-jenkins-report-mp)
This Nuxeo plug-in generates reports from Jenkins builds inside Nuxeo. It helps to monitor the global CI status and to manage the duty planning between developers.

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

[Jenkviz](https://github.com/bdelbosc/jenkviz)
Tool to crawl a Jenkins site, producing a [SVG](http://public.dev.nuxeo.com/%7Eben/demo.svg) output to render the build flow. It helps to improve the CI cycles.

</td></tr><tr><td colspan="1">Required</td><td colspan="1">

SCM hooks:

*   Jenkins GitHub plug-in
*   Home-made scripts for Jenkins triggering and checkins mailing.

</td></tr><tr><td colspan="1">Under study</td><td colspan="1">

[Jennifer](https://github.com/percolate/jennifer)
A node.js daemon that syncs Github pull requests with Jenkins jobs

</td></tr><tr><td colspan="1">Required</td><td colspan="1">[Xvfb](http://en.wikipedia.org/wiki/Xvfb) and [X11vnc](http://en.wikipedia.org/wiki/X11vnc)
There are available Jenkins plugins (to be tested) for managing those tools, we currently use Linux scripts.</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">[Sonar](http://www.sonarsource.org/)
An open platform to manage code quality.</td></tr><tr><td colspan="1">Recommended</td><td colspan="1">

[<span class="s">Mylyn Hudson/Jenkins Connector</span>](http://tasktop.com/connectors/hudson-jenkins.php)
Integrates Jenkins within the Eclipse IDE.

</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">[Jenkins Mood widget](https://play.google.com/store/apps/details?id=hudson.android.mood)
Android widget for monitoring Jenkins.</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">

[Jenkins build monitor](https://addons.mozilla.org/fr/firefox/addon/jenkins-build-monitor/)
Firefox addon for monitoring Jenkins.

</td></tr></tbody></table></div>

&nbsp;

&nbsp;
