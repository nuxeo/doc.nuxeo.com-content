---
title: Automation Scripting
review:
    comment: ''
    date: ''
    status: ok
labels:
    - automation
    - javascript
toc: true
confluence:
    ajs-parent-page-id: '12911806'
    ajs-parent-page-title: Automation
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Automation+Scripting
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Automation+Scripting'
    page_id: '24674340'
    shortlink: JIB4AQ
    shortlink_source: 'https://doc.nuxeo.com/x/JIB4AQ'
    source_link: /display/Studio/Automation+Scripting
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2016-03-17 17:28'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2016-03-17 17:27'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-09-07 09:21'
        message: 'Add missing borders to screenshots  '
        version: '7'
    -
        author: Vladimir Pasquier
        date: '2015-06-01 15:51'
        message: ''
        version: '6'
    -
        author: Vladimir Pasquier
        date: '2015-06-01 15:49'
        message: ''
        version: '5'
    -
        author: Vladimir Pasquier
        date: '2015-05-25 18:37'
        message: ''
        version: '4'
    -
        author: Vladimir Pasquier
        date: '2015-05-25 16:23'
        message: ''
        version: '3'
    -
        author: Vladimir Pasquier
        date: '2015-05-25 16:15'
        message: ''
        version: '2'
    -
        author: Vladimir Pasquier
        date: '2015-05-25 15:38'
        message: ''
        version: '1'

---
Automation Scripting is a Nuxeo module which provides ability to create and contribute Automation chain/operation in JavaScript.

{{{multiexcerpt 'disabling-feature' page='branding'}}}

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Video on Automation Scripting](https://university.nuxeo.com/learn/public/course/view/elearning/47/implementing-your-own-operation-with-automation-scripting)
![]({{file version='' space='nxdoc' page='university' name='university-scripting.png'}} ?w=450,border=true)
{{/callout}}

{{#> callout type='note' }}

Automation scripting is still in Beta state: It is subject to frequent improvements or user experience changes that may require you to update your script when going out of the Beta state. One of the improvements that will come in the future is a validation of your script. Currently, Nuxeo Studio does not check whether your script can be correctly interpreted by Nuxeo Platform once it is deployed. Don't forget to wrap your code within the `run` function.

{{/callout}}

## Scripting Editor

![]({{file name='Screenshot 2015-05-25 18.08.45.png'}} ?w=600,border=true)

The Scripting Editor tab enables you to add JavaScript code using auto-completion.

*   **Autocompletion**: For instance, start typing `Create` and select the operation `Collection.Create`.
    ![]({{file name='automation_scripting_autocompletion1.png'}} ?border=true)

    The operation function is added to the script.
    ![]({{file name='Screenshot 2015-05-25 18.10.51.png'}} ?w=500,h=408,border=true)

*   **Disable Helper Comment**: The description of the operation is displayed as comments by default. Check the box Disable Helper Comments to stop adding descriptions with operations.
    ![]({{file name='automation_scripting_disable_helpers.png'}} ?w=350,border=true)

*   **Input and Output types**: in order to use Automation scripting into Automation Chains, input and output types of the script can be defined. For Automation Chains scripting injection, please find custom scripts into **Scripting** category as follow:
    ![]({{file name='Screenshot 2015-05-25 18.12.19.png'}} ?w=500,h=140,border=true)
    ![]({{file name='Screenshot 2015-05-25 18.16.50.png'}} ?w=500,h=166,border=true)

*   **Javascript editor validator**: to help you debugging and writing JavaScript code, **Studio** Automation scripting editor displays potential code issues:
    ![]({{file name='Screenshot 2015-05-25 18.19.09.png'}} ?w=500,h=230,border=true)

*   **Platform functions**: Platform function helpers are now available in Automation scripting and can be found under 'Fn' object:
    ![]({{file name='Screenshot 2015-05-25 20.36.53.png'}} ?w=300,h=227,border=true)

## Parameters

The **Parameters** tab to add custom parameters accessible through the `params` field.

![]({{file name='automation_scripting_parameters_tab.png'}} ?w=600,border=true)

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation '}}

- [Automation in Nuxeo Studio]({{page page='automation'}})
- [Content Automation Concepts]({{page space='nxdoc' page='content-automation-concepts'}})
- [Automation Scripting developer documentation]({{page space='nxdoc' page='automation-scripting'}})

{{/panel}}</div><div class="column medium-6">

</div></div>
