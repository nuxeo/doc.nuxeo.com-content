---
title: Docker Usage
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '3868947'
    ajs-parent-page-title: Development Tools and Process
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Docker+usages
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Docker+usages'
    page_id: '31031558'
    shortlink: BoHZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/BoHZAQ'
    source_link: /display/CORG/Docker+usages
tree_item_index: 700
history:
    -
        author: Manon Lumeau
        date: '2016-03-15 14:43'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2016-03-15 14:42'
        message: ''
        version: '4'
    -
        author: Ronan Daniellou
        date: '2016-03-14 15:45'
        message: 'Typo: fell -> feel'
        version: '3'
    -
        author: Damien Metzler
        date: '2016-03-14 15:20'
        message: ''
        version: '2'
    -
        author: Damien Metzler
        date: '2016-03-14 15:05'
        message: ''
        version: '1'

---
## Using It to Test a Bundle on a Fresh Distribution

First you have to start a clean Nuxeo container using the official images:

```bash
docker run -d --name NXP-88888 -p 8888:8080 nuxeo:10.10
```

Nuxeo is then available on the port 8888 of the Docker's host (hopefully your local machine if you run Linux or the result of `docker-machine ip default` on other systems). The name of your container will be `NXP-88888` which will be referred in the next commands.

## Copy Some Files

In order to copy your bundle into your container, you can run:

```
docker cp my-new-awesome-bundle.jar NXP-88888:/opt/nuxeo/server/nxserver/bundles/
docker stop NXP-88888 && docker start NXP-88888
```

The last command restarts the container, meaning it will restart nuxeo.

## What's Happening in There?

There's no SSH daemon running in the container, so to debug what's going on in the container you need to get the logs:

```
docker logs [-f] NXP-88888
```

The `-f` option continuously tails the logs.

You can also open a shell in the container by launching a `bash` command into the container :

```
docker exec -ti NXP-88888 bash
```

## Go to Sleep Now!

If you're ending your docker session, you can stop the image by running:

```
docker stop NXP-88888
```

By doing this the container only consumes the space used by starting Nuxeo (DB, tmp, files, war etc...), but won't consume any CPU or RAM.

If you want to restart your container do this:

```
docker start NXP-88888
```

and if you really want to remove the container because your job is ended:

```
docker rm -f NXP-8888
```

## Advantages of Using Docker

The advantages of using Docker rather than a VM are:

* small startup time since the underlying VM is already started. The startup time is the JVM+Nuxeo startup time

* The containers share the same base image and then additional FS layers are added: starting N containers doesn't consume as much as N nuxeo directories.

* it's super fast to create a new vanilla Nuxeo environment to test various things.

