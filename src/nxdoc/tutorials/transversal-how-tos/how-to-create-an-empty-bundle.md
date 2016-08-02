---
title: How to create an empty bundle
details:
    howto:
        excerpt: Learn the basics of a Nuxeo module and is IDE agnostic.
        level: Advanced
        tool: Code
        topics: Bundle
labels:
    - dev-guide
    - manifest
    - bundle
    - customization
    - project-structure
    - pom_xml
    - howto
    - content-review-lts2015
toc: true
confluence:
    ajs-parent-page-id: '19235681'
    ajs-parent-page-title: Transversal How-Tos
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+create+an+empty+bundle
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+create+an+empty+bundle'
    page_id: '7209107'
    shortlink: kwBu
    shortlink_source: 'https://doc.nuxeo.com/x/kwBu'
    source_link: /display/NXDOC/How+to+create+an+empty+bundle
history:
    - 
        author: Florent Guillaume
        date: '2015-01-12 10:21'
        message: igration of unmigrated content due to installation of a new plugi
        version: '60'
    - 
        author: Florent Guillaume
        date: '2015-01-12 10:21'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '59'
    - 
        author: Florent Guillaume
        date: '2015-01-12 10:21'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '58'
    - 
        author: Florent Guillaume
        date: '2015-01-12 10:21'
        message: better parent in pom
        version: '57'
    - 
        author: Florent Guillaume
        date: '2015-01-11 02:29'
        message: fix link
        version: '56'
    - 
        author: Manon Lumeau
        date: '2014-09-19 15:42'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '55'
    - 
        author: Manon Lumeau
        date: '2014-09-19 15:42'
        message: ''
        version: '54'
    - 
        author: Manon Lumeau
        date: '2014-09-19 15:42'
        message: ''
        version: '53'
    - 
        author: Manon Lumeau
        date: '2014-09-18 17:07'
        message: ''
        version: '52'
    - 
        author: Alain Escaffre
        date: '2014-05-03 21:00'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '51'
    - 
        author: Alain Escaffre
        date: '2014-05-03 21:00'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '50'
    - 
        author: Alain Escaffre
        date: '2014-05-03 21:00'
        message: ''
        version: '49'
    - 
        author: Alain Escaffre
        date: '2014-05-03 20:59'
        message: ''
        version: '48'
    - 
        author: Alain Escaffre
        date: '2014-05-03 20:58'
        message: ''
        version: '47'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '46'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '45'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '44'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: ''
        version: '43'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: ''
        version: '42'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:01'
        message: ''
        version: '41'
    - 
        author: Benjamin Jalon
        date: '2011-12-07 15:30'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '40'
    - 
        author: Benjamin Jalon
        date: '2011-12-07 15:30'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '39'
    - 
        author: Benjamin Jalon
        date: '2011-12-07 15:30'
        message: Migrated to Confluence 4.0
        version: '38'
    - 
        author: Benjamin Jalon
        date: '2011-12-07 15:30'
        message: ''
        version: '37'
    - 
        author: Ronan Le Gall
        date: '2011-07-29 10:09'
        message: the maven command interactions
        version: '36'
    - 
        author: Wojciech Sulejman
        date: '2011-07-19 15:54'
        message: >-
            changed from "bundles" to "plugins" which is the recommended
            location for custom plugins
        version: '35'
    - 
        author: Solen Guitter
        date: '2011-05-05 19:28'
        message: ''
        version: '34'
    - 
        author: Solen Guitter
        date: '2011-05-05 19:24'
        message: ''
        version: '33'
    - 
        author: Solen Guitter
        date: '2011-05-05 17:42'
        message: ''
        version: '32'
    - 
        author: Solen Guitter
        date: '2011-05-05 17:32'
        message: ''
        version: '31'
    - 
        author: Solen Guitter
        date: '2011-05-05 17:31'
        message: ''
        version: '30'
    - 
        author: Solen Guitter
        date: '2011-05-05 15:04'
        message: ''
        version: '29'
    - 
        author: Solen Guitter
        date: '2011-05-05 10:14'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2011-05-04 18:14'
        message: ''
        version: '27'
    - 
        author: Solen Guitter
        date: '2011-05-04 17:07'
        message: ''
        version: '26'
    - 
        author: Solen Guitter
        date: '2011-05-04 15:39'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
        date: '2011-05-04 15:03'
        message: ''
        version: '24'
    - 
        author: Ronan Le Gall
        date: '2011-05-03 11:35'
        message: ''
        version: '23'
    - 
        author: Ronan Le Gall
        date: '2011-05-02 18:56'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2011-05-02 18:06'
        message: reorganized steps
        version: '21'
    - 
        author: Ronan Le Gall
        date: '2011-04-29 10:35'
        message: ''
        version: '20'
    - 
        author: Ronan Le Gall
        date: '2011-04-26 16:49'
        message: ''
        version: '19'
    - 
        author: Ronan Le Gall
        date: '2011-04-26 16:38'
        message: ''
        version: '18'
    - 
        author: Ronan Le Gall
        date: '2011-04-26 16:30'
        message: ''
        version: '17'
    - 
        author: Ronan Le Gall
        date: '2011-04-26 15:57'
        message: ''
        version: '16'
    - 
        author: Ronan Le Gall
        date: '2011-04-26 12:36'
        message: ''
        version: '15'
    - 
        author: Ronan Le Gall
        date: '2011-04-22 18:01'
        message: ''
        version: '14'
    - 
        author: Ronan Le Gall
        date: '2011-04-22 12:18'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2011-04-22 12:05'
        message: ''
        version: '12'
    - 
        author: Ronan Le Gall
        date: '2011-04-22 11:58'
        message: ''
        version: '11'
    - 
        author: Ronan Le Gall
        date: '2011-04-22 11:47'
        message: ''
        version: '10'
    - 
        author: Ronan Le Gall
        date: '2011-04-22 11:04'
        message: ''
        version: '9'
    - 
        author: Ronan Le Gall
        date: '2011-04-22 10:40'
        message: ''
        version: '8'
    - 
        author: Benjamin Jalon
        date: '2011-04-22 03:01'
        message: ''
        version: '7'
    - 
        author: Ronan Le Gall
        date: '2011-04-21 19:12'
        message: ''
        version: '6'
    - 
        author: Ronan Le Gall
        date: '2011-04-21 18:53'
        message: ''
        version: '5'
    - 
        author: Ronan Le Gall
        date: '2011-04-21 18:34'
        message: ''
        version: '4'
    - 
        author: Ronan Le Gall
        date: '2011-04-21 14:47'
        message: ''
        version: '3'
    - 
        author: Ronan Le Gall
        date: '2011-04-21 12:10'
        message: ''
        version: '2'
    - 
        author: Ronan Le Gall
        date: '2011-04-21 11:34'
        message: ''
        version: '1'

