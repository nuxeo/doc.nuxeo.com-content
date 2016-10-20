---
title: Package Manifest
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '22380599'
    ajs-parent-page-title: Creating Nuxeo Packages
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Package+Manifest
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Package+Manifest'
    page_id: '22380601'
    shortlink: OYBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/OYBVAQ'
    source_link: /display/NXDOC60/Package+Manifest
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2012-05-21 12:00'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2012-05-21 12:00'
        message: Fixed link format
        version: '11'
    -
        author: Julien Carsique
        date: '2011-11-16 18:50'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2011-02-03 18:40'
        message: updated pointer to explanation of each package property
        version: '9'
    -
        author: whajeri
        date: '2010-11-12 13:03'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-10-06 08:27'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-10-06 08:27'
        message: ''
        version: '6'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 01:59'
        message: ''
        version: '5'
    -
        author: Florent Guillaume
        date: '2010-07-07 21:58'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-07-07 16:22'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-07-07 16:20'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-07-07 11:25'
        message: ''
        version: '1'

---
Let's look at a minimal example of package.xml file:

```

<package type="addon" name="nuxeo-automation" version="5.3.2">
  <title>Nuxeo Automation</title>
  <description>A service that enables building complex business logic on top of Nuxeo services
    using scriptable operation chains</description>
  <platforms>
    <platform>dm-5.3.2</platform>
    <platform>dam-5.3.2</platform>
  </platforms>
</package>

```

This is a minimal package manifest. It is defining a package nuxeo-automation at version 5.3.2 and of type add-on.
The package can be installed on platforms dm-5.3.2 and dam-5.3.2.

{{#> callout type='warning' }}

TODO: replace fixed versions in platforms with range of versions.

{{/callout}}

Also, the package title and description that should be used by the UI are specified vy the title and description elements.

{{#> callout type='note' }}

Note that the package names used in these examples are fictional.

{{/callout}}

Lets look at the full version of the same package manifest:

```

<package type="addon" name="nuxeo-automation" version="5.3.2">
  <title>Nuxeo Automation</title>
  <description>A service that enables building complex business logic on top of Nuxeo services
    using scriptable operation chains</description>
  <classifier>Open Source</classifier>
  <home-page>http://some.host.com/mypage</home-page>
  <vendor>Nuxeo</vendor>
  <installer class="org.nuxeo.connect.update.impl.task.InstallTask" restart="false"/>
  <uninstaller class="org.nuxeo.connect.update.impl.task.UninstallTask" restart="false"/>
  <validator class="org.nuxeo.MyValidator"/>
  <platforms>
    <platform>dm-5.3.2</platform>
    <platform>dam-5.3.2</platform>
  </platforms>
  <dependencies>
    <package>nuxeo-core:5.3.1:5.3.2</package>
    <package>nuxeo-runtime:5.3.1</package>
  </dependencies>
  <vendor>YourCompany</vendor>
  <supported>false</supported>
  <hotreload-support>true</hotreload-support>
  <require-terms-and-conditions-acceptance>false</require-terms-and-conditions-acceptance>
  <NuxeoValidationState>primary_validation</NuxeoValidationState>
  <ProductionState>production_ready</ProductionState>
  <license>LGPL</license>
  <license-url>http://www.gnu.org/licenses/lgpl.html</license-url>
</package>

```

You can see the usage of installer and uninstaller elements. These are used to specify the task implementation to be used when installing and uninstalling.
If these elements are not specified the default values will be used.
If you specify only one of the "class" or "restart" attributes, then the other attributes will get the default values.

See ﻿[Creating Nuxeo Packages]({{page page='creating-nuxeo-packages'}}) for an explanation of each package property.
