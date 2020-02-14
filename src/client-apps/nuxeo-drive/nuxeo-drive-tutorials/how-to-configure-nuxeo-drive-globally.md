---
title: 'HOWTO: Configure Nuxeo Drive Globally'
review:
    comment: ''
    date: '2019-03-15'
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
    - mschoentgen
    - lklein
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
  "channel": "centralized",
  "delay": 30,
  "ignored_prefixes": [".", "icon\r", "thumbs.db", "desktop.ini", "~$"],
  "ignored_suffixes": [".bak", ".crdownload", ".lock", ".nxpart", ".part", ".partial", ".swp", ".tmp", "~", ".dwl", ".dwl2"],
  "ignored_files": ["^atmp\\d+$"],
  "log_level_file": "DEBUG",
  "ui": "web",
  "update_check_delay": 3600
}
```

All available parameters and their description are listed on that page: [Configuration Parameters]({{page page='nuxeo-drive-installation-configuration'}}#configuration-parameters).

* * *

<div class="row" data-equalizer data-equalize-on="medium">

<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Nuxeo Drive developer documentation]({{page page='nuxeo-drive'}})
- [Nuxeo Drive Installation / Configuration]({{page page='nuxeo-drive-installation-configuration'}})
- [Nuxeo Drive FAQ]({{page version='' space='nxdoc' page='nuxeo-drive-faq'}})

{{/panel}}
</div>

</div>
