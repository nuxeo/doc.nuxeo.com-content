---
title: Configuring a Nuxeo Online Services Account
review:
    comment: ''
    date: ''
    status: ok
labels:
    - studio-project
    - howto
    - nuxeo-ide
confluence:
    ajs-parent-page-id: '8684219'
    ajs-parent-page-title: Working with Studio Projects
    ajs-space-key: IDEDOC
    ajs-space-name: Nuxeo IDE
    canonical: Configuring+a+Nuxeo+Online+Services+Account
    canonical_source: >-
        https://doc.nuxeo.com/display/IDEDOC/Configuring+a+Nuxeo+Online+Services+Account
    page_id: '8684224'
    shortlink: wIKE
    shortlink_source: 'https://doc.nuxeo.com/x/wIKE'
    source_link: /display/IDEDOC/Configuring+a+Nuxeo+Online+Services+Account
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-09-01 15:43'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-12-30 17:20'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-10-08 15:17'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-09-26 14:45'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-09-26 14:44'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-11-27 15:26'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-10-04 17:20'
        message: Migrated to Confluence 4.0
        version: '6'
    -
        author: Solen Guitter
        date: '2011-10-04 17:20'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-10-04 17:20'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-10-03 18:14'
        message: added screenshot
        version: '3'
    -
        author: Solen Guitter
        date: '2011-10-03 14:58'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-09-28 17:02'
        message: ''
        version: '1'

---
{{multiexcerpt 'ide-replaced-by-generator-info' page='nuxeo-ide'}}

{{! excerpt}}

To enable Nuxeo IDE to leverage your Nuxeo Studio customization, you need to configure your Nuxeo Online Services account so Nuxeo IDE can connect to Studio.

{{! /excerpt}}{{! multiexcerpt name='register-connect-IDE'}}

**To configure a Nuxeo Online Services account:**

1.  Open Eclipse preferences and go to **Nuxeo**&nbsp;> **Nuxeo Connect**.
    The Host name is already filled in with Nuxeo Connect address.
2.  Type your Connect login and password and click on the **Connect** button.
    The lists of Studio projects associated to your account is displayed.
    ![]({{file name='NxIDE_pref_connect_account.png'}} ?w=550,border=true)
3.  Click on **OK**.
    The Preferences window closes.
    You can now go to the Studio view to browse your Studio customizations.

{{! /multiexcerpt}}
