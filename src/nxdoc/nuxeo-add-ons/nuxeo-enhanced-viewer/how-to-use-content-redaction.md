---
title: 'HOWTO: Use Content Redaction'
description: 'Guidance to leverage content redaction with Nuxeo Enhanced Viewer'
review:
    comment: ''
    date: '2022-07-13'
    status: ok
labels:
    - addon
    - tutorial
    - howto
toc: true
tree_item_index: 100
---

{{#> callout type='info'}}
The Content Redaction feature requires at minimum NEV `2.2.0` and Nuxeo ARender addon `2021.3.0`.
{{/callout}}

Protecting and removing personal identifying information (PII) from your documents can be a requirement in order to comply with regulations such as the General Data Privacy Regulation (GDPR) or the California Consumer Privacy Act (CCPA).

Nuxeo Enhanced Viewer helps you with this use case by allowing to apply temporary or permanent redactions to your content. This page explains what to expect from this feature, and how to leverage it in your Nuxeo instance.

## Enabling the Redact Permission

Since Nuxeo ARender addon `2021.3.0`, a new permission called `Redact` is available. This permission allows a user to get access to the redaction actions described below.

By default, the permission is not displayed in Web UI in order to prevent changes. To make use of it from Web UI, you can take our existing how-to as a basis and tweak it to [make the Redact permission visible or include it in an existing or a custom permission]({{page page='how-to-grant-the-edit-permission-without-the-remove-permission'}}).

## Functional Overview

A user with the `Redact` permission can cover up the main binary file of a document using multiple options, and generate a permanently redacted file.

{{#> callout type='warning'}}
Redaction actions mentioned below act as a cover up and will not be sufficient to ensure security by themselves. To ensure that anything you covered is permanently removed, <a href="#generating-a-permanently-redacted-file">a permanently redacted file needs to be created</a>.
{{/callout}}

{{#> callout type='tip'}}
NEV `2.2.0` introduces new buttons. If you did override the list of buttons to display, head to the [release notes for NEV 2.2.0]({{page space='nxdoc' page='nuxeo-enhanced-viewer-release-notes-2-2-0'}}) to see what was added.
{{/callout}}

### Redacting Text

Using the `Redact` button allows a user to highlight any portion of text in a document and redact it. The action is in repeat mode by default; you can add several redactions in a row and click on the button again to stop adding more.

{{! multiexcerpt name='who-can-see-through-redactions'}}
{{#> callout type='note'}}
Only users with the Redact permission can see through redactions when they are using Nuxeo Enhanced Viewer.
{{/callout}}
{{! /multiexcerpt}}

### Redacting an Area

Using the `Redact Area` button allows a user to highlight any area (e.g., over images) in a document and redact it. The action is in repeat mode by default; you can add several redactions in a row and click on the button again to stop adding more.

{{{multiexcerpt 'who-can-see-through-redactions' page='how-to-use-content-redaction'}}}

### Searching to Redact

From the search panel, entering a keyword and using the `Search and Redact` button allows you to redact all occurrences of a particular keyword. The redactions are applied and saved immediately when pressing the button.

{{#> callout type='note'}}
Search to redact is only applied manually.
{{/callout}}

### Adding a Reason for Redactions

After adding your redactions, a reason can be added for them as a comment. This can be achieved in different ways:

1. Select any redaction and press the sticky note button to add your reason.
1. Use the annotations panel, and double click on the corresponding redaction to insert your text
1. Replying to the original comment if you are not the author of the redaction

### Editing or Deleting Redactions

To edit or delete an existing redaction, click on it in the document. New options will appear in the top panel; press the trash button to delete it.

You can edit or delete your own redactions if you are their author, or any of them if you are an administrator.

### Printing or Downloading a Redacted Version

Printing or Downloading options depend on your privileges.

Users _without_ the `Redact` permission will always print or download a redacted copy of the document, except for the `Download with FDF annotations` option. This option does not allow redactions to be applied permanently, and therefore we recommend [hiding the download with FDF annotations option]({{page space='nxdoc' page='nuxeo-enhanced-viewer-release-notes-2-2-0'}}) for tighter security.

To download or print a redacted version of the document, they can use the standard `Print` and `Download` menu options.

Users who have the `Redact` permission have additional options at their disposal. For them, using the standard `Print` and `Download` menu options will return a document _without_ any redaction. They should use the dedicated options to obtain a copy with permanently burnt in redactions instead:

- Using the `Print with redactions` option from the print menu
- Using the `Download with redactions` option from the download menu

### Generating a Permanently Redacted File

It is important to remember that redactions are NOT a secure option until a permanently redacted file is generated. They only apply in the context of Nuxeo Enhanced Viewer, and accessing the file through any other means would show it unredacted.

Users with the `Redact` permission can generate a permanently redacted document at any time using the dedicated button. By default, pressing this button will:
- Create a copy of the document in the parent location named `[Document title] - Redacted`
- Replace the main binary file with its permanently redacted version

## Configuring the Permanently Redacted File Generation Logic

You can change the logic that generates a permanently redacted document at any time using configuration and make it your own. Under the hood, Nuxeo uses an [automation chain]({{page space='studio' page='automation-chains'}}) to execute it.

Assuming you already know [how to create an automation chain]({{page space='nxdoc' page='how-to-create-an-automation-chain'}}), here is the information you need to know to override the existing chain:

- The chain should be named `ARenderRedactCompletion`
- You will receive as the input for the first operation the redacted file (`Blob` type)

You can declare the following parameters for your chain:
- `originalDoc` (`string` type): document id for the unredacted document
- `nbRedactions` (`int` type): number of redactions applied to the original document

Declaring these parameters allows you to fine tune the logic to apply, for example to create a relation between the unredacted document and the redacted one, or to avoid creating a new document if no redaction has been applied yet.

{{#> callout type='tip'}}
While you need to create a chain in order to override the logic, remember that you can plug an [automation script]({{page space='nxdoc' page='automation-scripting'}}) that you created previously into it to express finer logic. Your existing automation scripts are found in the `scripting` category.
{{/callout}}

## Questions and Answers

How does it behave with multi layer pdf files?

How does it behave with multiple docs?

Is there a way for me to make this work at scale?
  AI + creating annotations programatically

Known limitations

Update https://doc.nuxeo.com/nxdoc/nuxeo-data-privacy/ to mention redaction
