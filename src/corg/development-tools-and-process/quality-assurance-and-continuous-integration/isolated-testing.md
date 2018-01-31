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

1.  Push your changes to the GitHub Nuxeo repo(s) of your choice under a branch named "feature-NXP-xxxx-description" (see [Nuxeo common usage and best practices]({{page page='git-usage'}}) about branch naming).
2.  Create a [new Jenkins job](https://qa.nuxeo.org/jenkins/job/TestAndPush/newJob) and choose the "**Nuxeo On-Demand test and push**" template:

    <div class="table-scroll"><table class="hover"><tbody><tr><td colspan="1">**Name**</td></tr>
    <tr><td colspan="1">
      <div class="help">Name it `ondemand-testandpush-USERNAME[-suffix]` (for instance: "ondemand-testandpush-jcarsique").</div>
    </td></tr>
    <tr><td colspan="1">**Maven version**</td></tr><tr><td colspan="1">Usually "maven-3".</td></tr>
    <tr><td colspan="1">**JDK**</td></tr><tr><td colspan="1">For instance "java-8-oracle".</td></tr>
    <tr><td colspan="1">**Notification target**</td></tr>
    <tr><td colspan="1">
      <div class="help">E-mail and Jabber ID notification recipients.</div>
    </td></tr>
    <tr><td colspan="1">**Default slave**</td></tr><tr><td colspan="1">Can be changed afterwards.</td></tr>
    </tbody></table></div>

    The job is ready for use.

3.  Click on **Build with Parameters**.
4.  Fill the build parameters.

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Parameter</th><th colspan="1">Default value</th><th colspan="1">Description</th></tr><tr><td colspan="1">BRANCH</td><td colspan="1">feature-NXROADMAP-131-layouts</td><td colspan="1">Branch to test, fall-backs on $PARENT_BRANCH if not found.</td></tr><tr><td colspan="1">PARENT_BRANCH</td><td colspan="1">master</td><td colspan="1">The branch to fall-back on when $BRANCH is not found. This is also the branch on which $BRANCH is merged (before or after build and tests depending on $MERGE_BEFORE_BUILD value).</td></tr><tr><td colspan="1">MERGE_BEFORE_BUILD</td><td colspan="1">true</td><td colspan="1">

    If true, merge on $PARENT_BRANCH before build then, if merge is successful, run the tests.
    If false, merge will be done after tests.

    </td></tr>
    <tr><td colspan="1">PUSH_IF_SUCCEED</td><td colspan="1">true</td><td colspan="1">Push $PARENT_BRANCH if all build and tests succeed.</td></tr>
    <tr><td colspan="1">CREATE_PR</td><td colspan="1">true</td><td colspan="1">Create a Pull Request instead of a direct merge.</td></tr>
    <tr><td colspan="1">CLEAN</td><td colspan="1">true</td><td colspan="1">Whether to clean or not the workspace.</td></tr><tr><td colspan="1">MVN_TARGETS</td><td colspan="1">install</td><td colspan="1"> </td></tr><tr><td colspan="1">MVN_ADDITIONAL_OPTS</td><td colspan="1">`-fae -nsu -Dnuxeo.tests.random.mode=bypass`</td><td colspan="1">For instance: `-pl nuxeo-common`, `-pl -:nuxeo-distribution-dm-webdriver-tests`, `-rf somemodule`, `-N`, `-DskipTests=true`, `-DskipITs=true`, `-Dskip.surefire.tests=true`... Default includes `-fae` (fail at end): fail after the whole build (though skipping modules which dependencies build have failed) instead of fail at first error.</td></tr>
    <tr><td colspan="1">PROFILES</td><td colspan="1">`-Pqa,itest`</td><td colspan="1">Maven profiles to activate</td></tr><tr><td colspan="1">JDK_PATH</td><td colspan="1"> </td><td colspan="1">If not empty, overrides the job configuration.</td></tr><tr><td colspan="1">Slave</td><td colspan="1">ondemand</td><td colspan="1">Default value (ondemand).</td></tr></tbody></table></div>

### Configuration Details

You can view the resulting configuration by adding `/config.xml` to the job URL. Here are a few details about the job configuration.

#### Old Builds (Log Rotation Strategy)

*   Days to keep builds: **21**
*   Max # of builds to keep: **100**
*   Days to keep artifacts: **(empty)**
*   Max # of builds to keep with artifacts: **1**

#### Restrict Where This Project Can Be Run

In order to make your job use a slave created on the cloud, on demand, set the label to `ondemand`.

#### Run the Build Against MultiDB

In order to run your build against one or several DB you can use profile and slave parameters.

You need to use the `customdb` profile to init build environment, and then desired profile among : `pgsql`, `mssql`, `oracle10g`, `oracle11g`, `oracle12g`, `mysql`, `mongodb`...

You also need to use a slave owning the configuration for desired DB, for example `MULTIDB_LINUX`.

#### Execute Shell	

{{#> panel type='code' heading='Shell script'}}

```bash
#!/bin/bash -xe
START=$(date +%s)
unset DOCKER_HOST

if [ ! -z $JDK_PATH ]; then
  export JAVA_HOME=$JDK_PATH
  export PATH=$JDK_PATH/bin:$PATH
fi

if [ "$CLEAN" = true ] || [ ! -e .git ]; then
  rm -rf * .??*
  git clone git@github.com:nuxeo/nuxeo.git .
fi
git checkout $BRANCH 2>/dev/null || git checkout $PARENT_BRANCH

. scripts/gitfunctions.sh
if [ "$(type -t shr)" != "function" ]; then
  echo ERROR: the current job is not compliant with this version of gitfunctions.sh
  exit 1
fi

if [ "$CLEAN" = false ]; then
  gitfa fetch --all
  gitfa checkout $PARENT_BRANCH
  gitfa pull --rebase
  ! gitfa -q diff --name-status --diff-filter=U | grep -B1 -e "^U"
fi

# switch on feature $BRANCH if exists, else falls back on $PARENT_BRANCH
./clone.py $BRANCH -f $PARENT_BRANCH
gitfa rebase origin/$PARENT_BRANCH
! gitfa -q diff --name-status --diff-filter=U | grep -B1 -e "^U"
if [ "$MERGE_BEFORE_BUILD" = true ]; then
  shr -a "git checkout $PARENT_BRANCH; git pull --rebase; git merge --no-ff $BRANCH --log"
  ! gitfa -q diff --name-status --diff-filter=U | grep -B1 -e "^U"
fi

rm -rf $WORKSPACE/.repository/org/nuxeo/
echo "Init $(($(date +%s) - $START))" > $WORKSPACE/.ci-metrics
echo "$(date +%s)" >$WORKSPACE/.ci-metrics-mavenstart
```

{{/panel}}

#### Invoke Top-Level Maven Targets

{{#> panel type='code' heading='Maven call'}}

```bash
Goals: $MVN_TARGETS -Paddons,distrib $PROFILES $MVN_ADDITIONAL_OPTS
JVM options: -Xms1024m -Xmx4096m
```

{{/panel}}

Use private Maven repository: Maven will store artifacts in `$WORKSPACE/.repository` instead of `~/.m2/repository`.

#### Execute Shell

{{#> panel type='code' heading='Shell script'}}

```bash
#!/bin/bash  -xe
echo "Maven $(($(date +%s) - $(cat $WORKSPACE/.ci-metrics-mavenstart)))" >> $WORKSPACE/.ci-metrics
rm $WORKSPACE/.ci-metrics-mavenstart
START=$(date +%s)

. scripts/gitfunctions.sh
(! (shopt -s globstar && grep -hle ".*ERROR.*" nuxeo-distribution/**/log/server.log nuxeo-distribution/**/log/console.log nuxeo-distribution/**/log/nuxeo-error.log))
if [ "$MERGE_BEFORE_BUILD" != true ]; then
  shr -a "git checkout $PARENT_BRANCH; git pull --rebase; git merge --no-ff $BRANCH --log"
  ! gitfa -q diff --name-status --diff-filter=U | grep -B1 -e "^U"
fi

ROOT="$(basename $WORKSPACE)"

function pr_or_push() {
  echo "[$1]"
  local repository=$1
  if [ "$repository" = "." ] || [ "$repository" = "$ROOT" ]; then
    repository="nuxeo"
  fi
  if [ -z $(git rev-list -1 origin/$PARENT_BRANCH..) ] ; then
    echo "NOOP"
  elif [ "$DO_PR" = true ]; then
    JSON="{
      \"title\": \"$BRANCH\",
      \"head\": \"$BRANCH\",
      \"base\": \"$PARENT_BRANCH\",
      \"body\": \"PR created from $BUILD_URL\"
    }"
    curl -n -XPOST "https://api.github.com/repos/nuxeo/$repository/pulls" -d "$JSON"
  else
    git push origin $PARENT_BRANCH
  fi
  echo
}

if [ "$PUSH_IF_SUCCEED" = true ]; then
  if [ "$MERGE_BEFORE_BUILD" = true ]; then
    echo ****** Pull in case another commit had been pushed during the build
    gitfa pull --rebase
    ! gitfa -q diff --name-status --diff-filter=U | grep -B1 -e "^U"
  fi

  if $CREATE_PR; then
    echo ***** SUCCEED! CREATING PULL REQUEST *****
    DO_PR=true
  else
    echo ***** SUCCEED! PUSHING MERGE *****
    DO_PR=false
  fi

  shr -a 'pr_or_push $dir'
  cd ..
fi

echo "Finalize $(($(date +%s) - $START))" >> $WORKSPACE/.ci-metrics
```

{{/panel}}

### Post Build Actions

1. ** Post build task**
```
if [ -f .ci-metrics-mavenstart ]; then
  echo "Maven $(($(date +%s) - $(cat .ci-metrics-mavenstart)))" >> .ci-metrics
  rm .ci-metrics-mavenstart
fi
```
2. **Scan for compiler warnings**
Use `Maven` and `javac` parsers on the console. Use `javac` parser on `nuxeo-distribution/**/log/*.log` files.
3. **Archive the artifacts**
`**/target/failsafe-reports/*, **/target/*.png, **/target/screenshot*.html, **/target/*.json, **/target/results/result-*.html, **/*.log, nuxeo-distribution/**/log/*, **/nxserver/config/distribution.properties, .ci-metrics`
4. **Publish JUnit results report**
`**/target/failsafe-reports/*.xml, **/target/surefire-reports/*.xml, **/target/nxtools-reports/*.xml`
5. **Set build description**
`$BRANCH`
6. Configure the **Jenkins text finder** to browse `nuxeo-distribution/**/log/server.log` looking for `.*ERROR.*` and setting the build as unstable if found.
7. Send to you an email using the **Editable Email Notification**.
8. Send to you a **Jabber notification**.
9. **Trigger parameterized build on other projects**
```Project: /System/ondemand-testandpush-metrics
Parameters:
JOB=$JOB_NAME
BUILD=$BUILD_NUMBER
```

## GitHub Pull-Requests
