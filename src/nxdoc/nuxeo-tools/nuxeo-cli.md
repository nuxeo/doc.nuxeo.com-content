---
title: Nuxeo CLI
description: 'Nuxeo CLI aims at making the whole development process easier with bootstraps, sample projects and hot reload of your developments.'
tree_item_index: 100
toc: true
review:
    date: '2018-05-29'
    status: 'ok'
    comment: ''
labels:
    - lts2017-ok
    - nuxeo-cli
    - akervern
    - university
---
{{! excerpt}}
Nuxeo CLI aims at making the whole development process easier with bootstraps for common Nuxeo components, sample projects to help you understand the hood and with the ability to trigger a hot reload of your developments in a running Nuxeo Server.
{{! /excerpt}}

{{#> callout type='info'}}
Watch the related courses on Nuxeo University
- [Course on Nuxeo CLI](https://university.nuxeo.com/learn/course/external/view/elearning/85/NuxeoCLI)
- [Expert Session on Nuxeo Software Factory](https://university.nuxeo.com/learn/public/course/view/elearning/136/expert-session-nuxeo-software-factory)
![]({{file name='university-nuxeo-cli.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Installation

Nuxeo CLI is working like any shell program. After installing it, you'll be able to execute a `nuxeo` binary from your terminal and unleash its power.

### Requirements

* [Node.js](https://nodejs.org/) **version = Latest LTS**

### Recommended Installation

The recommended installation is to use the [NPM](https://www.npmjs.com/) registry installation, and install `nuxeo-cli` as a global package to make it available in your `PATH`:

```bash
$ npm install -g nuxeo-cli
```

### Install from Source Repository

If you are a very high skilled developer, and living in the edge, you can install it from the source repository:

```bash
$ npm install -g nuxeo/nuxeo-cli
```

## Features

- Trigger the Hot reload which allows you to update the deployed bundles without restarting the Nuxeo Server.
- Provides some sample Nuxeo projects to help you understand the un-understandable.
- Bootstrap a bare Nuxeo project using [Maven multiple modules](https://maven.apache.org/guides/mini/guide-multiple-modules.html) structure.
- Adds a Nuxeo Package module to distribute your project ([Marketplace](https://connect.nuxeo.com/nuxeo/site/marketplace))
- Adds a ready-to-use empty [Polymer](https://www.polymer-project.org), [Angular2](https://angular.io/) or [ReactJS](https://facebook.github.io/react/) application.
- Create your own business rules or logic as an [Automation Operation]({{page version='' space='nxdoc' page='automation'}}).
- Enrich REST API responses using a [content enricher]({{page version='' space='nxdoc' page='content-enrichers'}}).
- Wrap your Business logic in Document Adapter.
- Declare your new [Nuxeo Service]({{page version='' space='nxdoc' page='runtime-and-component-model'}}).
- Plug your logic to an existing behavior with the event bus using an [Event Listener]({{page version='' space='nxdoc' page='events-and-messages'}}).
- Bootstrap old-fashioned JSF objects like Seam-based UI action or bare Seam bean.
- Interact with your Nuxeo Studio's project

## Commands

```bash
$ nuxeo <command> [options] [args]
```

### Hot Reload

Triggering a hot reload on your server allows you to update some of your development modules without restarting the Nuxeo Server. To be done, it requires some simple modifications like to enable the `sdk` template in your `nuxeo.conf` file (Nuxeo CLI does that for you)

The first step is to associate a Nuxeo Server with your project root. Nuxeo CLI will ask you the distribution path (the path to the home directory of the server, typically, the _parent_ of the `bin` folder) and if you want to let it change `nuxeo.conf` file for you. Re-execute the command to change the distribution path.

{{#> callout type='warning' }}
The plugin lists the modules to _ignore_, not the ones to deploy, so only check the modules you do _not_ want to deploy during the hot reloads.
{{/callout}}

```bash
$ #Make sure you are at the root folder of your project, then:
$ nuxeo hotreload configure
```

If your server was already running, restart it, so the changes made in `nuxeo.conf` are handled (using the SDK template, mainly).

Then, you will be able to trigger a hot reload using:

```bash
$ nuxeo hotreload
```

### Studio

Connect your Studio project to your bundle dependencies to be able to add it directly in your package or testing that everything is working well together.

Link your project to Studio:

```bash
$ #Make sure you are at the root folder of your project, then:
$ nuxeo studio [link]
```

Unlink your project:

```bash
$ nuxeo studio unlink
```

Generate a Java Constant class with Studio's features:

```bash
$ nuxeo studio import
```

Export your local contributions to your studio project:

```bash
$ nuxeo studio export
```

Release your studio project (MINOR or MAJOR) on a given branch:

```bash
$ nuxeo studio release
```

### Bootstrap

{{#> callout type='warning' }}
To prevent unpredictable behaviors **always** execute the FIRST bootstrap command from the **root folder** of your project.
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

#### Multiple Modules Empty Nuxeo Project

Set up an empty Nuxeo Bundle using Maven multiple modules support.

```bash
$ nuxeo bootstrap multi-module
```

`multi-module` is the default generator when none is given as a parameter to `nuxeo bootstrap`.

##### Important Note

Using a Maven multiple modules architecture is the recommended way to bootstrap a new project: it allows to generate a Nuxeo Package afterwards to easily deploy your code on a Nuxeo Server instance. If a project is generated using a single module architecture, the Nuxeo Package needs to be created manually.

##### Parameters

* **Use a parent artifact**: The parent artifact makes your project inherit dependencies, properties and other fields from another project. We recommend to keep the default value and use `org.nuxeo.ecm.distribution:nuxeo-distribution`.
* **Nuxeo Version**: Asked only if no parent is specified. It specifies which Nuxeo version of the dependency management will be imported.

#### Empty Nuxeo Project

Set up an empty Nuxeo project; *not recommended for project initialization*.

```bash
$ nuxeo bootstrap single-module
```
##### Important Notes

You should use this command to initiate a project that stands in a single Maven module, without the need to be distributed with a [Nuxeo Package]({{page version='' space='nxdoc' page='creating-nuxeo-packages'}}). Otherwise, use the `multi-module` option instead so that you can generate a Nuxeo Package later on.

##### Parameters

* **Parent Group / Artifact**: Like in `multi-module`, having a parent artifact enables project inheritance. If you are in a `multi-module`, you must set your parent module. If not, you can use `org.nuxeo.ecm.distribution:nuxeo-distribution` or `org.nuxeo:nuxeo-addons-parent`.
* **Nuxeo Version**: Asked only if needed, it specifies which Nuxeo version of the dependency management will be imported.

#### Unit Test

Add an empty [Unit Test](https://doc.nuxeo.com/corg/unit-testing/)

```bash
$ nuxeo bootstrap test-empty
```

#### Bare Component

Add an empty [Contribution](https://doc.nuxeo.com/nxdoc/contributing-to-nuxeo/)

```bash
$ nuxeo bootstrap contribution
```

#### Business Rules or Logic - Automation Operation

Add an empty [Automation Operation]({{page version='' space='nxdoc' page='automation'}}) along with a corresponding unit test.

```bash
$ nuxeo bootstrap operation
```

#### Event Bus Listener

Adds a [listener]({{page version='' space='nxdoc' page='events-and-messages'}}) with its test class. The events will be asked during the generation process. Both existing and custom events can be declared. You can create any listener type: pre-commit, post-commit, synchronous and asynchronous.

```bash
$ nuxeo bootstrap listener
```

##### Parameters

* **Trigger on events**: List of some common events to bind to your listener.
* **Custom Events**: In case you select 'custom events' in the previous list; comma separated list of other events.
* **Asynchronous Listener**: If you need to run after the transaction has committed, in a new transaction and a separate thread. This is useful for any long-running operation whose result doesn't have to be seen immediately in the user interface.
* **Post-commit Listener**: If you need to run after the transaction has committed, in a new transaction but in the same thread. This is useful for logging.

#### Service

Adds a [Nuxeo component]({{page version='' space='nxdoc' page='runtime-and-component-model'}}) exposed as a Nuxeo service.

```bash
$ nuxeo bootstrap service
```

#### REST API Response Enricher

Creates a [content enricher]({{page version='' space='nxdoc' page='content-enrichers'}}) that enriches with more information a REST response using request's headers.

```bash
$ nuxeo bootstrap enricher
```

#### Business Object - Document Adapter

Creates a Document Adapter that turns `DocumentModel` objects into a business objects.

```bash
$ nuxeo bootstrap adapter
```

#### JSF - Seam UI Action Bean

For compatibility, creates a new action in the JSF UI with an Seam Bean bound to it.

```bash
$ nuxeo bootstrap seam-action
```

#### JSF - Seam Controller Bean

For compatibility, creates a new controller bean to lets you create or change behaviors in JSF UI.

```bash
$ nuxeo bootstrap seam-action
```

#### Empty Polymer Application

Add an application based on [Polymer Starter Kit](https://github.com/PolymerElements/polymer-starter-kit) bundled as a Nuxeo Project.

```bash
$ nuxeo bootstrap polymer
# npm and bower install must be executed automatically, otherwise:
# cd *-web && npm install && bower install

# To run the application in dev mode; with file changes watch:
$ cd *-web && npm run serve
```

#### Empty Angular2 Application

Add an application using [Angular2](https://angular.io/) bundled as a Nuxeo Project.

```bash
$ nuxeo bootstrap angular2
# npm and bower install must be executed automatically, otherwise:
# cd *-web && npm install && bower install

# To run the application in dev mode; with file changes watch:
$ cd *-web && npm run dev
```

#### Empty ReactJS Application

Add an application using [ReactJS](https://facebook.github.io/react/) bundled as a Nuxeo Project.

```bash
$ nuxeo bootstrap reactjs
# `npm install` must be executed automatically, otherwise:
# cd *-web && npm install

# To run the application in dev mode; with file changes watch:
$ cd *-web && gulp serve
```

#### Nuxeo Package Module

Creates a module that generate a [Nuxeo Package]({{page version='' space='nxdoc' page='creating-nuxeo-packages'}}) for your project. **Can only be called in a Maven multi-module architecture**, hence make sure to bootstrap your project using `nuxeo bootstrap` or `nuxeo bootstrap multi-module`. If you used `nuxeo bootstrap single-module` to bootstrap your project, you won't be able to call that option afterwards.

```bash
$ nuxeo bootstrap package
```

### Sample

Discover a ready-to-use Nuxeo Project to help you understand tricky components like `BlobProvider`:

```bash
$ nuxeo sample
```

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Discover Nuxeo CLI by Example]({{page page='discover-nuxeo-cli-by-example'}})
- [Develop with Nuxeo Platform]({{page version='' space='nxdoc' page='develop-with-nuxeo-platform'}})
- [Create Nuxeo Packages]({{page version='' space='nxdoc' page='creating-nuxeo-packages'}})

{{/panel}}
</div>
</div>
