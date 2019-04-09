---
title: Execute Business Logic through Automation
description: Learn how to execute business logic using Automation, the REST API and the Nuxeo JavaScript Client.
review:
    comment: 'Separate pages'
    date: '2017-02-20'
    status: ok
toc: true
tree_item_index: 800
previous_link: nxdoc/query-and-search
next_link: nxdoc/launch-a-workflow

---

Automation [operations]({{page version='' space='nxdoc' page='contributing-an-operation'}}), [chains]({{page page='how-to-create-an-automation-chain'}}) and [scripts]({{page page='automation-scripting'}}) can all be called with the Nuxeo JavaScript client.

## About Automation

**When You Should Use Automation**

Whenever you want to execute some business logic and leverage Nuxeo Platform functionalities.

**Why You Should Use Automation Chains or Scripts**

Every call to the REST API is a single transaction:

*   By using automation chains or scripts, you can execute several unitary operations in a single call.
*   Automation chains and scripts are executed as a single transaction: Either the whole chain or script is executed and the transaction is committed, or it is rolled back entirely.
*   Therefore, you should use them whenever you need to execute logic that would require several calls as a single transaction.

**How to Make Chains or Scripts Available through the REST API**

As soon as you create one of them in Nuxeo Studio and deploy your configuration in Nuxeo Platform, the feature is available and can be called using the REST API. That's all!

**How To Call Automation Operations, Chains, or Scripts**

Using the JS client's [`Operation`](https://nuxeo.github.io/nuxeo-js-client/latest/Operation.html) object.

{{#> panel type='code' heading='Call a Chain or Script'}}

```javascript
nuxeo.operation('MyChainOrScriptId')
// Input docId, path or Document object
  .input('docId')
  .params({
    'parameterName': 'parameterValue'
  })
  .context({
    'variableName': 'variableValue',
  })
  .execute()
  .then(function(result) {
	// Do something with the result
  })
  .catch(function(error) {
    throw error);
  });
```

{{/panel}}

Note that automation scripts are prefixed by `javascript.` So if your automation script is called `myScript` in Nuxeo Studio, you should call `javascript.myScript`.  

### Practice - Executing Business Logic

**Automation Script Definition**

1.  Download [addToCollection.js]({{file name='addToCollection.js'}}) or open in another tab to copy the code.
2.  In Nuxeo Studio, create a new automation script called `addToCollection`  and paste the code from the file addToCollection.js.
3.  Check if the `collectionName` context variable is set, otherwise set it.
4.  Retrieve the user's workspace and set as the `userWorkspace` variable.
5.  If the collection variable is null, create a collection with the context variable's `collectionName` value and place it in the `collection` variable. The collection should be created in the user workspace.
6.  Add the document to the collection.
7.  Save the `addToCollection` automation script.
8.  Deploy your Studio project on your Nuxeo Platform instance or perform a Hot Reload from the **Dev Tool extension**.

{{#> accordian heading='addToCollection Automation Script - Solution' closed='true'}}

```javascript

function run(input, params) {

// Check if the collectionName context variable is set, otherwise set it
  if(!ctx.collectionName) {
    ctx.collectionName = "My Collection";
  }

// Retrieve the user's workspace and set as the userWorkspace variable
  var userWorkspace = User.GetUserWorkspace(
    input, {
  });

  var collection = getCollectionInUserWorkspace(input, ctx.collectionName);
// If the collection variable is null, create a collection with the context variable's collectionName value and place it in the collection variable. The collection should be created in the user workspace.
  if(!collection) {
    collection = Collection.Create(
      userWorkspace, {
        'name': ctx.collectionName,
        'description': ""
      }
    );
  }

// Add the document to the collection
  Document.AddToCollection(
    input, {
      'collection': collection
    }
  );

	return input;
}



/******
DO NOT EDIT BELOW THIS LINE
******/

// Return the collection (or null if it doesn't exist)
function getCollectionInUserWorkspace(input, collectionName) {
  var userWorkspace = User.GetUserWorkspace(
    input, {
    }
  );
  var userWorkspacePath = userWorkspace.path;
  var queryResults = Repository.Query(
    input, {
      'query': "SELECT * FROM Collection WHERE dc:title = '"+ collectionName  +"' AND ecm:path STARTSWITH '"+ userWorkspacePath +"'",
    }
  );
  if(queryResults.length === 0) {
    return;
  }
  return queryResults[0];
}

```

{{/accordian}}

**Node.js Script Definition**

1.  Download [businessLogic.js]({{file name='businessLogic.js'}}) or open in another tab to copy the code.
2. Replace `NUXEO_SERVER` with your Nuxeo Server URL.
3. Retrieve an existing document using its ID or path.
4. Call the `addToCollection` automation script and pass the document as its input.
5. Add a `collectionName` as a context variable.
6. Pass the result to the `assertResult` method.
7. When your code is ready, run it with the following command:

    ```bash
    $ node businessLogic.js
    ```

{{#> accordian heading='Executing Business Logic - Solution' closed='true'}}

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

nuxeo.repository()
// Retrieve a document using its ID or path
// (Replace with existing document UID or path)
  .fetch('9e7b87b6-affe-44eb-ac05-9fe057e52ee3')
// Call the automation script passing the document as input
  .then(function(document) {
    nuxeo.operation('javascript.addToCollection')
    .input(document)
    .context({
// Add a collectionName as a context variable
      'collectionName':'My Collection'
    })
    .execute()
    .then(function(result) {
// Pass the result to the collection below
      assertResult(result);
    })
    .catch(function(error) {
      throw error;
    })
  });

/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult(result) {
  console.log(result);
  if (result['entity-type'] === 'string') {
    console.log("Pass the document variable as an input for your operation.");
    return false;
  }

  if (!result.facets.includes("CollectionMember")) {
    console.log("The document has not been added to a collection.");
    return false;
  }

  console.log('Congratulations, you have successfully completed this exercise.');
}

```

{{/accordian}}

## Restricting Automation Calls - Defining Security Measures

Sometimes you might need to create automation operations or chains that shouldn't be accessible to everybody. Nuxeo Studio allows you to apply restrictions to them.

In the **Configuration** menu, choose **Advanced Settings** > **Web Services Filtering** and create a new filter. You can then choose to restrict or disable operations and chains.
