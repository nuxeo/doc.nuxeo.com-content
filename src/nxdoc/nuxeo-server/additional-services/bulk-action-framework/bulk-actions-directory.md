---
title: Bulk Actions Directory
review:
    comment: ''
    date: '2018-11-22'
    status: ok
labels:
    - bulk
    - bulk-component
toc: true
---

## Directory

Nuxeo provides several actions for the Bulk Action Framework:

| Action name                             | Description                                             | Parameters                                                         | Java Class                                                                                                                                      |
| --------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [`setProperties`](#setpropertiesaction) | Allow to set several properties on each document        | Parameters represent the couple (xpath, value) to set              | [SetPropertiesAction](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/bulk/action/SetPropertiesAction.html)              |
| `setSystemProperties`                   | Allow to set several system properties on each document | Parameters represent the couple (xpath, value) to set              | [SetSystemPropertiesAction](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/bulk/action/SetSystemPropertiesAction.html)  |
| [`csvExport`](#csvexportaction)         | Allow to export several documents as a csv file         | Parameters represent the options (schemas, xpaths, zip/sort, lang) | [CSVExportAction](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/csv/export/action/CSVExportAction.html)            |

## Examples

Let's see some examples of bulk actions in use.

### SetPropertiesAction

The following example shows how to use `setPropertiesAction` with Java Service:

{{! multiexcerpt name='baf-set-properties-action-java-example'}}
```java
// build command
BulkCommand command = new BulkCommand.Builder(SetPropertiesAction.ACTION_NAME,
        "SELECT * from Document").repository("default")
                                 .user("Administrator")
                                 .param("dc:nature", "article")
                                 .param("dc:subjects", Collections.singletonList("art/architecture"))
                                 // default is FALSE
                                 .param(SetPropertiesAction.PARAM_DISABLE_AUDIT, Boolean.TRUE)
                                 // default is null - only NONE can be set
                                 .param(SetPropertiesAction.PARAM_VERSIONING_OPTION, "NONE")
                                 .build();

// run command
BulkService bulkService = Framework.getService(BulkService.class);
String commandId = bulkService.submit(command);

// await end of computation
bulkService.await(commandId, Duration.ofMinutes(1));

// get status
BulkStatus status = bulkService.getStatus(commandId);
```
{{! /multiexcerpt}}

You can submit the same command through REST and [Search endpoint]({{page page='search-endpoints'}}):

{{! multiexcerpt name='baf-set-properties-action-rest-example'}}
```bash
curl -u Administrator:Administrator \
     -H 'Content-Type: application/json' \
     -X POST 'http://localhost:8080/nuxeo/api/v1/search/bulk/setProperties?query=SELECT * FROM Document' \
     -d '{
           "dc:nature": "article",
           "dc:subjects": ["art/architecture"],
           "disableAuditLogger": true,
           "versioningOption": "NONE"
         }'
```
{{! /multiexcerpt}}

### CSVExportAction

It exports requested documents as a CSV File which can be sorted and zipped.

System properties are always exported as first columns, then all the properties from provided schemas and xpaths are exported if they can be found.

For exported multi-valued properties, the values are separated from each other with the pipe `|` character.

```
... ,dc:contributors, ...
... , user1 | user2 , ...  
```

The following example shows how to use `csvExportAction` with Java Service:

{{! multiexcerpt name='baf-csv-export-action-java-example'}}
```java
// build command
ImmutableList<String> xpaths = ImmutableList.of("file:content/name", "file:content/length");
BulkCommand command = new BulkCommand.Builder(CSVExportAction.ACTION_NAME, "SELECT * from Document")
        .repository("default")
        .user("Administrator")
        .param(CSVProjectionComputation.PARAM_SCHEMAS, Collections.singletonList("dublincore"))
        .param(CSVProjectionComputation.PARAM_XPATHS, xpaths)
        .param(CSVProjectionComputation.PARAM_LANG, "fr") // default is context Locale
        .param(SortBlob.SORT_PARAMETER, Boolean.FALSE) // default is TRUE
        .param(ZipBlob.ZIP_PARAMETER, Boolean.TRUE) // default is FALSE
        .build();



// run command
BulkService bulkService = Framework.getService(BulkService.class);
String commandId = bulkService.submit(command);

// await end of computation
bulkService.await(commandId, Duration.ofMinutes(1));

// get status
BulkStatus status = bulkService.getStatus(commandId);
```
{{! /multiexcerpt}}

You can submit the same command through REST and [Search endpoint]({{page page='search-endpoints'}}):

{{! multiexcerpt name='baf-csv-export-action-rest-example'}}
```bash
curl -u Administrator:Administrator \
     -H 'Content-Type: application/json' \
     -X POST 'http://localhost:8080/nuxeo/api/v1/search/bulk/csvExport?query=SELECT * FROM Document' \
     -d '{
           "schemas": ["dublincore"],
           "xpaths": ["file:content/name", "file:content/length"],
           "lang": "fr",
           "sort": false,
           "zip": true
         }'
```
{{! /multiexcerpt}}

And then get the status containing the URL to the result:

```bash
curl -u Administrator:Administrator \
     -H 'Content-Type: application/json' \
     -X GET 'http://localhost:8080/nuxeo/api/v1/bulk/<id-from-previous-command>'
```
