---
title: Nuxeo Edge Cache
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - edge-cache
    - rcattiau
    - lts2017-ok
    - deprecated
toc: true
hidden: true
tree_item_index: 1650

---
{{{multiexcerpt 'DeprecatedAddon_10.10' page='generic-multi-excerpts'}}}

{{! excerpt}}
[Nuxeo Edge Cache](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-edge-cache) allows you to cache binaries from your Nuxeo server on an Edge Cache server closer to your clients. It can act like a Content Delivery Network, to improve the speed of your downloads.
{{! /excerpt}}

Nuxeo Edge Cache is composed by one Nuxeo addon to be installed on the Nuxeo server, and agents to be installed on a computer that will serve as the Edge Cache server. These agents are available with installers for Windows and OS X, or as a Docker image.

## Installation and Configuration

### Nuxeo Addon Installation

First install the Nuxeo Edge Cache addon, available from the Nuxeo Marketplace.

{{multiexcerpt name='MP-installation-easy' page='generic-multi-excerpts'}}

Nuxeo Edge Cache does not require any configuration on the Nuxeo server after its installation.

### Agent Installation and Configuration

1. Download and install the relevant agent for your system. They are available from the [Marketplace Edge Cache page](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-edge-cache).
2. Launch the Edge Cache agent and set it up.
    - Windows: follow the instructions displayed.
    - Linux: Use the command line (see the [Command Line section below](#command-line)) to set up the Docker image.

**Supported OS**

- Debian 8.0 Jessie
- Ubuntu Xenial Xerus 16.04
- Windows Server 2016

#### Command Line {{> anchor 'command-line'}}

The table below shows the available parameters.

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
<td colspan="1">`default`</td>
<td colspan="1"></td>
<td colspan="1"></td>
<td colspan="1">GUI mode</td>
</tr>
<tr>
<td colspan="1">`console`</td>
<td colspan="1"></td>
<td colspan="1"></td>
<td colspan="1">Console mode</td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">`--port`</td>
<td colspan="1"></td>
<td colspan="1">The port to bind</td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">`--ssl`</td>
<td colspan="1"></td>
<td colspan="1">Activates SSL encryption on listening socket</td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">`--ssl-key`</td>
<td colspan="1"></td>
<td colspan="1">The SSL Key to use</td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">`--ssl-certificate`</td>
<td colspan="1"></td>
<td colspan="1">The SSL Certificate to use</td>
</tr>
<tr>
<td colspan="1">`bind`</td>
<td colspan="1"></td>
<td colspan="1"></td>
<td colspan="1"></td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">`--ttl`</td>
<td colspan="1">30</td>
<td colspan="1">The Time-To-Live for the Edge Cache server.<br/>
See the [TTL section below](#ttl)</td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">`--folder`</td>
<td colspan="1">`/var/lib/nuxeo/edge/`</td>
<td colspan="1">The folder to use for cache storage</td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">`--size-limit`</td>
<td colspan="1">0</td>
<td colspan="1">The size limit in Gb for this binding. 0 means unlimited.</td>
</tr><tr>
<td colspan="1"></td>
<td colspan="1">`--ips`</td>
<td colspan="1"></td>
<td colspan="1">The IPs to redirect to this Edge Cache Server.<br/>
See the [IPs section below](#ips).</td>
</tr><tr>
<td colspan="1"></td>
<td colspan="1">`--server-url`</td>
<td colspan="1"></td>
<td colspan="1">The Nuxeo server to connect to</td>
</tr><tr>
<td colspan="1"></td>
<td colspan="1">`--username`</td>
<td colspan="1"></td>
<td colspan="1">The Nuxeo administrator user</td>
</tr><tr>
<td colspan="1"></td>
<td colspan="1">`--password`</td>
<td colspan="1"></td>
<td colspan="1">The Nuxeo administrator password</td>
</tr><tr>
<td colspan="1"></td>
<td colspan="1">`--edge-host`</td>
<td colspan="1"></td>
<td colspan="1">The hostname or IP to this Edge Cache server</td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">`name`</td>
<td colspan="1"></td>
<td colspan="1">The name of the connection</td>
</tr>
<tr>
<td colspan="1">`unbind`</td>
<td colspan="1"></td>
<td colspan="1"></td>
<td colspan="1">Unbinds a Nuxeo server from the Edge Cache server</td>
</tr>
<tr>
<td colspan="1"></td>
<td colspan="1">`name`</td>
<td colspan="1"></td>
<td colspan="1">The name of the Nuxeo server connection to unbind</td>
</tr>
<tr>
<td colspan="1">`list`</td>
<td colspan="1"></td>
<td colspan="1"></td>
<td colspan="1">Lists all the defined bindings</td>
</tr>
</tbody></table></div>


#### IPs {{> anchor 'ips'}}

When you connect to your Nuxeo server for download it will check the source IP that does the request. If the source IP belongs to a defined Nuxeo Edge Cache and this cache is alive, then it will redirect to it.

You can define the IP sources with the CIDR format:

- `13.12.0.0/24` will map all the network
- `13.12.0.13` will map just one IP
- `13.12.0.0/24;13.12.1.0/24` will map those two networks

In the example, if three Edge Cache servers are defined on the same source, the closest definition will be evaluated first. If the source IP is `13.12.0.13` then the second proxy will be used first if it is alive, then will fallback to the second, etc.

#### Time-To-Live (TTL) {{> anchor 'ttl'}}

The Time-To-Live is defined per Nuxeo server connection. It defines after how many seconds the Edge Cache server will be considered as offline.

The Edge Cache server will initiate a ping on the Nuxeo server every TTL - 2 seconds. For this reason the TTL cannot be inferior to 2 seconds.

Your Nuxeo server will redirect to your Edge Cache if the last ping from the Edge Cache server was received before the TTL expires. If not then it will send the binary itself and will not redirect to the Edge Cache for download, as it is considered dead.

## How It Works

### Improve Transfer Time

A great addition to cloud deployments or for customers with multiple remote sites, Nuxeo Edge Cache removes the need to download the same file again and again at a given site when several users want to access the same content.

![download-workflow]({{file page='nuxeo-edge-cache' name='nuxeo-edge-cache-1.jpeg'}} ?w=500,border=true)

### Download Workflow

1. The user requests a binary from the Nuxeo server.
2. The Nuxeo server verifies if an Edge Cache server is registered on this IP.
3. The Nuxeo server redirects to the Edge Cache server registered with this IP.
4. The Edge Cache server receives the redirect request with the token.
5. The Edge Cache server extracts the encryption key from the token.
6. If the Edge Cache server has the binary stored and decrypted with the key, it is sent to the user. Else Edge Cache downloads the encrypted binary from the Nuxeo server and stores it while decrypting and sending it to the user.

![download-workflow]({{file page='nuxeo-edge-cache' name='nuxeo-edge-cache-2.jpeg'}} ?w=500,border=true)
