---
title: Install Nuxeo with the ZIP distribution
review:
  date: '2021-01-29'
  status: ok
labels:
  - multiexcerpt
  - multiexcerpt-include
toc: true
description: Discover how to install the Nuxeo Platform with the Tomcat server ZIP.
tree_item_index: 275
---

## Requirements

{{{multiexcerpt 'lts2021-general-prerequesites' space='nxdoc' page='generic-multi-excerpts'}}}

## General Installation Process

Installing the Nuxeo Platform requires a few steps:

1. Have a look at the [Software Requirements](#software-requirements) in the section below.
2. [Install and Set up the related software]({{page page='installing-and-setting-up-related-software'}}).
   Install and start the Nuxeo Platform server.
   To understand how to start a Nuxeo Platform server on different environments, you can read and follow one of our recipes:
   - [Installing the Nuxeo Platform on Linux]({{page page='installing-the-nuxeo-platform-on-linux'}})
   - [Installing the Nuxeo Platform on Windows]({{page page='installing-the-nuxeo-platform-on-windows'}})
   - [Installing the Nuxeo Platform on macOS]({{page page='installing-the-nuxeo-platform-on-mac-os'}})

## Software Requirements

The following table lists the _current_ requirements for running the Nuxeo Platform from the Tomcat server ZIP archive.

If you have requirements and/or constraints are not reflected below, **do not hesitate to contact the Nuxeo team** to evaluate the feasibility of running Nuxeo on any other environment.

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th colspan="1">OS</th>
        <td colspan="1">
          <ul>
            <li>Linux</li>
            <li>macOS</li>
            <li>Windows</li>
          </ul>
        </td>
        <td colspan="1">Note: the only limitation on OS nature and version is the ability to install the correct version of the required JDK (see below). It means that while it is commonly reported to run on recent versions of Ubuntu, RHEL, Debian, CentOS, it can also run on any Linux distribution where it is possible to install the required JDK. You may have to adapt the provided startup shell scripts.</td>
      </tr>
      <tr>
        <th colspan="1">Java</th>
        <td colspan="1">{{{multiexcerpt 'java_requirement' page='Compatibility Matrix'}}}</td>
        <td colspan="1">See the following documentation:
          <ul>
            <li>[Checking your Java Version](#java-check)</li>
            <li>[How to Install Java](#java-install)</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th colspan="1">Optional Third-Party Software</th>
        <td colspan="1">Some third party software may be required depending on the conversions capabilities you want to benefit from. The following list is not exhaustive:
          <ul>
            <li>LibreOffice</li>
            <li>ImageMagick</li>
            <li>FFmpeg</li>
            <li>Docker</li>
            <li>pdftohtml</li>
            <li>Ghostscript</li>
            <li>Exiftool</li>
          </ul>
        </td>
        <td colspan="1">More information on [installing third-party software]({{page page='installing-and-setting-up-related-software'}}).</td>
      </tr>
    </tbody>
  </table>
</div>

## Checking Your Java Version {{> anchor 'java-check'}}

{{! multiexcerpt name='check-java-version'}}

**To check that you have the right version of Java:**

1. Open a terminal:

    - On **Linux** or **macOS**: open a terminal.
    - On **Windows**: press the "Windows" key + r, type `cmd` (or `command`) in the Run window and press "OK" (or open the **Command Prompt** from **Start** > **Programs** > **Accessories** in Windows 7 or entering **Command Prompt** in Cortana in Windows 10)

2. Type `java -version` and press **Enter**.
  If Java is correctly installed on your computer, the name and version of your Java virtual machine is displayed:

  ```shell
  openjdk version "11.0.8" 2020-07-14 LTS
  OpenJDK Runtime Environment Zulu11.41+23-CA (build 11.0.8+10-LTS)
  OpenJDK 64-Bit Server VM Zulu11.41+23-CA (build 11.0.8+10-LTS, mixed mode)
  ```

  Check in the output that the JDK version is 64 bits.

  If Java is not installed on you computer, it will fail to display the Java version. In this case, install Java (see below).

  If Java is installed but not included in the PATH, it will fail to find the Java command. In that case, you need to add `$JAVA_HOME/bin/` to your PATH (see [How do I set or change the PATH system variable?](http://www.java.com/en/download/help/path.xml)).

  To ensure you installed a Java Development Kit environment, type `javac -version` and press **Enter**.

  If you installed a JDK, the javac version is displayed:

  ```shell
  javac 11.0.8
  ```

  If you installed a Java Runtime Environment instead of a Java Development Kit, it will fail to find javac and to display the javac version. In this case, install a Java Development Kit (see below).

{{! /multiexcerpt}}

## Installing Java Development Kit {{> anchor 'java-install'}}

{{! multiexcerpt name='java-install'}}

Java packages and instructions for installation are available from the Azul website:

- [Download](https://www.azul.com/downloads/zulu-community/?architecture=x86-64-bit&package=jdk)
- [Instructions](https://docs.azul.com/zulu/zuludocs/ZuluUserGuide/Title.htm)

As for any software, we very strongly recommend upgrading to the latest bugfix version of the JDK for any given major version

{{! /multiexcerpt}}

## Installing Nuxeo Platform

Download the ZIP archive from the [Nuxeo distribution download site](https://connect.nuxeo.com/nuxeo/site/connect/distributions) and unzip it using your favorite tool.

## OS Specificities

### Linux

#### Installation Path

The usual directory into which install the server is `/opt`.

#### Prevent Swapping

Like any Java application you should prevent the JVM Heap from being swapped to disk, which will crush server performance. You have two options here:

- Disable the swap with `sudo swapoff -a` you'll need to edit your `/etc/fstab` to disable swap permanently. Note that before doing this you need to make sure that you have enough memory for all the processes that run on the server (Nuxeo JVM, converters, other custom process and the OS).
- Limit the swapiness of the OS using `sysctl` to set `vm.swappiness=1`.

#### Temporary Folder

While setting `nuxeo.tmp.dir` property in nuxeo.conf, we recommend not to use the system temporary folder `/tmp` because this one can be cleaned up by the operating system. This is the case on Red Hat Enterprise Linux in particular, where `systemd-tmpfiles` service is deleting old files from `/tmp`.

### Windows

#### Unzip the ZIP Distribution

Do not use the Windows built-in ZIP functionality (aka "zipfldr.dll" or "Compressed Folders Module"), it reports incorrect uncompressed size.
Recommended: [7-Zip](http://www.7-zip.org/).

#### Installation Path

On Windows in general, and especially on Windows 7 or later versions, it is highly recommended to install your Nuxeo application at the root of a disk (`C:\Nuxeo` for instance),&nbsp;because of rights issues, limitations on paths length, 32/64 bits conflicts,...


* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Server Start and Stop]({{page version='' space='nxdoc' page='server-start-and-stop'}})
- [Setup Best Practices]({{page version='' space='nxdoc' page='setup-best-practices'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
