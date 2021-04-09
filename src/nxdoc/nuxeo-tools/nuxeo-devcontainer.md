---
title: Nuxeo DevContainer
description: "The Nuxeo DevContainer allows you bootstrap, develop and deploy your Nuxeo Custom Application in a containerized environment."
review:
    date: '2021-04-09'
    status: ok
    comment: ''
labels:
    - lts2021-ok
tree_item_index: 300
toc: true
---
{{! excerpt}}
The Nuxeo DevContainer allows you speed up your development flow by bootstraping, developping and deploying your Nuxeo Custom Application in a containerized environment and continuing using your prefered IDE.
{{! /excerpt}}

{{#> callout type='warning'}}
This project is still under heavy development
{{/callout}}

## Requirements

You need to install the following tools:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Visual Studio Code Remote Development Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

Before going further, you need to understand a few concepts and have a basic knowledge of the following tools and confortable on how to bootstrap a Nuxeo Custom Application:

- [Nuxeo CLI]({{page page='nuxeo-cli'}})
- [Nuxeo Getting Started]({{page page='getting-sarted'}})
- [Visual Code Remote - Containers](https://code.visualstudio.com/docs/remote/containers#_getting-started)
- [devcontainer.json Reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference)

## Introduction

The first step is to run our new bootstrap shell script that can create a custom project using Docker; without any other tool installed. For now, it is only designed to work on *NIX system, but will be adapted to Windows:

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/nuxeo-sandbox/studio-dev-env/master/start-bootstrap.sh) my-first-project"
```

You will be asked for required credentials for authenticated access to Nuxeo Online Service and packages.nuxeo.com (Nuxeo artefacts repository), the Studio project you want to bind, as well as a CLID for registering the Nuxeo instance that will be used.

{{#> callout type='info'}}

- NOS Credentials: [How to create a token](https://doc.nuxeo.com/studio/token-management)
- packages.nuxeo.com Credentials: [Nexus User Token](https://help.sonatype.com/iqserver/automating/rest-apis/user-token-rest-api---v2#UserTokenRESTAPI-v2-CreatingaUserToken)
- Nuxeo CLID: [Get Instance CLID](https://connect.nuxeo.com/nuxeo/site/connect/applications)

{{/callout}}

During the generation process, you will be prompted for which version of the Nuxeo Platform you want to create your project for. You can use any version starts from `11.4`, or the `2021.1` version.

Output of this execution, in your current working directory:

- new empty custom plugin project `my-first-project`
- a script to help you start the containerized development environment as a shell: “start-shell.sh”.

The containerized development environment is a Docker image that contains Nuxeo recommended tools:

- Development tooling: Git, NodeJS, NPM, Maven, Docker CLI, Docker Compose, Zulu OpenJDK8, Zulu OpenJDK11 and Nuxeo CLI
- Third parties CLIs: Kafka CLI and Mongo Shell, GCloud SDK, Azure CLI and AWS CLI.

It also adds into the image `tmux` and `ohmyzsh` that you will use for shell interactions.

Using our prebuilt startup scripts, the authentication for private registries of Maven, NPM and Docker against packages.nuxeo.com will be wired. The maven exec of the docker image will bind its repository in your local Maven repository, which will be created if missing. It also binds the container to your local Docker daemon to allow building and starting other containers from the development environment using the Docker in Docker pattern.

After bootstrap is finished, we strongly recommend executing “start-shell.sh” to build your project once (`maven package`); and fill your local Docker registry with a first custom project Docker image that will be used afterwards in the `docker-compose.yaml` file.

Then, if you use Visual Studio Code as your IDE, you can directly open the project and you will be prompted to start the development environment as a devcontainer; It allows you to open your project inside a container and take advantage of Visual Studio Code's full feature set, including an in-container shell. Starting the devcontainer definition from Visual Studio Code will start the project's docker-compose file, and will run both the development environment and the custom application’s image.

For other IDEs, we recommend you let the container’s shell (started with ./start-shell.sh script) open to run the necessary Nuxeo CLI commands described hereafter, or any other tools commands.

{{#> callout type='warning'}}
Limitations:

- Cannot jump to VSCode devcontainer right after executing the bootstrap script; as it starts the project docker-compose file and it requires a first build of the project Docker Image.
- CLID is required to bootstrap, but it is a chicken and egg issue, as you need to start a server before having a CLID.
- Prompting validation is very limited for now; for instance there is no check if your credentials have access, or not, to the Studio project you enter.
{{/callout}}

## Usage with Visual Studio Code

Ensure your project root folder contains a `.devcontainer` folder, if not you can bootstrap it using `nuxeo b devcontainer`. Meanwhile, ensure [Visual Studio Code Remote Development Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) is installed too.

### VSCode: Open the devcontainer

Open your project root folder with Visual Code, and you must see a popup at the bottom right saying: `Folder contains a Dev Container configuration file.`, click on `Open in Container` button.

Visual Studio Code must restart and start both your Docker Image and the Dev Environment. More informations: [Visual Code Remote - Containers](https://code.visualstudio.com/docs/remote/containers#_getting-started).

After that step, we assume you execute commands from Visual Code with the integrated Terminal.

### VSCode: Build Your Project

Using the integrated terminal, everything has been configured and you only have to execute:

```shell
mvn package
```

## Usage with Shell

For the next steps; we assume you are executing the commands within the development environment shell (using `start-shell.sh` script); either from the devcontainer either from start script.

### Shell: Build Your Project

When building you project, the regular `mvn package` will build as well the Docker Image. It can be disabled by using `-PskipDocker` property.

During the Image build, your package dependencies will be resolved and might require a correct CLID if required dependencies are restricted.

NB: If you are not using the development environment; and your package depends on other restricted Nuxeo packages, you will need to pass NUXEO_CLID (format: NUXEO_CLID=XXXX—XXXX—) as an environment variable to build command.

```sheel
[NUXEO_CLID=XXXX--XXXX--] mvn package
```

### Shell: Start the Custom Application Image

The `docker-compose` generator creates a basic Docker Compose description file that starts your custom image and forward container’s port 8080 to 8080 on localhost. You can update the `docker-compose` file to start a MongoDB, Elasticsearch, ...

```shell
docker-compose up
```

{{#> callout type='info'}}
For development purposes, some Nuxeo server’s configurations can easily be set up in the compose file by creating a volume (https://docs.docker.com/compose/compose-file/compose-file-v3/#volume-configuration-reference) bound to container’s `/etc/nuxeo/conf.d` folder. During the container entrypoint execution, all file present in that directory are append to the final `nuxeo.conf` file (https://github.com/nuxeo/nuxeo/blob/master/docker/docker-entrypoint.sh#L48-L56).

```yaml
services:
  nuxeo:
    image: <your_custom_image>
    volumes:
      - my-local-conf.d:/etc/nuxeo/conf.d
```

{{/callout}}

## Advanced Usage

### Update/Fix Bootstrap or Shell variable afterwards

If you need to update any value (like using a new CLID); all the secrets are stored in a dotenv file: `.env.nuxeo-cli` in your project root folder. His content is straightforward, and his content is injected as an environment variable within the development shell.

{{#> callout type='warning'}}
This file MUST not be commited, and must be kept as ignored. When several people are working on the same project; each developer must use his own file.
{{/callout}}

### How to generate Custom Application Docker Image in a Local Development Environment

Nuxeo CLI is still working as a standalone tool if installed locally.

Note that some updates have been done on the way Studio is bound to your Customer Java plugin. Studio project is now installed using Project’s package dependency to enforce application dependencies resolution at runtime time.

Otherwise, regular commands still work:

```shell
nuxeo b multi-module operation studio package
nuxeo studio link
nuxeo b docker-compose docker
```

The result is:

- `core` module holding Java custom code
- `package` module building the project’s Nuxeo Package
- `docker` module distributing the application as a Docker container
- `docker-compose` file to start deploy and configure project

NB: You can use `nuxeo studio import` to create a Constant Java class that contains your available Studio configuration.

### How to Start Containerized Development Environment from any Project

You can create your own “start-shell.sh” script in any project, following this content:

```shell
#!/usr/bin/env sh
set -e

PROJECT=my-first-project
CWD=$(realpath $(dirname $0))

exec docker run --rm -it \
  --privileged -v "/var/run/docker.sock:/var/run/docker.sock" \
  --mount "type=bind,source=${CWD},destination=/home/nuxeo/workspace/${PROJECT}" \
  --mount "type=volume,source=${PROJECT}_m2repo,destination=/home/nuxeo/.m2/repository" \
  docker.packages.nuxeo.com/nos-dev/shell-project:latest
```

### How to Start Containerized Online IDE Based on our Development Environment from any Project

This script starts an online IDE (Code Server) on top of the development environment. Using the initial bootstrap method, you just have to run “start-ide.sh” script; otherwise you can create a similar script in any project, following this content:

```shell
PROJECT=my-first-project
B64_PROJECT=$(echo -n ${PROJECT} | md5)
CWD=$(realpath $(dirname $0))

exec docker run --rm -it \
  -p 8080:8080 \
  --privileged -v "/var/run/docker.sock:/var/run/docker.sock" \
  --mount "type=bind,source=${CWD},destination=/home/nuxeo/workspace/${PROJECT}" \
  --mount "type=volume,source=${PROJECT}_m2repo,destination=/home/nuxeo/.m2/repository" \
  --mount "type=volume,source=cs-settings-${B64_PROJECT},target=/home/nuxeo/.local/share/code-server/User" \
  docker.packages.nuxeo.com/nos-dev/code-server-project:latest
```
