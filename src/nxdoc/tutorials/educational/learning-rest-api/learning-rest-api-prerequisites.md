---
title: Learning REST API - Prerequisites
description: All the technical and knowledge prerequisites to follow the exercises of the Learning the REST API tutorial.
review:
    comment: 'Separate pages'
    date: '2017-02-20'
    status: ok
toc: true
tree_item_index: 100
previous_link: nxdoc/learning-rest-api
next_link: nxdoc/rest-api-principles

---
## Technical Prerequisites

### Mandatory Prerequisites

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <td>**Browser**</td>
        <td>
          Google Chrome / Chromium browser with the [Postman extension](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop), or Firefox web browser with the [RESTED extension](https://addons.mozilla.org/en-US/firefox/addon/rested/)[](https://addons.mozilla.org/en-us/firefox/addon/restclient/)
        </td>
      </tr>
      <tr>
        <td>**Nuxeo Studio project**</td>
        <td>
          You need a Nuxeo Studio project. If you don't have a Nuxeo Online Services account, you should sign up for a [30-day free trial](http://www.nuxeo.com/downloads/#online-trial).
        </td>
      </tr>
      <tr>
        <td>**Node.js**</td>
        <td>
          In this tutorial we will be using Nuxeo JS Client in **node.js**. Check the page [Setting up Your JavaScript Environment]({{page version='' space='nxdoc' page='setting-up-your-javascript-environment#setting-up-the-javascript-environment'}}) for complete instructions on how to install both tools.
        </td>
      </tr>
      <tr>
        <td>**Nuxeo JavaScript Client**</td>
        <td>
          We will be using Nuxeo JavaScript Client to wrap our REST API calls. Nuxeo JS client is versatile enough to let you work in various contexts: in **Node.js**, in the browser by adding the library directly or through Bower, or in AngularJS applications.
          See above for instructions on how to install.
        </td>
      </tr>
      <tr>
        <td>**cURL**</td>
        <td>
          Available natively for Mac OS and Linux users, Windows users can [install it](https://curl.haxx.se/download.html#Win64). It may be useful to check your CORS configuration.
        </td>
      </tr>
      <tr>
        <td>**Nuxeo DAM**</td>
        <td>
          From Nuxeo Marketplace, install the [Nuxeo DAM addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-dam). This will provide you with three extra multimedia Document Types to use and test throughout the tutorial: Picture, Audio and Video.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Optional Prerequisites

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <td>**Nuxeo Showcase Content addon**</td>
        <td>
          From Nuxeo Marketplace, install the [Nuxeo Showcase Content addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-showcase-content). This will provide you with a stock of various documents to manipulate during the tutorial.
        </td>
      </tr>
      <tr>
        <td>**Nuxeo Dev Tools browser extension**</td>
        <td>
          Available for [Chrome](https://chrome.google.com/webstore/detail/nuxeo-dev-tools/kncphbjdicjganncpalklkllihdidcmh?hl=en) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/nuxeo-dev-tools/), this handy little extension provides a number of [useful shortcuts]({{page version='' space='nxdoc' page='nuxeo-dev-tools-extension#features'}}). Be sure to set up a [CORS configuration]({{page version='' space='nxdoc' page='cross-origin-resource-sharing-cors'}}) to fully benefit from its features.
        </td>
      </tr>
    </tbody>
  </table>
</div>


## Required Knowledge

### Mandatory Knowledge

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <td>**Nuxeo Platform**</td>
        <td>
          Understanding the [Nuxeo Platform's document concept](https://university.nuxeo.io/nuxeo/university/#!/course/using-nuxeo-platform/understanding-document-concept) is essential. Getting a grasp of the [main Nuxeo Platform functionalities](https://university.nuxeo.io/nuxeo/university/#!/course/using-nuxeo-platform) is highly recommended.
        </td>
      </tr>
      <tr>
        <td>**Nuxeo Studio**</td>
        <td>
          Familiarity with the [main Nuxeo Studio functionalities](https://university.nuxeo.io/nuxeo/university/#!/course/getting-started-nuxeo-studio) is necessary, because you will call custom features created in Studio during this course.
        </td>
      </tr>
      <tr>
        <td>**JavaScript**</td>
        <td>
          JavaScript programming skills are required, as we will be using the [Nuxeo JavaScript client]({{page version='' space='nxdoc' page='javascript-client'}}) to practice.
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Optional Knowledge

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <td>**Java**</td>
        <td>
          Java programming skills are needed if you want to cover the bonus section of this tutorial, extending the REST API.
        </td>
      </tr>
    </tbody>
  </table>
</div>


## Useful REST API Resources

Information about Nuxeo REST API can be found in various places. Here are some of the most relevant tools at your disposal:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <td>**API Playground**</td>
        <td>
          Available at [nuxeo.github.io/api-playground](http://nuxeo.github.io/api-playground/). It allows you to connect to a live Nuxeo Platform repository and try out the existing endpoints.
        </td>
      </tr>
      <tr>
        <td>**REST API Documentation**</td>
        <td>
          Available at [REST API]({{page version='' space='nxdoc' page='rest-api'}}) in our documentation center. It provides detailed technical documentation on the concepts, features and clients for Nuxeo REST API.
        </td>
      </tr>
      <tr>
        <td>**Local Instance REST API Documentation**</td>
        <td>
        Available in your Nuxeo Platform instance at `api/v1/doc`. Assuming a Nuxeo Platform instance is running on your machine, the URL would be `http://NUXEO_SERVER/nuxeo/api/v1/doc`. If you don't have a local instance, you can try it at [https://nightly.nuxeo.com/nuxeo/api/v1/doc](https://nightly.nuxeo.com/nuxeo/api/v1/doc). The default login / password is **Administrator** / **Administrator**. It provides an automatically generated documentation with the available endpoints and what they expect. Use it to get an idea of what you need to send in a request body.
        </td>
      </tr>
      <tr>
        <td>**JS Client Documentation**</td>
        <td>
          Available at [nuxeo.github.io/nuxeo-js-client/](http://nuxeo.github.io/nuxeo-js-client/). It provides explanations about the available objects and methods in Nuxeo JS client, which we will use during this tutorial.
        </td>
      </tr>
      <tr>
        <td>**REST API Video Course**</td>
        <td>
          Available at Nuxeo University [REST API course](https://university.nuxeo.io/nuxeo/university/#!/course/working-with-nuxeo-platform-rest-api). Sign up for a free account in order to access the videos. It can help get you started quickly with Nuxeo REST API's main concepts, and gives the relevant links to go further.
        </td>
      </tr>
    </tbody>
  </table>
</div>
