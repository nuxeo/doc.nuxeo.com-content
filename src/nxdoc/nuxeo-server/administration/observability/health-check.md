---
title: Health Check
description: Endpoint to monitor Nuxeo health.
review:
    date: '2020-06-10'
    status: ok
    comment: ''
labels:
    - healthcheck
    - probe
    - monitoring
    - observability
toc: true
tree_item_index: 100
---

Nuxeo provides a REST endpoint for monitoring its health:

`http://NUXEO_SERVER/nuxeo/runningstatus`

When returning an HTTP code `200` the Nuxeo node is ready to receive incoming traffic.

While it isn't reachable, the node is stopped or still starting.

When returning an error HTTP code `500` it is recommended to block the incoming traffic to prevent generating unnecessary errors.

Under the wood the endpoint runs different probes, you can see in the response which one has been configured,
for instance:
```json
{
    "s3BinaryManagerStatus":"ok",
    "runtimeStatus":"ok",
    "elasticSearchStatus":"ok",
    "ldapDirectories":"ok",
    "repositoryStatus":"ok",
    "streamStatus":"ok"
}
```

A failure in at least one probe will return an HTTP code `500`:
```json
{
    "s3BinaryManagerStatus":"failed",
    "runtimeStatus":"ok",
    "elasticSearchStatus":"ok",
    "ldapDirectories":"ok",
    "repositoryStatus":"ok",
    "streamStatus":"ok"
}
```

This endpoint is also used by the Nuxeo launcher to follow the server startup status, after checking the Java process status.

## Status

The same endpoint can provide more information:
- `http://NUXEO_SERVER/nuxeo/runningstatus?info=probe&key=xxx`  where key can be any probe registered to be evaluated for the health check returns 200 OK if the check passes
- `http://NUXEO_SERVER/nuxeo/runningstatus?info=started` returns `true` if the server finished starting and the Nuxeo runtime is fine with its components.
- `http://NUXEO_SERVER/nuxeo/runningstatus?info=summary&key=xxx` returns `true` or `false` (see "info=started") and a detailed summary about components. Access to this URL is restricted by an access key configurable in `nuxeo.conf` (see `"server.status.key"` in [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}})).

For instance when something was wrong at startup:
```
false
======================================================================
= Nuxeo EP Started
======================================================================
= Component Loading Status: Pending: 7 / Unstarted: 0 / Total: 462
  * service:org.nuxeo.ecm.webengine.sites.wiki.relation requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.annotations.graph requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.platform.relations.jena requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.annotations.repository.graph requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.platform.publisher.relations.contrib requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.platform.relations.services.DefaultJenaGraph requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.platform.comment.service.CommentServiceConfig requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
======================================================================
```

You can get that information with `./bin/nuxeoctl status` (see [nuxeoctl and Control Panel Usage]({{page page='nuxeoctl-and-control-panel-usage'}})).

## Probes

Probes can be used to run a test on the target deployed platform in order to check that all part of the architecture are actually running for real:

*   check LDAP access,
*   check instance availability,
*   check VCS access,
*   ...

Probes can be defined via the[ `probes` extension point](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.core.management.CoreManagementComponent--probes).

Note that a probe is only run if the last execution time was more than 20s ago. For intervals less than 20s, the last execution status is returned as part of the response.

Here is a list of available probes:

* `activeRepositorySession`: returns the number of active sessions per repository
* `adminStatus`: checks local instance enable flag (checks `nuxeoInstance` administrative status)
* `elasticSearchStatus`: check access to Elasticsearch
* `ldapDirectory`: check LDAP connectivity
* `remoteSQLStorageSession`: number of remove VCS client connected (only used in VCS client/server mode that is not enabled by default)
* `repositoryStatus`: check access to the repository
* `runtimeStatus`: check state of the runtime
* `s3BinaryManagerStatus`: check access to s3 buckets
* `streamStatus`: check for Nuxeo Stream processor failure

Probes can be run as part of the `runningstatus` health check endpoint using the [`healthCheck` extension point](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.core.management.CoreManagementComponent--healthCheck).
