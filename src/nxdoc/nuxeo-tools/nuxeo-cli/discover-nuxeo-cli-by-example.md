---
title: Discover Nuxeo CLI by Example
description: Discover how to bootstrap Nuxeo components or a new project using Nuxeo CLI.
tree_item_index: 300
toc: true
review:
    date: '2017-12-11'
    status: ok
    comment: ''
labels:
    - lts2017-ok
    - nuxeo-cli
    - akervern

---

{{! excerpt}}

Discover how to bootstrap Nuxeo components or a new project using Nuxeo CLI.

{{! /excerpt}}

## Bootstrapping a New Project

Assume that you just created a new folder called `my-project`.

### Bootstrap a Packaged New Project with an Operation and a Service

```bash
$ nuxeo bootstrap multi-module operation service package
```

* `Operation`: Requires a `core` module
* `Service`: Requires a `core` module
* `Package`: Requires a `package` module

Modules: Multiple modules required -> target project will be **multi-module**.

Folders result:

```text
my-project
├── my-project-core
└── my-project-package
```

### Bootstrap a Packaged New Project with an Operation, a Listener and a Polymer Application

```bash
$ nuxeo bootstrap multi-module operation listener polymer package
```

* `Operation`: Requires a `core` module
* `Listener`: Requires a `core` module
* `Polymer`: Requires a `web` module
* `Package`: Requires a `package` module

Modules: Multiple modules required -> target project will be **multi-module**.

Folders result:

```text
my-project
├── my-project-core
├── my-project-package
└── my-project-web
```

### Bootstrap a New Project with Only an Operation

```bash
$ nuxeo bootstrap operation
```

Modules: Only one module is required -> target project will be **simple-module**.

Folders result:

```text
my-project
```

### Bootstrap a New Multi-Module Project with Only an Operation

```bash
$ nuxeo bootstrap operation multi-module
```

Modules: Only one module is required, but `multi-module` is forced -> target project will be **multi-module**

Folders result:

```text
my-project
└── my-project-core
```

Then, you'll be able to add it a package.

```bash
$ nuxeo bootstrap package
```

Folders result:

```text
my-project
├── my-project-core
└── my-project-package
```

## Bootstrapping in an Existing Project

{{#> callout type='warning' }}

To prevent unpredictable behaviors **always** execute the FIRST bootstrap command from the **root folder** of your project.

{{/callout}}

### Add an Operation in a Submodule Called my-project-service

Wrong command:

```bash
$ nuxeo bootstrap operation
```

Folders results:

```text
my-project
├── my-project-core // Core module created
└── my-project-service
```

When you target an existing folder that does not match the default pattern `<parent-folder>-core`, you can override it using the `--type` option:

```bash
$ nuxeo bootstrap --type="service" operation
```

Folders results:

```text
my-project
└── my-project-service
```

### Add a New Nuxeo-Based Module in an Existing Multiple Modules Project

Assuming our base hierarchy is:

```text
my-project
├── my-project-client
├── my-project-common
├── my-project-constant
```

If you do something like:

```bash
$ nuxeo bootstrap single-module
```

Folders results:

```text
my-project
├── my-project-client
├── my-project-common
├── my-project-constant
└── my-project-core // Core module created
```

But in fact we target to have a `my-project-server` module:

```bash
$ nuxeo bootstrap --type="server" single-module
```

Folders results:

```text
my-project
├── my-project-client
├── my-project-common
├── my-project-constant
└── my-project-server
```

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Nuxeo CLI]({{page page='nuxeo-cli'}})
- [Develop Your Own Java Code]({{page space='nxdoc' page='develop-your-own-java-code'}})
- [Create Nuxeo Packages]({{page version='' space='nxdoc' page='creating-nuxeo-packages'}})

{{/panel}}
</div>
</div>
