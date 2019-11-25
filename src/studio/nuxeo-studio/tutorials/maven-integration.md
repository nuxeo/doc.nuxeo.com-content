---
title: 'HOWTO: Work with Maven Integration'
review:
    comment: ''
    date: '2018-03-29'
    status: ok
confluence:
    ajs-parent-page-id: '12912677'
    ajs-parent-page-title: Tutorials
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Maven+Integration
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Maven+Integration'
    page_id: '3342391'
    shortlink: NwAz
    shortlink_source: 'https://doc.nuxeo.com/x/NwAz'
    source_link: /display/Studio/Maven+Integration
tree_item_index: 500
toc: true
history:
    -
        author: Bertrand Chauvin
        date: '2016-08-12 14:46'
        message: pdated information - using versions instead of tags no
        version: '32'
    -
        author: Alain Escaffre
        date: '2016-03-21 22:58'
        message: ''
        version: '31'
    -
        author: Alain Escaffre
        date: '2016-03-21 22:58'
        message: ''
        version: '30'
    -
        author: Alain Escaffre
        date: '2016-03-21 22:46'
        message: ''
        version: '29'
    -
        author: Anahide Tchertchian
        date: '2015-04-20 16:46'
        message: add updatePolicy always on snapshots repo conf
        version: '28'
    -
        author: Anahide Tchertchian
        date: '2015-04-20 16:45'
        message: ''
        version: '27'
    -
        author: Julien Carsique
        date: '2014-01-30 15:50'
        message: ''
        version: '26'
    -
        author: Julien Carsique
        date: '2014-01-30 15:42'
        message: ''
        version: '25'
    -
        author: Julien Carsique
        date: '2012-05-09 14:03'
        message: Migrated to Confluence 4.0
        version: '24'
    -
        author: Julien Carsique
        date: '2012-05-09 14:03'
        message: ''
        version: '23'
    -
        author: Julien Carsique
        date: '2012-05-09 14:03'
        message: ''
        version: '22'
    -
        author: Thierry Martins
        date: '2011-08-25 10:12'
        message: ''
        version: '21'
    -
        author: Anahide Tchertchian
        date: '2011-03-16 19:45'
        message: ''
        version: '20'
    -
        author: Anahide Tchertchian
        date: '2011-03-16 19:44'
        message: ''
        version: '19'
    -
        author: Anahide Tchertchian
        date: '2011-03-16 19:42'
        message: ''
        version: '18'
    -
        author: Anahide Tchertchian
        date: '2011-03-16 19:42'
        message: ''
        version: '17'
    -
        author: Anahide Tchertchian
        date: '2011-03-16 19:39'
        message: ''
        version: '16'
    -
        author: Anahide Tchertchian
        date: '2011-03-16 19:38'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2011-01-19 15:07'
        message: fixed typo
        version: '14'
    -
        author: Solen Guitter
        date: '2010-12-22 12:45'
        message: ''
        version: '13'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 11:50'
        message: ''
        version: '12'
    -
        author: Stéfane Fermigier
        date: '2010-10-06 08:46'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2010-07-05 18:17'
        message: formatting and typos
        version: '10'
    -
        author: Stéfane Fermigier
        date: '2010-06-28 10:54'
        message: ''
        version: '9'
    -
        author: Bogdan Stefanescu
        date: '2010-06-21 18:59'
        message: ''
        version: '8'
    -
        author: Bogdan Stefanescu
        date: '2010-06-21 18:51'
        message: ''
        version: '7'
    -
        author: Bogdan Stefanescu
        date: '2010-06-21 16:28'
        message: ''
        version: '6'
    -
        author: Bogdan Stefanescu
        date: '2010-06-21 16:27'
        message: ''
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2010-06-21 16:08'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-06-21 15:16'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-06-21 15:13'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-06-21 14:59'
        message: ''
        version: '1'

---
Nuxeo Studio offers a dedicated servlet that provides Maven artifacts for:

* released versions of your project
* current snapshot of all common branches of your project
* current snapshot of all branches of each user's workspace (i.e. the work they are doing on a given branch but haven't yet shared by pushing staged commits).

You can get all available artifact on the following page: [https://connect.nuxeo.com/nuxeo/site/studio/maven/nuxeo-studio/PROJECT_ID](https://connect.nuxeo.com/nuxeo/site/studio/maven/nuxeo-studio/PPROJECT_ID/)

You can then easily integrate your Studio configuration to your build process. Of course, all projects exposed through Maven are protected so that only contributors on the project are able to access the project in the Studio Maven repository. Hence you need to declare this "maven repository" on your local Maven settings, with correct credentials.

## Setting up the Maven Client

Maven can be setup to add a dependency to a specific release, and to do continuous integration on a branch. In all cases, to be able to access Studio Maven artifacts:

1.  Configure your Maven client to use authentication when accessing the Studio Maven repository. For this, edit (or create if it does not exist) the `~/.m2/settings.xml` file and add the following entry under the settings tag:

    ```xml
    <servers>
      ....
      <server>
        <id>nuxeo-studio</id>
        <username>your_nos_username</username>
        <password>your_nos_token</password>
      </server>
      ...
    </servers>

    ```

{{{multiexcerpt 'token-management' page='how-to-tag-or-release-your-nuxeo-studio-project'}}}

2.  Then in the POM (or a parent POM) where you need to add the dependency to the Studio project you should declare the Studio Maven repository like this:

    ```xml
    <repositories>
      ...
      <repository>
        <id>nuxeo-studio</id>
        <url>https://connect.nuxeo.com/nuxeo/site/studio/maven</url>
        <releases>
          <enabled>true</enabled>
        </releases>
        <snapshots>
          <enabled>true</enabled>
          <updatePolicy>always</updatePolicy>
        </snapshots>
      </repository>
      ...
    </repositories>

    ```

    {{#> callout type='tip' }}

    You notice we used the same server ID than in the `settings.xml` file. The repository is located under the same root as Studio client (but using the Maven relative path).

    {{/callout}}

### Setting up Continuous Integration on a Branch

To set up a dependency to the latest snapshot of a Studio branch:

1.  Go to the **Branch Management** screen and select a branch.

2. Press the `Maven GAV` button. This button is available both for the latest changes only available in your own workspace or for the ones that are shared for all users on the branch.

![]({{file name='maven-gav.png'}} ?w=650,border=true)

3. Maven coordinates are shown and ready to be copy-pasted in your project's pom.xml.

### Adding a Dependency to a Release

To add a Maven dependency on a specific Studio release:

1. [Create a release]({{page page='how-to-tag-or-release-your-nuxeo-studio-project'}}#release-creation) of your Studio project. This will generate a version of your project that can be accessed by Maven.

2. Go to the [Releases and Tags]({{page page='releases-and-tags'}}) screen.

3. Press the Maven GAV button on the desired release and copy the Maven coordinates in your project's pom.xml file.

## Retrieving Maven Resources

The list of available versions for a given project is visible at:
```
https://connect.nuxeo.com/nuxeo/site/studio/projects/{PROJECT_ID}
```
or
```
https://connect.nuxeo.com/nuxeo/site/studio/maven/{MAVEN_GROUP}/{PROJECT_ID}/
```
with `MAVEN_GROUP=nuxeo-studio` by default.


The list of available resources for a given project and version is visible at the given URL:
```
https://connect.nuxeo.com/nuxeo/site/studio/maven/{MAVEN_GROUP}/{PROJECT_ID}/{VERSION}/
```
with `MAVEN_GROUP=nuxeo-studio` by default and `VERSION=0.0.0-SNAPSHOT` for the current development code.
