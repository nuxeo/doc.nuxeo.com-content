---
title: Alternative Command Parameters for ProRes Codec Users
review:
    comment: ''
    date: '2016-12-06'
    status: ok
labels:
    - lts2016-ok
    - convert-component
    - excerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '3866704'
    ajs-parent-page-title: Digital Asset Management (DAM)
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Alternative+Command+Parameters+for+ProRes+Codec+Users
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Alternative+Command+Parameters+for+ProRes+Codec+Users'
    page_id: '26317024'
    shortlink: 4JCRAQ
    shortlink_source: 'https://doc.nuxeo.com/x/4JCRAQ'
    source_link: /display/NXDOC/Alternative+Command+Parameters+for+ProRes+Codec+Users
history:
    -
        author: Solen Guitter
        date: '2015-10-19 08:59'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-10-12 14:14'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2015-10-12 14:14'
        message: ''
        version: '2'
    -
        author: Thierry Martins
        date: '2015-10-02 09:42'
        message: ''
        version: '1'
---

{{! excerpt}}

{{! Put short text that explains the purpose of the page here. This excerpt can be displayed on parent pages in listings. }}

{{! /excerpt}}

The Nuxeo Platform automatically converts the new Video files ingested in the system to produce mp4 and webM videos. The mp4 file will be used to display the playback.

From our experience and our customers feedback, the mp4 conversion used by default does not suit all video format given as an input, in particular video encoded with ProRes codec. In this case, the playback is not displayed in the browser. Therefore you need to override the default `ffmpeg-tomp4` command with the following code:

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.platform.video.convert.commandline.override">

  <require>org.nuxeo.ecm.platform.video.convert.commandline</require>

  <extension target="org.nuxeo.ecm.platform.commandline.executor.service.CommandLineExecutorComponent"
    point="command">

    <command enabled="true" name="ffmpeg-tomp4">
      <commandLine>ffmpeg</commandLine>
      <parameterString> -i #{inFilePath} -acodec aac -strict -2 -pix_fmt yuv420p -vcodec libx264 -r 29.97 -v 0 #{outFilePath}</parameterString>
      <winParameterString> -i #{inFilePath} -acodec aac -strict -2 -pix_fmt yuv420p -vcodec libx264 -r 29.97 -v 0 #{outFilePath}</winParameterString>
      <installationDirective>You need to install ffmpeg from http://ffmpeg.org (apt-get install ffmpeg)
      </installationDirective>
    </command>

  </extension>

</component>
```

{{! Don't put anything here. }}

* * *
