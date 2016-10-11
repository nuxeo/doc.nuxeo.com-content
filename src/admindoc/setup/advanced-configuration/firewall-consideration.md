---
title: Firewall Consideration
review:
    comment: ''
    date: ''
    status: ok
labels:
    - proxy
    - database
    - lts2015-ok
    - firewall
    - ldap
confluence:
    ajs-parent-page-id: '27604662'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: Firewall+Consideration
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC710/Firewall+Consideration'
    page_id: '27604655'
    shortlink: rzalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/rzalAQ'
    source_link: /display/ADMINDOC710/Firewall+Consideration
history:
    - 
        author: Mathieu Guillaume
        date: '2015-12-08 11:54'
        message: ''
        version: '8'
    - 
        author: Mathieu Guillaume
        date: '2015-12-08 11:53'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-11-28 13:53'
        message: ''
        version: '6'
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

Firewalls don't like inactive connections that stay open. Most of them will drop the connection silently, which will generate errors on connections pools like database, AJP or LDAP. Here is some advice to prevent this.

## Firewall Between Apache and the Nuxeo Platform in AJP Mode

If you are using mod_proxy_ajp, you can activate a TCP keep alive to prevent persistent connections from being dropped. This requires the usage of mod_proxy options `keepalive=on` and `flushpackets=on`. You also need to configure the TCP keep alive delay using sysctl (`net.ipv4.TCP_keepalive_time`).

Refer to [mod_proxy](http://httpd.apache.org/docs/2.2/mod/mod_proxy.html) documentation for more information.

## Firewall Between the Nuxeo Platform and the Database

Database pool can try to reconnect on invalid connection ([NXP-7528](https://jira.nuxeo.com/browse/NXP-7528)) but it is better to enable the keep alive on your database. For instance using PostgreSQL, this can be achieved with the following options:

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Option</th><th colspan="1">Value</th><th colspan="1">Description</th></tr><tr><td colspan="1">

<pre>tcp_keepalives_count</pre>

</td><td colspan="1">5</td><td colspan="1">Maximum number of TCP keepalive retransmits.</td></tr><tr><td colspan="1">

<pre>tcp_keepalives_idle</pre>

</td><td colspan="1">60</td><td colspan="1">Time between issuing TCP keepalives.</td></tr><tr><td colspan="1">

<pre>tcp_keepalives_interval</pre>

</td><td colspan="1">60</td><td colspan="1">Time between TCP keepalive retransmits.</td></tr></tbody></table></div>

## Firewall Between the Nuxeo Platform and LDAP

Here, there are [no keep alive alternative](http://docs.oracle.com/javase/jndi/tutorial/ldap/connect/config.html). You can simply disable the LDAP connection pool in the directory configuration.&nbsp;

{{! /multiexcerpt}}

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [HTTP and HTTPS Reverse-Proxy Configuration]({{page page='http-and-https-reverse-proxy-configuration'}})
*   [Database]({{page page='database'}})
*   [Using a LDAP Directory]({{page space='nxdoc710' page='using-a-ldap-directory'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>