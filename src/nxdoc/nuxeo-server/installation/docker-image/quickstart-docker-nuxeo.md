---
title: Quickstart with Nuxeo Platform and Docker
review:
  date: '2021-01-28'
  status: ok
toc: true
description: Useful commands in dev mode with Docker, and recommendations when going on production
tree_item_index: 100
---

{{! excerpt}}
This page details the fundamental commands you need to deploy your Nuxeo application in Docker in a development environment. It also provides a checklist when going on Production with Docker.
{{! /excerpt}}

## Starting With Docker in a Development Environment

We recommend to use the [default Nuxeo Docker image]({{page page='docker-image'}}#nuxeo_dev) in **development mode** (`NUXEO_DEV=true`), allowing you to hot reload your instance, and stop the server without shutting down the container.

### Get and Run the LTS 2021 Docker Image

{{{multiexcerpt 'lts2021-docker-prerequisites' space='nxdoc' page='generic-multi-excerpts'}}}

Execute the following command line:
```
$ docker run --name nuxeo \
   -e NUXEO_CLID="<NUXEO_CLID>" \
   -p 8080:8080 \
   -e NUXEO_DEV=true \
   -e NUXEO_PACKAGES="nuxeo-web-ui" \
   docker-private.packages.nuxeo.com/nuxeo/nuxeo:2021
```

Few notes:
- You can add `--rm` option if your container should be deleted when shut down
- To have different containers, change the name of your container

### Start and Stop Nuxeo Instance

To start/stop your Nuxeo instance, use this command:

```
docker start/stop nuxeo
```

Remember that the `nuxeo` value corresponds to the name of the container you have set when running the container. To run different Nuxeo instances, simply run the container with a different name.

### Use the nuxeoctl Script

`nuxeoctl` is made available in dev mode, and the container is not shut down when stopping the server in development mode:

```
docker exec nuxeo nuxeoctl stop
```

### Install Packages

Either edit the `NUXEO_PACKAGES` values when running the container, or use the `nuxeoctl` script:
1. `docker exec nuxeo nuxeoctl stop`
1. `docker exec nuxeo nuxeoctl mp-install <package_name>`
1. `docker exec nuxeo nuxeoctl start`

### View Logs

By default, the server logs are printed to the standard output when running the Nuxeo container.
If you've run the Nuxeo container with a different command than the default one, e.g. `docker exec nuxeo nuxeoctl start`, you can view the logs with:

```
docker logs -f nuxeo
```
or

```
docker exec  nuxeo tail -n500 -f /var/log/nuxeo/server.log
```

### Access Nuxeo Server with Bash

If you need to explore the Nuxeo installation folder:

```
docker exec -it nuxeo bash
```

## Going Further

For now, the entire Nuxeo stack, 3rd party software and data are hosted inside the same Docker container. This configuration won't allow you:

- To test / repeat / rollback a Nuxeo upgrade because you'll be inevitably altering the database and files
- To validate a "production-like" architecture:
  - Use an external database as MongoDB
  - Use an Elasticsearch cluster
  - Use Kafka to run the stream-related features

Let's review the key elements which should be taken into account when going into more complex architecture.

### Build a Custom Dockerfile

First, it is important [to customize the Nuxeo Docker Image]({{page page='build-a-custom-docker-image'}}) by building a Docker image from the Nuxeo one to have immutable images configured at build time.

It is necessary then:
- To build a custom Dockerfile
- To install the Nuxeo packages and set your configuration properties on build time (Dockerfile), not runtime.

Once you have your Dockerfile is ready, you can quickly build the same image over and over, without having to take the time to do it manually. This is a much more efficient and standard method for creating new images than is committing changes to a pulled image.

### Add Data Persistence

Persisting your data is interesting when you need to share resources between different containers. In the case of Nuxeo, this is interesting to store the data inside the same location.

→ More information [here]({{page page='setup-best-practices'}}#mounting-data-log-and-temporary-directories-as-volumes).

### Manage Nuxeo Properties

It is a good practice to externalize the Nuxeo properties which should be added to the `nuxeo.conf` file. You can easily append the values set by default.

→ More information [here]({{page page='configuration-parameters-index-nuxeoconf'}}#docker-image).

### Adjust Container Settings

Adapt the `JAVA_OPTS` value for your container

→ More information [here]({{page page='setup-best-practices'}}#container-environment).

### Follow General Best Practices

Independently of the Nuxeo deployment (ZIP or Docker), you need to follow:

→ [The setup best practices]({{page page='setup-best-practices'}})

→ [The security recommendations]({{page page='security-recommendations'}})

It is also important to ensure that you [monitor correctly your Nuxeo instance]({{page page='observability'}}).

Finally, when deploying your Nuxeo infrastructure in production, you will need to manage **scaling**.

To comply with those requirement, consider using Kubernetes to manage and automate your Nuxeo deployment (or Docker Swarm).
