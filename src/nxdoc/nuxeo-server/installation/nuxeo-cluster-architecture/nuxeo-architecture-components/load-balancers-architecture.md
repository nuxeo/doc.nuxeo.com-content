---
title: Load Balancers
description:
labels:
    - deployment
    - bchauvin
    - architecture
    - cluster
    - content-review-lts2017
    - lts2019-ok
review:
    comment: ''
    date: '2021-03-10'
    status: ok
toc: true
tree_item_index: 100
---

## Concept

Load balancers are used to allocate the load between Nuxeo nodes. They can be configured to redirect particular queries to specific nodes. This can be interesting in the following use cases:
- When using Nuxeo Drive, to make sure that even during an unexpected activity peak, only specific nodes can possibly slow down, while keeping usual performances for the other activities.
- When using adapted hardware with nodes dedicated to heavy processing, such as video conversion.

Load balancing can be managed by software or hardware, but in all cases (even if you use Nuxeo as a bare server without a UI) the only constraint we ask for is to have a load balancer configured with sticky sessions.

## Recommendation

For high availability, **two load balancers are necessary**, with sticky sessions handling incoming requests and directing them to the appropriate Nuxeo server nodes.

## Configuration

### HTTP Load Balancer Configuration

If you use a stateless load balancer, such as Apache modules such as `mod_jk` and `mod_proxy_balancer`, you need to make the HTTP server generate `JSESSIONID` cookies with values that end with `.nxworker_n_` , where `nxworker_n_` is a string suffix specific to each node (you can use any string).

1.  In `nuxeo.conf` specify a different `nuxeo.server.jvmRoute` for each node, for instance `nuxeo.server.jvmRoute=nxworker1`.</br>
    This will instruct the Nuxeo preprocessing phase to correctly fill the `jvmRoute` attribute of the `Engine` element in the generated `server.xml`.
2.  Configure your stateless balancer to follow these routes, for instance here is the relevant configuration fragment when using `mod_proxy_balancer`:

```xml
ProxyPass /nuxeo balancer://sticky-balancer stickysession=JSESSIONID|jsessionid  nofailover=On

<Proxy balancer://sticky-balancer>
  BalancerMember http://192.168.2.101:8080/nuxeo route=nxworker1
  BalancerMember http://192.168.2.102:8080/nuxeo route=nxworker2
</Proxy>
```

### Quartz Scheduler Cluster Configuration

A clustered Nuxeo environment should be configured to use Quartz scheduling. The Quartz scheduling component allows nodes to coordinate scheduled tasks between themselves - a single task will be routed to a single node for execution on that one node. This ensures that scheduled events, like periodic cleanups or periodic imports, are executed only on one node and not on all nodes at the same time.

For DBS (MongoDB) everything is done automatically, you don't have to use any specific configuration or template. You can skip the rest of this section.

For VCS (SQL databases) the standard configuration is available from Nuxeo templates; each node in the cluster should be configured to include the relevant `<database>-quartz-cluster` template.

1.  Populate the database with the tables needed by Quartz (names `QRTZ_*`).</br>
    The DDL scripts come from the standard Quartz distribution and are available in the Nuxeo templates in `$NUXEO_HOME/templates/<database>-quartz-cluster/bin/create-quartz-tables.sql`.
2.  Enable the Quartz-specific cluster templates by adding the template `<database>-quartz-cluster`.

{{#> callout type='note' }}
In cluster mode the schedule contributions (deployed from plugins or configuration files) **must** be the same on all nodes.
{{/callout}}

Any instance using a clustered Quartz configuration tries to get a lock on the next scheduled job execution. Those locks are managed and shared through the database.
The time must be synchronized on all instances. You should use NTP for that.

While performing a rolling upgrade on Nuxeo servers, the lock may be swapped between the instances. In which case, you may encounter a warning on startup:
```
This scheduler instance (host-nuxeo.example.com1478524375548) is still active but was recovered by another instance in the cluster.  This may cause inconsistent behavior.
```
This message is not a problem if the NTP configuration is fine.

### Session Affinity Configuration

We advise to use a session affinity mechanism: when a user is connected to a node, they should always be redirected to that node.

There are several reasons why we advise this configuration, described below.

#### Invalidations

The Nuxeo Cluster system takes care of propagating invalidations between all nodes of the clusters.

However, for performances reasons, there is a small delay by default: this means that without affinity you could have one call creating a document and the second one not seeing the document. Of course this state is transient, and after a few milliseconds it will be ok. However in the context of a "multi-page transaction" this could be an issue.

Having session affinity does solve the visible issues. If the session affinity can not be restored, for example because the target server has been shutdown, in 99,99% of the case, this won't be an issue.

#### Authentication

The Nuxeo Platform requires all calls to be authenticated. Depending on your architecture, authentication can be stateless (ex: Basic Auth) or stateful (ex: Form + Cookie). Either way, you probably don't want to replay authentication during all calls.

That's why having a session based authentication + session affinity can make sense: you don't have to re-authenticate each time you call the server.

If the session affinity can not be restored, for example because the target server has been shut down:

- stateless authentication will be automatically replayed (ex: Basic Auth)
- for stateful authentication:
    - if you have an SSO this will be transparent
    - if you don't have an SSO, user will have to authenticate again.

#### State Management and UI Rendering

The UI can be stateful or stateless:
- The default Web UI is stateless,
- JSF is stateful.

If the UI layer you use is stateful, you have to use stateful load balancing for session affinity.

To enable automatic unhealthy instance eviction on your balancer, you may require a health check.
The following ensures Nuxeo runtime is initialized and up: `HTTP:200:/nuxeo/running_status?info=reload`.

#### Troubleshooting Session Affinity Problems

To test that the load balancer forwards the HTTP requests of a given session to the same node:

1.  Add a new file on each node (after Tomcat started), `$NUXEO_HOME/nxserver/nuxeo.war/clusterinfo.html`,

    - On the first node:
        ```xml
        <html><body>Node 1</body></html>
        ```

    - and on the second node:
        ```xml
        <html><body>Node 2</body></html>
        ```

2.  Using a browser with an active Nuxeo session (an already logged-in user), go to `http://yourloadbalancer/nuxeo/clusterinfo.html` and check that you always return to the same node when hitting the refresh button of the browser.
