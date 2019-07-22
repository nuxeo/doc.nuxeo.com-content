---
title: 'HOWTO: Validate a Document Type Layout'
review:
    comment: ''
    date: '2019-07-22'
    status:
toc: true
details:
    howto:
        excerpt: Learn how to validate a document type layout.
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - lts2017-ok
    - lts2019-ok
    - mlumeau
tree_item_index: 1600
---

{{! excerpt}}
This tutorial will demonstrate how to validate the content of a form in Web UI to apply your own set of rules. In this example, we will see how to ensure that the end date of a contract is ulterior to its start date.
{{! /excerpt}}

## Prerequisites

- A [Contract document type]({{page version='' space='nxdoc' page='web-ui-document-layouts'}}#create-a-contract-document-type)
- The Nuxeo [Web UI addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-web-ui) installed on your instance.
- In Studio Modeler > **Settings** > **Application Definition**, make sure that **Nuxeo Web UI** is in the **Packages to Install** list.

## Create a Validation Rule

1. In Studio Designer, go to your Contract document type under **Local Types**,
1. Next to the **Create** layout click on **Configure**</br>
    the nuxeo-contract-create-layout.html is created
1. At the bottom of the page, click on **Switch to code**
1. Add an `id` attribute to the start date and end date elements so you can retrieve them later.</br>
    Result should look like this:
    ```
      <nuxeo-date-picker id="contractStartDate" role="widget" value="\{{document.properties.contract:start}}" label="Start Date"></nuxeo-date-picker>
      <nuxeo-date-picker id="contractEndDate" role="widget" value="\{{document.properties.contract:endDate}}" label="End Date"></nuxeo-date-picker>
    ```
1. Add a `validate` function in the `Polymer` object found between the `script` tags.</br>
    Result should now look like:
    ```
    [...]

    <script>
    Polymer({
      is: [...]
      behaviors: [...],
      properties: { [...] },
      // We're adding a function to validate form here
      // Don't forget to add a comma (,) after the properties object!
      validate: function() {
        // Validation logic will go here
      }
    });
    </script>

    [...]
    ```

1. Complete the validate function
  ```
  validate: function() {
    // Nuxeo uses Moment.js (https://momentjs.com) to work with dates on the UI side.
    // We'll leverage this library to do the check.
    if(moment(this.document.properties['contract:endDate']).isBefore(this.document.properties['contract:start'])) {
      // Set the field in error state to alert user
      this.$.contractEndDate.invalid = true;

      // Display a message
      this.$.contractEndDate.errorMessage = "Contract end date should be ulterior to its start date";

      // Validate function expects us to return a boolean
      // Used to tell if the form should be submitted
      return false;
    }
    return true;
  }
  ```

1. Final result should look like:

  ```
  [...]

  <nuxeo-date-picker id="contractStartDate" role="widget" value="\{{document.properties.contract:startDate}}" label="Start Date"></nuxeo-date-picker>
  <nuxeo-date-picker id="contractEndDate" role="widget" value="\{{document.properties.contract:endDate}}"   label="End Date"></nuxeo-date-picker>

  [...]

  <script>
  Polymer({
    is: 'nuxeo-contract-create-layout',
    behaviors: [Nuxeo.LayoutBehavior],
    properties: {

      /**
        * @doctype contract
        */
      document: {
        type: Object,
      },

    },
    // Don't forget to add a comma (,) after the properties object!
    // We're adding a function to validate form here
    validate: function() {
      // Nuxeo uses Moment.js (https://momentjs.com) to work with dates on the UI side.
      // We'll leverage this library to do the check.
      if(moment(this.document.properties['contract:endDate']).isBefore(this.document.properties['contract:start'])) {
        // Set the field in error state to alert user
        this.$.contractEndDate.invalid = true;

        // Display a message
        this.$.contractEndDate.errorMessage = "Contract end date should be ulterior to its start date";

        // Validate function expects us to return a boolean
        // Used to tell if the form should be submitted
        return false;
      }
      return true;
    }
  });
  </script>

  [...]
  ```

1. Save and deploy. You can check the result in your form now.

  ![]({{file name='validation-error.png'}} ?w=250,border=true)

The same operation can be repeated for other layouts (typically the edit or import layouts).

{{#> callout type='info' }}
This validation only takes place client side. For enhanced security on your data integrity, we recommend adding a server-side check as well.
{{/callout}}

## Going further - Translating the Error Message

First we need to update the validation function to use a localized message.

On Nuxeo Designer side:
1. Open your layout
1. Click on **Switch to code** button at the bottom of the page,
1. In the validate function, replace:
  ```
  this.$.contractEndDate.errorMessage = "Contract end date should be ulterior to its start date";
  ```

  with:

  ```
  this.$.contractEndDate.errorMessage = this.i18n('label.error.message.contractEndDateShouldBeAfterStartDate');
  ```
1. Save your modifications.

Now we will define the message to display:

1. Still on Nuxeo Designer side, go to the **UI** tab and then **Translations**
1. Use the default messages.json or create your own language;
1. Create a new entry in the JSON file with key `label.error.message.contractEndDateShouldBeAfterStartDate` and your error message as value. Here it is:
  ```
  "label.error.message.contractEndDateShouldBeAfterStartDate":"Please make sure that the Contract end date is ulterior to its start date"
  ```
1. Save your changes and deploy your Studio project:

  ![]({{file name='validation-error-translated.png'}} ?w=550,border=true)

Done.
