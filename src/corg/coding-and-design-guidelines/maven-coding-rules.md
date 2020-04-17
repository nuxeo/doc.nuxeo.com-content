---
title: Maven Coding Rules
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
    canonical: Maven+Coding+Rules
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Maven+Coding+Rules'
    page_id: '12911302'
    shortlink: xgLF
    shortlink_source: 'https://doc.nuxeo.com/x/xgLF'
    source_link: /display/CORG/Maven+Coding+Rules
tree_item_index: 200
history:
    -
        author: Manon Lumeau
        date: '2015-10-09 09:48'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2015-09-29 13:56'
        message: ''
        version: '24'
    -
        author: Julien Carsique
        date: '2015-09-04 14:28'
        message: ''
        version: '23'
    -
        author: Julien Carsique
        date: '2015-09-04 14:26'
        message: ''
        version: '22'
    -
        author: Julien Carsique
        date: '2014-08-28 18:33'
        message: ''
        version: '21'
    -
        author: Julien Carsique
        date: '2014-08-28 18:30'
        message: IDE sync POM limitations
        version: '20'
    -
        author: Solen Guitter
        date: '2014-08-28 17:43'
        message: ''
        version: '19'
    -
        author: Julien Carsique
        date: '2014-08-28 17:24'
        message: ''
        version: '18'
    -
        author: Julien Carsique
        date: '2014-08-28 17:22'
        message: declare all direct dependencies
        version: '17'
    -
        author: Solen Guitter
        date: '2014-01-31 10:29'
        message: formatting
        version: '16'
    -
        author: Julien Carsique
        date: '2014-01-30 16:20'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2012-11-26 17:28'
        message: JIRA Issue macro params updated with additional server info
        version: '14'
    -
        author: Solen Guitter
        date: '2012-11-26 17:28'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2012-11-26 17:26'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2012-11-26 17:10'
        message: Added toc and titles
        version: '11'
    -
        author: Julien Carsique
        date: '2012-11-19 19:19'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2012-11-19 19:13'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2012-11-19 19:12'
        message: ''
        version: '8'
    -
        author: Antoine Taillefer
        date: '2012-11-19 18:52'
        message: ''
        version: '7'
    -
        author: Antoine Taillefer
        date: '2012-11-19 18:50'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2012-11-19 17:05'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2012-11-19 16:18'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2012-11-19 16:15'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2012-11-19 12:56'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2012-11-15 14:13'
        message: ''
        version: '1'

---
The following rules have been set in order to satisfy important development constraints:

*   ensure build reproducibility,
*   ease maintenance,
*   provide versions consistency,
*   allow POM inheritance or import.

## Basic Rules

### POM's Header

Maven POMs are written in XML, always start them with:

{{#> panel type='code' heading='XML header'}}

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
```

{{/panel}}

### Code Formatting

Format your code.

*   Use (two) spaces instead of tabs.
*   The Eclipse plugin [m2eclipse](http://eclipse.org/m2e/) has many defects but it provides at least a great formatter.
*   When putting lines in comments, keep them readable

{{#> panel type='code' heading='Comments sample'}}

```xml
<!-- <dependency> -->
<!-- <groupId>org.nuxeo.runtime</groupId> -->
<!-- <artifactId>nuxeo-runtime-start</artifactId> -->
<!-- <version>${nuxeo.runtime.version}</version> -->
<!-- </dependency> -->
```

{{/panel}}

### Dependencies and Plugins Definition

Define dependencies' versions in the `dependencyManagement` section and plugins' versions in the `pluginManagement` section.
Note that not only the version is managed, those definitions also include the `exclusions`, `configuration`, ...
The `reporting` plugins versions are not inherited from the `pluginManagement`, they must be repeated. Using a property to avoid duplication is a good idea.

`LATEST` and `RELEASE` keywords are forbidden, as well as `pom.*` properties but you can use variables prefixed "`project.`" to reference any field of the POM that is a single value element. For instance, you can use "`${project.version}`".
You can also use variables named `nuxeo.something.version` or `marketplace.something.version` : when releasing Nuxeo, the version replacement only applies on each POM on the parent version, the project version and all the properties named "`nuxeo|marketplace.*version`".

#### SNAPSHOT plugins

`SNAPSHOT` plugins are forbidden.

If you need to temporarily use a SNAPSHOT plugin:

*   add it to the `unCheckedPluginList` in `org.nuxeo:nuxeo-ecm`

    {{#> panel type='code' heading='build/pluginManagement/plugins/maven-enforcer-plugin/configuration/rules/requirePluginVersions/unCheckedPluginList'}}

    ```xml
    <unCheckedPluginList>org.nuxeo.build:ant-assembly-maven-plugin</unCheckedPluginList>
    ```

    {{/panel}}
*   create a **blocker** JIRA issue requiring the plugin upgrade for next Nuxeo LTS/FT release

#### SNAPSHOT dependencies

`SNAPSHOT` dependencies are only allowed in development.

If you need to temporarily use a SNAPSHOT dependency:

*   add it to the `requireReleaseDeps/excludes` in&nbsp;`org.nuxeo:nuxeo-ecm`

    {{#> panel type='code' heading='profile/nightly/build/pluginManagement/plugins/maven-enforcer-plugin/configuration/rules/requireReleaseDeps/excludes'}}

    ```xml
    <exclude>org.nuxeo:nuxeo-ftest:*:zip</exclude>
    ```

    {{/panel}}
*   create a **blocker** JIRA issue requiring the dependency upgrade for next Nuxeo LTS/FT release

Note that the SNAPSHOT dependency will be tolerated during nightly releases, but would make the LTS/FT release **fail** even with that exclusion.

### Dependency convergence and consistency

Dependency version doubt is forbidden and transitive dependency upgrade is allowed but not the downgrade.

If a project `libA` depends on the artifact `libZ` and another project `libB` also depends on `libZ`, then Maven will perform automatic version resolution to find the best match. On Nuxeo code, we want that version being explicitly set in the dependencyManagement.
Here are the possible cases:

1.  libA => libZ:**1**, libB => libZ:**1**, **no dependencyManagement on libZ**
    Ok, we don't care about transitive dependency versions when they are consistent between direct dependencies.
2.  libA => libZ:**1**, libB => libZ:**2**, **no dependencyManagement on libZ**
    Error: you have to state **libZ:2** in the dependencyManagement.
3.  libA => libZ:**1**, libB => libZ:**2**, dependencyManagement **libZ:2**
    Ok
4.  libA => libZ:**1**, libB => libZ:**3**, dependencyManagement **libZ:2**
    Error: you have to state **libZ:3** in the dependencyManagement.
5.  libA => libZ:**1**, libB => libZ:**2**, dependencyManagement **libZ:3**
    Ok, it's an upgrade.

### Duplication

Avoid duplication as much as possible (even if it is not always possible or easy since Maven syntax is verbose and not really designed for it).

*   For instance, if using the same version for multiple dependencies, then use a property for setting the version:

    {{#> panel type='code' heading='Sample use of a property for setting a version'}}

    ```xml
    <properties>
      <apacheds.version>1.5.1</apacheds.version>
    </properties>
    <dependencyManagement>
      <dependencies>
        <dependency>
          <groupId>org.apache.directory.server</groupId>
          <artifactId>apacheds-protocol-shared</artifactId>
          <version>${apacheds.version}</version>
        </dependency>
        <dependency>
          <groupId>org.apache.directory.server</groupId>
          <artifactId>apacheds-core</artifactId>
          <version>${apacheds.version}</version>
        </dependency>
      </dependencies>
    </dependencyManagement>
    ```

    {{/panel}}

*   Do not define the same things twice (either in the same POM, either using inheritance). Maven 3 logs useful warnings when it finds duplicate definitions:

    {{#> panel type='code' heading='Maven 3 duplication warning sample'}}

    ```
    [WARNING] 'profiles.profile[itest].plugins.plugin.(groupId:artifactId)' must be unique but found duplicate declaration of plugin org.apache.maven.plugins:maven-antrun-plugin @ line 261, column 19
    ```

    {{/panel}}

*   Make use of Maven inheritance. There are multiple ways:

    {{#> panel type='code' heading='Parent POM inheritance'}}

    ```xml
    <parent>
      <groupId>org.nuxeo</groupId>
      <artifactId>nuxeo-ecm</artifactId>
      <version>5.7-SNAPSHOT</version>
    </parent> 
    ```

    {{/panel}}{{#> panel type='code' heading='Dependencies inheritance'}}

    ```xml
    <dependencies>
      <dependency>
        <groupId>org.nuxeo.ecm.distribution</groupId>
        <artifactId>nuxeo-distribution-cap</artifactId>
        <type>pom</type>
      </dependency>
    </dependencies>
    ```

    {{/panel}}{{#> panel type='code' heading='BOM (Bill Of Materials) import sample'}}

    ```xml
    <dependencyManagement>
      <dependencies>
        <dependency>
          <groupId>org.nuxeo.ecm.distribution</groupId>
          <artifactId>nuxeo-distribution-cap</artifactId>
          <version>5.7-SNAPSHOT</version>
          <type>pom</type>
          <scope>import</scope>
        </dependency>
      </dependencies>
    </dependencyManagement>
    ```

    {{/panel}}

### Direct versus Transitive Dependencies

Declare all your **direct** dependencies, do not rely on transitivity.
Using a transitive dependency in your code is weak and error prone: for instance, if the dependency change, your code won't compile without any visible change.

There are two complementary solutions to optimize your POM and add missing direct dependencies:

*   [Use the maven-dependency-plugin](#maven-dependency-plugin):

    ```
    $ mvn dependency:analyze
    [WARNING] Used undeclared dependencies found:
    [WARNING]    org.nuxeo.ecm.core:nuxeo-core-schema:jar:5.9.3:compile
    [WARNING]    org.nuxeo.ecm.platform:nuxeo-platform-audit-api:jar:5.9.3:compile
    [WARNING]    org.mockito:mockito-all:jar:1.9.5:test
    [WARNING]    org.nuxeo.runtime:nuxeo-runtime-test:jar:5.9.3:test
    [WARNING]    javax.servlet:servlet-api:jar:2.5:compile
    [WARNING] Unused declared dependencies found:
    [WARNING]    org.freemarker:freemarker:jar:2.3.11:compile
    [WARNING]    org.nuxeo.ecm.platform:nuxeo-platform-directory-sql:jar:5.9.3:compile
    [WARNING]    org.nuxeo.ecm.platform:nuxeo-platform-directory-core:jar:5.9.3:compile
    [WARNING]    org.nuxeo.ecm.platform:nuxeo-platform-webapp:jar:5.9.3:compile
    [WARNING]    com.h2database:h2:jar:1.1.114-nx:provided
    [WARNING]    hsqldb:hsqldb:jar:1.8.0.1:compile
    [WARNING]    net.sf.opencsv:opencsv:jar:2.1:compile
    [WARNING]    org.nuxeo.ecm.platform:nuxeo-connect-client-wrapper:jar:5.9.3:test
    [WARNING]    org.nuxeo.ecm.platform:nuxeo-platform-directory-types-contrib:jar:5.9.3:test
    ```

    A call to `mvn dependency:tree` will help to visualize the transitivity making the compile possible.

## Maven Issues, Common Mistakes and Rules

* Since Maven 3.0, all `pom.*` properties are deprecated, replaced with ``project.*``
* Plugin configuration can be done in `plugin/some.plugin/configuration` and `plugin/some.plugin/executions/execution/configuration` depending on what you want (set a global configuration or an execution's specific configuration) but be careful that when using both kinds of configuration, the way they are merged or overwritten depends on the plugin implementation. Do not expect any default behavior.
* All modules should set a `description` in complement of the `name`.
* Do not use two different POMs for defining the `modules` and the `dependencies`.

* The `relativePath` definition works differently with Maven 2 and 3 and is useless if equal to `../pom.xml`. As of Maven 3, it is mandatory if `../pom.xml`does not point at the right parent.

    ```xml
    <parent>
      <groupId>org.nuxeo</groupId>
      <artifactId>nuxeo-ecm</artifactId>
      <version>5.7-SNAPSHOT</version>
      <relativePath>../pom.xml</relativePath>
    </parent>
    ```

If the parent is not supposed to be resolved locally, then set an empty relative path to force Maven looking for the parent POM in the repositories: `<relativePath />`.

* Do not rely on `~/.m2/settings.xml` for build-ability: a project must be build-able without information provided from outside however it is legitimate and highly recommended to use the local settings for setting passwords and custom environments (for instance repositories replacement, mirrors, ...).
    [m2eclipse](http://eclipse.org/m2e/) plugin can have some incompatibilities with other plugins (see for instance {{jira server='Nuxeo Issue Tracker' key='NXP-8625'}}) and require such workaround configuration:

    ```xml
    <!--This plugin's configuration is used to store Eclipse m2e settings only. It has no influence on the Maven build itself. -->
    <plugin>
      <groupId>org.eclipse.m2e</groupId>
      <artifactId>lifecycle-mapping</artifactId>
      <version>1.0.0</version>
      <configuration>
        <lifecycleMappingMetadata>
          <pluginExecutions>
            <pluginExecution>
              <pluginExecutionFilter>
                <groupId>net.java.maven-incremental-build</groupId>
                <artifactId>incremental-build-plugin</artifactId>
                <versionRange>[1.4,)</versionRange>
                <goals>
                  <goal>incremental-build</goal>
                </goals>
              </pluginExecutionFilter>
              <action>
                <ignore></ignore>
              </action>
            </pluginExecution>
          </pluginExecutions>
        </lifecycleMappingMetadata>
      </configuration>
    </plugin>
    ```

## Define a Corporate POM

A lot of information is common to all your projects. That information is useful and should not be forgotten but there's no need to redefine it in all POMs: use a corporate POM as a common parent POM for your projects.

Here is information you should inherit from the corporate POM:

```xml
<url>http://www.nuxeo.com/en/products</url>

<organization>
  <name>Nuxeo</name>
  <url>http://www.nuxeo.com</url>
</organization>

<licenses>
  <license>
    <name>GNU LESSER GENERAL PUBLIC LICENSE, Version 2.1</name>
    <url>http://www.gnu.org/copyleft/lesser.txt</url>
  </license>
</licenses>

<mailingLists>
  <mailingList>
    <name>Nuxeo ECM list</name>
    <post>ecm@lists.nuxeo.com</post>
    <subscribe>http://lists.nuxeo.com/mailman/listinfo/ECM</subscribe>
    <unsubscribe>http://lists.nuxeo.com/mailman/listinfo/ECM</unsubscribe>
    <archive>http://lists.nuxeo.com/pipermail/ecm/</archive>
    <otherArchives>
      <otherArchive>
        http://dir.gmane.org/gmane.comp.cms.nuxeo.bugs
      </otherArchive>
      <otherArchive>
        http://www.mail-archive.com/ecm@lists.nuxeo.com/
      </otherArchive>
    </otherArchives>
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

<developers>
  <developer>
    <id>Nuxeo</id>
    <name>Nuxeo Developers Team</name>
    <email>nuxeo-dev@lists.nuxeo.com</email>
    <timezone>+1</timezone>
  </developer>
</developers>
```

## Define a Super POM per Project

A lot of definitions (artifacts' and plugins' versions, helper plugins configurations, ...) are common to all your projects or modules in a given version. Factorize those definitions into a super POM.

Nuxeo defines a super POM (which is also the corporate POM) inherited by all other Nuxeo projects and modules: see [org.nuxeo:nuxeo-ecm:5.6](https://maven.nuxeo.org/nexus/index.html#nexus-search;gav%7Eorg.nuxeo%7Enuxeo-ecm%7E5.6%7E%7E).

It is generally a good idea to gather all `dependencyManagement` and `pluginManagement` sections of all modules into a unique one, preferably a common parent project to those modules, a common BOM or the super POM.
In Nuxeo, they are mainly set in  [`org.nuxeo:nuxeo-ecm`](https://maven-eu.nuxeo.org/nexus/index.html#nexus-search;gav%7Eorg.nuxeo%7Enuxeo-ecm%7E%7E%7E) , [`org.nuxeo:nuxeo-addons-parent`](https://maven-eu.nuxeo.org/nexus/index.html#nexus-search;gav%7Eorg.nuxeo%7Enuxeo-addons-parent%7E%7E%7E) and  [`org.nuxeo.ecm.distribution:nuxeo-distribution`](https://maven-eu.nuxeo.org/nexus/index.html#nexus-search;gav%7Eorg.nuxeo.ecm.distribution%7Enuxeo-distribution%7E%7E%7E) POMs.

Every project super POM should define the following if not defined (or different from those) into the corporate POM:

```xml
<properties>
  <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
</properties>

<scm>
  <connection>scm:git:git://github.com/nuxeo/nuxeo.git</connection>
  <developerConnection>scm:git:ssh://git@github.com:nuxeo/nuxeo.git</developerConnection>
  <url>https://github.com/nuxeo/nuxeo</url>
</scm>

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
      <updatePolicy>always</updatePolicy>
      <enabled>true</enabled>
    </snapshots>
  </repository>
</repositories>

<pluginRepositories>
  <pluginRepository>
    <id>public</id>
    <url>http://maven.nuxeo.org/nexus/content/groups/public</url>
    <name>Nuxeo virtual release repository</name>
    <releases>
      <enabled>true</enabled>
    </releases>
    <snapshots>
      <enabled>false</enabled>
    </snapshots>
  </pluginRepository>
  <pluginRepository>
    <id>public-snapshot</id>
    <url>http://maven.nuxeo.org/nexus/content/groups/public-snapshot</url>
    <name>Nuxeo virtual snapshot repository</name>
    <releases>
      <enabled>false</enabled>
    </releases>
    <snapshots>
      <updatePolicy>always</updatePolicy>
      <enabled>true</enabled>
    </snapshots>
  </pluginRepository>
</pluginRepositories>

<distributionManagement>
  <site>
    <id>maven-website</id>
    <url>scpexe://gironde.nuxeo.com/home/mavenweb/site/</url>
  </site>
  <repository>
    <id>public-releases</id>
    <url>https://mavenin.nuxeo.com/nexus/content/repositories/public-releases</url>
  </repository>
  <snapshotRepository>
    <id>public-snapshots</id>
    <url>https://mavenin.nuxeo.com/nexus/content/repositories/public-snapshots</url>
    <uniqueVersion>true</uniqueVersion>
  </snapshotRepository>
</distributionManagement>
```

{{#> callout type='note' heading='About the repositories'}}

Since you host your own repository manager, you must not add other repositories in your POMs. Instead, ask to your administrator for adding them into your corporate repository manager. This provides artifacts caching and central management.&nbsp;

{{/callout}}

## Make Use of Helper Plugins

There are a lot of available Maven plugins which can help to check, enforce and improve your POMs.

Versions have been removed from the following extracts: pick up the latest one from the dedicated sites and remember to define them in the `pluginManagement`section (and/or `reporting`section if relevant).

### [maven-compiler-plugin](http://maven.apache.org/plugins/maven-compiler-plugin/)

```xml
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-compiler-plugin</artifactId>
  <inherited>true</inherited>
  <configuration>
    <source>1.7</source>
    <target>1.7</target>
    <showDeprecation>true</showDeprecation>
    <showWarnings>true</showWarnings>
  </configuration>
</plugin>
```

### [maven-help-plugin](http://maven.apache.org/plugins/maven-help-plugin/)

Get relative information about a project or the system. The `"mvn help:effective-pom`" command is particularly useful.

### [maven-dependency-plugin](http://maven.apache.org/plugins/maven-dependency-plugin/)

That plugin has various analysis and reporting goals. The `"mvn dependency:tree"` command can be used to better understand where an artifact comes from in a given version. It is very similar to the output of `"artifact:print"` command of [nuxeo-distribution-tools](https://github.com/nuxeo/nuxeo-distribution-tools) plugin.

```xml
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-dependency-plugin</artifactId>
  <executions>
    <execution>
      <id>analyze</id>
      <goals>
        <goal>analyze-only</goal>
      </goals>
      <configuration>
      </configuration>
    </execution>
  </executions>
</plugin>
```

### [maven-enforcer-plugin](http://maven.apache.org/plugins/maven-enforcer-plugin/)

Various rules and constraints/enforcements on environment and POM content.

```xml
<build>
  <pluginManagement>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-enforcer-plugin</artifactId>
        <configuration>
          <rules>
            <requirePluginVersions>
              <message>Set plugin versions in pluginManagement section.</message>
              <banLatest>true</banLatest>
              <banRelease>true</banRelease>
              <banSnapshots>true</banSnapshots>
              <!-- <unCheckedPluginList>org.nuxeo.build:nuxeo-distribution-tools</unCheckedPluginList> -->
            </requirePluginVersions>
            <requireReleaseDeps>
              <message>No Snapshots Allowed!</message>
            <onlyWhenRelease>true</onlyWhenRelease>
              <excludes>
                <!-- <exclude>org.nuxeo.build:nuxeo-distribution-tools</exclude> -->
                <!-- <exclude>org.nuxeo:nuxeo-ftest:*:zip</exclude> -->
                <!-- <exclude>org.nuxeo.connect:nuxeo-connect-client</exclude> -->
              </excludes>
            </requireReleaseDeps>
            <requireMavenVersion>
              <version>[2.2.1,)</version>
            </requireMavenVersion>
            <requireJavaVersion>
              <version>[1.6,)</version>
            </requireJavaVersion>
          </rules>
          <skip>false</skip>
        </configuration>
      </plugin>
    </plugins>
  </pluginManagement>
</build>
<!-- Especially used at Nuxeo for releases and nightly builds to ensure there are no SNAPSHOT dependencies: -->
<profiles>
  <profile>
    <id>release</id>
    <activation>
      <property>
        <name>performRelease</name>
        <value>true</value>
      </property>
    </activation>
    <build>
      <plugins>
        <plugin>
          <groupId>org.apache.maven.plugins</groupId>
          <artifactId>maven-enforcer-plugin</artifactId>
          <executions>
            <execution>
              <id>enforce-plugin-versions</id>
              <goals>
                <goal>enforce</goal>
              </goals>
            </execution>
          </executions>
        </plugin>
      </plugins>
    </build>
  </profile>
</profiles>
```

### [versions-maven-plugin](http://mojo.codehaus.org/versions-maven-plugin/)

Help to set plugins and dependencies versions, check for available upgrades.

```xml
<reporting>
  <plugins>
    <plugin>
      <groupId>org.codehaus.mojo</groupId>
      <artifactId>versions-maven-plugin</artifactId>
      <reportSets>
        <reportSet>
          <reports>
            <report>dependency-updates-report</report>
            <report>plugin-updates-report</report>
            <report>property-updates-report</report>
          </reports>
        </reportSet>
      </reportSets>
    </plugin>
  </plugins>
</reporting>
```

{{#> panel type='code' heading='Sample reported information by versions-maven-plugin'}}

```
$ mvn versions:display-plugin-updates versions:display-dependency-updates versions:display-property-updates

[INFO] The following plugin updates are available:
 [INFO] net.sourceforge.maven-taglib:maven-taglib-plugin ....... 2.3.1 -> 2.4
 [INFO] org.apache.felix:maven-bundle-plugin ................. 2.0.1 -> 2.1.0
 [INFO] maven-clean-plugin ....................................... 2.2 -> 2.4
 [INFO] maven-compiler-plugin .................................. 2.0.2 -> 2.3

[WARNING] The following plugins do not have their version specified:
 [WARNING] maven-deploy-plugin ......................... (from super-pom) 2.5
 [WARNING] maven-install-plugin ........................ (from super-pom) 2.3
 [WARNING] maven-site-plugin ........................... (from super-pom) 2.1

[INFO] The following dependencies in Dependency Management have newer versions:
 [INFO] bouncycastle:bcmail-jdk14 ................................. 136 -> 138
 [INFO] bouncycastle:bcprov-jdk14 ................................. 136 -> 140
 [INFO] com.google.gwt:gwt-dev .................................. 1.5.3 -> 2.7
 [INFO] com.google.gwt:gwt-servlet ....................... 1.5.3 -> 2.0.0-6757
 [INFO] com.google.gwt:gwt-user .......................... 1.5.3 -> 2.0.0-6757
 [INFO] com.h2database:h2 ................................. 1.1.114 -> 1.2.135
 [INFO] com.hp.hpl.jena:arq ..................................... 2.1 -> 2.8.3
 [INFO] com.hp.hpl.jena:iri ....................................... 0.5 -> 0.8
 [INFO] com.hp.hpl.jena:jena .................................. 2.5.4 -> 2.6.2
 [INFO] com.noelios.restlet:com.noelios.restlet ............... 1.0.7 -> 1.1.3
 [INFO] com.noelios.restlet:com.noelios.restlet.ext.servlet ... 1.0.7 -> 1.1.3

[INFO] The following dependencies in Dependencies have newer versions:
 [INFO] junit:junit ............................................. 4.7 -> 4.8.1

[INFO] The following version property updates are available:
 [INFO] ${apachedshared.version} ............................ 0.9.7 -> 0.9.19
 [INFO] ${apacheds.version} .................................. 1.5.1 -> 1.5.5
 [INFO] ${jackrabbit.version} ................................ 1.5.0 -> 1.6.1
```

{{/panel}}

See [http://qa.nuxeo.org/jenkins/job/nuxeo-master-versions/lastSuccessfulBuild/console](http://qa.nuxeo.org/jenkins/job/nuxeo-master-versions/lastSuccessfulBuild/console)

### [tattletale-maven](http://www.jboss.org/tattletale)

Various checks and reports on artifacts.

```xml
<plugin>
  <groupId>org.jboss.tattletale</groupId>
  <artifactId>tattletale-maven</artifactId>
  <executions>
    <execution>
      <phase>verify</phase>
      <goals>
        <goal>report</goal>
      </goals>
    </execution>
  </executions>
  <configuration>
    <destination>${project.build.directory}/tattletale</destination>
    <reports>
      <report>jar</report>
      <report>multiplejars</report>
    </reports>
    <profiles>
      <profile>java6</profile>
    </profiles>
    <failOnWarn>true</failOnWarn>
  </configuration>
</plugin>
```

### [maven-pmd-plugin](http://maven.apache.org/plugins/maven-pmd-plugin/)

PMD code analysis tool (including the separate Copy/Paste Detector tool &minus; or CPD &minus; distributed with PMD).

### [maven-checkstyle-plugin](http://maven.apache.org/plugins/maven-checkstyle-plugin/)

Check coding style.

### [incremental-build-plugin](http://maven-incremental-build.java.net/site/index.html)

Fix a Maven issue allowing not to use clean systematically (the plugin will automatically call the clean goal if the sources have changed).

```xml
<plugin>
  <groupId>net.java.maven-incremental-build</groupId>
  <artifactId>incremental-build-plugin</artifactId>
  <executions>
    <execution>
      <goals>
        <goal>incremental-build</goal>
      </goals>
    </execution>
  </executions>
</plugin>
```

### [buildnumber-maven-plugin](http://mojo.codehaus.org/buildnumber-maven-plugin/)

Generates a unique build number (based on timestamp, SCM revision, ...) which can then be stored, for instance, in the `MANIFEST.MF`.

```xml
<plugin>
  <groupId>org.codehaus.mojo</groupId>
  <artifactId>buildnumber-maven-plugin</artifactId>
  <executions>
    <execution>
      <phase>validate</phase>
      <goals>
        <goal>create</goal>
      </goals>
    </execution>
  </executions>
  <configuration>
    <format>{0,date,yyyyMMdd-HHmmss}</format>
    <items>
      <item>timestamp</item>
    </items>
    <doCheck>false</doCheck>
    <doUpdate>false</doUpdate>
  </configuration>
</plugin>
```

### [license-maven-plugin](http://mojo.codehaus.org/license-maven-plugin/)

This plugin manages the license of a maven project and its dependencies (update file headers, download dependencies licenses, check third-party licenses, ...)

```xml
<reporting>
  <plugins>
    <plugin>
      <groupId>org.codehaus.mojo</groupId>
      <artifactId>license-maven-plugin</artifactId>
      <configuration>
        <excludedScopes>test,provided,system</excludedScopes>
      </configuration>
      <reportSets>
        <reportSet>
          <reports>
            <report>third-party-report</report>
          </reports>
        </reportSet>
      </reportSets>
    </plugin>
  </plugins>
</reporting>
```
