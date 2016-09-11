---
title: Upgrade from 5.4.2 to 5.5
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - multiexcerpt
toc: true
confluence:
    ajs-parent-page-id: '3343538'
    ajs-parent-page-title: Upgrading the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Upgrade+from+5.4.2+to+5.5
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Upgrade+from+5.4.2+to+5.5'
    page_id: '14255761'
    shortlink: kYbZ
    shortlink_source: 'https://doc.nuxeo.com/x/kYbZ'
    source_link: /display/NXDOC/Upgrade+from+5.4.2+to+5.5
history:
    - 
        author: Solen Guitter
        date: '2016-04-06 07:31'
        message: ix link to page How to upgrade Nuxe
        version: '4'
    - 
        author: Manon Lumeau
        date: '2016-02-09 15:37'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2015-04-14 15:01'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-07-02 10:52'
        message: ''
        version: '1'

---
For the general upgrade process, see the [How to Upgrade Nuxeo]({{page page='upgrading-the-nuxeo-platform'}}) page.

{{! multiexcerpt name='5.4.2-to-5.5-upgrade-page'}}

This chapter presents the detailed process to upgrade from Nuxeo 5.4.2 to Nuxeo 5.5\. Most of it is useful information you need to have to fully understand what has changed in this release.

You can have a look at this interesting use case of a ["Mostly painless Nuxeo upgrade from 5.4.2 to 5.5 under Windows / PostgreSQL"](http://concena.com/blogged-down/-/blogs/upgrading-nuxeo-from-5-4-2-to-5-5-mostly-painless?_33_redirect=http%3A%2F%2Fconcena.com%2Fhome%3Bjsessionid%3D2F941F2940A2D9E227EAC0E2D76A16F3%3Fp_p_id%3D115%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26p_p_col_id%3Dcolumn-2%26p_p_col_count%3D2)!

## Installation & Configuration

Follow [Installation Instruction]({{page space='admindoc55' page='installation'}}).

Under all OS:

*   H2 Embedded database is not supported for data detection.
*   After the installation, uncomment the line `custom.target` in your `template/custom/nuxeo.default` and set it to "." to indicate the path of your custom templates.
*   "_session.timeout_" has been added to `nuxeo.conf` and can be overridden for defining the web session timeout which is then integrated into the `web.xml` file.

Under Linux:

*   The new installation changes the `opt/nuxeo` content location to `/var/lib/nuxeo/server` - templates and conf still in `etc/nuxeo` folder.
*   The package Debian autoconfigure

    *   detects your data,
    *   detects/adds your marketplace addons (including DM,CMF,DAM).

Under Windows:

*   Windows installer:

    *   detects your data,
    *   detects/adds your marketplace addons (including DM,CMF,DAM).

### Packaging

The DM, DAM, SC, and CMF distributions are now available as Marketplace packages.

This new packaging system is used in the Setup Wizard to allow to choose between different profiles at installation time.
You can also use the Admin Center or the [nuxeoctl commands]({{page space='admindoc55' page='nuxeoctl-and-control-panel-usage'}}) to add or remove these packages. For projects having a custom distribution based on one of ours, no problem, we provide presets for automatically transforming the new unique Tomcat distribution into a DM, DAM or CMF.
Also, the "EAR" (zip) assemblies do still exist.

Using the wizard is just an additional option.

#### Digital Asset & Case Management

For now, it is not possible to install CMF with other packages like DM and DAM because there are some content model incompatibilities.

### Distribution

Regarding to custom distributions and related to the new 5.5 packaging (DM, CMF, DAM are now addons), Ant assembly script (`assembly.xml`) has to be modified:

Deploy the Nuxeo CAP distribution (only nuxeo-cap classifier still exists):

```
<!-- Deploy CAP distribution -->
    <unzip dest="${stagedir}">
      <artifact:resolveFile key="org.nuxeo.ecm.distribution:nuxeo-distribution-tomcat:${nuxeo.version}:zip"
                            classifier="nuxeo-cap" />
    </unzip>

${stagedir}: distribution parent folder

```

Define type distribution:

```
<!-- Set the addon deploying in distribution -->
    <copy file="${app.path}/nxserver/data/installAfterRestart-?.log"
      tofile="${app.path}/nxserver/data/installAfterRestart.log"
      overwrite="true" />

${app.path}: define your distribution path (ie ./stage/nuxeo-custom-server)
?: DM,DAM,CMF,SC

```

Optional: choose the wizard distribution type by setting wizard addon preset ([NXP-8031](https://jira.nuxeo.com/browse/NXP-8031)):

```
<!-- Set the wizard.preset by default -->
	<echo file="${app.path}/setupWizardDownloads/packages-default-selection.properties"
          message="preset=nuxeo-?" />

${app.path}: define your distribution path (ie ./stage/nuxeo-custom-tomcat)
?: dm,cmf,dam

```

### Third party libraries upgrades

*   **GWT** - Nuxeo is now using **GWT** 2.4.0.
*   **JAX-WS** - Libraries have been upgraded to 2.2.5 in order to fix some compatibilities issues.
*   **OpenCMIS** - Nuxeo Platform is now aligned on **OpenCMIS** 0.6 that comes with experimental support for the CMIS Browser binding (JS compliant API).
*   **JEXL** - Location is changed from Nuxeo Runtime to Nuxeo Platform Action.

## Data Migration

### VCS

Only fews column additions were done between 5.4.2 and 5.5 (no alter). So you can migrate and retrieve all your 5.4.2 data after 5.5 installation.

For relations, these attributes are added to the "relation" schema ([NXP-7962](http://jira.nuxeo.com/browse/NXP-7962)):

```
<xs:element name="predicate" type="xs:string" />
<xs:element name="sourceUri" type="xs:string" />
<xs:element name="targetUri" type="xs:string" />
<xs:element name="targetString" type="xs:string" />

```

A new metadata has been added to follow the legacy definition of `dublincore` schema ([NXP-7884](http://jira.nuxeo.com/browse/NXP-7884)) :

```
<xs:element name="publisher" type="xs:string"/>
```

A new schema has been added: `task.xsd` (related to the nuxeo-platform-task feature - [NXP-7852](http://jira.nuxeo.com/browse/NXP-7852)):

```
<xs:element name="actors" type="nxt:stringList" /> (Task actors list)
<xs:element name="task_variables" type="nxt:task_variables" /> (tasks vars list)
<xs:element name="taskComments" type="nxt:taskComments" /> (Task comments list)

```

(Four new tables due to complex types added.)

### Fulltext

#### Partially missing fulltext index for the title field

Old versions of Nuxeo DM might have existing documents present before the introduction of the "fulltext_title" index. This is visible on the Nuxeo 5.5 release thanks to the new search suggestion widget that might be missing some suggestions on old documents.

To update the title fulltext index, just perform the following SQL query on your PostgreSQL server:

```
UPDATE fulltext SET simpletext_title = NX_TO_TSVECTOR("dublincore"."title") FROM dublincore WHERE "fulltext"."id" = "dublincore"."id";

```

#### PostgreSQL fulltext phrase search

In Nuxeo 5.5 for PostgreSQL we've added a better way to store fulltext information that enables the use of phrase search. If you want to use phrase search, you should follow the upgrade notes of [NXP-5689](https://jira.nuxeo.com/browse/NXP-5689). If you do this fulltext upgrade, you may want to check the (unsupported for now) [nuxeo-reindex-fulltext plugin](https://github.com/nuxeo/nuxeo-reindex-fulltext) to get more accurate phrase search results.

If you don't do the upgrade described in [NXP-5689](https://jira.nuxeo.com/browse/NXP-5689), you'll get the following error message:

```sql
Cannot use phrase search in fulltext compatibilty mode. Please upgrade the fulltext table: ...
```

### Directories

Directories with auto-incremented columns must be upgraded, as the mechanism for auto-increment has been changed to be more robust. Please follow the [NXP-7124 upgrade notes](https://jira.nuxeo.com/browse/NXP-7124) if you have auto-incremented columns (there aren't any in a default Nuxeo installation).

## Code Migration

Nuxeo 5.5 is mainly backward compatible with Nuxeo 5.4.2\. If you have any problems, you can contact Nuxeo Support.

### Automation

Changes in Nuxeo Automation: there was a Java package renaming from `org.nuxeo.ecm.automation.client.jaxrs.model` to `org.nuxeo.ecm.automation.client.model`.

### Nuxeo Theme

Nuxeo Theme service has been extended so that you can now contribute page styles in a plain CSS stylesheet.
The page layouts are still managed by the Theme engine using an XML description, but all CSS information is now externalized to CSS stylesheets that can manage flavors (pretty much as with LessCSS).

*   [Theme documentation page]({{page space='nxdoc55' page='theme'}})
*   [Migrating a custom theme]({{page space='nxdoc55' page='migrating-my-customized-theme'}})

### Tasks

Until 5.5, the Task system was directly bound to JBPM.
Starting with 5.5, a new TaskService is available and uses VCS to store tasks.
This new TaskService is a first step towards the integration of Content Routing as the default Workflow engine in DM.

Migration should be 100% transparent:

*   the Task Operations have not changed,
*   REST APIs are maintained,
*   Tasks created in jBPM and not directly associated to a process will be automatically migrated upon first access,
*   jBPM Tasks are still accessible via the new TaskService,
*   the jBPM task API is maintained.

### Relations

The new default configuration takes care about compatibility so that if you have existing relations in Jena graph you will still be able to transparently access them.

{{! /multiexcerpt}}