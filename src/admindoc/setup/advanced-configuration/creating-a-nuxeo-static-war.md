---
title: Creating a Nuxeo Static WAR
review:
    comment: ''
    date: ''
    status: ok
labels:
    - static-war
    - war
confluence:
    ajs-parent-page-id: '16809993'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Creating+a+Nuxeo+Static+WAR
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Creating+a+Nuxeo+Static+WAR'
    page_id: '16810076'
    shortlink: XIAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/XIAAAQ'
    source_link: /display/ADMINDOC58/Creating+a+Nuxeo+Static+WAR
history:
    - 
        author: Solen Guitter
        date: '2013-12-10 11:53'
        message: yp
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-12-04 14:03'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-10-14 17:15'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-08-06 11:25'
        message: ''
        version: '15'
    - 
        author: Florent Guillaume
        date: '2013-05-15 15:24'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-01-16 10:54'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-01-16 10:54'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-01-16 10:53'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-01-16 10:24'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-01-16 10:24'
        message: Reported changes done on 5.6 documentation
        version: '9'
    - 
        author: Thierry Delprat
        date: '2012-01-06 18:45'
        message: Migrated to Confluence 4.0
        version: '8'
    - 
        author: Thierry Delprat
        date: '2012-01-06 18:45'
        message: ''
        version: '7'
    - 
        author: Thierry Delprat
        date: '2012-01-06 18:34'
        message: ''
        version: '6'
    - 
        author: Olivier Grisel
        date: '2012-01-06 17:50'
        message: ''
        version: '5'
    - 
        author: Olivier Grisel
        date: '2012-01-06 17:50'
        message: ''
        version: '4'
    - 
        author: Benjamin Jalon
        date: '2012-01-06 12:35'
        message: ''
        version: '3'
    - 
        author: Benjamin Jalon
        date: '2012-01-06 12:33'
        message: ''
        version: '2'
    - 
        author: Benjamin Jalon
        date: '2012-01-06 12:33'
        message: ''
        version: '1'

---
Creating a static WAR of Nuxeo allows you to deploy Nuxeo in a setting where your Tomcat application server only allows WAR installation. Keep in mind that when you do this, the following dynamic features will **not** work (we are inside a **static** war):

*   Nuxeo Studio hot reload
*   Nuxeo IDE hot reload
*   Nuxeo Marketplace integration (Hotfixes and packages installation)

## Creating a Nuxeo Static WAR Distribution

Here is the way to create your own static WAR distribution:

1.  Download a Nuxeo Tomcat distribution.
2.  Unzip it in somewhere (let's call it `$NUXEO_HOME`).
3.  Copy your specific bundles into `$NUXEO_HOME/nxserver/bundles/`.
4.  Create your [own templates](http://doc.nuxeo.com/x/LANc) and configuration files as needed.
5.  Start your Nuxeo Tomcat instance as usual .
6.  Check that your Nuxeo is well configured (database configuration, ldap configuration, etc...).
7.  Stop your Nuxeo instance.
8.  Launch this following command:

```
$NUXEO_HOME/bin/nuxeoctl pack /tmp/nuxeo-war.zip

```

Your static WAR distribution will be generated into `/tmp/nuxeo-war.zip.`

The generated ZIP contains what needs to be copied to your Tomcat installation:

```
nuxeo-war.zip/
|-- endorsed (jaxb and jaxws api libs that should replace packages provided by default JDK that are outdated)
|-- lib (nuxeo common libs)
|-- README-NUXEO.txt
`-- webapps
    `-- nuxeo (exploded WAR that you can zip if needed)

```

## Installing Nuxeo in the Target Tomcat

The `README-NUXEO.txt` gives you the needed instructions. Here is an example of this file (the JDBC driver configuration, username and password will vary depending on the Nuxeo configuration choices you made before running `nuxeoctl pack`):

```none
This ZIP must be uncompressed at the root of your Tomcat instance.

In order for Nuxeo to run, the following Resource defining your JDBC datasource configuration
must be added inside the <GlobalNamingResources> section of the file conf/server.xml

  <Resource auth="Container" driverClassName="org.h2.Driver" maxActive="100" maxIdle="30" maxWait="10000" name="jdbc/nuxeo" password="" type="javax.sql.DataSource" url="jdbc:h2:nuxeo" username="sa" validationQuery=""/>

Make sure that the 'url' attribute above is correct.
Note that the following file also contains database configuration:

  webapps/nuxeo/WEB-INF/default-repository-config.xml

Also note that you should start Tomcat with more memory than its default, for instance:

  JAVA_OPTS="-Xms512m -Xmx1024m -XX:MaxPermSize=512m -Dnuxeo.log.dir=logs" bin/catalina.sh start
```

So basically what you need to do is:

1.  Copy the structure (endorsed, lib, webapp) inside your target Tomcat.
2.  Copy the `<Resource>` tag as described in the&nbsp;`README-NUXEO.txt` into your `server.xml` in order to declare the JDBC datasources.

The target database will be the one you defined in your source Nuxeo instance, and the default for the Nuxeo directories are:

*   `nuxeo.config.dir` : `WEB-INF` directory,
*   `nuxeo.runtime.home` : `$TOMCAT_HOME/nuxeo,`
*   `nuxeo.data.dir` : `$TOMCAT_HOME/nuxeo/data,`
*   `nuxeo.tmp.dir` : `$TOMCAT_HOME/nuxeo/tmp,`
*   `nuxeo.web.dir` : `$TOMCAT_HOME/nuxeo/web` (for WebEngine modules).

See [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}}) for more details about these config parameters of Nuxeo.

If you need to change the values for these paths, you can add parameters in the file&nbsp;`webapps/nuxeo/WEB-INF/web.xml`.&nbsp;See [JavaDoc of NuxeoStarter](http://community.nuxeo.com/api/nuxeo/release-5.6/javadoc/org/nuxeo/runtime/deployment/NuxeoStarter.html) for more details.