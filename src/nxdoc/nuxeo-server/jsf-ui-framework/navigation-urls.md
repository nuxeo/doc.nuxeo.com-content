---
title: Navigation URLs
review:
    comment: ''
    date: '2019-02-13'
    status: ok
labels:
    - content-review-lts2016
    - link-update
    - url
    - community-links
    - url-codec-component
    - seam-jsf-component
    - atchertchian
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '16089312'
    ajs-parent-page-title: JSF UI Framework
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Navigation+URLs
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Navigation+URLs'
    page_id: '7209351'
    shortlink: hwFu
    shortlink_source: 'https://doc.nuxeo.com/x/hwFu'
    source_link: /display/NXDOC/Navigation+URLs
tree_item_index: 1200
history:
    -
        author: Anahide Tchertchian
        date: '2015-12-08 10:56'
        message: ordin
        version: '14'
    -
        author: Anahide Tchertchian
        date: '2015-10-13 15:49'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-12-05 18:24'
        message: Fix links to point to latest version
        version: '12'
    -
        author: Solen Guitter
        date: '2014-08-21 14:01'
        message: Removed 5.5 reference
        version: '11'
    -
        author: Solen Guitter
        date: '2014-01-23 18:16'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-11-13 15:44'
        message: Updated links and fixed formatting
        version: '9'
    -
        author: Solen Guitter
        date: '2013-09-04 18:56'
        message: Added TOC
        version: '8'
    -
        author: Solen Guitter
        date: '2013-07-31 12:23'
        message: Added related topics
        version: '7'
    -
        author: Solen Guitter
        date: '2012-05-21 14:03'
        message: Migrated to Confluence 4.0
        version: '6'
    -
        author: Solen Guitter
        date: '2012-05-21 14:03'
        message: Updated link to 5.6
        version: '5'
    -
        author: Solen Guitter
        date: '2011-11-14 15:29'
        message: replaced 5.4.3 with 5.5
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2011-07-07 16:26'
        message: ''
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2011-07-06 19:08'
        message: ''
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2011-04-29 16:33'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedJSF' page='generic-multi-excerpts'}}}

{{! excerpt}}
There are two services that help building GET URLs to restore a Nuxeo context. The default configuration restores the current document, the view and current tabs.
{{! /excerpt}}

## Document View Codec Service

The service handling document views allows registration of codecs. Codecs manage coding of a Java object, the document view (holding a document reference, repository name as well as key-named string parameters) into a URL, and decoding of this URL into a document view.

Examples of a document view codecs registration:

```xml
<extension
  target="org.nuxeo.ecm.platform.url.service.DocumentViewCodecService"
  point="codecs">

  <documentViewCodec name="docid" enabled="true" default="true" prefix="nxdoc"
    class="org.nuxeo.ecm.platform.url.codec.DocumentIdCodec" />
  <documentViewCodec name="docpath" enabled="true" default="false" prefix="nxpath"
    class="org.nuxeo.ecm.platform.url.codec.DocumentPathCodec" />

</extension>

```

In this example, the `docid` codec uses the document uid to resolve the context. URLs are of the form `<span class="nolink">http://site/nuxeo/nxdoc/demo/docuid/view</span>` . The `docpath` codec uses the document path to resolve the context. URLs are of the form `<span class="nolink">http://site/nuxeo/nxpath/demo/path/to/my/doc@view</span>` .

Additional parameters are coded/decoded as usual request parameters.

Note that when building a document view, the URL service will require a view id. Other information (document location and parameters) are optional, as long as they're not required for your context to be initialized correctly.

## URL Policy Service

The service handling URLs allows registration of patterns. These patterns help saving the document context and restoring it thanks to information provided by codecs. The URL service will iterate through its patterns, and use the first one that returns an answer (proving decoding was possible).

Example of a URL pattern registration:

```xml
<extension target="org.nuxeo.ecm.platform.ui.web.rest.URLService"
  point="urlpatterns">

  <urlPattern name="default" enabled="true">
    <defaultURLPolicy>true</defaultURLPolicy>
    <needBaseURL>true</needBaseURL>
    <needRedirectFilter>true</needRedirectFilter>
    <needFilterPreprocessing>true</needFilterPreprocessing>
    <codecName>docid</codecName>
    <actionBinding>#{restHelper.initContextFromRestRequest}</actionBinding>
    <documentViewBinding>#{restHelper.documentView}</documentViewBinding>
    <newDocumentViewBinding>#{restHelper.newDocumentView}</newDocumentViewBinding>
    <bindings>
      <binding name="tabId">#{webActions.currentTabId}</binding>
      <binding name="subTabId">#{webActions.currentSubTabId}</binding>
    </bindings>
  </urlPattern>

</extension>

```

In this example, the `default` pattern uses the above `docid` codec. It is set as the default URL policy, so that it's used by default when caller does not specify a pattern to use. It needs the base URL: the `docid` codec only handles the second part in the URL. It needs redirect filter: it will be used to provide the context information to store. It needs filter preprocessing: it will be used to provide the context information to restore.

The action binding method handles restoring of the Seam context. It takes a document view as parameter. It requires special attention: if you're using conversations (as Nuxeo does by default), you need to annotate this method with a `@Begin` tag so that it uses the conversation identifier passed as a parameter if it's still valid, or initiates a new conversation in other cases. The method also needs to make sure it initializes all the seam components it needs (documentManager for instance) if they have not be in initialized yet.

The additional document view bindings are used to pass document view information through requests. The document view binding maps to corresponding getters and setters. The new document view binding is used to redirect to build GET URL in case request is a POST: it won't have the information in the URL so it needs to rebuild it.

Other bindings handle additional request parameters. In this example, they're used to store and restore tab and sub tab information (getters and setters have to be defined accordingly).

The element `documentViewBindingApplies` can be set next to document view bindings: it makes it possible to select what pattern descriptor will be used on a POST to generate or get the document view, as well as building the URL to use for the redirect that will come just after the POST. It has to resolve to a boolean expression, and if no suitable pattern is found, the default one will be used.

## Additional Configuration

The URL patterns need to be registered on the authentication service so that they're considered as valid URLs. Valid URLs will be stored in the request, so that if authentication is required, user is redirected to the URL after login.

Example of a start URL pattern registration:

```xml
<extension
  target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService"
  point="startURL">

  <startURLPattern>
    <patterns>
      <pattern>nxdoc/</pattern>
    </patterns>
  </startURLPattern>

</extension>

```

Just the start of the URL is required in this configuration. Contributions are merged: it is not possible to remove an existing start pattern.

The URL patterns used also need to be handled by the default Nuxeo authentication service so that the login mechanism (also used for anonymous requests) applies to them.

Example authentication filter configuration:

```xml
<extension target="web#STD-AUTH-FILTER">
  <filter-mapping>
    <filter-name>NuxeoAuthenticationFilter</filter-name>
    <url-pattern>/nxdoc/*</url-pattern>
    <dispatcher>REQUEST</dispatcher>
    <dispatcher>FORWARD</dispatcher>
  </filter-mapping>
</extension>

```

This is a standard filter mapping configuration.

## URL JSF Tags

There are some JSF tags and functions helping you to define what kind of GET URL should be displayed on the interface.

Example of `nxd:restDocumentLink` use:

```xml
<nxd:restDocumentLink document="#{doc}">
  <nxh:outputText value="#{nxd:titleOrId(doc)}" />
</nxd:restDocumentLink>

```

In this example, the tag will print a simple link, using the default pattern, and build the document view using given document model, using its default view.

Please refer to the [tag library documentation](http://community.nuxeo.com/api/nuxeo/latest/tlddoc/nxd/restDocumentLink.html) for additional parameters: it's possible to set the tab, sub tab, and use a specific URL pattern.

Note that you can also use JSF functions to build the GET URL. This is what's done for file links: the function queries the URL policy service to build the URL.

Example of a JSF function use:

```xml
<nxh:outputLink rendered="#{doc.hasSchema('file') and !empty doc.file.content}"
  value="#{nxd:fileUrl('downloadFile', doc, 'file:content', doc.file.filename)}">
  <nxh:graphicImage value="/icons/download.png" style="vertical-align:middle"
    title="#{doc.file.filename}" />
</nxh:outputLink>

```

Here is an the `fileURL` method code as an example:

```java
public static String fileUrl(String patternName, DocumentModel doc,
        String blobPropertyName, String filename) {
    try {
        DocumentLocation docLoc = new DocumentLocationImpl(doc);
        Map<String, String> params = new HashMap<String, String>();
        params.put(DocumentFileCodec.FILE_PROPERTY_PATH_KEY,
                blobPropertyName);
        params.put(DocumentFileCodec.FILENAME_KEY, filename);
        DocumentView docView = new DocumentViewImpl(docLoc, null, params);

        // generate url
        URLPolicyService service = Framework.getService(URLPolicyService.class);
        if (patternName == null) {
            patternName = service.getDefaultPatternName();
        }
        return service.getUrlFromDocumentView(patternName, docView,
                BaseURL.getBaseURL());

    } catch (Exception e) {
        log.error("Could not generate url for document file", e);
    }

    return null;
}

```

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related topics in this documentation'}}

- [Default URL Patterns]({{page page='default-url-patterns'}})
- [URLs for Files]({{page page='urls-for-files'}})
- [Downloading Files]({{page page='downloading-files'}})
- [REST API]({{page page='rest-api'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
