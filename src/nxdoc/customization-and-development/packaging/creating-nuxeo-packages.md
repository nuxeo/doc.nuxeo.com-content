---
title: Creating Nuxeo Packages
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '17334304'
    ajs-parent-page-title: Packaging
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Creating+Nuxeo+Packages
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Creating+Nuxeo+Packages'
    page_id: '17334494'
    shortlink: 3oAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/3oAIAQ'
    source_link: /display/NXDOC58/Creating+Nuxeo+Packages
history:
    - 
        author: Solen Guitter
        date: '2015-11-30 09:05'
        message: ''
        version: '31'
    - 
        author: Solen Guitter
        date: '2013-09-20 15:12'
        message: Added TOC
        version: '30'
    - 
        author: Alain Escaffre
        date: '2013-09-17 00:05'
        message: ''
        version: '29'
    - 
        author: Alain Escaffre
        date: '2013-09-17 00:05'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2011-11-14 15:28'
        message: Migrated to Confluence 4.0
        version: '27'
    - 
        author: Solen Guitter
        date: '2011-11-14 15:28'
        message: replaced 5.4.3 with 5.5
        version: '26'
    - 
        author: Julien Carsique
        date: '2011-08-16 19:02'
        message: >-
            NXP-6139 - add the templates folder as an env variable to the Update
            Center installer framework
        version: '25'
    - 
        author: whajeri
        date: '2010-11-15 11:18'
        message: ''
        version: '24'
    - 
        author: whajeri
        date: '2010-11-15 11:17'
        message: ''
        version: '23'
    - 
        author: Stéfane Fermigier
        date: '2010-10-06 08:26'
        message: ''
        version: '22'
    - 
        author: Stéfane Fermigier
        date: '2010-10-06 08:24'
        message: ''
        version: '21'
    - 
        author: Eric Barroca
        date: '2010-08-16 17:20'
        message: ''
        version: '20'
    - 
        author: Jane Zupan
        date: '2010-08-12 00:42'
        message: ''
        version: '19'
    - 
        author: Alain Escaffre
        date: '2010-08-10 02:53'
        message: ''
        version: '18'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 17:18'
        message: ''
        version: '17'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 16:35'
        message: ''
        version: '16'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 16:30'
        message: ''
        version: '15'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 16:25'
        message: ''
        version: '14'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 15:45'
        message: ''
        version: '13'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 14:49'
        message: ''
        version: '12'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 12:41'
        message: ''
        version: '11'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 12:32'
        message: ''
        version: '10'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 12:19'
        message: ''
        version: '9'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 11:58'
        message: ''
        version: '8'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 11:57'
        message: ''
        version: '7'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 11:51'
        message: ''
        version: '6'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 11:38'
        message: ''
        version: '5'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 11:24'
        message: ''
        version: '4'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 11:19'
        message: ''
        version: '3'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 10:55'
        message: ''
        version: '2'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-07 10:39'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">{{! excerpt}}

This section gives instructions on how to wrap a plugin and its required dependencies into a Nuxeo Package.

{{! /excerpt}}

A package contains usually new features or patches along with installation instructions. Packages can be downloaded from a remote repository and then installed on a running Nuxeo and possibly uninstalled later. A Nuxeo package is the easiest way to distribute a plugin, as it contains in one single zip file all the bundles, libraries and runtime properties that would be required to make your new plugin work. Nuxeo uses the Nuxeo Package format for distributing all its plugins on Nuxeo Marketplace. We also encourage you to use it for delivering your customization. A Nuxeo Package can be set up either in the admin center on the Nuxeo instance, or using nuxeoctl instructions.

Some packages require the server to be restarted after the install (or uninstall). Each package provides a description of the modifications that should be done on the running platform in order to install a package. We will call "**command**"&nbsp;each atomic instruction of an install or uninstall process. When Commands are revertible - so that for any command execution there must be an inverse command that can be executed to rollback the modification made by the first command. When designing update packages you must ensure the installation is revertible if needed.

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

The rollback of an installation is done either when the installation fails (in the middle of the install process), either if the user wants to uninstall the package.

In this chapter we will discuss about the package format, package execution and rollback.&nbsp;

## Package Format

A package is assembled as a ZIP file that contains the bundles, configuration files or libraries you want to install, along with some special files that describe the install process.

Here is a list of the special files (you should avoid to use these file names for installable resources)

*   **package.xml** - The package descriptor describing package metadata, dependencies and custom handlers to be used when installing.
    See [Package Manifest]({{page page='package-manifest'}}) for more details on the file format.
