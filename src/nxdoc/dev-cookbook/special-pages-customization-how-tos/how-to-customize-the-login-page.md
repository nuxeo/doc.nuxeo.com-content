---
title: How to Customize the Login Page
labels:
    - login-page
confluence:
    ajs-parent-page-id: '18449741'
    ajs-parent-page-title: Special Pages Customization How-Tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+Customize+the+Login+Page
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/How+to+Customize+the+Login+Page'
    page_id: '18449749'
    shortlink: VYUZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/VYUZAQ'
    source_link: /display/NXDOC58/How+to+Customize+the+Login+Page
history:
    - 
        author: Solen Guitter
        date: '2014-01-23 12:03'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-23 12:02'
        message: ''
        version: '1'

---
{{#> callout type='warning' }}

Content is outdated, work is still in progress!

{{/callout}}{{! excerpt}}

If you want to change the welcome page of Nuxeo, you just have to add the following code to the&nbsp;`deployment-fragment.xml`&nbsp;of your plugin's JAR. In this example, it will the redirect the user to the default Nuxeo dashboard.

{{! /excerpt}} {{#> callout type='note' }}

Actually, this is not enough to redirect to the dashboard as the second parameter of the `initDomainAndFindStartupPage` method will be used only in some special cases, but declaring the page with view id `/nxstartup.xhtml` and binding it to your custom action is the way to proceed to override the default behaviour.

{{/callout}}

```
<extension target="pages#PAGES">
  <page view-id="/nxstartup.xhtml"
      action="#{startupHelper.initDomainAndFindStartupPage('Default domain', 'user_dashboard')}" />
</extension>

```

Note that the first argument of the `startupHelper.initDomainAndFindStartupPage()` method is currently not used by the default implementation and is kept only for compatibility. The second argument is a normal JSF view (actually, outcome), for instance the standard one is defined as:

```
<extension target="faces-config#NAVIGATION">
  <navigation-case>
    <from-outcome>user_dashboard</from-outcome>
    <to-view-id>/user_dashboard.xhtml</to-view-id>
    <redirect />
  </navigation-case>
</extension>

```

And the `/user_dashboard.xhtml` resource contains the JSF code to use.