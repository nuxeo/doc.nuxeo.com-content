---
title: Developing with Angular2
review:
    comment: ''
    date: '2016-12-07'
    status: ok
labels:
    - lts2016-ok
    - rest-api
    - javascript
    - angular2
    - client
    - nuxeo-js
    - javascript-client-component
    - excerpt
toc: true
version_override:
    'LTS 2015': 710/nxdoc/developing-with-angularjs
confluence:
    ajs-parent-page-id: '13664833'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Developing+with+AngularJS
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Developing+with+AngularJS'
    page_id: '25690834'
    shortlink: 0gKIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/0gKIAQ'
    source_link: /display/NXDOC/Developing+with+AngularJS
tree_item_index: 1700
history:
    -
        author: Solen Guitter
        date: '2015-11-30 09:19'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2015-07-16 08:36'
        message: ''
        version: '27'
    -
        author: Thibaud Arguillere
        date: '2015-07-15 20:09'
        message: ''
        version: '26'
    -
        author: Bertrand Chauvin
        date: '2015-07-10 09:48'
        message: ''
        version: '25'
    -
        author: Bertrand Chauvin
        date: '2015-07-10 09:45'
        message: Fixed tutorial
        version: '24'
    -
        author: Bertrand Chauvin
        date: '2015-07-10 09:23'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2015-07-10 07:39'
        message: ''
        version: '22'
    -
        author: Bertrand Chauvin
        date: '2015-07-09 15:41'
        message: Added bower install npm install
        version: '21'
    -
        author: Solen Guitter
        date: '2015-07-01 09:03'
        message: Reorganize content
        version: '20'
    -
        author: Solen Guitter
        date: '2015-06-30 16:06'
        message: Format and typos
        version: '19'
    -
        author: Bertrand Chauvin
        date: '2015-06-23 10:50'
        message: Added tags and related doc
        version: '18'
    -
        author: Bertrand Chauvin
        date: '2015-06-23 10:46'
        message: Formatting
        version: '17'
    -
        author: Bertrand Chauvin
        date: '2015-06-23 10:46'
        message: Formatting
        version: '16'
    -
        author: Bertrand Chauvin
        date: '2015-06-23 10:45'
        message: Added reporting info
        version: '15'
    -
        author: Bertrand Chauvin
        date: '2015-06-23 10:43'
        message: Removed todo and restriction warning
        version: '14'
    -
        author: Bertrand Chauvin
        date: '2015-06-23 10:30'
        message: Formatting
        version: '13'
    -
        author: Bertrand Chauvin
        date: '2015-06-23 10:29'
        message: Formatting
        version: '12'
    -
        author: Bertrand Chauvin
        date: '2015-06-23 10:28'
        message: Formatting
        version: '11'
    -
        author: Bertrand Chauvin
        date: '2015-06-23 10:27'
        message: Added app bootstrapping details
        version: '10'
    -
        author: Bertrand Chauvin
        date: '2015-06-22 13:49'
        message: ''
        version: '9'
    -
        author: Bertrand Chauvin
        date: '2015-06-22 13:48'
        message: Added embedded deployment first details
        version: '8'
    -
        author: Bertrand Chauvin
        date: '2015-06-22 10:41'
        message: Added dev environment setup
        version: '7'
    -
        author: Bertrand Chauvin
        date: '2015-06-22 09:12'
        message: angular-nuxeo introduction
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2015-06-19 16:55'
        message: ''
        version: '5'
    -
        author: Bertrand Chauvin
        date: '2015-06-18 16:52'
        message: ''
        version: '4'
    -
        author: Bertrand Chauvin
        date: '2015-06-18 16:51'
        message: Started adding deployment options
        version: '3'
    -
        author: Bertrand Chauvin
        date: '2015-06-18 15:59'
        message: ''
        version: '2'
    -
        author: Bertrand Chauvin
        date: '2015-06-18 14:58'
        message: ''
        version: '1'

