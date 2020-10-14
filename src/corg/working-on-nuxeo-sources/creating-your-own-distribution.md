---
title: Creating Your Own Distribution
review:
    comment: 'This page needs to be reviewed. Check back soon for updated content!'
    date: '20-10-10'
    status: not-ok
labels:
    - ant-assembly-maven-plugin
    - packaging
    - distribution
confluence:
    ajs-parent-page-id: '9275231'
    ajs-parent-page-title: Working on Nuxeo sources
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Creating+Your+Own+Distribution
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Creating+Your+Own+Distribution'
    page_id: '950276'
    shortlink: BIAO
    shortlink_source: 'https://doc.nuxeo.com/x/BIAO'
    source_link: /display/CORG/Creating+Your+Own+Distribution
tree_item_index: 600
history:
    -
        author: Julien Carsique
        date: '2015-09-07 14:56'
        message: pdate sampl
        version: '17'
    -
        author: Solen Guitter
        date: '2014-04-28 10:23'
        message: ''
        version: '16'
    -
        author: Julien Carsique
        date: '2014-04-25 15:46'
        message: ''
        version: '15'
    -
        author: Julien Carsique
        date: '2014-04-25 15:22'
        message: ''
        version: '14'
    -
        author: Julien Carsique
        date: '2011-06-17 18:57'
        message: Migrated to Confluence 4.0
        version: '13'
    -
        author: Julien Carsique
        date: '2011-06-17 18:57'
        message: ''
        version: '12'
    -
        author: Julien Carsique
        date: '2010-10-22 11:42'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2010-10-22 11:42'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2010-10-22 11:41'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2010-10-22 11:40'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-10-15 12:03'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-10-15 12:03'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2010-09-13 18:27'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2010-05-03 17:36'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2010-04-28 16:04'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2010-04-28 16:04'
        message: ''
        version: '2'
    -
        author: Admin name placeholder
        date: '2010-03-01 13:29'
        message: ''
        version: '1'
---

It is of course possible to create custom builds.

Multiple technologies have been used for packaging in the `nuxeo-distribution` project (`maven-assembly-plugin`, `maven-nuxeo-plugin`, `maven-antrun-extended-plugin`, `nuxeo-distribution-tools`, and finally `ant-assembly-maven-plugin`).

They are all based on Maven principles with the objectives to avoid duplication, ease maintenance and upgrade, rely on Maven artifacts, be OS independent.

