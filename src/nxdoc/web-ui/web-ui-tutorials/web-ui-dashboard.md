---
title: 'HOWTO: Customize Dashboard'
review:
    comment: ''
    date: '2017-12-19'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to customize the Web UI dashboard
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - nuxeo-elements
    - nsilva
    - nuxeo-ui-elements
    - extension
    - dashboard
    - lts2017-ok
tree_item_index: 700

---

The Web UI dashboard is the default starting page of the application and is defined by [nuxeo-home.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-home.html).

![]({{file name='DASHBOARD.png'}} ?w=600,border=true)

It is composed of four sections:
 - A table to browse recently edited documents
 - A list to access pending tasks
 - A table to browse recently viewed documents
 - A table to browse favorites documents

## Overriding the Dashboard

To use your own dashboard, you can deploy and override `nuxeo-home.html` in your own bundle as described in [HOWTO: Deploy Additional Web UI Resources]({{page page='web-ui-deployment'}}#deploy_or_override).


* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [HOWTO: Create Custom Dashboard Entries]({{page version='' space='nxdoc' page='howto-create-custom-dashboard-entries'}})

{{/panel}}</div><div class="column medium-6">
</div></div>
