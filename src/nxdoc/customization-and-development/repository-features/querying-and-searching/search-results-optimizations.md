---
title: Search Results Optimizations
review:
    comment: ''
    date: ''
    status: ok
labels:
    - search
    - performance
    - security-policy
    - optimization
confluence:
    ajs-parent-page-id: '17334424'
    ajs-parent-page-title: Querying and Searching
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Search+Results+Optimizations
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Search+Results+Optimizations'
    page_id: '17334505'
    shortlink: 6YAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/6YAIAQ'
    source_link: /display/NXDOC58/Search+Results+Optimizations
history:
    - 
        author: Solen Guitter
        date: '2013-09-04 18:24'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2012-11-26 16:21'
        message: ''
        version: '1'

---
{{! excerpt}}

When there are a lot of search results, search becomes slow, which results in very slow response times when users browse the application, which can even be unresponsive. When monitoring the server, memory is overused.

{{! /excerpt}}

The problem comes from the fact that "DocumentModelImpl" objects are created without making allowance for pagination. As the number of search results increase, so does the number of "DocumentModelImpl" objects. This problem is usually not detected during functional and performance testing because:

*   it doesn't cause any functional bug,
*   performance tests are usually about concurrent use of the application.

When a query is done, the only reason that explains the lack of pagination is when post-filtering is activated. It is activated by default when security policies are used in the application.

See the line 142 of&nbsp;`org.nuxeo.ecm.core.api.AbstractSession`:

```
                postFilterPermission = false;
                String repoName = getRepositoryName();
                postFilterPolicies = !securityService.arePoliciesExpressibleInQuery(repoName);
                postFilterFilter = filter != null
                        && !(filter instanceof FacetFilter);
                postFilter = postFilterPolicies || postFilterFilter;
```

and line 1442 of&nbsp;`org.nuxeo.ecm.core.api.AbstractSession`:

```
            DocumentModelList dms = results.getDocumentModels();
            if (!postFilter) {
                // the backend has done all the needed filtering
                return dms;
            }
            // post-filter the results "by hand", the backend couldn't do it
            long start = limit == 0 || offset < 0 ? 0 : offset;
            long stop = start + (limit == 0 ? dms.size() : limit);
            int n = 0;
            DocumentModelListImpl docs = new DocumentModelListImpl();
            for (DocumentModel model : dms) {
```

## Suggested Fix

When there are potentially a lot of search results (content views CoreQueryProvider for instance), security policies should explicitly provide a query "transformer". Otherwise, all the search results (DocumentModelImpl) are cached to perform a post-filtering.

To ignore security policies upon search, the&nbsp;`org.nuxeo.ecm.core.security.AbstractSecurityPolicy` methods are ignored for each security policy used:

```
 @Override
    public boolean isExpressibleInQuery(String repositoryName) {
        return true;
    }
    @Override
    public Transformer getQueryTransformer(String repositoryName) {
        return Transformer.IDENTITY;
    }
```

*   `isExpressibleInQuery` determines if a NXQL query can be used instead of the security policy. If yes, `getQueryTransformer` will be used.
*   `getQueryTransformer` gets the search query and adapts it to add some parameters if needed. If the original query is enough, `Transformer.IDENTITY` can be used.

So, you have to identify all security policies and make sure they can be expressed as a NXQL query.

## Checking

### Performance and Memory Improvements

To check how performance and memory are impacted:

Using JVisualVM, compare the DocumentModelImpl sampling results when you access a content view that returns a lot of search results with and without the modifications indicated in the above section.

If the results with the modifications are not satisfactory, you need to debug on&nbsp;`AbstractSession` and understand why post-filtering is activated.

You should also test the access to content views in general. The application should be more responsive.

### Non-Regression Testing

Since the correction impacts the content displayed when users browse the application, you need to make sure that the expected documents are displayed on the different content views. You can (or even should) run the unit and Selenium tests (or any other tests you may have) to make sure there is no regression.