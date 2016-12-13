---
title: Versioning
review:
    comment: ''
    date: '2016-12-06'
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
<span style="color: rgb(51,51,51);">The Nuxeo Repository includes a versioning system.&nbsp;</span>At any moment, you can ask the repository to create and archive a version from a document. Versioning can be configured to be automatic (each document modification would create a new version) or on demand (this is bound to a radio button in default UI).

Each version has:

*   A label,
*   A major version number,
*   A minor version number.

The versioning service is configurable so you can define the numbering policy.&nbsp;In fact, even the version storage service is pluggable so you can define your own storage for versions.

## Functional Overview

{{{multiexcerpt 'versioning' page='USERDOC:Editing Content'}}}

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

## Plugging In a New VersioningService Implementation

For advanced uses, it's possible to plug in a new `VersioningService` implementation to define what happens at creation, save, check in and check out time. See the [VersioningService Javadoc](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/versioning/VersioningService.html) and the [versioningService extension point](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.versioning.VersioningService--versioningService) documentation for more about this.

&nbsp;
