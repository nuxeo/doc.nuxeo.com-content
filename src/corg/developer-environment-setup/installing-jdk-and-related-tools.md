---
title: Installing JDK and related tools
labels:
    - java
    - jdk
    - intellij
    - idea
    - maven
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

You need to install Maven, a project management tool. You also need to install your preferred IDE, such as Eclipse or IntelliJ.

### Maven

#### Mac OS

Using Homebrew

```
brew install maven
```

### IntelliJ

Download and install from <https://www.jetbrains.com/idea/download/>. Nuxeo works with both community edition and ultimate edition.
