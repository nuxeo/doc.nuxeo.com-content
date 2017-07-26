---
title: Versioning
review:
    comment: ''
    date: '2017-03-29'
    status: ok
labels:
    - lts2016-ok
    - link-update
    - versioning
    - core-component
toc: true
confluence:
    ajs-parent-page-id: '950287'
    ajs-parent-page-title: Content Repository
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Versioning
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Versioning'
    page_id: '4687872'
    shortlink: AIhH
    shortlink_source: 'https://doc.nuxeo.com/x/AIhH'
    source_link: /display/NXDOC/Versioning
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-08-31 15:35'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2015-08-18 16:05'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2015-03-20 10:35'
        message: Add info about behavior when saving a document without modifying it
        version: '15'
    -
        author: Solen Guitter
        date: '2014-12-05 18:36'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2014-09-19 14:31'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-08-21 11:07'
        message: Removed 5.4 reference and formatting
        version: '12'
    -
        author: Solen Guitter
        date: '2014-01-16 14:35'
        message: Added related topics
        version: '11'
    -
        author: Solen Guitter
        date: '2013-11-13 15:59'
        message: Updated links and terminology
        version: '10'
    -
        author: Solen Guitter
        date: '2013-09-04 16:42'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2012-09-11 21:43'
        message: Migrated to Confluence 4.0
        version: '8'
    -
        author: Solen Guitter
        date: '2012-09-11 21:43'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2012-05-21 13:59'
        message: Updated links to 5.5
        version: '6'
    -
        author: Solen Guitter
        date: '2012-05-21 11:18'
        message: Updated link to 5.5
        version: '5'
    -
        author: Florent Guillaume
        date: '2011-12-26 17:33'
        message: ''
        version: '4'
    -
        author: Florent Guillaume
        date: '2010-12-24 14:50'
        message: ''
        version: '3'
    -
        author: Florent Guillaume
        date: '2010-11-29 14:20'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2010-11-29 11:32'
        message: ''
        version: '1'

---
The Nuxeo Repository includes a versioning system. At any moment, you can ask the repository to create and archive a version from a document. Versioning can be done automatically according to some versioning policies or on demand through the UI.

Each version has:

*   A label
*   A major version number
*   A minor version number

The versioning service is configurable so you can define the numbering policy. In fact, even the version storage service is pluggable so you can define your own storage for versions.

## Functional Overview

{{{multiexcerpt 'versioning-functional-overview' page='USERDOC:Browse'}}}

**To create new version in a Web UI application:**

{{{multiexcerpt name='web-ui-manual-versioning' page='USERDOC:Browse'}}}

**To create a new version of your document in a JSF application**:

{{{multiexcerpt name='jsf-ui-manual-versioning' page='USERDOC:Editing Content'}}}

## Concepts

*   **Placeful**. A placeful document is one which is stored in a folder, and therefore has a parent in which it is visible as a child.
*   **Placeless**. A placeless document isn't stored in a given folder, it's just available in the storage through its id. Having no parent folder it doesn't inherit any security, so it is usually only accessible by unrestricted code.
*   **Working Copy**. The document that you edit. It is usually stored in a Workspace's folder but this is just convention. It is also often called the **Live Document**. There is at most one Working Copy per version series. In other systems it is also called the Private Working Copy because only the user that created it can work on it; this is looser in the Nuxeo Platform.
*   **Version**. An immutable, archived version of a document. It is created from a **working copy** by a **check in** operation.
*   **Version Number**. The label which is uniquely attached to a version. It formed of two integers separated by a dot, like "2.1". The first integer is the major version number, the second one is the minor version number.
*   **Major Version**. A version whose minor version number is 0\. It follows that a minor version is a version whose minor version number is not 0.
*   **Version Series**. The list of versions that have been successively created from an initial **working copy**. The version series id is a unique identifier that is shared by the working copy and all the versions of the version series.
*   **Versionable Document**. The document which can be versioned, in effect the **working copy**.
*   **Check In**. The operation by which a new **version** is created from a **working copy**.
*   **Check Out**. The operation by which a **working copy** is made available.

## Check In and Check Out

"Check In" and "Check Out" in the Nuxeo Platform both refer to operations that can be carried out on documents, and to the state a working copy can be in.

### Checked In and Checked Out States

A working copy in the Checked Out state can be modified freely by users having access rights to the document. A document ceases to be Checked Out when the Check In operation is invoked. After initial creation a document is in the Checked Out state.

A working copy in the Checked In state is identical to the version that was created when the Check In operation was invoked on the working copy. In the Checked In state, a working copy is (at low level) not modifiable. To be modified it must be switched to the Checked Out state first. This latter operation is automatically done in the Nuxeo Platform when a document is modified.

### Check In and Check Out Operations

From a working copy in the Checked Out state, invoking the Check In operation does several things:

*   the final version number is determined,
*   a new version is created,
*   the working copy is placed in the Checked In state.

When invoking the Check In operation, a flag is passed to indicate whether a major version or a minor version should be created. Depending on whether the new version should be major or minor, the version number is incremented differently; for instance, starting from a working copy with the version number "2.1" (displayed as "2.1+"), a minor version would be created as "2.2" and a major version as "3.0".

