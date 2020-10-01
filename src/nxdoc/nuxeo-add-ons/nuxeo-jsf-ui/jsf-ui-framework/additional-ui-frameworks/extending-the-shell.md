---
title: Extending The Shell
review:
    comment: ''
    date: '2020-09-30'
    status: ok
labels:
    - content-review-lts2016
    - shell
    - jcarsique
    - shell-component
    - excerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '950334'
    ajs-parent-page-title: Additional UI Frameworks
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Extending+The+Shell
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Extending+The+Shell'
    page_id: '4687725'
    shortlink: bYdH
    shortlink_source: 'https://doc.nuxeo.com/x/bYdH'
    source_link: /display/NXDOC/Extending+The+Shell
tree_item_index: 200
history:
    -
        author: Manon Lumeau
        date: '2016-07-20 13:23'
        message: emove children display macr
        version: '10'
    -
        author: Solen Guitter
        date: '2013-09-05 16:38'
        message: Added excerpts
        version: '9'
    -
        author: Solen Guitter
        date: '2013-09-05 16:18'
        message: ''
        version: '8'
    -
        author: Florent Guillaume
        date: '2010-12-28 17:50'
        message: Migrated to Confluence 4.0
        version: '7'
    -
        author: Florent Guillaume
        date: '2010-12-28 17:50'
        message: ''
        version: '6'
    -
        author: Florent Guillaume
        date: '2010-12-28 17:50'
        message: ''
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 23:11'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 15:46'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 15:44'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 15:42'
        message: ''
        version: '1'

---
{{! excerpt}}

This section is intended for developers who wants to provide new Shell commands, namespaces or Shell Features.

{{! /excerpt}}

**Table of contents:**

*   [Shell Features]({{page space='NXDOC' page='Shell Features'}})&nbsp;&mdash;&nbsp;<span class="smalltext">In order to install new commands to existing namespaces or to register new namespaces, completors, injector providers or other Shell objects you must create a new Shell Feature.</span>
*   [Shell Commands]({{page space='NXDOC' page='Shell Commands'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Let's look now into Command implementation details.</span>
*   [Shell Namespaces]({{page space='NXDOC' page='Shell Namespaces'}})&nbsp;&mdash;&nbsp;<span class="smalltext">We've already seen how to add new Shell Features and how to implement new commands. This last chapter is talking a bit about Shell Namespaces.</span>
*   [Shell Documentation]({{page space='NXDOC' page='Shell Documentation'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Commands are self documented by using annotations. These annotations are used to generate the base of the command documentation, like: short description, syntax, options, arguments etc. Using this information the shell automatically generates basic help for you.</span>
