---
title: Nuxeo Distributions
review:
    comment: ''
    date: ''
    status: ok
labels:
    - ant-assembly-maven-plugin
    - packaging
    - nuxeo-distribution-tools
    - jetty
    - tomcat
    - distribution
confluence:
    ajs-parent-page-id: '22380897'
    ajs-parent-page-title: Advanced topics
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Nuxeo+Distributions
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Nuxeo+Distributions'
    page_id: '22380899'
    shortlink: Y4FVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/Y4FVAQ'
    source_link: /display/NXDOC60/Nuxeo+Distributions
tree_item_index: 300
history:
    -
        author: Anonymous
        date: '2013-09-20 15:14'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2013-09-16 23:55'
        message: ''
        version: '13'
    -
        author: Alain Escaffre
        date: '2013-09-16 23:52'
        message: ''
        version: '12'
    -
        author: Alain Escaffre
        date: '2013-09-16 23:51'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2013-09-16 23:51'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2012-01-10 12:33'
        message: Migrated to Confluence 4.0
        version: '9'
    -
        author: Julien Carsique
        date: '2012-01-10 12:33'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-10-15 11:59'
        message: ''
        version: '7'
    -
        author: Julien Carsique
        date: '2010-09-13 18:46'
        message: formatting and typos
        version: '6'
    -
        author: Solen Guitter
        date: '2010-05-20 18:28'
        message: formatting and typos
        version: '5'
    -
        author: Julien Carsique
        date: '2010-04-28 14:04'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2010-04-28 12:19'
        message: ''
        version: '3'
    -
        author: Admin name placeholder
        date: '2010-03-29 19:25'
        message: ''
        version: '2'
    -
        author: Admin name placeholder
        date: '2010-03-01 13:29'
        message: ''
        version: '1'

---
The `nuxeo-distribution` module is used for packaging of the Nuxeo products: Nuxeo EP/DM &nbsp;/Jetty/Tomcat, Nuxeo Shell, Nuxeo Core Server, ... It is a way to specify declaratively which bundles and static resources are part of your application.

{{! excerpt}}

With `nuxeo-distribution`, you can [build from Nuxeo sources]({{page space='corg' page='compiling-nuxeo-from-sources'}}), or from existing distribution and much more:&nbsp;if you need to [assemble your own distribution]({{page space='corg' page='creating-your-own-distribution'}}), you will find in `nuxeo-distribution resources`, templates and samples on which to base your packaging.

{{! /excerpt}}

You don't need to use the nuxeo-distribution module if:

*   You want a standard Nuxeo distribution:
    => Download it from&nbsp;[http://www.nuxeo.com/downloads/](http://www.nuxeo.com/downloads/)&nbsp;(manual download only);
    => Download it from&nbsp;[http://maven.nuxeo.org](http://maven.nuxeo.org/)&nbsp;(manually via online interface or automatically using Maven);
*   You want to customize configuration files:
    => Use&nbsp;[the template configuration system]({{page space='admindoc60' page='configuration-templates'}});
*   You want to&nbsp;[build your own distribution]({{page space='corg' page='creating-your-own-distribution'}}):
    => Rely on the same tools and principles as nuxeo-distribution does but do it from your own project, with your own assembly.

You have to use&nbsp;`nuxeo-distribution`&nbsp;module if:

*   You want to reproduce the Nuxeo build process,
*   You want to build Nuxeo offline,
    => Being unable to download artifacts from internet, you will need a lot of other Nuxeo sources and some third-party artifacts.
*   You work on Nuxeo source code and need quick feedback on your changes, you don't want to wait for&nbsp;[our continuous integration system](https://qa.nuxeo.org/hudson/)&nbsp;building nuxeo-distribution.

Read to the&nbsp;[Nuxeo Core Developer Guide]({{page space='corg' page='nuxeo-core-developer-guide'}})&nbsp;for more information on how to package from sources using nuxeo-distribution.
