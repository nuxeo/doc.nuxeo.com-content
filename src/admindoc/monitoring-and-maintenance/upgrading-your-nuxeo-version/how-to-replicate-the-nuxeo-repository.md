---
title: How to Replicate the Nuxeo Repository
labels:
    - replication
toc: true
confluence:
    ajs-parent-page-id: '16810051'
    ajs-parent-page-title: Upgrading your Nuxeo Version
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: How+to+Replicate+the+Nuxeo+Repository
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC58/How+to+Replicate+the+Nuxeo+Repository
    page_id: '16810016'
    shortlink: IIAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/IIAAAQ'
    source_link: /display/ADMINDOC58/How+to+Replicate+the+Nuxeo+Repository
history:
    - 
        author: Ronan Daniellou
        date: '2015-10-13 15:38'
        message: eleted link to nuxeo book which is not available any more
        version: '28'
    - 
        author: Ronan Daniellou
        date: '2015-10-13 14:44'
        message: "Fixes link \"How to replicate the Nuxeo repository\uFEFF\""
        version: '27'
    - 
        author: Ronan Daniellou
        date: '2015-10-13 14:42'
        message: >-
            Moved section about 'Nuxeo replication' from same page FT, to this
            5.8 page (version of deprecation)
        version: '26'
    - 
        author: Solen Guitter
        date: '2013-10-17 14:18'
        message: ''
        version: '25'
    - 
        author: Julien Carsique
        date: '2011-06-28 14:57'
        message: Migrated to Confluence 4.0
        version: '24'
    - 
        author: Julien Carsique
        date: '2011-06-28 14:57'
        message: ''
        version: '23'
    - 
        author: Julien Carsique
        date: '2011-06-28 14:56'
        message: ''
        version: '22'
    - 
        author: Julien Carsique
        date: '2011-05-18 11:18'
        message: update status about NXP-3826
        version: '21'
    - 
        author: Thierry Martins
        date: '2011-05-03 15:32'
        message: ''
        version: '20'
    - 
        author: Thierry Martins
        date: '2011-05-03 15:32'
        message: ''
        version: '19'
    - 
        author: Julien Carsique
        date: '2011-04-05 19:32'
        message: ''
        version: '18'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '17'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:27'
        message: ''
        version: '16'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:24'
        message: ''
        version: '15'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:14'
        message: ''
        version: '14'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:14'
        message: ''
        version: '13'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:10'
        message: ''
        version: '12'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:55'
        message: ''
        version: '11'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:51'
        message: ''
        version: '10'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:11'
        message: ''
        version: '9'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:05'
        message: ''
        version: '8'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:21'
        message: ''
        version: '7'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:01'
        message: ''
        version: '6'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:39'
        message: ''
        version: '5'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:23'
        message: ''
        version: '4'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:18'
        message: ''
        version: '3'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:12'
        message: ''
        version: '2'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:00'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

The system replication feature aims at cloning entire collections of data existing in a Nuxeo system. Consequently the clone is importable in another system leading to a complete replication of the system.

Such feature is obviously an important gain because it allows:

*   A complete backup of the system,
*   A complete data migration,
*   Replication of complex systems.

The feature is in fact an export &ndash; import tool. Three projects are designed to accomplish the objectives:

*   A common module,
*   An export module and
*   A import module.

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

The export module allows migration from older storages to current supported Nuxeo deployment.

In this current stage, only the documentary base is replicated. The relations, vocabularies, users replications are left for later implementation. That because:

*   Relations are stored usually in Jena storage: this can be moved as it is. As long as replication preserves the document ID the relations can be moved independently.

*   Vocabularies are also stored in directory structures which can be moved independently.

*   Users and groups are usually stored outside the Nuxeo repository (LDAP) which supposedly remain the same. If it is not the case, the customer needs to previously ensure the same user / groups structure is in place.

Another important constraint is that the import on H2 database could crash.

The resume feature is not yet implemented.

The selection of a part of repository to be exported, respectively imported is not yet implemented.