We recommend to use our newest tool: [ant-assembly-maven-plugin](https://github.com/nuxeo/ant-assembly-maven-plugin).

Based on Ant syntax, it provides access to major Maven concepts and Ant flexibility.

Principles of an assembly are generally to:

*   inherit a Maven dependency tree (list of artifacts to work with),
*   use this dependency tree to dispatch artifacts into directories,
*   download complementary artifacts (default packaging, resources, drivers, ...),
*   download an empty server (JBoss, Jetty, Tomcat, ...),
*   assemble all those parts into a runnable product.

## ant-assembly-maven-plugin Usage

### Preamble

Nuxeo made a lot of tools to ease retrieving and packaging of Nuxeo source code, generating EAR, ZIP archives, migrating data, etc. Those tools were essentially built as Maven plugins, Ant tasks or Shell programs.

Their source code sits in:

*   [http://hg.nuxeo.org/tools/](http://hg.nuxeo.org/tools/)... (see full listing from [http://hg.nuxeo.org/](http://hg.nuxeo.org/))
*   [https://github.com/nuxeo](https://github.com/nuxeo)

For Nuxeo 5.1, maven-nuxeo-plugin was mostly used for packaging distributions.[
nx-builder](http://svn.nuxeo.org/nuxeo/tools/nx-builder/) was used at a higher level to ease scripting of source code management tasks (download, release, perform integration tests, ...).

For Nuxeo 5.3, maven-nuxeo-plugin was deprecated and we started migrating our assemblies to [nuxeo-distribution-tools](http://hg.nuxeo.org/tools/nuxeo-distribution-tools/) which combines power of Maven artifacts management and Ant flexibility and simplicity.

Since Nuxeo 5.4.3, maven-nuxeo-plugin is no more used at all.

Since Nuxeo 5.9.2, [nuxeo-distribution-tools](http://hg.nuxeo.org/tools/nuxeo-distribution-tools/) is deprecated and replaced with&nbsp;[ant-assembly-maven-plugin](https://github.com/nuxeo/ant-assembly-maven-plugin), a Maven 3 compliant full rewriting of [nuxeo-distribution-tools](http://hg.nuxeo.org/tools/nuxeo-distribution-tools/). Inspired from [maven-antrun-extended-plugin](https://java.net/projects/maven-antrun-extended-plugin)&nbsp;(not a tool from Nuxeo), it extends [maven-antrun-plugin](http://maven.apache.org/plugins/maven-antrun-plugin) with Maven related tasks for managing artifacts. See the&nbsp;[README.md](https://github.com/nuxeo/ant-assembly-maven-plugin/blob/master/README.md) for more details. Issue management: [https://jira.nuxeo.com/browse/NXBT/component/14004](https://jira.nuxeo.com/browse/NXBT/component/14004)

### Main Principles

`ant-assembly-maven-plugin` uses Ant syntax and all Ant tasks can be used, including [Ant-Contrib Tasks](http://ant-contrib.sourceforge.net/).

Reference your assembly file from the POM with the following plugin declaration:

```
  <!-- packaging type can be "pom" (explicit execution) or "zip" (automatic execution) -->
  <packaging>zip</packaging>
  <build>
    <!-- pluginManagement section is usually specified in a parent POM; in "org.nuxeo:nuxeo-ecm" for Nuxeo -->
    <pluginManagement>
      <plugins>
        <plugin>
          <groupId>org.nuxeo.build</groupId>
          <artifactId>ant-assembly-maven-plugin</artifactId>
          <version>2.0.3</version>
          <extensions>true</extensions>
        </plugin>
      </plugins>
    </pluginManagement>
    <!-- add the following in the POM of your assemble module to execute src/main/assemble/assembly.xml -->
    <plugins>
      <plugin>
        <groupId>org.nuxeo.build</groupId>
        <artifactId>ant-assembly-maven-plugin</artifactId>
        <configuration>
          <buildFiles>
            <buildFile>${basedir}/src/main/assemble/assembly.xml</buildFile>
          </buildFiles>
        </configuration>
      </plugin>
    </plugins>
  </build>

```

If your packaging is "pom" instead of "zip", you have to bind the plugin execution on a Maven phase:

```
<build>
  <plugins>
    <plugin>
      <groupId>org.nuxeo.build</groupId>
      <artifactId>ant-assembly-maven-plugin</artifactId>
      <configuration>
        <buildFiles>
          <buildFile>${basedir}/src/main/assemble/assembly.xml</buildFile>
        </buildFiles>
      </configuration>
      <executions>
        <execution>
          <id>packaging</id>
          <goals>
            <goal>build</goal>
          </goals>
          <phase>package</phase>
        </execution>
      </executions>
    </plugin>
  </plugins>
</build

```

Start your assembly file with:

```
<project name="nuxeo-assembly"               <!-- Some project name -->
         default="build"                     <!-- Default Ant target to call if not specified in POM configuration -->
         xmlns:nx="urn:nuxeo-build"
         xmlns:artifact="urn:nuxeo-artifact">
  <taskdef resource="org/nuxeo/build/antlib.xml" uri="urn:nuxeo-build" />
  <taskdef resource="org/nuxeo/build/artifact/antlib.xml" uri="urn:nuxeo-artifact" />

```

### Features Overview

Using the ant-assembly-maven-plugin, you can combine Ant tasks with Maven practices such as:

*   Maven properties and profiles (as properties):
    *   `maven.basedir` => Maven base directory
    *   `maven.project.name`
    *   `maven.project.artifactId`
    *   `maven.project.groupId`
    *   `maven.project.version`
    *   `maven.project.packaging`
    *   `maven.project.id`
    *   `maven.project.build.directory`
    *   `maven.project.build.outputDirectory`
    *   `maven.project.build.finalName`
    *   ...
    *   `maven.profile.X` => equals 'true' if an 'X' Maven profile exists and is activated
*   Ant targets:
    *   `<nx:profile name="X"></nx:profile>`
        Inside Ant construct will be executed only if 'X' Maven profile is active
    *   `<artifact:graph>`
        That builds the dependency graph
    *   `<artifact:expand key="optional key restricting expansion to groupId:artifactId" depth="depth number or 'all' keyword"/>`
        Expands artifact nodes in the current graph, meaning resolving their dependencies
    *   `<artifact:nuxeo-expand />`
        Specialized alternative to <artifact:expand/> which resolves dependencies depending on their Maven coordinates.
    *   ...
*   Ant resources files types:
    *   `<artifact:file>`
        Selects a single artifact.
    *   `<artifact:resolveFile>`
        Selects a single artifact that is not specified by the graph. This is not using the graph but directly the Maven resolution (local and remote repositories).
    *   `<artifact:set>`
        Selects a set of artifacts. can use includes and excludes clauses (filter are supported).
    *   `<artifact:dependencies>`
        Selects the dependencies of an artifact (the depth can be controlled and filter are supported).
    *   ...

The&nbsp;`ant-assembly-maven-plugin` retrieves third-party libraries from the dependency tree and allows automatic listing of third-party libraries to package.

When using&nbsp;`ant-assembly-maven-plugin` for creating your own distribution, instead of specifying all the required third-party libraries, you can now ask to retrieve the full list from the dependency tree and then explicitly remove the ones provided by the environment (the server your application runs within).

Here's a sample explanation for [nuxeo-distribution/nuxeo-distribution-cap/src/main/assemble/assembly.xml](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-distribution/nuxeo-distribution-cap/src/main/assemble/assembly.xml):

```
<project name="cap-nxr-assembly" default="build" xmlns:nx="urn:nuxeo-build" xmlns:artifact="urn:nuxeo-artifact">
  <taskdef resource="org/nuxeo/build/antlib.xml" uri="urn:nuxeo-build" />
  <taskdef resource="org/nuxeo/build/artifact/antlib.xml" uri="urn:nuxeo-artifact" />

  <target name="build" description="Build Nuxeo CAP NXR">
    <echo>Building Nuxeo CAP NXR</echo>

    <!-- All Maven properties are available as Ant properties -->
    <property name="outdir" value="${maven.project.build.directory}" />

    <!-- Build the dependency tree, including the "test" scope, resolving artifacts if needed -->
    <artifact:nuxeo-expand includeTestScope="true" />

    <!-- Optional resources used by Nuxeo IDE -->
    <artifact:print output="${outdir}/artifacts-cap.properties" mode="sdk" />
    <artifact:print output="${outdir}/test-artifacts-cap.properties" mode="sdk" scopes="test" />

    <!-- Prints the graph for debugging purpose -->
    <artifact:print output="${outdir}/dependency-tree.log" />

    <property name="nxr" value="${outdir}/nxr" />
    <delete failonerror="false" dir="${nxr}" />
    <mkdir dir="${nxr}" />

    <!-- Automatically get Nuxeo bundles but not Nuxeo libraries (which groupId starts with"org.nuxeo.lib"), nor bundles with "test" scope -->
    <copy todir="${nxr}/bundles" overwrite="true">
      <artifact:set>
        <includes>
          <artifact groupId="org.nuxeo*" scope="!test" type="!pom" />
        </includes>
        <excludes>
          <artifact groupId="org.nuxeo.lib*" />
        </excludes>
      </artifact:set>
    </copy>

    <!-- Automatically get third-party libraries (all artifacts which groupId doesn't start with "org.nuxeo") and Nuxeo libraries (which groupId starts with"org.nuxeo.lib") -->
    <copy todir="${nxr}/lib" overwrite="true">
      <artifact:set>
        <includes>
          <artifact groupId="!org.nuxeo*" scope="!test" />
          <artifact groupId="org.nuxeo.lib*" scope="!test" />
        </includes>
      </artifact:set>
    </copy>

    <!-- Remove duplicates: keep only more recent version for each library -->
    <nx:rmdups dir="${nxr}/lib" />

    <copy file="${outdir}/artifacts-cap.properties" todir="${nxr}" />
    <copy file="${outdir}/test-artifacts-cap.properties" todir="${nxr}" />

    <!-- ZIP the resulting package and "attach" it to the Maven reactor as a build artifact -->
    <zip destfile="${outdir}/${maven.project.artifactId}-${maven.project.version}.zip" basedir="${nxr}" />
    <artifact:attach file="${outdir}/${maven.project.artifactId}-${maven.project.version}.zip" type="zip" />
  </target>

</project>

```

See [the assembly.xml of nuxeo-distribution-tomcat](https://github.com/nuxeo/nuxeo-distribution/blob/master/nuxeo-distribution-tomcat/src/main/assemble/assembly.xml) for other use cases such as direct resolutions out of the dependency graph and atomic resolutions from the dependency graph.
