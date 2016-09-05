---
title: Document Templates and Automation Rendering Service
labels:
    - freemarker
    - mvel
    - template
toc: true
confluence:
    ajs-parent-page-id: '22380844'
    ajs-parent-page-title: Automation
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Document+Templates+and+Automation+Rendering+Service
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/Document+Templates+and+Automation+Rendering+Service
    page_id: '22380846'
    shortlink: LoFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/LoFVAQ'
    source_link: /display/NXDOC60/Document+Templates+and+Automation+Rendering+Service
history:
    - 
        author: Alain Escaffre
        date: '2014-05-06 00:38'
        message: ''
        version: '4'
    - 
        author: Bertrand Chauvin
        date: '2013-07-11 10:58'
        message: ''
        version: '3'
    - 
        author: Bertrand Chauvin
        date: '2013-07-11 10:57'
        message: ''
        version: '2'
    - 
        author: Bertrand Chauvin
        date: '2013-07-11 10:57'
        message: ''
        version: '1'

---
## Freemarker templating language (ftl)

`**${Document}**` - the context document. This is the document on which the rendering is done in the case the rendering is done on a single document. When the input is a list of document then this variable is undefined.
**`${This}`** - the rendering input. Will be a document in the case of a single document or a list of documents in th case of multiple documents.
**`${Session}`** - the current core session.
`**${Context}**` - the context.
**`${CurrentDate}`** - the current date. See [Use of MVEL in Automation chains (date wrapper)]({{page page='use-of-mvel-in-automation-chains'}}) for details.
**`${Fn}`** - a collection of useful functions. See [Use of MVEL in Automation chains (fn object)]({{page page='use-of-mvel-in-automation-chains'}}) for details.
`**${Env}**` - a hashmap containing Nuxeo environment variables. Example: `Env["org.nuxeo.ecm.product.name"]`.
`**${CurrentUser}**` - the current user.

Note that `**${CurrentUser}**` is not correctly working for now in ftl templates - but only in mvel templates.

By using the freemarker templating engine, you also gain access to its whole functionalities. For example, using a document list could be done as following:

<pre><#list This as doc>
  ${doc.title}
</#list></pre>

Have a look at the [freemarker manual](http://freemarker.org/docs) for more information about it.

## MVEL

`**${Document}**` - the context document. This is the document on which the rendering is done in the case the rendering is done on a single document. When the input is a list of document then this variable is undefined.**`
${This}`** - the rendering input. Will be a document in the case of a single document or a list of documents in th case of multiple documents.
**`${Session}`** - the current core session.
`**${Context}**` - the context.
**`${CurrentDate}`** - the current date. See [Use of MVEL in Automation chains (date wrapper)]({{page page='use-of-mvel-in-automation-chains'}}) for details.
**`${Fn}`** - a collection of useful functions. See [Use of MVEL in Automation chains (fn object)]({{page page='use-of-mvel-in-automation-chains'}}) for details.
`**${Env}**` - a hashmap containing Nuxeo environment variables. Example: `Env["org.nuxeo.ecm.product.name"]`.
`**${CurrentUser}**` - the current user.

By using MVEL, you also gain access to its whole functionalities. For example, using a document list could be done as following:

<pre>@foreach{doc : This}
  @{doc.title}
@end{}</pre>

Have a look at the [MVEL manual](http://mvel.codehaus.org/Getting+Started+for+2.0) for more information about it.