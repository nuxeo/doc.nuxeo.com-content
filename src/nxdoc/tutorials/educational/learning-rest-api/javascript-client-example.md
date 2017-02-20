---
title: JavaScript Client Example
review:
    comment: 'Separate pages'
    date: '2017-02-20'
    status: ok
labels:
    - multiexcerpt-include
toc: true
tree_item_index: 400
previous_link: /nxdoc/define-a-cors-configuration
next_link: /nxdoc/log-into-nuxeo-platform

---

There are [several clients available]({{page version='' space='nxdoc' page='client-sdks'}}) to wrap your calls to Nuxeo REST API. During this tutorial we will focus on using the JavaScript (JS) client. Nuxeo JS client is versatile enough to let you work in various contexts:

*   In **Node.js**
*   In the browser by adding the library directly or through Bower
*   In AngularJS applications

The JS client uses promises, which look like this:

{{#> panel type='code' heading='Promise Example'}}

```javascript
var nuxeo = new Nuxeo({...});

nuxeo
  .someClass()
  .someMethod(variable1, variable2)
  .then(function(callResult){
    // the call succeeded
    // now you can do something with the resulting variable
  })
  .catch(function(error){
    // there was an error during the call
    // you can use the error variable to see what went wrong
    throw error;
  });
```

{{/panel}}
