---
title: Installing the Nuxeo Platform as a Windows Service
review:
    comment: ''
    date: ''
    status: ok
labels:
    - windows-service
    - install-windows
    - install-service
toc: true
confluence:
    ajs-parent-page-id: '21921876'
    ajs-parent-page-title: Installing the Nuxeo Platform on Windows
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Installing+the+Nuxeo+Platform+as+a+Windows+Service
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC60/Installing+the+Nuxeo+Platform+as+a+Windows+Service
    page_id: '21921856'
    shortlink: QIBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/QIBOAQ'
    source_link: /display/ADMINDOC60/Installing+the+Nuxeo+Platform+as+a+Windows+Service
history:
    - 
        author: Solen Guitter
        date: '2014-11-26 11:07'
        message: uxeo DM -> Nuxeo Platfor
        version: '33'
    - 
        author: Solen Guitter
        date: '2014-11-26 11:05'
        message: ''
        version: '32'
    - 
        author: Solen Guitter
        date: '2014-11-26 11:03'
        message: format
        version: '31'
    - 
        author: Solen Guitter
        date: '2013-09-11 17:37'
        message: Added note about wrapper static configuration vs nuxeo.conf
        version: '30'
    - 
        author: Solen Guitter
        date: '2013-08-27 10:32'
        message: ''
        version: '29'
    - 
        author: Solen Guitter
        date: '2013-08-27 10:32'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2013-08-26 18:44'
        message: Fixed step order
        version: '27'
    - 
        author: Thibaud Arguillere
        date: '2013-08-20 17:47'
        message: ''
        version: '26'
    - 
        author: Julien Carsique
        date: '2013-02-15 11:54'
        message: ''
        version: '25'
    - 
        author: Frédéric Vadon
        date: '2013-02-15 11:33'
        message: No space in installation path for YAJSW
        version: '24'
    - 
        author: Frédéric Vadon
        date: '2013-02-13 17:48'
        message: nogui > --gui=false
        version: '23'
    - 
        author: Solen Guitter
        date: '2012-03-28 17:27'
        message: Migrated to Confluence 4.0
        version: '22'
    - 
        author: Solen Guitter
        date: '2012-03-28 17:26'
        message: Added related pages
        version: '21'
    - 
        author: Mathieu Guillaume
        date: '2012-02-09 13:54'
        message: svn -> hg + updates
        version: '20'
    - 
        author: Solen Guitter
        date: '2011-12-07 14:48'
        message: format
        version: '19'
    - 
        author: Solen Guitter
        date: '2011-12-07 12:24'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2011-12-07 12:23'
        message: ''
        version: '17'
    - 
        author: Julien Carsique
        date: '2011-07-15 10:55'
        message: ''
        version: '16'
    - 
        author: Julien Carsique
        date: '2011-07-15 10:47'
        message: ''
        version: '15'
    - 
        author: Julien Carsique
        date: '2011-04-20 18:24'
        message: ''
        version: '14'
    - 
        author: Julien Carsique
        date: '2011-04-20 18:23'
        message: ''
        version: '13'
    - 
        author: Julien Carsique
        date: '2011-04-20 18:22'
        message: ''
        version: '12'
    - 
        author: Julien Carsique
        date: '2011-04-20 18:15'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2011-04-19 14:38'
        message: steps format
        version: '10'
    - 
        author: Thierry Martins
        date: '2011-04-19 12:12'
        message: ''
        version: '9'
    - 
        author: Thierry Martins
        date: '2011-04-19 12:08'
        message: ''
        version: '8'
    - 
        author: Thierry Martins
        date: '2011-04-19 12:07'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-04-19 11:34'
        message: fixed broken style
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-03-23 18:02'
        message: ''
        version: '5'
    - 
        author: Julien Carsique
        date: '2011-03-22 17:59'
        message: add YAJSW and Tomcat Service
        version: '4'
    - 
        author: Julien Carsique
        date: '2011-03-18 18:16'
        message: Install Nuxeo as a Windows service
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-03-11 10:12'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-03-11 10:12'
        message: ''
        version: '1'

