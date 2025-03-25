---
title: MySQL
description: Nuxeo Platform supports MySQL, read more about its configuration.
review:
    comment: ''
    date: '2025-03-18'
    status: ok
labels:
    - database
    - kleturc
    - mysql
    - multiexcerpt-include
toc: true
confluence:
    ajs-parent-page-id: '3342340'
    ajs-parent-page-title: Database Configuration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: MySQL
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/MySQL'
    page_id: '19235917'
    shortlink: TYQlAQ
    shortlink_source: 'https://doc.nuxeo.com/x/TYQlAQ'
    source_link: /display/NXDOC/MySQL
tree_item_index: 300
---
The Nuxeo Platform supports the following MySQL version:

{{{multiexcerpt 'MySQL-supported' page='Compatibility Matrix'}}}

## Configuration

To configure Nuxeo to connect to a MySQL database:

1. Install the [nuxeo-mysql-package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-mysql-package) package. This package:

   - Includes the **MySQL JDBC driver**.
   - Enables the `mysql` template in the `nuxeo.conf` file.

2. [Configure the database connection]({{page page='connecting-nuxeo-to-the-database'}}#configuring-database-connection-from-nuxeoconf) from the nuxeo.conf file.

### Grants

Since Nuxeo 8.1, Nuxeo needs access to the `information_schema.routines` table to be able to determine if stored procedures need to be upgraded. All users have read access to this table, but Nuxeo needs to be able to write the stored procedures:

```sql
SET GLOBAL log_bin_trust_function_creators = 1;
```

### Connections

Because MySQL by default likes to drop connections after a short idle time, if you don't use a datasource pool configuration that always checks for valid connections Nuxeo Platform may unexpectedly use a closed connection and this can cause various errors.

Therefore we strongly suggest that you configure MySQL to never drop idle connections, by using a huge value for [wait_timeout](http://dev.mysql.com/doc/refman/5.5/en/server-system-variables.html#sysvar_wait_timeout).

## Recent versions

MySQL 5.6 and MySQL 5.7 compatibility needs an update in the ROW_FORMAT used for the tables that my have large row sizes (see [this](http://dev.mysql.com/doc/refman/5.6/en/innodb-row-format-dynamic.html) for more). This is not yet automatically done by Nuxeo.

## Limitations

If you choose MySQL for your Nuxeo project, you should know that in the past, we have encountered some limitations that could impact your user experience.

### Limitations That Impact Functionality

*   Prior to MySQL 5.6.4, MySQL did not have a datetime data type with a precision less than 1 second ([reference](http://dev.mysql.com/doc/refman/5.6/en/fractional-seconds.html)). Nuxeo now makes use of this high-resolution data type but this wasn't possible before.
*   Prior to MySQL 5.6, configuration of fulltext features required external plugins to change things like stop words or stemming rules ([reference](http://dev.mysql.com/doc/refman/5.5/en/fulltext-stopwords.html)). Since MySQL 5.6 this is not a problem anymore ([reference](http://dev.mysql.com/doc/refman/5.6/en/fulltext-stopwords.html)).
*   It is not possible to get proper relevance ranking for boolean full-text results, or to normalize the relevance between 0 and 1\. This can lead to imprecise fulltext results.
*   MySQL has a 64 KB row size limit, which means that it is not possible to put more than a few long `VARCHAR()` columns in a table or a schema. This means any custom schemas created for Nuxeo have to be carefully defined to not contain too many string fields.
    **Note:** MySQL is not alone in having row size limitations, and it is possible to use a `TEXT`/`CLOB` column to work around the size limit by specifying the field as `<field type="largetext">`; see [NXP-3993](http://jira.nuxeo.com/browse/NXP-3993).)
*   In MySQL, equality tests for strings are case-insensitive. This means that some custom application queries may confuse uppercase and lowercase.

### Limitations That Impact Performance

*   The lack of array datatypes in the stored procedures language prevented us from implementing optimizations related to descendants/ancestors checks and to security checks. This means that large data sets will have problems deleting documents and doing security checks efficiently.
*   Triggers are not activated by cascaded foreign key actions ([reference](http://dev.mysql.com/doc/refman/5.5/en/innodb-foreign-key-constraints.html)).
*   Foreign key on delete cascade operations are limited to 15 levels deep, which means that recursive deletion of folders that deep cannot be done by the database alone ([reference](http://dev.mysql.com/doc/refman/5.5/en/innodb-foreign-key-constraints.html)).
*   Full-text operations have concurrent behavior problems when there are writes due to MyISAM locking issues. This means that concurrent updates to different documents may end up causing user-visible errors. At this time, the locking impact is unknown for MySQL 5.6 and InnoDB fulltext tables.

### Other Limitations

*   MySQL loses connections unexpectedly, which requires configuring `;autoReconnect=true` as a workaround, which could cause transaction problems. (It's better to configure MySQL with an near-infinite [wait_timeout](http://dev.mysql.com/doc/refman/5.5/en/server-system-variables.html#sysvar_wait_timeout)).
*   Prior to MySQL 5.6, full-text support was not transactional as full-text required MyISAM tables ([reference](http://dev.mysql.com/doc/refman/5.5/en/fulltext-search.html)). Since MySQL 5.6 this is not a problem anymore, as InnoDB tables can be used ([reference](http://dev.mysql.com/doc/refman/5.6/en/fulltext-search.html)). See the InnoDB Full-text Search in MySQL 5.6 articles: [part 1](http://www.mysqlperformanceblog.com/2013/02/26/myisam-vs-innodb-full-text-search-in-mysql-5-6-part-1/), [part 2](http://www.mysqlperformanceblog.com/2013/03/04/innodb-full-text-search-in-mysql-5-6-part-2-the-queries/), [part 3](http://www.mysqlperformanceblog.com/2013/07/31/innodb-full-text-search-in-mysql-5-6-part-3/).

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related topics'}}

- [Connecting Nuxeo to the Database]({{page page='connecting-nuxeo-to-the-database'}})
- [How to Estimate Volume Usage]({{page page='how-to-estimate-volume-usage'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
