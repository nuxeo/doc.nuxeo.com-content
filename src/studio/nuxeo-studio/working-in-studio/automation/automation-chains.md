---
title: Automation Chains
review:
    comment: ''
    date: ''
    status: ok
labels:
    - automation-chain
toc: true
confluence:
    ajs-parent-page-id: '12911806'
    ajs-parent-page-title: Automation
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Automation+Chains
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Automation+Chains'
    page_id: '18451807'
    shortlink: X40ZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/X40ZAQ'
    source_link: /display/Studio/Automation+Chains
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-08-30 14:24'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2015-03-12 09:49'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2014-08-01 18:18'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-08-01 18:17'
        message: ''
        version: '16'
    -
        author: Alain Escaffre
        date: '2014-07-31 18:38'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2014-07-30 12:05'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2014-07-30 12:05'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2014-07-30 12:03'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2014-07-30 11:55'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-07-30 11:45'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-07-30 11:32'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-07-30 11:26'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-06-12 11:15'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-06-12 11:07'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2014-06-12 00:05'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2014-06-12 00:03'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-04-07 11:27'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-04-02 02:31'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-04-02 02:31'
        message: ''
        version: '1'

---
{{#> callout type='info' heading='Watch the related courses on Nuxeo University'}}
[Course on Automation chains, Automation scripting and Events](https://university.nuxeo.com/learn/public/course/view/elearning/46/automation-chains-automation-scripting-and-events)
![]({{file name='university-automation.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Concept

Concepts about Automation are introduced in the [developer documentation]({{page space='nxdoc' page='content-automation-concepts'}}). You should read them before starting using this feature.

The Studio Automation Chain editor allows you to build the chains of operations and fill the necessary operation parameters.

## Chain Editor

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Automation Chains/Automation Chain Edition
    name: AutomationChainEdition.png
    studio_modeler#screenshot#up_to_date
--}}
![Automation Chain Edition](nx_asset://7cee0f71-60f7-424b-8a41-40037bf9e6b0 ?w=650,border=true)

### Principle

To edit a chain, you just need to select a category on the first column, then an operation on the second one, then drop the operation on the right, fill its parameters, and save. You can use the parameter helper on each parameter of the operations to find specific Automation EL expressions.

### Detailed Screen Review

*   **Fetch > Context Document(s)**: This operation is always there when you create a chain. It is to remind the user that there is always a document in input of an automation chain, injected by the Automation service, whether it is the current UI document, or the document bound to the listener, or to the workflow. You can remove this operation from your chain, it won't change anything.

On each operation:

*   ![]({{file name='help-icon.png' page='studio-icons-index'}}): Find here a first documentation of the operation: what are the expected input and output, and a small description of the operation's role. From there you can access the online help (see next).
*   **See Online Help**: This link opens an online documentation page specific to the operation. You will most of the time find additional examples of how to use a specific operation.
*   **Edit**: Switches the operation to edit mode for editing the values of your operation.
*   ![]({{file name='new_script.gif' page='studio-icons-index'}}): Opens a popup with helpers for Automation EL syntax. See the page [Use of MVEL in Automation Chains]({{page space='nxdoc' page='use-of-mvel-in-automation-chains'}}).
*   **Read**: Switches the operation to view mode.

## Chain Parameters

![]({{file name='NuxeoStudioChainParameters.png'}} ?w=650,border=true)

On this screen you can add new parameters. This can be useful when you want to [write re-usable chains]({{page space='nxdoc' page='how-to-write-reusable-automation-chains'}}).

*   **Add parameter:** Adds a placeholder for a new parameter, for which you need to specify the name (used for referencing it after that in the chain, using `ChainParameters['parameterName']`).
*   **Type**: For now always set to string, this may change in the future.

## Switch Editor

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Automation Chains/Automation Chains Parameters
    name: NuxeoStudioChainParameters.png
    studio_modeler#screenshot#up_to_date
--}}
![Automation Chains Parameters](nx_asset://f22b5236-4fc0-45bd-adb8-1f2c71610bb0 ?w=650,border=true)

The Studio Automation Chain integrates a new editor called YAML editor which enables you to edit your chain in plain text. You can click on the button **Switch editor** to activate this feature. You can switch back to the visual editor whenever you want.

For more information on the Studio Automation Chains, see [all the operations available](http://explorer.nuxeo.org/nuxeo/site/distribution/current/listOperations).

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [How to Create an Automation Chain]({{page space='nxdoc' page='how-to-create-an-automation-chain'}})
- [How to Write Reusable Automation Chains]({{page space='nxdoc' page='how-to-write-reusable-automation-chains'}})
- [How to Inherit a Metadata from a Parent Document]({{page space='nxdoc' page='how-to-inherit-metadata-from-a-parent-document'}})
- [Debugging Automation Chains]({{page space='nxdoc' page='debugging-automation-chains'}})
- [Calling Automation from Java]({{page space='nxdoc' page='calling-automation-from-java'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
