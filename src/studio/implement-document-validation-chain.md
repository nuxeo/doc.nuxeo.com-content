---
title: Implement document validation chain
review:
    comment: ''
    date: ''
    status: ok
labels:
    - tuto-automation
confluence:
    ajs-parent-page-id: ''
    ajs-parent-page-title: ''
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Implement+document+validation+chain
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Implement+document+validation+chain'
    page_id: '1409377'
    shortlink: YYEV
    shortlink_source: 'https://doc.nuxeo.com/x/YYEV'
    source_link: /display/Studio/Implement+document+validation+chain
history:
    - 
        author: Solen Guitter
        date: '2010-05-20 14:21'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2010-05-20 14:21'
        message: look changes
        version: '15'
    - 
        author: Solen Guitter
        date: '2010-05-20 14:18'
        message: typo and added link
        version: '14'
    - 
        author: Solen Guitter
        date: '2010-05-19 11:19'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2010-05-19 11:09'
        message: Reorganized instructions
        version: '12'
    - 
        author: Alain Escaffre
        date: '2010-04-23 20:26'
        message: ''
        version: '11'
    - 
        author: Alain Escaffre
        date: '2010-04-23 20:25'
        message: ''
        version: '10'
    - 
        author: Alain Escaffre
        date: '2010-04-23 20:21'
        message: ''
        version: '9'
    - 
        author: Alain Escaffre
        date: '2010-04-23 20:21'
        message: li
        version: '8'
    - 
        author: Alain Escaffre
        date: '2010-04-23 20:16'
        message: ''
        version: '7'
    - 
        author: Alain Escaffre
        date: '2010-04-23 20:14'
        message: ''
        version: '6'
    - 
        author: Alain Escaffre
        date: '2010-04-23 20:09'
        message: ''
        version: '5'
    - 
        author: Alain Escaffre
        date: '2010-04-23 20:07'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2010-04-23 19:59'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2010-04-23 19:45'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2010-04-23 19:42'
        message: ''
        version: '1'

---
We want people from the group "validators" to be able to change the lifecycle state of the document to "valid". When doing this, we expect some actions to be automatically run:

*   Storing the date of validation on the document itself, in `dc:valid` metadata;
*   Storing a pdf transformation of the file on the document itself, so that users don't have to rely on the dynamic transform service to get the file (this will be needed too when we will make the document go from "revision" state back to "valid");
*   Storing on the document the version of the module at the time the document is validated, so that we always know for which version of the module the document was relevant.

Validation action will be displayed as an icon on the contextual actions of the document, on the right upper side of the screen, beside print, email and zip export actions.
Here is the result of the validation we want to achieve on the document's metadata:

![]({{file name='Image 48.png'}} ?border=true,thumbnail=true)

{{#> panel heading='To implement the validation chain:'}}

1.  Declare the action by clicking on **User Actions** in the Studio tree (see also [how to create a new action]({{page space='nxdoc' page='how-to-create-an-automation-chain#automation-chain-binding-button'}})).
2.  Fill in the filtering information.
    In our sample, we want to display the button when the following conditions are met:
    *   the current document is of type "DocumentationItem",
    *   it is a regular document
    *   its lifecycle is "draft"
    *   the user is a member of the group "validators":
        ![]({{file name='Image 46.png'}} ?border=true,thumbnail=true)
3.  Create the corresponding automation chain.
    As we need to reuse the conversion of the `content:file` blob into pdf and storing of it as a blob in `pdf_version` field when we make the document go from "revision" back to "valid", we actually create two chains here:
    *   a PDF conversion chain,
    *   a validation chain, that executes the PDF conversion chain at some point.
        See below for each chain configuration.
        ![]({{file name='Image 47.png'}} ?border=true,thumbnail=true)

{{/panel}}

##### The pdf conversion subchain parameters

<table><tbody><tr><th colspan="1">

N&deg;

</th><th colspan="1">

Operation

</th><th colspan="1">

Parameter 1

</th><th colspan="1">

parameter 2

</th></tr><tr><td colspan="1">

1

</td><td colspan="1">

Fetch > Context Document

</td><td colspan="1">

_

</td><td colspan="1">

_

</td></tr><tr><td colspan="1">

2

</td><td colspan="1">

Push and Pop > Push Document

</td><td colspan="1">

_

</td><td colspan="1">

_

</td></tr><tr><td colspan="1">

3

</td><td colspan="1">

Files > Get Document File

</td><td colspan="1">

xpath: `file:content`

</td><td colspan="1">

_

</td></tr><tr><td colspan="1">

4

</td><td colspan="1">

Files > Convert to pdf

</td><td colspan="1">

_

</td><td colspan="1">

_

</td></tr><tr><td colspan="1">

5

</td><td colspan="1">

Context > Set variable from input

</td><td colspan="1">

name: `pdf`

</td><td colspan="1">

_

</td></tr><tr><td colspan="1">

6

</td><td colspan="1">

Push and Pop > Pop Document

</td><td colspan="1">

_

</td><td colspan="1">

_

</td></tr><tr><td colspan="1">

7

</td><td colspan="1">

Document > Set File

</td><td colspan="1">

file: `expr:pdf`

</td><td colspan="1">

xpath: `pdf_version`

</td></tr></tbody></table>{{#> callout type='tip' }}

The input and output of some of the operations (3,4,5) handles a different type: "Blob". If you don't order well the elements, it will alert you by coloring the operation in red. See the [Operation flow - input and output typing]({{page space='studio' page='operation-flow-input-and-output-typing'}}) page.

{{/callout}}

##### The validation chain parameters

<table><tbody><tr><th colspan="1">

N&deg;

</th><th colspan="1">

Operation

</th><th colspan="1">

Parameter 1

</th><th colspan="1">

parameter 2

</th></tr><tr><td colspan="1">

1

</td><td colspan="1">

Fetch > Context Document

</td><td colspan="1">

_

</td><td colspan="1">

_

</td></tr><tr><td colspan="1">

2

</td><td colspan="1">

Document > Follow lifecycle transition

</td><td colspan="1">

value: `validate`

</td><td colspan="1">

_

</td></tr><tr><td colspan="1">

3

</td><td colspan="1">

Chain execution > Run document chain

</td><td colspan="1">

id: `SetPDFVersionChain`

</td><td colspan="1">

_

</td></tr><tr><td colspan="1">

4

</td><td colspan="1">

Document > Update property

</td><td colspan="1">

value: `expr:CurrentDate.date`

</td><td colspan="1">

xpath: `dc:valid`

</td></tr><tr><td colspan="1">

5

</td><td colspan="1">

Push and Pop > Push Document

</td><td colspan="1">

_

</td><td colspan="1">

_

</td></tr><tr><td colspan="1">

6

</td><td colspan="1">

Document > Get Parent

</td><td colspan="1">

type: `Module`

</td><td colspan="1">

_

</td></tr><tr><td colspan="1">

7

</td><td colspan="1">

Context > Set context variable

</td><td colspan="1">

name: `module_version`

</td><td colspan="1">

value: `expr:Document["module:module_version"]`

</td></tr><tr><td colspan="1">

8

</td><td colspan="1">

Push and Pop > Pop Document

</td><td colspan="1">

_

</td><td colspan="1">

_

</td></tr><tr><td colspan="1">

9

</td><td colspan="1">

Document > Update property

</td><td colspan="1">

value: `expr:module_version`

</td><td colspan="1">

xpath: `documentationitem:first_module_version`

</td></tr></tbody></table>{{#> callout type='tip' }}

In Validation chain step 3 we call the subchain that operates the PDF conversion.

{{/callout}}