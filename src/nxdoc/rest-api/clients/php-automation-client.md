---
title: PHP Automation Client
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
    - php-client-component
    - php
    - client
toc: true
confluence:
    ajs-parent-page-id: '28475456'
    ajs-parent-page-title: Clients
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: PHP+Automation+Client
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/PHP+Automation+Client'
    page_id: '28475766'
    shortlink: doGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/doGyAQ'
    source_link: /display/NXDOC710/PHP+Automation+Client
tree_item_index: 400
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
{{! excerpt}}

A PHP automation client is made [available on GitHub](https://github.com/nuxeo/nuxeo-automation-php-client). You can use it and ask for commit rights on the project if you want to improve it or fix a bug. The project contains the [library](https://github.com/nuxeo/nuxeo-automation-php-client/tree/release-7.10/NuxeoAutomationClient) and some [sample use cases](https://github.com/nuxeo/nuxeo-automation-php-client/tree/release-7.10/tests).

{{! /excerpt}}

## Queries / Chains

In this examples we are using the PHP automation client to demonstrate how to invoke remote operations.
The following example is executing a simple query against a remote server: `SELECT * FROM Document`. The server will return a JSON document listing all selected documents.

&nbsp;

```php
$client = new NuxeoPhpAutomationClient('http://localhost:8080/nuxeo/site/automation');

$session = $client->getSession('Administrator','Administrator');

$answer = $session->newRequest("Document.Query")->set('params', 'query', "SELECT * FROM Document" )->sendRequest();

$documentsArray = $answer->getDocumentList();
$value = sizeof($documentsArray);
echo '
<table>';
echo '
<tr>
<TH>uid</TH>
<TH>Path</TH>

<TH>Type</TH>
<TH>State</TH>
<TH>Title</TH>
<TH>Download as PDF</TH>';
for ($test = 0; $test < $value; $test ++){
    echo '
<tr>';
    echo '
<td> ' . current($documentsArray)->getUid()  . '</td>';
    echo '
<td> ' . current($documentsArray)->getPath()  . '</td>';
    echo '
<td> ' . current($documentsArray)->getType()  . '</td>';
    echo '
<td> ' . current($documentsArray)->getState()  . '</td>';
    echo '
<td> ' . current($documentsArray)->getTitle()  . '</td>';
    echo '
<td><form id="test" action="../tests/B5bis.php" method="post" >';
    echo '<input type="hidden" name="data" value="'.
    current($documentsArray)->getPath(). '"/>';
    echo '<input type="submit" value="download"/>';
    echo '</form></td></tr>';
    next($documentsArray);
}
echo '</table>';

```

The class `NuxeoPhpAutomationClient`&nbsp;allows you to open a session with the getSession (return a session instance). Then, from the session, you can create a new request by using the same named function. The set function is used to configure your automation request, giving the chain or operation to call as well as the loading params, context, and input parts. At last, you send the request with the sendRequest function.

You can see here how to use the getters in order to retrieve information from the Document object, built from the request answer.

## Using Blobs

### Attach Blob

In order to attach a blob, we have to send a Multipart Request to Nuxeo. The first part of the request will contain the body of the request (params, context ...) and the second part will contain the blob (as an input).

```php
$client = new NuxeoPhpAutomationClient('http://localhost:8080/nuxeo/site/automation');

$session = $client->getSession('Administrator','Administrator');

$answer = $session->newRequest("Blob.Attach")->set('params', 'document', $path)
->loadBlob($blob, $blobtype)
->sendRequest();

```

That will attach the blob to an existing file. In order to send a blob, you use the `loadBlob()` function. If a blob is loaded using this function, the `sendRequet()` function will automatically create a multipart request. If you load many blobs without noticing a precise localization in params, the blobs will be send as an attachment of the file (not as a content).

### Get a Blob

In order to get a blog, you have to read the content of the 'tempfile' after using the appropriate headers.

```php
$client = new NuxeoPhpAutomationClient('http://localhost:8080/nuxeo/site/automation');

$session = $client->GetSession('Administrator','Administrator');

$answer = $session->NewRequest("Blob.Get")->Set('input', 'doc:' . $path)->SendRequest();

if (!isset($answer) OR $answer == false)
    echo '$answer is not set';
else{
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename='.$filename.'.pdf');
    readfile('tempstream');
}

```

This will download the blob placed in `file:content` of the Nuxeo file designed by `$path`.
