---
title: Security Policy Service
review:
    comment: ''
    date: '2018-10-10'
    status: ok
labels:
    - lts2016-ok
    - link-update
    - security-policy
    - community-links
    - acl
    - bdelbosc
    - security-component
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '20515363'
    ajs-parent-page-title: Security
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Security+Policy+Service
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Security+Policy+Service'
    page_id: '4688923'
    shortlink: G4xH
    shortlink_source: 'https://doc.nuxeo.com/x/G4xH'
    source_link: /display/NXDOC/Security+Policy+Service
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2014-12-05 18:34'
        message: ix links to point to latest versio
        version: '10'
    -
        author: Solen Guitter
        date: '2014-02-27 11:12'
        message: Fixed typos
        version: '9'
    -
        author: Damien Metzler
        date: '2014-02-26 11:53'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-11-13 15:54'
        message: Updated links
        version: '7'
    -
        author: Solen Guitter
        date: '2013-09-04 18:26'
        message: Formatting
        version: '6'
    -
        author: Solen Guitter
        date: '2013-08-27 15:23'
        message: Added TOC
        version: '5'
    -
        author: Florent Guillaume
        date: '2013-08-13 12:09'
        message: adding cmisql
        version: '4'
    -
        author: Solen Guitter
        date: '2012-09-11 22:25'
        message: Migrated to Confluence 4.0
        version: '3'
    -
        author: Solen Guitter
        date: '2012-09-11 22:25'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2010-12-28 17:15'
        message: ''
        version: '1'
---

{{! excerpt}}
The Security Policy Service provides an extension point to plug custom security policies that do not rely on the standard ACLs for security. For instance, it can be used to define permissions according to the document metadata, or information about the logged in user.
{{! /excerpt}}

## Security Policy Architecture

