---
title: Deploy and Publish
review:
  comment: ''
  date: '2021-03-02'
  status: ok
details:
  howto:
      excerpt: Learn how to package, publish, deploy and hotreload a project.
      level: Intermediate
      tool: 'Nuxeo CLI, Nuxeo Studio'
      topics: 'Automation, Layout'
labels:
  - howto
  - nuxeo-cli
toc: true
tree_item_index: 300
---

{{#> callout type='info'}}
Watch the related courses on Nuxeo University:
- [Course on Nuxeo CLI](https://university.nuxeo.com/learn/public/course/view/elearning/83/NuxeoDevTools)
{{/callout}}

## Bootstrap Your Nuxeo Package

1.  In your terminal:

  ```bash
  $ nuxeo bootstrap package
  ```

2.  You are prompted for a few details:

  ```
  ? Parent Group id: com.bigcorp.contractmgt
  ? Parent Artifact id: contract-mgt-project-parent
  ? Parent version: 1.0-SNAPSHOT
  ? Package Artifact id: contract-mgt-project-package
  ? Package name: contract-mgt-project-package
  ? Company name: Big Corp
  ```

  You need to re-run `nuxeo studio link` to properly configure your Studio Project into your package.

## Bootstrap a `docker-compose` for Your Project

1.  In your terminal:

  ```bash
  $ nuxeo bootstrap docker-compose
  ```

2.  You are prompted for a few details:

  ```
  ? Parent Group id: com.bigcorp.contractmgt
  ? Parent Artifact id: contract-mgt-project-parent
  ? Parent version: 1.0-SNAPSHOT
  ? Docker Artifact id: contract-mgt-project-docker
  ? Base Docker Image Repository: docker-private.packages.nuxeo.com/nuxeo/nuxeo
  ? Base Docker Image Version: 2021.1
  ? Studio package to Install:
  ```

  To complete your docker bootstrap, you need to log in to docker.

## Run your project

{{#> callout type='info' }}
Before being able to run your project, be sure:
  * To set the environment variable **NUXEO_CLID** with your instance CLID.
  * It has been built and installed with the last changes, at the root level.
{{/callout}}

1.  In your terminal:

  ```bash
  $ docker-compose up [-d]
  ```

2.  If you want to follow the logs:

  ```bash
  $ docker-compose logs -f
  ```

## Hot reload

The goal of hot reload is to apply modifications done on your Studio project without needing to re-download everything and install it on your Nuxeo instance.

##### Hot reload - Browser

1.  Install the Nuxeo extension ([Google Chrome](https://chrome.google.com/webstore/detail/nuxeo-dev-tools/kncphbjdicjganncpalklkllihdidcmh?hl=en), [Firefox](https://addons.mozilla.org/fr/firefox/addon/nuxeo-dev-tools/))

2.  Read [Nuxeo dev tools](https://doc.nuxeo.com/nxdoc/nuxeo-dev-tools-extension/) documentation.

##### Hot reload - Nuxeo CLI

1.  Configure your hot reload:
  1.  In your terminal:
  ```bash
  $ nuxeo hotreload configure
  ```

  2.  You are prompted for a few details:

  ```
  ? Nuxeo server deployment: Docker Compose Deployment
  ? Name of the Docker compose service for the Nuxeo server: contract-mgt-project_nuxeo_1
  ? Ignore selected modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
  >( ) contract-mgt-project-core
  ```

2.  Launch the hot reload:

  ```bash
  $ nuxeo hotreload
  ```

## Release Your Project

1.  In your terminal:

  ```bash
  $ nuxeo studio release
  ```

2.  You are prompted for few details:

  ```
  ? Branch to release:
  ? Version to release:
  ```

3.  Release your project using maven command in the following order:

  ```bash
  $ mvn release:clean
  $ mvn release:prepare
  $ mvn release:perform
  ```

## Publish

1.  Follow [Uploading a nuxeo package](https://doc.nuxeo.com/studio/delivering-a-customization-package-through-the-nuxeo-marketplace/#uploading-a-nuxeo-package).

2.  Your done! Your project it now published and available.
