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

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-2">Action name</th>
        <th class="small-3">Description</th>
        <th class="small-5">Parameters</th>
        <th class="small-2">Java Class</th>
      </tr>
      <tr>
        <td>[`setProperties`](#setpropertiesaction)</td>
        <td>Allow to set several properties on each document</td>
        <td>Parameters represent the couple (xpath, value) to set</td>
        <td>[SetPropertiesAction](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/bulk/action/SetPropertiesAction.html)</td>
      </tr>
      <tr>
        <td>[`csvExport`](#csvexportaction)</td>
        <td>Allow to export several documents as a csv file</td>
        <td>Parameters represent the options (schemas, xpaths, zip/sort, lang)</td>
        <td>[CSVExportAction](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/csv/export/action/CSVExportAction.html)</td>
      </tr>
      <tr>
        <td>[`automation`](#automationbulkaction)</td>
        <td>Allow to run an automation on each document</td>
        <td>Parameters represent the automation to run and parameters to give to it (operationId/parameters)</td>
        <td>[AutomationBulkAction](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/automation/core/operations/services/bulk/AutomationBulkAction.html)</td>
      </tr>
    </tbody>
  </table>
</div>

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

To allow enhanced performances, 2 optional parameters can be passed to the `SetPropertiesAction`:

- `disableAuditLogger`, from NXAuditEventsService.DISABLE_AUDIT_LOGGER, disables audit logging and is meant to be used with `true` and is `false` by default.
- `VersioningOption`, from VersioningService.VERSIONING_OPTION, disables auto versioning and is meant to be used with `NONE`.

For example:
```
BulkCommand command = new BulkCommand.Builder(SetPropertiesAction.ACTION_NAME, "SELECT * from Document")
        .repository("default")
        .user("Administrator")
        .param("dc:nature", "article")
        .param("dc:subjects", ImmutableList.of("art/architecture"))
        .param("disableAuditLogger", Boolean.TRUE) // Disables audit logging
        .param("VersioningOption", "NONE") // Disables auto versioning
        .build();
```

### CSVExportAction

It exports requested documents as a CSV File which can be sorted and zipped.

System properties are always exported as first columns, then all the properties from provided schemas and xpaths are exported if they can be found.

For exported multi-valued properties, the values are separated from each other with the pipe `|` character.

```
... ,dc:contributors, ...
... , user1 | user2 , ...
```

For vocabulary properties, the value is exported as a column and the label is also exported within a second column sideway labeled `property [label]`

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

### AutomationBulkAction

The following example shows how to bulk edit document using `automation` action and [Search endpoint]({{page page='search-endpoints'}}):

```bash
curl -u Administrator:Administrator \
     -H 'Content-Type: application/json' \
     -X POST 'http://localhost:8080/nuxeo/api/v1/search/bulk/automation?query=SELECT * FROM Document' \
     -d '{
           "operationId": "Document.Update",
           "parameters": {
             "properties": "dc:nature=article"
           }
         }'
```
