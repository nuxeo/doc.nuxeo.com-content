---
title: Firewall Consideration
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '16809993'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Firewall+Consideration
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Firewall+Consideration'
    page_id: '16810005'
    shortlink: FYAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/FYAAAQ'
    source_link: /display/ADMINDOC58/Firewall+Consideration
history:
    - 
        author: Solen Guitter
        date: '2013-10-14 17:14'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2012-12-21 17:10'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2012-12-21 17:07'
        message: ''
        version: '3'
    - 
        author: Benoit Delbosc
        date: '2012-12-21 14:05'
        message: ''
        version: '2'
    - 
        author: Benoit Delbosc
        date: '2012-12-21 12:58'
        message: ''
        version: '1'

---
{{! multiexcerpt name='firewall-consideration-content'}}

Firewalls don't like inactive connection that stay open. Most of them will drop the connection silently, which will generate errors on connections pools like database, AJP or LDAP. Here are some advices to prevent this.

## Firewall Between Apache and Nuxeo in AJP Mode

If you are using mod_proxy_ajp, you can activate a TCP keep alive to prevent persistent connections to be dropped. This requires the usage of mod_proxy options "keepalive=on" and "flushpackets=on". You also need to configure the TCP keep alive delay using sysctl (`net.ipv4.TCP_keepalive_time`).

Refer to [mod_proxy](http://httpd.apache.org/docs/2.2/mod/mod_proxy.html) documentation for more information.

## Firewall Between Nuxeo and the Database

Since Nuxeo Platform 5.5.0, database pool can try to reconnect on invalid connection ([NXP-7528](https://jira.nuxeo.com/browse/NXP-7528)) but it is better to enable the keep alive on your database. For instance using PostgreSQL, this can be achieved with the following options:

<table><tbody><tr><th colspan="1">Option</th><th colspan="1">Value</th><th colspan="1">Description</th></tr><tr><td colspan="1">

<pre>tcp_keepalives_count</pre>

</td><td colspan="1">5</td><td colspan="1">Maximum number of TCP keepalive retransmits.</td></tr><tr><td colspan="1">

<pre>tcp_keepalives_idle</pre>

</td><td colspan="1">60</td><td colspan="1">Time between issuing TCP keepalives.</td></tr><tr><td colspan="1">

<pre>tcp_keepalives_interval</pre>

</td><td colspan="1">60</td><td colspan="1">Time between TCP keepalive retransmits.</td></tr></tbody></table>

## Firewall Between Nuxeo and LDAP

Here, there are [no keep alive alternative](http://docs.oracle.com/javase/jndi/tutorial/ldap/connect/config.html). You can simply disable the LDAP connection pool in the directory configuration.&nbsp;

{{! /multiexcerpt}}