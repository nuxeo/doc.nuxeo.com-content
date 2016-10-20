---
title: Is it possible to export a Studio project in Eclipse ?
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '3345622'
    ajs-parent-page-title: Frequently Asked Questions
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: viewpage.action?pageId=4685865
    canonical_source: viewpage.action?pageId=4685865
    page_id: '4685865'
    shortlink: KYBH
    shortlink_source: 'https://doc.nuxeo.com/x/KYBH'
    source_link: /pages/viewpage.action?pageId=4685865
tree_item_index: 100
history:
    -
        author: Alain Escaffre
        date: '2016-03-21 22:47'
        message: ''
        version: '13'
    -
        author: Alain Escaffre
        date: '2016-03-21 22:47'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-10-28 09:43'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2013-10-28 00:18'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2013-10-28 00:17'
        message: ''
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 15:29'
        message: Migrated to Confluence 4.0
        version: '8'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 15:29'
        message: ''
        version: '7'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 15:29'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2012-01-19 10:36'
        message: Fixed typos
        version: '5'
    -
        author: Alain Escaffre
        date: '2010-10-27 21:42'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2010-10-27 21:36'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2010-10-27 21:32'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2010-10-27 21:32'
        message: ''
        version: '1'

---
Nuxeo Studio role is to generate XML configuration from your instructions. The plugin you can download from Nuxeo Studio is a strict set of XML files and pictures you would have uploaded in Studio. To be sure of this, you can rename the JAR you downloaded, unzip it and have a deeper look: You will find the "sources" of your project. Technically, nothing prevents you from importing the files in Eclipse, doing some modifications from there and committing changes in your own source repository. Yet, this would not be a good idea because:

*   You will **definitively** lose the ability to maintain your project in Nuxeo Studio, as there is no reverse path. That means no ability to easily modify a automation chain by drag'n drop, no ability to customize quickly the layout, no ability to benefit from easy customization of new features (that would not be yet in the version on which you started the project).
*   You will lose the "easy-maintenance" value of Studio. Indeed, to upgrade a plugin made with Studio, you just need to change the version of the distribution on which your project is based, in the preferences. Nuxeo Studio generates the good XML for your target application version.

We can see the reasons why you would like to switch your project to Eclipse:

*   You might want to "switch" to Eclipse because your are blocked in Studio and cannot manage to do everything you want. In that case:
    *   First, check if contributing an external declaration in the **Advanced Settings**/**Registries** unblocks you (external type, operation, facet, action, ...).
    *   Don't hesitate to submit your problem by using the Help Request form or to your Nuxeo Support Team: It is always very interesting to get your feedback, we prioritize the Studio roadmap with it!
*   If the reason why you would want to export the code is for easier maintenance of configuration sources, you should have a look at the [Branch Management]({{page page='branch-management'}}) page, where you will see that you can commit your changes, track them and create tagged versions of your project as well as manage several branches of the configuration.

{{#> callout type='tip' }}

If there are other reasons why you would want to import the project into Eclipse, share it in the comment section of this page!

{{/callout}}
