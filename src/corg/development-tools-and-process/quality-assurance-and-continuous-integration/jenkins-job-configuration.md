---
title: Jenkins Job Configuration
review:
    comment: ''
    date: ''
    status: ok
notes: >-
    Documentation page used by the Marketing team. Check with Marketing before deleting or moving.
confluence:
    ajs-parent-page-id: '3868997'
    ajs-parent-page-title: Quality Assurance and Continuous Integration
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Jenkins+Job+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Jenkins+Job+Configuration'
    page_id: '19235535'
    shortlink: z4IlAQ
    shortlink_source: 'https://doc.nuxeo.com/x/z4IlAQ'
    source_link: /display/CORG/Jenkins+Job+Configuration
tree_item_index: 300
toc: true
history:
    -
        author: Julien Carsique
        date: '2016-09-02 15:39'
        message: ''
        version: '14'
    -
        author: Julien Carsique
        date: '2016-09-02 15:36'
        message: ''
        version: '13'
    -
        author: Bertrand Chauvin
        date: '2016-09-02 15:00'
        message: update maven version info
        version: '12'
    -
        author: Manon Lumeau
        date: '2016-04-27 15:18'
        message: 'Fix Studio menu label   '
        version: '11'
    -
        author: Julien Carsique
        date: '2016-01-18 16:24'
        message: New Plugin template
        version: '10'
    -
        author: Solen Guitter
        date: '2015-11-30 10:10'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2014-12-23 14:17'
        message: mention that jenkins_pub is for public Studio projects
        version: '8'
    -
        author: Julien Carsique
        date: '2014-06-20 15:08'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2014-05-22 10:52'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2014-05-22 10:29'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2014-05-22 10:29'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2014-05-05 18:33'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2014-04-30 17:30'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2014-04-29 16:29'
        message: ''
        version: '1'
---

Here are Jenkins job templates recommended for setting up continuous integration over GitHub repositories containing Nuxeo Addons, Packages or Plugins.

