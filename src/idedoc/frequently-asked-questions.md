---
title: Frequently Asked Questions
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '8684133'
    ajs-parent-page-title: Documentation Center for Nuxeo Platform IDEs
    ajs-space-key: IDEDOC
    ajs-space-name: Nuxeo IDE
    canonical: Frequently+Asked+Questions
    canonical_source: 'https://doc.nuxeo.com/display/IDEDOC/Frequently+Asked+Questions'
    page_id: '17794172'
    shortlink: fIQPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/fIQPAQ'
    source_link: /display/IDEDOC/Frequently+Asked+Questions
tree_item_index: 300
history:
    -
        author: Antoine Taillefer
        date: '2013-11-28 15:40'
        message: ''
        version: '5'
    -
        author: Antoine Taillefer
        date: '2013-11-28 15:39'
        message: ''
        version: '4'
    -
        author: Antoine Taillefer
        date: '2013-11-28 15:37'
        message: ''
        version: '3'
    -
        author: Antoine Taillefer
        date: '2013-11-28 15:36'
        message: ''
        version: '2'
    -
        author: Vladimir Pasquier
        date: '2013-11-28 12:06'
        message: ''
        version: '1'

---
{{multiexcerpt 'ide-replaced-by-generator-info' page='nuxeo-ide'}}

**Nuxeo IDE cannot deploy. It just waits and waits.**


Nuxeo IDE is generating a dedicated template for running the SDK. Did you started the SDK by hand ? If yes, you should activate that template by setting in your environment the following variable

```
NUXEO_CONF=bin/nuxeo-sdk.conf
```

Can you check also that the profile is correctly activated ? In your SDK, the file conf/Catalina/localhost/nuxeo.xml should contains the line

```
<Loader className="org.nuxeo.runtime.tomcat.NuxeoWebappLoader" loaderClass="org.nuxeo.runtime.tomcat.dev.NuxeoDevWebappClassLoader" />
```

In all cases, if you run Nuxeo by hand -> "./nuxeoctl(.bat) console" you should see much more information to debug it.

**My server is started with Nuxeo IDE and my Seam components / XHTML views are not deployed.**

Just refresh once with the "Reload projects on server" button.
