---
title: Rules for Distributions
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '4685848'
    ajs-parent-page-title: Coding and Design Guidelines
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Rules+for+Distributions
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Rules+for+Distributions'
    page_id: '4686208'
    shortlink: gIFH
    shortlink_source: 'https://doc.nuxeo.com/x/gIFH'
    source_link: /display/CORG/Rules+for+Distributions
tree_item_index: 700
history:
    -
        author: Manon Lumeau
        date: '2015-09-29 13:57'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2014-04-28 10:47'
        message: ''
        version: '23'
    -
        author: Julien Carsique
        date: '2014-04-25 14:09'
        message: ''
        version: '22'
    -
        author: Julien Carsique
        date: '2011-11-24 11:56'
        message: Migrated to Confluence 4.0
        version: '21'
    -
        author: Julien Carsique
        date: '2011-11-24 11:55'
        message: Reverted from v. 18
        version: '20'
    -
        author: Julien Carsique
        date: '2011-11-24 11:51'
        message: ''
        version: '19'
    -
        author: Julien Carsique
        date: '2011-11-24 11:42'
        message: NXP-7905 - Generate Nuxeo SDK resource per application
        version: '18'
    -
        author: Julien Carsique
        date: '2011-10-17 11:01'
        message: 'use nuxeo-distribution-tools:nuxeo-expand sdk mode'
        version: '17'
    -
        author: Julien Carsique
        date: '2011-10-04 18:38'
        message: udpate SDK Ant targets snipets
        version: '16'
    -
        author: Julien Carsique
        date: '2011-09-26 14:35'
        message: ''
        version: '15'
    -
        author: Julien Carsique
        date: '2011-09-26 14:28'
        message: Nuxeo IDE requirements
        version: '14'
    -
        author: Florent Guillaume
        date: '2011-08-18 15:50'
        message: ''
        version: '13'
    -
        author: Julien Carsique
        date: '2011-08-17 18:27'
        message: add product name
        version: '12'
    -
        author: Julien Carsique
        date: '2011-06-16 16:39'
        message: ''
        version: '11'
    -
        author: Florent Guillaume
        date: '2011-02-25 17:17'
        message: ''
        version: '10'
    -
        author: Florent Guillaume
        date: '2011-02-25 17:14'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2011-02-25 16:14'
        message: ''
        version: '8'
    -
        author: Julien Carsique
        date: '2011-02-25 16:10'
        message: startup wizard requirements
        version: '7'
    -
        author: Julien Carsique
        date: '2010-11-04 17:09'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2010-11-04 17:07'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2010-11-04 17:07'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2010-11-04 15:07'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2010-11-04 15:06'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2010-11-04 15:05'
        message: ''
        version: '1'

---
## Files and Directories Naming

The common rule is to zip a folder containing the distribution with an explicit name giving the product name, the version and the server.

For instance, Nuxeo DM 5.4.2 with Tomcat will be packaged:

