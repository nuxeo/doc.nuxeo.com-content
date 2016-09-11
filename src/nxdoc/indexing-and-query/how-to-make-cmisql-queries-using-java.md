---
title: How to Make CMISQL Queries Using Java
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to make CMISQL queries from Java code inside a Nuxeo
            bundle.
        level: Advanced
        tool: Code
        topics: 'CMIS, Query'
labels:
    - howto
    - query
confluence:
    ajs-parent-page-id: '22380787'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: How+to+Make+CMISQL+Queries+Using+Java
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/How+to+Make+CMISQL+Queries+Using+Java
    page_id: '22380551'
    shortlink: B4BVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/B4BVAQ'
    source_link: /display/NXDOC60/How+to+Make+CMISQL+Queries+Using+Java
history:
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
        message: >-
            adding link to CMIS specifications for having more information on
            CMISQL
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
It's possible to make CMISQL queries from Java code inside a Nuxeo bundle.

You can find out more about the CMIS support in Nuxeo Platform on the&nbsp;[CMIS Page]({{page page='cmis'}}). You can find more information on the CMISQL syntax in the&nbsp;[CMIS specification](http://docs.oasis-open.org/cmis/CMIS/v1.1/cs01/CMIS-v1.1-cs01.html#x1-10500014).

CMISQL JOINs are not enabled by default. They are only available if you set the&nbsp;`nuxeo.conf`&nbsp;property&nbsp;`org.nuxeo.cmis.joins=true`, and you are using the VCS storage backend.

CMISQL JOINs are not supported with the DBS storage (MongoDB).

The following is a simple example of code making a query:

{{#> callout type='note' heading='Constructing the CallContext'}}

When constructing the&nbsp;`CallContext`, you should pass the&nbsp;`ServletContext`,&nbsp;`HttpServletRequest`&nbsp;and&nbsp;`HttpServletResponse`&nbsp;if available from your context. These are important for rendition URLs for instance.

{{/callout}}{{#> panel type='code' heading='Making a CMISQL Query'}}

```java
import java.io.Serializable;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.chemistry.opencmis.commons.enums.CmisVersion;
import org.apache.chemistry.opencmis.commons.server.CallContext;
import org.apache.chemistry.opencmis.server.impl.CallContextImpl;
import org.apache.chemistry.opencmis.server.shared.ThresholdOutputStreamFactory;
import org.nuxeo.ecm.core.api.CoreSession;
import org.nuxeo.ecm.core.api.IterableQueryResult;
import org.nuxeo.ecm.core.opencmis.bindings.NuxeoCmisServiceFactory;
import org.nuxeo.ecm.core.opencmis.impl.server.NuxeoCmisService;

public class CMISQuery {

    /** Threshold over which temporary files are not kept in memory. */
    public static final int THRESHOLD = 1024 * 1024;

    public CallContext getCallContext(CoreSession session) {
        ServletContext servletContext = null; // pass these if available
        HttpServletRequest request = null;
        HttpServletResponse response = null;
        ThresholdOutputStreamFactory streamFactory = ThresholdOutputStreamFactory.newInstance(
                null, THRESHOLD, -1, false);
        CallContextImpl callContext = new CallContextImpl(
                CallContext.BINDING_LOCAL, CmisVersion.CMIS_1_1,
                session.getRepositoryName(), servletContext, request, response,
                new NuxeoCmisServiceFactory(), streamFactory);
        callContext.put(CallContext.USERNAME, session.getPrincipal().getName());
        return callContext;
    }

    public void query(CoreSession session) {
        NuxeoCmisService cmisService = new NuxeoCmisService(session);
        cmisService.setCallContext(callContext);
        try {
            String query = "SELECT cmis:objectId, dc:title FROM cmis:document WHERE dc:title LIKE 'foo%'";
            boolean searchAllVersions = true;
            IterableQueryResult result = cmisService.queryAndFetch(query,
                    searchAllVersions);
            try {
                for (Map<String, Serializable> row : result) {
                    System.out.println(row.get("dc:title"));
                }
            } finally { // you MUST always close result in a finally block
                result.close();
            }
        } finally { // you MUST always close cmisService in a finally block
            cmisService.close();
        }
    }
}
```

{{/panel}}

&nbsp;

&nbsp;

&nbsp;