{{#> callout type='note' }}
If your project is public and depends on a Studio project, you must add "jenkins_pub" as a contributor in the Studio settings.
{{/callout}}

The jobs are now organized within folders: you must not create a job at Jenkins root.

## Nuxeo Addons

For setting CI over a common Nuxeo Addon with a Maven build:

1.  Ensure your code respects the [Maven Coding Rules]({{page page='maven-coding-rules'}});
2.  Add your addon in the [Addons POM](https://github.com/nuxeo/addons/blob/master/pom.xml) or in the [Optionals Addons POM](https://github.com/nuxeo/addons/blob/master/pom-optionals.xml);
3.  Create a [new Jenkins job](http://qa.nuxeo.org/jenkins/view/Dashboard/newJob) and choose "**Nuxeo Addon**" template:

    <div class="table-scroll"><table class="hover"><tbody><tr><td colspan="1">**Name**</td></tr><tr><td colspan="1">Name it&nbsp;`addons_MODULE_NAME-BRANCH` (for instance: "addons_nuxeo-diff-master" for the "master" branch of "[https://github.com/nuxeo/nuxeo-diff](https://github.com/nuxeo/nuxeo-diff)")</td></tr><tr><td colspan="1">**Addon name**</td></tr><tr><td colspan="1">

    <div class="help">This is the repository name on GitHub. For instance:&nbsp;`nuxeo-diff` for [https://github.com/nuxeo/nuxeo-diff](https://github.com/nuxeo/nuxeo-diff).</div>

    </td></tr><tr><td colspan="1">**Branch name**</td></tr><tr><td colspan="1">

    <div class="help">Branch to build (ie:&nbsp;`master` or `5.8`)</div>

    </td></tr><tr><td colspan="1">**JDK**</td></tr><tr><td colspan="1">

    Nuxeo 7.2+ => Java 8 (`java-8-oracle`)
    Nuxeo 5.8, 6.0 => Java 7 (`java-7-sun` or `java-7-openjdk`)
    Nuxeo 5.6 => Java 6 (`java-6-sun` or `java-6-openjdk`)

    </td></tr><tr><td colspan="1">**Maven version**</td></tr><tr><td colspan="1">

    <div class="help">Nuxeo 6.0+ => Maven 3 (`maven-3`)
    Nuxeo 5.8 => Maven 2.2.1 (`maven-2.2.1`)</div>

    </td></tr><tr><td colspan="1">**Assigned node(s) or label(s)**</td></tr><tr><td colspan="1">

    <div class="help">Default is&nbsp;`SLAVE`</div>

    </td></tr></tbody></table></div>

## Nuxeo Packages

For setting CI over a common Nuxeo Package with a Maven build:

1.  Ensure your code respects the [Maven Coding Rules]({{page page='maven-coding-rules'}});
2.  Add your package in [marketplace.ini](https://github.com/nuxeo/integration-scripts/blob/master/marketplace.ini);
3.  Create a [new Jenkins job](http://qa.nuxeo.org/jenkins/view/Dashboard/newJob) and choose the "**Nuxeo Package**" template:

    <div class="table-scroll"><table class="hover"><tbody><tr><td colspan="1">**Name**</td></tr><tr><td colspan="1">

    <div class="help">Name it `addons_FT_MODULE_NAME-BRANCH` (for instance: `addons_FT_nuxeo-diff-master` for the master branch of [https://github.com/nuxeo/marketplace-diff](https://github.com/nuxeo/marketplace-diff), MP of [https://github.com/nuxeo/nuxeo-diff](https://github.com/nuxeo/nuxeo-diff). Note MODULE_NAME=nuxeo-diff and not marketplace-diff).</div>

    </td></tr><tr><td colspan="1">**Nuxeo Package name**</td></tr><tr><td colspan="1">

    <div class="help">This is the repository name on GitHub. For instance:&nbsp;`marketplace-diff` for [https://github.com/nuxeo/marketplace-diff](https://github.com/nuxeo/marketplace-diff).</div>

    </td></tr><tr><td colspan="1">**Branch name**</td></tr><tr><td colspan="1">

    <div class="help">Branch to build (ie:&nbsp;`master` or `1.1`)</div>

    </td></tr><tr><td colspan="1">**Upstream addon being packaged**</td></tr><tr><td colspan="1">For instance: "addons_nuxeo-diff-master"</td></tr><tr><td colspan="1">**JDK**</td></tr><tr><td colspan="1">

    Nuxeo 7.2+ => Java 8 (`java-8-oracle`)
    Nuxeo 5.8, 6.0 => Java 7 (`java-7-sun` or `java-7-openjdk`)
    Nuxeo 5.6 => Java 6 (`java-6-sun` or `java-6-openjdk`)

    </td></tr><tr><td colspan="1">**Maven version**</td></tr><tr><td colspan="1">

    <div class="help">

    Nuxeo 6.0+ => Maven 3 (`maven-3`)
    Nuxeo 5.8 => Maven 2.2.1 (`maven-2.2.1`)

    </div>

    </td></tr><tr><td colspan="1">**Maven profiles**</td></tr><tr><td colspan="1">

    <div class="help">Defaults:&nbsp;`-Pqa,ftest`</div>

    </td></tr><tr><td colspan="1">**Package(s) path**</td></tr><tr><td colspan="1">

    <div class="help">

    Relative path(s) to the Nuxeo Package(s) for upload on Connect and Connect Test, starting from inside the cloned repository.
    Shell wildcards accepted. A list with space as separator is also accepted. Any string for which&nbsp;`ls $path_to_mp` outputs the wanted packages.
    If empty, defaults to `marketplace/target/marketplace-*-SNAPSHOT.zip`.

    </div>

    </td></tr><tr><td colspan="1">**Files to archives**</td></tr><tr><td colspan="1">

    <div class="help">

    <div class="help">Ant wildcards accepted.
    If empty, defaults to `**/log/*.log, **/nxserver/config/distribution.properties, **/failsafe-reports/*, **/target/results/*.html, **/target/*.png, **/target/*.html`. The Nuxeo Package(s) configured above is (are) also archived.</div>

    </div>

    </td></tr><tr><td colspan="1">**Log files**</td></tr><tr><td colspan="1">

    <div class="help">Path to the files in which to search for errors. The console is always parsed.
    Common value is: `ftest/**/log/server.log`</div>

    </td></tr><tr><td colspan="1">

    <div class="section-header">**Additional upstream jobs**</div>

    </td></tr><tr><td colspan="1">

    <div class="help">Other upstream jobs than the "Upstream addon being packaged". If empty, defaults to `nuxeo-distribution-master`.</div>

    </td></tr><tr><td colspan="1">**Assigned node(s) or label(s)**</td></tr><tr><td colspan="1">

    <div class="help">Default is&nbsp;`SLAVE`</div>

    </td></tr></tbody></table></div>

## Nuxeo Plugins

For setting CI over a standalone Nuxeo Plugin (Addon + Package hosted together in the same GitHub repository) with a Maven build:

1.  Ensure your code respects the [Maven Coding Rules]({{page page='maven-coding-rules'}});
2.  Add your plugin in [marketplace.ini](https://github.com/nuxeo/integration-scripts/blob/master/marketplace.ini);
3.  Create a [new Jenkins job](http://qa.nuxeo.org/jenkins/view/Dashboard/newJob) and choose the "**Nuxeo Plugin**" template:

    <div class="table-scroll"><table class="hover"><tbody><tr><td colspan="1">**Name**</td></tr><tr><td colspan="1">

    <div class="help">Name it `plugins_MODULE_NAME-BRANCH-NXP_BRANCH`
    For instance:&nbsp;`plugins_nuxeo-timeoff-master-master` for the&nbsp;`master` branch of "[https://github.com/nuxeo/nuxeo-timeoff](https://github.com/nuxeo/nuxeo-timeoff)", building a plugin and its package based on the&nbsp;`master` branch of the Nuxeo Platform.
    For instance:&nbsp;`plugins_nuxeo-timeoff-1.0-7.10` for the&nbsp;`1.0` maintenance branch of "[https://github.com/nuxeo/nuxeo-timeoff](https://github.com/nuxeo/nuxeo-timeoff)", building a plugin and its package based on the&nbsp;`7.10` maintenance branch of the Nuxeo Platform.</div>

    </td></tr><tr><td colspan="1">**Plugin name**</td></tr><tr><td colspan="1">

    <div class="help">

    <div class="help">This is the repository name on GitHub. For instance: "nuxeo-timeoff" for [https://github.com/nuxeo/nuxeo-timeoff](https://github.com/nuxeo/nuxeo-timeoff).</div>

    </div>

    </td></tr><tr><td colspan="1">**Branch name**</td></tr><tr><td colspan="1">

    <div class="help">Branch to build (ie: "master" or "1.1")</div>

    </td></tr><tr><td colspan="1">**JDK**</td></tr><tr><td colspan="1">

    Nuxeo 7.2+ => Java 8 (`java-8-oracle`)
    Nuxeo 5.8, 6.0 => Java 7 (`java-7-sun` or `java-7-openjdk`)
    Nuxeo 5.6 => Java 6 (`java-6-sun` or `java-6-openjdk`)

    </td></tr><tr><td colspan="1">**Maven version**</td></tr><tr><td colspan="1">

    Nuxeo 6.0+ => Maven 3 (`maven-3`)
    Nuxeo 5.8 => Maven 2.2.1 (`maven-2.2.1`)

    </td></tr><tr><td colspan="1">**Maven profiles**</td></tr><tr><td colspan="1">

    <div class="help">

    <div class="help">Defaults:&nbsp;`-Pqa,marketplace,ftest`</div>

    </div>

    </td></tr><tr><td colspan="1">**Package(s) path**</td></tr><tr><td colspan="1">

    <div class="help">

    Relative path(s) to the Nuxeo Package(s) for upload on Connect and Connect Test, starting from inside the cloned repository.
    Shell wildcards accepted. A list with space as separator is also accepted. Any string for which "ls $path_to_mp" outputs the wanted packages.
    If empty, defaults to `marketplace/target/marketplace-*-SNAPSHOT.zip`.

    </div>

    </td></tr><tr><td colspan="1">**Files to archives**</td></tr><tr><td colspan="1">

    <div class="help">

    <div class="help">Ant wildcards accepted.
    If empty, defaults to `**/log/*.log, **/nxserver/config/distribution.properties, **/failsafe-reports/*, **/target/results/*.html, **/target/*.png, **/target/*.html`. The Nuxeo Package(s) configured above is (are) also archived.</div>

    </div>

    </td></tr><tr><td colspan="1">Deploy to Nexus</td></tr><tr><td colspan="1">

    <div class="help">Default:&nbsp;`false`</div>

    </td></tr><tr><td colspan="1">**Log files**</td></tr><tr><td colspan="1">

    <div class="help">

    <div class="help">Path to the files in which to search for errors. The console is always parsed.
    Common value is: `ftest/**/log/server.log`</div>

    </div>

    </td></tr><tr><td colspan="1">

    <div class="section-header">**Additional upstream jobs**</div>

    </td></tr><tr><td colspan="1">

    <div class="help">

    <div class="help">Other upstream jobs (for instance `nuxeo-distribution-master`).</div>

    </div>

    </td></tr><tr><td colspan="1">**Assigned node(s) or label(s)**</td></tr><tr><td colspan="1">

    <div class="help">Default is&nbsp;`SLAVE`</div>

    </td></tr></tbody></table></div>

<!--
## Sandbox Prototypes

&nbsp;

## Build Environment
-->

## Discard Old Build

{{#> panel type='code' heading='JenkinsFile'}}
```
properties([[$class: 'BuildDiscarderProperty',                                                            
                     strategy: [$class: 'LogRotator', artifactDaysToKeepStr: '',                           
                     artifactNumToKeepStr: '1',                                                            
                     daysToKeepStr: '60',                                                                  
                     numToKeepStr: '60']]])
```
{{/panel}}

About "Discard Old Build", the properties set in the job are lost when setting properties in the Jenkinsfile.

### Abort the Build If It's Stuck + Add Timestamps to the Console Output

{{#> panel type='code' heading='Jenkinsfile'}}
```
timestamps {
        timeout(time: 240, unit: 'MINUTES') {
                   // code here
                }
           }
 ```
{{/panel}}
