---
title: Use of MVEL in Automation Chains
review:
    comment: ''
    date: ''
    status: ok
labels:
    - mvel
    - scripting
toc: true
confluence:
    ajs-parent-page-id: '17334309'
    ajs-parent-page-title: Automation
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Use+of+MVEL+in+Automation+Chains
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Use+of+MVEL+in+Automation+Chains'
    page_id: '18449928'
    shortlink: CIYZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/CIYZAQ'
    source_link: /display/NXDOC58/Use+of+MVEL+in+Automation+Chains
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 13:30'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2016-03-01 10:07'
        message: MVEL_Language_Guide URL update
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-01-29 17:38'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-01-24 17:44'
        message: More relevant related topics
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-24 11:16'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8"> {{#> callout type='info' }}

This documentation focuses on the MVEL expression language, used in automation chains. For a broader look on that subject, have a look at the [Understand Expression and Scripting Languages Used in Nuxeo]({{page space='nxdoc' page='understand-expression-and-scripting-languages-used-in-nuxeo'}}) page.

{{/callout}}

## How to Use Scripting Features in Parameters Values

Values you put in operations parameters are provided with scripting capability.

When filling in a parameter value (like "value" parameter of "update property" in the case we want to update the title of the a document), there are three options:

*   `Title`: there is no interpretation (default behavior), the parameter is taken "as is", which means that the title will be "Title".

*   `expr:Title` starts with a "`expr:`". The system will interpret the value "Title" as a scripting expression. In that case it means that the value of the title will be updated with the content of the variable _Title_

*   `expr:The real @{Title}`: When there is the use of `@{my_variable_name}` in a script expression, the expression between bracket is considered as a variable name and resolved as a string, and the whole expression is evaluated as the concatenation of the various substrings (included the one interpreted). In our case, if the `Title` variable contains the string literal "Story", the title value will be "The real Story".

When the script is evaluated, you can use both contextual objects and embedded functions.

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

## Scripting Context

*   **Document**: The Document object represents the input document, when the operation takes a document as input. You can use it to get a property value of it:
    `expr:Document["dc:title"]`
    You can also use methods provided by the Document Wrapper, see below.

