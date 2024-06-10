---
title: Allowed Hosts Configuration
description: Allows filtering host headers with a whitelist.
tree_item_index: 800
---
Nuxeo allows you to filter HTTP requests by their standard `host`, `x-forwarded-host` and specific [`nuxeo-virtual-host`]({{page space='nxdoc' page='configuration-parameters-index-nuxeoconf#nuxeovirtualhost'}}) headers values against a whitelist. Unknown values will lead the HTTP request to be rejected with an `SC_BAD_REQUEST` status code.

## Expected behavior:

{{#> callout type='info' heading='Multiple headers filtering'}}
All _present_ headers are always filtered. A mix of allowed and forbidden hosts in the different headers will be rejected.
Which means, you don't need to fill all headers, only the filled ones must _all_ be valid.
{{/callout}}

<div class="table-scroll">
  <table class="hover">
    <thead>
      <tr>
        <th colspan="1">host</th>
        <th colspan="1">x-forwarded-host</th>
        <th colspan="1">nuxeo-virtual-host</th>
        <th colspan="1">result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>OK</td>
        <td>OK</td>
        <td>null</td>
        <td>OK</td>
      </tr>
      <tr>
        <td>OK</td>
        <td>KO</td>
        <td>null</td>
        <td>KO</td>
      </tr>
      <tr>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
        <td>OK</td>
      </tr>
      <tr>
        <td>OK</td>
        <td>OK</td>
        <td>KO</td>
        <td>KO</td>
      </tr>
    </tbody>
  </table>
</div>

## Sample configuration:

To setup the whitelist, override the `nuxeo.allowed.hosts` configuration property:

```properties
# this will always be included, even if not in the allowed list
nuxeo.url=http://localhost:8080/nuxeo
...
# default, allows everything
nuxeo.allowed.hotst=
# allows localhost only
nuxeo.allowed.hotst=localhost
# only allows localhost, myhost.org and also.myhost.org
nuxeo.allowed.hotst=myhost.org,also.myhost.org
```