*   **install.xml** - A file containing the install instructions. There are two possible formats for this file: either an XML package command file, or an ant script to be used to install the package. Using ant is discouraged, you should envisage to use the package command to describe an installation rather than ant since rollback is ensured to be safe.&nbsp;
    See [Scripting Commands]({{page page='scripting-commands'}})&nbsp;for more details on the commands file format.
*   **uninstall.xml** - A file containing the uninstall instructions. When using **commands** to describe the install process this file will be automatically generated (so you don't need to write it). When using ant for the install you must write the uninstall ant file too.&nbsp;
*   **install.properties** - A Java property file containing user preferences (if any was specified during the install wizard). This file is&nbsp;automatically generated by the installer.
*   **backup** - A directory created by the install process (when using **commands** to describe the install) to backup the existing files that were modified. The content of this directory will be used by the rollback process to revert changes.
    See [Scripting Commands]({{page page='scripting-commands'}}) for more details on rollback.
*   **license.txt** - A text file containing the license of the software you want to install. This file is optional.
*   **content.html** - A file containing an HTML description of you package. This file can use references to resources (such as images) located in the package zip - for example you may want to display a set of screenshots for the new feature installed by the package. This file is optional.
    See [Package Web Page]({{page page='package-web-page'}}) &nbsp;for more details on how to write your package web page.
*   **forms** - A directory containing custom wizard form definitions. This directory and all the files inside are optional.
    See&nbsp;[Wizard Forms]({{page page='wizard-forms'}})&nbsp;for more details on how to contribute wizard forms.
    There are three type of wizard forms you can contribute:
    *   **install.xml**&nbsp;- Describe install forms (i.e. forms added to the install wizard for packages that needs user parametrization)
    *   **uninstall.xml** - Uninstall forms (i.e. forms &nbsp;added to the uninstall wizard for packages that needs user parametrization)
    *   **validation.xml** - Validation forms (i.e. forms used by the install validator if any is needed)

Apart these special files you can put anything inside a package (web resources, jars, Java or Groovy classes etc.). It is recommended to group your additional resources in sub directories to keep a clean structure for your package.

You can see that most of the files listed above are optional or generated. So for a minimal package you will only need 2 files: the **package.xml** and the **install.xml** file.

## The Package Metadata

The package metadata is stored in **package.xml** file. Here is the list of properties defining a package:

*   **name:** The package name. The allowed characters are the ones allowed for Java identifiers plus the dash - character.
    Example: nuxeo-automation-core
*   **version:** The package version. Apart the tree digit fields separated by dots versions may contain a trailing classifier separated by a dash.&nbsp;Examples: 1.2.3-SNAPSHOT, 1.2, 3, 0.1.0.
*   **id:** The package unique identifier. This is automatically generated from the **name** and the **version** as follows: name-version.
    Example: nuxeo-automation-core-5.3.2
*   **type:** The package type. One of:&nbsp;_studio_, _hotfix_, or _addon_.
*   **dependencies:** A list of other packages that are required by this package. The dependencies are expressed as _packageId:version_range_&nbsp;where version_range is a string of one or two versions separated by a colon : character.&nbsp;
    Example: nuxeo-core:5.3.0 - this means any version of nuxeo-core greater or equals to 5.3.0\. Or: nuxeo-core:5.3.0:5.3.2 - any version of nuxeo-core greater or equals than 5.3.0 and less or equal than 5.3.2.&nbsp;
*   **platforms:** A list of supported platform identifiers. Examples: dm-5.3.2, dam-5.3.2.&nbsp;
*   **title:** The package title to be displayed to the user.
*   **description:** A short description of the package
*   **classifier:** The package classifier if any. (You can use it to put tags on the package)
*   **vendor:** The identifier of the package vendor.
*   **home-page:** An URL to the home page of the package (or documentation) if any.&nbsp;
*   **installer:** A custom Install Task class that will handle the install process. If not specified the default implementation (which is using commands) will be used.
*   **uninstaller:** A custom Uninstall Task that will handle the uninstall process. If not specified the default implementation (which is using commands) will be used.
*   **validator:** A custom validator class. By default no validator exists. You can implement a validator to be able to test your installation form the Web Interface.
*   **NuxeoValidationState:** The state of Nuxeo's validation process. One of:&nbsp;_none_, _inprocess_, _primary_validation_,_nuxeo_certified_.
*   **ProductionState:**&nbsp;One of:&nbsp;_proto_,_testing_, _production_ready_.

For more information on the package properties and the XML format see&nbsp;[Package Manifest]({{page page='package-manifest'}}).

## The Install Process

Packages are fetched from a remote repository and cached locally. Once they are cached they can be installed. Fetching a package and putting it into the local cache is transparent to the user - this is done automatically when a user enters a package to see the details about the package.

When saved to the local file system the packages are unzipped - so they will be cached locally as directories. Once a package is cached locally it can be installed by the user. When installing a package the package will be first validated - to check if it can be safely installed on the user platform. If this check fails the installation is aborted. If there are warnings - the user should choose if wants to continue or not.

After validating the package an install wizard will be displayed to the user. The wizard will usually show the following pages:

1.  Package license, if any is specified.
2.  Custom install forms, if contributed by the package.
3.  Summary of things that will be installed - this is the last step the user can abort the installation. When clicking install the install process will start.
4.  An install result page. This is either a page of failure either a page of success. In case of success, if the package requires restarting the server then the user is asked whether to restart now or later the server.

Here is a pseudo-code describing how installation is drived by the wizard:

```
LocalPackage pkg = service.getPackage("package_to_install");

Task task = pkg.getInstallTask();

ValidationStatus status = task.validate();
if (status.hasErrors()) {
  // install task cannot be run. show errors to the user
} else if(status.hasWarnings()) {
  // task can be run but there are warnings. show warnings to the user and let it decide whether or not to run the install task
} else {
  try {
    task.run(userPrefs);
  } catch (Throwabe t) {
    // if an error occurred do the rollback.
    task.rollback();
  }
}
// show install result to the user.
if (task.isRestartRequired()) {
 // ask user to restart
}

```

## <span style="color: rgb(0,0,0);">**Using Ant to Install**</span>

When using ant you must define two ant scripts: the **install.xml** and **uninstall.xml** files.

Each of these scripts must have at least 2 ant targets. The **default** target of the install.xml script will be used to execute the installation. The target name is not important - it may have any name but should be the default target. The other required target of the script is a target named **rollback**&nbsp;which will be called to do the rollback if anything went wrong during the installation (i.e. during the execution of the default target).

The same rule applies for the uninstall.xml script. This ant script must have at least 2 targets: a default one which will be called to do the uninstall and another one named **rollback**&nbsp;which will be used to perform the rollback if anything went wrong during the uninstall execution.

There is a set of useful properties that will be injected in the ant context and thus are available in ant scripts. See below the list of these properties.

{{#> callout type='note' }}

Using ant is not recommended since a safe rollback is difficult to handle.

{{/callout}}

## Using Commands to Install

XML Commands are the default way to describe the installation instructions. The advantage of using commands is that the rollback and uninstall script will be automatically generated - you don't need to code it yourself. Also, you can control commands enabling or validation using EL expressions depending on the state of the target platform were the install is executed.

See [Scripting Commands]({{page page='scripting-commands'}}) for more details on using commands .

As in ant scripts there is a set of properties you can use in command files to parametrize your commands. Below is the list of available properties.

## Context Properties Available in Install Scripts

Here is the list of properties available to install scripts:

*   all the system properties in the running JVM.
*   **package.id:** The Package identifier.
*   **package.name:** The Package name.
*   **package.version:** The Package version.
*   **package.root:** The root folder of the package (the folder containing the exploded zip).
*   **env.server.home:** Since 5.5\. The Nuxeo server home. ($NUXEO_HOME).
*   **env.home:** The Nuxeo Runtime Environment home. ($NUXEO_HOME/server/default/data/NXRuntime on JBoss, $NUXEO_HOME/nxserver on Tomcat).
*   **env.ear:** JBoss only. The nuxeo.ear directory ($NUXEO_HOME/server/default/deploy/nuxeo.ear).
*   **env.lib:** The Nuxeo lib directory (nuxeo.ear/lib on JBoss, $NUXEO_HOME/nxserver/lib on Tomcat).
*   **env.syslib:** The host application lib directory ($NUXEO_HOME/lib).
*   **env.bundles:** The Nuxeo bundles directory (nuxeo.ear/bundles on JBoss, $NUXEO_HOME/nxserver/bundles on Tomcat).
*   **env.config:** The Nuxeo _config_ directory (nuxeo.ear/config on JBoss, $NUXEO_HOME/nxserver/config on Tomcat).
*   **env.templates:** Since 5.5\. The configuration templates directory. ($NUXEO_HOME/templates).
*   **env.hostapp.name:** The host application name (Tomcat or JBoss)
*   **env.hostapp.version:** The host application version (e.g. Tomcat or JBoss version)
*   **sys.timestamp:** The timestamp when the install task was created - a string in the format "yyMMddHHmmss".