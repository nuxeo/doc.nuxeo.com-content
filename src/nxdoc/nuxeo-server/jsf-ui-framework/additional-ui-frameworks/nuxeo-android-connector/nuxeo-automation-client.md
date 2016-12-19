---
title: Nuxeo Automation client
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - lts2016-ok
    - android-connector-component
confluence:
    ajs-parent-page-id: '8684332'
    ajs-parent-page-title: Nuxeo Android Connector
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Automation+client
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Automation+client'
    page_id: '8684353'
    shortlink: QYOE
    shortlink_source: 'https://doc.nuxeo.com/x/QYOE'
    source_link: /display/NXDOC/Nuxeo+Automation+client
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2011-11-07 17:59'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2011-11-07 17:59'
        message: ''
        version: '10'
    -
        author: Thierry Delprat
        date: '2011-10-04 14:27'
        message: ''
        version: '9'
    -
        author: Thierry Delprat
        date: '2011-10-04 14:26'
        message: ''
        version: '8'
    -
        author: Thierry Delprat
        date: '2011-10-04 14:23'
        message: ''
        version: '7'
    -
        author: Thierry Delprat
        date: '2011-10-04 14:23'
        message: ''
        version: '6'
    -
        author: Thierry Delprat
        date: '2011-10-04 14:23'
        message: ''
        version: '5'
    -
        author: Thierry Delprat
        date: '2011-10-04 14:22'
        message: ''
        version: '4'
    -
        author: Thierry Delprat
        date: '2011-10-04 14:22'
        message: ''
        version: '3'
    -
        author: Thierry Delprat
        date: '2011-10-04 14:22'
        message: ''
        version: '2'
    -
        author: Thierry Delprat
        date: '2011-10-04 14:21'
        message: ''
        version: '1'

---


{{#> callout type='warning' }}

The Nuxeo Automation Client is deprecated for LTS 2016 and has been replaced by the new [Nuxeo Java Client](http://nuxeo.github.io/nuxeo-java-client/) which can be used in the Android environment.

{{/callout}}

In the Android Connector, the Automation Client is associated to a context that references required dependencies :

*   server configuration and credentials

*   network status information

*   Android Context (required for Filesystem and SQL Db access)

You can access this `NuxeoContext` by using :

```

  NuxeoContext.get(Context context)

```

context being the Android Application Context.

If you use the base class `SimpleNuxeoApplication` for your application, you can directly call `getNuxeoContext()` on the application.

The main advantages of using the `SimpleNuxeoApplication` base class is that :

*   access to NuxeoContext is simpler

*   the lifecycle of NuxeoContext will be bound to your application (instead of being a static singleton)

NB : you should use one method to access the `NuxeoContext`, but you should not mix them ...

Once you have the `NuxeoContext` you can directly access to the settings and the Automation Session :

```

  ctx.getServerConfig().setLogin("jdoe");
  ctx.getServerConfig().setPassword("secret");
  ctx.getServerConfig().setServerBaseUrl("http://10.0.2.2:8080/nuxeo/");

  if (ctx.getNetworkStatus().isNuxeoServerReachable()) {
    Document doc = (Document) ctx.getSession().newRequest("Document.Fetch").set("value", docRef).execute();
  }

```

Outside of this direct association between the Context and the Automation Client Session, the [standard documentation for Nuxeo Automation Client]({{page page='java-automation-client'}}) does apply to the Automation Client embedded in Android Connector.
