---
title: Nuxeo Security Update - 2015-02-27 - Critical
review:
    comment: ''
    date: ''
    status: ok
labels:
    - content-review-lts2015
toc: true
confluence:
    ajs-parent-page-id: '27604627'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: Nuxeo+Security+Update+-+2015-02-27+-+Critical
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC710/Nuxeo+Security+Update+-+2015-02-27+-+Critical
    page_id: '27604654'
    shortlink: rjalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/rjalAQ'
    source_link: /display/ADMINDOC710/Nuxeo+Security+Update+-+2015-02-27+-+Critical
history:
    - 
        author: Anahide Tchertchian
        date: '2015-03-03 16:14'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2015-03-03 10:05'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2015-03-03 07:50'
        message: ''
        version: '22'
    - 
        author: Thierry Martins
        date: '2015-03-02 17:46'
        message: add instructions for 5.9.5
        version: '21'
    - 
        author: Thierry Martins
        date: '2015-03-02 13:16'
        message: ''
        version: '20'
    - 
        author: Thierry Martins
        date: '2015-03-02 13:08'
        message: ''
        version: '19'
    - 
        author: Thierry Martins
        date: '2015-03-02 10:38'
        message: ''
        version: '18'
    - 
        author: Thierry Martins
        date: '2015-03-02 10:17'
        message: ''
        version: '17'
    - 
        author: Thierry Martins
        date: '2015-03-02 10:05'
        message: ''
        version: '16'
    - 
        author: Manon Lumeau
        date: '2015-03-02 10:03'
        message: ''
        version: '15'
    - 
        author: Thierry Martins
        date: '2015-02-27 18:09'
        message: ''
        version: '14'
    - 
        author: Anahide Tchertchian
        date: '2015-02-27 18:00'
        message: ''
        version: '13'
    - 
        author: Manon Lumeau
        date: '2015-02-27 17:57'
        message: ''
        version: '12'
    - 
        author: Manon Lumeau
        date: '2015-02-27 17:54'
        message: ''
        version: '11'
    - 
        author: Manon Lumeau
        date: '2015-02-27 17:53'
        message: ''
        version: '10'
    - 
        author: Manon Lumeau
        date: '2015-02-27 17:50'
        message: ''
        version: '9'
    - 
        author: Manon Lumeau
        date: '2015-02-27 17:47'
        message: ''
        version: '8'
    - 
        author: Manon Lumeau
        date: '2015-02-27 17:35'
        message: ''
        version: '7'
    - 
        author: Manon Lumeau
        date: '2015-02-27 17:35'
        message: ''
        version: '6'
    - 
        author: Manon Lumeau
        date: '2015-02-27 17:32'
        message: ''
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2015-02-27 17:26'
        message: ''
        version: '4'
    - 
        author: Thierry Martins
        date: '2015-02-27 17:25'
        message: update procedure to install HF
        version: '3'
    - 
        author: Manon Lumeau
        date: '2015-02-27 17:11'
        message: ''
        version: '2'
    - 
        author: Manon Lumeau
        date: '2015-02-27 17:07'
        message: ''
        version: '1'

---
{{! multiexcerpt name='main-content'}}

&nbsp;

## About the Vulnerabilities

Nuxeo contains a servlet allowing the retrieval of Javascript resources on the server side. Although the servlet handles the escaping of unwanted characters, some specially-crafted URLs may bypass the escaping and allow read access resources on the file system. This vulnerability is available even to unauthenticated users.

Nuxeo allows the preview of uploaded ZIP files containing a tree of HTML files. There is a vulnerability in the way ZIP files are expanded which may allow a maliciously-crafted ZIP file to escape the confines of the temporary directory dedicated to the preview. This may lead to remote code execution. This vulnerability requires an authenticated user allowed to upload new files.

Nuxeo allows execution of server-side methods from JavaScript using Seam Remoting. Seam Remoting fails to properly parse XML files and allows XML External Entities (XXE) which can lead to arbitrary file disclosure. This vulnerability requires an authenticated user.

Severity : Critical - We advise you to apply the fix ASAP.

## Affected Versions

All Nuxeo Platform versions since 5.4.2 are affected by the issue and we have provided hotfixes for all released versions.

The fix is included in any hotfix or version released after the discovery of the issue 2015-02-26.

Here is a list of the versions which already include the security fix:

