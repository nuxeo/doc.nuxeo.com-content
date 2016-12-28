---
title: Nuxeo Drive Core Implementation
review:
    comment: ''
    date: '2016-12-15'
    status: ok
labels:
toc: true
tree_item_index: 200
---

Here is a schema showing the client-side architecture:

![]({{file name='drive-client-side-architecture.png'}} ?w=650,border=true)

## CommandLine

Handle the basic commandline arguments, create the Manager, and depending on the argument create a ConsoleApplication or Application.

## Manager

Handle all the generic behavior of Nuxeo Drive: auto-updates, bind of an engine, declaration of different engine types, tracker.

## Engine

Handle one server synchronization, can be extend to customize the behavior, it creates all the synchronization structure: QueueManager, LocalWatcher, RemoteWatcher, DAO.

## DAO

Abstraction for accessing the SQLite database, each Engine has its own DAO and so database

## LocalWatcher

Handle the local scan on startup and then the FS events, updating the States stored in DAO, and if needed queueing the State to be processed

## RemoteWatcher

Handle the remote scan for the first synchronization and then the incremental polling from the server

## QueueManager

Handle the different types of Processor to process any remote or local modification

## RemoteFileProcessor

Specialized thread in uploading document

## RemoteFolderProcessor

Specialized thread in create remote folder

## LocalFileProcessor

Specialized thread in download document

## LocalFolderProcessor

Specialized thread in create local folder

## AdditionalProcessor

If the queue is big, some additional Processor will be launch by the QueueManager to either download or upload document

## AppUpdater

Handle the auto-update polling and the update download process

## Tracker

Use for Analytics, anonymous report of usage

## ConsoleApplication

Console behavior implementation

## Application

OperatingSystem GUI handles the creation of windows, systray and message

## Translator

Load labels translation and offer the translation service as static method

## WebDialog

Base of all Nuxeo Drive window, it is basically a WebKit view with a Drive JavaScript object mapped by the JavaScript API

QT is heavily used in the new client. Here is a diagram of the signals/slots connections:
