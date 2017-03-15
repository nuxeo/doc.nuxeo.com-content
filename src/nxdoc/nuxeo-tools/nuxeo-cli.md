---
title: Nuxeo CLI
description: The Nuxeo CLI tends to ease the whole development process with bootstraps for common Nuxeo components, with samples project to help you understand the hood and with the ability to trigger a hot reload of your development in a running Nuxeo Server.
tree_item_index: 100
review:
    date: '2017-03-15'
    status: requiresUpdates
    comment: ''

---
{{! excerpt}}

The Nuxeo CLI tends to ease the whole development process with bootstraps for common Nuxeo components, with samples project to help you understand the hood and with the ability to trigger a hot reload of your development in a running Nuxeo Server.

{{! /excerpt}}

## Installation

Nuxeo CLI is working like any shell program. After installing it, you'll be able to execute a `nuxeo` binary from your terminal and unleash his power.

### Requirements

* [Node.js](https://nodejs.org/) version > 6

### Recommend Install

The recommended install is to use the [NPM](https://www.npmjs.com/) registry installation, and install `nuxeo-cli` as global to make it available in your `PATH`:

```bash
npm install -g nuxeo-cli
```

### Install from sources

If you are a very high skilled developer, and living in the edge, you can install it from the sources:

```bash
npm install -g nuxeo/nuxeo-cli
```

## Features

- Trigger the Hot reload which allows you to update the deployed bundles without restarting the Nuxeo Server.
- Discover some sample Nuxeo Projects to help you understand the un-understandable.
- Bootstrap a bare Nuxeo Project using [Maven multiple modules](https://maven.apache.org/guides/mini/guide-multiple-modules.html) structure.
- Add a Nuxeo Package module to distribute your Project ([Marketplace](https://connect.nuxeo.com/nuxeo/site/marketplace))
- Add a ready-to-use empty [Polymer](https://www.polymer-project.org), [Angular2](https://angular.io/) Application or [ReactJS](https://facebook.github.io/react/).
- Create your own business rules or logic as an [Automation Operation](https://doc.nuxeo.com/x/Go0ZAQ).
- Enrich REST API responses using a [content-enricher](https://doc.nuxeo.com/x/5wUuAQ).
- Wrap your Business logic in Document Adapter
- Declare your new [Nuxeo Service](https://doc.nuxeo.com/x/DIAO)
- Plug your logic to an existing behavior with the event bus using an [Event Listener](https://doc.nuxeo.com/x/C4AO)
- Bootstrap oldfashioned JSF objects like Seam based UI Action or bare Seam Bean

## Commands

```bash
nuxeo <command> [options] [args]
```

### Hot Reload

Trigger a Hot Reload on your Server allows you to update some of your development modules without restarting the Nuxeo Server. To be done, it requires some simple modification like to enable the `sdk` template in your `nuxeo.conf` file.

First step is to associate a Nuxeo Server with your project root. Nuxeo CLI will ask you the distribution path and if you want to let it change `nuxeo.conf` file for you. Reexecute it to change the distribution path.

```bash
nuxeo hotreload configure
```

Then, you will be able to trigger a hot reload using:

```bash
nuxeo hotreload
```

### Bootstrap

{{#> callout type='warning' }}

To prevent from unpredictable behaviors; **always** execute the FIRST bootstrap command from the **root folder** of your project.

{{/callout}}

#### Options

```text
  -h,   --help          # Print options and usage
        --skip-cache    # Do not remember prompt answers                         Default: false
        --skip-install  # Do not automatically install dependencies              Default: false
  -m,   --meta          # Branch of `nuxeo/generator-nuxeo-meta`                 Default: stable
  -l,   --localPath     # Path to a local clone of `nuxeo/generator-nuxeo-meta`
  -n,   --nologo        # Disable welcome logo                                   Default: false
  -t,   --type          # Set module target's type                               Default: core
  -s,   --skipInstall   # Skip external commands installation                    Default: false
  -f,   --force         # Force conflict when generate an existing file          Default: false
  -d,   --dirname       # Set parent folder prefix name                          Default: <PWD>
```

#### Available Bootstrap

{{#> callout type='info' }}

After looking to the list of available bootstrap, do not hesitate to take a look to [discover Nuxeo CLI by example]({{page page='discover-nuxeo-cli-by-example'}}) page.

{{/callout}}

##### Create an Empty Nuxeo Project with Multiple Modules Structure

Set up an empty Nuxeo Bundle using Maven multiple modules support.

```bash
nuxeo bootstrap multi-module
```

`multi-module` is the default generator when none is given as a parameter to `nuxeo bootstrap`

###### Parameters:

* **Use a parent artifact**: Parent artifact makes your project inherit dependencies, properties and other fields from another project. We recommend to keep the default value and use `org.nuxeo.ecm.distribution:nuxeo-distribution`.
* **Nuxeo Version**: _Asked only if no parent specified_, it specify which Nuxeo version of the dependency management will be imported.

###### Important Notes

Using a Maven multiple modules architecture is the recommended way to bootstrap a new project: it allows to generate a Nuxeo Package afterwards to easily deploy your code on a Nuxeo Server instance. On the other hand, when a project has been generated using a single module architecture, the Nuxeo Package needs to be created manually.

##### Create an Empty Nuxeo Project

Sets up an empty Nuxeo project; *not recommended for project initialisation*.

```bash
nuxeo bootstrap single-module
```

###### Parameters

* **Parent Group / Artifact**: Like in `multi-module`, having a parent artifact make project inheritance. If you are in a `multi-module`, you must set your parent module. If not, you can use `org.nuxeo.ecm.distribution:nuxeo-distribution` or `org.nuxeo:nuxeo-addons-parent`
* **Nuxeo Version**: _Asked only if needed_, it specify which Nuxeo version of the dependency management will be imported.

###### Important Notes

This option should not be called directly to bootstrap a new project; use the `multi-module` option instead so that you can generate a Nuxeo Package later on.

##### Create Your Own Business Rules or Logic - Automation Operation

Adds an empty Automation [Operation](https://doc.nuxeo.com/x/Go0ZAQ) along with a corresponding unit test.

```bash
nuxeo bootstrap operation
```

##### Create an Event Bus Listener

Adds a [listener](https://doc.nuxeo.com/x/C4AO) with its test class, the events will be asked during the generation process. Both existing and custom events can be declared. You can create any listener type: pre-commit, post-commit, synchronous and asynchronous.

```bash
nuxeo bootstrap listener
```

###### Parameters

* **Trigger on events**: List of some common events to bind to your listener.
* **Custom Events**: _In case you select 'custom events'_ in the previous list; comma separate list of other events.
* **Asynchronous Listener**: if you need to run after the transaction has committed, in a new transaction and a separate thread. This is useful for any long-running operations whose result doesn't have to be seen immediately in the user interface.
* **Post-commit Listener**: if you need to run after the transaction has committed, in a new transaction but in the same thread, this is useful for logging.

##### Create a Service

Adds a [Nuxeo component](https://doc.nuxeo.com/x/DIAO) exposed as a Nuxeo service.

```bash
nuxeo bootstrap service
```

##### Create a REST API Response Enricher

Creates a [Content Enricher](https://doc.nuxeo.com/x/5wUuAQ) that enriches with more information a REST response using request's headers.

```bash
nuxeo bootstrap enricher
```

##### Create a Business Object - Document Adapter

Creates a Document Adapter that turn `DocumentModel` object into business objects.

```bash
nuxeo bootstrap adapter
```

##### JSF - Create an action - Seam UI Action Bean

For compatibility, creates a new action in the JSF UI with an Seam Bean binded to it.

```bash
nuxeo bootstrap seam-action
```

##### JSF - Create a Controller - Seam Controller Bean

For compatibility, creates a new controller bean to lets you create or change behaviors in JSF UI.

```bash
nuxeo bootstrap seam-action
```

##### Add an Empty Polymer Application

Add an application based on [Polymer Starter Kit](https://github.com/PolymerElements/polymer-starter-kit) bundled as a Nuxeo Project.

```bash
nuxeo bootstrap polymer
# npm and bower install must be executed automatically, otherwise:
# cd *-web && npm install && bower install

# To run the application in dev mode; with file changes watch:
cd *-web && gulp serve
```

##### Add an Empty Angular2 Application

Add an application using [Angular2](https://angular.io/) bundled as a Nuxeo Project.

```bash
nuxeo bootstrap angular2
# npm and bower install must be executed automatically, otherwise:
# cd *-web && npm install && bower install

# To run the application in dev mode; with file changes watch:
cd *-web && npm run dev
```

##### Add an Empty ReactJS Application

Add an application using [ReactJS](https://facebook.github.io/react/) bundled as a Nuxeo Project.

```bash
nuxeo bootstrap reactjs
# `npm install` must be executed automatically, otherwise:
# cd *-web && npm install

# To run the application in dev mode; with file changes watch:
cd *-web && gulp serve
```

##### Add a Nuxeo Package Module

Creates a module that generate a [Nuxeo Package](https://doc.nuxeo.com/x/CwIz) for your project. **Can only be called in a Maven multi-module architecture**, hence make sure to bootstrap your project using `nuxeo bootstrap` or `nuxeo bootstrap multi-module`. If you used `nuxeo bootstrap single-module` to bootstrap your project, you won't be able to call that option afterwards.

```bash
nuxeo bootstrap package
```

### Discover Project Samples

Discover a ready-to-use Nuxeo Project to help you understand tricky components like `BlobProvider`:

```bash
nuxeo sample
```
