---
title: Using CMISQL from Java
review:
    comment: ''
    date: '2017-12-14'
    status: ok
details:
    howto:
        excerpt: Learn how to make CMISQL queries from Java code inside a Nuxeo bundle.
        level: Advanced
        tool: Code
        topics: 'CMIS, Query'
labels:
    - lts2016-ok
    - howto
    - query-pageprovider-component
    - cmis
    - fguillaume
    - cmis-component
    - lts2017-ok
confluence:
    ajs-parent-page-id: '4687860'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Using+CMISQL+from+Java
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Using+CMISQL+from+Java'
    page_id: '3343529'
    shortlink: qQQz
    shortlink_source: 'https://doc.nuxeo.com/x/qQQz'
    source_link: /display/NXDOC/Using+CMISQL+from+Java
tree_item_index: 1400
history:
    -
        author: Florent Guillaume
        date: '2015-12-09 14:29'
        message: etail
        version: '39'
    -
        author: Florent Guillaume
        date: '2015-10-13 14:42'
        message: ''
        version: '38'
    -
        author: Solen Guitter
        date: '2014-12-01 22:07'
        message: ''
        version: '37'
    -
        author: Solen Guitter
        date: '2014-09-19 14:31'
        message: ''
        version: '36'
    -
        author: Solen Guitter
        date: '2014-09-19 14:31'
        message: ''
        version: '35'
    -
        author: Florent Guillaume
        date: '2014-09-11 19:41'
        message: ''
        version: '34'
    -
        author: Florent Guillaume
        date: '2014-09-03 15:17'
        message: ''
        version: '33'
    -
        author: Florent Guillaume
        date: '2014-09-03 15:12'
        message: ''
        version: '32'
    -
        author: Florent Guillaume
        date: '2014-09-03 15:10'
        message: ''
        version: '31'
    -
        author: Florent Guillaume
        date: '2014-09-03 15:02'
        message: ''
        version: '30'
    -
        author: Florent Guillaume
        date: '2014-09-03 15:00'
        message: ''
        version: '29'
    -
        author: Florent Guillaume
        date: '2014-09-03 14:59'
        message: ''
        version: '28'
    -
        author: Florent Guillaume
        date: '2014-09-03 14:36'
        message: ''
        version: '27'
    -
        author: Florent Guillaume
        date: '2014-09-03 14:28'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2014-08-22 11:26'
        message: Removed 5.4 reference
        version: '25'
    -
        author: Florent Guillaume
        date: '2011-06-15 17:15'
        message: ''
        version: '24'
    -
        author: Florent Guillaume
        date: '2011-06-15 17:15'
        message: Added CallContext stuff
        version: '23'
    -
        author: Florent Guillaume
        date: '2011-06-15 16:54'
        message: ''
        version: '22'
    -
        author: Florent Guillaume
        date: '2011-06-15 16:46'
        message: Updated to OpenCMIS APIs.
        version: '21'
    -
        author: Olivier Grisel
        date: '2011-04-27 16:38'
        message: fixed broken link
        version: '20'
    -
        author: Alain Escaffre
        date: '2011-03-31 11:24'
        message: adding link to CMIS specifications for having more information on CMISQL
        version: '19'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 16:50'
        message: ''
        version: '18'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '17'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:27'
        message: ''
        version: '16'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:24'
        message: ''
        version: '15'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:14'
        message: ''
        version: '14'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:14'
        message: ''
        version: '13'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:09'
        message: ''
        version: '12'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:54'
        message: ''
        version: '11'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:51'
        message: ''
        version: '10'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:11'
        message: ''
        version: '9'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:05'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:21'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:01'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:39'
        message: ''
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:23'
        message: ''
        version: '4'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:18'
        message: ''
        version: '3'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:11'
        message: ''
        version: '2'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:00'
        message: ''
        version: '1'

---
CMISQL is the CMIS Query Language. It's possible to make CMISQL queries from Java code inside a Nuxeo bundle, much in the same way that you may used to make NXQL queries.

You can find out more about the CMIS support in Nuxeo Platform on the [CMIS Page]({{page page='cmis'}}). You can find more information on the CMISQL syntax in the [CMIS specification](http://docs.oasis-open.org/cmis/CMIS/v1.1/CMIS-v1.1.html#x1-10500014).

{{#> callout type='note' heading='JOINs'}}

In Nuxeo CMISQL, JOINs are not enabled by default. They are only available if you set the `nuxeo.conf` property `org.nuxeo.cmis.joins=true`, and you are using the VCS storage backend. CMISQL JOINs are not supported with the DBS storage backend (MongoDB), because the underlying storage cannot do relational queries.

{{/callout}}

The following is a simple example of code making a query:

{{#> callout type='note' heading='Constructing the CallContext'}}

When constructing the `CallContext`, you should pass the `ServletContext`, `HttpServletRequest` and `HttpServletResponse` if available from your context. These are important for rendition URLs for instance.

{{/callout}}{{#> panel type='code' heading='Making a CMISQL Query'}}

```java
import java.io.Serializable;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.chemistry.opencmis.commons.enums.CmisVersion;
import org.apache.chemistry.opencmis.commons.server.CallContext;
import org.apache.chemistry.opencmis.commons.server.CmisServiceFactory;
import org.apache.chemistry.opencmis.server.impl.CallContextImpl;
import org.apache.chemistry.opencmis.server.shared.TempStoreOutputStreamFactory;
import org.nuxeo.ecm.core.api.CoreSession;
import org.nuxeo.ecm.core.api.IterableQueryResult;
import org.nuxeo.ecm.core.opencmis.bindings.NuxeoCmisServiceFactory;
import org.nuxeo.ecm.core.opencmis.impl.server.NuxeoCmisService;

public class CMISQuery {

    /** Threshold over which temporary files are not kept in memory. */
    public static final int THRESHOLD = 1024 * 1024;

    public CallContext getCallContext(CoreSession session) {
        ServletContext servletContext = null; // pass this if available
        HttpServletRequest request = null; // pass this if available
        HttpServletResponse response = null; // pass this if available
        CmisServiceFactory serviceFactory = new NuxeoCmisServiceFactory();
        TempStoreOutputStreamFactory streamFactory = TempStoreOutputStreamFactory.newInstance(
                null, THRESHOLD, -1, false);
        CallContextImpl callContext = new CallContextImpl(
                CallContext.BINDING_LOCAL, CmisVersion.CMIS_1_1,
                session.getRepositoryName(), servletContext, request, response,
                serviceFactory, streamFactory);
        callContext.put(CallContext.USERNAME, session.getPrincipal().getName());
        return callContext;
    }

    public void query(CoreSession session) {
        NuxeoCmisService cmisService = new NuxeoCmisService(session);
        try {
            cmisService.setCallContext(getCallContext(session)); // pass also servlet info if available
            // example CMISQL query
            String query = "SELECT cmis:objectId, dc:title FROM cmis:document WHERE dc:title LIKE 'foo%'";
            boolean searchAllVersions = true;
            // use try-with-resources when calling cmisService.queryAndFetch for automatic closing
            try (IterableQueryResult result = cmisService.queryAndFetch(query, searchAllVersions)) {
                for (Map<String, Serializable> row : result) {
                    // do something with the result
                    System.out.println(row.get("dc:title"));
                }
            }
        } finally { // you MUST always close cmisService in a finally block
            cmisService.close();
        }
    }
}
```

{{/panel}}

&nbsp;
