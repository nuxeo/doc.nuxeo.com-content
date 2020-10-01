---
title: 'HOWTO: Customize Startup Redirection'
review:
    comment: ''
    date: '2020-09-30'
    status: ok
details:
    howto:
        excerpt: Learn how to customize startup redirection so users are displayed the default Nuxeo dashboard.
        level: Advanced
        tool: Code editor
        topics: JSF UI
labels:
    - content-review-lts2016
    - howto
    - jsf
    - seam-jsf-component
    - atchertchian
    - excerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '20517820'
    ajs-parent-page-title: JSF UI How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Customize+Startup+Redirection
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Customize+Startup+Redirection'
    page_id: '20517973'
    shortlink: VRQ5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/VRQ5AQ'
    source_link: /display/NXDOC/How+to+Customize+Startup+Redirection
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-09-05 10:03'
        message: pdate how-to topic
        version: '9'
    -
        author: Manon Lumeau
        date: '2015-10-14 12:26'
        message: ''
        version: '8'
    -
        author: Gildas Lefevre
        date: '2015-10-13 21:44'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-01-13 10:06'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-11-06 11:37'
        message: ''
        version: '5'
    -
        author: Gildas Lefevre
        date: '2014-11-06 11:03'
        message: ''
        version: '4'
    -
        author: Gildas Lefevre
        date: '2014-11-05 16:03'
        message: ''
        version: '3'
    -
        author: Gildas Lefevre
        date: '2014-11-05 15:55'
        message: ''
        version: '2'
    -
        author: Gildas Lefevre
        date: '2014-11-05 15:21'
        message: ''
        version: '1'

---
After connection, the startup page is defined by the method `StartupHelper.initDomainAndFindStartupPage`. If you want to customize the startup redirection, you have to override the method&nbsp;`initDomainAndFindStartupPage` in a custom class.

The following example presents a customization redirecting every user to the dashboard except for the Administrators:

```java
@Name("startupHelper")
@Scope(SESSION)
@Install(precedence=DEPLOYMENT)
public class CustomStartupHelper extends StartupHelper {

    private static final long serialVersionUID = 1L;

    @Override
    @Begin(id = "#{conversationIdGenerator.nextMainConversationId}", join = true)
    public String initDomainAndFindStartupPage(String domainTitle, String viewId) {
        String result = super.initDomainAndFindStartupPage(domainTitle, viewId);
        if (((NuxeoPrincipal) documentManager.getPrincipal()).isAdministrator()) {
            return result;
        } else {
            return dashboardNavigationHelper.navigateToDashboard();
        }
    }
}

```

The method&nbsp;`initDomainAndFindStartupPage` must return an existing view id. For example, the following view id can be used to customize the redirection:

*   **view_servers** to access the list of available servers
*   **view_home** to access the dashboard of the current user
*   **view_domains** to access the list of domains
*   **search** to access the search page
