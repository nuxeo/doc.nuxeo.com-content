---
title: NEV 2025.1.0
description: Release notes for Nuxeo Enhanced Viewer 2025.1.0

tree_item_index: 2490
hidden: true
review:
  comment: ''
  date: '2025-06-20'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}

## What's new in NEV 2025.1.0

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">2025.1.0</td>
</tr>
<tr>
<th colspan="1">Included ARender Version</th>
<td colspan="1">2023.10.1</td>
</tr>
</tbody>
</table>
</div>


### Content Redaction Feature Can Now Be Disabled by Configuration

It is now possible to completely disable Content Redaction on Nuxeo Enhanced Viewer by putting this environment variable on the `nuxeo/arender-ui` Docker image:

```
ARENDERSRV_NUXEO_ARENDER_CONTENT_REDACTION_ENABLED=false
```

If you’re using the NEV Helm Chart, you can set it to your values:

```yaml
arender:
  viewer:
    environment:
      ARENDERSRV_NUXEO_ARENDER_CONTENT_REDACTION_ENABLED: "false"
```

### ARender Software Was Updated to 2023.10.1

ARender was updated to the latest version, see the various Release Notes:

- [ARender 2023.9.0 Release Notes](https://hub.arender.io/technical-blog/release-note/2025/release-note-2023-9-0)
- [ARender 2023.10.0 Release Notes](https://hub.arender.io/technical-blog/release-note/2025/release-note-2023-10-0)


{{! /multiexcerpt}}
