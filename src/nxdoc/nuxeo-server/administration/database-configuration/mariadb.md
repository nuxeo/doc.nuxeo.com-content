---
title: MariaDB
review:
    comment: ''
    date: '2025-03-18'
    status: ok
labels:
    - database
    - kleturc
    - mariadb
    - multiexcerpt-include
toc: true
tree_item_index: 400

---
The Nuxeo Platform supports the following MariaDB version:

{{{multiexcerpt 'MariaDB-supported' page='Compatibility Matrix'}}}

## Configuration

To configure Nuxeo to connect to a MariaDB database:

1. Install the [nuxeo-mariadb-package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-mariadb-package) package. This package:

   - Includes the **MariaDB JDBC driver**.
   - Enables the `mariadb` template in the `nuxeo.conf` file.

2. [Configure the database connection]({{page page='connecting-nuxeo-to-the-database'}}#configuring-database-connection-from-nuxeoconf) from the nuxeo.conf file.

For all other configuration information, please refer to the [MySQL configuration page]({{page page='mysql'}}).

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related topics'}}

- [Connecting Nuxeo to the Database]({{page page='connecting-nuxeo-to-the-database'}})
- [How to Estimate Volume Usage]({{page page='how-to-estimate-volume-usage'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
