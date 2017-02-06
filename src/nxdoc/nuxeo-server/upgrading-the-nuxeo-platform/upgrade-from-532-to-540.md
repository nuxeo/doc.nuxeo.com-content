---
title: Upgrade from 5.3.2 to 5.4.0
review:
    comment: ''
    date: '2017-01-17'
    status: ok
labels:
    - lts2016-ok
    - multiexcerpt
toc: true
confluence:
    ajs-parent-page-id: '3343538'
    ajs-parent-page-title: Upgrading the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Upgrade+from+5.3.2+to+5.4.0
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Upgrade+from+5.3.2+to+5.4.0'
    page_id: '18449457'
    shortlink: MYQZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/MYQZAQ'
    source_link: /display/NXDOC/Upgrade+from+5.3.2+to+5.4.0
tree_item_index: 900
version_override:
    'LTS 2015': 710/admindoc/upgrade-from-532-to-540
    '6.0': 60/admindoc/upgrade-from-532-to-540
    '5.8': 58/admindoc/upgrade-from-532-to-540
history:
    -
        author: Solen Guitter
        date: '2015-04-14 15:11'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-01-21 14:27'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-01-21 12:13'
        message: ''
        version: '1'

---
{{! multiexcerpt name='5.4.0-upgrade-page'}}

## Installation & Configuration

While Nuxeo EP 5.3.2 was based on the JBoss distribution, Nuxeo EP 5.4.0 is based on Tomcat. There is also a distribution based on JBoss 5, though we strongly recommend you to use the Tomcat distribution: [http://cdn.nuxeo.com/nuxeo-5.4.0/nuxeo-dm-5.4.0_01-tomcat.zip](http://cdn.nuxeo.com/nuxeo-5.4.0/nuxeo-dm-5.4.0_01-tomcat.zip).

### JBoss 5

If using the JBoss distribution, see [Upgrade to 5.4 and JBoss 5]({{page page='upgrade-from-532-to-540-with-jboss-5'}}).

## Data Migration

On JBoss, data used to be in `$NUXEO_HOME/server/default/data/NXRuntime/`, where you can find the `binaries` folder. Now, with the Tomcat distribution, it stands in `$NUXEO_HOME/nxserver/data`.

*   If you have moved your data outside Nuxeo using the `nuxeo.data.dir`, [as recommended]({{page space='nxdoc54' page='recommended-configurations'}}), you need to move the binaries folder one level up and then remove the `NXRuntime` folder.
*   If you haven't moved you data outside Nuxeo, you need to move the `binaries` folder from `$NUXEO_HOME/server/default/data/NXRuntime/` to `$NUXEO_HOME/nxserver/data`.

## Code Migration

### Workflow

The workflow implementation has changed, see [From the old workflow system to the new 5.4 workflow system]({{page page='from-the-old-workflow-system-to-the-new-54-workflow-system'}}).

{{! /multiexcerpt}}
