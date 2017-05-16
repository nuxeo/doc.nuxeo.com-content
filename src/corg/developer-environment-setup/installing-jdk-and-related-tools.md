---
title: Installing JDK and Related Tools
review:
    comment: ''
    date: '2017-05-16'
    status: ok
labels:
    - java
    - jdk
    - maven
tree_item_index: 300
toc: true
---

## Installing JDK

Nuxeo Platform is a Java based solution. Developing Nuxeo Platform requires JDK 8 installed on your computer. You can
download the [latest JDK 8 version from Oracle](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html),
or choose your preferred way to download a JDK.

Once installed, verify the Java compiler version in terminal. The result should be in Java 8:

```
$ javac -version
javac 1.8.0_131
```

## Installing Related Tools

You need to install Maven, a project management tool.

### Maven

#### Mac OS

Using Homebrew

```
brew install maven
```
