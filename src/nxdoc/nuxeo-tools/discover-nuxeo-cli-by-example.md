---
title: Discover Nuxeo CLI by Example
description: Discover how to bootstrap Nuxeo components or a new project using Nuxeo CLI
tree_item_index: 300
review:
    date: '2017-03-15'
    status: requiresUpdates
    comment: ''

---

{{! excerpt}}

Discover how to bootstrap Nuxeo components or a new project using Nuxeo CLI

{{! /excerpt}}

## Bootstrapping a New Project

Assume that you just created a new folder called `my-project`.

### I'd like to bootstrap a new project with an Operation, a Service and with everything packaged

```bash
nuxeo bootstrap multi-module operation service package
```

* `Operation`: requires a `core` module
* `Service`: requires a `core` module
* `Package`: requires a `package` module

Modules: Multiple modules required -> taget project will be **multi-module**

Folders Result:

```text
my-project
├── my-project-core
└── my-project-package
```

### I'd like to bootstrap a new project with an Operation, a listener, a Polymer application and with everything packaged

```bash
nuxeo bootstrap multi-module operation listener polymer package
```

* `Operation`: requires a `core` module
* `Listener`: requires a `core` module
* `Polymer`: requires a `web` module
* `Package`: requires a `package` module

Modules: Multiple modules required -> taget project will be **multi-module**

Folders Result:

```text
my-project
├── my-project-core
├── my-project-package
└── my-project-web
```

### I'd like to bootstrap a new project with only an Operation

```bash
nuxeo bootstrap operation
```

Modules: Only one module is required -> taget project will be **simple-module**

Folders Result:

```text
my-project
```

### I'd like to bootstrap a new multi-module project with only an Operation

```bash
nuxeo bootstrap operation multi-module
```

Modules: Only one module is required, but `multi-module` is forced -> taget project will be **multi-module**

Folders Result:

```text
my-project
└── my-project-core
```

Then, you'll be able to add it a package

```bash
nuxeo bootstrap package
```

Folders Result:

```text
my-project
├── my-project-core
└── my-project-package
```

## Bootstrapping in an existing Project

{{#> callout type='warning' }}

To prevent from unpredictable behaviors; **always** execute the FIRST bootstrap command from the **root folder** of your project.

{{/callout}}

### I'd like to add an operation in a submodule called `my-project-service`

Wrong command:

```bash
nuxeo bootstrap operation
```

Folders Results:

```text
my-project
├── my-project-core // Core module created
└── my-project-service
```

When you target an exisiting folder that do not match the default pattern `<parent-folder>-core`, you can override it using `--type` option:

```bash
nuxeo bootstrap --type="service" operation
```

Folders Results:

```text
my-project
└── my-project-service
```

### I'd like to add a new Nuxeo based module in an existing multiple modules project

Assuming our base hierarchy:

```text
my-project
├── my-project-client
├── my-project-common
├── my-project-constant
```

If you do something like:

```bash
nuxeo bootstrap single-module
```

Folders Results:

```text
my-project
├── my-project-client
├── my-project-common
├── my-project-constant
└── my-project-core // Core module created
```

But, in fact, we target to have a `my-project-server` module:

```bash
nuxeo bootstrap --type="server" single-module
```

Folders Results:

```text
my-project
├── my-project-client
├── my-project-common
├── my-project-constant
└── my-project-server
```
