---
title: Use of MVEL in Automation Chains
description: This documentation focuses on the MVEL expression language, used in automation chains.
review:
    comment: ''
    date: '2016-12-19'
    status: ok
notes: Documentation page used on Nuxeo Studio. Check with NOS team before deleting or moving.
labels:
    - lts2016-ok
    - mvel
    - scripting
    - automation
    - fdavid
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '18451738'
    ajs-parent-page-title: Automation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Use+of+MVEL+in+Automation+Chains
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Use+of+MVEL+in+Automation+Chains'
    page_id: '1409169'
    shortlink: kYAV
    shortlink_source: 'https://doc.nuxeo.com/x/kYAV'
    source_link: /display/NXDOC/Use+of+MVEL+in+Automation+Chains
tree_item_index: 600
history:
    -
        author: Solen Guitter
        date: '2016-08-31 13:31'
        message: ''
        version: '90'
    -
        author: Manon Lumeau
        date: '2016-08-02 16:38'
        message: ''
        version: '89'
    -
        author: Julien Carsique
        date: '2016-02-29 10:02'
        message: MVEL_Language_Guide URL update
        version: '88'
    -
        author: Florent Guillaume
        date: '2015-10-02 12:23'
        message: ''
        version: '87'
    -
        author: Florent Guillaume
        date: '2015-10-02 12:19'
        message: Document long-existing Fn functions.
        version: '86'
    -
        author: Manon Lumeau
        date: '2015-09-16 10:20'
        message: ''
        version: '85'
    -
        author: Manon Lumeau
        date: '2014-11-03 16:22'
        message: ''
        version: '84'
    -
        author: Manon Lumeau
        date: '2014-11-03 14:47'
        message: ''
        version: '83'
    -
        author: Vincent Dutat
        date: '2014-10-23 00:25'
        message: ''
        version: '82'
    -
        author: Alain Escaffre
        date: '2014-07-22 17:16'
        message: ''
        version: '81'
    -
        author: Alain Escaffre
        date: '2014-06-12 00:12'
        message: ''
        version: '80'
    -
        author: Solen Guitter
        date: '2014-04-10 17:49'
        message: ''
        version: '79'
    -
        author: Alain Escaffre
        date: '2014-04-02 01:51'
        message: ''
        version: '78'
    -
        author: Solen Guitter
        date: '2014-01-29 17:38'
        message: ''
        version: '77'
    -
        author: Thibaud Arguillere
        date: '2014-01-29 17:30'
        message: ''
        version: '76'
    -
        author: Thibaud Arguillere
        date: '2014-01-29 13:54'
        message: ''
        version: '75'
    -
        author: Thibaud Arguillere
        date: '2014-01-28 21:08'
        message: ''
        version: '74'
    -
        author: Solen Guitter
        date: '2014-01-24 17:42'
        message: More relevant related topics
        version: '73'
    -
        author: Solen Guitter
        date: '2014-01-24 11:25'
        message: Formatting
        version: '72'
    -
        author: Solen Guitter
        date: '2014-01-17 10:15'
        message: ''
        version: '71'
    -
        author: Thibaud Arguillere
        date: '2013-12-26 18:15'
        message: ''
        version: '70'
    -
        author: Thibaud Arguillere
        date: '2013-12-26 18:12'
        message: ''
        version: '69'
    -
        author: Solen Guitter
        date: '2013-12-13 12:01'
        message: ''
        version: '68'
    -
        author: Bertrand Chauvin
        date: '2013-12-12 13:23'
        message: "Integrated Benjamin's example from the TMP page"
        version: '67'
    -
        author: Solen Guitter
        date: '2013-10-17 11:41'
        message: ''
        version: '66'
    -
        author: Vladimir Pasquier
        date: '2013-10-16 17:20'
        message: ''
        version: '65'
    -
        author: Solen Guitter
        date: '2013-09-26 16:20'
        message: ''
        version: '64'
    -
        author: Thibaud Arguillere
        date: '2013-09-26 16:16'
        message: ''
        version: '63'
    -
        author: Thibaud Arguillere
        date: '2013-09-26 15:56'
        message: ''
        version: '62'
    -
        author: Solen Guitter
        date: '2013-09-26 15:47'
        message: Removed related topics from TOC
        version: '61'
    -
        author: Florent Guillaume
        date: '2013-09-26 15:23'
        message: ''
        version: '60'
    -
        author: Solen Guitter
        date: '2013-09-26 15:20'
        message: ''
        version: '59'
    -
        author: Alain Escaffre
        date: '2013-09-26 13:55'
        message: ''
        version: '58'
    -
        author: Solen Guitter
        date: '2013-08-26 16:41'
        message: ''
        version: '57'
    -
        author: Solen Guitter
        date: '2013-08-26 16:33'
        message: typo
        version: '56'
    -
        author: Vladimir Pasquier
        date: '2013-08-14 12:34'
        message: ''
        version: '55'
    -
        author: Vladimir Pasquier
        date: '2013-08-14 12:32'
        message: ''
        version: '54'
    -
        author: Bertrand Chauvin
        date: '2013-07-11 13:47'
        message: ''
        version: '53'
    -
        author: Alain Escaffre
        date: '2013-07-11 01:34'
        message: ''
        version: '52'
    -
        author: Solen Guitter
        date: '2013-07-09 11:39'
        message: ''
        version: '51'
    -
        author: Bertrand Chauvin
        date: '2013-07-08 18:25'
        message: ''
        version: '50'
    -
        author: Bertrand Chauvin
        date: '2013-07-08 14:59'
        message: Added anchors to be used for backlinks
        version: '49'
    -
        author: Karl Harris
        date: '2013-07-03 14:40'
        message: ''
        version: '48'
    -
        author: Alain Escaffre
        date: '2013-07-01 13:49'
        message: ''
        version: '47'
    -
        author: Alain Escaffre
        date: '2013-07-01 13:49'
        message: ''
        version: '46'
    -
        author: Bertrand Chauvin
        date: '2013-06-20 13:16'
        message: Added link to general doc
        version: '45'
    -
        author: Karl Harris
        date: '2013-06-14 15:59'
        message: ''
        version: '44'
    -
        author: Karl Harris
        date: '2013-06-14 15:56'
        message: ''
        version: '43'
    -
        author: Karl Harris
        date: '2013-06-14 15:52'
        message: ''
        version: '42'
    -
        author: Bertrand Chauvin
        date: '2013-06-04 18:14'
        message: Orthography
        version: '41'
    -
        author: Alain Escaffre
        date: '2013-02-12 07:07'
        message: ''
        version: '40'
    -
        author: Alain Escaffre
        date: '2013-02-12 06:56'
        message: ''
        version: '39'
    -
        author: Alain Escaffre
        date: '2013-02-12 06:54'
        message: ''
        version: '38'
    -
        author: Benjamin Jalon
        date: '2012-03-13 10:55'
        message: Migrated to Confluence 4.0
        version: '37'
    -
        author: Benjamin Jalon
        date: '2012-03-13 10:55'
        message: Reverted from v. 34
        version: '36'
    -
        author: Benjamin Jalon
        date: '2012-03-13 10:54'
        message: ''
        version: '35'
    -
        author: Solen Guitter
        date: '2012-02-29 11:57'
        message: ''
        version: '34'
    -
        author: Alain Escaffre
        date: '2012-02-20 01:47'
        message: ''
        version: '33'
    -
        author: Alain Escaffre
        date: '2012-01-20 17:40'
        message: ''
        version: '32'
    -
        author: Alain Escaffre
        date: '2012-01-20 17:38'
        message: ''
        version: '31'
    -
        author: Alain Escaffre
        date: '2012-01-20 17:37'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2011-09-12 12:34'
        message: added related howtos and tutorials
        version: '29'
    -
        author: Solen Guitter
        date: '2011-09-06 14:40'
        message: ''
        version: '28'
    -
        author: Florent Guillaume
        date: '2011-08-24 15:55'
        message: ''
        version: '27'
    -
        author: Bogdan Stefanescu
        date: '2010-08-30 19:00'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2010-08-18 10:38'
        message: ''
        version: '25'
    -
        author: Stéfane Fermigier
        date: '2010-08-03 13:12'
        message: ''
        version: '24'
    -
        author: Alain Escaffre
        date: '2010-07-22 13:55'
        message: adding mvel section
        version: '23'
    -
        author: Stéfane Fermigier
        date: '2010-06-28 10:49'
        message: ''
        version: '22'
    -
        author: Stéfane Fermigier
        date: '2010-06-27 19:10'
        message: ''
        version: '21'
    -
        author: Stéfane Fermigier
        date: '2010-06-27 19:09'
        message: ''
        version: '20'
    -
        author: Bogdan Stefanescu
        date: '2010-06-21 14:58'
        message: ''
        version: '19'
    -
        author: Bogdan Stefanescu
        date: '2010-06-21 14:47'
        message: ''
        version: '18'
    -
        author: Benjamin Jalon
        date: '2010-05-31 17:28'
        message: ''
        version: '17'
    -
        author: Benjamin Jalon
        date: '2010-05-31 17:28'
        message: ''
        version: '16'
    -
        author: Alain Escaffre
        date: '2010-05-03 00:05'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2010-04-30 18:35'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2010-04-26 16:52'
        message: ''
        version: '13'
    -
        author: Alain Escaffre
        date: '2010-04-26 16:49'
        message: ''
        version: '12'
    -
        author: Alain Escaffre
        date: '2010-04-26 16:48'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2010-04-26 16:47'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2010-04-26 16:46'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2010-04-26 16:28'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2010-04-26 16:08'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2010-04-26 16:03'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2010-04-26 15:59'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2010-04-26 14:51'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2010-04-26 14:47'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2010-04-26 14:25'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2010-04-23 01:23'
        message: ''
        version: '1'

