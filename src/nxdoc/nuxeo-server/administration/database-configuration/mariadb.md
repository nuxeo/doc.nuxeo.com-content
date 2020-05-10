---
title: MariaDB
review:
    comment: ''
    date: '2017-12-15'
    status: ok
labels:
    - lts2016-ok
    - database
    - kleturc
    - mariadb
    - multiexcerpt-include
    - lts2017-ok
toc: true
tree_item_index: 500

---
The Nuxeo Platform supports the following MariaDB version:

{{{multiexcerpt 'MariaDB-supported' page='Compatibility Matrix'}}}

## Configuration

For Nuxeo versions up to and including **LTS 2016**, configuration of MariaDB server is exactly the same as for [MySQL]({{page page='mysql'}}), using the `mysql` template, which includes the standard **MySQL JDBC driver**.

From **Nuxeo LTS 2017**+, the configurations remain the same except you will require the `mariadb` template, which includes the **MariaDB JDBC driver**.

For all other configuration information, please refer to the [MySQL configuration page]({{page page='mysql'}}).

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related topics'}}

- [Connecting Nuxeo to the Database]({{page page='connecting-nuxeo-to-the-database'}})
- [HOWTO: Estimate Volume Usage]({{page page='how-to-estimate-volume-usage'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
