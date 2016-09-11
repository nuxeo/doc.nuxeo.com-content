---
title: ACLs
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '22380780'
    ajs-parent-page-title: Security
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: ACLs
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/ACLs'
    page_id: '22380777'
    shortlink: 6YBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/6YBVAQ'
    source_link: /display/NXDOC60/ACLs
history:
    - 
        author: Alain Escaffre
        date: '2014-09-19 12:16'
        message: ''
        version: '1'

---
By default, security is always on inside Nuxeo repository: each time a document is accessed or a search is issued, security is verified.

The Nuxeo repository security relies on a list of unitary permissions that are used within the repository to grant or deny access. These atomic permissions (Read_Children, Write_Properties ...) are grouped in Permissions Groups (Read, Write, Everything ...) so that security can be managed more easily.

Nuxeo comes with a default set of permissions and permissions groups but you can contribute yours too.

### ACL Model

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