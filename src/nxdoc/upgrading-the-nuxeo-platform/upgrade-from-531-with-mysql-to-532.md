---
title: Upgrade from 5.3.1 with MySQL to 5.3.2
labels:
    - lts2015-ok
    - multiexcerpt
confluence:
    ajs-parent-page-id: '3343538'
    ajs-parent-page-title: Upgrading the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Upgrade+from+5.3.1+with+MySQL+to+5.3.2
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/Upgrade+from+5.3.1+with+MySQL+to+5.3.2
    page_id: '7209494'
    shortlink: FgJu
    shortlink_source: 'https://doc.nuxeo.com/x/FgJu'
    source_link: /display/NXDOC/Upgrade+from+5.3.1+with+MySQL+to+5.3.2
history:
    - 
        author: Solen Guitter
        date: '2013-07-02 11:21'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-05-22 17:39'
        message: Migrated to Confluence 4.0
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-05-22 17:39'
        message: ''
        version: '7'
    - 
        author: Julien Carsique
        date: '2011-06-15 13:59'
        message: ''
        version: '6'
    - 
        author: Julien Carsique
        date: '2011-06-15 12:19'
        message: ''
        version: '5'
    - 
        author: Julien Carsique
        date: '2011-06-15 12:18'
        message: ''
        version: '4'
    - 
        author: Julien Carsique
        date: '2011-06-15 11:33'
        message: ''
        version: '3'
    - 
        author: Thierry Martins
        date: '2011-05-06 18:18'
        message: ''
        version: '2'
    - 
        author: Thierry Martins
        date: '2011-05-06 17:33'
        message: ''
        version: '1'

---
{{! multiexcerpt name='5.3.1-MySQL-to-5.3.2-upgrade-page'}}

### Why a migration script is needed

A database structure change was introduced with Nuxeo 5.3.2 to fix query with operator IN (for more details, see [https://jira.nuxeo.com/browse/NXP-5183](https://jira.nuxeo.com/browse/NXP-5183) ).

Below is an example of structure change:

```
CREATE TABLE `common` (
 `id` varchar(36) NOT NULL,
 `icon` varchar(4000) DEFAULT NULL,
 `icon-expanded` varchar(4000) DEFAULT NULL,
 `size` bigint(20) DEFAULT NULL,
 PRIMARY KEY (`id`),
 KEY `common_id_hierarchy_fk` (`id`),
 CONSTRAINT `common_id_hierarchy_fk` FOREIGN KEY (`id`) REFERENCES `hierarchy` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1

```

```
CREATE TABLE `common` (
 `id` varchar(36) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL DEFAULT '',
 `icon` varchar(4000) DEFAULT NULL,
 `icon-expanded` varchar(4000) DEFAULT NULL,
 `size` bigint(20) DEFAULT NULL,
 PRIMARY KEY (`id`),
 KEY `common_id_hierarchy_fk` (`id`),
 CONSTRAINT `common_id_hierarchy_fk` FOREIGN KEY (`id`) REFERENCES `hierarchy` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1

```

See the part `CHARACTER SET latin1COLLATE latin1_bin` that was added for the column `id`.

As a consequence, the columns (mainly id) used for foreign key don't have the same definition and it is no more possible to add new constraints, needed by the features of Nuxeo DM. trying to upgrade to Nuxeo DM 5.4.x will raise this error

```
java.sql.SQLException: Can't create table 'nuxeodb.#sql-5f31_37d' (errno: 150)
```

### Steps for the migration

You need to follow the steps below to migrate your database structure:

*   download the script upgradeMySQL.sh attached to this page

*   edit these properties in the file upgradeMySQL.sh

    ```
    DB_HOST=localhost
    DB_PORT=3306
    DB_NAME=nuxeo
    DB_USER=user
    DB_PWD=password

    ```

*   change permission for the script to run it

    ```
    $ chmod u+x upgradeMySQL.sh
    ```

*   launch the script

    ```
    $ ./updateMySQL.sh
    ```

*   if everything is fine, you'll have a message to confirm the upgrade was done

    <pre>Database structure upgraded successfully</pre>

### Upgrade to Nuxeo DM 5.4.1

Now your database is upgraded, you can test it against Nuxeo DM 5.4.1
Once you've downloaded and unzipped it,

*   start it without editing anything: it's needed because you'll need to get the lastest hot fixes to make it work

    ```
    $ cd $NUXEO_HOME/bin
    $ ./nuxeoctl start

    ```

*   follow the wizard steps and register on Nuxeo Connect (needed to download Hot Fixes) if you don't have already an account
*   restart
*   log in using the default credentials
*   navigate to Nuxeo Admin Center > Update Center > Software updates tab
*   download and install all availables hot fixes (actually at least the three first ones)
*   stop the server

    ```
    $ ./nuxeoctl stop

    ```

*   edit the configuration file `nuxeo.conf`and set the database parameters

    ```
    nuxeo.templates=mysql
    nuxeo.db.name=nuxeodb
    nuxeo.db.user=user
    nuxeo.db.password=password
    nuxeo.db.host=localhost
    nuxeo.db.port=3306

    ```

*   restart the server

    ```
    $ ./nuxeoctl start

    ```

*   contemplate that all data are present :smile:

{{! /multiexcerpt}}

&nbsp;

&nbsp;