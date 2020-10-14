---
title: Embedding Nuxeo
review:
    comment: 'This page needs to be reviewed. Check back soon for updated content!'
    date: '2016-10-11'
    status: not-ok
labels:
    - lts2015-not-ok
toc: true
confluence:
    ajs-parent-page-id: '9275231'
    ajs-parent-page-title: Working on Nuxeo sources
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Embedding+Nuxeo
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Embedding+Nuxeo'
    page_id: '3343428'
    shortlink: RAQz
    shortlink_source: 'https://doc.nuxeo.com/x/RAQz'
    source_link: /display/CORG/Embedding+Nuxeo
tree_item_index: 400
history:
    -
        author: Manon Lumeau
        date: '2015-09-29 14:01'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-12-04 15:36'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2011-03-04 18:38'
        message: Migrated to Confluence 4.0
        version: '10'
    -
        author: Solen Guitter
        date: '2011-03-04 18:38'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-03-04 18:02'
        message: Reverted from v. 6
        version: '8'
    -
        author: Solen Guitter
        date: '2011-03-04 16:49'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-03-04 16:28'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-12-21 19:57'
        message: ''
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-12-21 19:56'
        message: ''
        version: '4'
    -
        author: Stéfane Fermigier
        date: '2010-12-21 19:55'
        message: ''
        version: '3'
    -
        author: Stéfane Fermigier
        date: '2010-12-21 19:51'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-07-21 15:31'
        message: ''
        version: '1'
---

This document explains how a Nuxeo server can be embedded in another application. The method described here is good for development, testing or playing with Nuxeo and it is not recommended for production use. For production you can use one of the packages proposed by Nuxeo.

In theory, to embed a Nuxeo server, you need to know the list of bundles and third party libraries you want to deploy, and to have a Nuxeo home directory configured as required by the type of the installation you want. Then you configure the framework bootstrap (`org.nuxeo.osgi.application.FrameworkBootstrap`) and launch Nuxeo. In practice this is not an easy task.

The mechanism presented here will show you how to do all this stuff transparently by using the nuxeo-distribution-tools application.

## Quick start

Before digging into details, you can try an embedded Nuxeo by following these instructions:

