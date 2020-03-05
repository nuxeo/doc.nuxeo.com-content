---
title: Installation
review:
  comment: ''
  date: '2020-02-24'
  status: ok
labels:
  - lts2016-ok
  - multiexcerpt
  - multiexcerpt-include
  - lts2017-ok
  - pabgrall
toc: true
notes: Documentation page used by the Marketing team. Check with Marketing before deleting or moving.
confluence:
  ajs-parent-page-id: '31033314'
  ajs-parent-page-title: Nuxeo Server
  ajs-space-key: NXDOC
  ajs-space-name: Nuxeo Platform Developer Documentation
  canonical: Installation
  canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Installation'
  page_id: '3866685'
  shortlink: PQA7
  shortlink_source: 'https://doc.nuxeo.com/x/PQA7'
  source_link: /display/NXDOC/Installation
tree_item_index: 100
version_override:
  LTS 2015: 710/admindoc/installation
  '6.0': 60/admindoc/installation
  '5.8': 58/admindoc/installation
---

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University:</br>
[Video on the Installation Concepts](https://university.nuxeo.com/learn/public/course/view/elearning/141/nuxeo-platform-quickstart-installation-concepts)</br>
[Screenshare on the Installation Process](https://university.nuxeo.com/learn/public/course/view/elearning/139/nuxeo-platform-quickstart-installation-process).
{{/callout}}

The [Nuxeo Platform](https://www.nuxeo.com/) comes in many different packages and can be installed on many operating systems. You may have to install:

- a zip archive (works on any operating system that supports a Java Development Kit),
- a Docker image,
- a Windows installer (**.exe**),
- a virtual machine image (works on any operating system that supports running VMware or VirtualBox),
- a **.deb** package (works on Linux Debian and Ubuntu).

<div>
<table style="border-width:0px;">
<tbody style="border-width:0px;">
<tr>
<td colspan="1" style="text-align:center; font-size:200%;">

<b>
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/download-document-web-ui.png
    name: download-document-web-ui.png
    1.1.3#screenshot#up_to_date
--}}
![download-document-web-ui.png](nx_asset://55bbb17d-d2e5-40ba-a3d8-86d06be630b9)</br>
[Linux]({{page version='' space='nxdoc' page='installing-the-nuxeo-platform-on-linux'}})
</b>
</br>
</td>
<td colspan="1" style="text-align:center; font-size:200%;">

<b>
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/download-document-web-ui.png
    name: download-document-web-ui.png
    1.1.3#screenshot#up_to_date
--}}
![download-document-web-ui.png](nx_asset://55bbb17d-d2e5-40ba-a3d8-86d06be630b9)</br>
[macOS]({{page version='' space='nxdoc' page='installing-the-nuxeo-platform-on-mac-os'}})
</b>
</br>
</td>
<td colspan="1" style="text-align:center; font-size:200%;">

<b>
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/download-document-web-ui.png
    name: download-document-web-ui.png
    1.1.3#screenshot#up_to_date
--}}
![download-document-web-ui.png](nx_asset://55bbb17d-d2e5-40ba-a3d8-86d06be630b9)</br>
[Windows]({{page version='' space='nxdoc' page='installing-the-nuxeo-platform-on-windows'}})
</b>
</br>
</td>
</tr>
</tbody>
</table>
</div>

## General Installation Process

Installing the Nuxeo Platform requires a few steps:

1.  Have a look at our [Hardware and Software Requirements](#hardware-and-software-requirements) in the section below, as well as our [supported databases]({{page page='compatibility-matrix'}}#databases) and [application servers]({{page page='compatibility-matrix'}}#application-servers). You may also want to read our page regarding [required storage space]({{page page='how-to-estimate-volume-usage'}}).
2.  [Install and Set up the related software]({{page page='installing-and-setting-up-related-software'}}) (unless you deploy on Amazon, the image already includes it).
3.  Install and start the Nuxeo Platform server.
    To understand how to start a Nuxeo Platform server on different environments, you can read and follow one of our recipes:
    - [Installing the Nuxeo Platform on Linux]({{page page='installing-the-nuxeo-platform-on-linux'}})
    - [Installing the Nuxeo Platform on Windows]({{page page='installing-the-nuxeo-platform-on-windows'}})
    - [Installing the Nuxeo Platform on macOS]({{page page='installing-the-nuxeo-platform-on-mac-os'}})

## Available Installers

By default, the Nuxeo distributions are packaged as ZIP files and are multi-OS compliant.

Some Nuxeo distributions are also packaged with automated installers, in order to ease installation and follow the targeted OS standards, by respecting the usual directory organization for instance, creating desktop shortcuts and menu items, tweaking environment properties, helping installing optional third-parties...

The available installers can be:

- Multi-platform packages (ZIP, executable JAR, JNLP, ...),
- Docker,
- Windows installers (EXE, MSI),
- Linux packages (DEB, RPM, ...),
- macOS packages (DMP, APP, PKG),
- VMWare images
- VirtualBox images
- Specific installers (Homebrew, ...).

Nuxeo currently maintains a Linux Debian and a Windows installer. They are available for download [here](http://www.nuxeo.com/downloads/).

Nuxeo aims at gathering and documenting all contributed installation solutions from the user community. Any help about OS-specific cases, recommendations, contributions or feedbacks is very welcome.
To contribute, you can:

- Comment on the relevant documentation page.
- Create a pull request in the following GitHub repositories:
  - [nuxeo-packaging-windows](https://github.com/nuxeo/nuxeo-packaging-windows)
  - [nuxeo-packaging-debian](https://github.com/nuxeo/nuxeo-packaging-debian)
  - [nuxeo-packaging-rpm](https://github.com/nuxeo/nuxeo-packaging-rpm)
  - [nuxeo-packaging-vm](https://github.com/nuxeo/nuxeo-packaging-vm)
- Open an issue in our [JIRA](https://jira.nuxeo.com/browse/NXBT) issue management system.
- Post to any Nuxeo community channel.

## Hardware and Software Requirements

The following table lists the _current_ requirements for running the Nuxeo Platform.

If you have requirements and/or constraints are not reflected below, **do not hesitate to contact the Nuxeo team** to evaluate the feasibility of running Nuxeo on any other environment, be it a different JVM, Database, Application server or OS.

<div class="table-scroll">
<table class="hover">
<tbody>
<tr><th colspan="1">Hardware Requirements</th>
<td colspan="1">Minimum requirement to start a Nuxeo server:
<ul>
<li>2 CPU</li>
<li>2&nbsp;GB RAM</li>
<li>1&nbsp;GB of disk space</li>
</ul></td>
<td colspan="1">Note: a production-ready setup for the Nuxeo Platform may require several servers and different hardware sizing, depending on your SLA and planned usage. Contact Nuxeo for more information and for assistance with sizing your production architecture.</td>
</tr>

<tr><th colspan="1">OS</th>
<td colspan="1"><ul><li>Linux</li><li> macOS</li><li>Windows</li></ul></td>
<td colspan="1">Note: the only limitation on OS nature and version is the ability to install the correct version of the required JDK (see below). It means that while it is commonly reported to run on recent versions of Ubuntu, RHEL, Debian, CentOS, it can also run on any Linux distribution where it is possible to install the required JDK. You may have to adapt the provided startup shell scripts.</td>

<tr><th colspan="1">Java</th>
<td colspan="1">{{{multiexcerpt 'java_requirement' page='Compatibility Matrix'}}}</td>
<td colspan="1">See the following documentation: <ul><li>[Checking your Java Version]({{page page='installation'}}#java-check)</li> <li>[How to Install Java]({{page page='installation'}}#java-install)</li></td>
</tr>

<tr><th colspan="1">Application Server</th>
<td colspan="1">{{{multiexcerpt 'supported-app-servers-versions' page='Compatibility Matrix'}}}</td>
<td colspan="1">{{{multiexcerpt 'supported-app-servers-static-war' page='Compatibility Matrix'}}}</td>
</tr>

<tr><th colspan="1">Database</th>
<td colspan="1">{{{multiexcerpt 'all-supported-databases' page='Compatibility Matrix'}}}</td>
<td colspan="1">{{{multiexcerpt 'supported-databases-notes' page='Compatibility Matrix'}}}</td>
</tr>

<tr><th colspan="1">Authentication and User Management</th>
<td colspan="1">The Nuxeo Platform provides its own user and group directories and authentication solutions. It is also compatible with multiple cloud and enterprise solutions:
<ul>
<li>LDAP protocol (Open LDAP)</li>
<li>Active Directory</li>
<li>SAML Providers</li>
<li>OpenId</li>
<li>Kerberos</li>
<li>CAS</li>
</ul></td>
<td colspan="1">See [Authentication and User Management section]({{page page='authentication-and-user-management'}}).</td>
</tr>

<tr><th colspan="1">Optional Third-Party Software</th>
<td colspan="1">Some third party software may be required depending on the conversions capabilities you want to benefit from. The following list is not exhaustive:  <ul><li>LibreOffice</li>
<li>ImageMagick</li>
<li>FFmpeg</li>
<li>Docker</li>
<li>pdftohtml</li>
<li>Ghostscript</li>
<li>Exiftool</li>
</ul></td>
<td colspan="1">More information on [installing third-party software]({{page page='installing-and-setting-up-related-software'}}).</td>
</tr>

<tr><th colspan="1">Client-Side Requirements</th>
<td colspan="1">The Nuxeo Platform comes with several applications for business users, which have their own requirements: <ul><li>[JSF UI]({{page page='nuxeo-jsf-ui'}})</li>
<li>[Web UI]({{page page='web-ui'}})</li>
<li>[Nuxeo Drive]({{page space='client-apps' page='nuxeo-drive'}})</li>
</ul></td>
<td colspan="1"></td>
</tr>
</tbody></table></div>

## Checking Your Java Version {{> anchor 'java-check'}}

{{! multiexcerpt name='check-java-version'}}

**To check that you have the right version of Java:**

1.  Open a terminal:

    - On **Linux** or **macOS**: open a terminal.
    - On **Windows**: press the "Windows" key + r, type `cmd` (or `command`) in the Run window and press "OK" (or open the **Command Prompt** from **Start** > **Programs** > **Accessories** in Windows 7 or entering **Command Prompt** in Cortana in Windows 10)

2.  Type `java -version` and press **Enter**.
    If Java is correctly installed on your computer, the name and version of your Java virtual machine is displayed:

    ```
    openjdk version "11.0.8" 2020-07-14 LTS
    OpenJDK Runtime Environment Zulu11.41+23-CA (build 11.0.8+10-LTS)
    OpenJDK 64-Bit Server VM Zulu11.41+23-CA (build 11.0.8+10-LTS, mixed mode)
    ```

    Check in the output that the JDK version is 64 bits.

    If Java is not installed on you computer, it will fail to display the Java version. In this case, install Java (see below).

    If Java is installed but not included in the PATH, it will fail to find the Java command. In that case, you need to add `$JAVA_HOME/bin/` to your PATH (see [How do I set or change the PATH system variable?](http://www.java.com/en/download/help/path.xml)).

    To ensure you installed a Java Development Kit environment, type
    `javac -version` and press **Enter**.

    If you installed a JDK, the javac version is displayed:

    ```
    javac 11.0.8
    ```

    If you installed a Java Runtime Environment instead of a Java Development Kit, it will fail to find javac and to display the javac version. In this case, install a Java Development Kit (see below).

{{! /multiexcerpt}}

## Installing Java Development Kit {{> anchor 'java-install'}}

{{! multiexcerpt name='java-install'}}

Java packages and instructions for installation are available from the Azul website:

- [Download](https://www.azul.com/downloads/zulu-community/?architecture=x86-64-bit&package=jdk)
- [Instructions](https://docs.azul.com/zulu/zuludocs/ZuluUserGuide/Title.htm)

{{! /multiexcerpt}}

