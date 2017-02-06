---
title: Upgrade from 5.4.1 to 5.4.2 with Oracle
review:
    comment: ''
    date: '2017-01-20'
    status: ok
labels:
    - lts2016-ok
    - multiexcerpt
confluence:
    ajs-parent-page-id: '3343538'
    ajs-parent-page-title: Upgrading the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Upgrade+from+5.4.1+to+5.4.2+with+Oracle
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/Upgrade+from+5.4.1+to+5.4.2+with+Oracle
    page_id: '14255766'
    shortlink: lobZ
    shortlink_source: 'https://doc.nuxeo.com/x/lobZ'
    source_link: /display/NXDOC/Upgrade+from+5.4.1+to+5.4.2+with+Oracle
tree_item_index: 800
version_override:
    'LTS 2015': 710/admindoc/upgrade-from-541-to-542-with-oracle
    '6.0': 60/admindoc/upgrade-from-541-to-542-with-oracle
    '5.8': 58/admindoc/upgrade-from-541-to-542-with-oracle
history:
    -
        author: Solen Guitter
        date: '2015-04-14 15:04'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2013-07-02 12:28'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2013-07-02 12:28'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-07-02 10:56'
        message: ''
        version: '1'

---
{{! multiexcerpt name='5.4.2-oracle-upgrade-page'}}

If you were using Nuxeo DM 5.3.2 or later with Oracle and ACL optimizations enabled, you need to update an index before plugging your database to Nuxeo DM 5.4.2.

```
SELECT index_name FROM USER_INDEXES WHERE table_name LIKE 'READ_ACLS';

```

Get the index name, result of the previous query, which should look like "SYS_C00XXXX"

Then run the following statement:

```
ALTER INDEX "SYS_C00XXXX" RENAME TO "ACLR_ACL_ID_IDX";

```

Now you can start Nuxeo DM 5.4.2 which will rename the table READ_ACLS to ACLR and the previous index will be ready to work with this new configuration.

{{! /multiexcerpt}}
