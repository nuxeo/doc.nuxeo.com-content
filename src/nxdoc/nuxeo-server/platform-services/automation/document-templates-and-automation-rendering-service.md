---
title: Document Templates and Automation Rendering Service
review:
    comment: ''
    date: '2020-07-20'
    status: ok
labels:
    - lts2016-ok
    - freemarker
    - mvel
    - template
    - operation
    - automation
    - fdavid
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '18451738'
    ajs-parent-page-title: Automation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Document+Templates+and+Automation+Rendering+Service
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Document+Templates+and+Automation+Rendering+Service'
    page_id: '14256377'
    shortlink: _YjZ
    shortlink_source: 'https://doc.nuxeo.com/x/_YjZ'
    source_link: /display/NXDOC/Document+Templates+and+Automation+Rendering+Service
tree_item_index: 1300
history:
    -
        author: Solen Guitter
        date: '2015-10-12 10:10'
        message: ix formatting issue
        version: '6'
    -
        author: Solen Guitter
        date: '2015-08-31 13:47'
        message: Update table of contents look
        version: '5'
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
Nuxeo Automation includes a service designed to perform renditions based on Freemarker or MVEL templating.

Two operations are provided for leveraging this rendition engine: [Conversion > Render Document](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Render.Document) and [Conversion > Render Document Feed](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Render.DocumentFeed). The output format can be TEXT, HTML, XML, JSON, etc.

- For a broader look about variables available in different contexts, have a look at the [Understand Expression and Scripting Languages Used in Nuxeo]({{page page='understand-expression-and-scripting-languages-used-in-nuxeo'}}) page.
- For a more advanced rendition service, you may be interested in having a look at the [Nuxeo Platform Template Rendering module]({{page page='template-rendering-addon'}}).

We list here the variables accessible in this rendition context and as a consequence in the templates.

{{#> callout type='tip' heading='Nuxeo Studio'}}

When building a custom document or mail template in Nuxeo Studio, do not hesitate to see the help ("See Examples") to get template samples.

{{/callout}}

## FreeMarker Templating Language (ftl)

*   **`${Document}`** - the context document. This is the document on which the rendering is done in the case the rendering is done on a single document. When the input is a list of document then this variable is undefined.
*   **`${This}`** - the rendering input. Will be a document in the case of a single document or a list of documents in th case of multiple documents.
*   **`${Session}`** - the current core session.
*   **`${Context}`** - any object can be added to the context before calling the operation that will render the template (document or mail template).
  - Regular Automation: Use `Execution Context > Context.SetVar`
  - JS Automation: With `ctx.myValue = "Hello world";` just use `${myValue}` in the template.
*   **`${CurrentDate}`** - the current date. See [Use of MVEL in Automation chains (date wrapper)]({{page page='use-of-mvel-in-automation-chains'}}) for details.
*   **`${Fn}`** - a collection of useful functions. See [Use of MVEL in Automation chains (fn object)]({{page page='use-of-mvel-in-automation-chains'}}) for details.
*   **`${Env}`** - a hashmap containing Nuxeo environment variables. Example: `Env["org.nuxeo.ecm.product.name"]`.
*   **`${CurrentUser}`** - the current user.
    Note that **`${CurrentUser}`** is not correctly working for now in FTL templates - but only in MVEL templates.

By using the FreeMarker templating engine, you also gain access to its whole functionalities. For example, using a document list could be done as following:

```
<#list This as doc>
  ${doc.title}
</#list>
```

In this example, This is the input of the Document.RenderFeed operation:

```
<#list This as oneDoc>
  <#if oneDoc["contract:value"] < 1000>
${oneDoc.title}: The contract's value is small (${oneDoc["contract:value"]})
  <#elseif (oneDoc["contract:value"] > 100000)>
${oneDoc.title}: This contract is a big one
  <#else>
${oneDoc.title}: The contract is medium (${oneDoc["contract:value"]})
  </#if>
</#list>
```

You also can build your list, put it in a context variable and use it with `<#list>`.

Have a look at the [FreeMarker manual](https://freemarker.apache.org/docs/) for more information about it.

{{#> callout type='tip' heading='Going further'}}

- Freemarker also comes with a lot more (formating, test a value is empty, …). Read the documentation and ensure your instance is using the suitable Freemarker version in the `pom.xml` file. 
- Sometimes it will be easier to calculate a value before calling the template, instead of calculating it in Freemarker.

{{/callout}}

### Caution points

#### Java objects

With `${expression}` and control flows (conditions, lists), Freemarker expects Java objects: it could be an issue when using JavaScript Automation

- No issue with scalars (String, number, boolean, date)
- Potential issues with arrays and objects: Use `Java.to()` for conversions, or use "Java in JS" to build native Java objects in JS (write a Java plugin if it becomes complex)

For example, if a JavaScript array of string needs to be converted into Java objects:

```
var theValues = ["value1", "value2", "value3", "value4"];
ctx.theValues = Java.to(theValues);
Document.Mail(...);
```

with in the mail template:

```
<#list theValues as value>
<p>...${value}...</p>
</#list>
```

#### CurrentUser

CurrentUser object is not available: it is not possible to use `${CurrentUser.firstName}` for example. It is necessary to fill values in context variables before calling the template. It is possible to use `Session.getPrincipal()`, `${Session.getPrincipal().getFirstName()}`, etc. 

  It is more flexible to use context variables as it handles null values, the `actingUser` variable, etc.

#### Security consideration

Freemarker is a scripting language. It should always stay server side, built in the Studio Project: it is therefore recommended to avoid having users writing scripts client side, that could be executed server side.

## MVEL

* **`${Document}`** - the context document. This is the document on which the rendering is done in the case the rendering is done on a single document. When the input is a list of document then this variable is undefined.
* **`${This}`** - the rendering input. Will be a document in the case of a single document or a list of documents in th case of multiple documents.
* **`${Session}`** - the current core session.
* **`${Context}`** - the context
* **`${CurrentDate}`** - the current date. See [Use of MVEL in Automation chains (date wrapper)]({{page page='use-of-mvel-in-automation-chains'}}) for details.
* **`${Fn}`** - a collection of useful functions. See [Use of MVEL in Automation chains (fn object)]({{page page='use-of-mvel-in-automation-chains'}}) for details.
* **`${Env}`** - a hashmap containing Nuxeo environment variables. Example: `Env["org.nuxeo.ecm.product.name"]`.
* **`${CurrentUser}`** - the current user.

By using MVEL, you also gain access to its whole functionalities. For example, using a document list could be done as following:

```
@foreach{doc : This}
  @{doc.title}
@end{}
```

Have a look at the [MVEL Documentation](http://mvel.documentnode.com/#language-guide-for-2.0) for more information about it.

## Variable contribution

You can contribute custom objects and functions in Java.

```
<extension target="org.nuxeo.template.service.TemplateProcessorComponent"
           point="contextExtension">
  <documentation>
    Adds utility functions in the context
    <ul>
      <li>MyCustomHelper.doThis(doc)</li>
      <li>MCH.doThat(key, context)</li>
    </ul>
  </documentation>

  <contextFactory name="MyCustomHelper" class="my.something.MyCustomHelper">
    <aliasName>MCH</aliasName>
  </contextFactory>
</extension>
```