---
Installing Nuxeo as a Windows service is independent of Nuxeo. So, this is no longer in our development scope since Nuxeo 5.4.

Multiple solutions are available, here are some of them, given without any warranty.

&nbsp;

{{#> callout type='tip' }}

Once a batch is installed as a service, it cannot be changed: you must first uninstall it, then edit and reinstall in order to change its content.
So, it's generally a good idea to write a batch file wrapping calls to `nuxeoctl.bat` and install that `NuxeoWrapper.bat` as a service, which will be responsible of starting Nuxeo with the wanted user and environment parameters.

{{/callout}}

## Prerequisites

In order to run as a service, you have to manage the directory rights for the super-user running the service. There are behavior changes depending on the Windows version.

Also, take care that network directories are usually not available when a service is executing. So, if you need to use some, you will have to mount them in the batch script before starting the Nuxeo Platform.

The database used by the Nuxeo Platform has to be installed as a service and started before the Nuxeo service.

## Available Solutions

### Yet Another Java Service Wrapper (Recommended)

[YAJSW](http://yajsw.sourceforge.net/) is a Java centric implementation of the [Java Service Wrapper by tanuki](http://wrapper.tanukisoftware.org/) (JSW). It aims at being mostly configuration compliant with the original. YAJSW is LGPL licensed. That solution seems to be the more flexible, robust and multi-OS compliant.

{{#> callout type='note' }}

When using this solution it is important that Nuxeo installation path contains no space (typically NOT `C:\Program Files\nuxeo`). Otherwise the service wrapper will truncate the path after the space and the service will not start. <span style="font-size: 10.0pt;line-height: 13.0pt;">It is recommended that Nuxeo is installed at the root of the volume (`C:\nuxeo\` for instance).</span>

{{/callout}}

#### Installing Nuxeo as a Windows Service Using YAJSW

1.  [Download YAJSW](http://sourceforge.net/projects/yajsw/files/) and unzip the archive.
2.  Set the system environment variable `NUXEO_CONF` to the location of your `nuxeo.conf` file, something like `%NUXEO_HOME%\bin\nuxeo.conf`.
3.  Start the Nuxeo Platform from the command line:

    ```
    nuxeoctl.bat --gui=false start
    ```

    Once the server is started, you'll get a message like below where XXXX is the process ID of the running Nuxeo application:

    ```
    Server started with process ID XXXX.
    ```

4.  Start a Command Prompt as an Administrator.
5.  Go to the `%YAJSW_HOME%\bat` folder.
6.  Execute the `genConfig`command with the process ID as parameter:

    ```
    genConfig.bat XXXX
    ```

    The configuration is written in the file `%YAJSW_HOME%\conf\wrapper.conf`.

    {{#> callout type='note' heading='Wrapper Static Configuration Vs nuxeo.conf'}}

    Once the wrapper configuration is generated, it is static. It means any further start of the Nuxeo service won't read [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}) to apply configuration changes to `*config.xml` files or to JVM options.

    If you change nuxeo.conf after having installing Nuxeo as a service, there are two possibilities:

    *   Your changes are only about the configuration of Nuxeo: you just need to start Nuxeo with its own launcher (step 3).
    *   Your changes are about JVM options (changes in `JAVA_OPTS` variable: memory, debug ...): you'll have to start Nuxeo with its launcher and generate the new wrapper configuration (step 3 to 6).

    In both cases, you don't have to unregister the service and register it again: the wrapper will use the same configuration file (wrapper.conf).

    {{/callout}}
7.  Stop the Nuxeo Platform.

    ```
    nuxeoctl.bat --gui=false stop
    ```

8.  Open the wrapper.conf file and make sure the&nbsp;`wrapper.console.title` entry does not contain a colon (":") or the runConsole.bat will fail. Just remove the colon or give another title.
9.  Execute your wrapped application as console application by calling this command and check your application is accessible:

    ```
    runConsole.bat
    ```

10.  Edit the file `%YAJSW_HOME%\conf\wrapper.conf`and set your custom values for these parameters:

    ```
    # Name of the service
    wrapper.ntservice.name=NuxeoPlatform
    # Display name of the service
    wrapper.ntservice.displayname=Nuxeo Platform
    # Description of the service
    wrapper.ntservice.description=Service to manage the Nuxeo Platform

    ```

11.  To install the application as service call, execute:

    ```
    installService.bat
    ```

    Your service is installed and you can run the Nuxeo Platform from its service ("Windows Computer Management > Services" on Windows 7).

### JBoss Native Windows (aka JBossSVC, JBossService and JavaService)

Deprecated Nuxeo scripts managing install as a Windows service were previously used. They were based on [JBoss Native Windows](http://community.jboss.org/wiki/JBossNativeWindows) which is now not recommended because of a number of defects. However, it was relatively easy to use and provides a quick solution.

As an example, here is the content of `jboss-native-2.0.4/bin/service.bat`:

{{#> panel type='code' heading='Nuxeo JBoss Service Script for Windows'}}

```
@echo off
REM JBoss, the OpenSource webOS
REM
REM Distributable under LGPL license.
REM See terms of license at gnu.org.
REM
REM -------------------------------------------------------------------------
REM JBoss Service Script for Windows
REM -------------------------------------------------------------------------

@if not "%ECHO%" == "" echo %ECHO%
@if "%OS%" == "Windows_NT" setlocal
set DIRNAME=%CD%

REM
REM VERSION, VERSION_MAJOR and VERSION_MINOR are populated
REM during the build with ant filter.
REM
set SVCNAME=NuxeoEP
set SVCDISP=NuxeoEP
set SVCDESC=Nuxeo 5.3.0-GA / JBoss Application Server 4.2.3 GA / Platform: Windows 64
set NOPAUSE=Y

REM Suppress killing service on logoff event
set JAVA_OPTS=-Xrs

REM Figure out the running mode

if /I "%1" == "install"   goto cmdInstall
if /I "%1" == "uninstall" goto cmdUninstall
if /I "%1" == "start"     goto cmdStart
if /I "%1" == "stop"      goto cmdStop
if /I "%1" == "restart"   goto cmdRestart
if /I "%1" == "signal"    goto cmdSignal
echo Usage: service install^|uninstall^|start^|stop^|restart^|signal
goto cmdEnd

REM jbosssvc retun values
REM ERR_RET_USAGE           1
REM ERR_RET_VERSION         2
REM ERR_RET_INSTALL         3
REM ERR_RET_REMOVE          4
REM ERR_RET_PARAMS          5
REM ERR_RET_MODE            6

:errExplain
if errorlevel 1 echo Invalid command line parameters
if errorlevel 2 echo Failed installing %SVCDISP%
if errorlevel 4 echo Failed removing %SVCDISP%
if errorlevel 6 echo Unknown service mode for %SVCDISP%
goto cmdEnd

:cmdInstall
jbosssvc.exe -imwdc %SVCNAME% "%DIRNAME%" "%SVCDISP%" "%SVCDESC%" service.bat
if not errorlevel 0 goto errExplain
echo Service %SVCDISP% installed
goto cmdEnd

:cmdUninstall
jbosssvc.exe -u %SVCNAME%
if not errorlevel 0 goto errExplain
echo Service %SVCDISP% removed
goto cmdEnd

:cmdStart
REM Executed on service start
del .r.lock 2>&1 | findstr /C:"being used" > nul
if not errorlevel 1 (
  echo Could not continue. Locking file already in use.
  goto cmdEnd
)
echo Y > .r.lock
jbosssvc.exe -p 1 "Starting %SVCDISP%" > run.log
call run.bat -b 0.0.0.0 < .r.lock >> run.log 2>&1
jbosssvc.exe -p 1 "Shutdown %SVCDISP% service" >> run.log
del .r.lock
goto cmdEnd

:cmdStop
REM Executed on service stop
echo Y > .s.lock
jbosssvc.exe -p 1 "Shutting down %SVCDISP%" > shutdown.log
call shutdown -S < .s.lock >> shutdown.log 2>&1
jbosssvc.exe -p 1 "Shutdown %SVCDISP% service" >> shutdown.log
del .s.lock
goto cmdEnd

:cmdRestart
REM Executed manually from command line
REM Note: We can only stop and start
echo Y > .s.lock
jbosssvc.exe -p 1 "Shutting down %SVCDISP%" >> shutdown.log
call shutdown -S < .s.lock >> shutdown.log 2>&1
del .s.lock
:waitRun
REM Delete lock file
del .r.lock > nul 2>&1
REM Wait one second if lock file exist
jbosssvc.exe -s 1
if exist ".r.lock" goto waitRun
echo Y > .r.lock
jbosssvc.exe -p 1 "Restarting %SVCDISP%" >> run.log
call run.bat < .r.lock >> run.log 2>&1
jbosssvc.exe -p 1 "Shutdown %SVCDISP% service" >> run.log
del .r.lock
goto cmdEnd

:cmdSignal
REM Send signal to the service.
REM Requires jbosssch.dll to be loaded in JVM
@if not ""%2"" == """" goto execSignal
echo Missing signal parameter.
echo Usage: service signal [0...9]
goto cmdEnd
:execSignal
jbosssvc.exe -k%2 %SVCNAME%
goto cmdEnd

:cmdEnd

```

{{/panel}}

Other implementations were available from JBoss.

{{#> callout type='note' }}

They were licensed under LGPL and so redistributable but there are not fully satisfying.

{{/callout}}

### Tomcat Service Install/Uninstall Script

Using the Tomcat distribution of Nuxeo, you will find a `service.bat` script in the `bin` directory that could be adapted to install Nuxeo as a Windows service.

### JavaServiceWrapper by Tanuki

Tanuki's library provides [multiple methods for integrating a software as a service on various OS](http://wrapper.tanukisoftware.com/doc/english/integrate.html), the easier is to use the WrapperSimpleApp helper class to launch the application: see [the example of JBoss installed as a Windows service](http://wrapper.tanukisoftware.com/doc/english/integrate-simple-win.html).
It requires to unzip the downloaded wrapper file, configure a `wrapper.conf` file pointing to `%NUXEO_HOME%\bin\nuxeoctl.bat`, then write a `wrapper.bat` file for managing test/install/uninstall:

{{#> panel type='code' heading='JavaServiceWrapper usage'}}

```
REM Test:
wrapper.exe -c %NUXEO_HOME%\wrapper\wrapper.conf

REM Install:
wrapper.exe -i %NUXEO_HOME%\wrapper\wrapper.conf

REM Uninstall:
wrapper.exe -r %NUXEO_HOME%\wrapper\wrapper.conf
```

{{/panel}}

This solution is known to work well but is sadly not redistributable for us because of its GPL/Commercial license.

### .NET InstallUtil

.NET framework provides an `InstallUtil.exe` tool for installing/uninstalling services.

{{#> panel type='code' heading='InstallUtil usage'}}

```
REM Install
InstallUtil /i %NUXEO_HOME\bin\service.bat

REM Uninstall
InstallUtil /u %NUXEO_HOME\bin\service.bat

```

{{/panel}} {{#> callout type='note' }}

There are some disadvantages such as failures in case of multiple frameworks installed and frontward/backward incompatibilities.

{{/callout}}

You may want to have a look at [http://msdn2.microsoft.com/en-US/library/system.configuration.install.managedinstallerclass.aspx](http://msdn2.microsoft.com/en-US/library/system.configuration.install.managedinstallerclass.aspx) for managing that programmatically.

&nbsp;

* * *