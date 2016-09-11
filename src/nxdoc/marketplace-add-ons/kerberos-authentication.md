---
title: Kerberos Authentication
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '22380668'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Kerberos+Authentication
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Kerberos+Authentication'
    page_id: '21921795'
    shortlink: A4BOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/A4BOAQ'
    source_link: /display/NXDOC60/Kerberos+Authentication
history:
    - 
        author: Solen Guitter
        date: '2014-11-27 16:31'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-11-10 22:04'
        message: Add links
        version: '3'
    - 
        author: Mathieu Guillaume
        date: '2014-11-07 15:12'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-11-07 14:49'
        message: ''
        version: '1'

---
{{! excerpt}}

The [Kerberos Authentication add-on](https://connect.nuxeo.com/nuxeo/site/marketplace/package/kerberos-authentication) allows your users to log in to the Nuxeo Platform by authenticating to a Kerberos server (eg. Active Directory).

{{! /excerpt}}

&nbsp;

## Before You Begin...

You should have the following ready:

*   a working Kerberos configuration
*   a keytab file
*   a Kerberos principal

If not, see the [Using Kerberos]({{page space='admindoc60' page='using-kerberos'}}) documentation for the initial setup.

## Upgrade Notes

If you are upgrading from a version of the package lower than 1.3.0 (i.e. from Nuxeo 5.x), remove the `-Djava.security.auth.login.config=xxx` option from your [nuxeo.conf]({{page space='admindoc60' page='configuration-parameters-index-nuxeoconf'}}): it is now automatically added by the package.

## Configuration

Add the following options in your nuxeo.conf:

*   `kerberos.principal=_your kerberos principal_`
*   `kerberos.keytab=_/path/to/your/kerberos.keytab_`

## Installation

**Note**: You must have configured the Kerberos setup in nuxeo.conf before installing the package. Otherwise package installation will fail.

{{{multiexcerpt 'MP-installation-easy' page='NXDOC:Digital Asset Management (DAM)'}}}

If you use the Admin Center, you will have to restart the server **twice**&nbsp;due to&nbsp;[NXP-15592](https://jira.nuxeo.com/browse/NXP-15592).

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Related Documentation'}}

*   [Authentication, users and groups]({{page space='admindoc60' page='authentication-users-and-groups'}})
*   [Using Kerberos]({{page space='admindoc60' page='using-kerberos'}})

{{/panel}}</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

&nbsp;

</div></div>