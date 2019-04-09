---
title: Query and Search
description: Learn how to search content through NXQL queries or calls to page providers using the Nuxeo JavaScript Client and the REST API.
review:
    comment: 'Separate pages'
    date: '2017-02-20'
    status: ok
labels:
    - multiexcerpt-include
toc: true
tree_item_index: 700
previous_link: nxdoc/manipulate-documents
next_link: nxdoc/execute-business-logic-through-automation

---

Using the JS client, the [`Repository`](https://nuxeo.github.io/nuxeo-js-client/latest/Repository.html)'s `query` method can be used to launch NXQL queries or call page providers.

## Launching NXQL Queries

Specify the NXQL query to be launched in the query property:

```javascript
nuxeo.Repository().query({ 'query': myQuery })...
```
where `myQuery` is a variable containing the query to launch.

{{#> panel type='code' heading='Sample NXQL Query for a Fulltext Search'}}

```sql
SELECT * FROM Document
	WHERE ecm:mixinType != 'HiddenInNavigation'
	AND ecm:isProxy = 0
	AND ecm:isVersion = 0
	AND ecm:currentLifeCycleState != 'deleted'
	AND ecm:fulltext LIKE 'MyKeyword'
```

{{/panel}}

See the [NXQL]({{page version='' space='nxdoc' page='nxql'}}) documentation for other possibilities.

## Calling Page Providers

A page provider is the underlying query when creating a content view in Nuxeo Studio.

To call page providers:

*   Specify the content view ID, as defined in Nuxeo Studio in the `pageProvider` property.
*   Pass an array containing the parameters in the `queryParams` property in the same order as they are defined in the content view.

```javascript
nuxeo.Repository().query({ 'pageProvider': 'pageProviderId', queryParams['parameter1', 'parameter2'...] })...
```

### Practice - Querying and Searching

**Calling Page Providers**

1.  Download [callPageProvider.js]({{file name='callPageProvider.js'}}) or open in another tab to copy and paste.
2.  Replace `NUXEO_SERVER` with your Nuxeo Server URL.
3.  Define query options, calling the `DefaultContentListingInNavigation` content view defined in Nuxeo Studio and passing it the UID of an existing parent document as a parameter. The query result should return the document's children as objects.
4.  Pass the result to the `assertResult` method.
5.  When your code is ready, run it with the following command:
    ```bash
    $ node callPageProvider.js
    ```


{{#> accordian heading='Calling Page Providers - Solution' closed='true'}}

```javascript

const Nuxeo = require('nuxeo');

var nuxeo = new Nuxeo({
  // Replace with your Nuxeo Server URL
  baseURL: 'http://NUXEO_SERVER/nuxeo',
  auth: {
    method: 'basic',
    username: 'Administrator',
    password: 'Administrator'
  },
});

nuxeo.schemas("*");

// Define query options
var queryOpts = {
  "pageProvider": "DefaultContentListingInNavigation",
  // Replace with UID of existing parent document
  "queryParams": ["11857bce-4a0f-4bc2-b679-4216b4bf216b"]
};

nuxeo
  .repository()
  .query(queryOpts)
  .then(function(result) {
    console.log("QUERY RESULTS:")
    console.log(result);
    // Pass the call result to the method below
    assertResult(result);
  })
  .catch(function(error) {
    throw error;
  });


/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult(result) {
  if (Array.isArray(result)) {
    console.log("Please pass the query result to complete this exercise.");
    return false;
  }

  if (Array.isArray(result)) {
  	if(result.length > 0) {
    	if(result[0]['entity-type'] !== 'document') {
        console.log("You didn't retrieve any documents. Check the page provider and queryParams.");
        return false;
      }
    }
  }

  console.log('Congratulations, you have successfully completed this exercise.');
}

```

{{/accordian}}



**Launching NXQL Queries**

1.  Download [nxqlQuery.js]({{file name='nxqlQuery.js'}}) or open in another tab to copy and paste.
2.  Replace `NUXEO_SERVER` with your Nuxeo Server URL.
3.  Define an NXQL query that will return all documents created TODAY. Exclude proxies, archived versions and deleted (trashed) documents.
4.  Add query to `queryOpts` and launch the query.
5.  Pass the result to the `assertResult` method.
6.  When your code is ready, run it with the following command:
    ```bash
    $ node nxqlQuery.js
    ```

{{#> accordian heading='Launching NXQL Queries - Solution' closed='true'}}

```javascript

const Nuxeo = require('nuxeo');

var nuxeo = new Nuxeo({
  // Replace with your Nuxeo Server URL
  baseURL: 'http://NUXEO_SERVER/nuxeo',
  auth: {
    method: 'basic',
    username: 'Administrator',
    password: 'Administrator'
  },
});

nuxeo.schemas("*");

// Define an NXQL query that will return all documents created TODAY
var queryToLaunch = "SELECT * FROM Document	"
// Change to today's date
	+ " WHERE dc:created >= DATE '2017-02-09' "
  + " AND ecm:isVersion = 0 "
  + " AND ecm:isProxy = 0 "
  + " AND ecm:currentLifeCycleState != 'deleted' ";

// Add query to query options
var queryOpts = {
  "query": queryToLaunch
};

// Launch query
nuxeo
  .repository()
  .query(queryOpts)
  .then(function(result) {
    console.log(result);
    // Pass the call result to the method below
    assertResult(result);
  })
  .catch(function(error) {
    throw error;
  });


/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult(result) {
  if (typeof queryToLaunch === 'undefined') {
    console.log("\"queryToLaunch\" is undefined.");
    return false;
  }

  if (!queryToLaunch.includes('ecm:isVersion') &&
      !queryToLaunch.includes('ecm:isVersion')
    ) {
    console.log("Exclude archived versions from query.");
    return false;
  }

  if (!queryToLaunch.includes('ecm:isProxy')) {
    console.log("Exclude proxies from query.");
    return false;
  }

  if (!queryToLaunch.includes('ecm:currentLifeCycleState') ||
      !queryToLaunch.includes('deleted')
    ) {
    console.log("Exclude deleted documents from query.");
    return false;
  }

  if (!Array.isArray(result.entries)) {
  console.log();
  console.log(result);
    console.log("Please pass the query result to complete this exercise.");
    return false;
  }

  if (Array.isArray(result.entries)) {
    if (result.length > 0) {
      if (result[0]['entity-type'] !== 'document') {
        console.log("You didn't retrieve any documents. Check your NXQL query and syntax.");
        return false;
      }
    }
  }

  console.log('Congratulations, you have successfully completed this exercise.');
}

```

{{/accordian}}

## Notes about Elasticsearch and the Passthrough API

**Where is the query launched?**

By default, NXQL queries use the database, but you can change this to use the ElasticSearch index when creating a page provider.

**How Can I Take Advantage of all the Elasticsearch Features?**

Nuxeo provides a [passthrough API for Elasticsearch]({{page version='' space='nxdoc' page='elasticsearch-passthrough'}}) that lets you benefit from the Elasticsearch API while handling security. When using it, queries are written using the Elasticsearch API, but they are actually sent to Nuxeo Platform that reworks them. We won't cover this aspect during this tutorial but you can head to the [Elasticsearch documentation](https://www.elastic.co/guide) for more information.
