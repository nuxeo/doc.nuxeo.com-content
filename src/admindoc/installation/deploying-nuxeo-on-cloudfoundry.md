---
title: Deploying Nuxeo on CloudFoundry
review:
    comment: ''
    date: ''
    status: ok
labels:
    - cloud-deployment
    - cloudfoundry
    - lts2015-ok
toc: true
confluence:
    ajs-parent-page-id: '27604707'
    ajs-parent-page-title: Installation
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: Deploying+Nuxeo+on+CloudFoundry
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC710/Deploying+Nuxeo+on+CloudFoundry
    page_id: '27604601'
    shortlink: eTalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/eTalAQ'
    source_link: /display/ADMINDOC710/Deploying+Nuxeo+on+CloudFoundry
tree_item_index: 500
version_override:
    'FT': 'nxdoc/deploying-nuxeo-on-cloudfoundry'
    '6.0': 60/admindoc/deploying-nuxeo-on-cloudfoundry
    '5.8': 58/admindoc/deploying-nuxeo-on-cloudfoundry
history:
    -
        author: Manon Lumeau
        date: '2015-12-09 11:10'
        message: dding TO
        version: '15'
    -
        author: Manon Lumeau
        date: '2015-12-09 11:06'
        message: Formatting
        version: '14'
    -
        author: Kevin Leturc
        date: '2015-12-08 12:45'
        message: ''
        version: '13'
    -
        author: Kevin Leturc
        date: '2015-12-08 11:07'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2015-08-31 14:57'
        message: Update table of contents look
        version: '11'
    -
        author: Solen Guitter
        date: '2013-10-14 16:04'
        message: ''
        version: '10'
    -
        author: Prateeksha Barman
        date: '2013-06-13 23:15'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-04-08 13:47'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-04-08 13:45'
        message: Added TOC
        version: '7'
    -
        author: Florent Guillaume
        date: '2013-03-25 15:28'
        message: ''
        version: '6'
    -
        author: Florent Guillaume
        date: '2013-03-25 15:26'
        message: ''
        version: '5'
    -
        author: Florent Guillaume
        date: '2013-03-25 15:25'
        message: ''
        version: '4'
    -
        author: Florent Guillaume
        date: '2013-03-25 15:23'
        message: ''
        version: '3'
    -
        author: Florent Guillaume
        date: '2013-03-25 15:23'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2013-03-25 15:20'
        message: ''
        version: '1'

---
Before you start reading this documentation page you may want to have a look at the&nbsp;[Nuxeo Requirements]({{page page='hardware-and-software-requirements'}})&nbsp;page.

## Building a WAR

The following is a recipe to build a WAR of Nuxeo CoreServer. We need a WAR because normally Nuxeo runs as an exploded hierarchy with a customized loader that knows about the Nuxeo structure. Building a simple WAR turns this into a static configuration that can be used in any servlet container.

### Getting Nuxeo

