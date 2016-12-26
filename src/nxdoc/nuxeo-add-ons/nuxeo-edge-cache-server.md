---
title: Nuxeo Edge Cache
review:
    comment: ''
    date: '2016-12-26'
    status: ok
labels:
    - lts2016-ok
    - edge-cache
toc: true
---

Edge Cache allows you to cache binaries from your Nuxeo server closer to your clients. It can act like a Content Delivery Network, to improve the speed of your downloads.

It is composed by one marketplace package, and agents with installer for Windows, Macintosh or Docker image.

## Setup

- **Install the marketplace** package nuxeo-edge-cache
- **Install an agent** from the DMG / MSI or Docker image
- **Connect the agent** using either the UI on mac or windows or the command line for Docker

### Command line

The table below shows the available parameters

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Command</th>
<th colspan="1">Parameters</th>
<th colspan="1">Default Value</th>
<th colspan="1">Description</th>
</tr>
<tr>
<td colspan="1"><b>default</b></td>
<td colspan="1"></td>
<td colspan="1"></td>
<td colspan="1">GUI mode</td>
</tr>
<tr>
<td colspan="1"><b>console</b></td>
<td colspan="1"></td>
<td colspan="1"></td>
<td colspan="1">Console mode</td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">--port</td>
<td colspan="1"></td>
<td colspan="1">Port to bind</td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">--ssl</td>
<td colspan="1"></td>
<td colspan="1">Activate SSL encryption on listening socket</td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">--ssl-key</td>
<td colspan="1"></td>
<td colspan="1">SSL Key to use</td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">--ssl-certificate</td>
<td colspan="1"></td>
<td colspan="1">SSL Certificate to use</td>
</tr>
<tr>
<td colspan="1"><b>bind</b></td>
<td colspan="1"></td>
<td colspan="1"></td>
<td colspan="1"></td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">--ttl</td>
<td colspan="1">30</td>
<td colspan="1">Time to live for Edge Cache</td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">--folder</td>
<td colspan="1">/var/lib/nuxeo/edge/</td>
<td colspan="1">Folder to use for cache storage</td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">--size-limit</td>
<td colspan="1">0</td>
<td colspan="1">Size limit in Gb for this binding, 0 means unlimited</td>
</tr><tr>
<td colspan="1"></td>
<td colspan="1">--ips</td>
<td colspan="1"></td>
<td colspan="1">IPs to redirect to this Edge Cache Server</td>
</tr><tr>
<td colspan="1"></td>
<td colspan="1">--server-url</td>
<td colspan="1"></td>
<td colspan="1">Nuxeo Server to connect to</td>
</tr><tr>
<td colspan="1"></td>
<td colspan="1">--username</td>
<td colspan="1"></td>
<td colspan="1">Nuxeo Admin user</td>
</tr><tr>
<td colspan="1"></td>
<td colspan="1">--password</td>
<td colspan="1"></td>
<td colspan="1">Nuxeo Admin password</td>
</tr><tr>
<td colspan="1"></td>
<td colspan="1">--edge-host</td>
<td colspan="1"></td>
<td colspan="1">Hostname or IP to this server</td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">name</td>
<td colspan="1"></td>
<td colspan="1">Name of the connection</td>
</tr>
<tr>
<td colspan="1"><b>unbind</b></td>
<td colspan="1"></td>
<td colspan="1"></td>
<td colspan="1">Unbind a Nuxeo Server from the Edge Cache</td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">name</td>
<td colspan="1"></td>
<td colspan="1">Name of the server to unbind</td>
</tr>
<tr>
<td colspan="1"><b>list</b></td>
<td colspan="1"></td>
<td colspan="1"></td>
<td colspan="1">List all the defined bindings</td>
</tr>
</tbody></table></div>

### TTL

The Time-To-Live is defined per Nuxeo server connection. It defined after how many seconds the Edge Cache will be considered as offline.

The Edge Cache server will initiate a ping on the Nuxeo Server every TTL - 2 seconds. The TTL cannot be inferior to 2 seconds for this reason.

Your Nuxeo Server will redirect to your Edge Cache if the last ping from Edge Cache server was received before the TTL expires. If not then it will send the binary itself and will not redirect to the Edge Cache for download, as it is consider dead.

### IPs

When you connect to your Nuxeo Server for download it will check the source IP that does the request if the source IP belongs to a defined Nuxeo Edge Cache and this cache is alive then it will redirect to it.

You can define the IP sources with the CIDR format :

- 13.12.0.0/24 will map all the network
- 13.12.0.13 will map just one ip
- 13.12.0.0/24;13.12.1.0/24 will map those 2 networks

In the example, if 3 Edge Cache are defined on the same source, the closest definition will be evaluated first. If my source IP is 13.12.0.13 then the second proxy will be used first if it is alive, then would fallback to the second, etc

## How it works

### Improve transfer time

![download-workflow]({{file page='nuxeo-edge-cache' name='nuxeo-edge-cache-1.jpeg'}})

A great addition to cloud deployments or for customers with multiple remote sites, Nuxeo Edge Cache removes the need to download the same file again and again at a given site when several users want to access the same content.

### Download workflow

![download-workflow]({{file page='nuxeo-edge-cache' name='nuxeo-edge-cache-2.jpeg'}})

Steps:

- User requests a binary from the Nuxeo server
- The Nuxeo server verifies if an Edge Cache is registered on this IP
- The Nuxeo server redirects to the Edge Cache registered with this IP
- Edge Cache receives the redirect request with the token
- Edge Cache extracts the encryption key from the token
- If Edge Cache has the binary stored and decrypted with the key, it is sent to the user else Edge Cache downloads the encrypted binary from the Nuxeo server and stores it while decrypting and sending it to the user