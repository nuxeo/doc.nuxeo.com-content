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