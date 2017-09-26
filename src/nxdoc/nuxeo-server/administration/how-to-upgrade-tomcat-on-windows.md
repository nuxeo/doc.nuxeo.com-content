---
title: How to upgrade Tomcat in Nuxeo 8.10 on Windows ?
---

As a prerequisite, the machine on which you will upgrade Tomcat using this procedure must have an internet access.

The steps to upgrade Tomcat 7.0.69 delivered with Nuxeo 8.10 installers to a later revision are the following:
1. `Install Cygwin` minimal setup including bash, cp, mv, mktemp, sed, grep, cut, rm , mkdir, curl, wget, perl… 
2. You must have a recent `JDK 8` for Windows 64 bits already installed.
3. Finally, `upgrade Tomcat`

## How to install the required Cygwin minimal setup on Windows ?
Cygwin bash is the preferred bash environment in which to run bash script for Nuxeo.

Download Cygwin setup program from Cygwin official site: https://www.cygwin.com/ , e.g. using the Cygwin setupx86_64.exe installer.

Launch the setup script, choose a way to install (from internet or another way if you need so), choose the local directory in which you will install Cygwin, choose a mirror site near your location, then choose to install at a minimum:
* The `Base` bundle
* The `Perl` bundle
* The `wget`utility from the `Web` bundle
* The `curl` utility from the `Net` bundle

then accept the software dependencies and install the Cygwin tools and utilities.


## How to upgrade Tomcat ?

Download the script directly from [this link](upgrade_tomcat7.sh)
and save it as `c:\temp\upgrade_tomcat7.sh`

Assuming you have:
* the upgrade bash script upgrade_tomcat7.sh on your Windows machine as `c:\temp\upgrade_tomcat7.sh`
* Cygwin installed under `c:\cygwin64`
* JDK installed as `c:\jdk1.8.0_144`
* Nuxeo 8.10 version installed as `c:\nuxeo-server-8.10-tomcat`

Launch Cygwin bash, then:
```
export PATH=/cygdrive/c/cygwin64/bin:$PATH
export PATH=/cygdrive/c/jdk1.8.0_144/bin:$PATH
cd /cygdrive/c/nuxeo-server-8.10-tomcat
cp /cygdrive/c/temp/upgrade_tomcat7.sh .
# NOTICE THAT THE FOLLOWING USES A WINDOWS-like PATH SYNTAX with / instead of \ (not a Cygwin path syntax)
./upgrade_tomcat7.sh c:/nuxeo-server-8.10-tomcat
rm ./upgrade_tomcat7.sh
```

## How to check Tomcat new revision is installed and launched ?
```
nuxeoctl console
```
and check in the console output the following message is displayed:

  *INFO  [StandardEngine] Starting Servlet Engine: Apache Tomcat/7.0.81*
