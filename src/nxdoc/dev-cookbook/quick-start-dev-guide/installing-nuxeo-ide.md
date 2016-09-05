---
title: Installing Nuxeo IDE
toc: true
confluence:
    ajs-parent-page-id: '17334418'
    ajs-parent-page-title: Quick Start Dev Guide
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Installing+Nuxeo+IDE
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Installing+Nuxeo+IDE'
    page_id: '17334411'
    shortlink: i4AIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/i4AIAQ'
    source_link: /display/NXDOC58/Installing+Nuxeo+IDE
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 14:00'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2015-01-30 10:42'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2015-01-30 10:38'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2015-01-30 10:28'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2015-01-30 10:27'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2015-01-30 10:27'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2015-01-30 10:27'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2015-01-30 10:21'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2015-01-30 10:17'
        message: fix broken excerpt
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-07-15 14:13'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-07-15 14:03'
        message: Link update
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-07-15 14:01'
        message: ''
        version: '1'

---
&nbsp;

## Installing Nuxeo IDE

{{#> panel heading='Prerequisites'}} {{! multiexcerpt name='IDE-installation-prerequisites'}}

*   Eclipse 4.3 (Kepler) ,
*   Java 7,
*   A Tomcat based distribution of Nuxeo Platform 5.8 or later.

This installation guide assumes that you have already installed some flavor of a supported version of Eclipse.&nbsp; If not, then you can download Eclipse from [http://www.eclipse.org/downloads](http://www.eclipse.org/downloads).

{{! /multiexcerpt}} {{/panel}}{{! multiexcerpt name='IDE-installation-from-Marketplace'}}

1.  In Eclipse, go into the **Help**, **Eclipse Marketplace** menu.
2.  The Eclipse Marketplace window opens.&nbsp;
3.  Search for **Nuxeo**, select **Nuxeo IDE** and click on the **Install** button.
    ![]({{file name='eclipse-marketplace-nx-ide.png'}} ?w=450,h=386,border=true)
4.  Nuxeo IDE and Nuxeo Shell are automatically selected and downloaded.
    ![]({{file name='NxIDE_install_MP_Eclipse.png'}} ?w=450,border=true)
5.  When Nuxeo IDE and Nuxeo Shell are downloaded, click on the **Next** button.
6.  Accept license when prompted.
    Installation begins. After a few seconds, a security warning is prompted.
7.  On the security warning window, click on **OK**.
    Installation continues.
    ![]({{file name='NxIDE_install6.png'}} ?w=350,border=true)
8.  Restart Eclipse when prompted.
    Nuxeo IDE is installed. A new button is available in the Eclipse toolbar:![]({{file name='NxIDE_button.png'}})

{{! /multiexcerpt}} {{#> callout type='tip' heading='Alternative'}}

You can also install Nuxeo IDE from Eclipse directly.

{{/callout}}

## {{> anchor 'sdk-installation'}}Installing a Nuxeo DSK

{{{multiexcerpt 'SDK-definition' page='IDEDOC:Setting up a Nuxeo SDK'}}}

**To install a Nuxeo SDK:**

{{{multiexcerpt 'SDK-install-downloaded-distribution' page='IDEDOC:Setting up a Nuxeo SDK'}}}

{{#> callout type='tip' heading='Alternative'}}

You can also [checkout Nuxeo source code]({{page space='corg' page='getting-the-nuxeo-source-code'}}) and [build a Tomcat distribution from the Nuxeo trunk]({{page space='corg' page='compiling-nuxeo-from-sources'}}). In that case, you must activate the `sdk` Maven profile: `mvn package -Ptomcat,sdk`.

{{/callout}}

&nbsp;

&nbsp;