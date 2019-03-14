---
title: Nuxeo Drive Core Implementation
review:
    comment: ''
    date: '2017-12-18'
    status: ok
labels:
    - lts2017-ok
    - nuxeo-drive
    - mschoentgen
toc: true
tree_item_index: 200

---
## Client Architecture

Here is a schema showing the client-side architecture:

![]({{file name='drive-client-side-architecture.png' page='nuxeo-drive'}} ?w=650)

**CommandLine**

Handles the basic commandline arguments, creates the Manager, and depending on the argument creates a ConsoleApplication or Application.

**Manager**

Handles all the generic behavior of Nuxeo Drive: auto-updates, bind of an engine, declaration of different engine types, tracker.

**Engine**

Handles one server synchronization. It creates all the synchronization structure: QueueManager, LocalWatcher, RemoteWatcher, DAO. It can be extended to customize the behavior.

**DAO**

Abstraction for accessing the SQLite database. Each Engine has its own DAO and so database.

**LocalWatcher**

Handles the local scan on startup and then the FS events, updating the States stored in DAO, and if needed queueing the State to be processed.

**RemoteWatcher**

Handles the remote scan for the first synchronization and then the incremental polling from the server.

**QueueManager**

Handles the different types of Processor to process any remote or local modification.

**RemoteFileProcessor**

Specialized thread in uploading document

**RemoteFolderProcessor**

Specialized thread in create remote folder

**LocalFileProcessor**

Specialized thread in download document

**LocalFolderProcessor**

Specialized thread in create local folder

**AdditionalProcessor**

If the queue is big, some additional Processors will be launched by the QueueManager to either download or upload document.

**AppUpdater**

Handles the auto-update polling and the update download process.

**Tracker**

Used for Analytics, anonymous report of usage.

**ConsoleApplication**

Console behavior implementation

**Application**

OperatingSystem GUI handles the creation of windows, systray and message.

**Translator**

Loads labels translation and offers the translation service as static method.

**WebDialog**

Base of all Nuxeo Drive window, it is basically a WebKit view with a Drive JavaScript object mapped by the JavaScript API.

QT is heavily used in the new client. Here is a diagram of the signals/slots connections:

## Nuxeo Drive Security Informations

We recommend you to always have a up-to-date version of Nuxeo Drive.

### Authentication Flow

Nuxeo Drive use a token-based authentication. It first authenticates the user through a server authentication page so it uses the same authentication mechanism as your Nuxeo instance.

Once the authentication is done, Nuxeo generates a token and sends it to the Drive module.

![]({{file name='drive-auth.svg' page='nuxeo-drive'}} ?w=650)
<!--
sequenceDiagram
opt Authentication
Drive->> Nuxeo: Access Authentication Page
Nuxeo->>Nuxeo: Authenticate user
Nuxeo->> Nuxeo: Generate token
Nuxeo->> Drive: Return a token
Drive->>Drive: Store token
end
loop For each API
Drive->> Nuxeo: Send command with token
Nuxeo->> Nuxeo: Verify token
Nuxeo->> Nuxeo: Execute command
Nuxeo->> Drive: Result
end
-->

The token is stored inside the user profile Nuxeo Drive database. We recommend that you encrypt UserProfile with the OS mechanism.

### File IO

Nuxeo Drive will access the following folders:

- `.nuxeo-drive`, inside user profile
- `Nuxeo Drive` or the root folder for synchronization
- `Nuxeo Drive application` for the autoupdate mechanism

### Network IO

Nuxeo Drive uses only HTTP(S) connection and doesn't bind any sockets.

The auto-update module initiates connection to the update website (community.nuxeo.com by default) at regular intervals specified in the client configuration.

Each Nuxeo Drive engine initiates HTTP connection to your Nuxeo Server based on the URL you provided. If you mapped with SSL the connection will be secured.

### Required Privileges

The auto-lock feature uses the `SE_DEBUG_PRIVILEGE` to list every processes for the current user and their opened handlers.

The Drive process runs under user rights, so it is bound to the same restrictions on the OS and filesystem.