Download the latest nuxeo-coreserver from [http://qa.nuxeo.org/jenkins/view/Depl/job/IT-nuxeo-master-build/lastSuccessfulBuild/artifact/archives/](http://qa.nuxeo.org/jenkins/view/Depl/job/IT-nuxeo-master-build/lastSuccessfulBuild/artifact/archives/) , for instance in these examples: `nuxeo-coreserver-8.1-I20151208_0124-tomcat.zip`

For this recipe we'll put it into `/opt`.

### Preparing Nuxeo

Nuxeo is currently packaged with a Tomcat 7 instance (version 7.0.64). The following explains how to prepare it.

1.  First unzip Nuxeo in /opt:

    ```bash
    cd /opt
    unzip nuxeo-coreserver-8.1-I20151208_0124-tomcat.zip
    mv coreserver-8.1-SNAPSHOT-tomcat nuxeo-coreserver-8.1-SNAPSHOT-tomcat
    ```

2.  Then edit some permission:

    ```bash
    chmod +x /opt/nuxeo-coreserver-8.1-SNAPSHOT-tomcat/bin/*.sh
    ```

3.  In `/opt/nuxeo-coreserver-8.1-SNAPSHOT-tomcat/bin/nuxeo.conf` , remove or comment `nuxeo.wizard.done=false`

### Building the Tomcat+WAR

This builds a ZIP containing a WAR and a few additional files, designed to be unpacked at the root of a Tomcat instance. It cannot be used directly as a pure WAR.

```bash
cd /opt/nuxeo-coreserver-8.1-SNAPSHOT-tomcat
bin/nuxeoctl pack /opt/nuxeotomcatwar.zip 
```

The resulting ZIP is all that's needed for the rest of the instructions.

## <a name="__RefHeading__3874_1562447000">Preparing a full Tomcat 7 with Nuxeo WAR</a>

<a name="__RefHeading__3874_1562447000">

1.  Download and set up a new Tomcat 7 from scratch with the WAR that was just built.

    ```bash
    cd /opt
    unzip apache-tomcat-7.0.65.zip
    mv apache-tomcat-7.0.65 tomcat-7.0.65
    cd tomcat-7.0.65
    chmod +x bin/*.sh
    unzip /opt/nuxeotomcatwar.zip
    ```

2.  Now update the WAR to work in a Tomcat 7 instance without references to the toplevel `>lib/` directory:

    ```bash
    mv lib/commons-*.jar lib/h2-*.jar lib/lucene-*.jar lib/nuxeo-*.jar webapps/nuxeo/WEB-INF/lib/
    rm lib/derby-*.jar
    ```

3.  Finally we must set up the Nuxeo datasources inside the WAR (instead of from the toplevel `server.xml` in a standard Nuxeo setup, which is more convenient when possible).

    Edit the file&nbsp;`webapps/nuxeo/META-INF/context.xml`. In this file the `<Resource>` elements that point to a global configuration in `server.xml` must be replaced by explicit resources:

    ```html/xml
      <Resource name="jdbc/NuxeoDS" accessToUnderlyingConnectionAllowed="true" auth="Container" driverClassName="org.h2.Driver" maxActive="100" maxIdle="30" maxWait="10000" password="" type="javax.sql.DataSource" url="jdbc:h2:nuxeo" username="sa" validationQuery=""/>
      <Resource name="jdbc/nxsqldirectory" accessToUnderlyingConnectionAllowed="true" auth="Container" driverClassName="org.h2.Driver" maxActive="100" maxIdle="30" maxWait="10000" password="" type="javax.sql.DataSource" url="jdbc:h2:nuxeo" username="sa" validationQuery=""/>
      <Resource name="jdbc/nxrelations-default-jena" accessToUnderlyingConnectionAllowed="true" auth="Container" driverClassName="org.h2.Driver" maxActive="100" maxIdle="30" maxWait="10000" password="" type="javax.sql.DataSource" url="jdbc:h2:nuxeo" username="sa" validationQuery=""/>
      <Resource name="jdbc/comment-relations" accessToUnderlyingConnectionAllowed="true" auth="Container" driverClassName="org.h2.Driver" maxActive="100" maxIdle="30" maxWait="10000" password="" type="javax.sql.DataSource" url="jdbc:h2:nuxeo" username="sa" validationQuery=""/>
      <Resource name="jdbc/nxaudit-logs" accessToUnderlyingConnectionAllowed="true" auth="Container" driverClassName="org.h2.Driver" maxActive="100" maxIdle="30" maxWait="10000" password="" type="javax.sql.DataSource" url="jdbc:h2:nuxeo" username="sa" validationQuery=""/>
      <Resource name="jdbc/nxjbpm" accessToUnderlyingConnectionAllowed="true" auth="Container" driverClassName="org.h2.Driver" maxActive="100" maxIdle="30" maxWait="10000" password="" type="javax.sql.DataSource" url="jdbc:h2:nuxeo" username="sa" validationQuery=""/>
      <Resource name="jdbc/placeful_service_ds" accessToUnderlyingConnectionAllowed="true" auth="Container" driverClassName="org.h2.Driver" maxActive="100" maxIdle="30" maxWait="10000" password="" type="javax.sql.DataSource" url="jdbc:h2:nuxeo" username="sa" validationQuery=""/>
      <Resource name="jdbc/nxwebwidgets" accessToUnderlyingConnectionAllowed="true" auth="Container" driverClassName="org.h2.Driver" maxActive="100" maxIdle="30" maxWait="10000" password="" type="javax.sql.DataSource" url="jdbc:h2:nuxeo" username="sa" validationQuery=""/>
      <Resource name="jdbc/nxuidsequencer" accessToUnderlyingConnectionAllowed="true" auth="Container" driverClassName="org.h2.Driver" maxActive="100" maxIdle="30" maxWait="10000" password="" type="javax.sql.DataSource" url="jdbc:h2:nuxeo" username="sa" validationQuery=""/>
    ```

    In the above we use an embedded H2 database. Configuration for an external database server would need to use a different JDBC URL.

4.  The above exploded WAR can now be packed into a zipped WAR:

    ```
    cd /opt/tomcat-7.0.65/webapps/nuxeo
    zip -r /opt/nuxeo.war .
    ```

    The resulting `/opt/nuxeo.war` is now compatible with any modern application server.

</a>

## <a name="__RefHeading__3874_1562447000"></a><a name="__RefHeading__3876_1562447000">Deploying to CloudFoundry</a>

<a name="__RefHeading__3876_1562447000">

### Patching the WAR

If you try to deploy the above WAR on CloudFoundry you'll get an error:&nbsp;`Too many open files`

This is due to the fact that CloudFoundry has a limit of 256 file descriptors open, and Nuxeo uses more.

In fact, it's the Tomcat classloader that uses a lot of file descriptors, because for performance reasons it keeps one open file descriptor per JAR in the `WEB-INF/lib` directory. To work around this problem, the non-Nuxeo JARs present in `WEB-INF/lib` can be merged into one big JAR, which solves the problem.

```bash
cd webapps/nuxeo/WEB-INF/lib
mkdir tmp
mkdir bigjar
mv *.jar tmp/
mv tmp/nuxeo-*.jar .
cd bigjar
for i in ../tmp/*.jar; do unzip $i; done
rm META-INF/*.SF META-INF/*.DSA
zip -r ../bigjar.jar .
cd ..
rm -rf tmp/ bigjar/
```

### Deploying Tomcat 7 + Nuxeo

Before the above Tomcat 7 instance can be set up as a full &ldquo;standalone&rdquo; application in CloudFoundry, it needs to be modified to take configuration information (like TCP ports) from the CloudFoundry PaaS framework. (These are standard instructions for using a stock Tomcat in CloudFoundry, you'll find them elsewhere.)

1.  The following is added to `bin/catalina.sh` :

    ```bash
    # USE VCAP PORT IF IT EXISTS, OTHERWISE DEFAULT TO 8080
    if [ -z ${VCAP_APP_PORT} ]; then
      export VCAP_APP_PORT=8080
    fi
    export JAVA_OPTS="-Dport.http.nonssl=$VCAP_APP_PORT $JAVA_OPTS"
    ```

2.  The `bin/startup.sh` is changed to not run in the background ( `run` instead of `start`):

    ```
    exec "$PRGDIR"/"$EXECUTABLE" run "$@"
    ```

3.  Finally the non-useful ports in `conf/server.xml` are commented out:
    *   Replace 8005 with -1 to deactivate the Tomcat SHUTDOWN port.
    *   Comment out the AJP connector on port 8009.
    *   Replace 8080 with the expression `${port.http.nonssl}` to use the PaaS configuration.
4.  The Tomcat 7 application including the Nuxeo WAR is now ready to be pushed to CloudFoundry as a &ldquo;Standalone Application&rdquo;. For this, standard CloudFoundry mechanisms are used, don't forget to specify the Java 8 runtime:

    ```bash
    vmc push --runtime=java8 myapp
    ```

    The following CloudFoundry YML manifest corresponds to a full setup (`myapp` should be replaced by your namespace):

    ```
    ---
    applications:
      .:
        mem: 1G
        instances: 1
        url: myapp.cloudfoundry.com
        framework:
          info:
            mem: 64M
            exec:
            description: Standalone Application
          name: standalone
        command: bin/startup.sh
        name: myapp
        runtime: java8
    ```

## Testing Nuxeo CMIS

</a>

<a name="__RefHeading__3876_1562447000">Once deployed and started, Nuxeo CoreServer does not provide a web-accessible graphical user interface (because the CoreServer version doesn't have those), but it can be addressed through a CMIS client like the Apache CMIS Workbench available at</a> [http://chemistry.apache.org/java/developing/tools/dev-tools-workbench.html](http://chemistry.apache.org/java/developing/tools/dev-tools-workbench.html).

It must point to Nuxeo, whose CMIS address is described by the Nuxeo startup page, usually it is of the form [http://localhost:8080/nuxeo/atom/cmis](http://localhost:8080/nuxeo/atom/cmis). The default Nuxeo user/password is Administrator/Administrator.
