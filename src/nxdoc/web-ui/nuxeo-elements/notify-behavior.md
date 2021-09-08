---
title: Notify Behavior
description: 'Documentation for the notify behavior'
review:
    date: '2021-09-02'
    status: ok
toc: true
labels:
    - lts2021-ok
    - nuxeo-elements
    - nuxeo-web-ui
    - polymer
    - behavior
    - rdias
tree_item_index: 300
---

In [ELEMENTS-1368](https://jira.nuxeo.com/browse/ELEMENTS-1368) we introduced the `nuxeo-notify-behavior`, as an effort to standardize the way our custom elements send notifications upwards in the DOM.

Before the introduction of this behavior, elements would fire a `notify` event via `dispatchEvent` to report information to parent elements. However, this strategy was faulty when the element was not connected to the DOM (e.g., if it was hidden either by a dom-if or a nuxeo-filter).

To address this problem, the new behavior exposes a `notify` method that fires a `notify` event from:
- the current element, if it is attached to the DOM.
- a fallback target element if the current element is disconnected.

The fallback element can be set with a helper method and it can be used at the application level.

On Nuxeo Web UI, the fallback element is the `nuxeo-app` (see [WEBUI-345](https://jira.nuxeo.com/browse/WEBUI-345)).

## How to Use the Behavior

To use the `nuxeo-notify-behavior` in your custom elements, import the behavior with:

```js
import { NotifyBehavior } from '@nuxeo/nuxeo-elements/nuxeo-notify-behavior.js';
```

Next, you just need to call the `notify` method with the required event `options` object (depends on the element handling the event):

```js
_customElementMethod() {
  this.notify({ message: 'A custom message.' });
}
```

Nuxeo Web UI exposes a set of default options to control the notifications, namely:

| Option      | Description                                                                                                                                                                              | Default value |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| abort       | Displays a button to control if a running action can be aborted or not <br>(since version 3.0.6 - see [WEBUI-296](https://jira.nuxeo.com/browse/WEBUI-296)).                             | false         |
| close       | Indicates if the notification should be closed before any other action.                                                                                                                   | false         |
| dismissible | Displays a button to allow the user to dismiss the notification.                                                                                                                         | false         |
| duration    | Automatic notification dismiss timeout in milliseconds. <br>Use 0 for a sticky notification that can be closed by sending another notify request with the `close` option set to `true`.  | 4000          |
| message     | A string containing the message to be displayed in the notification.                                                                                                                     |               |                                                                       |               |

## Set the Fallback Notification Target

To set the fallback notification target, please import the method using:

```js
import { setFallbackNotificationTarget } from '@nuxeo/nuxeo-elements/nuxeo-notify-behavior.js';
```

And call `setFallbackNotificationTarget`, passing the target:

```js
setFallbackNotificationTarget(myCustomFallbackNotificationTargetElement);
```
