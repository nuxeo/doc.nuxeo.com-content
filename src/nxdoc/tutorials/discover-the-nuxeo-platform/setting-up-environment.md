---
title: Setting up Environment
description: This how-to is the first step of a larger tutorial, Discover the Nuxeo Platform through the REST API. It provides instructions to install and run a Nuxeo Platform instance using Docker, Homebrew or the ZIP package.

draft: true
toc: true

---

{{! excerpt}}
This how-to is the first step of a larger tutorial, [Discover the Nuxeo Platform through the REST API]({{page page='Discover the Nuxeo Platform'}}). It provides instructions to install and run a Nuxeo Platform instance using Docker, Homebrew or the ZIP package.
{{! /excerpt}}

# Docker

OS: Linux, Mac OS, Windows

## Installation

1. Install Docker: Follow the Docker Installation documentation.
2. Download and start the Nuxeo Platform:
    ```
    $ docker run --name mynuxeo -d -p 8080:8080 nuxeo/nuxeo:discover-ft
    ```
3. Register your Nuxeo instance on Nuxeo Online Services:
    ```
    # You don't have a Nuxeo Online Service account
    $ docker exec -ti mynuxeo bin/nuxeoctl register-trial
    # OR
    # You already have a Nuxeo Online Service account
    $ docker exec -ti mynuxeo bin/nuxeoctl register
    ```
4. And follow the instructions displayed.

## Setting up Environment

You now have a Nuxeo Platform instance ready to run. At this step, you need to install some addons, in particular Nuxeo xxx.

{{! multiexcerpt name='addon_desc'}}

Nuxeo xxx will add some business logic and documents to your Nuxeo Platform instance, that we will leverage all through this tutorial. It provides the following features:

* The portfolio document type (`BCPortfolio`) holds the contracts of a customer. Its holds properties about the customer: the company name, industry and size, and the customer’s juridical contact information.
* The contract document type (`BCContract`) have several properties: an owner (an application user), some dates (signature, start, expiration dates), a type, an amount. It inherits customer information from its portfolio.
* Some vocabularies are used populate the portfolio and contract metadata (`companySize`, `contractType` and `industry`)
* Contracts have a specific life cycle, so they can evolve though the states `draft`, `approval`, `running`, `renegociation`, `void`, `deleted` and `restored`
* Some business logic through automation chains and event handlers make contracts inherit properties from its portfolio and evolve following its life cycle

{{! /multiexcerpt}}

To set up your environment:

1. Stop the server.
```
    $ docker exec -ti mynuxeo bin/nuxeoctl stop
```
2. Initialize local Nuxeo addons.
```
    $ docker exec -ti mynuxeo bin/nuxeoctl mp-init
```
3. Get the list of local Nuxeo addons.
```
    $ docker exec -ti mynuxeo bin/nuxeoctl mp-list
```
    You get the list of local addons, whose status is downloaded.

4. Install the addons required for this tutorial.
```
    $ docker exec -ti mynuxeo bin/nuxeoctl mp-install nuxeo-dam nuxeo-drive nuxeo-jsf-ui nuxeo-showcase-content nuxeo-template-rendering-samples nuxeo-web-ui nuxeo-xxx
```
5. Validate the dependency resolution step.
    ```
    Dependency resolution:
    Installation order (7):        nuxeo-jsf-ui-8.3.0/nuxeo-template-rendering-6.6.2/nuxeo-template-rendering-samples-6.6.2/nuxeo-dam-6.2.2/nuxeo-drive-1.6.2/nuxeo-showcase-content-1.1.2/nuxeo-web-ui-0.7.0
    Packages to download (2):      nuxeo-web-ui:0.7.0, nuxeo-template-rendering:6.6.2
    Local packages to install (5): nuxeo-template-rendering-samples:6.6.2, nuxeo-jsf-ui:8.3.0, nuxeo-dam:6.2.2, nuxeo-showcase-content:1.1.2, nuxeo-drive:1.6.2
    Do you want to continue (yes/no)? [yes]
    ```
6. Check the Nuxeo addons were correctly installed.
    ```
    $ docker exec -ti mynuxeo bin/nuxeoctl mp-list
    [...]
    Local packages:
     addon     started    nuxeo-dam (id: nuxeo-dam-6.2.2)
     addon  downloaded    nuxeo-diff (id: nuxeo-diff-1.7.2)
     addon     started    nuxeo-drive (id: nuxeo-drive-1.6.2)
     addon     started    nuxeo-jsf-ui (id: nuxeo-jsf-ui-8.3.0)
     addon  downloaded    nuxeo-liveconnect (id: nuxeo-liveconnect-1.1.2)
     addon  downloaded    nuxeo-review-workflows-dashboards (id: nuxeo-review-workflows-dashboards-1.1.2)
     addon     started    nuxeo-showcase-content (id: nuxeo-showcase-content-1.1.2)
     addon  downloaded    nuxeo-spreadsheet (id: nuxeo-spreadsheet-1.2.2)
     addon     started    nuxeo-template-rendering (id: nuxeo-template-rendering-6.6.2)
     addon     started    nuxeo-template-rendering-samples (id: nuxeo-template-rendering-samples-6.6.2)
     addon     started    nuxeo-web-ui (id: nuxeo-web-ui-0.7.0)
     addon     started    nuxe-xxx (id: nuxeo-xxx-1.xxx)
    ```
    The installed addons now have the status started.

7. Start the server:
    ```
    $ docker exec -ti mynuxeo bin/nuxeoctl start
    [...]
    Server started with process ID 973.
    ```

{{#> callout type='info' title='Learn more'}}

* [Docker documentation](https://docs.docker.com/)
* [Nuxeo Docker repository](https://hub.docker.com/_/nuxeo/)
* [Our Installation documentation]({{page page='Installation'}})

{{/callout}}

# Homebrew

To be continued...