*   7.2 Fast Track and later
*   7.1 Fast Track
*   6.0-HF07 and later
*   5.9.5 Fast Track
*   5.8-HF31 and later
*   5.6-HF42 and later
*   5.5-HF20 and later
*   5.4.2-HF33 and later

## Applying the Security Hotfix

There are several ways to install the security hotfix:

### Update Center

This security hotfix is available through update center under the name "Nuxeo Security Update 2015-02-27".

1.  In **Admin Center** (or **Admin** tab since Nuxeo Platform 6.0), go to **Update Center** > **Nuxeo Software updates**.
2.  Download the package named "Nuxeo Security Update 2015-02-27", install it and restart your instance.

### Command Line

For Nuxeo 5.6 and later, you can use the generic command to install all the available hotfixes according to your version. It is the recommended way to proceed:

```
./nuxeoctl mp-hotfix
```

On older versions, or if you want to install the last hotfix manually, you can use one of the following commands. If needed, the system will ask to install the dependencies. The command is specific to the Nuxeo Platform version:

```
./nuxeoctl mp-install nuxeo-7.1-SU01
./nuxeoctl mp-install nuxeo-6.0-HF07
./nuxeoctl mp-install nuxeo-5.9.5-SU01
./nuxeoctl mp-install nuxeo-5.8.0-HF31
./nuxeoctl mp-install nuxeo-5.6.0-HF42
./nuxeoctl mp-install nuxeo-5.5.0-HF20
./nuxeoctl mp-install nuxeo-5.4.2-HF33
```

### Manual Download

1.  You need to browse to the following URLs according to your Nuxeo Platform version:
    *   7.1: [https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-7.1-SU01-1.0.0](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-7.1-SU01-1.0.0)
    *   6.0: [https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-6.0-HF07-1.0.0](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-6.0-HF07-1.0.0)
    *   5.9.5: [https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-5.9.5-SU01-1.0.0](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-5.9.5-SU01-1.0.0)
    *   5.8: [https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-5.8.0-HF31-1.0.0](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-5.8.0-HF31-1.0.0)
    *   5.6: [https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-5.6.0-HF42-1.0.0](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-5.6.0-HF42-1.0.0)
    *   5.5: [https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-5.5.0-HF20-1.0.0](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-5.5.0-HF20-1.0.0)
    *   5.4.2: [https://connect.nuxeo.com/nuxeo/site/marketplace/package/DM-5.4.2-HF33-1.0.0](https://connect.nuxeo.com/nuxeo/site/marketplace/package/DM-5.4.2-HF33-1.0.0)
2.  Then click on the **Download** link and save the file.
3.  In **Admin Center** (or **Admin** tab since Nuxeo Platform 6.0), go to **Update Center** > **Local Packages**.
4.  Click the **Upload a package** button, select the downloaded file and upload it.
5.  Install the package and restart your instance.

## Mitigation

If for some reasons you cannot apply the security fix immediately, there are temporary workarounds which may help you, please contact us via Support to discuss possible options.

### Filtering Problematic URLs

You can filter out problematic requests at the reverse proxy level.

No valid Nuxeo request should contain `..` as part of the Query String. You can simply filter out any GET request containing `..` inside the Query String.

Here is a sample Apache config:

```
RewriteCond %{QUERY_STRING} .*\.\..* [OR] 
RewriteCond %{QUERY_STRING} .*%2E%2E.* 
RewriteRule ^/.*$ /404.html [R=404,L]
```

### Preventing Problematic Converter

The following XML file can be put in your server&rsquo;s `nxserver/config` under the name `securityfix-2015-02-25-config.xml` to disable a converter:

```xml
<?xml version="1.0"?>
<component name="securityfix-2015-02-25">
 <require>org.nuxeo.ecm.platform.convert.plugins</require>
 <extension target="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl" point="converter">
   <converter name="zip2html" class="org.nuxeo.ecm.core.convert.plugins.text.extractors.XML2TextConverter"/>
 </extension>
</component>
```

## Versions Not Supported by Hotfixes

Nuxeo proactively provides Security hotfixes for all released versions. If for some reasons, you are using a different version and would like a patch aligned on your specific version, please open a support ticket and provide details about your target version.

## Credits

We'd like to thank Michał Bentkowski and Sebastian Gilon from [securitum.pl](http://securitum.pl).

{{! /multiexcerpt}}