1.  Download [Nuxeo Distribution Tools](http://maven.nuxeo.org/nexus/content/groups/public/org/nuxeo/build/nuxeo-distribution-tools/1.4/nuxeo-distribution-tools-1.4-all.jar).
2.  Go into the folder where you copied the Nuxeo Distribution Tools JAR and run the following command from a terminal (here we downloaded nuxeo-distribution-tools-1.4-all.jar):

    ```
    java -cp nuxeo-distribution-tools-1.4-all.jar org.nuxeo.dev.Main ./nxserver

    ```

    This will create a "nxserver" sub-directory in the current directory and will start the Nuxeo server using it as the Nuxeo home directory.

3.  To access the web interface, go to [http://localhost:8080](http://localhost:8080/) (or the custom address you specified in command line).

{{#> callout type='note' }}

The first start may take a while until all needed artifacts are downloaded. If you already developed with Nuxeo and have the needed artifacts in your local Maven repository, the first start should be faster.

{{/callout}}

Nuxeo Distribution Tools is embedding a Maven 2.2.1 to do the resolution of the artifacts you want to put in your embedded Nuxeo. To help defining the set of artifacts, a built-in set of predefined profiles is provided by Nuxeo Distribution Tools JAR (for instance Nuxeo Core Server 5.4.0 and Nuxeo Core Server 5.4.1-SNAPSHOT). You can create your own profiles by adding the artifacts you want. A [profile definition file example](#profile-configuration-file-example) is detailed at the end of this document. A Nuxeo Core Server contains all the Nuxeo Services and a basic HTTP UI (through WebEngine) plus JAX-RS support to build REST services. The default built-in profile is "core-5.4.1-SNAPSHOT".

Here is a list of all the arguments you can pass on command line to the `org.nuxeo.dev.Main` in `nuxeo-distribution-tools`:

```
Syntax: java ... org.nuxeo.dev.Main [options] home

```

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Option

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

home

</td><td colspan="1">

The home directory to be used by nuxeo server. This argument is required. The directory will be created if not exists.

</td></tr><tr><td colspan="1">

-o

</td><td colspan="1">

Put embedded maven in offline mode

</td></tr><tr><td colspan="1">

-u

</td><td colspan="1">

The maven update policy for SNAPSHOT repositories (the default is "daily", you may change to "never" or "always".

</td></tr><tr><td colspan="1">

-p

</td><td colspan="1">

The built-in profile to use. (the default is "core-5.4.1-SNAPSHOT", you may want to change to "core-5.4.0").

</td></tr><tr><td colspan="1">

-h

</td><td colspan="1">

The HTTP server address to use (the default is localhost:8080)

</td></tr><tr><td colspan="1">

-c

</td><td colspan="1">

a profile configuration file to use instead of a built-in profile

</td></tr><tr><td colspan="1">

--nocache

</td><td colspan="1">

Do not cache assembly (assembly will be done each time and start-up will be slower)

</td></tr><tr><td colspan="1">

-bundles "b1:b2:..."

</td><td colspan="1">

A semicolon separated list of extra bundle file paths to be added to the target server.
These bundles can be directories (for example the output directory of your project in Eclipse).
If the same bundle already exists in the server it will be replaced with the one specified on command line.
This very useful to start a server in debug mode (from Eclipse or other IDE ..).

</td></tr><tr><td colspan="1">

-libs "jar1:jar2:.."

</td><td colspan="1">

A semicolon separated list of extra libraries to be added to the classpath.

</td></tr><tr><td colspan="1">

-shared

</td><td colspan="1">

If used the "shared" mode will be used when creating the application classloader.
By default the application is launched in an isolated classloader to avoid problems between libraries in bootstrap classloader and those existing in Nuxeo.
But in some situations you may want to use the same classloader (the bootstrap one) and to add to it the Nuxeo JARs. This is used for example by the integration of Nuxeo in GWT IDE.

</td></tr></tbody></table></div>

### Using the Nuxeo Embedded Eclipse Plug-in

You can also use an Eclipse plug-in which is embedding Nuxeo into an Eclipse run configuration. This way you can launch in run or debug mode the bundle(s) you develop into a Nuxeo Core Server.

{{#> callout type='note' }}

The plug-in is still in development and additional features will be added in future.

{{/callout}}

Here is the Eclipse update site of the Nuxeo plug-in: [http://public.dev.nuxeo.com/~bstefanescu/org.nuxeo.dev.ide.site](http://public.dev.nuxeo.com/~bstefanescu/org.nuxeo.dev.ide.site)

To launch your bundle in Nuxeo:

1.  Add the "Nuxeo" nature on your project: right-click the project entry in the Package Explorer view and click on "Add Nuxeo Nature".
2.  Launch your project inside an embedded Nuxeo server using Run As > Nuxeo Application.
    This will launch Nuxeo using the default profile (which currently is using the 5.4.1-SNAPSHOT version of Nuxeo Core Server).

    {{#> callout type='tip' }}

    To configure the way Nuxeo is launched open the "Run Configuration" dialog and click on an existing Nuxeo run configuration (or create a new one). There you will have all the options we discussed in the section above.

    {{/callout}}

### How it works

Here are the steps performed by the application to assemble and start Nuxeo:

1.  It checks if this is the first time you started this profile.
    If yes it goes to step a to assemble the Nuxeo Server as defined by the profile. Otherwise it loads the artifacts from cache (see step g) and goes to step 2.
    1.  The assembly (or build) process is creating a list of all Nuxeo bundles and third party Jars is created by reading the profile definition file is read.
    2.  Then the embedded Maven is initialized using the user Maven settings (if any) and the Nuxeo Maven repositories.
    3.  The artifact graph is initialized using the POM artifacts specified in the profile configuration.
    4.  The "template" artifact is resolved and unzipped to create the Nuxeo Server home directory.
    5.  The classpath is scanned for any additional Nuxeo bundle.
    6.  All profile artifacts are resolved using the Maven graph built at the previous step. If a Nuxeo bundle is already present in the classpath (this was determined in previous step) then it will be ignored.
    7.  The list of computed artifact files is stored into a cache file in {`nxserver_home}/tmp/build.cache`.
2.  The framework is configured with the computed artifacts.
3.  The framework is started using the `org.nuxeo.osgi.application.FrameworkBootstrap` class.

{{#> callout type='note' }}

1.  You don't need to have Maven installed on your computer.
2.  The bundles found in the classpath will replace the ones in the profile definition if they point to the same artifact. This is an important aspect since it enable you to override artifacts with your own versions.
3.  If you want to enable logging you need to put `slf4j-log4j12-1.5.6.jar` in the classpath of the application.

{{/callout}}

### Embed Nuxeo Server in your own application

To embed Nuxeo you have to put `nuxeo-distribution-tools` in your project dependencies. Here is the pom dependency you need:

```
<dependency>
    <groupId>org.nuxeo.build</groupId>
    <artifactId>nuxeo-distribution-tools</artifactId>
    <version>1.4</version>
    <classifier>all</classifier>
</dependency>

```

Now you can call the `NuxeoApp` class from `nuxeo-distribution-tools` to assemble and start Nuxeo. Example:

```
public class Main {

    public static void main(String[] args) throws Exception {
        // get the nuxeo home
        File home = new File("/tmp/nxserver");
        // set the HTTP server address used by Nuxeo (the default is localhost:8080)
        NuxeoApp.setHttpServerAddress("localhost", 8081);
        // create a nuxeo application instance given its home directory
        NuxeoApp nuxeo = new NuxeoApp(home);
        // assemble nuxeo if needed. otherwise use cached assembly (useCache is true)
        nuxeo.build(NuxeoApp.CORE_SERVER_531, true);
        // start assembled nuxeo
        nuxeo.start();
        // do something (Nuxeo is running and Nuxeo services are available in the classpath)
        System.out.println("Hello!");
        // stop nuxeo
        nuxeo.shutdown();
    }

}

```

Only 2 profiles are provided by the tool: NuxeoApp.CORE_541 and NuxeoApp.CORE_540\. If you want to use your own profile then create a profile configuration file and call the `build()` method using an URL that points to your profile:

```
URL profile = getProfileUrl();
nuxeo.build(profile, true);

```

See the Profile Configuration File section for more details on writing such profiles.

The second argument of the `build()` method is telling whether to cache the assembly or not.

You can control how the assembly is done using the following methods of `NuxeoApp`:

1.  `setUpdatePolicy(String)`. The update policy used by Maven snapshot repository. The default is "daily". Can be "never" or "always".
2.  `setOffline(boolean)`. Put Maven offline to work only with local repository and avoid connecting to remote repositories.
3.  `setVerbose(boolean)`. For more info logged on the console.

You can customize the way Nuxeo is built and started by overriding the `NuxeoApp` class. Here is a list of methods you may want to override:

#### `createEmbeddedMaven()`

Create Maven instance. Override this to control Maven instance creation. See `EmbeddedMavenClient` class.

#### `intializeMaven()`

Maven is created and should be initialized. Here you can add your own remote repositories or other Maven configuration stuff.

#### `initializeGraph()`

Maven was started and graph can be configured. Here you can programtically add your own artifacts or make operations on the graph.

#### `buildDone()`

To be notified after the assembly was done. This is not triggered when assembly is restored from cache.

#### `aboutToStartFramework()`

To be notified before the framework starts (and after the assembly was done)

#### `frameworkStarted()`

To be notified after the framework has started.

When overriding these methods make sure to call the super implementation if you need default settings.

### Run the Embedded Nuxeo Server from Eclipse

You can put the code above in an eclipse project and run it as "Java Application" All the dependencies of your project will be visible to Nuxeo and any Nuxeo plugin in your project dependencies (and of course the project itself if it is a Nuxeo plugin) will be deployed on the embedded server.

This method can be used to quickly test your code on a running Nuxeo Server.

You can also create JUnit tests that launch the embedded Nuxeo, performs all your tests and then shutdown Nuxeo. When creating such tests it is recommended to remove the Nuxeo working directory before each startup.

### Profile Configuration File {{> anchor 'profile-configuration-file-example'}}

Here is an example of a profile configuration file. Some repetitive content was replaced with **...** to save space.

```
# Artifact format is:
# [!]groupId:artifactId[:version]
# ! means to add it as a root and requires version (not present in the graph)

[properties]
platform.version=5.4.1-SNAPSHOT
core.version=1.6.1-SNAPSHOT

[template]
artifact=org.nuxeo.build:nuxeo-distribution-tools:1.4
path=org/nuxeo/dev/core/

[poms]
org.nuxeo:nuxeo-ecm:${platform.version}:pom
org.nuxeo.common:nuxeo-common:${core.version}:pom
org.nuxeo.runtime:nuxeo-runtime-parent:${core.version}:pom
org.nuxeo.ecm.core:nuxeo-core-parent:${core.version}:pom
org.nuxeo.ecm.platform:nuxeo-services-parent:${platform.version}:pom
org.nuxeo.ecm.platform:nuxeo-features-parent:${platform.version}:pom
org.nuxeo.ecm.webengine:nuxeo-webengine-parent:${platform.version}:pom

[bundles]
org.nuxeo.common:nuxeo-common
org.nuxeo.runtime:nuxeo-runtime-osgi
org.nuxeo.runtime:nuxeo-runtime
org.nuxeo.ecm.core:nuxeo-core-api
org.nuxeo.ecm.core:nuxeo-core-client
...

[libs]
org.nuxeo.ecm.core:nuxeo-core-storage-sql-extensions
javax.script:script-api
org.codehaus.groovy:groovy-all
jline:jline
dom4j:dom4j
org.osgi:osgi-core
commons-logging:commons-logging
commons-io:commons-io
...

```

{{#> callout type='note' }}

Blank lines are allowed and will be ignored. Comments can be specified using a # character at the beginning of the line.

{{/callout}}

There are 4 sections in that file:

#### properties

In this section you can set properties that can be used in the other sections. A property can be used by writing `${property_key`} in the place where you want to expand it with the property value. See pom entries in the example above for property usage.

#### template

This section is **mandatory** and should contain one **artifact** and a **path**. The artifact should be specified using the version and should contain the template (configuration files) for the target server. These files must be placed inside the artifact archive under the given**path**. See `nuxeo-distribution-tools-1.4.jar` for an example. The content under the given path in the template artifact will be expanded into the server home at assembly time.

#### poms

This section contain a list of POM artifacts (separated by new lines). Each pom must contain a groupId an artifactid and the version.

{{#> callout type='note' }}

The order of artifacts listed in this section is significant. The poms will be loaded in the given order.

{{/callout}}

#### bundles

This section contains a list of artifacts separated by new lines. Each artifact can be specified using a key of the form: groupId:artifactId. The version is not required since the artifact will be resolved using the dependency management in the POM listed in&nbsp;**poms**&nbsp;section, If you want to add an artifact that is not in any pom you must specify its version and prepend the key using a ! character.

Example:

```
!org.mygroup:my-artifact:1.0

```

If you want need to specify a different type you must put the version too. This will be fixed in future:

```
org.mygroup:my-artifact:1.0:zip

```

To specify a classifier use the ';' separator and append it at the end:

```
org.mygroup:my-artifact;all

```

The artifacts listed here will be treated as Nuxeo modules and deployed as bundles by the OSGi framework.

{{#> callout type='note' }}

The order of artifacts listed in this section is significant. The bundles will be deployed at runtime in the same order they are listed here.

{{/callout}}

#### jars

This is identical to **bundles** section. All artifacts listed here are treated as regular JAR and will be put in the class path. They are not treated as Nuxeo bundles.
