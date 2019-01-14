---
title: Advanced Settings
review:
    comment: ''
    date: '2018-10-24'
    status: ok
tree_item_index: 850
toc: true
---
Advanced settings enable you to configure Deployment Extensions, Web Services Filtering and XML Extensions in your Studio project.

{{{multiexcerpt 'disabling-feature' page='branding'}}}

## Deployment Extensions

To configure the deployment of projects, users can define deployment extensions.

```
<extension target="pages#PAGES">
<page view-id="/nxstartup.xhtml"
action="#{startupHelper.initDomainAndFindStartupPage('Default domain','user_dashboard')}" />
</extension>
<extension target="web#SERVLET">
...
</extension>
```

For more information, see [Deployment Fragment Preprocessor]({{page version='' space='nxdoc' page='understanding-bundles-deployment'}}).

{{#> callout type='note'}}
`extension` tags must be written directly at the root, not enclosed by any other tag.
{{/callout}}

## Web Services Filtering

This menu enables you to filter automation chains exposed to remote clients through REST API. Choose which operations must be protected when accessing them through REST and which must be disabled.
Operations that are not listed here are by default accessible by everyone remotely through the REST API.

{{#> callout type='note'}}
Only non-UI operations can be exposed through REST. Bindings that have no constraints are ignored.
{{/callout}}

## XML Extensions

To configure Nuxeo Server, users can define any Nuxeo XML extension not covered by Studio editors. Using extension points, it is possible to go beyond what Studio enables and leverage Nuxeo products configurability even more.

For more information about contributing to extensions, see [Contributing using Nuxeo Studio]({{page version='' space='nxdoc' page='how-to-contribute-to-an-extension'}}).
