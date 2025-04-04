---
title: Automation Scripting
description: Automation Scripting is a Nuxeo module which provides ability to create and contribute Automation chain/operation in JavaScript.
review:
    comment: ''
    date: '2019-05-02'
    status: ok
labels:
    - lts2016-ok
    - automation
    - javascript
    - troger
    - link-update
    - scripting
    - university
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '18451738'
    ajs-parent-page-title: Automation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Automation+Scripting
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Automation+Scripting'
    page_id: '24674349'
    shortlink: LYB4AQ
    shortlink_source: 'https://doc.nuxeo.com/x/LYB4AQ'
    source_link: /display/NXDOC/Automation+Scripting
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-08-11 08:19'
        message: ''
        version: '36'
    -
        author: Solen Guitter
        date: '2016-08-10 15:38'
        message: ''
        version: '35'
    -
        author: Solen Guitter
        date: '2016-08-10 15:04'
        message: ''
        version: '34'
    -
        author: Solen Guitter
        date: '2016-08-05 13:42'
        message: ''
        version: '33'
    -
        author: Manon Lumeau
        date: '2016-06-09 15:52'
        message: ''
        version: '32'
    -
        author: Manon Lumeau
        date: '2016-04-29 09:15'
        message: 'Video added '
        version: '31'
    -
        author: Michael Gena
        date: '2016-03-25 16:04'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2016-02-03 16:02'
        message: ''
        version: '29'
    -
        author: Alain Escaffre
        date: '2016-01-27 13:45'
        message: ''
        version: '28'
    -
        author: Alain Escaffre
        date: '2016-01-27 13:44'
        message: ''
        version: '27'
    -
        author: Vladimir Pasquier
        date: '2015-11-19 16:05'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2015-10-29 08:39'
        message: format
        version: '25'
    -
        author: Vladimir Pasquier
        date: '2015-10-28 15:52'
        message: ''
        version: '24'
    -
        author: Bertrand Chauvin
        date: '2015-10-12 09:06'
        message: ''
        version: '23'
    -
        author: Bertrand Chauvin
        date: '2015-10-12 09:04'
        message: Removed empty macro
        version: '22'
    -
        author: Solen Guitter
        date: '2015-09-29 13:01'
        message: Fix requirements section
        version: '21'
    -
        author: Solen Guitter
        date: '2015-09-29 12:54'
        message: Add requirement section
        version: '20'
    -
        author: Solen Guitter
        date: '2015-09-29 12:43'
        message: Clean up lists formatting
        version: '19'
    -
        author: Solen Guitter
        date: '2015-09-29 12:36'
        message: Code blocks formatting
        version: '18'
    -
        author: Vladimir Pasquier
        date: '2015-07-06 14:53'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2015-06-02 08:02'
        message: format
        version: '16'
    -
        author: Vladimir Pasquier
        date: '2015-06-01 15:54'
        message: ''
        version: '15'
    -
        author: Vladimir Pasquier
        date: '2015-05-27 12:57'
        message: ''
        version: '14'
    -
        author: Vladimir Pasquier
        date: '2015-05-27 12:53'
        message: ''
        version: '13'
    -
        author: Vladimir Pasquier
        date: '2015-05-26 12:44'
        message: ''
        version: '12'
    -
        author: Vladimir Pasquier
        date: '2015-05-25 18:38'
        message: ''
        version: '11'
    -
        author: Vladimir Pasquier
        date: '2015-05-25 18:34'
        message: ''
        version: '10'
    -
        author: Vladimir Pasquier
        date: '2015-05-25 18:31'
        message: ''
        version: '9'
    -
        author: Vladimir Pasquier
        date: '2015-05-25 18:29'
        message: ''
        version: '8'
    -
        author: Vladimir Pasquier
        date: '2015-05-25 18:28'
        message: ''
        version: '7'
    -
        author: Vladimir Pasquier
        date: '2015-05-25 18:28'
        message: ''
        version: '6'
    -
        author: Vladimir Pasquier
        date: '2015-05-25 16:34'
        message: ''
        version: '5'
    -
        author: Vladimir Pasquier
        date: '2015-05-25 16:33'
        message: ''
        version: '4'
    -
        author: Vladimir Pasquier
        date: '2015-05-25 16:31'
        message: ''
        version: '3'
    -
        author: Vladimir Pasquier
        date: '2015-05-25 16:26'
        message: ''
        version: '2'
    -
        author: Vladimir Pasquier
        date: '2015-05-25 16:25'
        message: ''
        version: '1'
---

{{! excerpt}}
Automation Scripting is a Nuxeo module which provides ability to create and contribute Automation chain/operation in JavaScript.
{{! /excerpt}}

This enables you to benefit from:

