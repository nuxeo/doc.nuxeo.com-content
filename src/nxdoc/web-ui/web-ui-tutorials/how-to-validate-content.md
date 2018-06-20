---
title: 'HOWTO: Validate Content of a Form'
review:
    comment: ''
    date: '2018-06-20'
    status:
toc: true
details:
    howto:
        excerpt: Learn how to validate content of a form.
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - lts2017-ok
tree_item_index: 1600
---
## Introduction

This tutorial will demonstrate how to validate the content of a form in Web UI to apply your own set of rules. In this example, we will see how to ensure that the end date of a contract is ulterior to its start date.

## Prerequisites

- A [Contract document type]({{page version='' space='nxdoc' page='web-ui-document-layouts'}})
- The Nuxeo [Web UI addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-web-ui) is installed on your instance.
- In Studio Modeler > **Settings** > **Application Definition**, make sure that Nuxeo Web UI is in the **Packages to Install** list.

## Validating a Rule in the UI
- In Studio Designer
- Generate the create layout for contract
- Switch to code
- Add an id attribute to the start date and end date elements so you can retrieve them later. Result should look like this:

```
<nuxeo-date-picker id="contractStartDate" role="widget" value="{{document.properties.contract:startDate}}" label="Start Date"></nuxeo-date-picker>
<nuxeo-date-picker id="contractEndDate" [role="widget" value="{{document.properties.contract:endDate}}"] label="End Date"></nuxeo-date-picker>
```

- add a `validate` function in the `Polymer` object found between the `script` tags. Result should now look like:

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

- Complete the validate function
```
validate: function() {
  // Nuxeo uses Moment.js (https://momentjs.com) to work with dates on the UI side.
  // We'll leverage this library to do the check.
  if(moment(this.document.properties['contract:endDate']).isBefore(this.document.properties['contract:startDate'])) {
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

- Final result should look like:

```
[...]

<nuxeo-date-picker id="contractStartDate" role="widget" value="{{document.properties.contract:startDate}}" label="Start Date"></nuxeo-date-picker>
<nuxeo-date-picker id="contractEndDate" [role="widget" value="{{document.properties.contract:endDate}}"] label="End Date"></nuxeo-date-picker>

[...]

<script>
Polymer({
  is: [...]
  behaviors: [...],
  properties: { [...] },
  // We're adding a function to validate form here
  // Don't forget to add a comma (,) after the properties object!
  validate: function() {
    // Nuxeo uses Moment.js (https://momentjs.com) to work with dates on the UI side.
    // We'll leverage this library to do the check.
    if(moment(this.document.properties['contract:endDate']).isBefore(this.document.properties['contract:startDate'])) {
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

- Save and deploy. You can check the result in your form now.

Image: validation-error.png

The same operation can be repeated for other layouts (typically the edit or import layouts).

Info panel: this validation only takes place client side. For enhanced security on your data integrity, we recommend adding a server-side check as well.

## Going further - Translating the Error Message

First we need to update the validation function to use a localized message.

In Designer
- Open your layout
- Switch to code
- In the validate function, replace:

```
this.$.contractEndDate.errorMessage = "Contract end date should be ulterior to its start date";
```

- with:
```
this.$.contractEndDate.errorMessage = this.i18n('label.error.message.contractEndDateShouldBeAfterStartDate');
```

- Save

Now we will define the message to display.

In Designer
- Click on the UI tab
- Click on Translations
- Use the default messages.json or create your own language;
- Create a new entry in the JSON file with key `label.error.message.contractEndDateShouldBeAfterStartDate` and your error message as value. Here it is "label.error.message.contractEndDateShouldBeAfterStartDate":"Contract end date should be ulterior to its start date";
- Save your changes.

Done.
