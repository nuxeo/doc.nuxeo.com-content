---
title: Explorer
review:
    comment: ''
    date: '2020-10-08'
    status: ok
labels:
    - explorer
toc: true
tree_item_index: 630
---

[Explorer](https://connect.nuxeo.com/nuxeo/site/marketplace/package/platform-explorer) is a Nuxeo addon that allows to introspect the [Nuxeo Runtime Configuration]({{page page='runtime-and-component-model'}}) of the live application, export it as a *distribution*, and import similar distributions for reference and documentation.

{{#> callout type='info'  heading='Nuxeo University'}}
Watch the related expert session on Nuxeo University:</br>
[Nuxeo Explorer Expert Session](https://university.nuxeo.com/learn/course/external/view/elearning/219/nuxeo-explorer)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/university-explorer-expert-session
    name: university-explorer-expert-session.png
    addins#screenshot#up_to_date
--}}
![university-explorer-expert-session](nx_asset://a45659b9-47a3-4dea-a71e-3e8a1ec6d250 ?w=450,border=true)
{{/callout}}

The Nuxeo Explorer reference instance is available at [explorer.nuxeo.com](http://explorer.nuxeo.com). It displays reference distributions for all major Nuxeo releases and is referenced in this documentation page. The live Runtime introspection has been disabled on this server.

## Installation

This addon requires no specific installation steps. It can be installed like any other package with the [nuxeoctl command line]({{page space='nxdoc' page='installing-a-new-package-on-your-instance'}}#installing-a-package-using-the-nuxeoctl-script):
```
$ nuxeoctl mp-install platform-explorer
```

## Configuration

The explorer package comes with the following [Configuration Templates]({{page page='configuration-templates'}}):
- `explorer-sitemode`: this will set up an anonymous user and redirect to the Explorer home page when reaching the Nuxeo server.</br>
  This will also disable the possibility of introspecting the live Runtime, by setting the `nuxeo.conf` environment property `org.nuxeo.apidoc.site.mode` to `true`.</br>
  This template is typically useful for a documentation site, similar to [explorer.nuxeo.com](http://explorer.nuxeo.com).

- `explorer-virtualadmin`: this will setup a virtual administrator for the application, creating an empty user database (if it was not already initialized and/or filled).</br>
  The virtual username is `apidocAdmin`.</br>
  The default password matches the username, and **should be changed** thanks to the `nuxeo.conf` environment property `org.nuxeo.apidoc.apidocAdmin.password`.

The following configuration properties are available:
- `org.nuxeo.apidoc.javadoc.url` defaults to `https://community.nuxeo.com/api/`, this will be taken into account to generate Javadoc links depending on the distribution version, for instance referencing the [Nuxeo 10.10 Javadoc](https://community.nuxeo.com/api/nuxeo/release-10.10/javadoc/) for a distribution with version 10.10.

- `org.nuxeo.apidoc.apidocmanagers.group` defaults to `ApidocManagers`: users in this group will be able to manage distributions, uploading, updating and exporting persisted distributions in the application. Note that members of this group cannot see the live runtime configuration: only a Nuxeo global administrator can do so.

- `org.nuxeo.apidoc.apidocreaders.group` defaults to `Everyone`: users in this group (by default, all users) will be able to view persisted distributions.

These can be customized by [overriding the corresponding component configuration]({{page page='how-to-contribute-to-an-extension'}}), for instance:
```
<?xml version="1.0"?>
<component name="org.mycompany.myproject.Explorer.contrib">
  <require>org.nuxeo.ecm.core.operation.OperationServiceComponent</require>
  <extension point="configuration" target="org.nuxeo.runtime.ConfigurationService">
    <property name="org.nuxeo.apidoc.apidocmanagers.group">MyProjectAdministrators</property>
  </extension>
</component>
```

The complete list of contributions can be seen on the explorer itself, on the
[Explorer package view](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewPackage/platform-explorer).

## Functional Overview

### User Features

The explorer addon allows exporting Nuxeo **distributions**, snapshotting the "live" Nuxeo server on which the Explorer addon is running.</br>
It provides import and export features, storing distributions as documents in the Nuxeo repository.

Here is a sample home page, taken on the [Explorer public instance](http://explorer.nuxeo.com):
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Explorer/Explorer Preview
    name: Screenshot from 2020-10-08 17-49-07.png
    addins#screenshot#up_to_date
--}}
![Explorer Preview](nx_asset://328a2635-e806-4def-a307-2ee070adf654)

Newest available distributions are presented, as well as legacy LTS (Long Time Support) releases, and serve as documentation for main releases of the Nuxeo Platform.

Explorer distributions present the following items from a live [Runtime]({{page page='runtime-and-component-model'}}):
- [**Bundle Groups**](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/listBundleGroups) are extracted from the Maven configuration of Nuxeo bundles, producing a hierarchy that allows grouping bundles inside sub-categories;

- [**Bundles**](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/listBundles) are at the heart of the Runtime Framework pluggable system. Bundles are packaged as Java Jars and reference components that should be deployed on the server;

- [**Components**](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/listComponents) are the pluggable parts allowing to declare services, extension points and contributions;

- [**Services**](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/listServices) provide interfaces for business-logics;

- [**Extension Points**](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/listExtensionPoints) provide entry points for the many configurable elements in the application;

- [**Contributions**](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/listContributions) are configurable elements held by the server;

- [**Operations**](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/listOperations) are specific contributions to the [Nuxeo Automation Framework]({{page page='automation'}}): this extraction allows to display detailed documentation on these configuration elements;

- [**Packages**](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/listPackages) are
  [groups of bundles]({{page page='creating-nuxeo-packages'}}) that are installed as Nuxeo *plugins* on the application.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Explorer/Explorer Distribution Home Page
    name: Screenshot from 2020-10-27 18-30-32.png
    addins#screenshot#up_to_date
--}}
![Explorer Distribution Home Page](nx_asset://0fe5cf54-961f-4784-ba92-0a7f59e8d498 ?w=350)

On each distribution, tab-like navigation offers listings of all of these items, with filtering features:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Explorer/Explorer Extension Points
    name: Explorer Extension Points.png
    addins#screenshot#up_to_date
--}}
![Explorer Extension Points](nx_asset://6b3e369d-9cbf-4f55-be1b-d2169a3e2c03)

Here are screenshot details of some sample pages, presenting:
-   Documentation on an extension point, also listing its contributions:
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Explorer/Explorer Extension Point Sample
        name: Screenshot from 2020-10-28 09-36-11.png
        addins#screenshot#up_to_date
    --}}
    ![Explorer Extension Point Sample](nx_asset://b24d5681-bc2e-4ce1-8e9d-dd0a974b027e)

-   Documentation on a component, linking to its required component and to its contribution:
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Explorer/Explorer Component Sample
        name: Screenshot from 2020-10-28 09-37-55.png
        addins#screenshot#up_to_date
    --}}
    ![Explorer Component Sample](nx_asset://66cc252c-ce72-4230-b83b-d56a688298ba)

-   Documentation on an operation:
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Explorer/Explorer Operation Sample
        name: Screenshot from 2020-10-28 09-37-03.png
        addins#screenshot#up_to_date
    --}}
    ![Explorer Operation Sample](nx_asset://921396c3-314f-4e17-9070-8605d5512a68)

-   A summary of all bundles, components, services, extension points and contributions held by a given package:
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Explorer/Explorer Package Sample
        name: Screenshot from 2020-10-28 09-37-03.png
        addins#screenshot#up_to_date
    --}}
    ![Explorer Package Sample](nx_asset://81f38f99-e42e-4adb-9394-4073c8970975)

These pages come with additional references to the online, to the Nuxeo Marketplace, as well
as helpers to generate the code needed to [override a contribution]({{page page='how-to-contribute-to-an-extension'}}), or to declare specific operation available inside [Nuxeo Studio Registries]({{page space='studio' page='registries'}}).

Links to distributions can be resolved thanks to their unique key, but can also be resolved using an aliasing system.</br>
The distribution name, key, version and aliases can be updated on the distribution from the UI.
The version only can also be used as an alternative alias.

Some special keywords are used as aliases:
- `current` is an alias to the live Runtime distribution: it can only be browsed by an administrator.

- `adm` is also an alias to the live Runtime distribution, but with a simpler-rendering (useful to embed frames inside of administrative pages).

- `latest` will resolve to the [most recent distribution name "Nuxeo Platform"](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/), comparing versions. It can also be defined as an explicit alias on distributions, and the same version comparison system will be used when several distributions match.

- `latestLTS` and `latestFT` are set according to boolean metadata on a distribution. When checking the checkbox, existing distributions with the same boolean checked will be updated, so that only [one distribution](https://explorer.nuxeo.com/nuxeo/site/distribution/latestLTS/) is flagged as being the latest.

Export links are also displayed in the UI, on the distribution page as well as on bundles and packages.

### Administrator Features

Administrator users can access the management page by clicking on the **Manage Distribution** button from the home page:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Explorer/Explorer Manage View
    name: Screenshot_2020-10-27 Nuxeo Platform Explorer.png
    addins#screenshot#up_to_date
--}}
![Explorer Manage View](nx_asset://114502b5-e044-4bf0-bc40-057265284bbb)

### Saving a Distribution

Administrators can snapshot the live Runtime. This will create documents in the repository representing that state.

Complete distributions can be saved, but filtering can also be applied:
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Explorer/Explorer Save Live Distribution
    name: Screenshot_2020-10-28 Nuxeo Platform Explorer.png
    addins#screenshot#up_to_date
--}}
![Explorer Save Live Distribution](nx_asset://7eb8b862-2025-48b4-9ec8-f68a52481f9b)

Filtering is available on:
- bundles by filling a bundle name (multiple lines can be used for multiple bundle),
- packages by filling a package name (multiple lines can also be used for multiple packages),
- Java packages prefixes: the java package will filter operations depending on their Java implementation package name.

When selecting a bundle, the packages holding it will also be selected. Similarly, when selecting a package, included bundles will be selected. Operations can also be selected if their corresponding component is selected.

The **Check As Prefixes** checkbox can be used as a wildcard, to make selections on all bundles or packages that start with the given name(s), in order to make "bulk" selections.

The **Include References** checkbox can be used to include target extension points in the extraction. Their containing component and bundle will also be taken into account, stripped out of unrelated configurations. This option is interesting to extract and list all selected contributions to a given extension point, filtered out of all other contributions to the same extension point.

The same kind of filtering can be applied to the Json REST default API, as well as
[contributed exporters REST API](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.apidoc.snapshot.SnapshotManagerComponent--exporters). Corresponding export links are made available on the home page, the bundle page and the package page, by configuration,

#### Managing Distributions

Only administrators can snapshot the current live runtime, as the generated export could hold private or sensitive information.

But users who are members of a group named `ApidocManagers` can also import, export, delete and update distributions.

When saving or uploading a distribution, some metadata can be updated on the distribution. It is also possible to update the distribution later on, to change its name, define aliases, etc:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Explorer/Explorer Distribution Update
    name: Screenshot from 2020-10-27 18-28-35.png
    addins#screenshot#up_to_date
--}}
![Explorer Distribution Update](nx_asset://34886cbe-a821-4384-8db8-612c04a19c0a ?w=350)

When set as *hidden*, the distribution can still be accessed with a direct link, but is not listed anymore on the home page.

From this administration page, a **ZIP export** can be downloaded for all persisted distributions: this is actually a standard Nuxeo XML export of the hierarchy of distribution-related documents. The same ZIP can be imported again on another Nuxeo server where the Explorer addon is also installed.

## Technical Overview

The distribution snapshot is done by querying the following services:
- the **ComponentManager** service, in charge of the runtime deployment,
- the **PackageManager** service, in charge of packages installation,
- the **AutomationService** service, in charge of operations and chains registration.

All Nuxeo artifacts that are extracted follow a dedicated interface, and accept two implementations: one consisting of a simple POJO class to represent a "live" state, and another acting as a [Nuxeo document adapter](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewContribution/org.nuxeo.apidoc.adapterContrib--adapters) to represent a persisted state.

`README` files held by bundle jars are also extracted for additional documentation, as well as `<documentation>` tags extracted from components XML configurations.

Configurations that are introspected can sometimes hold sensitive information (like password or tokens). To avoid exposing such information, the content is filtered and can be configured in case some additional tags should be added. Here is a sample component to override the [default values](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewContribution/org.nuxeo.apidoc.snapshot.SnapshotManagerComponent--configuration3):
```
<component name="org.nuxeo.apidoc.snapshot.SnapshotManagerComponent.override">
  <require>org.nuxeo.apidoc.snapshot.SnapshotManagerComponent</require>
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="org.nuxeo.apidoc.secure.xml.keywords">
      password, Password, secret, apiKey, TMPDIR, TMP, TEMP, TEMPDIR
    </property>
    <property name="org.nuxeo.apidoc.secure.xml.keywords.whitelisted">
      passwordField, passwordHashAlgorithm
    </property>
  </extension>
</component>
```

The Explorer addon comes with two extension points for customizations:
- [**plugins**](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.apidoc.snapshot.SnapshotManagerComponent--plugins) can be contributed to extract more information than what the default implementation provides, display it, and export it. This can be useful to document any other new artifact, similarly to operations extraction, for instance, in a pluggable way.

- [**exporters**](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.apidoc.snapshot.SnapshotManagerComponent--exporters) can also be contributed to generate custom exports of various kinds. Some default contributions are provided with the default implementation, and can be taken as examples. This allows defining custom REST API to export the distribution information, defining custom filtering or using a custom format (Json or not).

Since installing the Explorer addon is not necessarily something that you would like to do on your application, it is also possible to automate its deployment on a development instance, add the Explorer addon on it, and perform an export, in a CI pipeline. Reference platform exports are pushed to the public Nuxeo Explorer instance automatically at each release by using such an [automated pipeline](https://github.com/nuxeo/nuxeo-explorer/blob/master/ci/Jenkinsfiles/export.groovy).
