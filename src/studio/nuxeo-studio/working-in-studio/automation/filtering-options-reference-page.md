---
title: Filtering Options Reference Page
review:
    comment: ''
    date: ''
    status: ok
labels:
    - filter
confluence:
    ajs-parent-page-id: '12911806'
    ajs-parent-page-title: Automation
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Filtering+Options+Reference+Page
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Filtering+Options+Reference+Page'
    page_id: '12914263'
    shortlink: Vw7F
    shortlink_source: 'https://doc.nuxeo.com/x/Vw7F'
    source_link: /display/Studio/Filtering+Options+Reference+Page
tree_item_index: 400
history:
    -
        author: Alain Escaffre
        date: '2014-04-02 02:58'
        message: ''
        version: '24'
    -
        author: Alain Escaffre
        date: '2013-07-16 12:46'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2013-07-16 10:03'
        message: ''
        version: '22'
    -
        author: Bertrand Chauvin
        date: '2013-07-15 17:09'
        message: Corrected info on mutable docs
        version: '21'
    -
        author: Alain Escaffre
        date: '2013-07-15 17:02'
        message: ''
        version: '20'
    -
        author: Alain Escaffre
        date: '2013-07-15 17:01'
        message: ''
        version: '19'
    -
        author: Alain Escaffre
        date: '2013-07-15 16:58'
        message: ''
        version: '18'
    -
        author: Bertrand Chauvin
        date: '2013-07-15 13:56'
        message: Added info on mutable document
        version: '17'
    -
        author: Solen Guitter
        date: '2013-07-15 13:50'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-07-15 13:47'
        message: Fixed typos
        version: '15'
    -
        author: Alain Escaffre
        date: '2013-07-11 01:34'
        message: ''
        version: '14'
    -
        author: Karl Harris
        date: '2013-07-03 14:40'
        message: ''
        version: '13'
    -
        author: Stéphane Lacoin
        date: '2013-06-28 17:03'
        message: ''
        version: '12'
    -
        author: Alain Escaffre
        date: '2013-02-24 22:02'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2013-02-24 21:59'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2013-02-24 21:58'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2013-02-24 21:56'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2013-02-24 21:51'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2013-02-24 21:37'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2013-02-24 19:31'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2013-02-24 19:15'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-02-24 19:15'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-02-24 19:10'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-02-24 18:40'
        message: ''
        version: '1'

---
In various places of Studio Modeler (User Actions, Workflow, Event Handlers, ...) you'll find the same kind of screen where you can configure the set of conditions for which something is displayed/ran/not filtered...

Depending on where the filtering option appears, the current document, or the document, may refer to:

*   The current document in the user interface (for [User Actions]({{page page='user-actions'}}))
*   The document for which the event listener happens ([Event Handlers]({{page page='event-handlers'}}))
*   The document(s) bound to the workflow
*   The document(s) that are in input of the operation (Filter list operation)

Below is a sample of such a screen. In this section, we review the list of all possible filtering options that you may find in Studio Modeler.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Filtering Options Reference Page/Sample Filtering Screen
    name: Sample filtering screen.png
    studio_modeler#screenshot#up_to_date
--}}
![Sample Filtering Screen](nx_asset://beb8fb8b-11c2-4ae1-a000-b61183b3775b ?w=400,border=true)

*   **Current user has one of the permissions**: The logged in user has one of the selected permissions on the document.
*   **Current document has one of the types:** The document must implement one of the selected types for the filter to be evaluated to true.
*   **Current document has facet**: The document must implement the selected facet to be evaluated to true. Note that it would make sense that this field is changed to a multi-select one.
*   **Current document has life cycle**: The document must be in one of the given lifecycle states. You can separate the lifecycle states with a comma. This is particularly useful when you want to filter some buttons or workflows that have a consequence on the document lifecycle state: they can work only if the document is in a specific state.
*   **Document path starts with:** The document path is under the given path. For instance in Nuxeo default structure, if you create a workspace in the default domain, its path will start with `/default-domain/workspaces/`. You can use it for doing some configuration that would be specific to a part of your repository only.

    {{#> callout type='info' heading='How to get the path of a document'}}

    You can easily get the path of a document in Nuxeo Platform by watching its URL.

    For instance, if URL of the document is "https://myserverhost/nuxeo/nxpath/default/default-domain/workspaces/billing-activity-reports/2011/April", then path of the "April" folder is : `/default-domain/workspaces/billing-activity-reports/2011/April`.

    {{/callout}}
*   **Current document is**:

    *   Any: The default option; has no effect on the global filter definition.
    *   Regular document: Document is a "live document". That's the case of all the document created using the default interface capabilities under the workspace, but the versions.<br/>
        Impl: `!doc.isImmutable() && !doc.isProxy()`
    *   Document link: Document is a "live proxy". Nuxeo Core allows to create two types of proxies. A "live proxy", aka "document link", targets a "live document" (Regular document). A "version proxy" targets a version of a document.<br/>
        Impl: `!doc.isImmutable() && doc.isProxy()`
    *   Published document: Document is a version proxy, resulting of using the publishing feature.<br/>
        impl: `doc.isImmutable() && doc.isProxy()`
    *   Document proxy: Document is either a "Document link" or a "Published document".<br/>
        Impl: `doc.isProxy()`
    *   Document version: Document is a version (it is not a "live document").<br/>
        Impl: `doc.isVersion()`
    *   Immutable document: Document that cannot be changed. That's the case for a version, or a proxy that targets a version).<br/>
        Impl: `doc.isImmutable()`
    *   Mutable document: Document that can be changed. That's the case for a regular document or a live proxy.<br/>
        Impl: `!doc.isImmutable()`
*   **Current user is member of:** Logged in user is member of one of the listed groups, separated with commas.
*   **Current user is administrator**: Current user is member of the "administrators" group.
*   **Selection is not empty:** Some documents are selected in the user interface, in the Content tab of the current folder for instance.
*   **Custom EL expression**: See the page [Understand Expression and Scripting Languages Used in Nuxeo]({{page space='nxdoc' page='understand-expression-and-scripting-languages-used-in-nuxeo'}}).

Note: You can see in javadoc that `isImmutable()` returns `true` if the document is a version or a proxy to a version, `false` otherwise
