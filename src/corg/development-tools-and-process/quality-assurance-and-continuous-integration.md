---
title: Quality Assurance and Continuous Integration
review:
    comment: ''
    date: ''
    status: ok
toc: true
labels:
  - university
notes: >-
    Documentation page used by the Marketing team. Check with Marketing before deleting or moving.
confluence:
    ajs-parent-page-id: '3868947'
    ajs-parent-page-title: Development Tools and Process
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Quality+Assurance+and+Continuous+Integration
    canonical_source: >-
        https://doc.nuxeo.com/display/CORG/Quality+Assurance+and+Continuous+Integration
    page_id: '3868997'
    shortlink: RQk7
    shortlink_source: 'https://doc.nuxeo.com/x/RQk7'
    source_link: /display/CORG/Quality+Assurance+and+Continuous+Integration
tree_item_index: 100
history:
    -
        author: Julien Carsique
        date: '2015-11-30 17:41'
        message: ''
        version: '18'
    -
        author: Julien Carsique
        date: '2015-11-30 17:37'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2015-11-30 10:17'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
        version: '16'
    -
        author: Manon Lumeau
        date: '2015-09-29 13:51'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2015-07-02 13:16'
        message: ''
        version: '14'
    -
        author: Julien Carsique
        date: '2015-05-22 09:41'
        message: Update release process description
        version: '13'
    -
        author: Manon Lumeau
        date: '2014-05-22 11:23'
        message: ''
        version: '12'
    -
        author: Julien Carsique
        date: '2014-04-30 17:22'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-04-30 16:55'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2014-04-29 16:29'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2013-02-14 12:23'
        message: ''
        version: '8'
    -
        author: Mathieu Guillaume
        date: '2012-02-09 13:49'
        message: Migrated to Confluence 4.0
        version: '7'
    -
        author: Mathieu Guillaume
        date: '2012-02-09 13:48'
        message: svn -> hg + updates
        version: '6'
    -
        author: Solen Guitter
        date: '2011-05-05 10:12'
        message: ''
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-11-08 19:18'
        message: ''
        version: '4'
    -
        author: Stéfane Fermigier
        date: '2010-11-08 19:16'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2010-10-25 17:00'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2010-10-25 16:58'
        message: ''
        version: '1'

---
From Martin Fowler - _Continuous Integration (an introduction)_

> Continuous Integration is a software development practice where members of a team integrate their work frequently, usually each person integrates at least daily - leading to multiple integrations per day. Each integration is verified by an automated build (including test) to detect integration errors as quickly as possible. Many teams find that this approach leads to significantly reduced integration problems and allows a team to develop cohesive software more rapidly.

