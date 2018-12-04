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
```
// build command
BulkCommand command = new BulkCommand.Builder(SetPropertiesAction.ACTION_NAME, "SELECT * from Document")
                                       .repository("default")
                                       .user("Administrator")
                                       .param("dc:nature", "article")
                                       .param("dc:subjects", ImmutableList.of("art/architecture"))
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

You can submit the same command through REST and [Command endpoint]({{page page='command-endpoint'}}):

{{! multiexcerpt name='baf-set-properties-action-operation-example'}}
```
curl -u Administrator:Administrator \
 -H 'Content-Type: application/json' \
 -X POST 'http://localhost:8080/nuxeo/api/v1/automation/Bulk.RunAction' \
-d '{"params":{
        "query":"SELECT * FROM Document",
        "action":"setProperties",
        "parameters":"{\"dc:nature\":\"article\",\"dc:subjects\":[\"art\/architecture\"]}"
        }
    }'
```
{{! /multiexcerpt}}

### CSVExportAction

It exports requested documents as a CSV File which can be sorted and zipped.

System properties are always exported as first columns, then all the properties from provided schemas and xpaths are exported if they can be found.

The following example shows how to use `csvExportAction` with Java Service:

{{! multiexcerpt name='baf-csv-export-action-java-example'}}
```
// build command
BulkCommand command = new BulkCommand.Builder(CSVExportAction.ACTION_NAME, "SELECT * from Document")
                                       .repository("default")
                                       .user("Administrator")
                                       .param(CSVProjectionComputation.PARAM_SCHEMAS, ImmutableList.of("dublincore"))
                                       .param(CSVProjectionComputation.PARAM_XPATHS, ImmutableList.of("cpx:complex/foo"))
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

You can submit the same command through REST and [Command endpoint]({{page page='command-endpoint'}}):

{{! multiexcerpt name='baf-csv-export-action-operation-example'}}
```
curl -u Administrator:Administrator \
 -H 'Content-Type: application/json' \
 -X POST 'http://localhost:8080/nuxeo/api/v1/automation/Bulk.RunAction' \
 -d '{"params":{
        "query":"SELECT * FROM Document",
        "action":"csvExport",
        "parameters":"{\"schemas\":[\"dublincore\"],\"xpaths\":[\"cpx:complex\/foo\"],\"lang\":\"fr\",\"sort\":false,\"zip\":true}"
	    }
     }'

```
{{! /multiexcerpt}}

And then get the status containing the URL to the result:

```
curl -u Administrator:Administrator \
 -H 'Content-Type: application/json' \
 -X GET 'http://localhost:8080/nuxeo/api/v1/bulk/<id-from-previous-command>'
```