*   in a zip named nuxeo-distribution-tomcat-5.4.2-nuxeo-dm.zip (Maven artifact org.nuxeo.ecm.[distribution:nuxeo-distribution-tomcat:5.4.2:nuxeo-dm:zip](http://distributionnuxeo-distribution-tomcat:5.4.2:nuxeo-dm:zip))
    and uploaded as nuxeo-dm-5.4.2-tomcat.zip (downloadable ZIP)
*   containing a folder named nuxeo-dm-5.4.2-tomcat

Corresponding installers will be named with a suffix: nuxeo-dm-5.4.2-tomcat-setup.exe, nuxeo-dm-5.4.2-tomcat-izpack-installer.jar, nuxeo-dm-5.4.2-tomcat-izpack-installer.exe, nuxeo-dm-5.4.2-tomcat-izpack-installer.app.zip, ...

## Distribution Specifics

Some information needs to be set at distribution build time.

### Distribution Properties

For marketplace needs, all products need to be identified ([NXP-5903](https://jira.nuxeo.org/browse/NXP-5903)).

Every assembly.xml creating a distribution **must** do the following:

*   Add a tstamp call in assembly initialization:

    ```
    <target name="init" unless="init.done">
        <tstamp />
        ...
        <antcall target="expand" />
        <property name="init.done" value="true" />
    </target>
    ```

*   Add a set-distribution-properties target:

    ```
    <target name="set-distribution-properties">
        <echo append="false" file="${distribution.properties.file}">## DO NOT MANUALLY EDIT THIS FILE
    org.nuxeo.distribution.name=${org.nuxeo.distribution.name}
    org.nuxeo.distribution.server=${org.nuxeo.distribution.server}
    org.nuxeo.distribution.version=${org.nuxeo.distribution.version}
    org.nuxeo.distribution.date=${org.nuxeo.distribution.date}
        </echo>
    </target>
    ```

*   Just before zip and attach:artifact, do

    ```
    <antcall target="set-distribution-properties">
        <param name="distribution.properties.file" value="${distribution.dir}/templates/common/config/distribution.properties" />
        <param name="org.nuxeo.distribution.name" value="dm" />
        <param name="org.nuxeo.distribution.server" value="jboss"/>
        <param name="org.nuxeo.distribution.version" value="${maven.project.version}" />
        <param name="org.nuxeo.distribution.date" value="${DSTAMP}${TSTAMP}"/>
    </antcall>
    ```

Properties' values:

*   org.nuxeo.distribution.name: cap, dm, dam, cmf, coreserver, correspondence, ...
*   org.nuxeo.distribution.server: jboss, tomcat, jetty, ...
*   org.nuxeo.distribution.version is the product version: 5.4.0-SNAPSHOT, 5.4.0, 1.0, 1.1-SNAPSHOT, ...

These values are used by Connect and Studio when registering an instance through Connect, and must be chosen among values legal for Connect/Studio. TODO document what vocabularies or enum they follow.

### Default Values

Some values needed by the configuration templates depend on the distribution (for instance the product name).

Add the following just after the `set-distribution-properties` call:

```
<echo append="true" file="${distribution.dir}/templates/nuxeo.defaults">
org.nuxeo.ecm.product.name=Product Name
</echo>
```

Replace "Product Name" with the relevant one (for instance "Nuxeo DM").

### Nuxeo IDE Requirements

Since Nuxeo 5.4.3, Nuxeo IDE can use a distribution as a SDK provided the following requirements:

*   There must be a "`sdk`" directory at root of the distribution containing:
    *   `distribution.properties` file,
    *   `artifacts-*.properties` file,
    *   `test-artifacts-*.properties` file.
*   Optionally, there may be a "`sdk/tests`" directory at root of the distribution containing the test artifacts.
*   Optionally, there may be a "`sdk/sources`" directory at root of the distribution containing the sources artifacts. Source artifacts will be downloaded for released distributions only.

{{multiexcerpt 'ide-replaced-by-generator-info' space='idedoc' page='nuxeo-ide'}}

Here are code snippets for assemblies (require nuxeo-distribution-tools 1.10.2 or, since Nuxeo 5.9.2, ant-assembly-maven-plugin2.0); new lines start with "+":

{{#> panel type='code' heading='Generate artifacts-coreserver.properties and test-artifacts-coreserver.properties files in nuxeo-distribution-coreserver'}}

```
<target name="expand">
+ <artifact:nuxeo-expand scope="test" />
+ <artifact:print output="${outdir}/test-artifacts-coreserver.properties" mode="sdk" />
  <artifact:nuxeo-expand />
+ <artifact:print output="${outdir}/artifacts-coreserver.properties" mode="sdk" />
</target>

<target name="build-standard" description="Build default distribution" depends="init">
  (...)
+ <copy file="${outdir}/artifacts-coreserver.properties" todir="${nuxeo.ear}" />
+ <copy file="${outdir}/test-artifacts-coreserver.properties" todir="${nuxeo.ear}" />
  <zip destfile="${outdir}/${maven.project.artifactId}-${maven.project.version}.zip" basedir="${nuxeo.ear}" />
  <artifact:attach file="${outdir}/${maven.project.artifactId}-${maven.project.version}.zip" target="${maven.project.groupId}:${maven.project.artifactId}" type="zip" />
</target>

```

{{/panel}}{{#> panel type='code' heading='Generate sdk directory in nuxeo-distribution-tomcat'}}

```
<target name="init" unless="init.done">
  (...)
+ <condition property="build.sdk">
+   <or>
+     <isset property="maven.profile.release" />
+     <isset property="maven.profile.sdk" />
+   </or>
+ </condition>
  (...)
</target>

<target name="expand" unless="no.build">
  <artifact:nuxeo-expand />
+ <artifact:print output="${outdir}/artifacts-tomcat.properties" mode="sdk" />
</target>

<target name="reorganize-libs-zip-attach">
  <antcall target="reorganize-libs" />
+ <antcall target="copy-sdk-resources" />
  <zip destfile="${outdir}/${maven.project.artifactId}-${maven.project.version}-${classifier}.zip" basedir="${outdir}" includes="${classifier}-${maven.project.version}-tomcat/**" />
  <artifact:attach file="${outdir}/${maven.project.artifactId}-${maven.project.version}-${classifier}.zip" target="${maven.project.groupId}:${maven.project.artifactId}" classifier="${classifier}" type="zip" />
+ <antcall target="build-sdk" />
</target>

+ <target name="copy-sdk-resources">
+   <copy file="${outdir}/artifacts-tomcat.properties"
+         todir="${distribution.dir}/sdk" />
+   <move todir="${distribution.dir}/sdk">
+     <fileset dir="${distribution.dir}/nxserver/">
+       <filename name="*artifacts-*.properties" />
+     </fileset>
+   </move>
+ </target>

+ <target name="build-sdk" if="build.sdk">
+   <mkdir dir="${distribution.dir}/sdk/sources" />
+   <copy todir="${distribution.dir}/sdk/sources">
+     <artifact:resolveFiles source="${distribution.dir}/sdk/artifacts-*.properties" classifier="sources" />
+   </copy>
+   <mkdir dir="${distribution.dir}/sdk/tests" />
+   <copy todir="${distribution.dir}/sdk/tests">
+     <artifact:resolveFiles source="${distribution.dir}/sdk/test-artifacts-*.properties" />
+   </copy>
+   <zip destfile="${outdir}/${maven.project.artifactId}-${maven.project.version}-${classifier}-sdk.zip" basedir="${outdir}" includes="${classifier}-${maven.project.version}-tomcat/**" />
+   <artifact:attach file="${outdir}/${maven.project.artifactId}-${maven.project.version}-${classifier}-sdk.zip" target="${maven.project.groupId}:${maven.project.artifactId}" classifier="${classifier}-sdk" type="zip" />
+ </target>

```

{{/panel}}

## Startup Wizard

{{> anchor 'startup_wizard'}}

Since Nuxeo EP 5.4.1 a startup wizard is available to help users configure their Nuxeo the first time it's started.

It starts in less than 2s and asks the user to enter the main configuration parameters (such as binding IP, logs and data directory), HTTP proxy, SGBD, SMTP and, in particular, offers easy registration to Nuxeo Studio and Connect.

It is currently only available for Tomcat distributions and will work with any Nuxeo product (DM, DAM and CMF have dedicated welcome message and logo; others are identified as "EP" products). If needed it can be made available in other distributions.

Technical requirements:

*   Startup wizard is managed by Nuxeo Launcher.
*   It is started if and only if
    *   `nuxeo.conf`: `nuxeo.force.generation` is not `false`
    *   `nuxeo.conf`: `nuxeo.wizard.done=false`, so please **update your release procedure**.
    *   `templates/nuxeo-wizard.war` exists, so please **add the following in your assembly** file:

        ```
        <!-- Nuxeo wizard -->
        <copy tofile="${distribution.dir}/templates/nuxeo-wizard.war">
            <artifact:resolveFile key="org.nuxeo.ecm.distribution:nuxeo-startup-wizard:${nuxeo.distribution.version}:war" />
        </copy>

        ```

At the end of the wizard, a restart is called and the wizard will no more be ran unless the property `nuxeo.wizard.done` is reset to `false`.

By default, the startup wizard is not activated in order not to disturb developers and continuous integration but it **must** be properly installed in all distributions. It will be activated in all downloadable packages by adding the property `nuxeo.wizard.done=false` in `nuxeo.conf`.

{{#> callout type='info' }}

As nuxeo.conf is used by the startup wizard, port translation is still available: multiple tomcat instances running on the same server will not conflict.

{{/callout}}
