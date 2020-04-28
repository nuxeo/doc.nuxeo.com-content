---
title: Versioning
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - link-update
    - versioning
    - core-component
    - fguillaume
    - lts2017-ok
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
The Nuxeo Repository includes a versioning system. At any time, you can ask the repository to create and archive a version of a document. Versioning can be done automatically, according to some versioning policies, or on-demand, through the UI.

Each version has:

- A label
- A major version number
- A minor version number

The versioning service is configurable so you can define the numbering policy.

## Concepts

- **Placeful**: A placeful document is one which is stored in a folder, and therefore has a parent in which it is visible as a child.

- **Placeless**: A placeless document isn't stored in a given folder, it's just available in the storage through its id. Having no parent folder it doesn't inherit any security, so it is usually only accessible by system code.

- **Working Copy**: The document that you edit. It is usually stored in a Workspace's folder but this is just convention. It is also often called the **Live Document**. There is at most one Working Copy per version series. In other systems it is also called the Private Working Copy because only the user that created it can work on it; this is less strict in the Nuxeo Platform.

- **Version**: An immutable, archived version of a document. It is created from a **working copy** by a **check in** operation.

- **Version Number**: The label which is uniquely attached to a version. It formed of two integers separated by a dot, like "2.1". The first integer is the major version number, the second one is the minor version number.

- **Major Version**: A version whose minor version number is 0\. It follows that a minor version is a version whose minor version number is not 0.

- **Version Series**: The list of versions that have been successively created from an initial **working copy**. The version series id is a unique identifier that is shared by the working copy and all the versions of the version series.

- **Versionable Document**: The document which can be versioned, in effect the **working copy**.

- **Check In**: The operation by which a new **version** is created from a **working copy**.

- **Check Out**: The operation by which a **working copy** is made available.

## Check In and Check Out

"Check In" and "Check Out" in the Nuxeo Platform both refer to operations that can be carried out on documents, and to the state a working copy can be in.

### Checked In and Checked Out States

A working copy in the Checked Out state can be modified freely by users having access rights to the document. A document ceases to be Checked Out when the Check In operation is invoked. After initial creation a document is in the Checked Out state.

A working copy in the Checked In state is identical to the version that was created when the Check In operation was invoked on the working copy. In the Checked In state, a working copy is (at low level) not modifiable. To be modified it must be switched to the Checked Out state first. This latter operation is automatically done in the Nuxeo Platform when a document is modified.

### Check In and Check Out Operations

From a working copy in the Checked Out state, invoking the Check In operation does several things:

- the final version number is determined,
- a new version is created,
- the working copy is placed in the Checked In state.

When invoking the Check In operation, a flag is passed to indicate whether a major version or a minor version should be created. Depending on whether the new version should be major or minor, the version number is incremented differently; for instance, starting from a working copy with the version number "2.1" (displayed as "2.1+"), a minor version would be created as "2.2" and a major version as "3.0".

Given a Checked In working copy, invoking the Check Out operation has little visible effect, it's just a state change for the working copy. A "+" is displayed after the version number to make this apparent, see below.

