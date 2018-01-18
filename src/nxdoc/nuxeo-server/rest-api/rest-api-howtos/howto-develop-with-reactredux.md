---
title: 'HOWTO: Develop with React Redux'
review:
    comment: ''
    date: '2017-12-12'
    status: ok
details:
    howto:
        excerpt: Learn how to develop with React Redux.
        level: Advanced
        tool: Code
        topics: REST API
labels:
    - howto
    - rest-api
    - troger
    - lts2017-ok
toc: true

---
[React](https://facebook.github.io/react/) by Facebook is view library that popularized the virtual DOM model for building UIs. It promotes HTML and CSS to be written in JavaScript giving developers full control of the presentation layer that is often difficult using the native DOM API. Paired with [Redux](http://redux.js.org/), "a predictable state container for JavaScript apps", views can built declaratively.

But your application also needs a serious back end that will allow you to build your application quickly and concentrate on features without reinventing the wheel. This is what the Nuxeo Platform provides you with. When users browse your web application, it will actually call the Nuxeo Platform through its [REST API]({{page version='' space='nxdoc' page='rest-api'}}) in order to handle and retrieve content.

Our `React Redux` bootstrap comes with plenty of helpful tools:

- Full [webpack](https://webpack.github.io/) build module
- [Nuxeo JS Client](https://github.com/nuxeo/nuxeo-js-client) included
- All test and integration tooling
- Build command to package application as Nuxeo bundle.

## Starting React Project

This section will help you to get started on a React project. This will be covered in three steps:

- Installing prerequisites
- Using [Nuxeo CLI]({{page version='' space='nxdoc' page='nuxeo-cli'}})
- Building a Nuxeo Package that can be deployed on a Nuxeo Platform instance

### Step 1 - Installing Prerequisites

In order to get a clean installation, we will make use of Nuxeo CLI. So let's install it along with its prerequisites:

1. Install [Git](https://git-scm.com/).
2. Install [node.js](https://nodejs.org/) and ensure [NPM](https://www.npmjs.com/) is installed.
3. In a terminal, use NPM to install the CLI tool:

  ```bash
  $ npm install -g nuxeo-cli
  ```

### Step 2 - Bootstrap Nuxeo Bundle and Package

1. Using CLI.

  ```bash
  $ nuxeo sample
  ```
  Select the option for ReactJS.

2. Follow Build instructions from [Github Page](https://github.com/nuxeo/reactjs-sample-ui).

```bash
$ mvn clean install -Pmp
```

3. Navigate to reactjs-sample-ftest/target/tomcat
  The tomcat folder contains the whole application. From bin folder:

```bash
$ ./nuxeoctl console
```

4. Go to http://localhost:8080
5. Log In with username: Administrator, password: Administrator
6. Open http://NUXEO_SERVER/nuxeo/sampleUI


### Step 3 - Let's code

- `reactjs-sample-ftest/target/tomcat/nxserver/nuxeo.war/sampleUI`: contains running folder.
- `react-sample-ui`: contains package folder. From package folder run:

```bash
$ npm install
$ webpack --watch
```

- `react-sample-ui/src/main/app`: let's code here.
```
+-- app
|   +-- actions
|   +-- components
|   +-- constants
|   +-- css
|   +-- images
|   +-- reducers
|   +-- store
|   +-- tree_node
|   +-- utils
+-- bundle.js
+-- entry.jsx
+-- index.html
```

- [React](https://facebook.github.io/react/): documentation on how to build React components. Examples can be found in the components folder.
- [Redux](http://redux.js.org/): documentation on how to build redux apps. store, actions, utils, reducers folders contain redux pieces.
- [Babel](https://babeljs.io/): transpiler for ES6, imports, .jsx and more.
- [React Router](https://reacttraining.com/react-router/): for routing.
- [Webpack](https://webpack.github.io/): build module.
- [Nuxeo JS Client](https://github.com/nuxeo/nuxeo-js-client): in the utils folder. Requests are in this folder.

### Step 4 - Extending the UI

- Rebuild

```bash
$ mvn clean install -Pmp
```

- or bundle javascript files to `reactjs-sample-ftest/target/tomcat/nxserver/nuxeo.war/sampleUI` with webpack.


{{#> callout type='info' }}
We are always eager to receive feedback on our projects. Please report bugs, wishes or anything related to the reactjs-sample-ui project at [answers.nuxeo.com](https://answers.nuxeo.com)
{{/callout}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [REST API]({{page page='rest-api'}})
- [JavaScript Client]({{page page='javascript-client'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
