---
title: How to Configure Nuxeo Drive Globally
review:
    comment: ''
    date: '2017-11-23'
    status: ok
details:
    howto:
        excerpt: This how-to explains how to configure Nuxeo Drive globally from the Nuxeo server.
        level: Intermediate
        topics: 'Nuxeo Drive'
labels:
    - lts2017-ok
    - howto
    - nuxeo-drive
    - nuxeo-drive-component
toc: true
tree_item_index: 500

---

Some settings used by Nuxeo Drive can be configured globally from the Nuxeo server.

They are set in a JSON configuration file located in the `drive` template of the [nuxeo-drive](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-drive) package.
They can be changed by updating the `$NUXEO_SERVER/templates/drive/nxserver/config/nuxeo-drive-config.json` file and restarting the server, after which they will be taken into account by the Nuxeo Drive clients shortly.

The configuration is available in the JSON format through a `GET` request to the REST API endpoint `$NUXEO_URL/api/v1/drive/configuration`.

Note that these settings can be overridden locally through the `config.ini` file.

Here is what the default `nuxeo-drive-config.json` file looks like:

```json
{
  "delay": 30,
  "ignored_prefixes": [".", "icon\r", "thumbs.db", "desktop.ini", "~$"],
  "ignored_suffixes": [".bak", ".crdownload", ".lock", ".nxpart", ".part", ".partial", ".swp", ".tmp", "~", ".dwl", ".dwl2"],
  "ignored_files": ["^atmp\\d+$"],
  "log_level_file": "DEBUG",
  "timeout": 30,
  "handshake_timeout": 60,
  "beta_channel": false,
  "update_check_delay": 3600,
  "ui": "web"
}
```

- `delay`: Period in seconds for polling the remote changes.
- `ignored_prefixes`: List of file prefixes to be ignored by the synchronization process.
- `ignored_suffixes`: List of file suffixes to be ignored by the synchronization process.
- `ignored_files`: List of Python regular expressions matching the file names to be ignored by the synchronization process.
- `log_level_file`: Logging level of the log file among `ERROR`, `WARNING`, `INFO`, `DEBUG`, `TRACE`.
- `timeout`: Timeout in seconds for the HTTP requests sent to the Nuxeo server.
- `handshake_timeout`: Timeout in seconds for the handshaking with the Nuxeo server.
- `beta_channel`: Boolean to allow the use of the update beta channel.
- `update_check_delay`: Period in seconds for polling application updates.
- `ui`: The Nuxeo UI used by default among `web` (Web UI) and `jsf` (JSF UI).

* * *

<div class="row" data-equalizer data-equalize-on="medium">

<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Nuxeo Drive developer documentation]({{page page='nuxeo-drive'}})
- [Nuxeo Drive FAQ]({{page version='' space='nxdoc' page='nuxeo-drive-faq'}})

{{/panel}}
</div>

</div>
