---
title: Running Multiple Server Instances in Windows
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - content-review-lts2016
    - install-windows
    - pabgrall
    - last-review-20141126
    - lts2017-ok
confluence:
    ajs-parent-page-id: '9274329'
    ajs-parent-page-title: Installing the Nuxeo Platform on Windows
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Running+Multiple+Server+Instances+in+Windows
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Running+Multiple+Server+Instances+in+Windows'
    page_id: '5570969'
    shortlink: mQFV
    shortlink_source: 'https://doc.nuxeo.com/x/mQFV'
    source_link: /display/NXDOC/Running+Multiple+Server+Instances+in+Windows
tree_item_index: 200
version_override:
    LTS 2015: 710/admindoc/running-multiple-server-instances-in-windows
    '6.0': 60/admindoc/running-multiple-server-instances-in-windows
    '5.8': 58/admindoc/running-multiple-server-instances-in-windows
history:
    -
        author: Solen Guitter
        date: '2014-11-26 11:10'
        message: ''
        version: '18'
    -
        author: Julien Carsique
        date: '2014-08-25 14:53'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2014-08-25 14:49'
        message: Remove 5.4 reference
        version: '16'
    -
        author: Solen Guitter
        date: '2013-10-14 16:00'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-10-10 16:26'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-10-10 16:24'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2012-03-28 17:29'
        message: Migrated to Confluence 4.0
        version: '12'
    -
        author: Solen Guitter
        date: '2012-03-28 17:29'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2012-02-07 15:14'
        message: ''
        version: '10'
    -
        author: Thierry Martins
        date: '2012-02-07 15:07'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2011-04-18 15:32'
        message: ''
        version: '8'
    -
        author: Julien Carsique
        date: '2011-03-22 15:29'
        message: ''
        version: '7'
    -
        author: Julien Carsique
        date: '2011-03-22 15:28'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2011-03-22 15:28'
        message: 'Add information for Nuxeo >= 5.4.1'
        version: '5'
    -
        author: Mathieu Guillaume
        date: '2011-02-15 14:56'
        message: ''
        version: '4'
    -
        author: Mathieu Guillaume
        date: '2011-02-15 14:55'
        message: ''
        version: '3'
    -
        author: Mathieu Guillaume
        date: '2011-02-15 14:55'
        message: ''
        version: '2'
    -
        author: Mathieu Guillaume
        date: '2011-02-15 14:54'
        message: ''
        version: '1'

---
The location of the `nuxeo.conf` is defined by that order of priority (i.e. first one of those found is used):

*   Registry key `HKEY_LOCAL_MACHINE\SOFTWARE\PRODNAME\ConfigFile` with PRODNAME equals "Nuxeo CAP", "Nuxeo DM", "Nuxeo DAM", ...
*   Environment variable `NUXEO_CONF`
*   `"nuxeo.conf"` file in the working directory
*   `"nuxeo.conf"` file on the Desktop
*   `"nuxeo.conf"` file in the same location as the&nbsp;`nuxeoctl.bat` file.

To launch multiple instances of Nuxeo you need to:

1.  Remove the registry key (set up by the Windows installer)
2.  Have wrappers around `NuxeoCtl.exe`/`nuxeoctl.bat` that define different `NUXEO_CONF` environment variables.

**Note**: You'd also want to have different `nuxeo.data.dir`, `nuxeo.log.dir`, `nuxeo.tmp.dir`, `nuxeo.server.http.port` and `nuxeo.server.tomcat-admin.port` in the two `nuxeo.conf` files (you can set `nuxeo.server.ajp.port` to 0 to disable AJP if you don't use it).

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other Windows-Related Documentation'}}

- [Installing the Nuxeo Platform on Windows]({{page page='installing-the-nuxeo-platform-on-windows'}})
- [Installing the Nuxeo Platform as a Windows Service]({{page page='installing-the-nuxeo-platform-as-a-windows-service'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
