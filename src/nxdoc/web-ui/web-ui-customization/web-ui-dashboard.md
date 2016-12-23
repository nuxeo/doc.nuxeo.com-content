---
title: Dashboard
review:
    comment: ''
    date: '2015-12-21'
    status: ok
toc: true
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - extension
    - dashboard
tree_item_index: 70

---
## Dashboard

The default Web UI dashboard is the default starting page of the application and is defined by [nuxeo-home.html](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-home.html).

![]({{file name='DASHBOARD.png'}} ?w=600,border=true)

It is simply composed of 4 sections:
 - a table to browse recently edited documents
 - a listing to access pending tasks
 - a table to browse recently viewed documents
 - a table to browse favorites documents

### Overriding the dashboard

To use your own dashboard, you can simply deploy and override `nuxeo-home.html` in your own bundle like described in [this documentation]({{page page='web-ui-deployment#deploy_or_override'}}).
