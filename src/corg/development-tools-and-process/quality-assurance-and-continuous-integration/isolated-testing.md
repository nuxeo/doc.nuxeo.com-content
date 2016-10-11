---
title: Isolated Testing
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '3868997'
    ajs-parent-page-title: Quality Assurance and Continuous Integration
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Isolated+Testing
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Isolated+Testing'
    page_id: '12913961'
    shortlink: KQ3F
    shortlink_source: 'https://doc.nuxeo.com/x/KQ3F'
    source_link: /display/CORG/Isolated+Testing
tree_item_index: 100
history:
    -
        author: Kevin Leturc
        date: '2016-02-02 10:19'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2015-09-29 13:49'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-07-02 14:39'
        message: ''
        version: '12'
    -
        author: Julien Carsique
        date: '2014-06-20 15:11'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2014-06-17 15:42'
        message: ''
        version: '10'
    -
        author: Thomas Roger
        date: '2013-10-01 15:05'
        message: ''
        version: '9'
    -
        author: Thomas Roger
        date: '2013-10-01 11:11'
        message: ''
        version: '8'
    -
        author: Julien Carsique
        date: '2013-04-29 15:52'
        message: ''
        version: '7'
    -
        author: Julien Carsique
        date: '2013-04-29 15:45'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2013-04-29 14:59'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2013-04-29 14:54'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2013-04-29 13:55'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2013-02-19 12:18'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2013-02-14 12:27'
        message: ''
        version: '1'

---
Here are solutions for testing your developments before merging them on the master branch.

## "On-Demand Test and Push" Jobs

Developers have their own dedicated job for building a branch, testing it and eventually automatically merging it if succeed.

