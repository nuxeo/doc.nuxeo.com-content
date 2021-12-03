---
title: Developing with AngularJS
review:
    comment: ''
    date: ''
    status: ok
labels:
    - nuxeo-js
    - angular-js
    - lts2015-ok
    - javascript-client-component
    - javascript
    - client
    - rest-api
toc: true
version_override:
    'FT': '/nxdoc/howto-develop-with-angular2'
    'LTS 2016': 810/nxdoc/howto-develop-with-angular2
confluence:
    ajs-parent-page-id: '28475677'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Developing+with+AngularJS
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Developing+with+AngularJS'
    page_id: '28475500'
    shortlink: bICyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/bICyAQ'
    source_link: /display/NXDOC710/Developing+with+AngularJS
tree_item_index: 1700
history:
    -
        author: Solen Guitter
        date: '2015-11-30 09:19'
        message: 'XDOC-658: Marketplace packages are now called Nuxeo Package'
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
[AngularJS](https://angularjs.org/) by Google has been built to offer front-end developers all the tools they may need to turn a website into a modern web application. AngularJS is a great JavaScript framework that provides many features (directives, routes, modules, etc.) to turn your HTML pages into dynamic views. This answers your front-end needs. But your application also needs a serious back end that will allow you to build your application quickly and concentrate on features without reinventing the wheel. This is what the Nuxeo Platform will provide you with. When users browse your web application, it will actually call the Nuxeo Platform through its [REST API]({{page page='rest-api'}}) in order to handle and retrieve content.

{{! excerpt}}

AngularJS has some specific needs that need to be taken care of. This motivated us to write a specific client, in order to get a clean implementation. A wrapper around the existing [Nuxeo JavaScript client](https://github.com/nuxeo/nuxeo-js-client) has therefore been developed. This is the [angular-nuxeo](https://github.com/nuxeo-sandbox/angular-nuxeo) project.

{{! /excerpt}}

The angular-nuxeo project brings some AngularJS-related improvements over the regular Nuxeo JavaScript client:

*   The client can be installed as an AngularJS module, that can easily be installed through [bower](http://bower.io/).
*   Ajax calls are handled through AngularJS's promises mechanism. Any call you do will therefore let you use a callback function when it succeeds, and a separate one when an error occurs.

## Bootstrapping an AngularJS Project With Nuxeo

This section will help you getting started with an AngularJS project. This will be covered in three steps:

1.  Installing prerequisites
2.  Using Yeoman's generator and Nuxeo Angular sample to get an AngularJS application running
3.  Building a [Nuxeo Package]({{page page='creating-nuxeo-packages'}}) that can be deployed on a Nuxeo Platform instance

### Step 1 - Installing Prerequisites

In order to get a clean installation, we will make use of [Yeoman's angular generator](https://github.com/yeoman/generator-angular). So let's install it along with its prerequisites:

1.  [Install Git](http://www.git-scm.com/downloads).
2.  [Install node.js](https://github.com/joyent/node/wiki/Installation).
3.  In a terminal, use `npm` to install the generator:

    ```
    npm install -g grunt-cli bower yo generator-karma generator-angular

    ```

### Step 2 - Building an AngularJS Application from the Nuxeo Angular Sample Project

1.  Clone the [Nuxeo Angular Sample](https://github.com/nuxeo-sandbox/nuxeo-angular-sample) project.
2.  Using a terminal `cd` to the project's `nuxeo-angular-sample-front/src/main/yo` folder.
3.  Run the following command:

    ```
    yo angular [yourAppName]
    ```

    When prompted, answer:

    *   Would you like to use Sass (with Compass)? (Y/n) You decide
    *   Would you like to include Bootstrap? (Y/n) You decide
    *   Which modules would you like to include? You decide
    *   Overwrite package.json? (Y/n) **Y** At that point, you get a ready to use AngularJS application. It is time to add the nuxeo module.
4.  Add the angular-nuxeo dependency by running the following:

    ```
    bower install https://github.com/nuxeo-sandbox/angular-nuxeo.git --save
    ```

5.  Edit the `app/scripts/app.js` file to add the nuxeo module. The file should look somewhat like this:

    ```js
    angular
      .module('someModule',
        '...',
        'nuxeo'
      ])
    ```

6.  Adapt the project to your needs:

    1.  Go to the `nuxeo-angular-sample-front/src/main/yo` folder.
    2.  Edit the `Grunfile.js` file to configure the dist folder as below. Replace `myapp` with the folder name you want to put your application into:

        ```js
        // Configurable paths for the application
          var appConfig = {
            app: require('./bower.json').appPath || 'app',
        	// Replace dist: 'dist' by the line below. Put your app folder name instead of myapp.
            dist: '../../../target/classes/web/nuxeo.war/myapp'
          };

        ...
        ```

    3.  Go to the `nuxeo-angular-sample-front/src/main/resources/OSGI-INF` folder.
    4.  In the `authentication-contrib.xml` and `deployment-fragment.xml` files, replace `myapp` with your application's folder name. The goal of this step is to make sure that when requesting a URL which is part of your application, people will be asked for authentication, then redirected to your application once logged in.
        ![]({{file name='Nuxeo and AngularJS - Zoom on Embedded Web Application.png'}} ?w=600,border=true)
7.  Go to the `nuxeo-angular-sample-front/src/main/yo` folder.
8.  Init your app

    ```
    bower install
    npm install
    ```

    You are now free to reference the nuxeo module into your controllers.

9.  Run `grunt serve` from your terminal and enjoy the result!

For detailed usage of the nuxeo angular client, take a look at its [GitHub documentation](https://github.com/nuxeo-sandbox/angular-nuxeo#usage). Note that as your application will be deployed in an existing instance, users will be asked for authentication by the Nuxeo Platform. Therefore, you do not need the client to send any authentication and actual testing can be done by installing a Nuxeo Platform locally on your machine. You can use [grunt](http://gruntjs.com/) to preview your application by running `grunt serve` from a terminal.

### Step 3 - Deploying the AngularJS Application in a Nuxeo Instance

Deploying an embedded application consists in putting your AngularJS application into the Nuxeo Platform's `nuxeo.war` folder. By doing so, people will be able to access it using a URL like <span class="nolink">http://mynuxeoinstanceurl/nuxeo/myapp</span>. See the section [Deployment options](#deployment_options).

The good news is the Nuxeo Angular Sample project already provides you with everything you need to deploy the application in a clean fashion, through a Nuxeo Package. Quick reminder: Nuxeo Packages allow you to deploy bundles, resources, libraries and much more on your server easily. They are versioned and can be installed, upgraded, uninstalled either from the graphical interface or the command line. All of this makes life easier for developers and sysadmins alike. See the page [Installing a New Package on Your Instance]({{page space='admindoc710' page='installing-a-new-package-on-your-instance'}}).

Build the Nuxeo Package by following these instructions:

1.  Using a terminal, `cd` to the `nuxeo-angular-sample` folder.
2.  Run:

    ```
    mvn clean install
    ```

    The Nuxeo Package is now built and available into the nuxeo-angular-sample/marketplace-nuxeo-angular-sample/marketplace/target folder. if you did not change its configuration, it will be called marketplace-nuxeo-angular-sample-0.1-SNAPSHOT.zip by default.

3.  [Install the Nuxeo Package]({{page space='admindoc710' page='installing-a-new-package-on-your-instance'}}) in your Nuxeo Platform instance.
4.  Go to [http://mynuxeoinstanceurl/nuxeo/myapp](http://mynuxeoinstanceurl/nuxeo/myapp) and enjoy your brand new AngularJS application.

## {{> anchor 'deployment_options'}}Deployment Options

There are two possible ways to deploy your application.

1.  **Embedded mode**: having your AngularJS application into your Nuxeo Platform instance.
    ![]({{file name='Nuxeo and AngularJS - Embedded Web Application - New Page.png'}} ?w=600,border=true)
    This setup is particularly interesting when using a [Nuxeo Cloud](http://www.nuxeo.com/products/nuxeo-cloud/) instance. No setup, no administration needed, and full scalability. By configuring your Nuxeo Platform instance, people will be redirected to your custom interface and the overall setup is transparent. This solution is used by us for projects such as [Hyland University](https://university.hyland.com).
    This deployment mode is the one used in third step of the example above.
2.  **Isolated mode**: keep your AngularJS web application separated from your Nuxeo Platform instance.
    ![]({{file name='Nuxeo and AngularJS - External Application - New Page.png'}} ?w=600,border=true)
    By doing so, you can put your web application where you want it to be; this can be on a totally separate server if need be.

{{#> callout type='info' }}

We are always eager to receive feedback on our projects. Please report bugs, wishes or anything related to the nuxeo-angular-sample project at [answers.nuxeo.com](https://answers.nuxeo.com)

{{/callout}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [REST API]({{page page='rest-api'}})
- [JavaScript Client]({{page page='javascript-client'}})

{{/panel}}</div><div class="column medium-6">


</div></div>