{{#> callout type='note' }}

In other systems than the Nuxeo Platform, the Check In operation that creates a new version removes the Working Copy, whose role has been fulfilled. This is not the case in the Nuxeo Platform, where the Working Copy remains in a special Checked In state. In these other systems, the Check Out operation can also be invoked on a Version to create a new Working Copy (this assumes that there is no pre-existing Working Copy in the system). This kind of operation will be made available in future versions of the platform but is not present at the moment.

{{/callout}}

## Version Number

The initial version number of a freshly created working copy is "0.0".

When displaying the version number for a Checked Out document, the version number is usually displayed with a "+" following it, to show that it's not the final version number but that the working copy is modified and derived from that version. The final version number will be determined at Check In time. The exception to this display rule is the version "0.0", because displaying "0.0+" would be redundant and misleading as there is actually no previously archived "0.0" version from which it is derived.

The version number is changed by a Check In operation; either the minor version number is incremented, or the major version number is incremented and the minor version number is set to 0.

## {{> anchor 'automatic-versioning-system'}}Automatic Versioning System

The automatic versioning system is based on a combination of policies and filters. Policies state the behavior of desired versioning and filters state whether or not document needs to be versioned.

The automatic system is triggered:
- For `createDocument`: after document save in DB
- For `saveDocument`:
  - Before document save in DB and after firing `beforeDocumentModification` event
  - After document save in DB and before firing `documentModified` event

During this call to the automatic versioning system, the engine will search for the first policy whose filter(s) match the current context.
If a matching policy is found, the engine will use the increment option to check in the document (unless `increment = NONE`), then exit.

The system is not triggered before update if the document is already checked in.

The system is not triggered after update if a manual versioning is asked (`VersioningService.VERSIONING_OPTION` in document context data).

To contribute new policies and filters, check out the extension points documentation:
- [policies](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.api.versioning.VersioningService--policies)
- [filters](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.api.versioning.VersioningService--filters)

### {{> anchor 'versioning-policies'}}Versioning Policies

Each versioning policy defines:
- A unique id which allows to override default policies
- The increment policy (between `NONE`, `MINOR` or `MAJOR`)
- If the versioning has to be applied before or after the actual modification (`beforeUpdate` defaults to false)
- The order in which the policy should be taken into account related to other policies.

Example:

```xml
<extension target="org.nuxeo.ecm.core.api.versioning.VersioningService" point="policies">
  <policy id="note-and-file-policy" order="1" beforeUpdate="true" increment="MAJOR">
    <filter-id>note-filter</filter-id>
    <filter-id>file-filter</filter-id>
  </policy>
</extension>
```
Filters referenced by the policy are AND-ed: All filters must match in order to apply the policy.

Setting `NONE` as increment policy will stop policies evaluation if no policy with a lower order applies.

{{#> callout type='note' }}

Nuxeo reserved order range `[1,10]` to contribute system policies. Notice that default contributions are also provided with a higher range; These are not system policies and as such have a lower impact, making them easier to override.

{{/callout}}

### {{> anchor 'versioning-filters'}}Versioning Filters

A versioning filter defines the condition(s) the document has to fulfill so that the versioning can be applied. The standard filter can be composed of the following elements:

- **Type**: On which document type the versioning applies
- **Schema**: Apply the versioning if the document contains this schema
- **Facet**: Apply the versioning if the document contains this facet
- **Condition**: Defines a condition in [EL]({{page page='understand-expression-and-scripting-languages-used-in-nuxeo#main-differences-between-languages'}}) to access properties of the document before/after modification

Example:

```xml
<extension target="org.nuxeo.ecm.core.api.versioning.VersioningService" point="filters">
  <filter id="my-standard-filter">
      <type>MyDocType</type>
      <schema>MySchema</schema>
      <facet>MyFacet</facet>
      <condition>#{previousDocument.foo != currentDocument.foo}</condition>
  </filter>
</extension>
```

Same element tags are OR-ed and different elements are AND-ed.

The example below will be interpreted as:

```
(documentType == type1 || documentType == type2) && document.hasSchema(schema1)
```

```xml
<extension target="org.nuxeo.ecm.core.api.versioning.VersioningService" point="filters">
  <filter id="my-standard-filter">
    <type>type1</type>
    <type>type2</type>
    <schema>schema1</schema>
  </filter>
</extension>
```

If the standard filter is not enough to cover all your requirements, the filter can be customized with a Java class implementing the [VersioningPolicyFilter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/versioning/VersioningPolicyFilter.html) interface to define a particular condition:

Example:

```xml
<filter id="my-class-filter" class="foo.bar.CustomVersioningFilter"/>
```

### {{> anchor 'source-based-versioning'}}Source-Based Versioning

For source-based versioning (like with [Nuxeo Drive]({{page version='' space='client-apps' page='nuxeo-drive'}}) or the [REST API]({{page version='' space='nxdoc' page='rest-api'}}) for example), a property is provided in the context data of the document (`source`), so it can be accessed in the EL condition.

We inject the source context parameter value for:
- `drive`
- REST API, by getting its value from the [HTTP header]({{page page='special-http-headers'}}) `source`.
- file importers, the value will be `fileimporter-%NAME%`
- `bulkEdit`

See [the example](#source-based).

For more details about source-based versioning with Nuxeo Drive, check out the page [How to Customize Nuxeo Drive Versioning Policy]({{page space='client-apps' page='how-to-customize-nuxeo-drive-versioning-policy'}}).

### Automatic Versioning Example

#### Default Policies

Below are the default versioning policies defined in Nuxeo Platform:

```xml
<extension target="org.nuxeo.ecm.core.api.versioning.VersioningService" point="policies">
  <policy id="no-versioning-for-system-before-update" beforeUpdate="true" increment="NONE" order="1">
    <filter-id>system-document</filter-id>
  </policy>
  <policy id="no-versioning-for-system-after-update" increment="NONE" order="1">
    <filter-id>system-document</filter-id>
  </policy>
  <policy id="note-as-wiki" increment="MINOR" order="50">
    <filter-id>note-filter</filter-id>
  </policy>
  <policy id="collaborative-save" increment="MINOR" beforeUpdate="true" order="100">
    <filter-id>last-contributor-different-filter</filter-id>
  </policy>
</extension>

<extension target="org.nuxeo.ecm.core.api.versioning.VersioningService" point="filters">
  <filter id="system-document" class="org.nuxeo.ecm.core.versioning.NoVersioningPolicyFilter" />
  <filter id="note-filter">
    <type>Note</type>
  </filter>
  <filter id="last-contributor-different-filter">
    <schema>file</schema>
    <condition>#{previousDocument.dc.lastContributor != currentDocument.dc.lastContributor}</condition>
  </filter>
</extension>
```

What happens when you save a document using `CoreSession#saveDocument`?

1. Before saving the document in DB, the engine will evaluate `no-versioning-for-system-before-update`:
  - If its filter matches (here `system-document`) then no version will be created because policy increment is `NONE`
  - If the filter doesn't match, next `beforeUpdate` policy will be evaluated, here `collaborative-save`: If its filter matches then a `MINOR` version will be created before saving document in DB. The filter matches if the current document has schema `file` and previous contributor is not the current one.
  - If it doesn't match `collaborative-save`, no more policy is found and no versioning is applied.

2. After saving the document in DB, the engine will evaluate `no-versioning-for-system-after-update`.
  - If its filter matches (here `system-document`) then no version will be created because policy increment is `NONE`
  - If it doesn't match, next after update policy will be evaluated, here `note-as-wiki`: If document is a Note, a `MINOR` version will be performed
  - If it doesn't match `note-as-wiki`, no more policy is found and no versioning is applied.

{{#> callout type='note' }}
`system-document` is a filter used to not automatically version system document such as workspace or document having `SystemDocument` facet.
{{/callout}}

#### Disabling Policy

In order to disable a built-in policy, you can declare the policy in your component with an empty increment.

```xml
<!-- Don't forget to require the component defining the policy -->
<require>org.nuxeo.ecm.core.versioning.default-policies</require>
<extension target="org.nuxeo.ecm.core.api.versioning.VersioningService" point="policies">
  <policy id="note-as-wiki"/>
</extension>
```

#### Source-Based

In this example will see how we can leverage the source-based versioning to automatically version document handled by a specific layer.

1. Define a versioning rule for that:
  ```xml
  <component name="">
    <extension target="org.nuxeo.ecm.core.api.versioning.VersioningService" point="policies">
      <policy id="my-source-policy" order="20" increment="MINOR">
        <filter-id>my-source-versioning-filter</filter-id>
      </policy>
    </extension>

    <extension target="org.nuxeo.ecm.core.api.versioning.VersioningService" point="filters">
      <filter id="my-source-versioning-filter">
        <condition>#{currentDocument.contextData.source == "mySource"}</condition>
      </filter>
    </extension>

  </component>
  ```
2. Use this source to trigger an automatic versioning. Note that in a real case we will provide more conditions on the filter.
  - From Java API:
    ```java
    private CoreSession session;

    public DocumentModel updateMyDoc(DocumentModel doc) {
      // do some stuff on documents
      doc.putContextData(CoreSession.SOURCE, "mySource");
      return session.saveDocument(doc);
    }
    ```

  - From REST:
    ```bash
    curl -XPUT -u Administrator:Administrator http://localhost:8080/nuxeo/api/v1/id/37b1502b-26ff-430f-9f20-4bd0d803191e \
         -H 'Accept: application/json' \
         -H 'source: mySource' \
         -d '{
            "entity-type": "document",
            "repository": "default",
            "uid": "37b1502b-26ff-430f-9f20-4bd0d803191e",
            "properties": {
                "dc:title": "The new title",
                "dc:description": "Updated via a very cool and easy REST API",
            }
        }'
    ```
