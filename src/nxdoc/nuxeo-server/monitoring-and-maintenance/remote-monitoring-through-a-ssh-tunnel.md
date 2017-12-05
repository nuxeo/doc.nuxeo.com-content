---
title: Remote Monitoring Through a SSH Tunnel
review:
    comment: ''
    date: '2016-12-20'
    status: ok
labels:
    - lts2016-ok
    - monitoring
    - ssh
    - monitoring-component
    - bdelbosc
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '950318'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Remote+Monitoring+Through+a+SSH+Tunnel
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Remote+Monitoring+Through+a+SSH+Tunnel'
    page_id: '10387597'
    shortlink: jYCe
    shortlink_source: 'https://doc.nuxeo.com/x/jYCe'
    source_link: /display/NXDOC/Remote+Monitoring+Through+a+SSH+Tunnel
tree_item_index: 600
version_override:
    LTS 2015: 710/admindoc/remote-monitoring-through-a-ssh-tunnel
    '6.0': 60/admindoc/remote-monitoring-through-a-ssh-tunnel
    '5.8': 58/admindoc/remote-monitoring-through-a-ssh-tunnel
history:
    -
        author: Solen Guitter
        date: '2013-10-15 11:59'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2012-04-18 10:40'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Solen Guitter
        date: '2012-04-18 10:40'
        message: Moved page in Admin doc and fixed steps format
        version: '4'
    -
        author: Solen Guitter
        date: '2012-04-18 10:40'
        message: ''
        version: '3'
    -
        author: Stéphane Lacoin
        date: '2012-04-17 16:19'
        message: ''
        version: '2'
    -
        author: Stéphane Lacoin
        date: '2012-04-17 15:22'
        message: ''
        version: '1'

---
At some time, you may need to monitor your server trough your SSH access. We assume you have a direct connection to your remote server host. If you're using a gateway, this works too, you just have to configure the right ports forwarding.

**Here is how to monitor your server through a SSH tunnel:**

1.  On server host, run `jstatd` with the privileges of the Nuxeo's user:

    <pre>jstatd -J-Djava.security.policy=jstat.permissions
    </pre>

2.  On your SSH connection, configure a local &ldquo;dynamic&rdquo; application-level port forwarding:

    <pre>ssh -D 6767 remote-server-host
    </pre>

3.  Run `jvisualvm` on your local host and in the network options, enable the manual proxy settings and configure a socks proxy:

    <pre>localhost:6767</pre>

4.  Now in `jvisualvm`, add a remote host for the `remote-server-host`.
    You should get the list of Java processes ran by Nuxeo's user remotely.
5.  Identify Nuxeo's Tomcat and launch a connection.

In the given `jstat` command line, we reference the Java security configuration file `jstat.permissions`. Here is its content:

<pre>grant codebase "file:${java.home}/../lib/tools.jar" {
    permission java.security.AllPermission;
};
</pre>
