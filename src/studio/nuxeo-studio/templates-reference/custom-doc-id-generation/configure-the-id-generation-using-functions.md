---
title: Configure the ID generation using functions
review:
    comment: ''
    date: ''
    status: ok
labels:
    - tuto-automation
    - tuto-event-handler
    - content-review-6-0
confluence:
    ajs-parent-page-id: '3867540'
    ajs-parent-page-title: Custom Doc ID Generation
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Configure+the+ID+generation+using+functions
    canonical_source: >-
        https://doc.nuxeo.com/display/Studio/Configure+the+ID+generation+using+functions
    page_id: '3867557'
    shortlink: pQM7
    shortlink_source: 'https://doc.nuxeo.com/x/pQM7'
    source_link: /display/Studio/Configure+the+ID+generation+using+functions
history:
    - 
        author: Solen Guitter
        date: '2015-04-07 08:01'
        message: ix vocabulary "TypePrefix" instead of "TypePrefixVocabulary
        version: '20'
    - 
        author: Solen Guitter
        date: '2014-03-07 17:21'
        message: Formatting
        version: '19'
    - 
        author: Solen Guitter
        date: '2011-09-06 17:05'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2011-09-06 17:05'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2011-09-06 15:38'
        message: ''
        version: '16'
    - 
        author: Darcy Carrié
        date: '2011-02-11 16:16'
        message: ''
        version: '15'
    - 
        author: Darcy Carrié
        date: '2011-02-11 16:15'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2010-09-24 15:32'
        message: added note on key double quotes
        version: '13'
    - 
        author: Solen Guitter
        date: '2010-09-24 11:27'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2010-09-24 10:53'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2010-09-24 10:48'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2010-09-24 10:48'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2010-09-24 10:47'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2010-09-24 10:46'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2010-09-24 10:46'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2010-09-24 10:22'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2010-09-15 17:39'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2010-09-13 07:27'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2010-09-13 07:20'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2010-09-06 18:24'
        message: ''
        version: '1'

---
In the two previous steps, we have:

*   [created a new "File" document type with "type" and "UID" metadata]({{page page='adding-a-type-property-to-file-document-type'}}),
*   [created the vocabularies for type drop-down list values and for the prefix that will be used to generate the UID]({{page page='declaring-vocabularies'}}).

Now, we want the UID of "files" to be updated just after the creation of the document. This ID will be formed using the prefix corresponding to the type of the document and an incremental number.

To do this, we will create a listener ([step 1 below](#listner)) that will call an automation chain to update the `uid:uid` of the document ([step 2 below](#chain)) using the `Fn.getNextId` and `Fn.getVocabularyLabel` functions.

## {{> anchor 'listener'}}Step 1: Creating the Listener

1.  Click on **Event Handlers** in Studio tree (Automation section) and click on **New**.
2.  On the "Create Event Handler" window, enter the Feature Id as `UIDUpdateListener` and click **Next**.
3.  On the listener configuration form:
    *   select "Document created" in the events list, to update the UID of the document only when the document is created,
    *   select "File" in the filtering section, to limit execution of the listener to `File` document type.
    *   Click the **Create** link under "**Select the operation chain that should be executed by the handler**" to create the automation chain.

## {{> anchor 'chain'}}Step 2: Creating the Automation Chain to Update the UID

After clicking the **Create** link the listener is automatically saved and the operation chain creation pop up window is displayed.

1.  Fill the name of the automation chain : `UIDUpdateChain` and click **OK**.
2.  Edit the chain with the parameters below.
3.  Click **Save**.
    You can now deploy your plugin in a Nuxeo DM application.

<table><tbody><tr><th colspan="1">

Step

</th><th colspan="1">

Operation

</th><th colspan="1">

Parameter 1

</th><th colspan="1">

Parameter 2

</th></tr><tr><td colspan="1">

1

</td><td colspan="1">

Fetch > Context Document(s)

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

2

</td><td colspan="1">

Execution Context > Set Context Variable

</td><td colspan="1">

Name: `typeValue`

</td><td colspan="1">

Value: `@{Document["additionalInfo:type"]}`

</td></tr><tr><td colspan="1">

3

</td><td colspan="1">

Execution Context > Set Context Variable

</td><td colspan="1">

Name: `prefixValue`

</td><td colspan="1">

Value: `@{Fn.getVocabularyLabel("TypePrefix", typeValue)}`

</td></tr><tr><td colspan="1">

4

</td><td colspan="1">

Execution Context > Set Context Variable

</td><td colspan="1">

Name: `idValue`

</td><td colspan="1">

Value: `@{prefixValue}-@{Fn.getNextId(prefixValue)}`

</td></tr><tr><td colspan="1">

5

</td><td colspan="1">

Document > Update Property

</td><td colspan="1">

Value: `@{idValue}`

</td><td colspan="1">

xpath: `uid:uid`

</td></tr></tbody></table>{{#> callout type='note' }}

If you use the editor, be careful to remove the key's double quotes in functions.

{{/callout}}