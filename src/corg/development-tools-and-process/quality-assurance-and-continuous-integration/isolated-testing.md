---
title: Isolated Testing
review:
    comment: '<span style="color:red">Warning</span> This page needs to be reviewed. Check back soon for updated content!'
    date: ''
    status: not-ok
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
2.  Create a [new Jenkins job](https://qa.nuxeo.org/jenkins/job/TestAndPush/newJob) and choose the "**Nuxeo On-Demand test and push**" template
3. Name it `ondemand-testandpush-USERNAME[-suffix]` (for instance: "ondemand-testandpush-jcarsique").
4. Configure the parameters and save. The job is ready for use.
5.  Click on **Build with Parameters**.
6.  Fill the build parameters. See the help tooltip for details.

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

```
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

```
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

#### Post Build Actions

1. Post build task
   ```
   if [ -f .ci-metrics-mavenstart ]; then
   echo "Maven $(($(date +%s) - $(cat .ci-metrics-mavenstart)))" >> .ci-metrics
   rm .ci-metrics-mavenstart
   fi
   ```
2. Scan for compiler warnings
Use `Maven` and `javac` parsers on the console. Use `javac` parser on `nuxeo-distribution/**/log/*.log` files.
3. Archive the artifacts
`**/target/failsafe-reports/*, **/target/*.png, **/target/screenshot*.html, **/target/*.json, **/target/results/result-*.html, **/*.log, nuxeo-distribution/**/log/*, **/nxserver/config/distribution.properties, .ci-metrics`
4. Publish JUnit results report
`**/target/failsafe-reports/*.xml, **/target/surefire-reports/*.xml, **/target/nxtools-reports/*.xml`
5. Set build description
`$BRANCH`
6. Configure the **Jenkins text finder** to browse `nuxeo-distribution/**/log/server.log` looking for `.*ERROR.*` and setting the build as unstable if found.
7. Send to you an email using the **Editable Email Notification**.
8. Send to you a **Jabber notification**.
9. Trigger parameterized build on other projects
   ```
   Project: /System/ondemand-testandpush-metrics
   Parameters:
   JOB=$JOB_NAME
   BUILD=$BUILD_NUMBER
   ```

### How to Edit the Template

Template plugin documentation: https://go.cloudbees.com/docs/cloudbees-documentation/cje-user-guide/index.html#template

Here is the recommended/easier method for such a change:
1. instantiate a WIP job:
    - https://qa.nuxeo.org/jenkins/job/TestAndPush/newJob
    - Nuxeo On-Demand Test and Push
    - https://qa.nuxeo.org/jenkins/job/TestAndPush/job/feature-NXBT-2318/configure

1.  "detach" the job:
    - ```
      $ ssh jcarsique@qa-ovh-master.nuxeo.com
      cd .jenkins/jobs/TestAndPush/jobs/feature-NXBT-2318
      cp config.xml config.xml.bak
      vi config.xml
      ```

    - Using VIM to search and remove the XML section used for the templating:
      ```
      vi config.xml
      /cloudbees-template
      vatd
      :wq
      ```
      ```
      $ diff --side-by-side --suppress-common-lines config.xml.bak config.xml
          <com.cloudbees.hudson.plugins.modeling.impl.jobTemplate.J <
            <instance>					      <
              <model>TestAndPush/template_ondemand</model>	      <
              <values class="tree-map">			      <
                <entry>					      <
                  <string>defaultSlave</string>		      <
                  <string>ondemand</string>			      <
                </entry>					      <
                <entry>					      <
                  <string>jdk</string>			      <
                  <string>java-8-openjdk</string>		      <
                </entry>					      <
                <entry>					      <
                  <string>maven</string>			      <
                  <string>maven-3</string>			      <
                </entry>					      <
                <entry>					      <
                  <string>name</string>			      <
                  <string>feature-NXBT-2318</string>		      <
                </entry>					      <
                <entry>					      <
                  <string>notification</string>		      <
                  <string>pierregautier@nuxeo.com</string>	      <
                </entry>					      <
              </values>					      <
           </instance>					      <
         </com.cloudbees.hudson.plugins.modeling.impl.jobTemplate. <
      ```
    - https://qa.nuxeo.org/jenkins/job/TestAndPush/job/feature-NXBT-2318/reload

1. configure the detached job with the UI as wanted to resolve the ticket:
    - https://qa.nuxeo.org/jenkins/job/TestAndPush/job/feature-NXBT-2318/configure
    - ...

1. Use diff again to get the related XML changes:
    ```
    jenkins@qa-ovh-master:~/.jenkins/jobs/TestAndPush/jobs/feature-NXBT-2318$ diff --side-by-side --suppress-common-lines config.xml.bak config.xml
    ```

1. Apply the XML changes on the template:
  - https://qa.nuxeo.org/jenkins/job/TestAndPush/job/template_ondemand/configure
  - It is a Groovy transformation that is applied twice: at job creation with some NULL values, then after user edit.  
    => Handle the null values using conditions or the Elvis operator for instance  
    => Escape dollar signs with backslashes in XML snippets you copy, so they are not misinterpreted as Groovy expressions  
    => XML metacharacters like `<` in expression values are escaped before being emitted to the output. The raw XML has to be wrapped in the xml function or escaped: `<`, `>`...  
    See https://go.cloudbees.com/docs/cloudbees-documentation/cje-user-guide/index.html#_groovy_template_transformation

1. Request an administrator for approval of the new script:
  - https://qa.nuxeo.org/jenkins/scriptApproval/

1. Reattach the job, regenerate, check if the ticket is properly resolved then cleanup:
  - `$ cp config.xml.bak config.xml`
  - https://qa.nuxeo.org/jenkins/job/TestAndPush/job/feature-NXBT-2318/reload
  - https://qa.nuxeo.org/jenkins/job/TestAndPush/job/feature-NXBT-2318/configure
  - `$ diff --side-by-side --suppress-common-lines config.xml.bak config.xml`
  - https://qa.nuxeo.org/jenkins/job/TestAndPush/job/feature-NXBT-2318/delete
