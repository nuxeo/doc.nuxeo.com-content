---
title: 'HOWTO: Use Web UI Internal Events'
review:
    comment: ''
    date: '2018-05-15'
    status: ok
toc: false
details:
    howto:
        excerpt: Learn how to use Web UI internal events.
        level: Advanced
        tool: code
        topics: UIElements, Events
labels:
    - tutorial
    - polymer
    - lts2017-ok
tree_item_index: 1500

---

You can fire a couple of events from your extensions/contributions in order to tell the Web UI to perform some actions. Here are the common and useful ones:

| Event name         | Purpose                                                     | Context                         | Event details                        |
|:-------------------|:------------------------------------------------------------|:--------------------------------|:-------------------------------------|
| `navigate`         | Navigate to a document                                      | Can be fired from anywhere      | `doc`: the document to navigate to   |
| `notify`           | Toast a message                                             | Can be fired from anywhere      | `message`: the message to be toasted |
| `document-updated` | Refresh the current document                                | Can be fired from anywhere      |                                      |
| `refresh`          | Update the current listing by fetching data from the server | Can be fired in result listings |                                      |
| `refresh-display`  | Refresh the current listing and keep selected items         | Can be fired in result listings |                                      |

As a reminder, you can fire your custom events
 - with Polymer 2 legacy syntax:
```
this.fire('navigate', {
    doc: this.document
});
```
 - with Polymer 2 ES6 class-based syntax:
```
const event = new CustomEvent('navigate', {
    composed: true,
    bubbles: true,
    detail: {
        doc: this.document
    }
});
this.dispatchEvent(event);
```
