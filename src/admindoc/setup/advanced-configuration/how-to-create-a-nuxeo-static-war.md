---
title: How to Create a Nuxeo Static WAR
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: >-
            BLOCK

            This page provides instructions to generate a static WAR
            distribution and deploy it in a Tomcat or WildFly distribution.
        level: Advanced
        tool: Terminal
        topics: 'Distribution, Static WAR'
labels:
    - static-war
    - war
    - howto
    - content-review-lts2015
    - last-review-20141128
confluence:
    ajs-parent-page-id: '27604662'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: How+to+Create+a+Nuxeo+Static+WAR
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC710/How+to+Create+a+Nuxeo+Static+WAR
    page_id: '27604616'
    shortlink: iDalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/iDalAQ'
    source_link: /display/ADMINDOC710/How+to+Create+a+Nuxeo+Static+WAR
history:
    - 
        author: Solen Guitter
        date: '2015-11-26 14:43'
        message: 'XDOC-658: Marketplace packages are now called Nuxeo Package'
        version: '33'
    - 
        author: Julien Carsique
        date: '2015-10-07 16:24'
        message: ''
        version: '32'
    - 
        author: Julien Carsique
        date: '2015-10-07 16:24'
        message: ''
        version: '31'
    - 
        author: Julien Carsique
        date: '2015-08-27 15:24'
        message: context-param
        version: '30'
    - 
        author: Solen Guitter
        date: '2014-12-01 22:29'
        message: ''
        version: '29'
    - 
        author: Julien Carsique
        date: '2014-11-28 14:22'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2014-11-28 13:48'
        message: ''
        version: '27'
    - 
        author: Solen Guitter
        date: '2014-11-28 13:44'
        message: Typos
        version: '26'
    - 
        author: Julien Carsique
        date: '2014-11-20 10:45'
        message: ''
        version: '25'
    - 
        author: Julien Carsique
        date: '2014-11-20 10:44'
        message: ''
        version: '24'
    - 
        author: Stéphane Lacoin
        date: '2014-11-10 17:56'
        message: ''
        version: '23'
    - 
        author: Stéphane Lacoin
        date: '2014-11-10 17:55'
        message: ''
        version: '22'
    - 
        author: Stéphane Lacoin
        date: '2014-11-10 17:38'
        message: ''
        version: '21'
    - 
        author: Stéphane Lacoin
        date: '2014-11-10 17:35'
        message: ''
        version: '20'
    - 
        author: Stéphane Lacoin
        date: '2014-11-10 14:06'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-12-10 11:54'
        message: typo
        version: '18'
    - 
        author: Florent Guillaume
        date: '2013-11-14 16:48'
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
Creating a static WAR of Nuxeo allows you to deploy Nuxeo in an environment where your application server only allows WAR installation. Keep in mind that when you do this, the following dynamic features will **not** work (we are inside a **static** WAR):

*   Nuxeo Studio hot reload
*   Nuxeo IDE hot reload
*   Nuxeo Marketplace integration (hotfixes and packages installation)

Those limitations implies that if you want to change the distribution (for instance install or upgrade some Nuxeo Packages, change the configuration...), you must replay the following procedure and deploy the WAR newly generated.

