---
title: 'Nuxeo Management REST API'
review:
    comment: ''
    date: '2019-07-26'
    status: ok
labels:
    - lts2019-ok
    - rest-api    
toc: true
tree_item_index: 2200
---

The Nuxeo Management REST API is a set of endpoints allowing the management of the Nuxeo Platform.

This page explains these endpoints and their purpose.

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Configuration

### Authentication

The Management REST API is accessible for any administrator user.

Furthermore, a "technical" user can be configured to access the Management REST API in `nuxeo.conf`:

```
org.nuxeo.rest.management.user=transient/technical_user
```

The user does not need to exist in Nuxeo, and **must** start with `transient/` as we are relying on the transient user feature.

Once you have created the user, configure a JWT secret in `nuxeo.conf`:

```
nuxeo.jwt.secret=abracadabra
```

Then, to use the Management REST API:
- Generate a JWT token with the user (`transient/technical_user` here) as claim subject,
- Call the API using the `Authorization: Bearer JWT_TOKEN` header,
- Share the JWT secret (`abracadabra` here) between the Nuxeo Server and the client calling the Management REST API.

### Deploy the Management REST API on a Separate HTTP Port

For security reasons, it is recommended to deploy the Management REST API on a different port from the regular Nuxeo application one. For instance, see below to configure the HTTP port to `9090`.

#### Configure the Management REST API HTTP Port

In `nuxeo.conf`, add:
```
nuxeo.server.http.managementPort=9090
```

#### Add a New Tomcat Connector

Add a new `Connector` for the Catalina `Service` in `./conf/server.xml` like this one:

```xml
<Connector port="9090" protocol="HTTP/1.1" URIEncoding="UTF-8"
           address="0.0.0.0"
           maxThreads="2"
           acceptCount="10"
           compression="on"
           compressionMinSize="512"
           compressibleMimeType="text/css,application/javascript,text/xml,text/html"
           connectionTimeout="20000"
           disableUploadTimeout="false"
           connectionUploadTimeout="60000" />
```

Here is the FreeMarker version using `nuxeo.conf` properties:

```xml
<Connector port="${nuxeo.server.http.managementPort}" protocol="HTTP/1.1" URIEncoding="UTF-8"
               address="${nuxeo.bind.address}"
<#if nuxeo.server.signature??>
               server="${nuxeo.server.signature}"
</#if>
               maxThreads="2"
               acceptCount="10"
               compression="on"
               compressionMinSize="512"
               compressibleMimeType="text/css,application/javascript,text/xml,text/html"
               connectionTimeout="20000"
               disableUploadTimeout="false"
               connectionUploadTimeout="${nuxeo.server.http.connectionUploadTimeout}" />
```

You can find the default template holding this configuration under `./templates/common-base/conf/server.xml.nxftl` in the Nuxeo Platform.

## Management REST API Endpoints

### Binaries Endpoint

To [Garbage Collect]({{page page='garbage-collecting-orphaned-binaries'}}) the orphaned (unused) binaries as below:

```
DELETE http://localhost:8080/nuxeo/site/management/binaries/orphaned
```

**Response**

If successful, returns a JSON representation of the binary manager status.

**Status Codes**

- 200 *OK* - Success.
- 409 *Conflict* - Garbage collection is already in progress.

**Sample**

```curl
curl -X DELETE -u Administrator:Administrator \
http://localhost:8080/nuxeo/site/management/binaries/orphaned
```

```json
{
    "gcDuration": 6,
    "numBinaries": 1,
    "sizeBinaries": 4451,
    "numBinariesGC": 0,
    "sizeBinariesGC": 0,
    "gcduration": 6
}
```

### Bulk Endpoint

