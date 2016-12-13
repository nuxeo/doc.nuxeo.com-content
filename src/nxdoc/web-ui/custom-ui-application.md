---
title: Custom UI Application
review:
    comment: ''
    date: '2016-12-13'
    status: ok
toc: true
labels:
    - content-review-lts2016
    - nuxeo-elements-component
    - nuxeo-elements
confluence:
    ajs-parent-page-id: '26316892'
    ajs-parent-page-title: Web UI
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Custom+UI+Application
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Custom+UI+Application'
    page_id: '31687558'
    shortlink: hYPjACus
    shortlink_source: 'https://doc.nuxeo.com/x/hYPjACus'
    source_link: /display/NXDOC/Custom+UI+Application
tree_item_index: 300
history:
    -
        author: Tiago Cardoso
        date: '2016-12-13 14:05'
        message: ''
        version: '1'
    -
        author: Vladimir Pasquier
        date: '2016-12-13 14:03'
        message: ''
        version: '1'

---

## Bootstrap Nuxeo project

###Yo Generator

TODO

## Nuxeo Elements

**Nuxeo Elements** is provided to build upon the same goals of simplicity and pluggability and leverage emerging Web standards to take our component-based UI framework to the client with DOM as the "framework" and HTML as its familiar declarative syntax.

GitHub project: [https://github.com/nuxeo/nuxeo-elements](https://github.com/nuxeo/nuxeo-elements)

Online reference documentation: [http://nuxeo.github.io/nuxeo-elements](http://nuxeo.github.io/nuxeo-elements)

### Data Elements

Polymer pushes for a very declarative approach to building web applications with a "Everything is an element" philosophy. This includes both visual and non-visual/data elements, so even non UI elements can take advantage of data binding in a declarative way making for a very concise and clean code.

Our set of Nuxeo elements was built with this same philosophy in mind and promotes a clear separation between data and UI elements thus allowing users to use any of the existing UI elements while still relying on our data elements to "bind" these to Nuxeo.

In order to connect these elements to data in a Nuxeo instance we need to setup a connection, which, like everything else in Polymer, is an element called **nuxeo-connection**. Usage is as simple as:

```xml
<nuxeo-connection url="http://demo.nuxeo.com/nuxeo" username="Administrator" password="Administrator">
```

This elements uses a "conceptual singleton" (MonoState Pattern) so once it's configured on our application with the proper attributes all the other elements just need to use `<nuxeo-connection/>` to retrieve this "shared" instance. Since this is a singleton we ensure there's only one Nuxeo client shared by all the instances of our element.

As mentioned before, in Polymer, non visual elements are the standard way to expose remote services. So we built a set of custom Nuxeo data elements to interact with Nuxeo's APIs:

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Tag</th>
<th colspan="1">Description</th>
<th colspan="1">Example</th>
</tr>
<tr>
<td colspan="1">

nuxeo-connection

</td>

<td colspan="1">

Allows configuring the connection to a Nuxeo server.

</td>
<td colspan="1">

<pre><code class="xml">```
<nuxeo-connection
  url="http://demo.nuxeo.com/nuxeo"
  username="Administrator"
  password="Administrator">
</nuxeo-connection>
```
</code></pre>

</td>
</tr>

<tr>
<td colspan="1">

nuxeo-resource

</td>
<td colspan="1">

Exposes methods (get, post, put, delete) of a Nuxeo REST API resource at a given path.

</td>
<td colspan="1">

<pre><code class="xml">```
<nuxeo-resource
  path="/path/default-domain">
</nuxeo-resource>
```
</code></pre>

</td>
</tr>

<tr>
<td colspan="1">

nuxeo-document

</td>
<td colspan="1">

Extends `nuxeo-resource` to target Document resources by path or by uid.

</td>
<td colspan="1">

<pre><code class="xml">```
<nuxeo-document
  doc-path="/default-domain">
</nuxeo-document>
```
</code></pre>

</td>
</tr>

<tr>
<td colspan="1">

nuxeo-operation

</td>
<td colspan="1">

Allows calling an operation on a Nuxeo server.

</td>
<td colspan="1">

<pre><code class="xml">```
<nuxeo-operation
  op="Document.Query"
  params="{'query': 'select from Document'}">
</nuxeo-operation>
```
</code></pre>

</td>
</tr>

<tr>
<td colspan="1">

nuxeo-page-provider

</td>
<td colspan="1">

Wraps a `Repository.PageProvider` operation to provide paginated results for a given query.

</td>
<td colspan="1">

<pre><code class="xml">```
<nuxeo-page-provider
query="select from Document" 
page-size="5"
sort="dc:modified">
</nuxeo-page-provider>
```
</code></pre>


</td>
</tr>
</tbody>
</table>
</div>



**Note:** Most data elements support an `auto` attribute which, when set, automatically calls the GET method whenever the element properties change.

### ReactJS

TODO

### QA/Tests

TODO

### Performances

TODO
