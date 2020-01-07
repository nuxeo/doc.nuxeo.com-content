---
title: Nuxeo Office Online Integration
description: 'The Nuxeo Office Online Integration addon adds the ability to view/edit Microsoft Office documents through Office Online.'
review:
    comment: ''
    date: '2018-11-16'
    status: ok
labels:
    - nuxeo-wopi
toc: true
tree_item_index: 2400
---

{{! excerpt}}
The Nuxeo Office Online Integration addon adds the ability to view/edit Microsoft Office documents through Office Online.
{{! /excerpt}}

The Office Online integration is done thanks to the Web Application Open Platform Interface (WOPI) protocol provided by Microsoft. The WOPI protocol enables Office Online to access and change files that are stored in a Nuxeo server.

You can find more information on the WOPI protocol for the Office Online integration [here](https://wopi.readthedocs.io/en/latest/index.html).

<script src="https://fast.wistia.com/embed/medias/qvuc7teh6i.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_qvuc7teh6i popover=true popoverAnimateThumbnail=true" style="display:inline-block;height:250px;position:relative;width:500px">&nbsp;</span>

## Functional Overview

### Office Online Check-In

When an office document (Excel, Word or PowerPoint files) is stored in Nuxeo Platform, whether it’s an attachment or the main file, the office addon enables a new action slot enabling a check-in into the Office Online web interface to preview and edit the document:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Office Online Integration/office-online-checkin.png
    name: office-online-checkin.png
    addins#screenshot#up_to_date
--}}
![office-online-checkin.png](nx_asset://589b97ec-7f95-495b-a6dc-5c0d57b17f78 ?w=650)

### Office Online Authentication

When a user is authenticated to Nuxeo, checking in a new office document for the first time will trigger an authentication attempt to Office Online services in a new window. </br>
A work or school account is required:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Office Online Integration/office-online-authentication.png
    name: office-online-authentication.png
    addins#screenshot#up_to_date
--}}
![office-online-authentication.png](nx_asset://4e7749bf-1c78-4a0d-a5e4-71b9463527a2 ?w=450)

Once authenticated, the user can choose to keep authenticated to his Microsoft account for future usage.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Office Online Integration/office-online-sign-in.png
    name: office-online-sign-in.png
    addins#screenshot#up_to_date
--}}
![office-online-sign-in.png](nx_asset://8bcabfa6-c6ca-47de-b275-e465de680c93 ?w=250)

### Office Online Documents Preview

When the user has only read access, or only require to preview the document, with the Office online web user interface.

### Office Online Documents Edition

Once in edition mode, every modification done on the Office document will be saved to Nuxeo Platform:

1. Initial State:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Office Online Integration/office-online-initial-state.png
      name: office-online-initial-state.png
      addins#screenshot#up_to_date
    --}}
    ![office-online-initial-state.png](nx_asset://c65cd4ef-351d-4b43-b775-332fa2f2dfbd ?w=650)
1. Edition (Office 365 Application Check-in):

    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Office Online Integration/office-online-edition-mode.png
      name: office-online-edition-mode.png
      addins#screenshot#up_to_date
    --}}
    ![office-online-edition-mode.png](nx_asset://38bfb820-74c5-46f8-b36f-25b5a73fb0f2 ?w=650)

    {{#> callout type='note' }}
    The mention “Saved to Nuxeo” is automatic (auto-saving feature of Office Online), however modifications are propagated in the server with a delay, see the “Office online limitations” section.
    {{/callout}}

1. The document is updated on Nuxeo Platform side for all users, as well as its preview:    

    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Office Online Integration/office-online-preview-updated.png
      name: office-online-preview-updated.png
      addins#screenshot#up_to_date
    --}}
    ![office-online-preview-updated.png](nx_asset://811c7981-5178-4d9a-89f1-6355a7d2cd39 ?w=650)

<!-- TODO
### Office Online Documents Versions Increment
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Office Online Integration/office-online-tracked-version.png
    name: office-online-tracked-version.png
    addins#screenshot#up_to_date
--}}
![office-online-tracked-version.png](nx_asset://a4572e58-6fa2-4a5e-9cd6-235250303a31 ?w=650)

### Co-Authoring
-->

## Requirements

### WOPI Domain Allow List

Office Online only makes requests to trusted partner domains, so the domain of your Nuxeo server needs to be added to the [WOPI domain allow list](https://wopi.readthedocs.io/en/latest/build_test_ship/settings.html#allow-list).

Nuxeo has currently registered `*.nuxeocloud.com` as an allowed domain.

### HTTPS

As stated [here](https://wopi.readthedocs.io/en/latest/build_test_ship/environments.html#production-environment), the WOPI host, here the Nuxeo server, must use HTTPS.

## Configuration

### JWT Authentication

The Office Online integration relies on the JWT authentication. You need to enable it by setting the `nuxeo.jwt.secret` parameter in your `nuxeo.conf`. See [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}}) for more information.

### Office Online Discovery

To allow the integration between Nuxeo and Office Online, Nuxeo needs to discover the Office Online client. To do that, you need to set the `nuxeo.wopi.discoveryURL` parameter in your `nuxeo.conf` to the Office Online Production discovery URL `https://onenote.officeapps.live.com/hosting/discovery`. See [WOPI discovery URLs](https://wopi.readthedocs.io/en/latest/build_test_ship/environments.html#discovery-urls) for more information.

If you target a WOPI client other than Office Online, just set its discovery URL instead of the Office Online one.

### Base URL for Office Online Calls

By default, Office Online will call your Nuxeo server based on the default base URL of your Nuxeo server. You can change it by setting the `nuxeo.wopi.baseURL` parameter in your `nuxeo.conf`.

For instance, if your Nuxeo server public domain is `bar.com` which is not in the WOPI domain allow list, but you also have another technical domain pointing to your Nuxeo server `tech.com` which is in the WOPI domain allow list, you can tell Office Online to use that one for its calls by setting the `nuxeo.wopi.baseURL` parameter to the allowed domain:

```
nuxeo.wopi.baseURL=https://tech.com/nuxeo
```

### Office Online Related Limitations

Editions and co-authoring have inherent auto-save frequencies and priorities.
The rules are detailed between Word, Excel and PowerPoint:

| Application | Auto-save frequency | PutFile access token |

<table>
<tr>
  <th>Application</th>
  <th>Auto-save frequency</th>
  <th>PutFile access token used</th>
  <th>Permissions check frequency</th>
</tr>
<tr>
  <td>Word</td>
  <td>Every 30 seconds if the document is updated.</td>
  <td>The access token of the user who made the most recent change to the document.</td>
  <td>At least every 5 minutes.</td>
</tr>
<tr>
  <td>Excel</td>
  <td>Every 2 minutes.</td>
  <td>The access token of the user who joined the editing session most recently.</td>
  <td>At least every 15 minutes.</td>
</tr>
<tr>
  <td>PowerPoint</td>
  <td>Every 60 seconds if the document is updated.</td>
  <td>The access token of the user who made the most recent change to the document.</td>
  <td>At least every 5 minutes.</td>
</tr>
</table>

Please refer to the [WOPI documentation](https://wopi.readthedocs.io/en/latest/scenarios/coauth.html) for more information.
