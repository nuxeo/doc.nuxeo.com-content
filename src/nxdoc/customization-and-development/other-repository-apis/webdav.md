---
title: WebDAV
review:
    comment: ''
    date: ''
    status: ok
labels:
    - webdav
confluence:
    ajs-parent-page-id: '17334379'
    ajs-parent-page-title: Other Repository APIs
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: WebDAV
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/WebDAV'
    page_id: '17334351'
    shortlink: T4AIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/T4AIAQ'
    source_link: /display/NXDOC58/WebDAV
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 09:52'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-09-23 10:56'
        message: 'Adding related topics '
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-09-23 10:54'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-11-30 12:05'
        message: Migrated to Confluence 4.0
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-11-30 12:05'
        message: Added how to a add a new WebDAV client
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-11-30 11:57'
        message: Added how to a add a new WebDAV client
        version: '6'
    - 
        author: Florent Guillaume
        date: '2011-06-08 16:07'
        message: ''
        version: '5'
    - 
        author: Julien Carsique
        date: '2011-03-24 18:15'
        message: ''
        version: '4'
    - 
        author: Florent Guillaume
        date: '2010-10-15 13:57'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2010-10-15 00:57'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 13:36'
        message: ''
        version: '1'

---
Nuxeo supports the WebDAV (Web-based Distributed Authoring and Versioning_)_ protocol and thus enables you to create and edit Office documents stored in Nuxeo directly from the Windows or Mac OS X desktop, without having to go through your Nuxeo application.

The documentation about installation and usage of WebDAV can be found [in the Nuxeo Platform User Guide]({{page space='userdoc58' page='working-with-webdav-and-wss'}}).

## Adding a new WebDAV Client

The plugin comes with a default configuration which supports only a few clients among Windows 7's one, litmus, davfs, cadaver. If your usual client is not listed, you can override this configuration by adding a new file `webdav-authentication-config.xml` under `$NUXEO/nxserver/config/` and update the list associated to the header.

Below is an example where BitKinex is added:

```
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.platform.wi.auth.config.custom">

  <require>org.nuxeo.ecm.platform.wi.auth.config</require>

  <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService" point="specificChains">

    <specificAuthenticationChain name="WebDAV">
      <headers>
        <header name="User-Agent">(Microsoft-WebDAV-MiniRedir|DavClnt|litmus|gvfs|davfs|WebDAV|cadaver|BitKinex).*</header>
      </headers>

      <replacementChain>
        <plugin>DIGEST_AUTH</plugin>
        <plugin>WEBDAV_BASIC_AUTH</plugin>
      </replacementChain>
    </specificAuthenticationChain>
  </extension>

</component>

```

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Working with WebDAV and WSS]({{page space='userdoc58' page='working-with-webdav-and-wss'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>