More can be found at [http://doc.nuxeo.org/5.2/books/nuxeo-book/html-single/#admin-replication](http://doc.nuxeo.org/5.2/books/nuxeo-book/html-single/#admin-replication).

The export and import services are made available either though JSF UI or through a MBean visible in JMX console. The UI is available only if the web component is also deployed. The feature code is currently located in addon project nuxeo-platform-replication (as also nuxeo-platform-importer feature, which is used inside replication). In order to have it deployed the following JARs needs to be deployed:

*   Export:

    *   `nuxeo-platform-replication-common-api-$version.jar&nbsp;`
    *   `nuxeo-platform-replication-common-core-$version.jar&nbsp;`
    *   `nuxeo-platform-replication-exporter-api-$version.jar`
    *   `nuxeo-platform-replication-exporter-core-$version.jar`
    *   `nuxeo-platform-replication-exporter-web-$version.jar`
    *   `nuxeo-platform-replication-exporter-mbean-5.1.6.sar (only for 5.1.6)` `with applicable versions: 5.1.6, 5.3.0, 5.3.2, 5.4.2`

*   Import:

    *   `nuxeo-platform-importer-core-$version.jar`
    *   `nuxeo-platform-replication-common-api-$version.jar`
    *   `nuxeo-platform-replication-common-core-$version.jar`
    *   `nuxeo-platform-replication-importer-api-$version.jar`
    *   `nuxeo-platform-replication-importer-core-$version.jar`
    *   `nuxeo-platform-replication-importer-web-$version.jar` `with applicable versions: 5.2.1-SNAPSHOT, 5.3.0, 5.3.2, 5.4.2`

## Export Instructions &ndash; JSF UI

The link &ldquo;Export&rdquo; is present in the top list of actions. The page allows selecting the destination of the archive. The exported artifacts are stored here, so enough space must be ensured.

Once the export launched (clicking once on the link &ldquo;Export&rdquo;) the page displays the progress, updating the number of documents exported in top of the page. At the end of export, status &ldquo;Done&rdquo; is displayed.

Please be patient and don't press twice the link.

Also, the status and information about the export can be seen in the server log (see below).

## Export Instructions &ndash; JMX Console MBean

The beans interface can be found in JMX console, under the &ldquo;nx&rdquo; section, as service &ldquo;Exporter&rdquo; on 5.1.6, respectively &ldquo;ExporterService&rdquo; on 5.2.&nbsp; The method &ldquo;export&rdquo; requires two parameters: the repository name (usually &ldquo;default&rdquo;) and the path to save the archive (the third boolean one is not effective).

For the results, watch the server logs (see below).

## Import instructions &ndash; JSF UI

The link &ldquo;Import&rdquo; is present in the top list of actions. The page allows selecting the source of the archive.

Once the import launched (pressing once on the link &ldquo;Import&rdquo;) the page displays the progress, updating the number of documents imported in top of the page. At the end of import, status &ldquo;Done&rdquo; is displayed.

Please log out and log in in order to refresh the view.

Please be patient and don't press twice the link.

Also, the status and information about the import can be seen in the server log.

## Import Instructions &ndash; JMX Console MBean

Release 5.2 benefits the existence of MBeans. The beans interface can be found in JMX console, under the &ldquo;nx&rdquo; section, as service &ldquo;ImporterService&rdquo;.&nbsp; The method &ldquo;importDocuments&rdquo; requires one parameter: the path to save the archive.
For the results, watch the server logs.

The export or import results are best viewed in the logging system, as configured in JBoss. Attention: the level of logging for replication tool need to be at least INFO to see the summary. The summary contains

*   The number of documents attempted to be exported,
*   The type of errors encountered, each one with,
*   A short description,
*   The list of documents in fault.
    An example of how this summary looks:

    ```
    15:41:08,200 INFO [ExporterReporter] Summary of export action
    15:41:08,200 INFO [ExporterReporter] 108005 documents attempted to export
    15:41:08,200 INFO [ExporterReporter] time elapsed: 45 minutes, 48 seconds and 38 milliseconds, velocity: 39.30
    15:41:08,200 INFO [ExporterReporter]   2 documents are missing a version.
    15:41:08,200 INFO [ExporterReporter]   They are still available for import with no versions attached.
    15:41:08,200 INFO [ExporterReporter]     version <unknown> for document /home/user/export/Documentary Base/Usual documents/default-domain/sections/sectiunea/notade_1257254138886
    15:41:08,200 INFO [ExporterReporter]     version <unknown> for document /home/user/export/Documentary Base/Usual documents/default-domain/sections/sectiunea/notades_1257254164645
    15:41:08,200 INFO [ExporterReporter]   1 documents are missing a blob file.
    15:41:08,200 INFO [ExporterReporter]   Still they are available for import with a fake blob file instead.
    15:41:08,200 INFO [ExporterReporter]     95d1c8b2.blob for document /home/user/export/Documentary Base/Usual documents/default-domain/workspaces/deee/filefile

    ```

    or if no error was recorded the message below is displayed:

    ```
    Operation completed with no errors recorded.

    ```

## Exporting

The following errors are possible:

*   unknown system error, with the message

    ```
    <# of documents> documents yields unexpected error.
    Their status is undefined from the exporter perspective.

    ```

    A number of documents exported ended in error. It can't be told if they are available for import or not. Logs need to be consulted for more details.

*   document structure is corrupted, with the message

    ```
    <# of documents> documents are compromised.
    They couldn't be exported. Check log for more details.

    ```

    A number of documents have the XML structure corrupted and can't be recovered. These documents can't be exported / imported.

*   missing children / versions, with the message

    ```
    for <# of documents> documents children are not available.
    The children couldn't be read: they are not listed nor exported.

    ```

    respectively

    ```
    for <# of documents> documents versions are not available.
    The versions couldn't be read: they are not listed nor exported.

    ```

    These documents were searched for children / versions, but due to errors reading, the lists couldn't be retrieved. Obviously, the children / versions (is any) are not registered for export and not attempted to be exported. Well, at least not from this try, but maybe as version published, or some other situations.

*   a particular version is missing, with the message

    ```
    <# of documents> documents are missing a version.
    They are still available for import with no versions attached.

    ```

    Usually, for various documents (proxy or usual documents) a version is registered but can't be found. The export treats the document as no version attached (the import will act accordingly).

*   head of a version is missing, with the message

    ```
    <# of documents> versions are orphans.
    They are still available for import with no live document attached.

    ```

    The versions are exported, but no live document is found. Well, the versionned documents will be available (as published versions for instance) but with no living head.

*   blobs are missing, with the message

    ```
    <# of documents> documents are missing a blob file.
    Still they are available for import with a fake blob file instead.

    ```

    The documents are exported with a fake blob file instead the expected one. The fake blob is a text file containing "The original blob could not be found, this is a fake replacement one."

    {{#> callout type='note' }}

    The mime type and file name are not modified.

    {{/callout}}

## Importing

The following errors are possible:

*   unknown system error, with the message

    ```
    <# of documents> documents yields unexpected error.
    Their status is undefined from the importer perspective.

    ```

    A number of documents imported ended in error. It can't be told if they are available for import or not. Logs needs to be consulted for more details.

*   document structure is corrupted, with the message

    ```
    <# of documents> documents are compromised.
    They are imported but as empty documents - including the title.

    ```

    A number of documents have the XML structure corrupted and can't be recovered. These documents were imported, but with no schemes or data inside.

*   repository import of a document failed, with the message

    ```
    <# of documents> documents failed to be cloned in repository.
    They couldn't be imported. Check log for more details.

    ```

    The atomic operation of importing the document in repository failed (because wrong configuration of repository / available types; because the exported document structure is corrupted or obsolete, etc). The import can't be performed.

*   applying the custom schema change failed, with the message

    ```
    <# of documents> documents custom schema update failed.
    The documents are imported as they are, without any custom change.

    ```

    The custom defined schema change was applied but it threw exception. The changes were discarded and the initial document structure is imported instead.

*   document type denied to be imported, with the message

    ```
    <# of documents> documents were rejected based on the type selection.
    The documents are not imported.

    ```

    The documents were not imported as they are denied by type choice to be imported.

*   the ACL couldn't be applied on a document, with the message

    ```
    <# of documents> documents failure to update the ACL system.
    The documents are imported and preserved with default security rights.

    ```

    The documents were imported with no local ACL changes.

1.  The export facility was tested and proved working fine on 5.1.6 and 5.2 servers with various backend storages (JCR, H2, PostgreSQL). The import was tested on 5.2 only with PostgreSQL backend. It is known that H2 doesn't support the import. The error thrown is timeout trying to lock a table. Nor JCR supports the import, as the node ID can't be created voluntarily in JCR system.
2.  When exporting proxies, the targeted documents are also exported, increasing redundantly the size of archive: [http://jira.nuxeo.org/browse/NXP-3825](http://jira.nuxeo.org/browse/NXP-3825).
3.  Sometimes the UI could crash after or during the import, because the documents are changed massively in repository. Just log in again.
4.  The visual reports are sometime broken. The data recorded in log are the one to be considered as real.

## Other import tools

You can also have a look at the&nbsp;[https://github.com/nuxeo/nuxeo-platform-replication](https://github.com/nuxeo/nuxeo-platform-replication)&nbsp;which is a Nuxeo replication tool that uses internally the&nbsp;`nuxeo-importer-core`&nbsp;module. For more details about Nuxeo replication have a look at&nbsp;[How to replicate the Nuxeo repository]({{page space='ADMINDOC58' page='How to+Replicate+the+Nuxeo+Repository'}}).