---
title: 'HOWTO: Manually Initialize or Deploy a Nuxeo Drive Instance'
review:
    comment: ''
    date: '2019-03-15'
    status: ok
labels:
    - lts2016-ok
    - nuxeo-drive
    - mschoentgen
    - lklein
    - yachour
    - multiexcerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '14257229'
    ajs-parent-page-title: Nuxeo Drive
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Manually+Initialize+or+Deploy+a+Nuxeo+Drive+Instance
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Manually+Initialize+or+Deploy+a+Nuxeo+Drive+Instance'
    page_id: '18450728'
    shortlink: KIkZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/KIkZAQ'
    source_link: /display/NXDOC/How+to+Manually+Initialize+or+Deploy+a+Nuxeo+Drive+Instance
tree_item_index: 800
history:
    -
        author: Rémi Cattiau
        date: '2016-08-10 20:04'
        message: ''
        version: '35'
    -
        author: Manon Lumeau
        date: '2016-03-21 15:24'
        message: ''
        version: '34'
    -
        author: Solen Guitter
        date: '2016-02-03 09:18'
        message: ''
        version: '33'
    -
        author: Solen Guitter
        date: '2016-02-02 16:58'
        message: ''
        version: '32'
    -
        author: Solen Guitter
        date: '2016-02-02 13:54'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2015-10-13 10:04'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2015-06-09 08:44'
        message: ''
        version: '29'
    -
        author: Antoine Taillefer
        date: '2015-06-08 13:59'
        message: ''
        version: '28'
    -
        author: Antoine Taillefer
        date: '2015-06-08 08:16'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2015-02-02 10:54'
        message: link update
        version: '26'
    -
        author: Solen Guitter
        date: '2015-02-02 09:58'
        message: 'Update related pages, formatting'
        version: '25'
    -
        author: Antoine Taillefer
        date: '2015-01-30 15:26'
        message: ''
        version: '24'
    -
        author: Antoine Taillefer
        date: '2015-01-30 15:25'
        message: ''
        version: '23'
    -
        author: Antoine Taillefer
        date: '2015-01-30 15:23'
        message: ''
        version: '22'
    -
        author: Antoine Taillefer
        date: '2015-01-30 15:16'
        message: ''
        version: '21'
    -
        author: Antoine Taillefer
        date: '2015-01-30 15:12'
        message: ''
        version: '20'
    -
        author: Antoine Taillefer
        date: '2015-01-30 15:11'
        message: ''
        version: '19'
    -
        author: Antoine Taillefer
        date: '2015-01-30 15:09'
        message: ''
        version: '18'
    -
        author: Antoine Taillefer
        date: '2015-01-30 15:08'
        message: ''
        version: '17'
    -
        author: Antoine Taillefer
        date: '2015-01-30 15:07'
        message: ''
        version: '16'
    -
        author: Antoine Taillefer
        date: '2015-01-30 14:54'
        message: ''
        version: '15'
    -
        author: Antoine Taillefer
        date: '2015-01-30 14:46'
        message: ''
        version: '14'
    -
        author: Antoine Taillefer
        date: '2015-01-30 14:30'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2014-09-10 10:26'
        message: ''
        version: '12'
    -
        author: Antoine Taillefer
        date: '2014-09-09 14:45'
        message: ''
        version: '11'
    -
        author: Antoine Taillefer
        date: '2014-06-26 16:46'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2014-04-24 15:01'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2014-04-24 14:59'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-02-24 17:47'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-02-24 15:48'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-02-24 10:22'
        message: Added related topics
        version: '5'
    -
        author: Solen Guitter
        date: '2014-02-24 10:17'
        message: Formatting
        version: '4'
    -
        author: Antoine Taillefer
        date: '2014-02-21 15:48'
        message: ''
        version: '3'
    -
        author: Antoine Taillefer
        date: '2014-02-21 15:43'
        message: ''
        version: '2'
    -
        author: Antoine Taillefer
        date: '2014-02-21 15:22'
        message: ''
        version: '1'
---

{{! multiexcerpt name='drive_2.x_manual_initialization'}}

Usually Nuxeo Drive is initialized when the user completes the Settings panel and successfully logs in. But for auto deployment you might want to use the command line or EXE.

## Command Line

You can bind a new engine on Nuxeo Drive by calling the `ndrive` executable with the following arguments. It is recommended to have your Drive not running while executing this command.

```batch
ndrive bind-server [--password PASSWORD] [--local-folder LOCALFOLDER] USERNAME URL
```

More information about the parameters:

- `USERNAME`: The username of the user who will be using Nuxeo Drive. **Mandatory**.
- `URL`: The URL of the Nuxeo server. **Mandatory**.
- `PASSWORD`: The password of the user who will be using Nuxeo Drive. If you don't specify the `PASSWORD` then it will be asked to the user when Nuxeo Drive is started.
- `LOCALFOLDER`: The path to the Nuxeo Drive folder that will be created. Path must include the Nuxeo Drive folder. If `LOCALFOLDER` is not specified then the default location will be picked.

## Installer

On Windows you can automatically call the `bind-server` command on install if you set up the EXE variables:

- `TARGETURL`: The URL of the Nuxeo server. **Mandatory**.
- `TARGETUSERNAME`: The username of the user who will be using Nuxeo Drive. **Mandatory**.
- `TARGETPASSWORD`: The password of the user who will be using Nuxeo Drive. If you don't specify it then it will be asked to the user when Nuxeo Drive is started.
- `TARGETDRIVEFOLDER`: The path to the Nuxeo Drive folder that will be created. Path must include the Nuxeo Drive folder.
- `START=auto`: Start Nuxeo Drive after the installation.

### Examples

Install Nuxeo Drive and configure the Nuxeo server to `http://localhost:8080/nuxeo` with the username `username`:

```sh
nuxeo-drive.exe /SILENT /TARGETURL="http://localhost:8080/nuxeo" /TARGETUSERNAME="username"
```

Same as above, but add the associated password:

```sh
nuxeo-drive.exe /SILENT /TARGETURL="http://localhost:8080/nuxeo" /TARGETUSERNAME="username" /TARGETPASSWORD="password"
```

A full installation, useful for large automatic deployments:

```sh
nuxeo-drive.exe /VERYSILENT /TARGETDRIVEFOLDER="%USERPROFILE%\Documents\Nuxeo Drive" /TARGETURL="http://localhost:8080/nuxeo" /TARGETUSERNAME="foo"
```

Even if `username` is wrong, it will allow the customization of the Nuxeo server on all clients. The users will be asked to enter their username and password upon the first connection.

{{! /multiexcerpt}}

***

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other documentation about Nuxeo Drive'}}

- [Nuxeo Drive Update Site]({{page page='nuxeo-drive-update-site'}})
- [Nuxeo Drive documentation]({{page page='nuxeo-drive'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

&nbsp;

</div></div>
