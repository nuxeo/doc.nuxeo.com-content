---
title: Contributing a New Endpoint
review:
    comment: ''
    date: '2017-01-09'
    status: ok
labels:
    - lts2016-ok
    - endpoint
    - rest-api
    - rest-api-component
confluence:
    ajs-parent-page-id: '13664833'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Contributing+a+New+Endpoint
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Contributing+a+New+Endpoint'
    page_id: '16090270'
    shortlink: noT1
    shortlink_source: 'https://doc.nuxeo.com/x/noT1'
    source_link: /display/NXDOC/Contributing+a+New+Endpoint
tree_item_index: 700
history:
    -
        author: Solen Guitter
        date: '2013-10-30 13:20'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-10-30 13:19'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2013-10-29 01:40'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2013-10-29 01:38'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-10-29 01:38'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-10-29 01:38'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-09-25 16:57'
        message: ''
        version: '1'

---
It is possible to contribute a new endpoint to the API by creating new [web objects]({{page page='web-object-model'}}).

Thanks to WebEngine and its pluggability, we've provided a way to add other root endpoints that benefit from the same infrastructure. It's just a matter of providing a web object in another bundle, like the following:

```
@WebObject(type="productRoot")
public class ProductRoot {

    @GET
    public List getProducts() throws ClientException {
        ProductService ps = Framework.getLocalService(ProductService.class);
        return ps.getAllProducts(getContext().getCoreSession());
    }

    @Path("{productId}")
    public Object getProduct(@PathParam("productId") String productId) {
       return newObject("product", productId);
    }

}
```

This will expose two new APIs:

```
GET /nuxeo/api/v1/product
GET /nuxeo/api/v1/product/{productId}
```

Since Document Adapters are used as return types, the API will automatically benefit from the integrated adapter serializations (readers and writers). That means that it's very easy to build your own API and you inherit all the other pluggability mechanisms.
