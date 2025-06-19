---
title: NEV 2025.0.0
description: Release notes for Nuxeo Enhanced Viewer 2025.0.0

tree_item_index: 2500
hidden: true
review:
  comment: ''
  date: '2025-04-28'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}

## What's new in NEV 2025.0.0

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">2025.0.0</td>
</tr>
<tr>
<th colspan="1">Included ARender Version</th>
<td colspan="1">2023.8.0</td>
</tr>
</tbody>
</table>
</div>


### Enable the Sound Annotation by Default

Sound annotation is now enabled by default, you can disable it by setting the environment variable below:

```
ARENDER_TOPPANEL_ANNOTATIONMENU_SOUND=false
```

The record time has been set to 1m, you can override it with the environment variable below:

```
ARENDER_ANNOTATION_SOUND_RECORD_TIME_LIMIT=60000
```

### ARender Software Was Updated to 2023.8.0

ARender was updated to the latest version, see the various Release Notes:

- [https://hub.arender.io/technical-blog/release-note/2023/release-note-2023-0-0](https://hub.arender.io/technical-blog/release-note/2023/release-note-2023-0-0|smart-link) 
- [https://hub.arender.io/technical-blog/release-note/2024/release-note-2023-1-0](https://hub.arender.io/technical-blog/release-note/2024/release-note-2023-1-0|smart-link) 
- [https://hub.arender.io/technical-blog/release-note/2024/release-note-2023-2-0](https://hub.arender.io/technical-blog/release-note/2024/release-note-2023-2-0|smart-link) 
- [https://hub.arender.io/technical-blog/release-note/2024/release-note-2023-3-0](https://hub.arender.io/technical-blog/release-note/2024/release-note-2023-3-0|smart-link) 
- [https://hub.arender.io/technical-blog/release-note/2024/release-note-2023-4-0](https://hub.arender.io/technical-blog/release-note/2024/release-note-2023-4-0|smart-link) 
- [https://hub.arender.io/technical-blog/release-note/2025/release-note-2023-5-0](https://hub.arender.io/technical-blog/release-note/2025/release-note-2023-5-0|smart-link) 
- [https://hub.arender.io/technical-blog/release-note/2025/release-note-2023-6-0](https://hub.arender.io/technical-blog/release-note/2025/release-note-2023-6-0|smart-link) 
- [https://hub.arender.io/technical-blog/release-note/2025/release-note-2023-7-0](https://hub.arender.io/technical-blog/release-note/2025/release-note-2023-7-0|smart-link) 
- [https://hub.arender.io/technical-blog/release-note/2025/release-note-2023-8-0](https://hub.arender.io/technical-blog/release-note/2025/release-note-2023-8-0|smart-link) 

### Upgrading from NEV 2.x to 2025.x

To upgrade to NEV `2025.x`, update the NEV Helm Chart to the latest `2.x` version.

ARender software was updated from `4.8.x` to `2023.x` version. For additional information, check the [ARender Upgrade Guide](https://docs.arender.io/guides/upgrade/4.8_to_2023.0/).


{{! /multiexcerpt}}
