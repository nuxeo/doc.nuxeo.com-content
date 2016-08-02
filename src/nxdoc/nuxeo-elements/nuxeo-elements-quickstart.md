---
title: Nuxeo Elements Quickstart
details:
    howto:
        excerpt: Learn how to start working with Nuxeo Elements.
        level: Advanced
        tool: Dev environment
        topics: 'Nuxeo Elements, REST API'
labels:
    - lts2015-ok
    - nuxeo-elements
    - howto
    - nuxeo-elements-component
toc: true
confluence:
    ajs-parent-page-id: '26316892'
    ajs-parent-page-title: Nuxeo Elements
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Elements+Quickstart
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Elements+Quickstart'
    page_id: '26317000'
    shortlink: yJCRAQ
    shortlink_source: 'https://doc.nuxeo.com/x/yJCRAQ'
    source_link: /display/NXDOC/Nuxeo+Elements+Quickstart
history:
    - 
        author: Vincent Dutat
        date: '2016-01-12 20:34'
        message: ''
        version: '14'
    - 
        author: Bertrand Chauvin
        date: '2015-11-09 09:35'
        message: Added note about CORS config
        version: '13'
    - 
        author: Nelson Silva
        date: '2015-10-21 14:56'
        message: Update prefix of Nuxeo Elements
        version: '12'
    - 
        author: Solen Guitter
        date: '2015-10-19 08:52'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2015-10-19 08:51'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2015-10-19 08:50'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2015-10-16 15:54'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2015-10-16 15:53'
        message: Make page available in How-Tos list
        version: '7'
    - 
        author: Solen Guitter
        date: '2015-10-16 15:47'
        message: Steps formatting
        version: '6'
    - 
        author: Manon Lumeau
        date: '2015-10-09 15:34'
        message: formatting
        version: '5'
    - 
        author: Nelson Silva
        date: '2015-10-02 11:40'
        message: ''
        version: '4'
    - 
        author: Nelson Silva
        date: '2015-10-02 10:41'
        message: ''
        version: '3'
    - 
        author: Nelson Silva
        date: '2015-10-02 09:53'
        message: ''
        version: '2'
    - 
        author: Nelson Silva
        date: '2015-10-01 19:00'
        message: ''
        version: '1'

---
## Requirements

*   [Node.js](https://nodejs.org/)&nbsp;is a JavaScript runtime built on Chrome's V8 JavaScript engine. Almost every tool out there for client side development is built with Node.js and distributed with npm, the package manager for node, so just make sure you download and install your OS specific version first.

*   [Bower](http://bower.io/) is currently **the&nbsp;**tool for managing web application dependencies. To install it just use:

    ```
    npm install -g bower
    ```

*   [Gulp](http://gulpjs.com/) is a JavaScript task runner that lets you automate tasks.

    ```
    npm install -g gulp
    ```

*   [Yeoman](http://yeoman.io/)&nbsp;is an opinionated generator that helps kickstarting projects. Use its&nbsp;[Polymer generator](https://github.com/yeoman/generator-polymer) to scaffold your app:

    ```
    npm install -g yo
    npm install -g generator-polymer
    ```

## Building an Application

Let's build a very simple application showcasing usage of the `nuxeo-connection`, `nuxeo-resource` and `nuxeo-page-provider` elements.

### Scaffolding

1.  After creating a folder to hold the application's code&nbsp; scaffold it using Yeoman's Polymer generator:

    ```
    > mkdir -p nuxeo-elements-sample && cd $_
    > yo polymer
    ```

    ![]({{file name='polymer_starter_kit.png'}} ?w=600,border=true)

    Yeoman will scaffold the application based on the&nbsp;[Polymer Starter Kit](https://github.com/PolymerElements/polymer-starter-kit) a&nbsp;starting point for building web applications with Polymer built and maintained by the Polymer team.

2.  To run the application and see what has been generated, run gulp:

    ```
    gulp serve
    ```

    **Note:&nbsp;**the README.md includes detailed information about the generated application so it's a good starting point to understand its structure.

    ![]({{file name='polymer_app_sample.png'}} ?w=600,border=true)

    The produced application includes some sample elements and showcases Google's Material Design through the use of Paper Elements.

Let's plug this application to the Nuxeo instance and change the hardcoded users list with some actual data.

### Importing Nuxeo Elements

1.  Install Nuxeo elements through Bower:

    ```
    bower install --save nuxeo/nuxeo-elements
    ```

    This adds `nuxeo-elements` as a dependency in `bower.json` and dowloads the latest release from our GitHub [repository](https://github.com/nuxeo/nuxeo-elements) into bower_components.

2.  Once nuxeo-elements is downloaded import the elements the application will use:

    ```

    ```

    Elements used by the application are usually all imported in a single file to simplify the [vulcanization](https://github.com/polymer/vulcanize) process which basically&nbsp;reduces an HTML file and its dependent HTML Imports into a single file to reduce network roundtrips and simplify deployment.

### Connecting to Nuxeo

With Nuxeo Elements imports in place you can now use your custom elements.

Declare the connection to Nuxeo.&nbsp; This connection will be shared by all Nuxeo data driven elements so it should be one of the first elements you declare in your application, i.e. right at the start of the template:

```

```

There is now a connection to the Nuxeo instance. Note that you will need to define a [Cross-Origin Resource Sharing (CORS) configuration]({{page page='cross-origin-resource-sharing-cors'}}) before going further if you wish to test your code with gulp.

### Retrieving Users

Replace the hard-coded user listing with actual data: use the **nuxeo-resource&nbsp;**element and Nuxeo's REST API, namely the `/api/v1/user/search` endpoint, and to retrieve a list of users.

```

Users

```

Thanks to our custom `nuxeo-resource` element and Polymer's data binding you can easily "plug" data to your UI in a purely declarative way without any line of code.

### Adding a Note Listing Feature

1.  Add a link in the application drawer:

    ```

      ...

        Notes

      ...

    ```

2.  Update the routing code to set the "route" to "notes" when the URL matches `/notes`:

    ```
    page('/notes', function () {
      app.route = 'notes';
      app.scrollPageToTop();
    });
    ```

3.  Add a new section to be displayed when current "route" is "notes".

    ```

    ```

    Here the `nuxeo-page-provider` element is used with a simple NXQL query to retrieve all the Notes that haven't been deleted and displays a simple card for each of these with the Note's title and description.

    Here is what the final application looks like:

    ![]({{file name='nuxeo_elements_result.png'}} ?w=600,border=true)