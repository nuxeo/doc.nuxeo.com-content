---
title: From the old workflow system to the new 5.4 workflow system
review:
    comment: ''
    date: '2017-01-17'
    status: ok
labels:
    - lts2016-ok
    - multiexcerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '18449457'
    ajs-parent-page-title: Upgrade from 5.3.2 to 5.4.0
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: From+the+old+workflow+system+to+the+new+5.4+workflow+system
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/From+the+old+workflow+system+to+the+new+5.4+workflow+system'
    page_id: '14255842'
    shortlink: 4obZ
    shortlink_source: 'https://doc.nuxeo.com/x/4obZ'
    source_link: /display/NXDOC/From+the+old+workflow+system+to+the+new+5.4+workflow+system
tree_item_index: 100
version_override:
    LTS 2015: 710/admindoc/from-the-old-workflow-system-to-the-new-54-workflow-system
    '6.0': 60/admindoc/from-the-old-workflow-system-to-the-new-54-workflow-system
    '5.8': 58/admindoc/from-the-old-workflow-system-to-the-new-54-workflow-system
history:
    -
        author: Solen Guitter
        date: '2015-04-14 15:13'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-07-02 12:16'
        message: ''
        version: '1'

---
{{! multiexcerpt name='old-workflow-to-new-workflow-upgrade-page'}}

Even though the 5.4 jBPM service doesn't implement backward compatibility with the old workflow service, is it possible to deploy both the old workflow framework AND the jBPM service so that the migration can be gradual?

It should be possible to use the m3 version of jBPM and still run the new workflow.
If you create an action for the new workflow tab different from the one for the old workflow, you could use both at the same time. (I assume you are not using publishing tab and forum).

However, I think it would be much easier to move your old workflow to the new one. That would be:

*   create the new workflow with handler,
*   define what variable you need in the new workflow (most probably docId, repo name ....),
*   get the variable from the unfinished process instance in the old jBPM table (object are just serialized into it).

See [NXP-2850](https://jira.nuxeo.com/browse/NXP-2850) for technical details.

{{! /multiexcerpt}}
