---
title: Upgrade from 5.1.6 with JCR + PostgreSQL to 5.2.0
review:
    comment: ''
    date: '2017-01-17'
    status: ok
labels:
    - lts2016-ok
    - multiexcerpt
confluence:
    ajs-parent-page-id: '3343538'
    ajs-parent-page-title: Upgrading the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: viewpage.action?pageId=3343541
    canonical_source: viewpage.action?pageId=3343541
    page_id: '3343541'
    shortlink: tQQz
    shortlink_source: 'https://doc.nuxeo.com/x/tQQz'
    source_link: /pages/viewpage.action?pageId=3343541
tree_item_index: 1300
version_override:
    'LTS 2015': 710/admindoc/upgrade-from-516-with-jcr-postgresql-to-520
    '6.0': 60/admindoc/upgrade-from-516-with-jcr-postgresql-to-520
    '5.8': 58/admindoc/upgrade-from-516-with-jcr-postgresql-to-520
history:
    -
        author: Solen Guitter
        date: '2013-07-02 11:42'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2012-05-22 17:39'
        message: Migrated to Confluence 4.0
        version: '22'
    -
        author: Solen Guitter
        date: '2012-05-22 17:39'
        message: ''
        version: '21'
    -
        author: Julien Carsique
        date: '2011-06-15 14:01'
        message: ''
        version: '20'
    -
        author: Julien Carsique
        date: '2011-05-06 14:59'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2011-03-03 14:59'
        message: link update
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
{{! multiexcerpt name='5.1.6-jcr-PostgreSQL-to-5.2.0-upgrade-page'}}

This article will help you to migrate your data from Nuxeo 5.1.6 to Nuxeo 5.2 in the case you are using JackRabbit with PostgreSQL as backend.

We assume that your Nuxeo 5.1.6 is installed in $JBOSS_516 directory and Nuxeo 5.2 in $JBOSS_52 and you have well configured your Nuxeo 5.2 to work with Jackrabbit/PSQL. 

The steps to migrate are:

*   Start an empty nuxeo 5.2 configured in JCR
    *   Customize a nuxeo 5.2 JCR with an **emtpy** database, created for the occasion.
    *   Start nuxeo 5.2 and log in
    *   shutdown nuxeo 5.2
*   copy the file $JBOSS_52/server/default/data/NXRuntime/repos/default/repository/nodetypes/custom_nodetypes.xml and keep it in a temporary location
*   keep either the directory $JBOSS_52/server/default/data/NXRuntime/repos/default/repository/namespaces/
*   remove $JBOSS_52/server/default/data
*   copy the data folder from $JBOSS_516/server/default/data to $JBOSS_52/server/default/data
*   copy the custom_nodetypes.xml file you kept to $JBOSS_52/server/default/data/NXRuntime/repos/default/repository/nodetypes/
*   change searchIndex class to org.nuxeo.ecm.core.repository.jcr.jackrabbit.SearchIndex in $JBOSS_52/server/default/data/NXRuntime/repos/default/workspaces/default/workspace.xml
*   remove the $JBOSS_52/server/default/data/NXRuntime/repos/default/workspaces/default/index folder to force JackRabbit to rebuild the indexes
*   update discrimator column in NXP_LOGS table to allow this value to be null
    *   alter table NXP_LOGS alter discriminator DROP not null
*   Here is the tricky part, customize the ns_idx.properties in the directory namespaces that you kept:

```
Compare the file $JBOSS_52/server/default/data/NXRuntime/repos/default/repository/namespaces/ns_idx.properties  with the one you kept from the namespaces directory.
They contain uri and an identifier, example : http://www.nuxeo.org/ecm/schemas/common/=19
Each identifier is unique!
You need to adapt the ns_idx.properties keeped in order that each uri keep is old identifier unchanged .

```

simple example :

$JBOSS_52/server/default/data/NXRuntime/repos/default/repository/namespaces/ns_idx.properties

```
http://www.nuxeo.org/ecm/schemas/common/=21
http://www.nuxeo.org/ecm/schemas/dublincore/=18
http://project.nuxeo.org/schemas/webengine/site/blog/post=19

```

$JBOSS_516/server/default/data/NXRuntime/repos/default/repository/namespaces/ns_idx.properties

```
http://www.nuxeo.org/ecm/schemas/common/=19
http://www.nuxeo.org/ecm/schemas/dublincore/=18

```

As you see in the 516 file, [http://www.nuxeo.org/ecm/schemas/common/](http://www.nuxeo.org/ecm/schemas/common/) was identified by 19, so we need to keep this identifier, but [http://project.nuxeo.org/schemas/webengine/site/blog/post](http://project.nuxeo.org/schemas/webengine/site/blog/post) is already identified by 19 so we will just switch the two identifiers.
Here is the new file :

```
http://www.nuxeo.org/ecm/schemas/common/=19
http://www.nuxeo.org/ecm/schemas/dublincore/=18
http://project.nuxeo.org/schemas/webengine/site/blog/post=21

```

*   remove the directory $JBOSS_52/server/default/data/NXRuntime/repos/default/repository/namespaces/
*   copy your namespace directory (With the customized ns_idx.properties) in $JBOSS_52/server/default/data/NXRuntime/repos/default/repository/namespaces/
*   finally adapt nuxeo 5.2 to use the 5.1.6 database.

Just for information, below are the changes you can make manually to update your custom_nodetypes.xml

Two main problems occurs are present in the node type definitions from Nuxeo 5.1.6:

*   the whole versioning features are not working : no document modification, no version increase, no reading of the previous versions, ...: this is due to the fact that `ecm:version` and `ecm:versionHistory` are not mixin type any more. Manually you can change these nodes and chose isMixin="true" to isMixin="false"
*   some document definitions have changed :
    *   Workspace type has two new supertypes: `ecmst:publish_ergo` and `ecmst:webcontainer`
    *   Forum, Thread and post types use now `ecmdt:Document` as supertype instead of `ecmnt:document`
    *   WikiPage and BlogPost types use `ecmmix:versionable` as supertype instead of `mix:versionable` 

Editing the custom_nodetypes file is not easy because you have to format this file (tidy -xml ...) to edit it. So we recommend to replace the old custom_nodetypes.xml by the new one, generated from a fresh Nuxeo 5.2 installation.

{{! /multiexcerpt}}
