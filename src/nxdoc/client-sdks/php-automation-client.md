---
title: PHP Automation Client
review:
    comment: ''
    date: '2016-12-06'
    status: ok
labels:
    - lts2016-ok
    - php
    - client
    - php-client-component
toc: true
confluence:
    ajs-parent-page-id: '16091040'
    ajs-parent-page-title: Client SDKs
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: PHP+Automation+Client
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/PHP+Automation+Client'
    page_id: '7209503'
    shortlink: HwJu
    shortlink_source: 'https://doc.nuxeo.com/x/HwJu'
    source_link: /display/NXDOC/PHP+Automation+Client
tree_item_index: 600
history:
    -
        author: Vincent Dutat
        date: '2015-03-25 17:15'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2015-03-18 09:09'
        message: ''
        version: '16'
    -
        author: Frédéric Vadon
        date: '2015-02-19 04:04'
        message: >-
            The name of the client changed because of
            https://github.com/nuxeo/nuxeo-automation-php-client/commit/560874cfd9662b2b464045b19c6819e10a834600
        version: '15'
    -
        author: Solen Guitter
        date: '2013-10-17 11:15'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-08-30 15:05'
        message: Added TOC and excerpt
        version: '13'
    -
        author: Solen Guitter
        date: '2012-09-14 11:12'
        message: Migrated to Confluence 4.0
        version: '12'
    -
        author: Solen Guitter
        date: '2012-09-14 11:12'
        message: 'Fixed file:content interpreted as a link'
        version: '11'
    -
        author: Arthur Gallouin
        date: '2011-05-20 16:40'
        message: ''
        version: '10'
    -
        author: Arthur Gallouin
        date: '2011-05-20 15:42'
        message: ''
        version: '9'
    -
        author: Arthur Gallouin
        date: '2011-05-20 15:19'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2011-05-19 20:29'
        message: ''
        version: '7'
    -
        author: Arthur Gallouin
        date: '2011-05-16 17:41'
        message: ''
        version: '6'
    -
        author: Arthur Gallouin
        date: '2011-05-16 17:40'
        message: ''
        version: '5'
    -
        author: Arthur Gallouin
        date: '2011-05-16 17:37'
        message: ''
        version: '4'
    -
        author: Arthur Gallouin
        date: '2011-05-16 17:28'
        message: ''
        version: '3'
    -
        author: Arthur Gallouin
        date: '2011-05-10 09:48'
        message: ''
        version: '2'
    -
        author: Arthur Gallouin
        date: '2011-05-09 16:56'
        message: ''
        version: '1'

---
The Nuxeo Automation PHP Client is a PHP client library for Nuxeo Automation API.

[Github Website](https://github.com/nuxeo/nuxeo-automation-php-client)

## Path to the PHP Client (v1.5)

Version 1.5.0 introduces a new fluent API:

version < 1.5.0

```php
$client = new \Nuxeo\Automation\Client\NuxeoPhpAutomationClient('http://localhost:8080/nuxeo/site/automation');
$session = $client->getSession('Administrator', 'Administrator');
$answer = $session->newRequest("Document.Query")->set('params', 'query', "SELECT * FROM Document)->setSchema($propertiesSchema)->sendRequest();
$documentsArray = $answer->getDocumentList();
```

version >= 1.5.0

```php
$client = new \Nuxeo\Client\Api\NuxeoClient('http://localhost:8080/nuxeo', 'Administrator', 'Administrator');
$documents = $client->schemas("*")->automation('Document.Query')->param('query', 'SELECT * FROM Document')->execute(Documents::className);
```

This new API is the first step to the incoming full-featured PHP Client.

{{#> callout type='note' }}

Until this new version, the old API will still be available. Thus you can upgrade the library to the 1.5 (transition) version and access the new API and features without breaking your application.

{{/callout}}

## Getting Started

### Library import

**Manual install**

* [Nuxeo Automation PHP Client 1.1.1](https://github.com/nuxeo/nuxeo-automation-php-client/archive/1.1.1.tar.gz).
* [Nuxeo Automation PHP Client 1.5.0-rc1](https://github.com/nuxeo/nuxeo-automation-php-client/archive/1.5.0-rc1.tar.gz).

**Import Nuxeo Automation PHP Client with:**

Composer:

```
  "require": {
    "nuxeo/nuxeo-automation-php-client": "~1.5.0"
  }
```

### Usage

{{#> callout type='note' }}

The following documentation and samples applies for the 1.5 and newer versions. Calls to the Automation API for previous versions of the client will require adjustments.

{{/callout}}


#### Creating a Client

For a given `url`:

```php
$url = 'http://localhost:8080/nuxeo';
```

And given credentials:

```php
use Nuxeo\Client\Api\NuxeoClient;

$client = new NuxeoClient($url, 'Administrator', 'Administrator');
```

```php
// For defining all schemas
$client = $client->schemas("*");
```

#### APIs

##### Automation API

To use the Automation API, `Nuxeo\Client\Api\NuxeoClient#automation()` is the entry point for all calls:

```php
use Nuxeo\Client\Api\Objects\Document;

// Fetch the root document
$result = $client->automation('Repository.GetDocument')->param("value", "/")->execute(Document::className);
```

```php
use Nuxeo\Client\Api\Objects\Documents;

// Execute query
$operation = $client->automation('Repository.Query')->param('query', 'SELECT * FROM Document');
$result = $operation->execute(Documents::className);
```

```php
use Nuxeo\Client\Api\Objects\Blob;
use Nuxeo\Client\Api\Objects\Blobs;

// To upload|download blob(s)

$fileBlob = Blob::fromFile('/local/file.txt', 'text/plain');
$blob = $client->automation('Blob.AttachOnDocument')->param('document', '/folder/file')->input($fileBlob)->execute(Blob::className);

$inputBlobs = new Blobs();
$inputBlobs->add('/local/file1.txt', 'text/plain');
$inputBlobs->add('/local/file2.txt', 'text/plain');
$blobs = $client->automation('Blob.AttachOnDocument')->param('xpath', 'files:files')->param('document', '/folder/file')->input($inputBlobs)->execute(Blobs::className);

$resultBlob = $client->automation('Document.GetBlob')->input('folder/file')->execute(Blob::className);
```

#### Errors/Exceptions

The main exception type is `Nuxeo\Client\Internals\Spi\NuxeoClientException` and contains:

- The HTTP error status code (666 for internal errors)

- An info message
