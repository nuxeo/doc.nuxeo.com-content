---
title: "HOWTO: Upgrade Tomcat in Nuxeo 8.10 on Windows?"
review:
    comment: ''
    date: '2017-10-16'
    status: ok
toc: true
labels:
    - windows
tree_item_index: 100
---

As a prerequisite, the machine on which you will upgrade Tomcat using this procedure must have an internet access.

To upgrade Tomcat 7.0.69, delivered with Nuxeo 8.10 installers, to a later revision you need to:
1. **Install Cygwin** minimal setup including bash, cp, mv, mktemp, sed, grep, cut, rm , mkdir, Curl, Wget, Perl…
2. Have a recent **JDK 8** for Windows 64 bits already installed
3. Finally, **upgrade Tomcat**

## How to Install the Required Cygwin Minimal Setup on Windows?
Cygwin bash is the preferred bash environment to run bash script for Nuxeo.

Download Cygwin setup program from Cygwin official site: https://www.cygwin.com/, e.g. using the Cygwin `setupx86_64.exe` installer.

Launch the setup script, choose a way to install it (from internet or another way if you need to), choose the local directory in which you will install Cygwin, choose a mirror site near your location and then choose to install at least the following bundles:
* `Base`
* `Perl`
* `Wget` utility from the `Web` bundle
* `Curl` utility from the `Net` bundle

You can then accept the software dependencies and install the Cygwin tools and utilities.


## How to Upgrade Tomcat?

Download the script directly from [this link]({{file space='nxdoc' page='how-to-upgrade-tomcat-on-windows' name='upgrade_tomcat7.sh'}})
and save it as `c:\temp\upgrade_tomcat7.sh`

Assuming you have:
* The upgrade bash script `upgrade_tomcat7.sh` on your Windows machine as `c:\temp\upgrade_tomcat7.sh`
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

## How to Check Tomcat New Revision Is Installed and Launched?
```
nuxeoctl console
```
and check in the console output that the following message is displayed:

```
  *INFO  [StandardEngine] Starting Servlet Engine: Apache Tomcat/7.0.81*
```