Given a Checked In working copy, invoking the Check Out operation has little visible effect, it's just a state change for the working copy. A "+" is displayed after the version number to make this apparent, see below. If no modification was actually done on the document when the user clicks Save and invokes the Check Out operation, the version working copy remains in the Checked In state: the `dc:contributors` and `dc:modified` fields are not updated and no "+" is displayed next to the version number.

{{#> callout type='note' }}

In other systems than the Nuxeo Platform, the Check In operation that creates a new version removes the Working Copy, whose role has been fulfilled. This is not the case in the Nuxeo Platform, where the Working Copy remains in a special Checked In state. In these other systems, the Check Out operation can also be invoked on a Version to create a new Working Copy (this assumes that there is no pre-existing Working Copy in the system). This kind of operation will be made available in future versions of the platform but is not present at the moment.

{{/callout}}

## Version Number

The initial version number of a freshly created working copy is "0.0".

When displaying the version number for a Checked Out document, the version number is usually displayed with a "+" following it, to show that it's not the final version number but that the working copy is modified and derived from that version. The final version number will be determined at Check In time. The exception to this display rule is the version "0.0", because displaying "0.0+" would be redundant and misleading as there is actually no previously archived "0.0" version from which it is derived.

The version number is changed by a Check In operation; either the minor version number is incremented, or the major version number is incremented and the minor version number is set to 0.

### {{> anchor 'versioning-policies'}}Versioning Policies and Filters

The automatic versioning system is based on a combination of policies, where each of them is composed by one or multiple filters. Each versioning policy defines:
- A unique id which allows to override default policies
- The numbering policy (between `NONE`, `MINOR` or `MAJOR`)
- If the versioning has to be applied before or after the actual modification
- The order in which the policy should be taken into account.

Example:

```xml
<extension target="org.nuxeo.ecm.core.versioning.VersioningService" point="policies">
    <policy id="note-and-file-policy" order="1" beforeUpdate="true" increment="MAJOR">
        <filter-id>note-filter</filter-id>
        <filter-id>file-filter</filter-id>
    </policy>
</extension>
```
Filters referenced by the policy are OR-ed. At least one filter has to match in order to apply the policy.

Setting `NONE` as numbering policy will stop if no policy with a lower order applies.

{{#> callout type='note' }}

Nuxeo reserved order range `[1,10]` to contribute system policies. Notice that default contributions are also provided with a higher range; these are not system policies and as such have a lower impact, making them easier to be overriden.

{{/callout}}

A versioning filter defines the condition(s) the document has to fulfill so that the versioning can be applied. The standard filter can be composed of the following elements:

*   **Type**: On which document type the versioning applies
*   **Schema**: Apply the versioning if the document contains this schema
*   **Facet**: Apply the versioning if the document contains this facet
*   **Condition**: Defines a condition in [EL]({{page page='understand-expression-and-scripting-languages-used-in-nuxeo#main-differences-between-languages'}}) to access properties of the document before/after modification

Example:

```xml
<extension target="org.nuxeo.ecm.core.versioning.VersioningService" point="filters">
    <filter id="my-standard-filter">
        <type>MyDocType</type>
        <schema>MySchema</schema>
        <facet>MyFacet</facet>
        <condition>#{previousDocument.foo != currentDocument.foo}</condition>
    </filter>
</extension>
```

If the standard filter is not enough to cover all your requirements, the filter can be customized with a Java class implementing the [VersioningPolicyFilter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/versioning/VersioningPolicyFilter.html) interface to define a particular condition:

Example:

```xml
<filter id="my-class-filter" class="foo.bar.CustomVersioningFilter"/>
```

### {{> anchor 'source-based-versioning'}}Source-Based Versioning

For source-based versioning (like with [Nuxeo Drive]({{page version='' space='nxdoc' page='nuxeo-drive'}}) or the [REST API]({{page version='' space='nxdoc' page='rest-api'}}) for example), a property is provided in the context data of the document, so it can be accessed in the EL condition.

Example:
```xml
<policy id="rest-based-policy" order="1" increment="MINOR">
    <filter-id>rest-based-versioning-filter</filter-id>
</policy>

...

<filter id="rest-based-versioning-filter">
    <condition>#{currentDocument.contextData.source == "REST"}</condition>
</filter>
```

The previous example defines the [HTTP header]({{page page='special-http-headers'}}) `source` to be able to trigger the source versioning through the REST API.

For more details about source-based versioning with Nuxeo Drive, check out the page [How to Customize Nuxeo Drive Versioning Policy]({{page page='how-to-customize-nuxeo-drive-versioning-policy'}}).

To contribute new policies and filters, check out the extension points documentation:
- [policies](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.versioning.VersioningService--policies)
- [filters](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.versioning.VersioningService--filters)

## Plugging In a New VersioningService Implementation

For advanced uses, it's possible to plug in a new `VersioningService` implementation to define what happens at creation, save, check in and check out time. See the [VersioningService Javadoc](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/versioning/VersioningService.html) and the [versioningService extension point](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.versioning.VersioningService--versioningService) documentation for more about this.
