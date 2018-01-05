---
title: Returning a Custom Result with Automation
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - automation
    - fdavid
    - excerpt
    - lts2017-ok
confluence:
    ajs-parent-page-id: '18451738'
    ajs-parent-page-title: Automation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Returning+a+Custom+Result+with+Automation
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Returning+a+Custom+Result+with+Automation'
    page_id: '12913601'
    shortlink: wQvF
    shortlink_source: 'https://doc.nuxeo.com/x/wQvF'
    source_link: /display/NXDOC/Returning+a+Custom+Result+with+Automation
tree_item_index: 1200
history:
    -
        author: Thierry Martins
        date: '2015-12-07 09:59'
        message: emove old class usag
        version: '4'
    -
        author: Solen Guitter
        date: '2013-09-20 17:18'
        message: ''
        version: '3'
    -
        author: Thierry Martins
        date: '2013-02-05 11:17'
        message: ''
        version: '2'
    -
        author: Thierry Martins
        date: '2013-02-05 10:58'
        message: ''
        version: '1'

---
{{! excerpt}}

As automatic marshalling is not implemented into Automation server and client, only Document(s) and Blob(s) can be manipulated. Therefore, the way to return a custom type is to encapsulate the value in a Blob.

{{! /excerpt}}

Below is an example, based on the results returned by the method `QueryAndFetch`.

*   Operation code

    ```java
    package org.nuxeo.support;

    import java.io.ByteArrayInputStream;
    import java.io.Serializable;
    import java.util.Iterator;
    import java.util.Map;

    import net.sf.json.JSONArray;
    import net.sf.json.JSONObject;

    import org.nuxeo.ecm.automation.core.Constants;
    import org.nuxeo.ecm.automation.core.annotations.Context;
    import org.nuxeo.ecm.automation.core.annotations.Operation;
    import org.nuxeo.ecm.automation.core.annotations.OperationMethod;
    import org.nuxeo.ecm.automation.core.annotations.Param;
    import org.nuxeo.ecm.core.api.Blob;
    import org.nuxeo.ecm.core.api.CoreSession;
    import org.nuxeo.ecm.core.api.IterableQueryResult;
    import org.nuxeo.ecm.core.api.impl.blob.StringBlob;
    import org.nuxeo.ecm.core.query.sql.NXQL;

    @Operation(id = QueryAndFetch.ID, category = Constants.CAT_FETCH, label = "QueryAndFetch", description = "Sample to show how to return a blob for any result type.")
    public class QueryAndFetch {

        public static final String ID = "Test.QueryAndFetch";

        @Context
        protected CoreSession session;

        @Param(name = "query")
        protected String query;

        protected String lang = NXQL.NXQL;

        @OperationMethod
        public Blob run() throws Exception {
            IterableQueryResult result = session.queryAndFetch(query, lang);
            Iterator<Map<String, Serializable>> it = result.iterator();

            JSONArray array = new JSONArray();
            while (it.hasNext()) {
                Map<String, Serializable> item = it.next();
                JSONObject object = new JSONObject();
                object.accumulateAll(item);
                array.add(object);
            }

            return new StringBlob(array.toString(), "application/json");

        }

    }

    ```

*   Registering this operation

    ```xml
    <?xml version="1.0"?>
    <component name="org.nuxeo.support.operations">

      <extension target="org.nuxeo.ecm.core.operation.OperationServiceComponent"
        point="operations">
        <operation class="org.nuxeo.support.QueryAndFetch" />
      </extension>
    </component>
    ```

*   Sample code to use the result from the operation

    ```java
    HttpAutomationClient client = new HttpAutomationClient("http://localhost:8080/nuxeo/site/automation");

    Session session = client.getSession(ADMINISTRATOR, ADMINISTRATOR);
    Blob response = (Blob) session.newRequest(QueryAndFetch.ID).set("query", "select ecm:uuid, dc:title, common:icon from Document").execute();
    String json = FileUtils.read(response.getStream());
    JSONArray array = JSONArray.fromObject(json);
    System.out.println("Objects received : " + array.size());
    ```
