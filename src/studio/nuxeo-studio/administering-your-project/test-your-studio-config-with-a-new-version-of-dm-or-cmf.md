---
title: Test your Studio config with a new version of DM or CMF
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '12912674'
    ajs-parent-page-title: Administering your project
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Test+your+Studio+config+with+a+new+version+of+DM+or+CMF
    canonical_source: >-
        https://doc.nuxeo.com/display/Studio/Test+your+Studio+config+with+a+new+version+of+DM+or+CMF
    page_id: '7209684'
    shortlink: 1AJu
    shortlink_source: 'https://doc.nuxeo.com/x/1AJu'
    source_link: /display/Studio/Test+your+Studio+config+with+a+new+version+of+DM+or+CMF
tree_item_index: 200
hidden: true
history:
    -
        author: Manon Lumeau
        date: '2016-04-27 15:19'
        message: 'ix Studio menu label  '
        version: '3'
    -
        author: Alain Escaffre
        date: '2011-05-23 11:17'
        message: Migrated to Confluence 4.0
        version: '2'
    -
        author: Alain Escaffre
        date: '2011-05-23 11:17'
        message: ''
        version: '1'

---
Let's suppose you are currently using Nuxeo 5.4.1 with a configuration achieved in Studio, and the 5.4.2 RC has been announced on Nuxeo website. RC means "Release candidate". It means it is very close to what will be release soon, but that feedback from community is accepted to improve the quality of the release. If you want to try it, just follow those steps:

*   Make a backup of your config to be able to switch back easily later on : go to "versions" link and click on the "tag" button, on the right. Give the name "config ok with 5.4.1" (for instance).
*   Switch your configuration to 5.4.2 by going to **Settings** > **Application Definition** and choose Nuxeo 5.4.2
*   Now startup your 5.4.2 DM instance, in the startup wizzard, at step 5 (when it asks you to create a connect account), click on the link that says that you already have an account and fill in your connect id and password, then choose your project (you might have only one).
*   Restart the server (if it doesn't restart automatically)
*   Go to the admin center > update center and update your studio configuration
*   You are done !

If it was just a test, don't forget to "restore" your tag in Studio as it was before the tests by going to "Versionning" then selecting the tag "config ok with 5.4.1" then clicking on the "revert" button.
