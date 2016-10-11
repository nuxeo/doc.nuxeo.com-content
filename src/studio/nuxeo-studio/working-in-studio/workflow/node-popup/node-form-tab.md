---
title: Node form tab
review:
    comment: ''
    date: ''
    status: ok
labels:
    - 5-7-1
    - content-review-6-0
confluence:
    ajs-parent-page-id: '11534824'
    ajs-parent-page-title: Node popup
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Node+form+tab
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Node+form+tab'
    page_id: '11534834'
    shortlink: 8gGw
    shortlink_source: 'https://doc.nuxeo.com/x/8gGw'
    source_link: /display/Studio/Node+form+tab
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2013-08-07 10:58'
        message: ''
        version: '10'
    -
        author: Bertrand Chauvin
        date: '2013-08-06 14:33'
        message: Updated screenshot
        version: '9'
    -
        author: Solen Guitter
        date: '2013-06-18 14:26'
        message: Changed since 5.7 for 5.7.1
        version: '8'
    -
        author: Solen Guitter
        date: '2013-05-23 10:09'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-05-23 10:09'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-05-23 10:09'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2012-09-28 10:07'
        message: Migrated to Confluence 4.0
        version: '4'
    -
        author: Alain Escaffre
        date: '2012-09-28 10:07'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2012-09-28 09:28'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2012-09-28 09:28'
        message: ''
        version: '1'

---
![]({{file name='node-form-tab.png'}} ?w=500,h=354,border=true)

Here you can configure a form that will be displayed to the user for task processing. You can specify which fields have to filled (captured data will be stored in workflow variables and node variables), and which buttons should be displayed.

Layout edition [works as usual]({{page page='form-layouts'}}): you pickup the fields on the right. Here you have the choice between system properties, workflow variables and node variables.

Buttons can be added easily. You need to specify:

*   **Id**: This value is important as it will be stored in `NodeVariables"button"` and can be used for instance to express conditions for knowing which transition the workflow engine should use.
*   **Label**: The label of the button, supports [i18n]({{page space='nxdoc' page='how-to-upload-labels-translations-in-nuxeo-studio-i18n'}}).
*   **Filter**: A filter to hide or display the button on some conditions. Works only starting from 5.7.1\. In future release of Studio, there will be the usual screen to express a filter.
*   **Generate the condition for transition**: This column, checked by default when you add a line, is a helper so that a transition corresponding to the button is automatically declared, with the correct condition, like: `NodeVariables"button"=='Reject'`. See the [Transitions]({{page page='node-transitions-tab'}}) page for more information.
