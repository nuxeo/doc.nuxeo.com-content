---
title: Update Site
review:
    comment: ''
    date: '2019-10-04'
    status: ok
labels:
    - lts2016-ok
    - nuxeo-drive
    - mchoentgen
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
    canonical: Nuxeo+Drive+Update+Site
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Drive+Update+Site'
    page_id: '19793145'
    shortlink: _QQuAQ
    shortlink_source: 'https://doc.nuxeo.com/x/_QQuAQ'
    source_link: /display/NXDOC/Nuxeo+Drive+Update+Site
tree_item_index: 300
history:
    -
        author: Manon Lumeau
        date: '2016-04-21 12:51'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2016-04-01 15:02'
        message: Update section Using a Custom Update Site to use update-site-url instead of org.nuxeo.drive.update.site.url
        version: '12'
    -
        author: Manon Lumeau
        date: '2016-03-21 15:25'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2015-06-09 07:56'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2015-06-09 07:53'
        message: Format toc and update related pages
        version: '9'
    -
        author: Antoine Taillefer
        date: '2015-06-08 14:18'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-07-01 12:24'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-07-01 10:20'
        message: ''
        version: '6'
    -
        author: Antoine Taillefer
        date: '2014-06-30 15:27'
        message: ''
        version: '5'
    -
        author: Antoine Taillefer
        date: '2014-06-30 15:24'
        message: ''
        version: '4'
    -
        author: Antoine Taillefer
        date: '2014-06-30 15:18'
        message: ''
        version: '3'
    -
        author: Antoine Taillefer
        date: '2014-06-30 14:57'
        message: ''
        version: '2'
    -
        author: Antoine Taillefer
        date: '2014-06-30 14:12'
        message: ''
        version: '1'
---

{{! multiexcerpt name='update_site_page_content'}}

We wrote our own auto-update framework knowing:

- The code freeze is done with PyInstaller;
- The GNU/Linux binary uses AppImageTool commands to generate a `.AppImage`;
- The macOS installer uses OS-specific commands to generate a `.dmg`;
- The Windows installer uses the Inno Setup Compiler that outputs a single `.exe`.

## Server

{{#> callout type='warning' }}
Using a secured server with `HTTPS` access only is **strongly recommended**.
{{/callout}}

The server side tree is quite simple:

    drive-updates/
        alpha/
            nuxeo-drive-2.0.0.13-x86_64.AppImage
            nuxeo-drive-2.0.0.13.dmg
            nuxeo-drive-2.0.0.13.exe
        beta/
            nuxeo-drive-3.1.1-x86_64.AppImage
            nuxeo-drive-3.1.1.dmg
            nuxeo-drive-3.1.1.exe
        release/
            nuxeo-drive-3.1.0-x86_64.AppImage
            nuxeo-drive-3.1.0.dmg
            nuxeo-drive-3.1.0.exe
        nuxeo-drive.dmg
        nuxeo-drive.exe
        versions.yml

### Folders

- `alpha`: early development versions. It can be promoted to beta, in that case files are just **moved** from this folder to the `beta` one.
- `beta`: all betas that are not releases. If one beta is going to be officially released, files are just **moved** from this folder to the `release` one.
- `release`: all official releases.

### Files

- `nuxeo-drive-x86_64.AppImage`: symbolic link to the latest official release for GNU/Linux;
- `nuxeo-drive.dmg`: symbolic link to the latest official release for macOS;
- `nuxeo-drive.exe`: symbolic link to the latest official release for Windows;
- `versions.yml`: list of available versions and their characteristics (the format used is [YAML](http://yaml.org/)).

Example of `version.yml` content:

    2.0.0:
        min: '5.6'
        max: 7.10-HF18
        type: alpha
        checksum:
            also: SHA1
            appimage: ...
            dmg: ...
            exe: ...

    3.1.0:
        min: '7.10'
        type: release
        checksum:
            algo: SHA512
            appimage: ...
            dmg: ...
            exe: ...

    3.1.1:
        min: '7.10'
        type: beta
        checksum:
            algo: MD5
            appimage: ...
            dmg: ...
            exe: ...

    4.0.0:
        min: '7.10'
        type: beta
        checksum:
            algo: MD5
            appimage: ...
            dmg: ...
            exe: ...

Each entry describes a version with:

- `type`: the release type, either an `alpha`, a `beta` or a `release`. **Mandatory**.
- `checksum`: list of checksums for related files. **Mandatory**.
  - `algo`: the algorithm used, it must be one of the [hashlib](https://docs.python.org/2/library/hashlib.html) module (will use SHA256 by default).
  - `appimage`: the checksum of the file `.AppImage`. **Mandatory** if you provide a GNU/Linux binary.
  - `dmg`: the checksum of the file `.dmg`. **Mandatory** if you provide a macOS installer.
  - `exe`: the checksum of the file `.exe`. **Mandatory** if you provide a Windows installer.
- `min`: the minimum Nuxeo version required for this release to work with. **Mandatory**.
- `max`: the maximum Nuxeo version required for this release to work with. If not defined, Drive will consider the current Nuxeo version as acceptable to work with.

`min` and `max` can take a hotfix (HF) version, helpful to isolate some versions. Defined versions are **inclusive**.

Notes:

- A version not listed can physically exist on the server but the reverse is not true: if a version is listed, files must exist on the server.
- Versions set **are not effective**. They are listed for information only as there is no way to retrieve the exact server version at the time.

## Client

When setting the `update-site-url` or `beta-update-site-url` parameter, it must point to `https://example.org/drive-updates/`, also:

- You do not specify `/beta` or `/release` at the end of the URL, Drive will compute the final URL depending on set options;
- Of course, if you are using a specific domain name where the tree is at the root, use only `https://example.org/`;
- The trailing slash is **not** mandatory.

Process:

1. Fetch the file `versions.yml` from the defined URL in `update-site-url` (or `beta-update-site-url`);
2. Find the latest version sorted by `type` and the current Nuxeo version;
3. If the "Auto-update" option is not checked, stop there;
4. Download the version specific to the current OS (`.dmg` for macOS, `.exe` for Windows, ... ) into a temporary folder;
5. Verify the checksum of the downloaded file.

Then, actions taken are OS-specific.

#### GNU/Linux

The process is quite simple:

1. Move the new `nuxeo-drive-x.y.z-x86_64.AppImage` file next to the current running AppImage file;
2. Restart Drive using the new executable.

### macOS

1. Mount the `nuxeo-drive-x.y.z.dmg` file;
2. Backup the current `.app` in `/Applications`;
3. Copy the new `.app` to `/Applications`;
4. Unmount the `.dmg`;
5. Delete the `.dmg`;
6. Restart Drive.

### Windows

The only action to do is to install the new version by calling `nuxeo-drive-x.y.z.exe /VERYSILENT /START=auto` from the temporary folder.
The installer will automagically:

1. Stop Drive;
2. Install the new version, it will upgrade the old one without personal data loss;
3. Start Drive.

{{! /multiexcerpt}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other documentation about Nuxeo Drive'}}

- [How to Manually Initialize or Deploy a Nuxeo Drive Instance]({{page page='how-to-manually-initialize-or-deploy-a-nuxeo-drive-instance'}})
- [How to Customize Nuxeo Drive Versioning Policy]({{page page='how-to-customize-nuxeo-drive-versioning-policy'}})
- [Nuxeo Drive documentation]({{page page='nuxeo-drive'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
