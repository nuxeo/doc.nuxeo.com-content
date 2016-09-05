---
title: Live Edit Compatibility Table
labels:
    - live-edit
toc: true
confluence:
    ajs-parent-page-id: '16092645'
    ajs-parent-page-title: Working with Live Edit
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Live+Edit+Compatibility+Table
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Live+Edit+Compatibility+Table'
    page_id: '16092545'
    shortlink: gY31
    shortlink_source: 'https://doc.nuxeo.com/x/gY31'
    source_link: /display/USERDOC58/Live+Edit+Compatibility+Table
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 14:22'
        message: ''
        version: '32'
    - 
        author: Solen Guitter
        date: '2014-01-23 11:39'
        message: Moved IE9 Compatibility section up
        version: '31'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:02'
        message: Removed related topics from TOC
        version: '30'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:02'
        message: ''
        version: '29'
    - 
        author: Solen Guitter
        date: '2012-06-27 17:18'
        message: Migrated to Confluence 4.0
        version: '28'
    - 
        author: Solen Guitter
        date: '2012-06-27 17:18'
        message: ''
        version: '27'
    - 
        author: Thierry Martins
        date: '2011-12-20 17:53'
        message: ''
        version: '26'
    - 
        author: Arnaud Kervern
        date: '2011-12-20 15:19'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
        date: '2011-12-20 15:09'
        message: Added LibreOffice
        version: '24'
    - 
        author: Solen Guitter
        date: '2011-12-20 14:58'
        message: Added MSOffice 2000 and XP in Win 7 environment
        version: '23'
    - 
        author: Solen Guitter
        date: '2011-12-20 12:59'
        message: Added MSOffice 2000 and XP
        version: '22'
    - 
        author: Solen Guitter
        date: '2011-12-20 12:41'
        message: 'Added toc, related content, IE 6'
        version: '21'
    - 
        author: Solen Guitter
        date: '2011-11-24 09:59'
        message: ''
        version: '20'
    - 
        author: Stéfane Fermigier
        date: '2011-10-26 11:41'
        message: ''
        version: '19'
    - 
        author: Arnaud Kervern
        date: '2011-06-22 18:10'
        message: ''
        version: '18'
    - 
        author: Arnaud Kervern
        date: '2011-06-22 18:09'
        message: ''
        version: '17'
    - 
        author: Arnaud Kervern
        date: '2011-06-22 18:07'
        message: ''
        version: '16'
    - 
        author: Julien Carsique
        date: '2011-05-13 14:52'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2011-05-04 12:16'
        message: Updated with 1st Live Edit 2.2.1 tests results on Win7 environment.
        version: '14'
    - 
        author: Solen Guitter
        date: '2011-05-03 18:21'
        message: Updated with Live Edit 2.2.1 tests results on XP environment.
        version: '13'
    - 
        author: Solen Guitter
        date: '2011-05-03 09:54'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2011-04-21 18:24'
        message: ''
        version: '11'
    - 
        author: Arnaud Kervern
        date: '2011-04-20 16:05'
        message: ''
        version: '10'
    - 
        author: Arnaud Kervern
        date: '2011-04-20 16:04'
        message: ''
        version: '9'
    - 
        author: Arnaud Kervern
        date: '2011-04-20 15:28'
        message: ''
        version: '8'
    - 
        author: Arnaud Kervern
        date: '2011-04-20 15:24'
        message: ''
        version: '7'
    - 
        author: Arnaud Kervern
        date: '2011-04-19 17:55'
        message: ''
        version: '6'
    - 
        author: Arnaud Kervern
        date: '2011-04-19 17:51'
        message: ''
        version: '5'
    - 
        author: Arnaud Kervern
        date: '2011-04-19 17:10'
        message: ''
        version: '4'
    - 
        author: Arnaud Kervern
        date: '2011-04-19 17:10'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-04-18 18:56'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-04-18 18:55'
        message: ''
        version: '1'

---
## Internet Explorer 9 Compatibility

Internet Explorer 9 truncates the `HTTP_ACCEPT` header and prevents Live Edit to work. For instance:

*   with IE 9 in default browsing mode, the `HTTP_ACCEPT`&nbsp;header looks like this:

    {{#> panel }}

    text/html, application/xhtml+xml, */*

    {{/panel}}

Two workarounds are possible:

*   If you want to use Live Edit with the client side detection in Internet Explorer 9, you need to activate the "Internet Explorer 9 Compatibility view" browsing mode (F12 developer tools).
    With IE 9 in compatibility mode, the `HTTP_ACCEPT` header is:

    {{#> panel }}

    image/jpeg, application/x-ms-application, image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/msword, application/x-nuxeo-liveedit;ext0="application!vnd.ms-excel", application/x-nuxeo-liveedit;ext0="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", application/x-nuxeo-liveedit;ext0="application/vnd.openxmlformats-officedocument.presentationml.presentation", application/x-nuxeo-liveedit;ext0="application/vnd.openxmlformats-officedocument.wordprocessingml.document", application/x-nuxeo-liveedit;ext1="application!vnd.ms-powerpoint", application/x-nuxeo-liveedit;ext2="application!msword", */*

    {{/panel}}

*   Or you can force the detection of the Live Edit installation with a server side configuration:
    1.  Edit `$NUXEO_HOME/templates/common/config/nuxeo.properties`.
    2.  Change the value for the property `org.nuxeo.ecm.platform.liveedit.config` from **client** to **server** (uncomment the line if needed).
    3.  Restart the Nuxeo server.

## Windows XP Environment

<table><tbody><tr><th colspan="1">

&nbsp;

</th><th colspan="1">

Internet Explorer 6

</th><th colspan="1">

Internet Explorer 7

</th><th colspan="1">

Internet Explorer 8

</th><th colspan="1">

Internet Explorer 9

</th><th colspan="1">

Firefox < 3.6

</th><th colspan="1">

Firefox 3.6.3

</th><th colspan="1">

Firefox 4+

</th></tr><tr><th colspan="1">

Microsoft Office 2000

</th><td colspan="1">

Not supported

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

N/A

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

Not supported anymore

</td></tr><tr><th colspan="1">

Microsoft Office XP

</th><td colspan="1">

Not supported

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

N/A

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

Not supported anymore

</td></tr><tr><th colspan="1">

Microsoft Office 2003

</th><td colspan="1">

Not supported

</td><td colspan="1">

OK, except for a minor issue: [LIVED-187](https://jira.nuxeo.com/browse/LIVED-187)

</td><td colspan="1">

OK, except for a minor issue: [LIVED-187](https://jira.nuxeo.com/browse/LIVED-187)

</td><td colspan="1">

N/A

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

OK, except for a minor issue: [LIVED-187](https://jira.nuxeo.com/browse/LIVED-187)

</td><td colspan="1">

Testing in progress

</td></tr><tr><th colspan="1">

Microsoft Office 2007

</th><td colspan="1">

Not supported

</td><td colspan="1">

Tested OK on development branch, but minor issues:
<span style="text-decoration: line-through;">[LIVED-163](https://jira.nuxeo.com/browse/LIVED-163)</span>
<span style="text-decoration: line-through;">[LIVED-164](https://jira.nuxeo.com/browse/LIVED-164)</span>
<span style="text-decoration: line-through;">[LIVED-165](https://jira.nuxeo.com/browse/LIVED-165)</span>
Tests on Live Edit 2.2.1 in progress

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

N/A

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

Tested OK on development branch, but minor issues:
<span style="text-decoration: line-through;">[LIVED-163](https://jira.nuxeo.com/browse/LIVED-163)</span>
<span style="text-decoration: line-through;">[LIVED-164](https://jira.nuxeo.com/browse/LIVED-164)</span>
<span style="text-decoration: line-through;">[LIVED-165](https://jira.nuxeo.com/browse/LIVED-165)</span>
Tests on Live Edit 2.2.1 in progress

</td><td colspan="1">

Testing in progress

</td></tr><tr><th colspan="1">

OpenOffice.org 3.3

</th><td colspan="1">

Not supported

</td><td colspan="1">

OK

</td><td colspan="1">

OK

</td><td colspan="1">

N/A

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

OK

</td><td colspan="1">

Testing in progress

</td></tr><tr><th colspan="1">

LibreOffice 3.4

</th><td colspan="1">

Not supported

</td><td colspan="1">

OK

</td><td colspan="1">

OK

</td><td colspan="1">

N/A

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

OK

</td><td colspan="1">

Testing in progress

</td></tr></tbody></table>

## Windows 7 64b Environment

Nuxeo LiveEdit Microsoft Office is only compatible with Office in 32&nbsp;bits.
Beware about its detection inside Internet Explorer. For the moment, out of the box, it will only be possible with the 32&nbsp;bits version of your browser.

To enable the detection of your LiveEdit installation with Internet Explorer running in 64&nbsp;bits mode, you need to import this file into your registry (regedit).

*   Nuxeo LiveEdit Internet Explorer (64&nbsp;bits) fix: []({{file name='liveedit-ie-x64-fix.reg'}})

As LiveEdit installer is only built in 32&nbsp;bits yet, Windows will wrote the registry entries into a compatibility node (WoW6432Node) read by 32&nbsp;bits application running on 64&nbsp;bits OS, and this file will add necessary keys to the default registry node read.

<table><tbody><tr><th colspan="1">

&nbsp;

</th><th colspan="1">

Internet Explorer 6

</th><th colspan="1">

Internet Explorer 7

</th><th colspan="1">

Internet Explorer 8

</th><th colspan="1">

Internet Explorer 9

</th><th colspan="1">

Firefox < 3.6

</th><th colspan="1">

Firefox 3.6.x

</th><th colspan="1">

Firefox 4+

</th></tr><tr><th colspan="1">

Microsoft Office 2000

</th><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td></tr><tr><th colspan="1">

Microsoft Office XP

</th><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td></tr><tr><th colspan="1">

Microsoft Office 2003

</th><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

Not supported

</td><td colspan="1">

Note supported

</td><td colspan="1">

Not supported

</td><td colspan="1">

Not supported

</td><td colspan="1">

Not supported

</td></tr><tr><th colspan="1">

Microsoft Office 2007

</th><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

OK except for [LIVED-163](https://jira.nuxeo.com/browse/LIVED-163)

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

OK except for [LIVED-163](https://jira.nuxeo.com/browse/LIVED-163)

</td></tr><tr><th colspan="1">

Microsoft Office 2010

</th><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

[LIVED-149](https://jira.nuxeo.com/browse/LIVED-149)

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

[LIVED-149](https://jira.nuxeo.com/browse/LIVED-149)

</td><td colspan="1">

[LIVED-149](https://jira.nuxeo.com/browse/LIVED-149)

</td></tr><tr><th colspan="1">

OpenOffice.org 3.3

</th><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Testing in progress

</td></tr><tr><th colspan="1">

LibreOffice 3.4

</th><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Testing in progress

</td></tr></tbody></table>

## Windows 7 32b Environment

<table><tbody><tr><th colspan="1">

&nbsp;

</th><th colspan="1">

Internet Explorer 6

</th><th colspan="1">

Internet Explorer 7

</th><th colspan="1">

Internet Explorer 8

</th><th colspan="1">

Internet Explorer 9

</th><th colspan="1">

Firefox < 3.6

</th><th colspan="1">

Firefox 3.6.x

</th><th colspan="1">

Firefox 4+

</th></tr><tr><th colspan="1">

Microsoft Office 2000

</th><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td></tr><tr><th colspan="1">

Microsoft Office XP

</th><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td></tr><tr><th colspan="1">

Microsoft Office 2003

</th><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

Not supported

</td><td colspan="1">

Note supported

</td><td colspan="1">

Not supported

</td><td colspan="1">

Not supported

</td><td colspan="1">

Not supported

</td></tr><tr><th colspan="1">

Microsoft Office 2007

</th><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Testing in progress

</td></tr><tr><th colspan="1">

Microsoft Office 2010

</th><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

OK

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Testing in progress

</td></tr><tr><th colspan="1">

OpenOffice.org 3.3

</th><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Testing in progress

</td></tr><tr><th colspan="1">

LibreOffice 3.4

</th><td colspan="1">

N/A

</td><td colspan="1">

N/A

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Not supported anymore

</td><td colspan="1">

Testing in progress

</td><td colspan="1">

Testing in progress

</td></tr></tbody></table>

&nbsp;

&nbsp;