---
{{#> callout type='info' }}

This tutorial remains very interesting as it explains many basics of a Nuxeo module and is IDE agnostic. Yet the common way of initialising a plugin project for Nuxeo Platform is now to use [Nuxeo IDE]({{page space='idedoc' page='documentation-center-for-nuxeo-platform-ides'}}) which provides many wizards.

{{/callout}}

This recipe describes the steps to create the bare structure of a Nuxeo add-on project (aka a bundle).

This is the very first recipe of this cookbook and it will be the basis for the development of new bundles, of new features, even of new UI elements all along this cookbook. All the other recipes will assume that this recipe has been done.

&nbsp;

&nbsp;

{{! unmigrated-inline-wiki-markup: {multi-excerpt:name=recipe-tip}{tip:title=General remarks} * This recipe is not specific to a system or an IDE. You will have to adapt it to your needs. The sole obligation is to use Maven in a console. But, even this part, with experience, could be fitted to your IDE habits if you have any. * You'll find the most frequent and common errors and problems detailed and resolved in the [FAQ|KB:]. * For any remark about this recipe or about this cookbook, don't hesitate to leave us a comment on this page. {tip} {multi-excerpt} }}

&nbsp;

&nbsp;

This recipe is composed of the major steps below:

*   [Step 1: Create the basic project skeleton using Maven]({{page}})
*   [Step 2: Complete the folder structure]({{page}})
*   [Step 3: Adapt or create Files]({{page}})
*   [Step 4: Install and check the deployment of your Bundle]({{page}})

## What you need

<table><tbody><tr><th colspan="1">

Tool

</th><th colspan="1">

Version

</th></tr><tr><td colspan="1">

Java

</td><td colspan="1">

[jdk 1.6](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

</td></tr><tr><td colspan="1">

Maven

</td><td colspan="1">

[2.2.1](http://maven.apache.org/download.html)

</td></tr><tr><td colspan="1">

Packaged Nuxeo DM distribution

</td><td colspan="1">

[5.4.1-Tomcat](http://community.nuxeo.com/static/releases/nuxeo-5.4.1/nuxeo-dm-5.4.1-tomcat.zip)

</td></tr></tbody></table>

## Create the basic project skeleton using Maven

To create a basic folder structure, we use Maven and its default archetype. There is no required location to create your project.
To create your project structure, follow the steps below.

1.  In a console, type: `mvn archetype:generate`.
    The available archetypes are listed.
2.  Check that in the logs displayed, you have the two lines below:

    ```
    [INFO] No archetype defined. Using maven-archetype-quickstart (org.apache.maven.archetypes:maven-archetype-quickstart:1.0)
    Choose archetype:
    [...]
    104: remote -> maven-archetype-quickstart (An archetype which contains a sample Maven project.)
    [...]

    ```

    If not, you may have the wrong version of Maven.

    {{#> callout type='note' heading="Warning"}}

    As the number of archetype is based on archetype contributions, the reference is not automatically "104". But the default proposition should still be "org.apache.maven.archetypes:maven-archetype-quickstart" whatever the version is.

    {{/callout}}
3.  You are prompted a series of choices to create your project. Accept the default propositions (by pressing Enter) except for the `groupId` and `artifactId`of your project which must be:

    <table><tbody><tr><td colspan="1">

    `**groupId**`

    </td><td colspan="1">

    `org.nuxeo.cookbook`

    </td></tr><tr><td colspan="1">

    `**artifactId**`

    </td><td colspan="1">

    `bareproject`

    </td></tr></tbody></table>
4.  Confirm the defined settings.
    The logs indicate that the build was successful.

Here is an example of the log you should have for the whole project creation (some lines have been skipped using "[&hellip;]"):

```
[INFO] Scanning for projects...
[INFO] Searching repository for plugin with prefix: 'archetype'.
[INFO] ------------------------------------------------------------------------
[INFO] Building Maven Default Project
[INFO]    task-segment: [archetype:generate] (aggregator-style)
[INFO] ------------------------------------------------------------------------
[INFO] Preparing archetype:generate
[INFO] No goals needed for project - skipping
[INFO] [archetype:generate {execution: default-cli}]
[INFO] Generating project in Interactive mode
[INFO] No archetype defined. Using maven-archetype-quickstart (org.apache.maven.archetypes:maven-archetype-quickstart:1.0)
Choose archetype:
1: remote -> docbkx-quickstart-archetype (-)
2: remote -> multi (-)
[...]
103: remote -> maven-archetype-profiles (-)
104: remote -> maven-archetype-quickstart (An archetype which contains a sample Maven project.)
105: remote -> maven-archetype-site (An archetype which contains a sample Maven site which demonstrates some of the supported document types like
    APT, XDoc, and FML and demonstrates how to i18n your site. This archetype can be layered
    upon an existing Maven project.)
[...]
385: remote -> javg-minimal-archetype (-)
Choose a number: 104:
Choose version:
1: 1.0-alpha-1
2: 1.0-alpha-2
3: 1.0-alpha-3
4: 1.0-alpha-4
5: 1.0
6: 1.1
Choose a number: 6:
Define value for property 'groupId': : org.nuxeo.cookbook
Define value for property 'artifactId': : bareproject
Define value for property 'version': 1.0-SNAPSHOT:
Define value for property 'package': org.nuxeo.cookbook:
Confirm properties configuration:
groupId: org.nuxeo.cookbook
artifactId: bareproject
version: 1.0-SNAPSHOT
package: org.nuxeo.cookbook
Y:
[INFO] ----------------------------------------------------------------------------
[INFO] Using following parameters for creating project from Old (1.x) Archetype: maven-archetype-quickstart:1.1
[INFO] ----------------------------------------------------------------------------
[INFO] Parameter: groupId, Value: org.nuxeo.cookbook
[INFO] Parameter: packageName, Value: org.nuxeo.cookbook
[INFO] Parameter: package, Value: org.nuxeo.cookbook
[INFO] Parameter: artifactId, Value: bareproject
[INFO] Parameter: basedir, Value: /home/user1/Workspaces/CookbookTest
[INFO] Parameter: version, Value: 1.0-SNAPSHOT
[INFO] ********************* End of debug info from resources from generated POM ***********************
[INFO] project created from Old (1.x) Archetype in dir: /home/user1/Workspaces/CookbookTest/bareproject
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESSFUL
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 13 minutes 51 seconds
[INFO] Finished at: Thu Apr 21 10:51:01 CEST 2011
[INFO] Final Memory: 14M/213M
[INFO] ------------------------------------------------------------------------

```

## Complete the folder structure

After you completed the project creation, you get this folder structure:

<pre>bareproject
|
`-- src
    |-- main
    |   `-- java
    |       `-- org
    |           `-- nuxeo
    |               `-- cookbook
    `-- test
        `-- java
            `-- org
                `-- nuxeo
                    `-- cookbook
</pre>

To fit to the classical structure of a Nuxeo add-on project, you need to create new folders in `src/main` and `src/test` using your favorite means.
At the end, you need to get a folder structure as shown below.

<pre>bareproject
|
`-- src
    |-- main
    |   |-- java
    |   |   `-- org
    |   |       `-- nuxeo
    |   |           `-- cookbook
    |   `-- resources
    |       |-- META-INF
    |       |-- OSGI-INF
    |       |-- schemas
    |       `-- web
    |           `-- nuxeo.war
    `-- test
        |-- java
        |   `-- org
        |       `-- nuxeo
        |           `-- cookbook
        `-- resources
            `-- META-INF
</pre>

{{#> callout type='tip' }}

The `.war` ending of `nuxeo.war` may be deceiptive, but it is actually a folder and not a file.

{{/callout}}

## Adapt or create files

### Adapt the pom.xml file

We need to customize the pom.xml file provided by the archetype at the root folder of the project.

1.  Change the parent entry.

    ```

    	org.nuxeo
    	nuxeo-addons-parent
    	6.0

    ```

2.  In the dependencies, delete the JUnit entry.
3.  Add repositories.

    ```

    		public
    		http://maven.nuxeo.org/public

    			false

    			true

    		snapshots
    		http://maven.nuxeo.org/public-snapshot

    			true

    			false

    ```

Your "pom.xml" file should at the end to look like this:

```

	4.0.0

	org.nuxeo.cookbook
	bareproject
	1.0-SNAPSHOT
	jar

	bareproject
	http://maven.apache.org

		UTF-8

		org.nuxeo
		nuxeo-addons-parent
		6.0

			public
			http://maven.nuxeo.org/public

				false

				true

			snapshots
			http://maven.nuxeo.org/public-snapshot

				true

				false

```

### Create a "deployment-fragment.xml" file

In order to deploy your Nuxeo add-on project in the Nuxeo server, you need to add a new file called "deployment-fragment.xml" in the "/src/main/resources/OSGI-INF" folder. This file tells the deployment mechanism which files must be copied and where. This file is not mandatory at this stage, but it is needed to have your bundle displayed in the log at start up.

For now, the content of the file "deployment-fragment.xml" should be:

```

```

The content of this file will be completed in a coming recipe.

**Remark:**

*   The given version 1 into the fragment item is important because before Nuxeo Runtime 5.4.2, the bundle dependency management was managed into the MANIFEST.MF. You have from 5.4.2 version of Nuxeo Runtime new items (require, required-by)
*   If you want your bundle deployed after all other bundles/contributions, you can add a <require>all</require>
*   If you have this message "_Please update the deployment-fragment.xml in myBundle.jar&nbsp;to use new dependency management_", this is because you didn't specify the fragment version (and maybe let dependency informations into the manifest file.
*   the deployment-fragment.xml file is not required since 5.4.2 if you have no dependency information to transmit to the runtime or pre-deployment actions to execute.

### Create a "MANIFEST.MF" file

As Nuxeo add-ons are OSGi modules, you need to create a "MANIFEST.MF" file in the "/src/main/resources/META-INF" folder. This file can be customized as shown in [this lesson]({{page space='corg' page='to-do'}}).

Here are the minimal properties the "MANIFEST.MF" file must hold:

```
Manifest-Version: 1.0
Bundle-ManifestVersion: 1
Bundle-Name: cookbook-basic-bundle
Bundle-SymbolicName: org.nuxeo.cookbook.basic;singleton:=true
Bundle-Version: 0.0.1
Bundle-Vendor: Nuxeo

```

Some of the values above are mandatory, some should be changed to adapt to your needs.
The following properties are more the less "constants" and their values must be always the same:

```
Manifest-Version: 1.0
Bundle-ManifestVersion: 1

```

The other properties should be customized to your needs.
The two principals are:

```
Bundle-Name: cookbook-basic-bundle
Bundle-SymbolicName: org.nuxeo.cookbook.basic;singleton:=true

```

*   "Bundle-Name" corresponds to the human-readable name of the bundle;
*   "Bundle-SymbolicName" is the reference computed by the OSGi container and looked-up by the other bundles. This declaration is immediately followed, on the same line, by ";singleton:=true" which declares to the OSGi container that the bundle can't cohabit with an other version of the bundle at runtime. The semi-colon is of course mandatory.

The other properties are:

*   "Bundle-Version": This property is all on your responsibility. The Nuxeo convention is three digits separated by a dot such as "0.0.1";
*   "Bundle-Vendor": This is the name of the add-on owner.

Although not used in this recipe, there is one more property you should know of: "Nuxeo-Component:".
It contains a list of files used to define various elements of your component. Its use is detailed in [Writing a Bundle Manifest]({{page page='writing-a-bundle-manifest'}}).

&nbsp;

&nbsp;

&nbsp;

&nbsp;

{{! unmigrated-inline-wiki-markup: {multi-excerpt:name=manifest-format-warning}{warning:title=Formatting} The trickiest and most important part of a "MANIFEST.MF" file is its formatting. One mistake and the OSGi context can't be correctly started, leading to unexpected issues and an unreachable bundle. Here are the three formatting rules to respect: # Each property name: #* begins at the first character of the line; #* ends with a colon without space between the name of the property and the colon itself. # Each value: #* must be preceded by a space; #* ends with a "end of line" with eventually a comma before it. # There MUST be an EMPTY LINE at the END OF THE FILE. {warning}{multi-excerpt} }}

&nbsp;

&nbsp;

### Create files for the tests

#### "log4j.properties"

As the tests will run in a sandbox, it could be useful to define a file named "log4j.properties" file. It must be placed in the "/src/test/resources" folder.

Here is the content of such a file:

```
log4j.rootLogger=WARN, CONSOLE
log4j.appender.CONSOLE=org.apache.log4j.ConsoleAppender
log4j.appender.CONSOLE.layout=org.apache.log4j.PatternLayout
log4j.appender.CONSOLE.layout.ConversionPattern=%d{HH:mm:ss,SSS} %-5p [%C{1}] %m%n

```

To make the log more or less verbose, just change the first value of the "log4j.rootlogger" property.
In this example, the level is "WARN". If you want more details, downgrade it to "DEBUG". You will have more entries displayed in the console about Nuxeo classes involved in the running tests.

#### "MANIFEST.MF"

Create a new "MANIFEST.MF" file, in the "/src/test/resources/META-INF" folder this time.
The content of this file should be:

```
Manifest-Version: 1.0
Bundle-ManifestVersion: 1
Bundle-Name: cookbook-basic-bundle-test
Bundle-SymbolicName: org.nuxeo.cookbook.basic.test;singleton:=true
Bundle-Version: 0.0.1
Bundle-Vendor: Nuxeo

```

The most important difference between this content and the one declared in the "/src/main/resources/META-INF/MANIFEST.MF" file, is the value of the "Bundle-SymbolicName:" property. Those two have to be different to avoid bundle Symbolic Name collision.

## Install and check the deployment of your bundle

&nbsp;

&nbsp;

&nbsp;

&nbsp;

{{! unmigrated-inline-wiki-markup: {multi-excerpt:name=bundle-deployment-steps} # Build your bundle, using the following Command Line Interface (CLI): {code:xml} $ mvn install {code} In the "/target" folder of your project, you get a JAR file whose name if formed like that: artifactId-1.0-SNAPSHOT.jar. # Copy your brand new jar into the sub-folder "nxserver/plugins/" of your nuxeo application's root folder: #* under Windows, assuming that the nuxeo-distribution is installed at the location "C:\Nuxeo\", copy the jar in "C:\Nuxeo\nxserver\plugins\"; #* under Linux, assuming that the nuxeo-distribution is installed at the location "/opt/nuxeo", copy the jar in "/opt/nuxeo/nxserver/plugins". # Start your server using the "./nuxeoctl console" command {tip}You can check the dedicated [Start and stop page|NXDOC:Server start and stop] of the technical documentation for more information about the different ways to start your server).{tip} # Check that your bundle is correctly deployed: check if its SymbolicName (as configured in the "/src/main/resources/META-INF") appears in the logs. The logs are displayed: #* in the console if you started your server using the "./nuxeoctl console" #* in the file "server.log" located in the "log" folder of your Nuxeo server root folder. This name is found in the list of the bundles deployed by Nuxeo in the very first lines of the logs, just after the line ended by " Preprocessing order:".{multi-excerpt} }}

&nbsp;

&nbsp;

&nbsp;

&nbsp;

In the following example, the name of your bundle could be found at the line n&deg;8 of the following print (some lines of the logs have been skip using "[&hellip;]"):

```
2011-04-18 10:37:02,384 INFO  [org.nuxeo.runtime.deployment.preprocessor.DeploymentPreprocessor] Preprocessing order:
	org.nuxeo.ecm.webengine.core
	org.nuxeo.ecm.platform.ui
	org.nuxeo.ecm.platform.types.core
	org.nuxeo.ecm.platform.uidgen.core
	[...]
	org.nuxeo.ecm.platform.oauth
	org.nuxeo.cookbook.book
	org.nuxeo.ecm.platform.syndication
	org.nuxeo.ecm.platform.audit.ws
	[...]
	org.nuxeo.ecm.relations.jena

```

Now you've got a bundle ready for customization. You can propose your contribution to configuration and use it to improve your Nuxeo instance.
Let's move to [another recipe]({{page page='how-to-implement-an-action'}}) to discover how this is possible!

&nbsp;

{{#> callout type='info' }}

As said in the beginning of this recipe, if you have unexpected errors or Nuxeo Application behavior don't forget to check the&nbsp;[FAQ]({{page space='kb'}})&nbsp;and don't forget to leave us a comment about this recipe or about the cookbook!

{{/callout}}

&nbsp;

* * *

<div class="row" data-equalizer="" data-equalize-on="medium">

<div class="column medium-6">{{#> panel heading="Related How-Tos"}}

*   [How-To Index ]({{page page='how-to-index'}})

{{/panel}}</div>

<div class="column medium-6">{{#> panel heading="Related Documentation"}}

*   [Component Model ]({{page page='runtime-and-component-model'}})
*   [Writing a Bundle Manifest ]({{page page='writing-a-bundle-manifest'}})

{{/panel}}

&nbsp;

&nbsp;

</div>

</div>