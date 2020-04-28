---
title: Nuxeo Security System
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - security-policy
    - acl
    - bdelbosc
    - security
    - permission
    - security-component
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '20515363'
    ajs-parent-page-title: Security
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Security+System
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Security+System'
    page_id: '17794153'
    shortlink: aYQPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/aYQPAQ'
    source_link: /display/NXDOC/Nuxeo+Security+System
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-08-31 12:48'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2016-01-18 15:44'
        message: 'replace "Write" by "Edit"   '
        version: '7'
    -
        author: Alain Escaffre
        date: '2015-09-21 23:54'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2014-09-19 12:26'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-09-19 11:55'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-12-04 11:41'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2013-12-04 11:40'
        message: ''
        version: '2'
    -
        author: Thierry Delprat
        date: '2013-11-27 18:00'
        message: ''
        version: '1'

---
The Nuxeo repository security relies on a list of unitary permissions that are used within the repository to grant or deny access. These atomic permissions (Read_Children, Write_Properties ...) are grouped in Permissions Groups (Read, Edit, Everything ...) so that security can be managed more easily.

Nuxeo comes with a default set of permissions and permissions groups but you can contribute yours too.

## Contextual Security

In the Nuxeo Platform, security is contextual to a Document inside the repository. There is no notion of a global permission: permissions are always contextual to a content object.

For example:

*   You can have the "manage" permission to a given folder, workspace, domain or repository.
*   You can have read access on a specific document.

## ACL Model

The main model for security management is based on an ACL (Access Control List) system.

Each document can be associated with an ACP (Access Control Policy). This ACP is composed of a list of ACLs that itself is composed of ACEs (Access Control Entry).

Each ACE is a triplet:

*   User or Group,
*   Permission or Permission group,
*   Grant or deny.

ACPs are by default inherited: security check will be done against the merged ACP from the current document and all its parent. Inheritance can be blocked at any time if necessary.

Each document can be assigned several ACLs (one ACP) in order to better manage separation of concerns between the rules that define security:

*   The document has a default ACL: The one that can be managed via back-office UI,
*   The document can have several workflows ACLs: ACLs that are set by workflows including the document.

Thanks to this separation between ACLs, it's easy to have the document return to the right security if workflow is ended.

## Permissions

Nuxeo defines a set of atomic permissions: `READ_PROPERTIES`, `ADD_CHILDREN`, `READ_LIFECYCLE` ...

Nuxeo defines groups of permissions: `READ`, `WRITE`, `MANAGE` &hellip;

The repository always checks the Atomic permissions.

You can define custom permissions and groups of permissions.

You can use Core API to check permissions explicitly: `session.hasPermission(Document, Perm)`.

Permissions are checked against:

*   ACLs that are stored inside Documents,
*   inherited ACLs,
*   security policies (custom Java code that can enforce security contraints)

## Permissions Checks

Any access to the repository (including searches) will always enforce permission checks.

The security model being based on the content, in most cases services will simply rely on the repository to do the check on atomic permissions. However, it is also possible to have explicit check, possibly on a dedicated permission.

![]({{file name='checkPerm.png'}} ?w=650,h=250,border=true)

For higher level services and UI, you usually want to do a pre-check to avoid displaying an action (button, link ...) that the user is not allowed to perform.

For that the Nuxeo Platform uses the [Action and Filter]({{page page='actions-links-buttons-icons-tabs-and-more'}}) system:

![]({{file name='filterCheckPerm.png'}} ?w=650,h=332,border=true)

Filters are a guard on top of the low level permission check. They are usually defined using a mix of:

*   permissions checks,
*   group membership,
*   document types,
*   EL expression.

## Non Contextual Checks

Sometimes, you may need to do a check globally, without any underlying context. For that there are several options:

*   Use groups (or virtual groups) to check for a capacity.
    This is how we manage global screens in the Nuxeo Platform.
    Virtual groups and roles are basically the same.
    You can contribute specific virtual groups using the [GroupComputer Service](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.computedgroups.ComputedGroupsServiceImpl--computer).

*   Use the `Role` attribute of the Principal.
    Via UserManager you can contribute your own principal.
*   Use a normal permission check on a dedicated repository object:

    *   inside personal workspace,
    *   inside a hidden root of the repository,
    *   ...

## Adding Custom Security Logic

There are several possibilities:

*   You can define custom permissions or groups of permissions.
*   You can add [Security Policies]({{page page='security-policy-service'}}):

    *   Document attributes vs User attributes:
        Documents with amount > X are only accessible to user with level >Y.
    *   Document state or lock vs groups
    *   Any custom logic
*   You can configure custom action filters: primitives + EL and custom beans.
*   You can configure the user profile:
    *   custom attributes,
    *   virtual groups.

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Security]({{page page='security'}})
- [Security Recommendations]({{page page='security-recommendations'}})
- [File Download Security Policies]({{page page='file-download-security-policies'}})
- [ACLs]({{page page='acls'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
