---
title: JavaScript code style
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '4685848'
    ajs-parent-page-title: Coding and Design Guidelines
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: JavaScript+code+style
    canonical_source: 'https://doc.nuxeo.com/display/CORG/JavaScript+code+style'
    page_id: '12914850'
    shortlink: ohDF
    shortlink_source: 'https://doc.nuxeo.com/x/ohDF'
    source_link: /display/CORG/JavaScript+code+style
history:
    - 
        author: Anahide Tchertchian
        date: '2014-08-19 11:20'
        message: dd eclipse configuration inf
        version: '4'
    - 
        author: Florent Guillaume
        date: '2013-03-20 14:41'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2013-03-20 12:22'
        message: ''
        version: '2'
    - 
        author: Florent Guillaume
        date: '2013-03-20 11:53'
        message: ''
        version: '1'

---
This page (work in progress) lists common JavaScript issues and recommendations, some of which are completely general, and some specific to Nuxeo integration.

### Eclipse configuration

Eclipse should be configured to use spaces (not tabs) and an indentation of 4 spaces is usually used for JavaScript code (similar to Java code style).

See Window > Preferences > JavaScript > Code Style > Formatter.

## Understanding scoping, closures and loops

JavaScript is a language like many others (like Python) with static scoping and where it's possible to create closures.

However one pitfall of all these languages is particularly important in JavaScript because in JavaScript it's very common to create anonymous functions that capture a variable, for callbacks in particular.

For instance, the following behavior is no surprise:

```javascript
var i = 0
f = function() {alert(i)};
i = 123;
f();
```

This shows an alert with `"123"`. That's because the value of&nbsp;`i` is not resolved at function creation time but the function is a closure over the englobing environment that contains the variable `i`.

This is important in situations like this, where in a loop we define some kind of callbacks, which are called later:

```javascript
var callbacks = [];
for (var i = 0; i < 3; i++) {
    callbacks[i] = function() {alert(i)};
}
for (var j = 0; j < 3; j++) {
    callbacks[j]();
}
```

Here this shows an alert with `"3"` three times, and not `"0"`, then&nbsp;`"1"`, then&nbsp;`"2"`. This is due to the same reason as above, the value of `i` is not resolved at function creation time, but at execution time its current value (`3`) is used.

The standard way to solve this is to force the current value of `i` to be used, and to do that `i` must not just be used by reference, but by value. To do that, we can pass it (by value) to a function, that itself will define the function we need:

```javascript
var callbacks = [];
function createalert(k) {
    return function() {alert(k)};
}
for (var i = 0; i < 3; i++) {
    callbacks[i] = createalert(i);
}
for (var j = 0; j < 3; j++) {
    callbacks[j]();
}
```

In the above, the call to&nbsp;`createalert(i)` actually passes `i` by value, so all works as expected.

But the above is verbose, it's usually written in a more compact manner with an anonymous function:

```javascript
var callbacks = [];
for (var i = 0; i < 3; i++) {
    callbacks[i] = function(k) {
        return function() {alert(k)};
    }(i);
}
for (var j = 0; j < 3; j++) {
    callbacks[j]();
}
```

And actually to confuse things this is often written using the same inner variable twice:

```javascript
var callbacks = [];
for (var i = 0; i < 3; i++) {
    callbacks[i] = function(i) {
        return function() {alert(i)};
    }(i);
}
for (var j = 0; j < 3; j++) {
    callbacks[j]();
}
```

This is described&nbsp;[here in detail](http://robertnyman.com/2008/10/09/explaining-javascript-scope-and-closures/), you should read this page.&nbsp;[This post](http://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example) on StackOverflow is pretty useful as well.

## Using jQuery.proxy to get the correct&nbsp;_this_ in a callback

See&nbsp;[http://stackoverflow.com/questions/4986329/understanding-proxy-in-jquery](http://stackoverflow.com/questions/4986329/understanding-proxy-in-jquery)&nbsp;for uses.

&nbsp;

&nbsp;