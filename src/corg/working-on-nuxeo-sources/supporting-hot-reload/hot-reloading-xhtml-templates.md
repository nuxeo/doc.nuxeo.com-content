---
title: Hot Reloading XHTML templates
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '11043369'
    ajs-parent-page-title: Supporting Hot Reload
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Hot+Reloading+XHTML+templates
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Hot+Reloading+XHTML+templates'
    page_id: '20517835'
    shortlink: yxM5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/yxM5AQ'
    source_link: /display/CORG/Hot+Reloading+XHTML+templates
history:
    - 
        author: Anahide Tchertchian
        date: '2014-11-04 16:51'
        message: ''
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2014-11-04 16:36'
        message: ''
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2014-11-04 16:27'
        message: ''
        version: '1'

---
When working on XHTML files, it can be useful to modify files on your usual editor, and to copy them to the server for immediate reload.

{{#> callout type='warning' }}

To enable hot reload of XHTML templates, add the following configuration to your server nuxeo.conf file:

<pre>org.nuxeo.dev=true</pre>

{{/callout}}

You can use the nuxeo helper ant file to deploy modified files directly to the server.

The original ant file is at [https://github.com/nuxeo/nuxeo/blob/master/build.xml](https://github.com/nuxeo/nuxeo/blob/master/build.xml), it needs to be referenced by the local build.xml file placed at the root of your module.

Here is a sample local build.xml file: [https://github.com/nuxeo/nuxeo-jsf/blob/master/nuxeo-platform-forms-layout-client/build.xml](https://github.com/nuxeo/nuxeo-jsf/blob/master/nuxeo-platform-forms-layout-client/build.xml)

```
<?xml version="1.0"?>
<project name="my project" default="web-tomcat" basedir=".">
  <import file="path/to/the/global/build.xml" />
  <property file="build.properties" />
</project>
```

The default build.properties file will place the tomcat server at `/opt/tomcat`. You can either override this property globally or locally, by placing a `build.properties` file next to the global or local `build.xml` file.

Here is a sample `build.properties` file content:

```
tomcat.dir=/path/to/my/tomcat
```

&nbsp;

Here is a sample usage output:

```
~/workspaces/nuxeo/nuxeo-jsf/nuxeo-platform-forms-layout-client$ touch src/main/resources/web/nuxeo.war/widgets/container_widget_template.xhtml 
~/workspaces/nuxeo/nuxeo-jsf/nuxeo-platform-forms-layout-client$ ant
Buildfile: /home/anahide/workspaces/nuxeogit/nuxeo-jsf/nuxeo-platform-forms-layout-client/build.xml

web-tomcat:
     [copy] Copying 1 file to /opt/tomcat/nxserver/nuxeo.war

BUILD SUCCESSFUL
Total time: 0 seconds
```