---
title: Nuxeo Drive 1.x Admin Documentation
review:
    comment: ''
    date: ''
    status: ok
labels:
    - nuxeo-drive
    - last-review-20150609
toc: true
confluence:
    ajs-parent-page-id: '22380815'
    ajs-parent-page-title: Nuxeo Drive
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Nuxeo+Drive+1.x+Admin+Documentation
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/Nuxeo+Drive+1.x+Admin+Documentation
    page_id: '25690400'
    shortlink: IAGIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/IAGIAQ'
    source_link: /display/NXDOC60/Nuxeo+Drive+1.x+Admin+Documentation
history:
    - 
        author: Manon Lumeau
        date: '2016-03-21 16:59'
        message: ''
        version: '6'
    - 
        author: Manon Lumeau
        date: '2016-03-21 16:14'
        message: ''
        version: '5'
    - 
        author: Manon Lumeau
        date: '2016-03-21 16:13'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2015-10-13 10:03'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2015-06-09 08:40'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2015-06-09 08:37'
        message: ''
        version: '1'

---
{{! multiexcerpt name='drive_1.x_admin_doc_content'}}

Usually Nuxeo Drive is automatically initialized at first startup. This includes:

*   The creation of the configuration folder: `<user_home>/.nuxeo-drive`
*   The creation of the local folder: `<user_home>/.Nuxeo Drive`
*   The initialization of the SQLite database: `<user_home>/.nuxeo-drive/nxdrive.db`

However, you might want to do this initialization manually, for example to preset the Nuxeo server URL and proxy configuration before launching Nuxeo Drive for the first time. This can be useful for the deployment of Nuxeo Drive on a large set of desktops, allowing end users to work on a preconfigured instance, only needing to provide their credentials at first startup.

Note that this process can be scripted for an automated deployment.

## Prerequisite

If an existing instance of Nuxeo Drive is installed first make sure you reset it before running manual initialization:

1.  Quit Nuxeo Drive.
2.  Remove the `.nuxeo-drive` directory:

    {{#> panel type='code' heading='OS X / Linux'}}

    ```bash
    rm -rf ~/.nuxeo-drive
    ```

    {{/panel}}{{#> panel type='code' heading='Windows'}}

    ```bash
    rmdir /S /Q "C:\users\<username>\.nuxeo-drive"
    ```

    {{/panel}}
3.  Remove the `Nuxeo Drive` directory:

    {{#> panel type='code' heading='OS X / Linux'}}

    ```bash
    rm -rf ~/Nuxeo\ Drive/
    ```

    {{/panel}}{{#> panel type='code' heading='Windows'}}

    ```bash
    rmdir /S /Q "C:\users\<username>\documents\Nuxeo Drive"
    ```

    {{/panel}}

## Configuration Folder

{{#> panel type='code' heading='OS X / Linux'}}

```bash
mkdir ~/.nuxeo-drive
touch ~/.nuxeo-drive/nxdrive.db
```

{{/panel}}{{#> panel type='code' heading='Windows'}}

```bash
mkdir "C:\users\<username>\.nuxeo-drive"
```

{{/panel}}

## Device Id Generation

The `device_config` table of the SQLite database needs a unique id as a primary key of its single row (`device_id` column). You first need to generate this id, for example with Python:

```py
$ python
    Python 2.7.3 (default, Sep 26 2013, 20:03:06)
    [GCC 4.6.3] on linux2
    Type "help", "copyright", "credits" or "license" for more information.
    >>> import uuid
    >>> uuid.uuid1().hex
    '1bd6686882c111e391a6c8f733c9742b'
    >>> exit()
```

## SQLite Database Initialization

1.  Connect to the empty SQLite database.

    **OS X / Linux**

    ```bash
    sqlite3 ~/.nuxeo-drive/nxdrive.db
    ```

    **Windows**

    1.  Install and open [SqliteBrowser](http://sqlitebrowser.org/).
    2.  Click on **New Database** and save it under `C:\users\<username>\.nuxeo-drive\nxdrive.db`.
    3.  Click Cancel in the **Edit table definition** window.
2.  Create the `device_config` and `server_bindings` tables.

    **OS X / Linux**

    Execute the following queries in the Terminal.

    ```sql
            CREATE TABLE device_config (
                device_id VARCHAR NOT NULL,
                client_version VARCHAR,
                proxy_config VARCHAR,
                proxy_type VARCHAR,
                proxy_server VARCHAR,
                proxy_port VARCHAR,
                proxy_authenticated BOOLEAN,
                proxy_username VARCHAR,
                proxy_password BLOB,
                proxy_exceptions VARCHAR,
                auto_update BOOLEAN,
                PRIMARY KEY (device_id),
                CHECK (proxy_authenticated IN (0, 1))
            );
            CREATE TABLE server_bindings (
                local_folder VARCHAR NOT NULL,
                server_url VARCHAR,
                remote_user VARCHAR,
                remote_password VARCHAR,
                remote_token VARCHAR,
                server_version VARCHAR,
                update_url VARCHAR,
                last_sync_date INTEGER,
                last_event_log_id INTEGER,
                last_filter_date INTEGER,
                last_ended_sync_date INTEGER,
                last_root_definitions VARCHAR,
                PRIMARY KEY (local_folder)
            );
    ```

    **Windows**

    1.  Click on the **Execute SQL** tab.
    2.  Copy paste the previous queries and click on **Execute SQL** (blue arrow).
    3.  Click on **Database Structure** and check the `device_config` and `server_bindings` tables have been created.
3.  Insert the single row in `device_config`.

    Use the previously generated id for the `device_id` column, and set your proxy settings as in the examples below.

    **Manual proxy configuration**

    ```sql
    INSERT INTO device_config (device_id, proxy_config, proxy_type, 
    proxy_server, proxy_port, proxy_authenticated, auto_update) VALUES 
    ('1bd6686882c111e391a6c8f733c9742b', 'Manual', 'http', '10.218.9.82', 
    '80', 0, 0);
    ```

    **System proxy configuration**

    ```sql
    INSERT INTO device_config (device_id, proxy_config, proxy_authenticated, auto_update) VALUES 
    ('1bd6686882c111e391a6c8f733c9742b', 'System', 0, 0);
    ```

    **No proxy configuration**

    ```sql
    INSERT INTO device_config (device_id, proxy_config, proxy_authenticated, auto_update) VALUES
    ('1bd6686882c111e391a6c8f733c9742b', 'None', 0, 0);
    ```

4.  Insert a row in `server_bindings` .
    Use your local folder path, the Nuxeo server URL, the Nuxeo server version and the [Nuxeo Drive update site]({{page page='nuxeo-drive-update-site'}}) URL as in the example below.

    {{#> panel type='code' heading='OS X / Linux'}}

    ```sql
    INSERT INTO server_bindings (local_folder, server_url, server_version, update_url) VALUES ('/home/<username>/Nuxeo Drive', '<protocol>://<host>:<port>/nuxeo/', '6.0', 'http://community.nuxeo.com/static/drive/');
    ```

    {{/panel}}{{#> panel type='code' heading='Windows'}}

    ```sql
    INSERT INTO server_bindings (local_folder, server_url, server_version, update_url) VALUES ('C:\users\<username>\documents\Nuxeo Drive', '<protocol>://<host>:<port>/nuxeo/', '6.0', 'http://community.nuxeo.com/static/drive/');
    ```

    {{/panel}}
5.  Quit SQLite.

    **OS X / Linux**

    ```bash
    .exit
    ```

    **Windows**

    Click on **Write Changes** and close SqliteBrowser.

## Start Nuxeo Drive

The Settings popup should appear waiting for the user's credentials only.

{{! /multiexcerpt}}

&nbsp;

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other documentation about Nuxeo Drive'}}

*   [Nuxeo Drive Update Site]({{page page='nuxeo-drive-update-site'}})

*   [Nuxeo Drive developer documentation]({{page page='nuxeo-drive'}})
*   [Nuxeo Drive user documentation]({{page space='userdoc60' page='nuxeo-drive'}})

{{/panel}}</div><div class="column medium-6"></div></div>