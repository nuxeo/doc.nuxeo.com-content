---
title: Nuxeo Drive 1.x Dev Documentation
labels:
    - nuxeo-drive
    - last-review-20150609
toc: true
confluence:
    ajs-parent-page-id: '22380815'
    ajs-parent-page-title: Nuxeo Drive
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Nuxeo+Drive+1.x+Dev+Documentation
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Nuxeo+Drive+1.x+Dev+Documentation'
    page_id: '25690410'
    shortlink: KgGIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/KgGIAQ'
    source_link: /display/NXDOC60/Nuxeo+Drive+1.x+Dev+Documentation
history:
    - 
        author: Manon Lumeau
        date: '2016-03-21 17:01'
        message: ''
        version: '5'
    - 
        author: Manon Lumeau
        date: '2016-03-21 16:14'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2015-10-12 14:51'
        message: ''
        version: '3'
    - 
        author: Manon Lumeau
        date: '2015-06-09 09:51'
        message: ''
        version: '2'
    - 
        author: Manon Lumeau
        date: '2015-06-09 08:45'
        message: ''
        version: '1'

---
{{! multiexcerpt name='drive_1x'}}

Nuxeo Drive is a desktop client that enables bidirectional synchronization between the local desktop and a Nuxeo content repository.

{{! excerpt}}

This page aims to describe the main technical concepts used in Nuxeo Drive, on both the client and server side.

{{! /excerpt}}

