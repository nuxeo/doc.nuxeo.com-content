---
title: Bulk Actions Directory
review:
    comment: ''
    date: '2018-08-10'
    status: ok
labels:
    - bulk
    - bulk-component
toc: true
---

## Directory

Nuxeo provides several actions for BAF:

| Action name                             | Description                                             | Parameters                                            | Java Class                                                                                                                                      |
| --------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [`setProperties`](#setpropertiesaction) | Allow to set several properties on each document        | Parameters represent the couple (xpath, value) to set | [SetPropertiesAction](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/bulk/actions/SetPropertiesAction.html)             |
| `setSystemProperties`                   | Allow to set several system properties on each document | Parameters represent the couple (xpath, value) to set | [SetSystemPropertiesAction](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/bulk/actions/SetSystemPropertiesAction.html) |

## Examples

Let's see some examples of use of bulk actions.

### SetPropertiesAction

The following is an example of use of _setPropertiesAction_ with java service:

{{! multiexcerpt name='baf-set-properties-action-java-example'}}
```
// build command
BulkCommand command = new BulkCommand().withRepository("default")
                                       .withUsername("Administrator")
                                       .withQuery("SELECT * from Document")
                                       .withAction(SetPropertiesAction.ACTION_NAME)
                                       .withParam("dc:nature", "article")
                                       .withParam("dc:subjects", singletonList("art/architecture"));

// run command
BulkService bulkService = Framework.getService(BulkService.class);
String commandId = bulkService.submit(command);

// await end of computation
bulkService.await(commandId, ofMinutes(1));

// get status
BulkStatus status = bulkService.getStatus(commandId);
```
{{! /multiexcerpt}}

You can submit the same command through REST and [Command endpoint]({{page page='command-endpoint'}}):

{{! multiexcerpt name='baf-set-properties-action-operation-example'}}
```
curl -X POST -H 'Content-Type: application/json' -u Administrator:Administrator \
    http://localhost:8080/nuxeo/api/v1/automation/Bulk.RunAction \
    -d '{
            "params":{
                "query":"SELECT * FROM Document",
                "action":"setProperties",
                "parameters":{
                    "dc:nature":"article",
                    "dc:subjects":["art/architecture"]
                }
            }
        }'
```
{{! /multiexcerpt}}