- Loops
- Conditions
- Smooth Automation implementation maintenance

{{#> callout type='info' heading='Hyland University'}}
Watch the related course on Hyland University:
[Course on Automation chains, Automation scripting and Events](https://university.hyland.com/courses/e4055)
![]({{file name='university-automation.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Requirements

Automation Scripting is using Java 8 Nashorn engine. To leverage all the Automation Scripting feature, the Nuxeo server needs to run **JDK 11**.

## How It Works

Nuxeo Automation Scripting allows you to write JavaScript code to use Automation operations and chains programmatically:

*   The whole script must be wrapped into the `run()` function

    ```js
    /**
     * Wrapper function for the whole script
     *
     * @param {org.nuxeo.ecm.automation.OperationContext} ctx The operation context.
     * @param input The automation input.
     * @param params The parameters of your different operations.
     */
    function run(input, params) {
    ...... your code ......
    }
    ```

*   Passing parameters and variables through the operation context and input.
*   Using operations/chains as JavaScript functions within this `run()` function

    ```js
    /* Automation operation to create a new version */
    input = Document.CreateVersion(input, {
	    /* required:false - type: string */
	    'increment': 'MAJOR',
	    /* required:false - type: boolean */
	    'saveDocument': 'true'
    });
    ```

*   Using `for/if/print` or any other JavaScript feature

    ```js
    if (docs.length > 3) {
      var index;
      for (index = 0; index < docs.length; ++index) {
        Document.SetProperty(docs[index], {
          /* required:true - type: string */
          'xpath': "dc:title",
          /* required:false - type: boolean */
          'save': true,
          /* required:false - type: serializable */
          'value': "renamed"
        });
      }
    }
    ```

*   Operation Context can be used to read or write variables through `ctx` JavaScript object:

    ```js
    function run(input, params) {

        var root = Repository.GetDocument(null, {
            "value" : "/"
        });

        var newDoc = Document.Create(root, {
            "type" : "File",
            "name" : "newDoc",
            "properties" : {
                "dc:title" : ctx.WorkflowVariables.var,
                "dc:description" : ctx.NodeVariables.var
            }
        });

        return newDoc;
    }
    ```

{{#> callout type='warning' }}

If one of your Automation chain or operation contains dashes (`-`) in their names/ids, Nuxeo Automation will prevent those characters and replace them with underscore (`_`).

**Example:**

*   Automation chain id: `my-chain-with-dashes`
*   Automation scripting usage:

    ```js
    var document = my_chain_with_dashes(input, {.......});
    ```

{{/callout}}

The following code example is bound to a simple event (Document created), to apply property value inheritance from the parent document, with some logging information messages.

```js
function run(input, params) {
  Console.log("Starting property inheritance");
  var parent = Document.GetParent(input, {
    /* required:false - type: string */
    'type': 'product'
  });

  if (parent) {
    input = Document.CopySchema(input, {
      /* required:true - type: string */
      'schema': 'product_catalog',
      /* required:false - type: string */
      'sourceId': parent.id
    });
    Console.log("product_catalog schema copied");
  }
}
```

## Use Cases

### Binding Automation Scripting to Action/Listener/Workflow

Automation Scripting allows Studio users to bind their JavaScript contribution to actions, listeners or workflows.

#### Action Binding

To bind an Automation JavaScript to an action:

1.  [Create your action]({{page page='how-to-add-a-button-in-the-jsf-ui'}}).
2.  In the **Action Execution**, select your custom operation.
    ![]({{file name='automation_scripting_action_binding.png'}} ?w=500,border=true)

#### Automation Chain Binding

*   Automation Scripting scripts can be executed within an Automation Chain, by using the operation `Execution Flow > Run Chain`. The ID must be formatted as `javascript.script_name`.
    ![]({{file name='automation_scripting_chain_binding.png'}} ?w=500,border=true)
*   Automation Scripting custom scripts can be used as well directly in Automation Chains from the category **Scripting** as follow:
    ![]({{file name='Screenshot 2015-05-25 18.16.50.png'}} ?w=500,h=166,border=true)

### Entering Data in a Complex Multi-Valued Field

To enter data in a complex multi-valued field, use `Document.Update` and pass a JSON array of objects in `properties`. For instance, a complex field `teamMembers` has two sub-fields `firstName` and `lastName`.

**To enter data when the field is empty:**

```js
var properties = {
  "dc:title": "My title",
  "my:teamMembers": [{"firstName": "John", "lastName": "Doe"}, {"firstName": "Jane", "lastName": "Smith"}]
};
input = Document.Update(input, {
  'properties': properties,
  'save': true
}); 
```

**To add values in an existing list:**

```js
var properties = {};
properties["my:teamMembers"] = input["my:teamMembers"];
properties["my:teamMembers"].push({"firstName": "Clark", "lastName": "Wayne"});
input = Document.Update(input, {
  'properties': properties,
  'save': true
});
```

### REST Call

Automation scripts can be called like any operation or chain using the Automation HTTP bridge. See [cURL sample]({{page page='using-curl'}}).

### Using Helpers

Platform Functions Helpers are available in Automation Scripting. You can use (like in [MVEL expression]({{page version='' space='nxdoc' page='use-of-mvel-in-automation-chains'}})) functions as follow:

```
Fn.getEmail("Administrator")
```

[Helper contributions]({{page page='automation-helpers'}}) are available to create custom functions to use directly in Automation Scripting and [MVEL]({{page page='use-of-mvel-in-automation-chains'}}).

### Dates Comparison

```js
function run(input, params) {

  // nowDate, javascript instantiated date should be ISO stringified as follow
  var nowDate = new Date().toISOString();

  // releaseDate, document property should be formatted and stringified as follow
  var releaseDate = Fn.calendar(input['ncf:releaseDate']).format("yyyy-MM-dd");

  // Then all comparaisons can be made
  var compare = (nowDate > releaseDate);
  if (compare) {
    Console.log("Now less than release date");
  } else {
    Console.log("Now greater than release date");
  }
}
```

### Event Context

It is possible to access to the event context. This can be really useful when trying to access some repository information before the document is created: Typically, you can't access parent properties on the "About to create" event without `ctx.Event.context.getProperty`:

```js
function run(input, params) {
  /* Use parentPath for Empty document created event, and parentRef for About to create event */
  var parentPath = ctx.Event.context.getProperty("parentPath");
  var parentDoc = Repository.GetDocument(null, {"value": parentPath});
  ...
}
```

It can be also interesting to use it when an automation chain/scripting is common to several event handlers: it helps to identify which event is called for example.

### JVM Nashorn Debugging

The Nashorn Engine provides a simple way to remotely debug Automation Scripts via the JVM for having a view on JavaScript variables status:

- Add the `debugger;` reserved method of Nashorn inside of your script where the debug session will begin.
- Run the Nuxeo server in debug JVM mode.
- Add a breakpoint directly inside the method `jdk.nashorn.internal.runtime.ScriptRuntime#DEBUGGER`.
- The IDE will break on this method once the script is executed.
- Actioning a step out during this debug session will show the current scope script variables view.

Example:

```js
function run(input, params) {
	var nowDate = new Date().toISOString();
	debugger;
	Console.log(nowDate);
}
```

### JavaScript Logging

You can use the helper "Console" to write logs within `NUXEO_HOME/log/server.log` with different log levels:

```js
Console.info("Informations");
Console.warn("Warnings");
Console.error("Errors");
```

### Getting Value From a Context Variable

To get the value of a Context Variable you should use the following syntax:

```js
ctx.get('var')
```

### Login as Another User

To login as another user, you must use the `Auth.LoginAs` operation:

```js
Auth.LoginAs(input, { name: "user1" });
```

When logging as another user, you must re-fetch the input with the new user. For convenience, the `Auth.LoginAs` operation re-fetch its input with the newly logged-in user:

```js
function(input, params) {
    var doc = Auth.LoginAs(input, { name: "user1" });
    // do something on doc as 'user1'
    Document.BlockPermissionInheritance(doc, {});
}
```

#### System User

To login as the system user, use `Auth.LoginAs` without any parameter:

```js
function(input, params) {
    var doc = Auth.LoginAs(input, {});
    // do something on doc as system user
    Document.BlockPermissionInheritance(doc, {});
}
```

#### Logout

After using the `Auth.LoginAs` operation, you can use the `Auth.Logout` operation to perform a logout. Assuming you call the following operation with the `user1` user:

```js
function(input, params) {
    // do something on input as 'user1'
    var doc = Auth.LoginAs(input, {});
    // do something on doc as system user
    Document.BlockPermissionInheritance(doc, {});

    doc = Auth.Logout(doc, {});
    // do something on doc as 'user1'
}
```

### Activating Metrics

Metrics have been added to Automation Scripting services to monitor Nashorn performances with the Nuxeo Platform.

To activate the metrics, set the following variable in `nuxeo.conf`:

```
automation.scripting.monitor.enable= true
```

Or set the Log4J level to TRACE for  [`org.nuxeo.automation.scripting.internals.AutomationScriptingComponent`](http://community.nuxeo.com/api/nuxeo/release-7.2/javadoc/org/nuxeo/automation/scripting/internals/AutomationScriptingComponent.html) .

This feature gives the ability to get time execution information through `JMX: org.nuxeo.StopWatch`.

## Restrictions

All Java imports are forbidden by default into the Nuxeo Platform. This example cannot be applied anymore.

```js
var file = Java.type("java.io.File");
print(file);
```

## Advanced Use

### Java Objects in Automation Scripting

It is possible to allow specific Java classes to be used via Automation Scripting. You can find it in [Nuxeo Explorer](http://explorer.nuxeo.com/nuxeo/site/distribution). Here are some examples:

- `java.util.ArrayList`
- `java.util.Arrays`
- `java.util.Collections`
- `java.util.UUID`
- `org.nuxeo.runtime.transaction.TransactionHelper`
- `org.nuxeo.ecm.core.api.Blobs`
- `org.nuxeo.ecm.core.api.impl.blob.StringBlob`
- `org.nuxeo.ecm.core.api.impl.blob.JSONBlob`

The default contribution now allows scripting code like:

```js
function run(input, params) {
  var uuid = java.util.UUID.randomUUID().toString();
  return org.nuxeo.ecm.core.api.Blobs.createJSONBlob("{'uuid': \"" + uuid + "\"}");
}
```

One can use `<deny>*</deny>` to disallow all previously-allowed classes. Other classes can be added and previously-allowed ones denied, through:

```xml
  <require>org.nuxeo.automation.scripting.classfilter</require>
  <extension target="org.nuxeo.automation.scripting.internals.AutomationScriptingComponent" point="classFilter">
    <classFilter>
      <allow>com.example.MyClass</allow>
      <allow>com.example.MyOtherClass</allow>
      <deny>org.nuxeo.runtime.transaction.TransactionHelper</deny>
    </classFilter>
  </extension>
```

### Contributing Automation Scripting Operations

Automation scripting operation is made through an XML contribution on the [`operation` extension point](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.automation.scripting.internals.AutomationScriptingComponent--operation):

```xml
<extension target="org.nuxeo.automation.scripting.internals.AutomationScriptingComponent" point="operation">
  <scriptedOperation id="Scripting.TestBlob">

    <!-- Define input type (input field in the run function) -->
    <inputType>Blob</inputType>

    <!-- Define output type (the returned object) -->
    <outputType>Document</outputType>

    <!-- Define operation category (by default 'javascript') -->
    <category>javascript</category>

    <!-- Define parameters to use through the params field of the run function -->
    <param name="document" type="string"/>

    <!-- Define the JavaScript code wrapped into run function surrounded by CDATA -->
    <script>
      function run(input, params) {
          var root = Repository.GetDocument(null, {
              "value" : "/"
          });
          var newDoc = Document.Create(root, {
              "type" : "File",
              "name" : "newDoc",
              "properties" : {
                  "dc:title" : "New Title",
                  "dc:source" : "JavaScript",
                  "dc:subjects" : [ "from", "javascript" ]
              }
          });
          var blob = Blob.AttachOnDocument(input, {
              "document" : params.document
          });
          Log(null, {
              "message" : "LogOperation is working so much - Blob title:"+blob.filename,
              "level" : "info"
          });
          print("title:"+blob.filename);
          return newDoc;
      }
    </script>
  </scriptedOperation>
</extension>
```

### Using Automation Scripting Operations in Chains

{{#> panel type='code' heading='The JavaScript Operation Definition'}}

```xml
<scriptedOperation id="javascript.HelloWorld">
    <inputType>string</inputType>
    <outputType>string</outputType>
    <param name="lang" type="string"/>
    <script>
    function run(input, params) {
      if (params.lang === "fr") {
        return "Bonjour " + input;
      } else {
        return "Hello " + input;
      }
    }
    </script>
</scriptedOperation>
```

{{/panel}}
{{#> panel type='code' heading='The Chain Definition'}}

```xml
<extension point="chains" target="org.nuxeo.ecm.core.operation.OperationServiceComponent">
    <chain id="Scripting.ChainedHello">
        <operation id="javascript.HelloWorld">
            <param type="string" name="lang">fr</param>
        </operation>
        <operation id="javascript.HelloWorld">
            <param type="string" name="lang">en</param>
        </operation>
    </chain>
</extension>
```

{{/panel}}

### Running Automation Scripting Operations

Automation Scripting Operations can be used directly from the [Automation Service]({{page page='calling-automation-from-java'}}):

```java
OperationContext ctx = new OperationContext(session);
Map<String, Object> params = new HashMap<>();

params.put("lang", "en");
ctx.setInput("John");
Object result = automationService.run(ctx, "Scripting.HelloWorld", params);
assertEquals("Hello John", result.toString());
```

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Automation Scripting in Nuxeo Studio]({{page space='studio' page='automation-scripting'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
