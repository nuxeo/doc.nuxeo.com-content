---
title: Automation Scripting
review:
    comment: ''
    date: ''
    status: ok
labels:
    - scripting
    - lts2015-ok
    - automation-component
    - javascript
    - automation
    - link-update
    - university
toc: true
confluence:
    ajs-parent-page-id: '28475489'
    ajs-parent-page-title: Automation
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Automation+Scripting
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Automation+Scripting'
    page_id: '28475619'
    shortlink: 44CyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/44CyAQ'
    source_link: /display/NXDOC710/Automation+Scripting
tree_item_index: 400
history:
    -
        author: Bertrand Chauvin
        date: '2016-04-28 15:49'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2016-04-06 09:53'
        message: Add section Getting Value From a Context Variable
        version: '30'
    -
        author: Solen Guitter
        date: '2016-02-03 16:04'
        message: ''
        version: '29'
    -
        author: Solen Guitter
        date: '2016-02-03 16:03'
        message: Add REST Call section
        version: '28'
    -
        author: Manon Lumeau
        date: '2016-01-04 13:54'
        message: Fix Explorer link
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
{{> wistia_video id='nygm75sevd'}}

Extract from the course "[Applying Business Logic](https://university.nuxeo.io/nuxeo/university/#!/course/applying-business-logic)" at [Hyland University](https://university.hyland.com)

{{! excerpt}}

Automation Scripting is a Nuxeo module which provides ability to create and contribute Automation chain/operation in JavaScript.

{{! /excerpt}}

This enables you to benefit from:

*   Loops
*   Conditions
*   Smooth Automation implementation maintenance

{{#> callout type='warning' heading='7.3 Changes'}}

In 7.2, Context `ctx` was in run function signature:

```
function run(ctx, input, params) {...... your code ......}
```

Since 7.3, this parameter has been removed and is still available in script. To align on 7.3, please remove it from your script as:

```
function run(input, params) {...... your code ......}
```

{{/callout}}

## Requirements

Automation Scripting is using Java 8 Nashorn engine. To leverage all the Automation Scripting feature, the Nuxeo server needs to run at least **JDK 8 update 40**.

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
    // For instance, the operation to display JSF messages
    WebUI.AddMessage(input, {
        /*required:true - type: string*/
        'message': "Display It!" ,
        /*required:true - type: string*/
        'severity': "INFO"
    });
    ```

*   Using `for/if/print` or any other JavaScript feature

    ```js
      if(docs.length > 3){
        var index;
        for (index = 0; index < docs.length; ++index) {
            Document.SetProperty(docs[index], {
              /*required:true - type: string*/
              'xpath': "dc:title" ,
              /*required:false - type: boolean*/
              'save': true,
              /*required:false - type: serializable*/
              'value': "renamed"
        });
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

If one of your Automation chain or operation contains dashes in their names/ids, Nuxeo Automation will prevents those characters and replaces with underscore:

Example:

Automation chain id: `my-chain-with-dashes`

Automation scripting usage: `var document = my_chain_with_dashes(input, {.......});`

{{/callout}}

### Example

The following code example bound to a simple action button, rename all selected documents with the value "test" as `dc:title` or displays a warning JSF message (depending on the number of the selected documents).

![]({{file name='Screenshot 2015-07-06 16.21.48.png'}} ?w=500)

As a result, once the Automation Scripting code has been bound to a simple action button, we can rename all the selected documents or display a warning message.

![]({{file name='automation_scripting_example2.png'}} ?w=600,border=true)

## Binding Automation Scripting to Action/Listener/Workflow

For 7.2 target Platform, Automation Scripting feature allows Studio users to bind their JavaScript contribution to actions, listeners or workflows.

### Action Binding

To bind an Automation JavaScript to an action:

1.  Create your action.
2.  In the Action Execution, select your custom operation.
    ![]({{file name='automation_scripting_action_binding.png'}} ?w=500,border=true)

### Automation Chain Binding

*   Automation Scripting scripts can be executed within an Automation Chain, by using the operation `Execution Flow > Run Chain`. The ID must be formatted as `javascript.script_name`.
    ![]({{file name='automation_scripting_chain_binding.png'}} ?w=500,border=true)
*   Automation Scripting custom scripts can be used as well directly in Automation Chains from the category **Scripting** as follow:
    ![]({{file name='Screenshot 2015-05-25 18.16.50.png'}} ?w=500)

## REST Call

Automation scripts can be called like any operation or chain using the Automation HTTP bridge. See [cURL sample]({{page page='using-curl'}}).

## Helpers

Platform Functions Helpers are available in Automation Scripting.

You can use (like in [MVEL expression]({{page space='nxdoc' page='use-of-mvel-in-automation-chains'}})) functions as follow:

```
Fn.getEmail("Administrator")
```

[Helper contributions]({{page page='automation-helpers'}}) are available to create custom functions to use directly in Automation Scripting and [Mvel]({{page page='use-of-mvel-in-automation-chains'}}).

## Logging - Debugging

When printing values as follow, the output is redirected to the console:

```
print("value")
```

But you can also use the helper "Console" to write logs within `NUXEO_HOME/log/server.log`:

```
Console.info("Informations");
Console.warn("Warnings");
Console.error("Errors");
```

## Getting Value From a Context Variable

To get the value of a Context Variable you should use the following syntax:

```
ctx.get('var')
```

## Metrics

Since 7.2, metrics have been added to Automation Scripting services to monitor Nashorn performances with the Nuxeo Platform.

To activate the metrics, set the following variable in `nuxeo.conf`:

```
automation.scripting.monitor.enable= true
```

Or set the Log4J level to TRACE for  [`org.nuxeo.automation.scripting.internals.AutomationScriptingComponent`](http://community.nuxeo.com/api/nuxeo/release-7.10/javadoc/org/nuxeo/automation/scripting/internals/AutomationScriptingComponent.html) .

This feature gives the ability to get time execution informations through `JMX: org.nuxeo.StopWatch`.

## Restrictions

Since 7.3, Java imports in Javascript: all Java imports are forbidden by default into the Nuxeo Platform.

```
var file = Java.type("java.io.File");
print(file);
```

This example cannot be applied anymore.

## Advanced Use

### Using the Automation Scripting Service

The [AutomationScriptingService](https://cdn.rawgit.com/nuxeo/nuxeo/master/nuxeo-features/nuxeo-automation/nuxeo-automation-scripting/src/main/java/org/nuxeo/automation/scripting/api/AutomationScriptingService.java) provides API to run your JavaScript codes within the Nuxeo Automation engine:

{{#> panel type='code' heading='AutomationScriptingService'}}

```java
package org.nuxeo.automation.scripting.api;

import javax.script.ScriptException;

import org.nuxeo.automation.scripting.internals.ScriptRunner;
import org.nuxeo.ecm.core.api.CoreSession;

public interface AutomationScriptingService {
.....

	/**
 	* Run Automation Scripting with given 'JavaScript' InputStream and CoreSession.
 	* @param in
 	* @param session
 	* @throws ScriptException
 	*/
	void run(InputStream in, CoreSession session) throws ScriptException, OperationException;

	/**
 	* Run Automation Scripting for a given 'JavaScript' script and CoreSession.
 	* @param script
 	* @param session
 	* @throws ScriptException
 	*/
	void run(String script, CoreSession session) throws ScriptException, OperationException;

......
}
```

{{/panel}}

Usage:

{{#> panel type='code' heading='Example'}}

```java
ScriptRunner runner = scriptingService.getRunner(session);
assertNotNull(runner);

InputStream stream = this.getClass().getResourceAsStream("/simpleAutomationScript.js");
assertNotNull(stream);
runner.run(stream);
```

{{/panel}}

### Contributing Automation Scripting Operations

Automation scripting operation is made through an XML contribution on the [`operation` extension point](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewExtensionPoint/org.nuxeo.automation.scripting.internals.AutomationScriptingComponent--operation):

```xml
<extension target="org.nuxeo.automation.scripting.AutomationScriptingComponent" point="operation">
  <scriptedOperation id="Scripting.TestBlob">

    <!-- Define input type (input field in the run function) -->
    <inputType>Blob</inputType>

    <!-- Define output type (the return object) -->
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
    ]]></script>
  </scriptedOperation>
</extension>
```

Automation scripting operations can be used as common Automation operations:

*   Using it within chains, for instance:

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

    {{/panel}}{{#> panel type='code' heading='The Chain Definition'}}

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
*   Using it directly from the [Automation Service]({{page space='~vpasquier' page='calling-automation-from-java'}}):

    ```
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



</div></div>