1.  Push your changes to the GitHub Nuxeo repo(s) of your choice under a branch named "feature-NXP-9999-changes-description" (see [Nuxeo common usage and best practices]({{page page='git-usage'}}) about branch naming).
2.  Create a [new Jenkins job](http://qa.nuxeo.org/jenkins/view/Dashboard/newJob) and choose the "**Nuxeo On-Demand test and push**" template:

    <div class="table-scroll"><table class="hover"><tbody><tr><td colspan="1">**Name**</td></tr><tr><td colspan="1">

    <div class="help">Name it&nbsp;`ondemand-testandpush-USERNAME[-mavenX]` (for instance: "ondemand-testandpush-jcarsique" or "ondemand-testandpush-jcarsique-maven3"). If you need to create multiple instances, you can add a numbering at the end.</div>

    </td></tr><tr><td colspan="1">**Maven version**</td></tr><tr><td colspan="1">Usually "maven-3.2" or "maven-2.2.1"</td></tr><tr><td colspan="1">**Notification target**</td></tr><tr><td colspan="1">

    <div class="help">E-mail and Jabber ID to send notifications to. If empty, they are automatically retrieved from the logged user. However there's a drawback: When the template is edited, the retrieved user is the system.</div>

    </td></tr></tbody></table></div>

    The job is ready for use.

3.  Click on **Build with Parameters**.
4.  Fill the build parameters.

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Parameter</th><th colspan="1">Default value</th><th colspan="1">Description</th></tr><tr><td colspan="1">BRANCH</td><td colspan="1">feature-NXROADMAP-131-layouts</td><td colspan="1">Branch to test, fall-backs on $PARENT_BRANCH if not found.</td></tr><tr><td colspan="1">PARENT_BRANCH</td><td colspan="1">master</td><td colspan="1">The branch to fall-back on when $BRANCH is not found. This is also the branch on which $BRANCH is merged (before or after build and tests depending on $MERGE_BEFORE_BUILD value).</td></tr><tr><td colspan="1">MERGE_BEFORE_BUILD</td><td colspan="1">true</td><td colspan="1">

    If true, merge on $PARENT_BRANCH before build then, if merge is successful, run the tests.
    If false, merge will be done after tests.

    </td></tr><tr><td colspan="1">PUSH_IF_SUCCEED</td><td colspan="1">true</td><td colspan="1">Push $PARENT_BRANCH if all build and tests succeed.</td></tr><tr><td colspan="1">CLEAN</td><td colspan="1">true</td><td colspan="1">Whether to clean or not the workspace.</td></tr><tr><td colspan="1">MVN_TARGETS</td><td colspan="1">install</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">MVN_ADDITIONAL_OPTS</td><td colspan="1">`-fae` (Maven 2)
    `-fae -nsu -npu` (Maven 3)</td><td colspan="1">For instance: `-pl nuxeo-common`, `-rf somemodule` or `-N`</td></tr><tr><td colspan="1">MVN_ADDITIONAL_OPTS2</td><td colspan="1">`-fae`</td><td colspan="1">Maven 2 only.
    For instance: `-pl nuxeo-distribution-dm -amd` or `-rf somemodule`</td></tr><tr><td colspan="1">PROFILES</td><td colspan="1">

    `-Pqa,all-tests,qansu` (Maven 2)

    `-Pqa,all-tests` (Maven 3)

    </td><td colspan="1">Maven profiles to activate</td></tr><tr><td colspan="1">JDK_PATH</td><td colspan="1">&nbsp;</td><td colspan="1">If not empty, overrides the job configuration.</td></tr><tr><td colspan="1">Slave</td><td colspan="1">ondemand</td><td colspan="1">Default value (ondemand) uses AWS on-demand slave. Other recommended labels are: SLAVE, SLAVE4GB, OSXSLAVE, WINSLAVE</td></tr></tbody></table></div>

### Configuration Details

You can view the resulting configuration by adding&nbsp;`/config.xml` to the job URL. Here are a few details about the job configuration.

#### Discard Old Builds (Log Rotation Strategy)

*   Days to keep builds: **21**
*   Max # of builds to keep: **100**
*   Days to keep artifacts: **(empty)**
*   Max # of builds to keep with artifacts: **1**

#### Push Batch Task

Manually perform the push (useful if "PUSH_IF_SUCCEED" was not checked).

{{#> panel type='code' heading='push'}}

```bash
. scripts/gitfunctions.sh
gitfa pull --rebase
! (gitfa status --porcelain | grep -e "^U")
gitfa push origin $PARENT_BRANCH
```

{{/panel}}

#### JDK

<span style="color: rgb(0,0,0);">openjdk-7-jdk
</span>

#### Restrict Where This Project Can Be Run

In order to make your job use a slave created on the cloud, on demand, set the label to&nbsp;`ondemand`.

This behavior is configured in Jenkins using the [Amazon EC2 plugin](https://wiki.jenkins-ci.org/display/JENKINS/Amazon+EC2+Plugin).

#### Run the Build Against MultiDB

In order to run your build against one or several DB you can use profile and slave parameters.

You need to use customdb profile to init build environment, and then desired profile among : pgsql, mssql, oracle10g, oracle11g, oracle12g, mysql, mongodb...

You also need to use a slave owning the configuration for desired DB, for example&nbsp;MULTIDB_LINUX.

### Build Environment

#### Abort the Build If It's Stuck

#### Add Timestamps to the Console Output

### Build

#### Execute Shell

{{#> panel type='code' heading='Shell script'}}

```bash
if [ "$CLEAN" = true ] || [ ! -e .git ]; then
  rm -rf * .??*
  git clone git@github.com:nuxeo/nuxeo.git .
fi
git checkout $BRANCH || git checkout $PARENT_BRANCH

. scripts/gitfunctions.sh
if [ "$CLEAN" = false ]; then
  gitfa fetch --all
  gitfa checkout $PARENT_BRANCH
  gitfa pull --rebase
  ! (gitfa status --porcelain | grep -e "^U")
fi
# switch on feature $BRANCH if exists, else falls back on $PARENT_BRANCH
./clone.py $BRANCH -f $PARENT_BRANCH
gitfa rebase $PARENT_BRANCH
! (gitfa status --porcelain | grep -e "^U")
if [ "$MERGE_BEFORE_BUILD" = true ]; then
  gitfa checkout $PARENT_BRANCH
  gitfa pull --rebase
  gitfa merge $BRANCH --log
  ! (gitfa status --porcelain | grep -e "^U")
fi

rm -rf $WORKSPACE/.repository/org/nuxeo/
```

{{/panel}}

#### Invoke Top-Level Maven Targets (Maven 2)

{{#> panel type='code' heading='Maven call'}}

```bash
Goals: $MVN_TARGETS -Paddons $PROFILES $MVN_ADDITIONAL_OPTS
JVM options: -Xms1024m -Xmx4096m -XX:MaxPermSize=1024m
```

{{/panel}}

Use private Maven repository: Maven will store artifacts in `$WORKSPACE/.repository` instead of&nbsp;`~/.m2/repository`.

#### Invoke Top-Level Maven Targets (Maven 2)

{{#> panel type='code' heading='Maven call'}}

```bash
Goals: $MVN_TARGETS -Pall-distributions $PROFILES $MVN_ADDITIONAL_OPTS2
POM: nuxeo-distribution/pom.xml
JVM options: -Xms1024m -Xmx4096m -XX:MaxPermSize=1024m
```

{{/panel}}

Use private Maven repository: Maven will store artifacts in `$WORKSPACE/.repository` instead of&nbsp;`~/.m2/repository`.

#### Invoke Top-Level Maven Targets (Maven 3)

{{#> panel type='code' heading='Maven call'}}

```bash
Goals: $MVN_TARGETS -Paddons,distrib,all-distributions $PROFILES $MVN_ADDITIONAL_OPTS
JVM options: -Xms1024m -Xmx4096m -XX:MaxPermSize=1024m
```

{{/panel}}

Use private Maven repository: Maven will store artifacts in `$WORKSPACE/.repository` instead of&nbsp;`~/.m2/repository`.

#### Execute Shell

{{#> panel type='code' heading='Shell script'}}

```bash
. scripts/gitfunctions.sh
! (grep -hle ".*ERROR.*" nuxeo-distribution/**/log/*.log)
if [ "$MERGE_BEFORE_BUILD" != true ]; then
  gitfa checkout $PARENT_BRANCH
  gitfa pull --rebase
  gitfa merge $BRANCH --log
  ! (gitfa status --porcelain | grep -e "^U")
fi
if [ "$PUSH_IF_SUCCEED" = true ]; then
  if [ "$MERGE_BEFORE_BUILD" = true ]; then
    echo ****** Pull in case another commit had been pushed during the build
    gitfa pull --rebase
    ! (gitfa status --porcelain | grep -e "^U")
  fi
  echo ***** SUCCEED! PUSHING MERGE *****
  gitfa push origin $PARENT_BRANCH
fi
```

{{/panel}}

### Post Build Actions

1.  **Archive the artifacts**&nbsp;`**/failsafe-reports/*, **/target/*.png, **/target/*.json, **/result-*.html, **/*.log, **/log/*, **/nxserver/config/distribution.properties`.
2.  Configure the **Jenkins text finder** to browse&nbsp;`nuxeo-distribution/**/log/*.log` looking for&nbsp;`.*ERROR.*` and setting the build as unstable if found.
3.  **Publish JUnit results report** looking for&nbsp;`**/target/failsafe-reports/*.xml, **/target/surefire-reports/*.xml`.
4.  **Publish Selenium HTML Report&nbsp;**looking for `nuxeo-distribution/nuxeo-distribution-dm/ftest/selenium/target/results/.` Use&nbsp;`nuxeo-distribution-social-collaboration/ftest/selenium/target/results/` for Social Collaboration tests.
5.  **Publish Selenium results report** looking for&nbsp;`nuxeo-distribution/**/result*.html`.
6.  Send to you an email using the **Editable Email Notification**.
7.  Send to you a **Jabber notification**.

## GitHub Pull-Requests
