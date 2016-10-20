---
title: Automated renaming
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '12912674'
    ajs-parent-page-title: Administering your project
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Automated+renaming
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Automated+renaming'
    page_id: '7537367'
    shortlink: 1wJz
    shortlink_source: 'https://doc.nuxeo.com/x/1wJz'
    source_link: /display/Studio/Automated+renaming
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2011-06-29 17:41'
        message: igrated to Confluence 4.
        version: '5'
    -
        author: Solen Guitter
        date: '2011-06-29 17:41'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-06-29 17:12'
        message: added screenshot
        version: '3'
    -
        author: Solen Guitter
        date: '2011-06-29 14:41'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-06-29 14:38'
        message: ''
        version: '1'

---
As you work on your Studio project, you may need to rename elements, that may be referenced by other features. A typical example would be if you rename an automation chain. This chain can be used by user action, such as a button, or another chain.

![]({{file name='STUDIO_rename.png'}} ?w=650,border=true)

In order to prevent inconsistencies and broken features, Nuxeo Studio automatically checks your project to find all the references to the element and change the reference with the new name. A confirmation window indicates the result of the renaming on the whole project.

![]({{file name='STUDIO_rename_confirmation.png'}} ?w=350,border=true)

For instance, in the case of a renamed automation chain, Nuxeo Studio will automatically update the chain name in the "Select an existing operation" drop down list of the User action that uses the chain.

However there are some cases where the renaming is not done by the system, for instance when the renamed chain is used in a function. In that case, you are displayed a message indicating where the chain name was found but not updated. Copy the log displayed in order to be able to check the places where the chain name was not automatically updated.

![]({{file name='STUDIO_rename_inconsistencies.png'}} ?w=400,border=true)
