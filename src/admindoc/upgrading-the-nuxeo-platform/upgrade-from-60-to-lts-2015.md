---
title: Upgrade from 6.0 to LTS 2015
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
toc: true
confluence:
    ajs-parent-page-id: '27604639'
    ajs-parent-page-title: Upgrading the Nuxeo Platform
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: Upgrade+from+6.0+to+LTS+2015
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC710/Upgrade+from+6.0+to+LTS+2015'
    page_id: '27604615'
    shortlink: hzalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/hzalAQ'
    source_link: /display/ADMINDOC710/Upgrade+from+6.0+to+LTS+2015
tree_item_index: 100
version_override:
    'FT': nxdoc/upgrade-from-60-to-lts-2015
history:
    -
        author: Solen Guitter
        date: '2016-03-31 14:06'
        message: ''
        version: '38'
    -
        author: Manon Lumeau
        date: '2016-03-31 13:32'
        message: ''
        version: '37'
    -
        author: Solen Guitter
        date: '2016-02-01 14:24'
        message: ''
        version: '36'
    -
        author: Solen Guitter
        date: '2015-12-29 11:07'
        message: ''
        version: '35'
    -
        author: Anahide Tchertchian
        date: '2015-12-14 16:02'
        message: add instructions for configuration service upgrade
        version: '34'
    -
        author: Julien Carsique
        date: '2015-11-30 18:24'
        message: ''
        version: '33'
    -
        author: Solen Guitter
        date: '2015-11-19 16:25'
        message: Add LTS 2015 (7.10) release notes
        version: '32'
    -
        author: Anahide Tchertchian
        date: '2015-11-18 14:13'
        message: fix spelling
        version: '31'
    -
        author: Solen Guitter
        date: '2015-11-12 14:35'
        message: Fix section title link
        version: '30'
    -
        author: Solen Guitter
        date: '2015-11-12 09:33'
        message: Titile capitalization
        version: '29'
    -
        author: Thierry Martins
        date: '2015-11-12 08:55'
        message: 'add note for NXP-18128 '
        version: '28'
    -
        author: Solen Guitter
        date: '2015-11-09 10:41'
        message: 'Fix title level, remove useless spans'
        version: '27'
    -
        author: Solen Guitter
        date: '2015-11-09 10:32'
        message: ''
        version: '26'
    -
        author: Arnaud Kervern
        date: '2015-11-09 10:11'
        message: ''
        version: '25'
    -
        author: Arnaud Kervern
        date: '2015-11-09 10:08'
        message: ''
        version: '24'
    -
        author: Antoine Taillefer
        date: '2015-11-03 16:50'
        message: ''
        version: '23'
    -
        author: Thierry Martins
        date: '2015-10-14 08:42'
        message: quartz upgrade
        version: '22'
    -
        author: Solen Guitter
        date: '2015-10-05 16:06'
        message: Add section New 7.4 Configuration Parameters
        version: '21'
    -
        author: Antoine Taillefer
        date: '2015-10-05 09:58'
        message: ''
        version: '20'
    -
        author: Antoine Taillefer
        date: '2015-10-05 09:44'
        message: Reverted from v. 17
        version: '19'
    -
        author: Antoine Taillefer
        date: '2015-10-05 09:41'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2015-10-01 14:07'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2015-09-30 09:59'
        message: Add Java requirement for 7.4
        version: '16'
    -
        author: Solen Guitter
        date: '2015-09-11 08:06'
        message: Title cap
        version: '15'
    -
        author: Antoine Taillefer
        date: '2015-09-10 13:12'
        message: ''
        version: '14'
    -
        author: Anahide Tchertchian
        date: '2015-07-30 11:17'
        message: 'NXDOC-577: link to theme migration page'
        version: '13'
    -
        author: Anahide Tchertchian
        date: '2015-07-30 11:12'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2015-07-24 09:14'
        message: ''
        version: '11'
    -
        author: Anahide Tchertchian
        date: '2015-07-24 08:58'
        message: add data migration notes for notification subscriptions (NXP-16704)
        version: '10'
    -
        author: Solen Guitter
        date: '2015-07-02 15:54'
        message: ''
        version: '9'
    -
        author: Thierry Martins
        date: '2015-07-02 15:41'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-07-02 15:29'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-01-12 16:23'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2015-01-12 14:38'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2015-01-12 14:25'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2015-01-09 16:54'
        message: ''
        version: '3'
    -
        author: Manon Lumeau
        date: '2014-12-31 14:08'
        message: ''
        version: '2'
    -
        author: Manon Lumeau
        date: '2014-12-31 11:27'
        message: ''
        version: '1'

---
For the general upgrade process, see the&nbsp;[How to Upgrade Nuxeo]({{page page='upgrading-the-nuxeo-platform'}})&nbsp;page.

{{{multiexcerpt 'from-6.0-to-7.10' page='NXDOC:Upgrade from 6.0 to LTS 2015'}}}

&nbsp;
