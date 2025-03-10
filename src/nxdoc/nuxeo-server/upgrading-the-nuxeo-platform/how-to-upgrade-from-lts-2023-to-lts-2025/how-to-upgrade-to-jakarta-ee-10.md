---
title: How to upgrade to Jakarta EE 10
description: Instructions to upgrade your Nuxeo Project to LTS 2025 - Jakarta EE part
review:
   comment: ''
   date: '2025-03-10'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 100
---

## Introduction

{{! excerpt}}
The Java Specifications, formerly called Java EE, used in Nuxeo was upgraded to **Jakarta EE 10** for LTS 2025.

This update has a significant impact on the Java code. As usual, upgrading from one major to another brings several
breaking changes, but in addition to this, the package of the proposed APIs have changed from `javax` to `jakarta`.
{{! /excerpt}}

Nuxeo used to depend on Java EE 7, or even 6 as we were leveraging JAX-RS 1.x.
See below versions description:
- Java EE 7 - previously used by Nuxeo
- Jakarta EE 8 - Ownership transfered to Eclipse Foundation, Maven dependency change
- Jakarta EE 9 - Java package change
- Jakarta EE 10 - First release with enhancements and changes under the Eclipse Fondation umbrella

## Maven Dependency

They are two kinds of dependencies in the Jakarta EE context, the Specifications and the Implementations.
A cleanup was done to our dependency graph to keep only the ones needed by Nuxeo Server.

### Specfications

You need to update the specifications you may use in your project to the Jakarta ones, generally the artifactId ends 
with `-api`, at least it is the case in Jakarta EE.

Find the API dependencies with `javax` groupId and replace them by the Jakarta equivalent, see the ones used by Nuxeo Server:

```xml
<dependencies>
  ..
  <dependency>
    <groupId>jakarta.activation</groupId>
    <artifactId>jakarta.activation-api</artifactId>
  </dependency>
  <dependency>
    <groupId>jakarta.annotation</groupId>
    <artifactId>jakarta.annotation-api</artifactId>
  </dependency>
  <dependency>
    <groupId>jakarta.el</groupId>
    <artifactId>jakarta.el-api</artifactId>
  </dependency>
  <dependency>
    <groupId>jakarta.inject</groupId>
    <artifactId>jakarta.inject-api</artifactId>
  </dependency>
  <dependency>
    <groupId>jakarta.mail</groupId>
    <artifactId>jakarta.mail-api</artifactId>
  </dependency>
  <dependency>
    <groupId>jakarta.persistence</groupId>
    <artifactId>jakarta.persistence-api</artifactId>
  </dependency>
  <dependency>
    <groupId>jakarta.servlet</groupId>
    <artifactId>jakarta.servlet-api</artifactId>
  </dependency>
  <dependency>
    <groupId>jakarta.servlet.jsp</groupId>
    <artifactId>jakarta.servlet.jsp-api</artifactId>
  </dependency>
  <dependency>
    <groupId>jakarta.servlet.jsp.jstl</groupId>
    <artifactId>jakarta.servlet.jsp.jstl-api</artifactId>
  </dependency>
  <dependency>
    <groupId>jakarta.transaction</groupId>
    <artifactId>jakarta.transaction-api</artifactId>
  </dependency>
  <dependency>
    <groupId>jakarta.validation</groupId>
    <artifactId>jakarta.validation-api</artifactId>
  </dependency>
  <dependency>
    <groupId>jakarta.ws.rs</groupId>
    <artifactId>jakarta.ws.rs-api</artifactId>
  </dependency>
  <dependency>
    <groupId>jakarta.xml.bind</groupId>
    <artifactId>jakarta.xml.bind-api</artifactId>
  </dependency>
  <dependency>
    <groupId>jakarta.xml.ws</groupId>
    <artifactId>jakarta.xml.ws-api</artifactId>
  </dependency>
  ..
</dependencies>
```

### Implementations

The implementations have also changed. Some have just been renamed to jakarta, and others have been changed to use 
another vendor.

Usually, a project doesn't state the Implementations it is using, it may just depend on the Specifications. If your 
project is using implementations, you will need to update them, see below the one used by Nuxeo Server:

```xml
<dependencies>
  ..
  <dependency>
    <groupId>com.sun.activation</groupId>
    <artifactId>jakarta.activation</artifactId>
  </dependency>
  <dependency>
    <groupId>org.apache.tomcat</groupId>
    <artifactId>tomcat-jasper-el</artifactId>
  </dependency>
  <dependency>
    <groupId>org.eclipse.angus</groupId>
    <artifactId>jakarta.mail</artifactId>
  </dependency>
  <dependency>
    <groupId>org.apache.geronimo.components</groupId>
    <artifactId>geronimo-transaction</artifactId>
  </dependency>
  <dependency>
    <groupId>org.apache.tomcat</groupId>
    <artifactId>tomcat-*</artifactId>
  </dependency>
  <dependency>
    <groupId>org.glassfish.jersey.core</groupId>
    <artifactId>jersey-*</artifactId>
  </dependency>
  <dependency>
    <groupId>com.sun.xml.bind</groupId>
    <artifactId>jaxb-impl</artifactId>
  </dependency>
  ..
</dependencies>
```

### Libraries

Several libraries leverage Java Specifications, with this upgrade to Jakarta EE 10, they might be updated too.

In most cases, updating the library version is enough, so we encourage you to update all the dependencies you may depend on
and that are not provided by Nuxeo Parent pom.

In other cases, you might find an appropriate alternative, this was the case for `jackson-jaxrs-json-provider` that 
has been changed to `jackson-jakarta-rs-json-provider`.

## Java Code

Globally, you will need to update all of your import of Java Specifications to the `jakarta` namespace.

For example:

```java
import javax.el.ELContext;
import javax.inject.Inject;
import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Path;
```

needs to be converted to:

```java
import jakarta.el.ELContext;
import jakarta.inject.Inject;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.Path;
```

If your project depends on implementations, you will need to update their imports too.

For example, as `jboss-el` was removed in favor of `tomcat-jasper-el`, the following import:

```java
import org.jboss.el.ExpressionFactoryImpl;
```

needs to be replaced by:

```java
import org.apache.el.ExpressionFactoryImpl;
```