---
[Angular](https://angular.io/) by Google is the successor of the much used [AngularJS](https://angularjs.org/). It was also built to bring front-end developers all the tools they may need to turn a website into a modern web application across all platforms. [Angular](https://angular.io/) is a great all-in-one framework that provides many features. This answers your front-end and mobile needs. But your application also needs a serious back end that will allow you to build your application quickly and concentrate on features without reinventing the wheel. This is what the Nuxeo Platform will provide you with. When users browse your web application, it will actually call the Nuxeo Platform through its [REST API]({{page version='' space='nxdoc' page='rest-api'}}) in order to handle and retrieve content.

{{! excerpt}}

[Angular](https://angular.io/) has lots of different stack, and it is very hard to find the one fit our needs. That's why we created a dedicated bootstrap in our [Nuxeo Generator](https://www.npmjs.com/package/generator-nuxeo).

{{! /excerpt}}

The `angular` generator brings some tools that can help you:

- Full [webpack](https://webpack.github.io/) build module
- A proxy between the webpack dev server and a running Nuxeo
- [TypeScript](https://www.typescriptlang.org/) based stack
- [Nuxeo JS Client](https://github.com/nuxeo/nuxeo-js-client) included
- All test and integration tooling
- Build command to package application as Nuxeo bundle.

The whole tooling suite is based on [AngularClass](https://github.com/AngularClass/angular2-webpack-starter) work.

## Bootstrapping an Angular Project

This section will help you getting started with an Angular project. This will be covered in three steps:

- Installing prerequisites
- Using Nuxeo Generator
- Building a Nuxeo Package that can be deployed on a Nuxeo Platform instance

### Step 1 - Installing Prerequisites

In order to get a clean installation, we will make use of Yeoman's Angular generator. So let's install it along with its prerequisites:

1. Install [Git](https://git-scm.com/).
2. Install [node.js](https://nodejs.org/) and ensure [NPM](https://www.npmjs.com/) is installed.
3. In a terminal, use NPM to install the generator:

  ```bash
  $ npm install -g yo generator-nuxeo
  ```

### Step 2 - Bootstrap Nuxeo Bundle and Package

1. Create a new folder.

  ```bash
  $ mkdir my-app && cd $_
  ```

2. Call Nuxeo Generator to generate Angular and a Package modules.

  ```bash
  $ yo nuxeo angular2 package
  ```

  You'll be prompted to several Maven or Name informations, then an `npm install` command will be executed automatically to install dependencies.

3. To start the builtin server to view your application:

  ```bash
  $ npm run start
  ```

4. Navigate to <http://0.0.0.0:3000/>.

### Step 3 - Let's code

- `mypapp-web`: Contains Angular application module
- `mypapp-web/config`: Contains all configuration files if you need to tweak some stuff
- `myapp-web/src/main/app`: Contains base web directory
- `myapp-web/src/main/app/app`: Contains application base directory
- `myapp-package`: Contains [Nuxeo Package]({{page version='' space='glos' page='nuxeo-package'}}) module

  Started from here, you can now build your own [Angular Component](https://angular.io/docs/ts/latest/guide/architecture.html#!#components) in the `myapp-web/src/main/app/app/` folder, your own [Angular Directives](https://angular.io/docs/ts/latest/guide/architecture.html#!#directives), you own [Angular Services](https://angular.io/docs/ts/latest/guide/architecture.html#!#services) and whatever you want.

  [Nuxeo JS Client](https://github.com/nuxeo/nuxeo-js-client) is available as a Service inside your Application. View how you can handle it in `myapp-web/src/main/app/app/search/search.component.ts`:

  ```
  import { NuxeoService } from '../nuxeo.service';

  constructor(public nuxeo: NuxeoService) {

  }

  searchDocument(value: String) {
    this.nuxeo.repository().query({
      query: `Select * from Document where ecm:fulltext LIKE '${value}' or dc:title LIKE '%${value}%' and ecm:isProxy = 0 and ecm:currentLifeCycleState <> 'deleted'`
    }, {
      enrichers: {'document': ['thumbnail']}
    }).then((docs) => {
      this.documents = docs.entries;
      console.log(docs.entries[0]);
      this.loading = false;
    })
    ...
  }
  ```

### Step 4 - Understanding NPM Command List

All commands are accessible using the `npm run` base command. For instance, if you'd like to execute the `start` command:

```bash
$ npm run start
```

Take a deeper look at the `package.json` file to get them all; here is a list of commons ones:

- `start`, `server:dev`: Start a dev server on the local port `3000`, initiate a proxy between `/nuxeo` to `http://localhost:8080/nuxeo` and watch scripts files. The application is reloaded in case of modification on the sources.
- `build:prod`: Package application as Maven resources in `target` folder
- `clean`: Clean all webpack generated files
- `lint`: Run the TypeScript linter on your sources
- `test`: Run Karma tests
- `e2e`: Run integration tests (e2e) using Protractor
- `ci`: Run `lint`, `test` and `e2e`


## {{> anchor 'deployment_options'}}Deployment Options

There are two possible ways to deploy your application:

1. **Embedded mode**: Having your Angular application into your Nuxeo Platform instance.

  ![Angular Embedded Application]({{file name='Nuxeo and AngularJS - Embedded Web Application - New Page.png'}})

  This setup is particularly interesting when using a [Nuxeo Cloud](https://www.nuxeo.com/products/nuxeo-cloud/) instance. No setup, no administration needed, and full scalability. By configuring your Nuxeo Platform instance, people will be redirected to your custom interface and the overall setup is transparent. This solution is used by us for projects such as [Nuxeo University](https://university.nuxeo.io).

  To do that, if you bootstrapped your project with the `package` generator, simply go to the root of your project then:

  ```bash
  $ cd <root_project>
  $ mvn package
  ```

  Your package is built under `myapp-package/target/myapp-package.zip`, and contains your Angular application.

  Otherwise, If you prefer to handle the Nuxeo Bundle by yourself, go to the root of your Angular module then:

  ```bash
  $ cd myapp-web
  $ mvn package
  ```

  Your Nuxeo Bundle under `myapp-web/target/myapp-web-1.0-SNAPSHOT.jar` contains your Angular application and can be deployed in `NUXEO_SERVER/nxserver/bundles` directly.

2. **Isolated mode**: keep your Angular web application separated from your Nuxeo Platform instance.

  ![Angular External Application]({{file name='Nuxeo%20and%20AngularJS%20-%20External%20Application%20-%20New%20Page.png'}})

  By doing so, you can put your web application where you want it to be; this can be on a totally separate server if need be.

{{#> callout type='info' }}

We are always eager to receive feedback on our projects. Please report bugs, wishes or anything related to the nuxeo-angular-sample project at [answers.nuxeo.com](https://answers.nuxeo.com)

{{/callout}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [REST API]({{page page='rest-api'}})
- [JavaScript Client]({{page page='javascript-client'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
