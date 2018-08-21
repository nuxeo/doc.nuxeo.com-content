---
title: 'Web UI Diff'
review:
    comment: ''
    date: '2018-08-14'
    status: ok
toc: true
labels:
    - nuxeo-web-ui
    - diff
    - gbarata
tree_item_index: 400
---

Diff comes by default with Web UI, and it allows two documents to be compared side-by-side at the same time. It does not depend on the [Nuxeo Diff addon]({{page page='nuxeo-diff'}}).

Diff for Web UI works by comparing the JSON structure of the documents using the [jsondiffpatch](https://github.com/benjamine/jsondiffpatch) library, then iterating through each field common to both documents, and representing the difference with a dedicated element, henceforth referred to as "diff element".

## Contributing Custom Diff Elements

These elements are registered in a [non-vulcanized file](https://github.com/nuxeo/nuxeo-web-ui/blob/release-10.2/elements/diff/imports.html), which is loaded by the Diff page. By default, this file contains diff elements to represent fields of type date, document, user, directory and blob, but custom elements can be registered to represent fields with specific types or names:

```javascript
Nuxeo.Diff.registerElement('nuxeo-blob-diff', {type: 'blob'});
...
Nuxeo.Diff.registerElement('nuxeo-blob-diff', {property: 'file:content'});
```

A custom diff element must extend the [`Nuxeo.DiffBehavior`](https://github.com/nuxeo/nuxeo-web-ui/blob/release-10.2/elements/diff/nuxeo-diff-behavior.html) and should include the [`nuxeo-diff-styles`](https://github.com/nuxeo/nuxeo-web-ui/blob/release-10.2/elements/diff/nuxeo-diff-styles.html) module:

```html
<dom-module id="my-custom-diff-element">
  <template>
    <style include="nuxeo-diff-styles">
      /* ... */
    </style>
    <!-- ... -->
  </template>

  <script>
    Polymer({
      is: 'my-custom-diff-element',
      behaviors: [Nuxeo.DiffBehavior]
    });
  </script>
</dom-module>
```

## Considerations When Creating Custom Diff Elements

A diff element is responsible for displaying the field's label, the value and any differences in the value, but [`Nuxeo.DiffBehavior`](https://github.com/nuxeo/nuxeo-web-ui/blob/release-10.2/elements/diff/nuxeo-diff-behavior.html) provides several helpers to aid in this task. A `displayLabel` boolean property is present to determine whether the label must be displayed or not, and several methods are supplied to determine the several different conditions in which the value must be represented:

- **no changes**: only the raw value must be displayed; this condition can be checked with the `_hasNoChanges` method
- **changes**:
  * **additions**: an addition ocurred, checked with the `_hasAddition` method
  * **deletions**: a deletion ocurred, checked with the `_hasDeletion` method
  * **modifications**: the value was modified, checked with the `_hasModification` method

In case of representing the differences of a value of type `Object`, the following conditions must also be covered:
  * **object with inner changes**: there were changes in one of the properties of the value, which might have additions and/or deletions
  * **arrays with inner changes**: there were changes in one ore more of the the array elements, which in some cases might require a dedicated element to represent these differences

Please check the source code for the elements representing differences on [users](https://github.com/nuxeo/nuxeo-web-ui/blob/release-10.2/elements/diff/elements/nuxeo-user-diff.html) and [arrays of users](https://github.com/nuxeo/nuxeo-web-ui/blob/release-10.2/elements/diff/elements/nuxeo-user-arr-diff.html) for implementation examples.