*   **variable_name**: if you set a context variable in a previous operation, you can access it in the parameter value by just referring to its name. In the following sample, if there was a `SetVariable` before in the operation flow that put the path of a document in the variable `path_of_the_workspace`, the parameter's value will be this path.
    `expr:path_of_the_workspace`

    {{#> callout type='note' }}

    Do not use "-" character in the variable name. Prefer the use of "_".

    {{/callout}}

*   **Relative paths**: each time you need to use a path expression (whether it is as a direct parameter of an operation, such as move, or in a an NXQL query, for STARTSWITH operator, you can leverage relative path capability:

    *   "." will be replaced by path of input document;
    *   ".." will be replaced by path of parent of input document.

*   **CurrentDate**: you can use the `CurrentDate` object, that will provide various utility methods to get the current date value, see below.

*   **Context.principal.model.getPropertyValue("schema:field")**: gets the current user property. By default users implements user.xsd schema. So if you want for instance the company name, `Context.principal.model.getPropertyValue("user:company")`. But if your users implements other schemas, you choose your "schema prefix (or name if don't set) : field name"
*   **CurrentUser.originatingUser**: in a workflow context, all the automation operations executed by the workflow engine are executed using a temporary unrestricted session (if the current user is not an administrator, this is a session with the user "system"). This variable allows you to fetch the current user. This can also be useful when the operation "Users and groups > Login as" has been used in order to retrieve the current username.

    {{#> callout type='info' }}

    Note that `currentUser` is an alias for `CurrentUser`.

    {{/callout}}
*   **Event:** in an event handler context, the Event object can be used to access some of the event's properties. For instance **`@{Event.getName()}`** will return the event name.

## {{> anchor 'doc-wrapper'}}Document Wrapper

The Document wrapper, used by the system for any document put in scripting context (whether under a variable name, or as the input document ("Document") provides several utility methods:

*   `Document.parent`: returns a document wrapper of the parent of the document;

*   `Document.workspace`: returns a document wrapper of the parent workspace of the document;

*   `Document.domain`: returns a document wrapper of the parent domain of the document;

*   `Document.path`: returns a string representing the value of the path of the document, like "/default-domain/workspaces/my-workspace";

*   `Document.title`: returns the title of the document;

*   `Document.description`: returns the description of the document;

*   `Document.type`: returns the Nuxeo EP Document type of the document (like "File", "Folder", ...);

*   `Document.lifeCycle`: returns the current life cycle state of the document;

*   `Document.name`: returns the name of the document (last part of the path);

*   `Document.versionLabel`: returns the version name of the document (like "1.1"...).

{{#> callout type='info' }}

Note that `currentDocument` is an alias for `Document`.

{{/callout}}

## {{> anchor 'date-wrapper'}}Date Wrapper

The Date wrapper is useful to update documents' date properties and to build time-relative NXQL queries.

*   `CurrentDate.date`: returns the date. It is the method to use to update a document date field, like "dc:valid", or whatever custom date field.

Some other methods are provided to display the current date as a string:

*   `CurrentDate.format("_java formatting expression_` `")`: returns the current date in the specified format;

*   `CurrentDate.time`: returns the date in milliseconds;

*   `CurrentDate.day`: returns the day of the current time;

*   `CurrentDate.month`: returns the month of the current time;

*   `CurrentDate.year`: returns the year of the current time;

*   `CurrentDate.hour`: returns the hour of the current time;

*   `CurrentDate.minut`: returns the minutes of the current time;

*   `CurrentDate.second`: returns the seconds of the current time;

*   `CurrentDate.week`: returns the week of the current time.

Some others can be used when building an NXQL query to express dates relatively to the current date:

*   `CurrentDate.days(-3)`: returns the current date minus three days;

*   `CurrentDate.years(10)`: returns the current date plus ten years;

*   `CurrentDate.months(-5).weeks(2).seconds(23)`: returns the current date minus five months plus two weeks and 23 seconds;

*   ...

    {{#> callout type='tip' }}

    &bull; If you want to work on a date that is held by a property of your document, you first need to get a `DateWrapper` object, by using: `@{Fn.calendar(Document["dc:created"])}`.
    Ex: `@{Fn.calendar(Document["dc:created"]).format("yyyy-MM-dd")}`

    &bull; To set a date property based on the current date, use the `CurrentDate` object, and ends the expression with the `date` wrapper. So for example, to set up the a field to

    ...today:

    `@{CurrentDate.date}`

    ...in 7 days:

    `@{CurrentDate.days(7).date}`

    &bull; To create a date that you can set on a date property from a string, you can use...

    `@{new java.text.SimpleDateFormat("yyyy-MM-dd").parse(date_str)}`

    <div>...where `date_str` is a Context variable containing a value such as "2013-09-26": You must pass to `SimpleDateFormat` the format of this date, so the parse() method will work.</div>

    {{/callout}}

## {{> anchor 'fn-object'}}Functions

The Functions object is providing a set of useful functions. This object is named _Fn_ and provide the following functions:

*   `Fn.getNextId(String key)` : gets a unique value for the given key. Each time this function is called using the same key a different string will be returned.

*   `Fn.getVocabularyLabel(String vocabularyName, String key)` : gets a value from the named vocabulary that is associated with the given key.

*   `Fn.getPrincipal(String userName)` : gets a Nuxeo principal object for the given username string.

*   `Fn.getEmail(String userName)` : gets the e-mail of the given username.

*   `Fn.getEmails(List<String> userNames)` : gets a list of e-mails for the given user name list.

*   `Fn.getPrincipalEmails(List<NuxeoPrincipal> principals)` : the same as above but the input object is a list of Nuxeo principals.

## Nuxeo Environment Properties

Nuxeo environment properties are accessible in scripts using the `Env` map object. All the properties defined in Nuxeo property files located in Nuxeo `conf` directory are available through the `Env` map. This is very useful when you want to parametrize your operations using values that can be modified later on a running server.

For example let's say you want to make an operation that is creating a document and initialize its description from a Nuxeo property named `automation.document.description`.

In order to do this you should:

1.  Fetch the property using the `Env` map in your operation parameter: `Env["automation.document.description"]`.
2.  And then on the target server to create a property file inside the Nuxeo `conf` directory that defines the variable you are using in the operation chain:
    _automation.document.description = My Description_

## MVEL

The scripting language used is MVEL. See the [MVEL language guide](https://en.wikisource.org/wiki/MVEL_Language_Guide). You can use all the features of the scripting language itself.

For instance, you can use the substring method, when dealing with paths:
`expr: Document.path.substring(26)`.

Testing if a variable is null:

```
@{WorkflowVariables["mail"] == empty?"VoidChain":"MyChain"}
```

Usage of `empty` variable allows user to evaluate expression to empty string. For instance to set a property of a document to "" (empty string), you can define the value with `empty:`

```
@{empty}
```

## Date Management Example

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Operation

</th><th colspan="1">

Destination field

</th><th colspan="1">

Source value

</th><th colspan="1">

Expression Example

</th></tr><tr><td colspan="1">

Services > Create Task

</td><td colspan="1">

due date

</td><td colspan="1">

Current Date

</td><td colspan="1">

`@{CurrentDate.date}`

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

Next Month

</td><td colspan="1">

`@{CurrentDate.month(1).date}`

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

Given Date

</td><td colspan="1">

2012-03-15T00:00:00Z

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

Date Property from the input Document

</td><td colspan="1">

`@{Document.getProperty("dc:expired")}`

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

Date Property from the input Document

</td><td colspan="1">

`@{Document.getProperty("dc:expired")}`

</td></tr><tr><td colspan="1">

Document > Update property

</td><td colspan="1">

value

</td><td colspan="1">

Current Date

</td><td colspan="1">

`@{CurrentDate.date}`

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

Next Month

</td><td colspan="1">

`@{CurrentDate.month(1).date}`

</td></tr><tr><td colspan="1">

Document > Update property

</td><td colspan="1">

value

</td><td colspan="1">

Current Date

</td><td colspan="1">

`@{CurrentDate.date}`

</td></tr></tbody></table></div>

If you have an error like that in your logs:

```
No type adapter found for input: class org.nuxeo.ecm.automation.core.scripting.DateWrapper and output class java.util.Date

```

This means that you are presenting a DateWrapper value type into a field that waits for a`java.util.Date` object. |

## User and Group Management Example

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Operation

</th><th colspan="1">

Destination field

</th><th colspan="1">

Source value

</th><th colspan="1">

Expression Example

</th><th colspan="1">

Remark

</th></tr><tr><td colspan="1">

Document > Update property

</td><td colspan="1">

value

</td><td colspan="1">

String

</td><td colspan="1">

Administrator

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

Document > Update property

</td><td colspan="1">

value

</td><td colspan="1">

Static value

</td><td colspan="1">

Current User

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

Services > Create task

</td><td colspan="1">

additional list of actors prefixed ids

</td><td colspan="1">

String

</td><td colspan="1">

`user:Administrator`

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

String

</td><td colspan="1">

`group:administrators`

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

variable name for actors prefixed ids

</td><td colspan="1">

In Context

</td><td colspan="1">

variable

</td><td colspan="1">

This variable can be set by the "User & Group > Get Users and Groups" with "prefix identifiers" checked.

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

Current User

</td><td colspan="1">

`user:@{CurrentUser.name}`

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

User & Group > Get Users and Groups&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr></tbody></table></div>

## Numbers Management example

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Operation

</th><th colspan="1">

Destination field

</th><th colspan="1">

Source value

</th><th colspan="1">

Expression Example

</th><th colspan="1">

Remark

</th></tr><tr><td colspan="1">

Conversion > Resize a picture

</td><td colspan="1">

maxHeight/maxWidth

</td><td colspan="1">

integer

</td><td colspan="1">

10

</td><td colspan="1">

&nbsp;

</td></tr></tbody></table></div>

## Document management example

### Field management

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Operation

</th><th colspan="1">

Destination field

</th><th colspan="1">

Source value

</th><th colspan="1">

Expression Example

</th><th colspan="1">

Remark

</th></tr><tr><td colspan="1">

Document > Copy

</td><td colspan="1">

target

</td><td colspan="1">

String

</td><td colspan="1">

`/default-domain/workspaces`

</td><td colspan="1">

Here is specified the path of the container where the document is to be created. The path is given by the names of ancestors of the document (can be different from the title and stored into a different field of the document).

</td></tr><tr><td colspan="1">

Document > Copy

</td><td colspan="1">

target

</td><td colspan="1">

from context

</td><td colspan="1">

`@{Context"documentStored".name}`

</td><td colspan="1">

This will work if you have previously added the **Execution Context > Set Context Variable**&nbsp;into your automation chain to store the document into this `documentStored` variable.

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

name

</td><td colspan="1">

String

</td><td colspan="1">

name-of-my-document

</td><td colspan="1">

This field is a technical one and used to create the notion of path (see above). **This is not the title**. This is also used for URL generation. Look at the URL after navigating to a document and you will see his path based on the names of the document's ancestor and its name.

</td></tr><tr><td colspan="1">

Document > Create

</td><td colspan="1">

type

</td><td colspan="1">

String

</td><td colspan="1">

File

</td><td colspan="1">

Here you must use the name of the document type (not the label).

</td></tr></tbody></table></div>

## More Advanced Scripts

In this section, we will gather useful scripts so as to share experience on using scripting in automation, especially in the Run Script operation.

{{#> panel type='code' heading='Working with a list of properties'}}

```java
new ArrayList(Arrays.asList(WorkflowVariables["contributors"])); x.add(Context["workflowInitiator"]); WorkflowVariables["contributors"]=x;
// This works for workflow variables, (NodeVariables and WorkflowVariables) but would also work for a list property of a document, see this question on answers (http://answers.nuxeo.com/questions/4240/add-string-to-a-list-string-property-in-pure-studioautomation-for-prototypes)
```

{{/panel}}<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Understand Expression and Scripting Languages Used in Nuxeo]({{page space='nxdoc' page='understand-expression-and-scripting-languages-used-in-nuxeo'}})
*   [Automation]({{page page='automation'}})
*   [Automation in Nuxeo Studio]({{page space='studio' page='automation'}})

{{/panel}}</div><div class="column medium-6"></div></div>