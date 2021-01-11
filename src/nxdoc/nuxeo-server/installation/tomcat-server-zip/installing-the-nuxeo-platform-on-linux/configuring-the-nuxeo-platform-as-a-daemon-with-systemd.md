---
title: Configuring the Nuxeo Platform as a Daemon with Systemd
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - content-review-lts2016
    - install-linux
    - mguillaume
    - lts2017-ok
confluence:
    ajs-parent-page-id: '9274334'
    ajs-parent-page-title: Installing the Nuxeo Platform on Linux
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Configuring+the+Nuxeo+Platform+as+a+Daemon+with+Systemd
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Configuring+the+Nuxeo+Platform+as+a+Daemon+with+Systemd'
    page_id: '26313077'
    shortlink: dYGRAQ
    shortlink_source: 'https://doc.nuxeo.com/x/dYGRAQ'
    source_link: /display/NXDOC/Configuring+the+Nuxeo+Platform+as+a+Daemon+with+Systemd
tree_item_index: 200
version_override:
    LTS 2015: 710/admindoc/configuring-the-nuxeo-platform-as-a-daemon-with-systemd
    '6.0': 60/admindoc/configuring-the-nuxeo-platform-as-a-daemon-with-systemd
    '5.8': 58/admindoc/configuring-the-nuxeo-platform-as-a-daemon-with-systemd
history:
    -
        author: Mathieu Guillaume
        date: '2016-02-09 14:21'
        message: ''
        version: '6'
    -
        author: Mathieu Guillaume
        date: '2015-12-08 11:00'
        message: Added NUXEO_CONF variable
        version: '5'
    -
        author: Julien Carsique
        date: '2015-09-21 14:00'
        message: Avoid stop/restart during manual restart
        version: '4'
    -
        author: Julien Carsique
        date: '2015-07-15 12:55'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2015-07-15 12:52'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2015-07-15 12:47'
        message: ''
        version: '1'

---
Here is a systemd script which starts Nuxeo as a daemon or like any other service after Elasticsearch and PostgreSQL.

{{#> panel type='code' heading='/etc/systemd/system/nuxeo.service'}}

```
[Unit]
Description=Starts and stops a single Nuxeo instance
After=syslog.target network.target postgresql.service elasticsearch.service

[Service]
Type=forking
User=nuxeo
Group=nuxeo
ExecStart=/opt/nuxeo/bin/nuxeoctl --quiet startbg
ExecReload=/opt/nuxeo/bin/nuxeoctl --quiet restartbg
ExecStop=/opt/nuxeo/bin/nuxeoctl --quiet stop
Restart=on-abnormal
RestartSec=15
# See MAX_OPEN_FILES in sysconfig
LimitNOFILE=65535
TimeoutStopSec=60
Environment=NUXEO_CONF=/etc/nuxeo/nuxeo.conf

[Install]
WantedBy=multi-user.target

```

{{/panel}}

1.  Copy the&nbsp;systemd script to `/etc/systemd/system/nuxeo.service`, replacing paths to match your installation.
2.  Enable the autostart creating the links in the rcX.d directories running the command (as root):

    ```
    $ systemctl daemon-reload
    $ systemctl enable nuxeo

    ```

3.  Restart the machine and verify that the Nuxeo Platform is started automatically looking at the log file.

If you want to remove the automatic startup use the command (as root):

```
$ systemctl disable nuxeo

```

You can manage the service with the following command:

```
systemctl [start|stop|reload] nuxeo

```

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other Linux-Related Documentation'}}

*   [Installing the Nuxeo Platform on Linux]({{page space='admindoc' page='installing-the-nuxeo-platform-on-linux'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
