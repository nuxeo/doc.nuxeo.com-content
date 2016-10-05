---
title: Filtering Exposed Operations
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - operation
    - rest-api
    - automation-component
    - excerpt
confluence:
    ajs-parent-page-id: '3342491'
    ajs-parent-page-title: Command Endpoint
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Filtering+Exposed+Operations
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Filtering+Exposed+Operations'
    page_id: '3342523'
    shortlink: uwAz
    shortlink_source: 'https://doc.nuxeo.com/x/uwAz'
    source_link: /display/NXDOC/Filtering+Exposed+Operations
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:45'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-09-25 14:50'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-09-23 13:48'
        message: ''
        version: '16'
    - 
        author: Alain Escaffre
        date: '2013-09-17 03:34'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-08-30 14:54'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-08-30 14:52'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-08-30 12:19'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-07-17 14:59'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-07-17 14:59'
        message: >-
            Added related topics and replaced "operation chain" with "automation
            chain"
        version: '10'
    - 
        author: Stéfane Fermigier
        date: '2011-05-02 17:53'
        message: Migrated to Confluence 4.0
        version: '9'
    - 
        author: Stéfane Fermigier
        date: '2011-05-02 17:53'
        message: ''
        version: '8'
    - 
        author: Stéfane Fermigier
        date: '2010-08-03 15:19'
        message: ''
        version: '7'
    - 
        author: Stéfane Fermigier
        date: '2010-08-03 15:18'
        message: ''
        version: '6'
    - 
        author: Florent Guillaume
        date: '2010-06-29 11:54'
        message: ''
        version: '5'
    - 
        author: Stéfane Fermigier
        date: '2010-06-28 08:42'
        message: ''
        version: '4'
    - 
        author: Bogdan Stefanescu
        date: '2010-06-25 17:40'
        message: ''
        version: '3'
    - 
        author: Bogdan Stefanescu
        date: '2010-06-24 16:47'
        message: ''
        version: '2'
    - 
        author: Bogdan Stefanescu
        date: '2010-06-24 16:47'
        message: ''
        version: '1'

---
Almost all the registered operations and chains are automatically exposed through a REST interface to be invoked from remote clients. The UI-specific operations are not exposed through REST since they require a web user interface to work.

For security reasons, you may want to prevent some operations from being accessed remotely. Or you may want to allow only certain users to be able to invoke them.

{{! excerpt}}

The REST operation filters provide an [extension point]({{page page='runtime-and-component-model'}}) where you can register such security rules on what operations are exposed and for which users.

{{! /excerpt}}

Here is an example on how to write such an extension:

```html/xml
<extension target="org.nuxeo.ecm.automation.server.AutomationServer" point="bindings">
  <binding name="Document.Delete" disabled="true"/>
  <binding name="audit" chain="true">
    <administrator>true</administrator>
    <secure>true</secure>
    <groups>members</groups>
  </binding>
</extension>

```

The above code is contributing two REST bindings - one for the atomic operation [`Document.Delete`](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Document.Delete) which is completely disabled (by using the `disable` parameter) and the second one is defining a security rule for the automation chain named `audit`.&nbsp;You can notice the usage of the `chain` attribute which must be set to true every time a binding refers to an automation chain and not to an atomic operation.

The second binding installs a guard that allows only requests made by an `administrator` user or by users from the `member` group **AND** the request should be made over a secured channel like HTTPS.

Here is the complete of attributes and elements you can use in the extension:

*   `**name**` : The operation or automation chain name that should be protected.
*   `**chain**` : "true" if the name refers to an automation chain, "false" otherwise (the default is "false").
*   `**disabled**` : Whether or not to completely disable the operation from REST access. The default is "false". If you put this flag on "true" then all the other security rules will be ignored.
*   `**administrator**` : Possible values are "true" or "false". The default is "false". If set to "true" the operation is allowed if the user is an administrator.
*   `**groups**` : A comma separated list of groups that the user should be member of. If both `administrator` and `groups` are specified the user must be either from a group or an administrator.
*   `**secure**` : "true" or "false". Default is "false". If "true" the request must be done through a secured channel like HTTPS. If this guard is used the connection **must** be secured, so that even if the groups guard is matched the operation is not accessible if the connection is not secured.

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [REST API]({{page page='rest-api'}})
*   [Command Endpoint]({{page page='command-endpoint'}})
*   [Operations Index]({{page page='operations-index'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>