A security policy is a class implementing the [`org.nuxeo.ecm.core.security.SecurityPolicy`](http://community.nuxeo.com/api/nuxeo/10.10/javadoc/org/nuxeo/ecm/core/security/SecurityPolicy.html) interface; it is strongly advised to extend `org.nuxeo.ecm.core.security.AbstractSecurityPolicy` for future compatibility.

The class must be registered through the [`policies`](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.security.SecurityService--policies) extension point of the [`org.nuxeo.ecm.core.security.SecurityService`](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewComponent/org.nuxeo.ecm.core.security.SecurityService) component.

A security policy has two important aspects, materialized by different methods of the interface:

*   how security is checked on a given document (method `checkPermission`),
*   how security is applied to NXQL, CMISQL and Elasticsearch Passthrough searches (methods `getQueryTransformer`).

### Document Security Check

To check security on a given document, Nuxeo Core calls `checkPermission` with a number of parameters, among which the document, the user and the permission to check, on all the security policies registered. The policies should return `Access.DENY` or `Access.UNKNOWN` based on the information provided. If `Access.DENY` is returned, then access to the document (for the given permission) will be denied. If `Access.UNKNOWN` is returned, then other policies will be checked. Finally if all policies return `Access.UNKNOWN` then standard Nuxeo EP ACLs will be checked.

There is a third possible value, `Access.GRANT`, which can immediately grant access for the given permission, but this bypasses ACL checks. This is all right for most permissions but not for the `Browse` permission, because `Browse` is used for NXQL and CMISQL searches in which case it's recommended to implement `getQueryTransformer` instead (see below).

Note that `checkPermission` receives a document which is a `org.nuxeo.ecm.core.model.Document` instance, different from and at a lower level than the usual `org.nuxeo.ecm.core.api.DocumentModel` manipulated by user code.

### NXQL Security Check

All NXQL queries have ACL-based security automatically applied with the `Browser` permission (except for superusers).

A dedicated security policy can modify this behavior by adding new restrictions on top of the ACLs. This is done by overriding `isExpressibleInQuery` (it has to return `true`) and implementing `getQueryTransformer`.

The `getQueryTransformer(repositoryName)` method returns a `SQLQuery.Transformer` instance. The custom `SQLQuery.Transformer` has to override the `transform` method, taking as parameter an NXQL query in the form of a `org.nuxeo.ecm.core.query.sql.model.SQLQuery` [Abstract Syntax Tree (AST)](https://en.wikipedia.org/wiki/Abstract_syntax_tree) and a `NuxeoPrincipal`. The custom transformer has to manipulate the AST to add new restrictions to implement the security policy.
Note that ACL checks will always be applied after this transformation.

{{#> callout type='info' heading='Memo'}}
To formalize the security policy, we advice to express it using the following pattern:
*Given* that the current user has these *characteristics*,
We are searching for documents from the original query that in addition are *filtered* by X *criteria*.
{{/callout}}

{{#> callout type='info' heading='Unrestricted sessions'}}
If the query has been called in the context of an unrestricted session, the principal will be `system`. It is a good practice to check for that username since if the query is run unrestrictedly, it functionally means that you should not restrict anything with the query transformer
{{/callout}}

### CMISQL Security Check

Since Nuxeo 5.6.0-HF21 and Nuxeo 5.7.2, all CMISQL queries also require implementation of the relevant  `getQueryTransformer` API in order to secure CMIS-based searches.

The `getQueryTransformer(repositoryName, "CMISQL")` method returns a `SecurityPolicy.QueryTransformer` instance, which is a class with one `transform` method taking a query in the form of `String`. It should transform this query in order to add whatever restrictions are needed (this will require parsing the CMISQL and adding whatever clauses are needed). Note that ACL checks will always be applied after this transformation.

### Elasticsearch Passthrough Check

Nuxeo [Elasticsearch Passthrough]({{page page='elasticsearch-passthrough'}}) adds filters to take in account ACL security and security policy that are expressible in NXQL (`isExpressibleInQuery` returns `true`).

{{#> callout type='warning' }}
If you define a custom security policy that is not expressible in NXQL you should not enable the Nuxeo Elasticsearch passthrough.
{{/callout}}

## Example Security Policy Contribution

To register a security policy, you need to write a contribution specifying the class name of your implementation.

```
<?xml version="1.0"?>
<component name="com.example.myproject.securitypolicy">
  <extension target="org.nuxeo.ecm.core.security.SecurityService"
    point="policies">
    <policy name="myPolicy"
      class="com.example.myproject.NoFileSecurityPolicy" order="0" />
  </extension>
</component>
```

Here is a sample contributed class:

```
import static org.nuxeo.ecm.core.query.sql.model.Predicates.noteq;
import static org.nuxeo.ecm.core.query.sql.model.Predicates.and;

import org.nuxeo.ecm.core.api.NuxeoPrincipal;
import org.nuxeo.ecm.core.api.security.ACP;
import org.nuxeo.ecm.core.api.security.Access;
import org.nuxeo.ecm.core.model.Document;
import org.nuxeo.ecm.core.query.sql.NXQL;
import org.nuxeo.ecm.core.query.sql.model.Predicate;
import org.nuxeo.ecm.core.query.sql.model.SQLQuery;
import org.nuxeo.ecm.core.query.sql.model.WhereClause;
import org.nuxeo.ecm.core.security.AbstractSecurityPolicy;
import org.nuxeo.ecm.core.security.SecurityPolicy;

/**
 * Sample policy that denies access to File objects.
 */
public class NoFileSecurityPolicy extends AbstractSecurityPolicy implements SecurityPolicy {

    @Override
    public Access checkPermission(Document doc, ACP mergedAcp,
                                  NuxeoPrincipal principal, String permission,
                                  String[] resolvedPermissions, String[] additionalPrincipals) {
        // Note that doc is NOT a DocumentModel
        if ("File".equals(doc.getType().getName())) {
            return Access.DENY;
        }
        return Access.UNKNOWN;
    }

    @Override
    public boolean isRestrictingPermission(String permission) {
        // could only restrict Browse permission, or others
        return true;
    }

    @Override
    public boolean isExpressibleInQuery(String repositoryName) {
        return true;
    }

    @Override
    public SQLQuery.Transformer getQueryTransformer(String repositoryName) {
        return NO_FILE_TRANSFORMER;
    }

    public static final SQLQuery.Transformer NO_FILE_TRANSFORMER = new NoFileTransformer();

    /**
     * Sample Transformer that adds {@code AND ecm:primaryType <> 'File'} to the query.
     */
    public static class NoFileTransformer implements SQLQuery.Transformer {

        /* {@code ecm:primaryType <> 'File'} */
        public static final Predicate NO_FILE = noteq(NXQL.ECM_PRIMARYTYPE, "File");

        @Override
        public SQLQuery transform(NuxeoPrincipal principal, SQLQuery query) {
            if (!principal.isAdministrator()) {
                WhereClause where = query.where;
                Predicate predicate;
                if (where == null || where.predicate == null) {
                    predicate = NO_FILE;
                } else {
                    // adds an AND ecm:primaryType <> 'File' to the WHERE clause
                    predicate = and(NO_FILE, where.predicate);
                }
                // return query with updated WHERE clause
                return new SQLQuery(query.select, query.from, new WhereClause(predicate),
                        query.groupBy, query.having, query.orderBy, query.limit, query.offset);
            }
            return query;
        }
    }

}
```

### CMISQL Security Checks

To find examples of security policies using CMISQL query transformers, please check the  [`TitleFilteringSecurityPolicy2`](https://github.com/nuxeo/nuxeo-chemistry/blob/master/nuxeo-opencmis-tests/src/test/java/org/nuxeo/ecm/core/opencmis/impl/TitleFilteringSecurityPolicy2.java) in the unit tests.
