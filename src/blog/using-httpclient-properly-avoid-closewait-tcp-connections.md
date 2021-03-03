---
title: Using HttpClient Properly to Avoid CLOSE_WAIT TCP Connections
description: Blog posts to discover how to use HttpClient properly to avoid CLOSE_WAIT TCP connections
review:
    comment: ''
    date: ''
    status: ok
tree_item_index: 200
---
While I was debugging TCP connections stuck in the CLOSE_WAIT state for one of our customers, I discovered we were using HttpClient incorrectly. We're not alone in this case, as you'll find out if you [google HttpClient CLOSE_WAIT](http://www.google.com/search?q=HttpClient+CLOSE_WAIT), but it's not very intuitive. Even the [official tutorial](http://hc.apache.org/httpclient-legacy/tutorial.html) is wrong, so I'm describing the issue here.

Apache `HttpClient` is usually used like this in basic mode:

```
HttpClient httpClient = new HttpClient();
HttpMethod method = new GetMethod(uri);
try {
int statusCode = httpClient.executeMethod(method);
byte[] responseBody = method.getResponseBody();
// ...
return stuff;
} finally {
method.releaseConnection();
}
```
But this is not enough.

The issue is this: releasing the connection makes it available again to the `HttpClient` instance, but does not close it, because HTTP 1.1 is used and it can pipeline further requests to the same host:port in the same connection.

Even though the server may have decided to close its end of the connection, the connection is still open on our client side and it will stay that way until an attempt to read from it is made (at which point the client will detect that the other end is closed). TCP works like that, there is the notion of a half-closed connection because `close()` actually just means <em>I will not send any more data</em>, but you can still receive data from a connection that you closed but that has not yet been closed on the other end.

What happens next is that when the `HttpClient` instance goes out of scope, it becomes available to the GC, but it will not be garbage collected immediately. Until the GC collects it, the socket connection held internally will stay open and the socket will be stuck in the CLOSE_WAIT state.

To fix this, the simplest way is to add:
`method.setRequestHeader("Connection", "close");`
before executing the method. This will instruct `HttpClient` to close the connection by itself once the full response has been received.
Another way is to do it in the `finally` block:
`httpClient.getHttpConnectionManager().closeIdleConnections(0);`
An even better way is to not use a `new HttpClient` object each time, but to reuse one that has been initialized with a `MultiThreadedHttpConnectionManager` sized appropriately. Of course in this case the connection manager must be shut down properly when the application shuts down:

```
private MultiThreadedHttpConnectionManager connectionManager;
private HttpClient httpClient;

public void init() {
connectionManager = new MultiThreadedHttpConnectionManager()
// ... configure connectionManager ...
httpClient = new HttpClient(connectionManager);
}

public void shutdown() {
connectionManager.shutdown();
}

public String process(String uri) {
HttpMethod method = new GetMethod(uri);
try {
int statusCode = httpClient.executeMethod(method);
byte[] responseBody = method.getResponseBody();
// ...
return stuff;
} finally {
method.releaseConnection();
}
}
```
Florent

PS: I'm using the APIs from HttpClient 3 here, but it also applies with slightly different names to the completely refactored APIs of HttpClient 4.

* * *

**About Nuxeo**

Nuxeo, developer of the leading Content Services Platform, is reinventing [enterprise content management](https://www.nuxeo.com/products/enterprise-content-management/?utm_source&#61;2019%20Forrester%20ECM%20CP%20Wave&amp;utm_medium&#61;press%20release&amp;utm_campaign&#61;2019%20Forrester%20ECM%20CP%20Wave) (ECM) and [digital asset management](https://www.nuxeo.com/solutions/dam-digital-asset-management/?utm_source=2019%20Forrester%20ECM%20CP%20Wave&utm_medium=press%20release&utm_campaign=2019%20Forrester%20ECM%20CP%20Wave) (DAM). Nuxeo makes it easy to build smart content applications that enhance customer experiences, improve decision making, and accelerate products to market.

Its cloud-native, low-code platform has been deployed by large enterprises worldwide. Customers like Electronic Arts, TBWA, ABN AMRO, and CVS have used Nuxeo's technology to transform the way they do business. Founded in 2000, the company is based in New York with offices across the United States, Europe, and Asia. Learn more at [www.nuxeo.com](https://www.nuxeo.com/?utm_source&#61;2019%20Forrester%20ECM%20CP%20Wave&amp;utm_medium&#61;press%20release&amp;utm_campaign&#61;2019%20Forrester%20ECM%20CP%20Wave).
