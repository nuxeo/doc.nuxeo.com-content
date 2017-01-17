---
title: Upgrade from 5.3.0 to 5.3.1
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
    canonical: Upgrade+from+5.3.0+to+5.3.1
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Upgrade+from+5.3.0+to+5.3.1'
    page_id: '3343543'
    shortlink: twQz
    shortlink_source: 'https://doc.nuxeo.com/x/twQz'
    source_link: /display/NXDOC/Upgrade+from+5.3.0+to+5.3.1
tree_item_index: 1200
version_override:
    'LTS 2015': 710/admindoc/upgrade-from-530-to-531
    '6.0': 60/admindoc/upgrade-from-530-to-531
    '5.8': 58/admindoc/upgrade-from-530-to-531
history:
    -
        author: Manon Lumeau
        date: '2016-04-21 13:59'
        message: ix link
        version: '29'
    -
        author: Solen Guitter
        date: '2015-12-03 10:57'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2013-07-02 11:27'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2012-05-22 17:39'
        message: Migrated to Confluence 4.0
        version: '26'
    -
        author: Solen Guitter
        date: '2012-05-22 17:39'
        message: ''
        version: '25'
    -
        author: Julien Carsique
        date: '2011-06-15 14:00'
        message: ''
        version: '24'
    -
        author: Julien Carsique
        date: '2011-06-15 11:29'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2011-03-16 15:54'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2011-03-16 15:54'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2011-03-16 15:43'
        message: format
        version: '20'
    -
        author: Solen Guitter
        date: '2011-03-16 15:39'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2010-11-12 11:59'
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
{{! multiexcerpt name='5.3.0-to-5.3.1-upgrade-page'}}

Nuxeo DM 5.3.1 is fully backward compatible with Nuxeo DM 5.3.0 GA, hence upgrade is painless and requires no data migration or code change.

Follow these steps to upgrade.

&nbsp;

## 1\. Get the differences between a vanilla Nuxeo DM 5.3.0 and your custom Nuxeo

If you have specific configuration, you'll need to know what files were changed, in order to apply them onto the default one. Here are the folders and files you have to watch:

*   `$JBOSS/server/default/deploy/nuxeo.ear/config/` => main configuration elements of Nuxeo
*   `$JBOSS/server/default/deploy/`nuxeo.ear/datasources/ => configuration of data sources
*   `$JBOSS/server/default/conf/` => specific configuration of Jboss
*   `$JBOSS/server/default/lib/` => specific libraries used by your project (JDBC drivers for instance)
*   `$JBOSS/server/default/deploy/mail-service.xml` => configuration of the mail service
*   `$JBOSS/server/default/deploy/nuxeo.ear/OSGI-INF/templates/web.xml`

## 2\. Backup your data

*   Follow this [documentation]({{page page='backup-and-restore'}})

## 3\. Apply the differences

*   From the differences you got at step 1, apply them on the Nuxeo DM 5.3.1 you've downloaded
*   Copy your specific plugins into `$JBOSS/server/default/deploy/nuxeo.ear/plugins/`

## 4\. Restore data

*   Copy the data folder (server/default/data) to Nuxeo DM 5.3.1

## Upgrades notes

### Groups stored in SQL directory

If you were using groups stored in the SQL directory, you have to consider that the "group2group" table must be fixed as its columns were inverted. childGroupId should be populate with the content of parentGroupId and vice-versa. It is related to [NXP-4401](https://jira.nuxeo.org/browse/NXP-4401)

Before applying the command below, you have to check that your SQL configuration has changed. This will be the case if you get the new **default-sql-directories-bundle.xml** or if your patch doesn't change the **tableReference** attribute defined in the new **default-sql-directories-bundle.xml**
The attribute should look like:

```
<tableReference field="subGroups" directory="groupDirectory"
  table="group2group" sourceColumn="parentGroupId"
  targetColumn="childGroupId" schema="group2group" />

```

In that case, run the following query for PostgreSQL to update the table:

```
UPDATE group2group SET "childGroupId" = "parentGroupId", "parentGroupId" = "childGroupId";

```

### OpenSocial

*   The `opensocial.properties` file format has been changed in 5.3.1, so you may need to use the one provided in 5.3.1 rather that trying to upgrade the one used in 5.3.

*   For a dashboard initialized in 5.3.0, existing OpenSocial gadgets need to be migrated: see [NXP-4923](https://jira.nuxeo.org/browse/NXP-4923) for script and procedure.

### Indexing

There are no impacting changes on the storage structure.
If you want to leverage the new default indexing configuration (separated full-text index for title and description), you will have to update your repository configuration (or use the one provided with 5.3.1) and build the new indexes.

### For developers

If you use a custom Nuxeo assembly to package your Nuxeo distribution with your plugins, you will need to modify your existing assembly.

The new `nuxeo-distribution` system is simpler to configure and extend than the previous one.

See [here](http://www.nuxeo.org/xwiki/bin/view/FAQ/nuxeo-distribution) and [here](http://www.nuxeo.org/xwiki/bin/view/FAQ/nuxeo-distribution-tools) for more details.

{{! /multiexcerpt}}