Please make sure you have read the [Nuxeo Drive User Documentation]({{page space='userdoc60' page='nuxeo-drive'}}) before reading this page. If you are interested in building and developing on Nuxeo Drive, please take a look at the [contributor guide](https://github.com/nuxeo/nuxeo-drive/blob/master/DEVELOPERS.rst).

{{#> callout type='info' }}

Note that this description of the technical details and internals of Nuxeo Drive should not be viewed as a commitment that they are a stable and definitive API. The details of the APIs, Operations, and the local storage in particular, are subject to change in order to improve the user experience.

{{/callout}}

## <span style="color: rgb(0,0,0);">Client</span>

The Nuxeo Drive client is a full Python application. It is distributed as a complete package embedding all required software and libraries to run under Windows 32 and 64 bits (.msi) and Mac OS (.dmg). This includes Python itself and a set of Python third party libraries listed in the [requirements.txt](https://github.com/nuxeo/nuxeo-drive/blob/master/requirements.txt) file.

You can fetch the latest release of the Nuxeo Drive client for [Windows](http://community.nuxeo.com/static/drive/latest/7.1/nuxeo-drive.msi) and [Mac OS](http://community.nuxeo.com/static/drive/latest/7.1/nuxeo-drive.dmg) (also available from your Nuxeo Platform **Home** > **Nuxeo Drive** tab).

### Local Storage

Drive local storage relies on [SQLAlchemy](http://www.sqlalchemy.org/), the Python SQL toolkit and Object Relational Mapper. The database file `nxdrive.db` is located in the `.nuxeo-drive` folder located in the user home directory.

The data model is described below.

*   `device_config`: Single row table holding the local device configuration.

    *   `device_id` (primary key): Universal unique identifier of the local device.
    *   `client_version`: Nuxeo Drive version, read from `nxdrive/__init__.py` and accessible through the `ndrive -v` command. It is displayed in the About tab of the Settings windows.
    *   `proxy_config`: Proxy configuration, possible values are: 'System', 'None', 'Manual'.
    *   `proxy_type`: Proxy protocol, possible values are: 'http', 'https'.
    *   `proxy_server`: Proxy server URL.
    *   `proxy_port`: Proxy port.
    *   `proxy_authenticated`: Flag to indicate if the proxy server requires authentication.
    *   `proxy_username`: User name for proxy authentication if required.
    *   `proxy_password`: Password for proxy authentication if required.
    *   `proxy_exceptions`: Comma-separated list of proxy exceptions.
    *   `auto_update`: Flag to indicate if Nuxeo Drive should update automatically when a new version is available on the update site.
*   `server_bindings`: Table holding the server bindings, i.e. the configuration of the connections between Nuxeo Drive and the synchronized Nuxeo servers (can be several).

    *   `local_folder` (primary key): Absolute path of the desktop folder where the synchronized content is stored. By default it is called `Nuxeo Drive` and is located in the user home directory on Mac OS and Linux, in `My Documents` on Windows.
    *   `server_url`: URL of the Nuxeo server, matching the following pattern: `(http|https)://<host>[:<port>]/nuxeo` .
    *   `remote_user`: User name for authentication against the Nuxeo server.
    *   `remote_password`: Password for authentication against the Nuxeo server. Optional. See the [Username / password based authentication](#username-password-based) section.
    *   `remote_token`: Token for authentication against the Nuxeo server. Optional. See the [Token based authentication](#token-based) section.
    *   `server_version`: Version of the Nuxeo server, returned by the `NuxeoDrive.GetClientUpdateInfo` operation.
    *   `update_url`: URL of the update site, returned by the `NuxeoDrive.GetClientUpdateInfo` operation. Default value is [http://community.nuxeo.com/static/drive/](http://community.nuxeo.com/static/drive/).
    *   `last_sync_date`: Date of the last remote polling as a timestamp in milliseconds.
    *   `last_event_log_id`: Id of the last audit event log entry, used as the upper bound of the range clause in the change summary query.
    *   `last_filter_date`: Last time a local filter was applied through the Folders tab as a timestamp in milliseconds.
    *   `last_ended_sync_date`: Last time a synchronization iteration was over as a timestamp in milliseconds. Displayed in the "Last synchronized" entry of the systray menu.
    *   `last_root_definitions`: Ids of the currently synchronized containers (usually called "synchronization roots").
*   `last_known_states`: Table holding the state of the synchronized files and folders as a set of pair states, each pair representing the local file or folder on one side and the remote document on the other side.

    *   `id` (primary key): Auto increment id.
    *   `local_folder`: Foreign key to `server_bindings.local_folder`.
    *   `last_local_updated`: Timestamp of the last local state update.
    *   `last_remote_updated`: Timestamp of the last remote state update.
    *   `local_digest`: Digest of the local file (empty for folders).
    *   `remote_digest`: Digest of the remote file (empty for folders).
    *   `local_path`: Path of the local file or folder, relative to the `local_folder`.
    *   `remote_ref`: Reference of the remote document, see XXX for more information.
    *   `local_parent_path`: Parent path of the local file or folder, relative to the `local_folder`.
    *   `remote_parent_ref`: Parent reference of the remote document.
    *   `remote_parent_path`: Parent path of the remote document, it is a concatenation of the ancestor references.
    *   `local_name`: Name of the local file or folder.
    *   `remote_name`: Name of the remote document. By default it is the value of [`dc:title`](http://dctitle) for a `Folderish` document and the filename for a `BlobHolder`.
    *   `folderish`: Integer representation of the `Folderish` facet of the remote document.
    *   `local_state`: State of the local file or folder. See [Pair states](#pair-states) for the list of possible states.
    *   `remote_state`: State of the remote document. See [Pair states](#pair-states) for the list of possible states.
    *   `pair_state`: Pair state. See [Pair states](#pair-states) for the list of possible pair states.
    *   `remote_can_rename`: Flag to indicate if the remote document can be renamed.
    *   `remote_can_delete`: Flag to indicate if the remote document can be deleted.
    *   `remote_can_update`: Flag to indicate if the remote document can be updated.
    *   `remote_can_create_child`: Flag to indicate if the remote document accepts child creation.
    *   `last_sync_date`: Last synchronization date of the given pair as a `datetime`.
    *   `error_count`: Number of times the pair synchronization was in error and the pair blacklisted.
    *   `last_sync_error_date`: Last synchronization error date. This is used to blacklist documents in error from synchronization for a certain time (5 minutes by default).

Nuxeo Drive embeds the [Alembic](https://alembic.readthedocs.org/en/latest/index.html) tool to handle migration of the data model in case it changes from one version to another, for more details see related [documentation](https://github.com/nuxeo/nuxeo-drive/blob/master/DEVELOPERS.rst#updating-the-data-model).

### {{> anchor 'pair-states'}}Pair States

Each record of `last_known_states` (called _pair_) holds the state of the local file or folder in `local_state` and the state of the remote document in `remote_state`.

The possible values for `local_state` and `remote_state` are:

*   `unknown`
*   `synchronized`
*   `created`
*   `modified`
*   `deleted`

The possible values for `pair_state` resulting of the different combinations of `local_state` and `remote_state` are summed up in this table.

<table><tbody><tr><th colspan="1">`local_state`</th><th colspan="1">`remote_state`</th><th colspan="1">`pair_state`</th></tr><tr><td colspan="3">**Regular cases**</td></tr><tr><td colspan="1">`unknown`</td><td colspan="1">`unknown`</td><td colspan="1">`unknown`</td></tr><tr><td colspan="1">`synchronized`</td><td colspan="1">`synchronized`</td><td colspan="1">`synchronized`</td></tr><tr><td colspan="1">`created`</td><td colspan="1">`unknown`</td><td colspan="1">`locally_created`</td></tr><tr><td colspan="1">`unknown`</td><td colspan="1">`created`</td><td colspan="1">`remotely_created`</td></tr><tr><td colspan="1">`modified`</td><td colspan="1">`synchronized`</td><td colspan="1">`locally_modified`</td></tr><tr><td colspan="1">`synchronized`</td><td colspan="1">`modified`</td><td colspan="1">`remotely_modified`</td></tr><tr><td colspan="1">`modified`</td><td colspan="1">`unknown`</td><td colspan="1">`locally_modified`</td></tr><tr><td colspan="1">`unknown`</td><td colspan="1">`modified`</td><td colspan="1">`remotely_modified`</td></tr><tr><td colspan="1">`deleted`</td><td colspan="1">`synchronized`</td><td colspan="1">`locally_deleted`</td></tr><tr><td colspan="1">`synchronized`</td><td colspan="1">`deleted`</td><td colspan="1">`remotely_deleted`</td></tr><tr><td colspan="1">`deleted`</td><td colspan="1">`deleted`</td><td colspan="1">`deleted`</td></tr><tr><td colspan="1">`synchronized`
</td><td colspan="1">`unknown`</td><td colspan="1">`synchronized`
</td></tr><tr><td colspan="3">**Conflicts with automatic resolution**</td></tr><tr><td colspan="1">`created`</td><td colspan="1">`deleted`</td><td colspan="1">`locally_created`</td></tr><tr><td colspan="1">`deleted`</td><td colspan="1">`created`</td><td colspan="1">`remotely_created`</td></tr><tr><td colspan="1">`modified`</td><td colspan="1">`deleted`</td><td colspan="1">`remotely_deleted`</td></tr><tr><td colspan="1">`deleted`</td><td colspan="1">`modified`</td><td colspan="1">`remotely_created`</td></tr><tr><td colspan="3">**Conflicts with non trivial resolution**</td></tr><tr><td colspan="1">`modified`</td><td colspan="1">`modified`</td><td colspan="1">`conflicted`</td></tr><tr><td colspan="1">`created`</td><td colspan="1">`created`</td><td colspan="1">`conflicted`</td></tr><tr><td colspan="1">`created`</td><td colspan="1">`modified`</td><td colspan="1">`conflicted`</td></tr><tr><td colspan="3">**Inconsistent cases**</td></tr><tr><td colspan="1">`unknown`</td><td colspan="1">`deleted`</td><td colspan="1">`unknown_deleted`</td></tr><tr><td colspan="1">`deleted`</td><td colspan="1">`unknown`</td><td colspan="1">`deleted_unknown`</td></tr></tbody></table>

This is the key of the [Synchronization process](#synchronization-process) as it relies on the `pair_state` to decide which action is needed in order to synchronize a local file or folder with the associated remote document and vice versa.

### Authentication

For each server binding (connection between Nuxeo Drive and a Nuxeo server) Nuxeo Drive needs to provide some credentials to get authenticated against the Nuxeo repository. There are two modes of authentication.

#### {{> anchor 'token-based'}}Token Based (Recommanded)

Is only possible if the [`nuxeo-platform-login-token`](https://github.com/nuxeo/nuxeo-platform-login/tree/master/nuxeo-platform-login-token) addon is deployed on the Nuxeo server. When asking for a server binding, either through the authentication pop-up or the command line, the user needs to provide its username and password for Nuxeo Drive to make a request to the `TokenAuthenticationServlet` in order to acquire a token. This token is a `UUID` stored in a server-side SQL directory and allows a user to get authenticated through the `TokenAuthenticator` by passing the token in the `X-Authentication-Token` request header. This authentication plugin is configured to be used with the `Trusting_LM` `LoginModule` which implies that no password check is done, a `Principal` is created from the username associated with the token if the user exists in the user directory. The token is stored by Nuxeo Drive in `server_bindings.remote_token` and reused for each HTTP request. This has the benefit of not having to store the user's password on the local desktop.

At any time a user can revoke a token for a given device from the **Nuxeo Drive** tab in the `User Center`. In this case Nuxeo Drive isn't able to authenticate against the Nuxeo server, switches to offline mode and deletes the token from the local storage. The "Update credentials" entry from the Nuxeo Drive menu is then displayed as "required", allowing the user to acquire a new token by providing valid credentials.

{{#> callout type='info' }}

Note that this addon is not specific to Nuxeo Drive and can be used by any third party application to authenticate to a Nuxeo repository. Technically, to acquire such a token, you need to send an HTTP `GET` request to the server using:

*   A Basic authentication header built from valid credentials.
*   The `/authentication/token` URL pattern.
*   The following required parameters: `applicationName, deviceId, permission` (optionally `deviceDescription`). The parameters are URI decoded by the Servlet.

So a sample call would be:

```
curl -H 'Authorization:Basic **********************' -G 'http://<host>:<port>/nuxeo/authentication/token?applicationName=Nuxeo%20Drive&deviceId=Ubuntu64bits&permission=rw&deviceDescription=My%20Linux%20box'
```

The token is sent back as a string in the plain text response body.

{{/callout}}

#### {{> anchor 'username-password-based'}}Username / Password Based

Is used as a fallback if the [`nuxeo-platform-login-token`](https://github.com/nuxeo/nuxeo-platform-login/tree/master/nuxeo-platform-login-token) add-on is not deployed on the Nuxeo server. In this case, at server binding time, both username and password are stored in the local database (`server_bindings.remote_user` and `server_bindings.remote_password`) and used for each HTTP request through a `Basic Authentication` header.

### {{> anchor 'synchronization-process'}}Synchronization Process

Synchronization is handled by a main thread that starts an infinite loop; see [`Synchronizer.loop()`](https://github.com/nuxeo/nuxeo-drive/blob/master/nuxeo-drive-client/nxdrive/synchronizer.py) . The loop processes the sequence described below, putting Nuxeo Drive to sleep between each sequence execution for a maximum delay of 5 seconds if there is no more content to synchronize. This delay is configurable with the `--delay` option when using the `ndrive` command.

1.  **Remote polling**: Get a summary of changes in the synchronization roots for the current user by calling the [ `NuxeoDrive.GetChangeSummary` ](#get-change-summary)operation. See [`Synchronizer._get_remote_changes()`](https://github.com/nuxeo/nuxeo-drive/blob/master/nuxeo-drive-client/nxdrive/synchronizer.py) .

    *   In the case of the first pass or if there are too many changes (> 1000, configurable with the `org.nuxeo.drive.document.change.limit` property), make a full scan of the synchronization roots by calling the[ `NuxeoDrive.GetChildren` ](#get-children)operation recursively and update the state of each document in `last_known_states`.
    *   In the other cases (i.e. most of the time), only update the state of the recently updated documents in `last_known_states`.
2.  **Local scan**: Process a recursive full scan of the `Nuxeo Drive` folder and update the state of each file or folder in `last_known_states`. See [`Synchronizer.scan_local()`](https://github.com/nuxeo/nuxeo-drive/blob/master/nuxeo-drive-client/nxdrive/synchronizer.py) .
3.  **Synchronization**: Process synchronization for each pair that needs it. See [`Synchronizer.synchronize()`](https://github.com/nuxeo/nuxeo-drive/blob/master/nuxeo-drive-client/nxdrive/synchronizer.py) .

    1.  Get the list of _pending_ pairs, i.e. query `last_known_states` with `pair_state != 'synchronized'`. See [`Controller.list_pending()`](https://github.com/nuxeo/nuxeo-drive/blob/master/nuxeo-drive-client/nxdrive/controller.py) .
    2.  For each _pending_ pair synchronize it, see [`Synchronizer.synchronize_one()`](https://github.com/nuxeo/nuxeo-drive/blob/master/nuxeo-drive-client/nxdrive/synchronizer.py) . Basically the name of the synchronization handler is dynamically computed using `'_synchronize_' + last_known_states.pair_state`, then the handler is called. Here is the list of available synchronization handlers:

        *   `_synchronize_locally_created`: Calls the `NuxeoDrive.CreateFolder` or `NuxeoDrive.CreateFile` operation.
        *   `_synchronize_remotely_created`: Creates a local folder or download a file to an existing local folder.
        *   `_synchronize_locally_modified`: Calls the `NuxeoDrive.UpdateFile` operation.

        *   `_synchronize_remotely_modified`: Renames a local folder or renames / updates a local file.
        *   `_synchronize_locally_deleted`: Calls the `NuxeoDrive.Delete` operation.
        *   `_synchronize_remotely_deleted`: Deletes a local file or folder.
        *   `_synchronize_deleted`: Deletes a pair from `last_known_states` (deletion on both sides).
        *   `_synchronize_conflicted`: Rename the local file with a suffix including the username and modification time (the suffix is returned by the `NuxeoDrive.GenerateConflictedItemName` operation) and fetches the remote file by calling `_synchronize_remotely_created`. As a result, two files exist on both sides and the users need to manually resolve the conflict, for instance by deleting the suffixed file or by renaming it and deleting the original one.

### Automation Operations

The communication between Nuxeo Drive and a Nuxeo server fully relies on [Content Automation Concepts]({{page page='content-automation-concepts'}}), except for:

*   Acquiring the token: `GET` request to the `TokenAuthenticationServlet`;
*   Downloading blobs: `GET` request to the `DownloadServlet`.

Here is the list of Automation operations used by Nuxeo Drive:

#### {{> anchor 'get-change-summary'}}NuxeoDrive.GetChangeSummary

Gets a summary of document changes in the synchronization roots of the currently authenticated user since the last synchronization date. The change summary, of type `FileSystemChangeSummary` mainly holds the new synchronization date and a list of `FileSystemItemChange` objects.

#### {{> anchor 'get-top-level-folder'}}NuxeoDrive.GetTopLevelFolder

Gets the top level [ `FolderItem` ](#folder-item) for the currently authenticated user.

#### {{> anchor 'get-children'}}NuxeoDrive.GetChildren

Gets the children of the [`FolderItem`](#folder-item) with the given id for the currently authenticated user.

#### {{> anchor 'get-file-system-item'}}NuxeoDrive.GetFileSystemItem

Gets the [ `FileSystemItem` ](#file-system-item)with the given id for the currently authenticated user.

#### {{> anchor 'file-system-item-exists'}}NuxeoDrive.FileSystemItemExists

Check if the [ `FileSystemItem` ](#file-system-it)with the given id exists for the currently authenticated user.

#### {{> anchor 'create-file'}}NuxeoDrive.CreateFile

Creates a file with the given blob in the [ `FileSystemItem` ](#file-system-item) with the given id for the currently authenticated user.

#### {{> anchor 'create-folder'}}NuxeoDrive.CreateFolder

Creates a folder with the given name in the [ `FileSystemItem` ](#file-system-item) with the given id for the currently authenticated user.

### {{> anchor 'rename'}}NuxeoDrive.Rename

Renames the [ `FileSystemItem` ](#file-system-item) with the given id with the given name for the currently authenticated user.

### {{> anchor 'update-file'}}NuxeoDrive.UpdateFile

Updates the [ `FileSystemItem` ](#file-system-item) with the given id with the given blob for the currently authenticated user.

#### {{> anchor 'delete'}}NuxeoDrive.Delete

Deletes the [ `FileSystemItem` ](#file-system-item) with the given id for the currently authenticated user.

#### {{> anchor 'can-move'}}NuxeoDrive.CanMove

Checks if the [ `FileSystemItem` ](#file-system-item) with the given source id can be moved to the [ `FileSystemItem` ](#file-system-item) with the given destination id for the currently authenticated user.

#### {{> anchor 'move'}}NuxeoDrive.Move

Moves the [ `FileSystemItem` ](#file-system-item) with the given source id to the [ `FileSystemItem` ](#file-system-item) with the given destination id for the currently authenticated user.

#### {{> anchor 'generate-conflicted-item-name'}}NuxeoDrive.GenerateConflictedItemName

Generates a conflicted name for a [ `FileSystemItem` ](#file-system-item) given its name, the currently authenticated user's first name and last name. Doing so as an operation makes it possible to override this part without having to fork the client codebase.

### Data Exchange Format

As Nuxeo Drive relies on Automation REST calls, all the exchanged data is transfered in `JSON`. Here are some samples of the most common HTTP `POST` requests sent by Nuxeo Drive and their associated response. These are extracts from the [Nuxeo Drive log file](#logs) set to `TRACE` level.

#### {{> anchor 'remote-polling'}}Remote Polling Through `NuxeoDrive.GetChangeSummary`

{{#> panel type='code' heading='Request'}}

```
nxdrive.client.base_automation_client Calling http://localhost:8080/nuxeo/site/automation/NuxeoDrive.GetChangeSummary with
headers {
    'X-Authentication-Token': u'b5b6b0ce-80b5-4398-aeb5-6a1dab01157d',
    'X-NXDocumentProperties': '*',
    'X-Device-Id': u'06208ada004411e388adc8f733c9742b',
    'Accept': 'application/json+nxentity, */*',
    'X-User-Id': u'joe',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json+nxrequest',
    'X-Application-Name': 'Nuxeo Drive'
},
cookies [],
JSON payload {
    "params": {
        "lastSyncDate": 1375977907000,
        "lastSyncActiveRootDefinitions": "default:ccbd9a3c-85d3-4589-ab82-8c28a22b50db"
    }
}
```

{{/panel}}{{#> panel type='code' heading='Response'}}

```
nxdrive.client.base_automation_client Response for http://localhost:8080/nuxeo/site/automation/NuxeoDrive.GetChangeSummary with JSON payload {
    "fileSystemChanges":[{
        "repositoryId":"default",
        "eventId":"documentModified",
        "eventDate":1375977907092,
        "fileSystemItem":{
            "digestAlgorithm":"md5",
            "canUpdate":true,
            "downloadURL":"nxbigfile/default/009e8ad7-feb6-4b64-9169-9947774780f9/blobholder:0/test.txt",
            "digest":"d41d8cd98f00b204e9800998ecf8427e",
            "creationDate":1375977901723,
            "parentId":"defaultSyncRootFolderItemFactory#default#ccbd9a3c-85d3-4589-ab82-8c28a22b50db",
            "folder":false,
            "canDelete":true,
            "lastModificationDate":1375977907086,
            "creator":"joe",
            "canRename":true,
            "name":"test.txt",
            "id":"defaultFileSystemItemFactory#default#009e8ad7-feb6-4b64-9169-9947774780f9",
            "path":"/org.nuxeo.drive.service.impl.DefaultTopLevelFolderItemFactory#/defaultSyncRootFolderItemFactory#default#ccbd9a3c-85d3-4589-ab82-8c28a22b50db/defaultFileSystemItemFactory#default#009e8ad7-feb6-4b64-9169-9947774780f9",
            "userName":"joe"
        },
        "docUuid":"009e8ad7-feb6-4b64-9169-9947774780f9",
        "fileSystemItemId":"defaultFileSystemItemFactory#default#009e8ad7-feb6-4b64-9169-9947774780f9",
        "fileSystemItemName":"test.txt"
    }],
    "hasTooManyChanges":false,
    "syncDate":1375977912000,
    "activeSynchronizationRootDefinitions":"default:ccbd9a3c-85d3-4589-ab82-8c28a22b50db"
}
```

{{/panel}}

We can notice in particular that:

*   The request contains the authentication token as a header and the last synchronization date as a timestamp in the `JSON` data.
*   The response contains:

    *   The synchronization date: `"syncdate"` that will be used to update `server_bindings.last_sync_date.`
    *   The list of file system item changes with one element only: the [ `FileSystemItem` ](#file-system-item) representation resulting of the adaptation of the `test.txt` document that has been remotely modified, including all the data needed to update the remote part of the pair corresponding to the retrieved `id` in `last_known_states`, such as the `name`, `digest`, `downloadURL` and `lastModificationDate`. In this case, the content of the document has been modified, so the `digest` is different from the current `last_known_states.remote_digest`, so `last_known_states.pair_state` will be updated to `remotely_modified` and the `_synchronize_remotely_modified` handler will take care of updating the local file by downloading the remote one calling the `downloadURL`.

#### {{> anchor 'locally-created-file'}}Synchronization of a Locally Created File

##### File Upload Using the [Automation Batch Upload]({{page page='blob-upload-for-batch-processing'}})

{{#> panel type='code' heading='Request'}}

```
nxdrive.client.base_automation_client Calling http://localhost:8080/nuxeo/site/automation/batch/upload with
headers {
    'Content-Length': 356587,
    'X-Authentication-Token': u'b5b6b0ce-80b5-4398-aeb5-6a1dab01157d',
    'X-Device-Id': u'06208ada004411e388adc8f733c9742b',
    'X-File-Type': 'application/vnd.oasis.opendocument.text',
    'X-User-Id': u'joe',
    'X-File-Size': 356587,
    'Cache-Control': 'no-cache',
    'X-Batch-Id': '1376003340.46_956489996',
    'X-File-Idx': 0,
    'Content-Type': 'application/octet-stream',
    'X-Application-Name': 'Nuxeo Drive',
    'X-File-Name': 'NUXEO_WCM_MODULE_User%20stories.odt'
},
cookies []
for file /home/ataillefer/Nuxeo Drive/Test folder/NUXEO_WCM_MODULE_User stories.odt
```

{{/panel}}{{#> panel type='code' heading='Response'}}

```
nxdrive.client.base_automation_client Response for http://localhost:8080/nuxeo/site/automation/batch/upload with JSON payload {
    "uploaded":"true",
    "batchId":"1376003340.46_956489996"
}
```

{{/panel}}

We can notice in particular that:

*   The request contains all required headers for the batch upload such as `X-Batch-Id, X-File-Type, X-File-Size, X-File-Name`. Of course the binary content itself is part of the request data.
*   The response contains the `uploaded` marker to indicate a successful upload.

##### Document Creation Using the [ `NuxeoDrive.CreateFile` ](#create-file) Operation

{{#> panel type='code' heading='Request'}}

```
nxdrive.client.base_automation_client Calling http://localhost:8080/nuxeo/site/automation/batch/execute with
headers {
    'X-Authentication-Token': u'b5b6b0ce-80b5-4398-aeb5-6a1dab01157d',
    'X-NXDocumentProperties': '*',
    'X-Device-Id': u'06208ada004411e388adc8f733c9742b',
    'Accept': 'application/json+nxentity, */*',
    'X-User-Id': u'joe',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json+nxrequest',
    'X-Application-Name': 'Nuxeo Drive'
},
cookies [],
JSON payload {
    "params": {
        "batchId": "1376003340.46_956489996",
        "operationId": "NuxeoDrive.CreateFile",
        "fileIdx": "0",
        "parentId": "defaultSyncRootFolderItemFactory#default#ccbd9a3c-85d3-4589-ab82-8c28a22b50db"
    }
}
```

{{/panel}}{{#> panel type='code' heading='Response'}}

```
nxdrive.client.base_automation_client Response for http://localhost:8080/nuxeo/site/automation/batch/execute with JSON payload {
    "digestAlgorithm":"md5",
    "canUpdate":true,
    "downloadURL":"nxbigfile/default/70235c0e-ad97-421e-92f6-4d71afaed9c1/blobholder:0/NUXEO_WCM_MODULE_User%20stories.odt",
    "digest":"3a9fdd2e619a2a47678bfd0b7f3d97ac",
    "creationDate":1376003340567,
    "parentId":"defaultSyncRootFolderItemFactory#default#ccbd9a3c-85d3-4589-ab82-8c28a22b50db",
    "folder":false,
    "canDelete":true,
    "lastModificationDate":1376003340567,
    "creator":"joe",
    "canRename":true,
    "name":"NUXEO_WCM_MODULE_User stories.odt",
    "id":"defaultFileSystemItemFactory#default#70235c0e-ad97-421e-92f6-4d71afaed9c1",
    "path":"/org.nuxeo.drive.service.impl.DefaultTopLevelFolderItemFactory#/defaultSyncRootFolderItemFactory#default#ccbd9a3c-85d3-4589-ab82-8c28a22b50db/defaultFileSystemItemFactory#default#70235c0e-ad97-421e-92f6-4d71afaed9c1",
    "userName":"joe"
}
```

{{/panel}}

We can notice in particular that:

*   The request contains all required parameters for the batch execution in the `JSON` data, such as `batchId, operationId, parentId` (operation parameter).
*   The response contains the representation of the [ `FileSystemItem` ](#file-system-item) resulting of the adaptation of the `NUXEO_WCM_MODULE_User stories.odt` document that has been remotely created, including all the data needed to create a new pair in `last_known_states` and populate its remote part with `remote_ref` = `id`, `remote_name` = `name`, `remote_digest` = `digest`, etc.

### {{> anchor 'application-update'}}Application update

Since version 1.3.0611, Nuxeo Drive is able to update itself with a newer or an older version (such a downgrade can be required if the Nuxeo server version is too old for the client version). This is very useful as it allows the user to keep the application up-to-date without having to manually install a new version.

#### {{> anchor 'principle'}}Principle

Every hour (`update-check-delay` command line parameter) Nuxeo Drive checks the [update site](#update-site) for a newer version compatible with the version of the Nuxeo server it is connected to. If such a version is available the systray icon changes colour and the "Update Nuxeo Drive" entry appears in the systray menu, allowing the user to trigger the update: download of the new version, installation, restart (uses `subprocess.Popen(args)`). At startup Nuxeo Drive checks if the current version stored in the database (`client_version`) is different from the code version, in which case it displays a dialog box to inform about the update to the newer version.

The user can configure Nuxeo Drive to automatically update itself in case of an available update through the General settings. This is persisted in the `auto_update` field.

Note that if Nuxeo Drive detects that the client version is not compatible with the server version it will stop the synchronization thread and display the "Upgrade/Downgrade required" entry in the systray menu.

#### {{> anchor 'implementation'}}Implementation

At startup, when the Setting dialog is accepted and every hour, Nuxeo Drives refreshes the update information by:

*   Updating the `server_version` and `update_url` fields from the Nuxeo server by calling the `NuxeoDrive.GetClientUpdateInfo` operation.
*   Instantiating or using the existing `AppUpdater` (singleton) to communicate with the [update site](#update-site) using the `update_url` and `server_version` in order to get the update status among: `up_to_date`, `upgrade_needed`, `downgrade_needed` or `update_available`.
*   Updating the systray menu if needed.

The main framework used for handling the update is [esky](https://pypi.python.org/pypi/esky), which we've wrapped inside the `AppUpdater` class to handle the custom logic related to the client and server compatibility.

Basically esky is able to:

*   Fetch a given version from the update site, ie. download the ZIP file to a temporary directory of the application installation directory.
*   Install a given version in the application installation directory.
*   Cleanup old versions from the application installation directory.
*   Do all this in a filesystem transactional way so that it keeps the app safe in the face of failed or partial updates.

#### {{> anchor 'update-site'}}Update site

The update site structure is detailed in a [dedicated page]({{page space='nxdoc' page='nuxeo-drive-update-site'}}) of the Nuxeo Drive Installation and Administration section which also explains how to set up a custom update site in case the one provided by Nuxeo wouldn't fit your needs.

### {{> anchor 'logs'}}Logs

Nuxeo Drive logs are available:

*   In the `.nuxeo-drive/logs/nxdrive.log` file,
*   In the console by running the `ndrive console` command.

Options are available to set the log level:

*   For the log file: `--log-level-file LOG_LEVEL_FILE`
*   For the console log: `--log-level-console LOG_LEVEL_CONSOLE`

## Server

The server-side part of Nuxeo Drive is distributed as a [Marketplace package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-drive) available from Nuxeo Connect (stable releases). You can also fetch the latest [development version](https://qa.nuxeo.org/jenkins/job/addons_nuxeo-drive-master-marketplace/) of the Marketplace package from our Jenkins continuous integration server (use at your own risk).

### Java API

The server-side API mainly relies on the Java types described below.

#### [FileSystemChangeFinder](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/java/org/nuxeo/drive/service/FileSystemChangeFinder.java)

Allows to find document changes. Default implementation is [`AuditChangeFinder`](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/java/org/nuxeo/drive/service/impl/AuditChangeFinder.java) , that relies on Nuxeo audit logs.

#### {{> anchor 'file-system-item'}} [FileSystemItem](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/java/org/nuxeo/drive/adapter/FileSystemItem.java)

Representation of a file or folder on a file system. It is used as an adapter of `DocumentModel`.

#### {{> anchor 'file-item'}} [FileItem](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/java/org/nuxeo/drive/adapter/FileItem.java)

Representation of a file, i.e. a downloadable `FileSystemItem`. In the case of a `DocumentModel` backed implementation, the backing document holds a binary content. Typically a File, Note or Picture.

#### {{> anchor 'folder-item'}} [FolderItem](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/java/org/nuxeo/drive/adapter/FolderItem.java)

Representation of a folder. In the case of a `DocumentModel` backed implementation, the backing document is Folderish. Typically a Folder or a Workspace.

#### [DocumentBackedFileItem](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/java/org/nuxeo/drive/adapter/impl/DocumentBackedFileItem.java)

`DocumentModel` backed implementation of a `FileItem`.

#### [DocumentBackedFolderItem](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/java/org/nuxeo/drive/adapter/impl/DocumentBackedFolderItem.java)

`DocumentModel` backed implementation of a `FolderItem`.

#### [DefaultTopLevelFolderItem](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/java/org/nuxeo/drive/adapter/impl/DefaultTopLevelFolderItem.java)

Default implementation of the top level `FolderItem`, ie. the Nuxeo Drive local folder.

#### [DefaultSyncRootFolderItem](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/java/org/nuxeo/drive/adapter/impl/DefaultSyncRootFolderItem.java)

Default implementation of a synchronization root `FolderItem`.

#### {{> anchor 'file-system-item-adapter-service'}} [FileSystemItemAdapterService](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/java/org/nuxeo/drive/service/FileSystemItemAdapterService.java)

Service for creating the right `FileSystemItem` adapter depending on `DocumentModel` type or facet. Factories can be contributed to implement a specific behavior for the `FileSystemItem` adapter creation.

#### [FileSystemItemFactory](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/java/org/nuxeo/drive/service/FileSystemItemFactory.java)

Interface for the classes contributed to the `fileSystemItemFactory` extension point of the `FileSystemItemAdapterService`. Allows to get a `FileSystemItem` for a given `DocumentModel` or a given `FileSystemItem` id.

Default factories are:

*   [`DefaultFileSystemItemFactory`](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/java/org/nuxeo/drive/service/impl/DefaultFileSystemItemFactory.java) : applies to Folderish and BlobHolder documents.
*   [`DefaultSyncRootFolderItemFactory`](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/java/org/nuxeo/drive/service/impl/DefaultSyncRootFolderItemFactory.java) : applies to synchronization roots.
*   [`DefaultTopLevelFolderItemFactory`](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/java/org/nuxeo/drive/service/impl/DefaultTopLevelFolderItemFactory.java) : appplies to the top level `FolderItem`, ie. the Nuxeo Drive local folder.

#### [FileSystemItemManager](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/java/org/nuxeo/drive/service/FileSystemItemManager.java)

Provides an API to manage usual file system operations on a `FileSystemItem` given its id. Allows the following actions:

*   Check existence,
*   Read,
*   Read children,
*   Create,
*   Update,
*   Rename,
*   Delete,
*   Move.

### Execution Process

The server-side API mainly allows to:

*   Get the list of changed documents as `FileSystemItem` objects.
*   Handle usual file system operations on a `FileSystemItem` given its id, such as read, get children, create, update, rename, delete and move.

The graph below illustrates the execution process corresponding to the Automation call samples seen earlier: [remote polling](#remote-polling) and [synchronization of a locally created file](#locally-created-file).

![]({{file name='execution_process.jpg'}} ?w=650,border=true)

### Customization

As usual in the platform, Nuxeo Drive relies on extension points and contributions to these extension points. The main entry point for customization is the [ `FileSystemItemAdapterService` ](#file-system-item-adapter-service), that exposes the `fileSystemItemFactory` and `topLevelFolderItemFactory` extension points.

You can take a look at:

*   The [default contributions](https://github.com/nuxeo/nuxeo-drive/blob/master/nuxeo-drive-server/nuxeo-drive-core/src/main/resources/OSGI-INF/nuxeodrive-adapter-contrib.xml) embedded in the Marketplace package.
*   The [User workspace based hierarchy contributions](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/resources/OSGI-INF/nuxeodrive-hierarchy-userworkspace-adapter-contrib.xml) embedded in the Marketplace package as an example but not deployed by default. For details, see {{jira server='Nuxeo Issue Tracker' key='NXP-10663'}}.
*   The [User workspace and permission based hierarchy contributions](https://github.com/nuxeo/nuxeo-drive-server/blob/master/nuxeo-drive-core/src/main/resources/OSGI-INF/nuxeodrive-hierarchy-permission-adapter-contrib.xml) that are not embedded in the Marketplace package. For details, see {{jira server='Nuxeo Issue Tracker' key='NXP-11074'}}.
*   The series of [blog posts](http://www.nuxeo.com/blog/tag/nuxeo-drive/) about Nuxeo Drive.

{{! /multiexcerpt}}

* * *