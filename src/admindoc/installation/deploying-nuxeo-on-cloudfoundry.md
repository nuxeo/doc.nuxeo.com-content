---
title: Deploying Nuxeo on CloudFoundry
review:
    comment: ''
    date: ''
    status: ok
labels:
    - cloud-deployment
    - cloudfoundry
toc: true
confluence:
    ajs-parent-page-id: '21921867'
    ajs-parent-page-title: Installation
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Deploying+Nuxeo+on+CloudFoundry
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/Deploying+Nuxeo+on+CloudFoundry'
    page_id: '21921835'
    shortlink: K4BOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/K4BOAQ'
    source_link: /display/ADMINDOC60/Deploying+Nuxeo+on+CloudFoundry
tree_item_index: 500
version_override:
    'FT': 'nxdoc/deploying-nuxeo-on-cloudfoundry'
    'LTS 2015': 710/admindoc/deploying-nuxeo-on-cloudfoundry
    '5.8': 58/admindoc/deploying-nuxeo-on-cloudfoundry
history:
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
### Enabling Tomcat 7

Nuxeo is currently packaged with a Tomcat 6 instance. The following allows it to work in a Tomcat 7 instance.

1.  First get a Tomcat 7 instance and unzip it into /opt/tomcat-7.0.30

    ```bash
    cd /opt
    unzip apache-tomcat-7.0.30.zip
    mv apache-tomcat-7.0.30 tomcat-7.0.30
    ```

2.  Then convert Nuxeo to work in that Tomcat 7 instance:

    ```bash
    cd /opt
    unzip nuxeo-coreserver-5.7-I20121123_0116-tomcat.zip
    T6=nuxeo-coreserver-5.7-I20121123_0116-tomcat
    T7=tomcat-7.0.30
    rm -rf $T7/nxserver
    rm -rf $T7/templates
    rm -rf $T7/endorsed
    cp -R $T6/nxserver $T7/
    cp -R $T6/templates $T7/
    cp -R $T6/endorsed $T7/
    cp $T6/bin/nuxeoctl $T7/bin/
    cp $T6/bin/nuxeo.conf $T7/bin/
    cp $T6/bin/nuxeo-launcher.jar $T7/bin/
    cp $T6/lib/log4j.xml $T7/lib/
    cp $T6/lib/nuxeo-*.jar $T7/lib/
    cp $T6/lib/commons-logging-*.jar $T7/lib/
    cp $T6/lib/commons-lang-*.jar $T7/lib/
    cp $T6/lib/freemarker-*.jar $T7/lib/
    cp $T6/lib/log4j-*.jar $T7/lib/
    cp $T6/lib/lucene-*.jar $T7/lib/
    cp $T6/lib/mail-*.jar $T7/lib/
    cp $T6/templates/tomcat7/conf/server.xml.nxftl $T7/templates/common-base/conf/server.xml.nxftl
    chmod +x $T7/bin/*.sh
    ```

3.  In `bin/nuxeo.conf` , remove or comment `nuxeo.wizard.done=false.`

### Building the Tomcat+WAR

This builds a ZIP containing a WAR and a few additional files, designed to be unpacked at the root of a Tomcat instance. It cannot be used directly as a pure WAR.

```bash
cd /opt/tomcat-7.0.30
bin/nuxeoctl pack /opt/nuxeotomcatwar.zip 
```

The resulting ZIP is all that's needed for the rest of the instructions.

## Preparing a full Tomcat 7 with Nuxeo WAR

1.  Set up a new Tomcat 7 from scratch with the WAR that was just built.

    ```bash
    cd /opt
    rm -rf tomcat-7.0.30
    unzip apache-tomcat-7.0.30.zip
    mv apache-tomcat-7.0.30 tomcat-7.0.30
    cd tomcat-7.0.30
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
    cd /opt/tomcat-7.0.30/webapps/nuxeo
    zip -r /opt/nuxeo.war .
    ```

    The resulting `/opt/nuxeo.war` is now compatible with any modern application server.

</a>

## Deploying to CloudFoundry

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

2.  The `bin/startup.sh` is changed to not run in the background ( `run` instead of `start` ):

    ```
    exec "$PRGDIR"/"$EXECUTABLE" run "$@"
    ```

3.  Finally the non-useful ports in `conf/server.xml` are commented out:
    *   Replace 8005 with -1 to deactivate the Tomcat SHUTDOWN port,

    *   Comment out the AJP connector on port 8009,

    *   Replace 8080 with the expression `${port.http.nonssl}` to use the PaaS configuration.

4.  The Tomcat 7 application including the Nuxeo WAR is now ready to be pushed to CloudFoundry as a &ldquo;Standalone Application&rdquo;. For this, standard CloudFoundry mechanisms are used, don't forget to specify the Java 7 runtime:

    ```bash
    vmc push --runtime=java7 myapp
    ```

    The following CloudFoundry YML manifest corresponds to a full setup ( `myapp` should be replaced by your namespace):

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
        runtime: java7
    ```

## Testing Nuxeo CMIS

Once deployed and started, Nuxeo CoreServer does not provide a web-accessible graphical user interface (because the CoreServer version doesn't have those), but it can be addressed through a CMIS client like the Apache CMIS Workbench available at</a> [http://chemistry.apache.org/java/developing/tools/dev-tools-workbench.html](http://chemistry.apache.org/java/developing/tools/dev-tools-workbench.html) .

It must point to Nuxeo, whose CMIS address is described by the Nuxeo startup page, usually it is of the form [http://localhost:8080/nuxeo/atom/cmis](http://localhost:8080/nuxeo/atom/cmis) . The default Nuxeo user/password is Administrator/Administrator.
