---
title: Managing Authentication with Other Applications
review:
    comment: ''
    date: ''
    status: ok
labels:
    - admin-center
    - gadgets
confluence:
    ajs-parent-page-id: '21299424'
    ajs-parent-page-title: Nuxeo OpenSocial
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Managing+Authentication+with+Other+Applications
    canonical_source: >-
        https://doc.nuxeo.com/display/USERDOC60/Managing+Authentication+with+Other+Applications
    page_id: '21299422'
    shortlink: 3gBFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/3gBFAQ'
    source_link: /display/USERDOC60/Managing+Authentication+with+Other+Applications
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 14:33'
        message: ''
        version: '18'
    - 
        author: Manon Lumeau
        date: '2014-12-05 18:03'
        message: ''
        version: '17'
    - 
        author: Manon Lumeau
        date: '2014-11-27 15:11'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:54'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-01-15 10:23'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2012-12-03 18:11'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2012-12-03 18:10'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-01-26 16:03'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '11'
    - 
        author: Solen Guitter
        date: '2012-01-26 16:03'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-01-26 16:03'
        message: Migrated to Confluence 4.0
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-01-26 16:03'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-11-24 11:24'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-11-22 15:43'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-06-06 12:16'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-06-06 10:39'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-06-06 10:37'
        message: added iGoogle example
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-05-31 10:36'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-05-31 10:15'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedAddOn_6.0' page='NXDOC60:Generic Multi-Excerpts'}}}

The Platform offers the possibility to [use external gadgets in the Nuxeo Platform]({{page page='managing-dashboards#manage-external-gadgets'}}) from the user interface and to use Nuxeo Platform's gadgets in other websites or applications.

External gadgets can be from public websites and applications, but you can also add gadgets from websites or applications that require you to log in, like a gadget from your email provider. If you want to use Nuxeo's gadgets in other applications, authentication is required as well.

OAuth is a protocol that enables external applications and Nuxeo Platform to access each other's data. Users can allow "consumer" (ie external) applications and websites to access the Nuxeo Platform data, Nuxeo Platform&nbsp;being the "provider".

In this section, we will take the example of iGoogle, that we want to authorize to display Nuxeo's data in a gadget.

{{! multiexcerpt name='iGoogle_OAuth_steps'}}

**To authorize external application to access Nuxeo Platform content:**

1.  In the Admin Center tab, click on the **OpenSocial / OAuth** tab.
2.  Click on the **Consumer** tab.
3.  Click on the **Add** link.
    The form to add a new consumer is displayed.
4.  Fill in the form with the parameters below.
5.  Click on the **Create** button.

**Google consumer parameters**

<table><tbody><tr><th colspan="1">

Field

</th><th colspan="1">

Parameter

</th></tr><tr><td colspan="1">

Consumer Key

</td><td colspan="1">

[www.google.com](http://www.google.com)

</td></tr><tr><td colspan="1">

Consumer Secret (HMAC Signature)

</td><td colspan="1">

Leave empty

</td></tr><tr><td colspan="1">

Consumer Public Key (RSA Signature)

</td><td colspan="1">

<pre> -----BEGIN CERTIFICATE-----
MIIDBDCCAm2gAwIBAgIJAK8dGINfkSTHMA0GCSqGSIb3DQEBBQUAMGAxCzAJBgNV
BAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzETMBEG
A1UEChMKR29vZ2xlIEluYzEXMBUGA1UEAxMOd3d3Lmdvb2dsZS5jb20wHhcNMDgx
MDA4MDEwODMyWhcNMDkxMDA4MDEwODMyWjBgMQswCQYDVQQGEwJVUzELMAkGA1UE
CBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxEzARBgNVBAoTCkdvb2dsZSBJ
bmMxFzAVBgNVBAMTDnd3dy5nb29nbGUuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GN
ADCBiQKBgQDQUV7ukIfIixbokHONGMW9+ed0E9X4m99I8upPQp3iAtqIvWs7XCbA
bGqzQH1qX9Y00hrQ5RRQj8OI3tRiQs/KfzGWOdvLpIk5oXpdT58tg4FlYh5fbhIo
VoVn4GvtSjKmJFsoM8NRtEJHL1aWd++dXzkQjEsNcBXwQvfDb0YnbQIDAQABo4HF
MIHCMB0GA1UdDgQWBBSm/h1pNY91bNfW08ac9riYzs3cxzCBkgYDVR0jBIGKMIGH
gBSm/h1pNY91bNfW08ac9riYzs3cx6FkpGIwYDELMAkGA1UEBhMCVVMxCzAJBgNV
BAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRMwEQYDVQQKEwpHb29nbGUg
SW5jMRcwFQYDVQQDEw53d3cuZ29vZ2xlLmNvbYIJAK8dGINfkSTHMAwGA1UdEwQF
MAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAYpHTr3vQNsHHHUm4MkYcDB20a5KvcFoX
gCcYtmdyd8rh/FKeZm2me7eQCXgBfJqQ4dvVLJ4LgIQiU3R5ZDe0WbW7rJ3M9ADQ
FyQoRJP8OIMYW3BoMi0Z4E730KSLRh6kfLq4rK6vw7lkH9oynaHHWZSJLDAp17cP
j+6znWkN9/g=
-----END CERTIFICATE-----</pre>

</td></tr><tr><td colspan="1">

Description

</td><td colspan="1">

Leave empty

</td></tr><tr><td colspan="1">

Allow 2 legged auth

</td><td colspan="1">

Leave default value.

</td></tr><tr><td colspan="1">

Callback URL

</td><td colspan="1">[http://oauth.gmodules.com/gadgets/oauthcallback](http://oauth.gmodules.com/gadgets/oauthcallback)</td></tr><tr><td colspan="1">

Allow OAuth verifier check bypass

</td><td colspan="1">

Check "Yes".

</td></tr><tr><td colspan="1">

Enabled&nbsp;

</td><td colspan="1">

Check "Yes".

</td></tr></tbody></table>{{! /multiexcerpt}}

For more information, take a look at these pages:

*   [How OpenSocial and OAuth are integrated in the Nuxeo applications]({{page space='nxdoc60' page='opensocial-and-the-nuxeo-platform'}}),
*   [How to use OAuth]({{page space='admindoc60' page='using-oauth'}}).

&nbsp;