{{#> callout type='tip' heading='How not to hardcode some properties'}}

It is possible to keep some "dynamic" aspect on some parameters by giving them a variable as value: for instance, `nuxeo.db.host=${custom.nuxeo.db.host}`
Then, you can use the produced Nuxeo WAR in an environment where `custom.nuxeo.db.host` is defined from outside.

{{/callout}}

&nbsp;

## Creating a Nuxeo Static WAR Distribution

Here is the way to create your own static WAR distribution:

1.  Download a Nuxeo Tomcat distribution.
2.  Unzip it in somewhere (let's call it `$NUXEO_HOME`).
3.  Customize and configure your application as usual:

    1.  Deploy some Nuxeo Packages.
    2.  Create your [own configuration templates](http://doc.nuxeo.com/x/LANc).
    3.  Configure&nbsp;`nuxeo.conf` .
    4.  Copy your specific bundles into `$NUXEO_HOME/nxserver/bundles/`.

        {{#> callout type='warning' }}

        Such a practice is not recommended: you should deploy Nuxeo Bundles via a Nuxeo Package or, at least, via a custom configuration template

        {{/callout}}
4.  Start the server.
5.  Check that your Nuxeo is configured as expected (database configuration, LDAP authentication, etc.).
6.  Stop the server.
7.  Launch this following command:

    ```
    $NUXEO_HOME/bin/nuxeoctl pack /tmp/nuxeo-war.zip

    ```

    Your static WAR distribution will be generated into `/tmp/nuxeo-war.zip.`

The generated ZIP contains what needs to be copied over a standard Tomcat installation:

```
nuxeo-war.zip/
|-- endorsed (jaxb and jaxws api libs that should replace packages provided by default JDK that are outdated)
|-- lib (common libs)
|-- README-NUXEO.txt
`-- webapps
    `-- nuxeo (exploded WAR that you can zip if needed)

```

## Installing Nuxeo in the Target Tomcat

The distribution is mainly an overlay to be extracted at the root of your Tomcat instance.

You must provide the Nuxeo logs path and start the Catalina with more memory than its defaults; for instance:

```none
# Usually set in bin/catalina.sh rather than export
export JAVA_OPTS="$JAVA_OPTS -Dnuxeo.log.dir=logs"
export CATALINA_OPTS="$CATALINA_OPTS -Xms512m -Xmx1024m -XX:MaxPermSize=512m"
./bin/catalina.sh start
```

The target database will be the one you defined in your source Nuxeo instance, and the default for the Nuxeo directories are:

*   `nuxeo.config.dir` : `WEB-INF` directory,
*   `nuxeo.runtime.home` : `$TOMCAT_HOME/nuxeo,`
*   `nuxeo.data.dir` : `$TOMCAT_HOME/nuxeo/data,`
*   `nuxeo.tmp.dir` : `$TOMCAT_HOME/nuxeo/tmp,`
*   `nuxeo.web.dir` : `$TOMCAT_HOME/nuxeo/web` (for WebEngine modules).

See [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}}) for more details about these config parameters of the Nuxeo Platform.

If you need to change the values for these paths, setting System properties is not enough: you must add&nbsp;`context-param` entries in the Nuxeo `WEB-INF/web.xml` file (see [JavaDoc of NuxeoStarter](http://community.nuxeo.com/api/nuxeo/release-5.6/javadoc/org/nuxeo/runtime/deployment/NuxeoStarter.html) for more details).

## Installing Nuxeo in the Target WildFly

The&nbsp;`webapp/nuxeo` folder content should be installed in your deployment profile&nbsp; (i.e.: `standalone/deployment/nuxeo.war`). You should then augment the Nuxeo webapp libraries (i.e.: `WEB-INF/lib`) by the `lib/` and `endorsed/` folders content.

The target database will be the one you defined in your source Nuxeo instance, and the default for the Nuxeo directories are:

*   `nuxeo.config.dir` : `WEB-INF` directory,
*   `nuxeo.runtime.home` : `$WILDFLY_HOME/nuxeo,`
*   `nuxeo.data.dir` : `$`WILDFLY`_HOME/nuxeo/data,`
*   `nuxeo.tmp.dir` : `$`WILDFLY`_HOME/nuxeo/tmp,`
*   `nuxeo.web.dir` : `$`WILDFLY`_HOME/nuxeo/web` (for WebEngine modules).

See [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}}) for more details about these config parameters of Nuxeo.

If you need to change the values for these paths, setting System properties is not enough: you must add&nbsp;`context-param` entries in the Nuxeo `WEB-INF/web.xml` file (see [JavaDoc of NuxeoStarter](http://community.nuxeo.com/api/nuxeo/release-5.6/javadoc/org/nuxeo/runtime/deployment/NuxeoStarter.html) for more details).

## Upgrade or Install HotFix

Because of the limitations implied by the static WAR, you must generate a new WAR if you want to upgrade the server or apply some hotfix.