---
{{#> callout type='info' }} {{! excerpt}}

This documentation focuses on the MVEL expression language, used in automation chains. For a broader look on that subject, have a look at the [Understand Expression and Scripting Languages Used in Nuxeo]({{page page='understand-expression-and-scripting-languages-used-in-nuxeo'}}) page.

Also, it is very unlikely that you will need to use MVEL from inside an Automation Script (using an `@{expression}` value). Still, form Automation Scripting, you have access to very useful objects and helpers (`Document ,  ``CurrentUser`, `Fn`, etc., see below)

{{! /excerpt}} {{/callout}}

## How to Use Scripting Features in Parameters Values

When using automation, Values you put in operation parameters are provided with scripting capability (when using JavaScript AZutomation, parameters are a JavaScript expression, string, number, function returning a value, etc.). Basically, when the system evaluates the value, it detects wether it is a raw value or an expression to be evaluated/resolved. The syntax used to tell the system you are passing an expression to be evaluated is `@{the_expression}`.

So, for example, say we want to set the `value` parameter of the `Document.SetProperty` operation to set the `dc:title` field of a document:

*   If we pass `The New Title`, there is no interpretation (default behavior), the parameter is taken "as is", which means that the title will be "The New Title".

*   If we pass `@{Title}`, the system interprets `Title` (inside the brackets) as a scripting expression. In that case it means the value of the title will be updated with the content of the variable _Title_ (that will have be set previously)

*   The expression between brackets can be concatenated with a non-interpreted value. `The New @{Title}` will set the title to "The New " plus the content of the variable _Title_.

Notice it is also possible to use the `expr:` prefix: `expr:Title` is the same as `@{Title}` and `expr:The New  @{Title}` is the same as `The New @{Title}`.

The expression between brackets (`@{the_expression}`) is evaluated/calculated and can be contexttual objects or embedded helper functions:

* You can put your own Context Variables (Using `Context.SetVar` previously in your chain)
* Nuxeo provides objects for your convenience. We will discuss these objects below. For example, the `Document`, `CurrentUser`, `CurrentDate` objects provide accessors to facilitate getting values from the current context. `@{Document.title}`returns the title of the current document. `@{CurrentUser.mail}` the mail address of the current user (typically used with the `SendMail` operation). `@{CurrentDate.days(7).calendar}` returns a date "in 7 days" (for example, stored in `dc:expired`).

The expression can return any value, it is not limited to strings. For example, if we have an `order:total_price` floating point field, we can set its value (still using the `Document.SetProperty` operation) with `@{Document["order:quantity"] * Document["order:price"]`.


## Scripting Context

Note: The Expression Editor in Nuxeo Studio displays the _Browse Context_ drop down and its related features, which contain all the features explained in this documentation.

*   **Document**: The Document object represents the input document, when the operation takes a document as input. You can use it to get a property value of it:
    `@{Document.path}`, `@{Document["yourschema:yourfiekd"]}`, `@{Document.domain.title}`
    You can also use methods provided by the `DocumentWrapper`, see below.

*   **variable_name**: If you set a context variable in a previous operation, you can access it in the parameter value by just referring to its name. In the following sample, we previously used `Context.SetVar` to store the path of a document in the `path_of_the_workspace` variable. The parameter's value will be this path:
    `@{path_of_the_workspace}` (or `expr:path_of_the_workspace`)

    {{#> callout type='note' }}

    Do not use "-" character in the variable name. Prefer the use of `_`.

    {{/callout}}

*   **Relative paths**: Each time you need to use a path expression (whether it is as a direct parameter of an operation, such as move, or in a an NXQL query, for STARTSWITH operator, you can leverage relative path capability:

    *   "." will be replaced by path of input document;
    *   ".." will be replaced by path of parent of input document.


*   **CurrentDate**: The `CurrentDate` object provides various utility methods to handle dates (current date, date in one month, format a date, etc.), see "Date Wrapper" below.

*   **CurrentUser**: The `CurrentUser` object provides various utility methods returning information about the current user (login, first/last name, mail, etc.), see "User Wrapper" below.

*   **Event**: In the context of an Automation Chain called from an Event Handler, the `Event` object can be used to access some of the event's properties. For instance **`@{Event.getName()}`** will return the event name.

*   **Fn**: The `Fn` object provides several utilities to access miscellaneous information (see below): Get the label of a vocabulary given its ID, get all the emails of a group of users, get a sequence number, etc.

*   Other objects are available, less often used:

    *   `Env` allows for getting the value of a configuraiton parameter (see below)
    *   `WorkflowVariables` and `NodeVariables` allow for retrieving the values of your variables in the context of a workflow
    *   `Context` is maintained for compatibility reason. All its objects are available in other objects, or can be accessed an easier way. For example, to get the value of a Context variable, you can write `@{Context["the_variable"]}`, but `@{the_variable}` looks more readable. The same would go for


## {{> anchor 'doc-wrapper'}}Document Wrapper

The Document wrapper, used by the system for any document put in scripting context (whether under a variable name, or as the input document ("Document") provides several utility methods:

*   `Document.parent`: Returns a document wrapper of the parent of the document;

*   `Document.workspace`: Returns a document wrapper of the parent workspace of the document;

*   `Document.domain`: Returns a document wrapper of the parent domain of the document;

*   `Document.path`: Returns a string representing the value of the path of the document, like "/default-domain/workspaces/my-workspace";

*   `Document.title`: Returns the title of the document;

*   `Document.description`: Returns the description of the document;

*   `Document.type`: Returns the Nuxeo EP Document type of the document (like "File", "Folder", ...);

*   `Document.lifeCycle`: Returns the current lifecycle state of the document;

*   `Document.name`: Returns the name of the document (last part of the path);

*   `Document.versionLabel`: Returns the version name of the document (like "1.1"...).

{{#> callout type='info' }}

Note that `currentDocument` is an alias for `Document`.

{{/callout}}

{{#> callout type='info' }}
Also note that we listed here only the main accessors. `Document` is a `DocumentWrapper` and you can also [check the code](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-automation/nuxeo-automation-core/src/main/java/org/nuxeo/ecm/automation/core/scripting/DocumentWrapper.java) to see all the available accessors.</br>
For example, you can also use `hasFacet(String facet)`, `hasSchema(String schemaName)`, etc. Make sure to select the branch corresponding to the version of Nuxeo you are using.
{{/callout}}

## {{> anchor 'date-wrapper'}}Date Wrapper

The Date wrapper is useful to update documents' date properties and to build time-relative NXQL queries.

- `CurrentDate.date`: returns the date. It is the method to use to update a document date field, like `dc:valid`, or whatever custom date field.

Some other methods are provided to display the current date as a string:

- `CurrentDate.format("_java formatting expression_` `")`: returns the current date in the specified format;

- `CurrentDate.time`: returns the date in milliseconds;

- `CurrentDate.day`: returns the day of the current time;

- `CurrentDate.month`: returns the month of the current time;

- `CurrentDate.year`: returns the year of the current time;

- `CurrentDate.hour`: returns the hour of the current time;

- `CurrentDate.minute`: returns the minutes of the current time;

- `CurrentDate.second`: returns the seconds of the current time;

- `CurrentDate.week`: returns the week of the current time.

Some others can be used when building an NXQL query to express dates relatively to the current date:

- `CurrentDate.days(-3)`: returns the current date minus three days;

- `CurrentDate.years(10)`: returns the current date plus ten years;

- `CurrentDate.months(-5).weeks(2).seconds(23)`: returns the current date minus five months plus two weeks and 23 seconds;

*   ...

{{#> callout type='tip' }}
- If you want to work on a date stored in a field of your document, you first need to get a `DateWrapper` object, by using: `@{Fn.calendar(Document["dc:created"])}`</br>
  For example:
 `@{Fn.calendar(Document["dc:created"]).format("yyyy-MM-dd")}`

- To set a date property based on the current date, use the `CurrentDate` object, and ends the expression with the `calendar` or the `date` wrapper.</br>
  For example, to set up a field to:
  - today: `@{CurrentDate.days(0).calendar}`
  - in 7 days: `@{CurrentDate.days(7).date}`

- To create a date that you can set on a date property from a string, you can use `@{new java.text.SimpleDateFormat("yyyy-MM-dd").parse(date_str)}` where `date_str` is a Context variable containing a value such as "2019-09-26". You must pass to `SimpleDateFormat` the format of this date, so the parse() method work.
{{/callout}}


## {{> anchor 'user-wrapper'}}User Wrapper

The `CurrentUser` objects wraps useful functions to get information about the current user:

*   **CurrentUser.name**: Returns the user ID (used for logging in)

*   **User information**: `CurrentUser.email`, `CurrentUser.firstName`, `CurrentUser.lastName`, `CurrentUser.company`.

*   **User information - advanced**: There also are accessors to get more advanced information about the current user.
    *   `CurrentUser["xpath"]` returns the value of a field in the `user` schema
    *   `CurrentUser.allGroups` returns an array with all the groups the user belongs to. It is a Java `List<String>`. To test if the current user is member of the "marketing" group, you can use `CurrentUser.allGroups.contains("marketing")`

*   **CurrentUser.principal** returns the `NuxeoPrincipal` Java object, allowing for getting more tuned/detailed information (see the Source Code on GitHub or the Java Doc). For example: `CurrentUser.principal.isMemberOf("marketing")`, `CurrentUser.principal.isAdministrator()`, `CurrentUser.principal.isAnonymous()`, `CurrentUser.principal.isTransient()`, etc.

*   **CurrentUser.actingUser**: In a workflow context, all the automation operations executed by the workflow engine are executed using a temporary unrestricted session (if the current user is not an administrator, this is a session with the user "system"). This variable allows you to fetch the current user. This can also be useful when the operation "Users and groups > Login as" has been used in order to retrieve the current username.

    {{#> callout type='info' }}

    `currentUser` is an alias for `CurrentUser`.

    {{/callout}}

## {{> anchor 'fn-object'}}Functions

The Functions object is providing a set of useful functions. This object is named `Fn` and it provides the following functions (the full list can also be checked in [the code](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-automation/nuxeo-automation-features/src/main/java/org/nuxeo/ecm/automation/features/PlatformFunctions.java), make sure to select the branch of your version):

- `Fn.getNextId(String key)`: Returns a unique value for the given key using the default sequencer. Each time this function is called using the same key a different string will be returned.

- `Fn.getNextId(String key, String sequencerName)`: Same as `Fn.getNextId(String key)` but allows for using a specific sequencer.

- `Fn.getVocabularyLabel(String vocabularyName, String key)`: Returns a value from the named vocabulary that is associated with the given key.

- `Fn.getPrincipal(String userName)`: Returns a Java `NuxeoPrincipal` object for the given username string.

- `Fn.getPrincipalsFromGroup(String group)`: Returns a Java `Set` of `NuxeoPrincipal` for the given group. Also returns the subgroups.

- `Fn.getPrincipalsFromGroup(String group, boolean ignoreGroups)`: Returns a Java `Set` of `NuxeoPrincipal` for the given group. Only the users are returned, not subgroups.

- `Fn.getEmail(String userName)`: Returns the e-mail of the given username.

- `Fn.getEmails(List<String> userNames)`: Returns a list of e-mails for the given user name list.

- `Fn.getEmails(List<String> userNames, boolean usePrefix)`: Returns a list of e-mails for the given user name list. If `userPrefix` is `true`, each item is prefixed with `user:`.

- `Fn.getPrincipalEmails(List<NuxeoPrincipal> principals)`: Same as above but the input object is a list of Nuxeo principals.

- `Fn.getEmailsFromGroup(String groupName)`: Returns a list of e-mails of all the users of the group.

- `Fn.concatenateIntoList(List<T> list, Object... values)`: Adds the values to the list. If a value is itself an array or a collection, each of its members are added to the list. The list is returned.

- `Fn.concatenateValuesAsNewList(Object... values)`: Same as `concatenateIntoList` but using a newly-created list.

- `Fn.htmlEscape(String string)`: Returns an escaped version of the string suitable for HTML inclusion.

- `Fn.nxqlEscape(String string)`: Returns an escaped version of the string suitable for NXQL inclusion inside single quotes.

- `Fn.documentExists(CoreSession session, String idOrPath)`: Returns `true` if the document exists in the repository.

- `Fn.getDirService()`: Returns the `DirectoryService`. Requires administration privileges.

## Nuxeo Environment Properties

Nuxeo environment properties are accessible in scripts using the `Env` map object. All the properties defined in Nuxeo property files located in Nuxeo `conf` directory are available through the `Env` map. This is very useful when you want to configure your operations using values that can be modified later on a running server.

For example let's say you want to make an operation that is creating a document and initialize its description from a Nuxeo property named `automation.document.description`.

In order to do this you should:

1.  Fetch the property using the `Env` map in your operation parameter: `Env["automation.document.description"]`.
2.  And then on the target server to create a property file inside the Nuxeo `conf` directory that defines the variable you are using in the operation chain:
    _automation.document.description = My Description_

## MVEL

The scripting language used is MVEL. See the [MVEL language guide](https://en.wikibooks.org/wiki/Transwiki:MVEL_Language_Guide). You can use all the features of the scripting language itself.

For instance, you can use the substring method, when dealing with paths:
`@{Document.path.substring(26)}`.

This is especially useful if you need to change the case of strings: No need to write a Java plugin for this, you can just use `toLowerCase()` or `toUpperCase()`. This expression converts the `order:label` string fieled to all upper case: `@{Document["order:label"].toUpperCase()}`.

Testing if a variable is null:

```
@{WorkflowVariables["mail"] == empty ? "VoidChain" : "MyChain"}
```

Usage of `empty` variable allows user to evaluate expression to empty string. For instance to set a property of a document to "" (empty string), you can define the value with `empty:`

```
@{empty}
```

(you also can use `@{""}`).

As MVEL will consider values to be string by default, you can set hard-coded values depending on the type of the field. To set an integer value to ten, write `@{10}`. To reset a field to null: `@{null}`. To set a string field to "" you can use `@{""}`


## Date Management Example

Notice: These examples are for usage in Automation. if you are writing an Automation Script, you also can use the JavaScript native `Date` object (while the `CurrentDate`  object is available in Automation Scripting if you need it.).

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Operation

</th><th colspan="1">

Parameter

</th><th colspan="1">

Expected value

</th><th colspan="1">

Expression Example

</th></tr><tr><td colspan="1">

Document > SetProperty

</td><td colspan="1">

value

</td><td colspan="1">

Today, now

</td><td colspan="1">

`@{CurrentDate.date}`

</td></tr><tr><td colspan="1">

Document > SetProperty

</td><td colspan="1">

value

</td><td colspan="1">

In one month

</td><td colspan="1">

`@{CurrentDate.month(1).date}`

</td></tr><tr><td colspan="1">

Document > SetProperty

</td><td colspan="1">

value

</td><td colspan="1">

Hard-coded date

</td><td colspan="1">

2020-07-14T00:00:00Z

</td></tr><tr><td colspan="1">

Document > SetProperty

</td><td colspan="1">

value

</td><td colspan="1">

Date property from the input document

</td><td colspan="1">

`@{Document["achema:aDateField"]}`

</td></tr></tbody></table></div>


Adding values (days, months, ...) to a date field requires some manipulation (it is easier when using Automation Sc ripting with JavaScripot), please read [this blob](https://www.nuxeo.com/blog/manage-dates-automation-chains/) on the topic.

If you have this error in `server.log`...

```
No type adapter found for input: class org.nuxeo.ecm.automation.core.scripting.DateWrapper and output class java.util.Date

```

... it means you are presenting a `DateWrapper` value type into a field that waits for a`java.util.Date` object.



## User and Group Management Example

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Operation

</th><th colspan="1">

Parameter

</th><th colspan="1">

Expected value

</th><th colspan="1">

Expression Example

</th></tr><tr><td colspan="1">

Document > Document.SetProperty

</td><td colspan="1">

value

</td><td colspan="1">

Hard coded user

</td><td colspan="1">

user:jdoe

</td></tr><tr><td colspan="1">

Document > Document.SetProperty

</td><td colspan="1">

value

</td><td colspan="1">

Hard coded group

</td><td colspan="1">

group:marketing

</td></tr><tr><td colspan="1">

Document > Document.SetProperty

</td><td colspan="1">

value

</td><td colspan="1">

Current user

</td><td colspan="1">

`@{CurrentUser.name}`

</td></tr><tr><td colspan="1">

Notification > Document.Mail

</td><td colspan="1">

from

</td><td colspan="1">

Current user mail

</td><td colspan="1">

`@{CurrentUser.mail}`

</td></tr><tr><td colspan="1">

Notification > Document.Mail

</td><td colspan="1">

to

</td><td colspan="1">

All users of the "ClaimAdjusters" group

</td><td colspan="1">

`@{Fn.getEmailsFromGroup("marketing")}`

</td></tr></tbody></table></div>

#### using `Auth.Login`/`Auth.Logout`
During the flow of a chain, we must change the permissions on a document. For example, Alice is creating a MarketingCampaign and assigns Bob as a creative. Now, Bob must be able to upload files to the campaign: We need to change Bob's permissions on the MarketingCampaign to give him ReadWrite access (assuming he only had Read permission). Alice has not enough rights to change the permission: Calling Document.AddPermission will fail. In our chain, we can do the following instead:

```
. . . previous operations . . .
Auth.LoginAs
Document.AddPermission:
  permission: ReadWrite
  acl: local
  blockInheritance: false
  notify: false
  username: user:bob
Auth.Logout
. . . next operations . . .
```



## Numbers Management example

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Operation

</th><th colspan="1">

Parameter(s)

</th><th colspan="1">

Expected value

</th><th colspan="1">

Expression Example

</th></tr><tr><td colspan="1">

Conversion > Picture.Resize

</td><td colspan="1">

maxHeight

</td><td colspan="1">

Hard coded values

</td><td colspan="1">

100

</td></tr><tr><td colspan="1">

Conversion > Picture.Resize

</td><td colspan="1">

maxHeight

</td><td colspan="1">

Value from a field of input document

</td><td colspan="1">

`@{Document["aSchema:maxHeightForImages"]}`

</td></tr><tr><td colspan="1">

Document > Document.SetProperty

</td><td colspan="1">

value

</td><td colspan="1">

Add two numeric fields

</td><td colspan="1">

`@{Document["invoice:amount"] + Document["invoice:tax"]}`
(the `xpath` parameter of the operation would be `@{Document["invoice:total"]}`

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

`@{Context["documentStored"].name}`

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

## Referencing Automation Chain Parameters

```
@{ChainParameters['parameterName']}
```

## More Advanced Scripts

In this section, we will gather useful scripts so as to share experience on using scripting in automation, especially in the Run Script operation.

{{#> panel type='code' heading='Working with a list of properties'}}

```java
new ArrayList(Arrays.asList(WorkflowVariables["contributors"])); x.add(Context["workflowInitiator"]); WorkflowVariables["contributors"]=x;
// This works for workflow variables, (NodeVariables and WorkflowVariables) but would also work for a list property of a document, see this question on answers (http://answers.nuxeo.com/questions/4240/add-string-to-a-list-string-property-in-pure-studioautomation-for-prototypes)
```

{{/panel}}{{#> panel type='code' heading='Calling a Nuxeo service'}}

```
 @{org.nuxeo.runtime.api.Framework.getService(org.nuxeo.business.days.management.service.BusinessDaysService).getLimitDate("myRule",CurrentDate.date)}
```

{{/panel}}<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Understand Expression and Scripting Languages Used in Nuxeo]({{page page='understand-expression-and-scripting-languages-used-in-nuxeo'}})
- [Automation]({{page page='automation'}})
- [Automation in Nuxeo Studio]({{page space='studio' page='automation'}})
- [Javascript Expression Examples]({{page space='studio' page='javascript-expression-examples'}})
{{/panel}}</div><div class="column medium-6"></div></div>
