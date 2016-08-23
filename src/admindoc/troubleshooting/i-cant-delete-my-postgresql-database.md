---
title: I Can't Delete My PostgreSQL Database
labels:
    - postgresql
    - content-review-lts2015
confluence:
    ajs-parent-page-id: '27604698'
    ajs-parent-page-title: Troubleshooting
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: I+Can%27t+Delete+My+PostgreSQL+Database
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC710/I+Can%27t+Delete+My+PostgreSQL+Database
    page_id: '27604644'
    shortlink: pDalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/pDalAQ'
    source_link: /display/ADMINDOC710/I+Can%27t+Delete+My+PostgreSQL+Database
history:
    - 
        author: Solen Guitter
        date: '2014-04-16 17:59'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2014-04-16 17:58'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2014-04-16 17:57'
        message: ''
        version: '20'
    - 
        author: Julien Carsique
        date: '2010-10-20 17:36'
        message: Migrated to Confluence 4.0
        version: '19'
    - 
        author: Julien Carsique
        date: '2010-10-20 17:36'
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
        date: '2010-07-22 10:23'
        message: ''
        version: '15'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:13'
        message: ''
        version: '14'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:14'
        message: ''
        version: '13'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:09'
        message: ''
        version: '12'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:54'
        message: ''
        version: '11'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:51'
        message: ''
        version: '10'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:10'
        message: ''
        version: '9'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:05'
        message: ''
        version: '8'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:20'
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
        date: '2010-07-21 18:11'
        message: ''
        version: '2'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:00'
        message: ''
        version: '1'

---
{{! excerpt}}

When you try to delete your PostgreSQL database you may get an error:

{{! /excerpt}}

```
postgres=# DROP DATABASE nuxeo;
ERROR:  database "nuxeo" is being accessed by other users

```

If you're sure there's no other user connected, then it may be because PostgreSQL has a pending prepared transaction that's never been committed or rolled back, which should never happen except if the database is shut down in an unclean manner (machine crash). To check for this:

1.  Run:

    ```sql
    SELECT database, gid FROM pg_prepared_xacts;

    ```

2.  Depending on the number of results, follow one of the steps below.

    *   If you get a result, then for each transaction gid you must execute a `ROLLBACK` from the database having the problem:

        ```sql
        ROLLBACK PREPARED 'the_gid';

        ```

        For instance:

        ```sql
        nuxeo=# SELECT database, gid FROM pg_prepared_xacts;
         database | gid
        ----------+-----
         nuxeo | 131075_MS03ZjAwMDEzYTo0YTg5MjA5NzoxMDczMg==
        (1 row)
        nuxeo=# ROLLBACK PREPARED '131075_MS03ZjAwMDEzYTo0YTg5MjA5NzoxMDczMg==';
        ROLLBACK PREPARED

        ```

    *   If you have lots of transactions you can run this psql scripts:

        ```sql
        \t
        \a
        \o /tmp/remove-transactions.sql
        SELECT 'ROLLBACK PREPARED ''' || gid || ''';'  AS cmd
          FROM pg_prepared_xacts
          WHERE database=current_database();
        \o
        \i /tmp/remove-transactions.sql

        ```

* * *

&nbsp;