To retrieve [Bulk Action Status]({{page page='bulk-action-framework'}}#bulk-rest-api) for a given command id.

```
GET http://localhost:8080/nuxeo/site/management/bulk/{commandID}
```

**Path Parameters**

| Parameter Name        | Type       | Required | Description     |
| --------------------- | ---------- | -------- | --------------  |
| **commandID**         | **string** |    Yes   | The command id. |


**Response**

If successful, returns a JSON representation of a [Bulk Action Status]({{page page='bulk-action-framework'}}#bulk-rest-api).

**Status Codes**

- 200 *OK* - Success.
- 404 *Not Found* - Command with the given `commandID` does not exist.

**Sample**

```curl
curl -u Administrator:Administrator \
http://localhost:8080/nuxeo/site/management/bulk/COMMAND_ID
```

```json
{
   "entity-type": "bulkStatus",
   "commandId": "0e1e6800-631a-4e04-a47c-241ea7b3596a",
   "state": "SCHEDULED",
   "processed": 0,
   "error": false,
   "errorCount": 0,
   "total": 0,
   "action": "recomputeThumbnails",
   "username": "system",
   "submitted": "2019-07-26T12:13:31.361Z",
   "scrollStart": null,
   "scrollEnd": null,
   "processingStart": null,
   "processingEnd": null,
   "completed": null,
   "processingMillis": 0
}
```

### Distribution Endpoint

To get the distribution information.

```
GET http://localhost:8080/nuxeo/site/management/distribution
```

**Response**

If successful, returns a JSON representation of the distribution information.

**Status Codes**

- 200 *OK* - Success.

**Sample**

```curl
curl -u Administrator:Administrator \
http://localhost:8080/nuxeo/site/management/distribution
```

```json
{
  "org.nuxeo.ecm.product.name": "Nuxeo Platform",
  "org.nuxeo.ecm.product.version": "LTS 2019-HF17",
  "org.nuxeo.distribution.name": "server",
  "org.nuxeo.distribution.version": "10.10",
  "org.nuxeo.distribution.server": "tomcat",
  "org.nuxeo.distribution.date": "201901211253",
  "warnings": [],
  "nuxeo.osgi.bundles": [
    {
      "name": "org.nuxeo.admin.center",
      "version": "10.10-HF11"
    },

    ...other happy bundles...

  ]
}
```

### Elasticsearch Endpoints

The following endpoints are useful when the Nuxeo Platform leverages [Elasticsearch]({{page page='elasticsearch-setup'}}).

#### Reindex

##### Reindex a Repository or a Set of Documents

To reindex an entire [repository]({{page page='elasticsearch-setup'}}#configuration-for-multi-repositories) or a set of documents using an [NXQL]({{page page='nxql'}}) query.

```
POST http://localhost:8080/nuxeo/site/management/elasticsearch/{REPOSITORY_NAME}/reindex?query=QUERY
```

**Path Parameters**

| Parameter Name        | Type       | Required | Description          |
| --------------------- | ---------- | -------- | -------------------- |
| **REPOSITORY_NAME**   | **string** |    Yes   | The repository name. |

**Query Parameters**

| Parameter Name        | Type       | Required | Description     |
| --------------------- | ---------- | -------- | ----------------|
| **query**             | **string** |    No    | The NXQL query. |

**Response**

If successful, returns a JSON representation of a [Bulk Action Status]({{page page='bulk-action-framework'}}#bulk-rest-api).

**Status Codes**

- 200 *OK* - Success.

**Sample**

To reindex the `default` repository:

```curl
curl -X POST -u Administrator:Administrator \
http://localhost:8080/nuxeo/site/management/elasticsearch/default/reindex
```

```json
{
   "entity-type": "bulkStatus",
   "commandId": "d3bc0a81-b061-447f-b307-c3db78b5f457",
   "state": "SCHEDULED",
   "processed": 0,
   "error": false,
   "errorCount": 0,
   "total": 0,
   "action": "index",
   "username": "system",
   "submitted": "2019-07-26T14:12:29.224Z",
   "scrollStart": null,
   "scrollEnd": null,
   "processingStart": null,
   "processingEnd": null,
   "completed": null,
   "processingMillis": 0
}
```

To reindex a set of documents on a given Nuxeo repository matching the [NXQL]({{page page='nxql'}}) query:</br>
`SELECT * FROM Document WHERE dc:title LIKE 'My Title%'`

```curl
curl -X POST -u Administrator:Administrator \
http://localhost:8080/nuxeo/site/management/elasticsearch/default/reindex?query=SELECT+%2A+FROM+document+WHERE+dc%3Atitle+LIKE+%27My+Title%25%27%27
```

```json
{  
   "entity-type":"bulkStatus",
   "commandId":"90037d73-ed19-48cc-a4ad-09f3999cf014",
   "state":"SCHEDULED",
   "processed":0,
   "error":false,
   "errorCount":0,
   "total":0,
   "action":"index",
   "username":"system",
   "submitted":"2019-07-26T09:26:08.761Z",
   "scrollStart":null,
   "scrollEnd":null,
   "processingStart":null,
   "processingEnd":null,
   "completed":null,
   "processingMillis":0
  }
```

##### Reindex a Document

To reindex a given document and its children recursively on a specific repository.

```
POST http://localhost:8080/nuxeo/site/management/elasticsearch/{REPOSITORY_NAME}/{DOC_ID}/reindex
```

**Path Parameters**

| Parameter Name        | Type       | Required | Description           |
| --------------------- | ---------- | -------- | --------------------- |
| **REPOSITORY_NAME**   | **string** |    Yes   | The repository name.  |
| **DOC_ID**            | **string** |    Yes   | The document Id.      |

**Response**

If successful, returns a JSON representation of a [Bulk Action Status]({{page page='bulk-action-framework'}}#bulk-rest-api).

**Status Codes**

- 200 *OK* - Success.

**Sample**

```curl
curl -X POST -u Administrator:Administrator \
http://localhost:8080/nuxeo/site/management/elasticsearch/default/1fa9d3fa-04cc-4956-bc6c-8317b803e131/reindex
```

```json
{  
   "entity-type":"bulkStatus",
   "commandId":"f37503d3-51b2-462e-8f1e-fa240fafa861",
   "state":"SCHEDULED",
   "processed":0,
   "error":false,
   "errorCount":0,
   "total":0,
   "action":"index",
   "username":"system",
   "submitted":"2019-07-26T09:45:09.874Z",
   "scrollStart":null,
   "scrollEnd":null,
   "processingStart":null,
   "processingEnd":null,
   "completed":null,
   "processingMillis":0
 }
```

All the indexing endpoints defined above use the [Bulk Action Framework]({{page page='bulk-action-framework'}}), and can be monitored using the [Bulk Endpoint](#bulk-endpoint).

#### Flush

To flush a repository.

```
POST http://localhost:8080/nuxeo/site/management/elasticsearch/{REPOSITORY_NAME}/flush
```

**Path Parameters**

| Parameter Name        | Type       | Required | Description          |
| --------------------- | ---------- | -------- | -------------------- |
| **REPOSITORY_NAME**   | **string** |    Yes   | The repository name. |

**Status Codes**

- 204 *No Content* - Success.

**Sample**

To flush the `default` repository:

```curl
curl -X POST -u Administrator:Administrator \
http://localhost:8080/nuxeo/site/management/elasticsearch/default/flush
```

#### Optimize

To optimize a repository.

```
POST http://localhost:8080/nuxeo/site/management/elasticsearch/{REPOSITORY_NAME}/optimize
```

**Path Parameters**

| Parameter Name        | Type       | Required | Description          |
| --------------------- | ---------- | -------- | -------------------- |
| **REPOSITORY_NAME**   | **string** |    Yes   | The repository name. |

**Status Codes**

- 204 *No Content* - Success.

**Sample**

To optimize the `default` repository:

```curl
curl -X POST -u Administrator:Administrator \
http://localhost:8080/nuxeo/site/management/elasticsearch/default/optimize

```
### Probes Endpoint

#### Get Probe Information

```
GET http://localhost:8080/nuxeo/site/management/probes/{PROBE_NAME}
```

**Path Parameters**

| Parameter Name | Type       | Required | Description                                           |
| ---------------| ---------- | -------- | ----------------------------------------------------- |
| **PROBE_NAME** | **string** |    No    | The probe name. If not specified, returns all probes. |

**Response**

If successful, returns a JSON representation of the requested probe information.

**Status Codes**

- 200 *OK* - Success.
- 404 *Not Found* - Probe with the given `PROBE_NAME` does not exist.

**Sample**

To get the `ldapDirectories` probe information:

```curl
curl -u Administrator:Administrator \
http://localhost:8080/nuxeo/site/management/probes/ldapDirectories
```

```json
{
  "name": "ldapDirectories",
  "status": {
    "neverExecuted": true,
    "success": false,
    "infos": {
      "info": "[unavailable]"
    }
  },
  "history": {
    "lastRun": null,
    "lastSuccess": "1970-01-01T00:00:00",
    "lastFail": "1970-01-01T00:00:00"
  },
  "counts": {
    "run": 0,
    "success": 0,
    "failure": 0
  },
  "time": 0
}
```

To get all probes:

```curl
curl -u Administrator:Administrator \
http://localhost:8080/nuxeo/site/management/probes
```

```json
{
  "entity-type": "probes",
  "entries": [
    {
      "name": "ldapDirectories",
      "status": {
        "neverExecuted": true,
        "success": false,
        "infos": {
          "info": "[unavailable]"
        }
      },
      "history": {
        "lastRun": null,
        "lastSuccess": "1970-01-01T00:00:00",
        "lastFail": "1970-01-01T00:00:00"
      },
      "counts": {
        "run": 0,
        "success": 0,
        "failure": 0
      },
      "time": 0
    },

    ...other happy probes...

  ]
}
```

#### Run a Probe

```
POST http://localhost:8080/nuxeo/site/management/probes/{PROBE_NAME}
```

**Path Parameters**

| Parameter Name | Type       | Required | Description     |
| ---------------| ---------- | -------- | --------------- |
| **PROBE_NAME** | **string** |    Yes   | The probe name. |

**Sample**

```curl
curl -X POST -u Administrator:Administrator \
http://localhost:8080/nuxeo/site/management/probes/ldapDirectories
```

**Response**

If successful, returns a JSON representation of the run probe information.

**Status Codes**

- 200 *OK* - Success.
- 404 *Not Found* - Probe with the given `PROBE_NAME` does not exist.

```json
{
  "name": "ldapDirectories",
  "status": {
    "neverExecuted": false,
    "success": true,
    "infos": {
      "info": "No configured LDAP directory"
    }
  },
  "history": {
    "lastRun": "2019-10-31T16:45:49.514",
    "lastSuccess": "2019-10-31T16:45:49.514",
    "lastFail": "1970-01-01T00:00:00"
  },
  "counts": {
    "run": 1,
    "success": 1,
    "failure": 0
  },
  "time": 1
}
```

### Renditions

#### Recompute Picture Views

To recompute the picture views for the documents matching a given [NXQL]({{page page='nxql'}}) query.

```
POST http://localhost:8080/nuxeo/site/management/renditions/pictures/recompute
```

**Body Parameters**

| Parameter Name        | Type       | Required | Description    |
| --------------------- | ---------- | -------- | -------------- |
| **query**             | **string** |    No    | An NXQL query. |


**Response**

If successful, returns a JSON representation of a [Bulk Action Status]({{page page='bulk-action-framework'}}#bulk-rest-api).

**Status Codes**

- 200 *OK* - Success.

**Sample**

To recompute the picture views for the documents matching a given query:

```curl
curl -X POST -u Administrator:Administrator \
http://localhost:8080/nuxeo/site/management/renditions/pictures/recompute \
-d 'query=SELECT * FROM Document WHERE ecm:mixinType = "Picture"'
```

```json
{
   "entity-type": "bulkStatus",
   "commandId": "93baf453-5d34-4bb9-9370-54ec4ffe78b2",
   "state": "SCHEDULED",
   "processed": 0,
   "error": false,
   "errorCount": 0,
   "total": 0,
   "action": "recomputeViews",
   "username": "system",
   "submitted": "2019-07-26T12:10:07.567Z",
   "scrollStart": null,
   "scrollEnd": null,
   "processingStart": null,
   "processingEnd": null,
   "completed": null,
   "processingMillis": 0
}
```

**Default Query**

If no query is provided, the picture views recomputation is launched on the following default query:
```
SELECT * FROM Document
  WHERE ecm:mixinType = 'Picture' AND picture:views/*/title IS NULL
```

#### Recompute Thumbnails

To recompute the thumbnails of the documents matching a given [NXQL]({{page page='nxql'}}) query.

```
POST http://localhost:8080/nuxeo/site/management/renditions/thumbnails/recompute
```

**Body Parameters**

| Parameter Name        | Type       | Required | Description                                |
| --------------------- | ---------- | -------- | ------------------------------------------ |
| **query**             | **string** |    No    | An NXQL query to select a set of documents.|


**Response**

If successful, returns a JSON representation of a [Bulk Action Status]({{page page='bulk-action-framework'}}#bulk-rest-api).

**Status Codes**

- 200 *OK* - Success.

**Sample**

To recompute the thumbnails for the documents matching a given query:

```curl
curl -X POST -u Administrator:Administrator \
http://localhost:8080/nuxeo/site/management/renditions/thumbnails/recompute \
-d 'query=SELECT * FROM Document WHERE ecm:mixinType = "Thumbnail"'
```

```json
{
   "entity-type": "bulkStatus",
   "commandId": "0e1e6800-631a-4e04-a47c-241ea7b3596a",
   "state": "SCHEDULED",
   "processed": 0,
   "error": false,
   "errorCount": 0,
   "total": 0,
   "action": "recomputeThumbnails",
   "username": "system",
   "submitted": "2019-07-26T12:13:31.361Z",
   "scrollStart": null,
   "scrollEnd": null,
   "processingStart": null,
   "processingEnd": null,
   "completed": null,
   "processingMillis": 0
}
```

**Default Query**

If no query is provided, the thumbnail recomputation is launched on the following default query:
```
SELECT * FROM Document
  WHERE ecm:mixinType = 'Thumbnail' AND thumb:thumbnail/data IS NULL
    AND ecm:isVersion = 0 AND ecm:isProxy = 0 AND ecm:isTrashed = 0
```

### Running Status Endpoint

To get all the health check statuses.

```
GET http://localhost:8080/nuxeo/site/management/runningStatus
```

**Response**

If successful, returns a JSON representation of the health probes information.

**Status Codes**

- 200 *OK* - Success.

**Sample**

```curl
curl -u Administrator:Administrator \
http://localhost:8080/nuxeo/site/management/runningStatus
```

```json
{
  "runtimeStatus": "ok",
  "elasticSearchStatus": "ok",
  "ldapDirectories": "ok",
  "repositoryStatus": "ok"
}
```

### WorkManager Endpoint

To repair works in failure.</br>
When a [Nuxeo Stream]({{page page='nuxeo-stream'}}) work fails, it is stored in a [Dead Letter Queue](https://jira.nuxeo.com/browse/NXP-27148) (DLQ). When the cause of the failure requires manual intervention (fix a misconfiguration, restart a service, fix a full disk, re-deployment, etc.) a retry policy is not enough. The failing works can be relaunched by using the endpoint as below:

```
POST http://localhost:8080/nuxeo/site/management/workmanager/runworksinfailure
```

**Body Parameters**

| Parameter Name        | Type       | Required | Description                            |
| --------------------- | ---------- | -------- | -------------------------------------- |
| **timeoutSeconds**    | **int**    |    No    | The work execution timeout in seconds. |

**Response**

If successful, returns a JSON representation of a [Bulk Action Status]({{page page='bulk-action-framework'}}#bulk-rest-api).

**Status Codes**

- 200 *OK* - Success.

**Sample**

To specify an execution timeout:

```curl
curl -X POST -u Administrator:Administrator \
http://localhost:8080/nuxeo/site/management/workmanager/runworksinfailure
-d timeoutSeconds=10
```

```json
{
 "total": 0,
 "success": 0
}
```
