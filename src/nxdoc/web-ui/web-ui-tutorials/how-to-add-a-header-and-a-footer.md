---
title: 'HOWTO: Add a Header and a Footer to Web UI'
description: Learn how to customize Web UI interface by adding an external header and footer.
review:
    comment: ''
    date: '2021-06-23'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to customize Web UI interface by adding an external header and footer.
        level: Beginner
        tool: code
        topics: Theming
labels:
    - lts2021
    - tutorial
    - nuxeo-web-ui
tree_item_index: 460
---

{{! excerpt}}
In this tutorial, we'll guide you through customizing Nuxeo Web UI by adding a header and a footer to the interface. Even though we had the possibility of adding an external header to Web UI, we are now introducing the ability to add a footer as well.
{{! /excerpt}}

## Scope

There might be some situations where you need to add an external header or footer to your Nuxeo application. In some cases, you might need to have a banner with the client's brand wrapping the application; or perhaps you might need to include a footer that provides important copyright information — either way, you can now do it thanks to two CSS variables.

## Add a Header

Let's say you need to have a banner on the top of your application that will have 100px of height.

First, let's assume that you are using the default theme (note that this tutorial works for any other custom theme). Locate the `theme.html` file where you have all your custom styles overriding the default ones.

Add this `CSS variable` in the beginning of the `html` tag:

```
<custom-style>
  <style is="custom-style">
    html {
      --nuxeo-app-top: 100px;
```

This will create a space in the viewport, between the top of it and the Nuxeo application.

For the sake of simplicity, we will now define the element inline, but of course, this could be imported as well from a separate `html` file (which is way better for maintenance purposes).

So, let's go over to your custom bundle file, and let's add the following code:

```js
<script>
  Polymer({
    _template: Polymer.html`
      <style>
        :host {
          @apply --layout-horizontal;
          @apply --layout-center;
          background-color: lightcoral;
          color: white;
          text-align: center;
          height: 100px;
          width: 100%;
        }
        span {
          @apply --layout-flex;
        }
      </style>

      <span>This is my header</span>
    `,
    is: 'my-header',
  });

  const myHeader = document.createElement('my-header');
  document.body.prepend(myHeader);
</script>
```

Here we are defining a custom element called `my-header` and that includes a simple static text inside it, with some styles to make it more visible.

Then we are creating the element and appending to the document.

And there you have it! You have now a header in Nuxeo Web UI.

## Add a Footer

Adding a footer to Nuxeo Web UI follows the same logic, except we need to give an absolute position to our element.

First, let's open `theme.html` again and include the following `nuxeo-app-bottom` variable:

```
<custom-style>
  <style is="custom-style">
    html {
      --nuxeo-app-top: 100px;
      --nuxeo-app-bottom: 100px;
```

Again, this will create a space in the viewport, but in this case between the bottom of it and the Nuxeo application.

Let's go over again to our custom bundle and let's add the following code:

```js
<script>
  Polymer({
    _template: Polymer.html`
      <style>
        :host {
          @apply --layout-horizontal;
          @apply --layout-center;
          background-color: sandybrown;
          color: white;
          text-align: center;
          height: 100px;
          width: 100%;
          position: absolute;
          bottom: 0;
        }
        span {
          @apply --layout-flex;
        }
      </style>

      <span>This is my footer</span>
    `,
    is: 'my-footer',
  });

  const myFooter = document.createElement('my-footer');
  document.body.appendChild(myFooter);
</script>
```

{{#> callout type='note' heading='Footer requires a position absolute'}}
Please note that, on the footer, we need to absolutely position our element and add a bottom property with a 0 value.
{{/callout}}

Similar to what we did to the header, here we define a new inline custom element, which includes a text and that has some styles. Then we append it to the document.

This way we can have a static header and footer wrapping our Nuxeo Web UI.

## Interact With Data Inside Nuxeo App Dynamically

Now, let's imagine that you need to interact with data inside Nuxeo App: in the header, you need to display the current path of your document; and in the footer, you need to display the user that is currently logged in.

### Display the Document's Path Inside the Header

Let's start by the header. Going back to your custom bundle code and focusing on `my-header` element, we need include a `properties` object on it and inside it let's create another object called `document`:

```js
<script>
  Polymer({
    _template: Polymer.html`
      <style>
        :host {
          @apply --layout-horizontal;
          @apply --layout-center;
          background-color: lightcoral;
          color: white;
          text-align: center;
          height: 100px;
          width: 100%;
        }
        span {
          @apply --layout-flex;
        }
      </style>

      <span>This is my header</span>
    `,
    is: 'my-header',
    properties: {
      document: Object,
    },
  });

  const myHeader = document.createElement('my-header');
  document.body.prepend(myHeader);
</script>
```

After it, we will also need to replace the static text inside our spans with a dynamic bound property:

```js
<script>
  Polymer({
    _template: Polymer.html`
      <style>
        :host {
          @apply --layout-horizontal;
          @apply --layout-center;
          background-color: lightcoral;
          color: white;
          text-align: center;
          height: 100px;
          width: 100%;
        }
        span {
          @apply --layout-flex;
        }
      </style>

      <span>Document: [[document.path]]</span>
    `,
    is: 'my-header',
    properties: {
      document: Object,
    },
  });

  const myHeader = document.createElement('my-header');
  document.body.prepend(myHeader);
</script>
```

Next, we need to check if `nuxeo-app` is defined and ready in our document. To do it, we will use the native method `customElements.whenDefined`, which will return a promise. Then, we will listen for an event called `response-changed`, which will give us the information that we need to, in this case, display the document's path.

```js
<script>
    ...
    is: 'my-header',
    properties: {
      document: Object,
    },
  });

  const myHeader = document.createElement('my-header');
  document.body.prepend(myHeader);

  customElements.whenDefined('nuxeo-app').then(() => {
    const app = document.querySelector('nuxeo-app');
    app.$.doc.addEventListener('response-changed', ({ detail: { value: doc } }) => {
      // update document on the header
      myHeader.document = doc;
    });
  });
</script>
```

And with that, we can interactively print the document's path.

### Print Which User Is Logged in the Footer

To do it, we need to follow the exact same logic of the header, however, in this case, we need to listen to another event.

Going back to your custom bundle code and finding the `my-footer` custom element, let's add this `user` object property to it and replace the static span with a dynamic bound property:

```js
<script>
  Polymer({
    _template: Polymer.html`
      <style>
        :host {
          @apply --layout-horizontal;
          @apply --layout-center;
          background-color: sandybrown;
          color: white;
          text-align: center;
          height: 100px;
          width: 100%;
          position: absolute;
          bottom: 0;
        }
        span {
          @apply --layout-flex;
        }
      </style>

      <span>User: [[user.id]]</span>
    `,
    is: 'my-footer',
    properties: {
      user: Object,
    },
  });

  const myFooter = document.createElement('my-footer');
  document.body.appendChild(myFooter);
</script>
```

Now, below the custom element, let's also check for the definition of the `nuxeo-app` element and, after it, let's listen for the event `user-changed`:

```js
<script>
    ...
    is: 'my-footer',
    properties: {
      user: Object,
    },
  });

  const myFooter = document.createElement('my-footer');
  document.body.appendChild(myFooter);

  const app = document.querySelector('nuxeo-app');
   customElements.whenDefined('nuxeo-app').then(() => {
    app.$.nxcon.addEventListener('user-changed', ({ detail: { value: user } }) => {
      myFooter.user = user;
    });
  });
</script>
```

This event will give us the information that we need to display in our footer.

And there you have it! A fully dynamic header and footer that can be responsive to what is happening inside the `nuxeo-app`.