See [http://en.wikipedia.org/wiki/Continuous_Integration](http://en.wikipedia.org/wiki/Continuous_Integration)

It's as important to follow quality processes on development as to maintain this quality among time. Nuxeo is involved in such practices that will guarantee or reinforce its products quality.

{{#> callout type='info'}}
Watch the related courses on Hyland University
- [Expert Session on the Nuxeo Software Factory](https://university.hyland.com/courses/e4156)
![]({{file name='software_factory.png'}} ?w=450,border=true)
{{/callout}}

## Rules and Means

Nuxeo products and tools are continuously built over time, at each change and against multiple environments. Nuxeo QA team sets and maintain a QA environment applying CI rules and so providing to developers means to check their code quality and being warned in case of any problem.

*   Maintain a code repository</br>
    Nuxeo sources repositories on&nbsp;[Mercurial](http://hg.nuxeo.org/)&nbsp;and&nbsp;[Git](http://github.com/nuxeo)&nbsp;are under continuous integration.</br>
    This includes the Nuxeo Platform, the documentation, the tools and the plugins.
*   Builds are automated</br>
    This is done by Jenkins on&nbsp;[Nuxeo QA Unit, Functional and Integration tests](http://qa.nuxeo.org/).
*   Every commit on mainline is integrated</br>
    When code is committed, target project is built, as all projects depending on it. The full chain is verified, from build to deployment.</br>
    Mainlines on Nuxeo EP and addons are the main branches in development: 5.1 and 5.2 (resp. 1.4 and 1.5 for associated subtrees). For projects under SubVersion, that means the trunk and, if exists, 5.1 branch.
*   Everyone can see the results of the latest build</br>
    Jenkins plugins ensure to warn potential responsible(s) of build fail by mail and jabber, so they can react quickly.</br>
    Moreover, every build fail is sent on&nbsp;[ECM QA mailing list](http://lists.nuxeo.com/mailman/listinfo/ecm-qa).
*   Make it easy to get the latest deliverables</br>
    Nightly builds are done. Produced artifacts are published on our Maven repositories&nbsp;[maven.nuxeo.org](http://maven.nuxeo.org/). Currently managed with Nexus, our repositories store all released artifacts and recent snapshots.
*   Keep the build fast</br>
    Continuous Integration is done on multiple servers, more or less powerful, using slaves in order to distribute the load.</br>
    Thanks to Maven and to Nuxeo modularity, each module is built separately and as a consequence, quickly.
*   Test in a clone of the production environment</br>
    We have two integration levels: unit and functional.</br>
    First level checks code compilation and runs Unit tests. A lot of Unit tests simulate target environments (with mock objects). Dependent projects/modules are then added to the CI chain.</br>
    Second level runs packaging tools and automated deployment against multiple environments (we aim at covering JVM versions, SQL backends, OS, browsers, performance, ...). Finally we use Selenium tests to check functional integrity. This also indirectly provides a continuous integration on our tools (packaging, convenient scripts...).

## Quality Directives for Nuxeo Developers

These practices apply on every script, project or module. They should be strictly followed.

**Code must be under continuous integration**
Except for prototype and spike solutions (sandbox projects or temporary branches), all projects must be under CI. If not, ask for it to the QA team, providing the informations mentioned in the following Jenkins part.

**Automate the build**
Think about QA tools that will have to test the project without any human intervention. Provide Maven, Ant or, in the worse case, Shell autonomous configuration.

**Make your build self-testing**
Think "test-driven development". Simply building a project/module and running its Unit tests should be a valuable measurement of the code stability. Unit tests code coverage often needs to be increased.

**Commit every day**
Smaller are the commits, lower is the risk of conflicting changes and easier is the bug analysis.

**Stay tuned**
Be aware of CI builds, particularly failed builds.

*   Log on&nbsp;[http://qa.nuxeo.org/](http://qa.nuxeo.org/)&nbsp;and check your profile's informations, especially your Jabber address. Jenkins will then be able to contact you via Jabber/XMPP/GTalk when you are suspected of having broken something.
*   Subscribe to&nbsp;[ECM QA mailing list](http://lists.nuxeo.com/mailman/listinfo/ecm-qa). Use mail filters to quickly catch and fix problems. Jenkins will send you a mail if it detects one of your commits between succeed and failed tests.
*   If you're used to, RSS feeds are also available.
*   Check regularly your projects health on our QA sites. Inform QA team if you notice any issue.
*   Always consider a build failed as an emergency.

### Maven Parent POM

Maven Parent POM file gives a lot of useful information. Take care to fill in you project's pom.xml file:

*   Main tags.

    ```
    <name>Nuxeo ECM Projects</name>
    <description>Nuxeo ECM Platform and related components</description>
    <organization>
      <name>Nuxeo</name>
      <url>http://www.nuxeo.com/</url>
    </organization>

    <licenses>
      <license>
        <name>GNU LESSER GENERAL PUBLIC LICENSE, Version 2.1</name>
        <url>http://www.gnu.org/licenses/lgpl-2.1.html</url>
      </license>
    </licenses>

    <mailingLists>
      <mailingList>
        <name>Nuxeo ECM list</name>
        <subscribe>http://lists.nuxeo.com/mailman/listinfo/ECM</subscribe>
        <unsubscribe>http://lists.nuxeo.com/mailman/listinfo/ECM</unsubscribe>
        <archive>http://lists.nuxeo.com/pipermail/ecm/</archive>
      </mailingList>
    </mailingLists>

    <issueManagement>
      <system>jira</system>
      <url>http://jira.nuxeo.org/browse/NXP</url>
    </issueManagement>

    <ciManagement>
      <system>Jenkins</system>
      <url>http://qa.nuxeo.org/jenkins/</url>
      <notifiers>
        <notifier>
          <type>mail</type>
          <configuration>

    <address>ecm-qa@lists.nuxeo.com</address>
          </configuration>
        </notifier>
      </notifiers>
    </ciManagement>
    ```

*   SCM tag.

    ```
    <scm>
      <connection>scm:git:git://github.com/nuxeo/nuxeo-sample-project.git</connection>
      <developerConnection>scm:git:ssh://git@github.com:nuxeo/nuxeo-sample-project.git</developerConnection>
      <url>https://github.com/nuxeo/nuxeo-sample-project</url>
    </scm>
    ```

*   Developers tag (there's no rule for tags within the "developer" tag, feel free to add useful information such as "role", "url", "organization" or "module").

    ```
    <developers>
      <developer>
        <id>Nuxeo</id>
        <name>Nuxeo Developers Team</name>
        <email>nuxeo-dev@lists.nuxeo.com</email>
        <timezone>+1</timezone>
      </developer>
    </developers>
    ```

*   You also have to add <repositories> section in the project's parent POM in order to make your project fully autonomous.

    ```
    <repositories>
      <repository>
        <id>public</id>
        <url>http://maven.nuxeo.org/nexus/content/groups/public</url>
        <releases>
          <enabled>true</enabled>
        </releases>
        <snapshots>
          <enabled>false</enabled>
        </snapshots>
      </repository>
      <repository>
        <id>public-snapshot</id>
        <url>http://maven.nuxeo.org/nexus/content/groups/public-snapshot</url>
        <releases>
          <enabled>false</enabled>
        </releases>
        <snapshots>
          <enabled>true</enabled>
        </snapshots>
      </repository>
    </repositories>
    ```

    All these tags are intelligently inherited so that, if your project's Maven parent is&nbsp;`org.nuxeo:nuxeo-ecm` or one of its children, you don't have to repeat informations such as "organization", "licenses", "mailingLists", "issueManagement". Also, when working on a project with sub-modules, it's only necessary to set "scm" on the parent POM.

### Jenkins Job Configuration

See page&nbsp;[Jenkins Job Configuration]({{page page='jenkins-job-configuration'}}).

## Release Process

### Overview

The release process is managed and tested by multiple tools:

*   [Jenkins Continuous Integration jobs](http://qa.nuxeo.org/jenkins/job/IT-nuxeo-master-build/) which generates a release candidate (aka date-based release) every night from the development branch.
*   [Python scripts](https://github.com/nuxeo/nuxeo/tree/master/scripts).
*   [Integration scripts.](https://github.com/nuxeo/integration-scripts)
*   Integration and Functional tests with [Selenium](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-distribution/nuxeo-distribution-cap-selenium-tests), [WebDriver](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-distribution/nuxeo-distribution-cap-webdriver-tests), [Funkload](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-distribution/nuxeo-distribution-cap-funkload-tests)... against all the supported environments (OS, DB, JVM...).
*   [NSIS scripts for Windows packaging](https://github.com/nuxeo/nuxeo-packaging-windows).
*   [dpkg scripts for Debian packaging](https://github.com/nuxeo/nuxeo-packaging-debian).

When a release is wanted, all the continuous integration chain must be satisfied, nightly builds are manually tested to complete automated tests and the release candidate is "promoted" to a final release (code tags are pushed to GitHub, artifacts are uploaded to the Maven repositories and packages are published on Nuxeo web sites).

### Continuous Integration Coverage

The current coverage includes those configurations:

*   Nuxeo Platform build and unit testing.
*   Nuxeo CAP distribution integration and functional testing.
*   Nuxeo addons and their Nuxeo Packages (Unit, Integration and Functional tests).
*   Java Oracle and OpenJDK 6, 7, 8 (depending on Nuxeo Platform version) and a few other Java providers.
*   Tomcat application server.
*   VCS backend on supported databases (H2, PostgreSQL, Oracle, MySQL, MSSQL).
*   Nuxeo scripts.
*   Linux Ubuntu (Debian), Mac OS X, Windows.

### Help Testing

#### Download a Release

We recommend to download and test the latest FastTrack release from&nbsp;[http://www.nuxeo.com/en/downloads](http://www.nuxeo.com/en/downloads)&nbsp;or&nbsp;[http://community.nuxeo.com/static/releases/](http://community.nuxeo.com/static/releases/).

You can download nightly candidate releases from [http://qa.nuxeo.org/jenkins/view/Depl/](http://qa.nuxeo.org/jenkins/view/Depl/), [the snapshot APT repository](http://apt.nuxeo.org/pool/snapshots/) or&nbsp;[http://community.nuxeo.com/static/snapshots/](http://community.nuxeo.com/static/snapshots/).

You can also build the source code or download the latest SNAPSHOT.

#### Feedback

Test and report feedback on&nbsp;[http://answers.nuxeo.com/](http://answers.nuxeo.com/). In case of bugs confirmed, an issue will be filled in&nbsp;[https://jira.nuxeo.com/](https://jira.nuxeo.com/).
