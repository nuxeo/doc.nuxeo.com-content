---
title: Configuration Management
review:
    comment: ''
    date: ''
    status: ok
labels:
    - marketplace-package
    - proxies
    - content-review-6-0
toc: true
confluence:
    ajs-parent-page-id: '8683961'
    ajs-parent-page-title: Templates reference
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Configuration+Management
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Configuration+Management'
    page_id: '10387567'
    shortlink: b4Ce
    shortlink_source: 'https://doc.nuxeo.com/x/b4Ce'
    source_link: /display/Studio/Configuration+Management
history:
    - 
        author: Manon Lumeau
        date: '2016-04-27 15:44'
        message: 'ix Studio menu label  '
        version: '9'
    - 
        author: Solen Guitter
        date: '2015-11-30 10:06'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
        version: '8'
    - 
        author: Solen Guitter
        date: '2015-09-07 09:27'
        message: Add TOC
        version: '7'
    - 
        author: Florent Guillaume
        date: '2012-04-16 01:34'
        message: ''
        version: '6'
    - 
        author: Florent Guillaume
        date: '2012-04-16 01:34'
        message: ''
        version: '5'
    - 
        author: Florent Guillaume
        date: '2012-04-16 01:33'
        message: typos
        version: '4'
    - 
        author: Frédéric Vadon
        date: '2012-04-13 15:21'
        message: ''
        version: '3'
    - 
        author: Frédéric Vadon
        date: '2012-04-13 15:12'
        message: ''
        version: '2'
    - 
        author: Frédéric Vadon
        date: '2012-04-13 15:09'
        message: ''
        version: '1'

---
This documentation describes how Nuxeo can be used to set up a Configuration Management System.

Configuration management process creates challenges an application like Nuxeo can help to handle.&nbsp;As stated by the CMMI approach, "The purpose of Configuration Management (CM) is to establish and maintain the integrity of work products using configuration identification, configuration control, configuration status accounting, and configuration audits."

The Studio application template called&nbsp;Configuration_management_nux focuses on configuration identification and control trough specific document types.&nbsp;Although this first template is not a complete configuration management application, it shows how Nuxeo can be used to handle concepts like Configuration, Configuration items, and Baselines from creation, manipulation, to audit and verification.

The best way to follow this documentation is to import the application template in your Studio project, find here the documentation on how to&nbsp;[use application templates]({{page space='Studio' page='Use Application+Templates'}})&nbsp;in a Studio project.

Being already familiar to Studio main aspects is recommended to understand this documentation, if not the case, you can start by our [how to get started guide]({{page space='nxdoc' page='getting-started-with-nuxeo-studio'}}).

A resource section at the end links all the resources used in this documentation.

## Configuration management

A documentation tree supposed to be managed by the application is called a Configuration. Every file and folder created in it will be under configuration management control.&nbsp;

For that, they have specific metadata inherited from the schema "configuration_management". For example, every file is linked to its parent configuration and has a unique reference given on creation. If a document is copied into another configuration, the parent configuration is updated, but the reference stays the same. It enables to watch a file throughout its configurations and evolutions (a specific tab is added on the type File to display every location and configuration of the file copies).

All references and links between a configuration item and its parent configuration are managed through Automation Chains launched by Event Handlers.&nbsp;

{{#> callout type='tip' }}

This template has been created to be used with usual doc types like File, in that purpose, the default document type has been&nbsp;overridden. The challenge is that the plugin should stay transparent if you work with a File that is not under configuration management control, the&nbsp;consequent&nbsp;condition is that Automation Chains launched by Event Handler must be able to differentiate the files that are under CM control&nbsp; and the file that are not. The solution was to use the operation Execution Flow > Run Document Chain with a condition in the parameter.

For example &nbsp;"CM-OnConfDocumentCreation" is launched at every file and folder creation and tests that the parent is under configuration control before launching the actual automation chain, the syntax for conditional operation is:
@{Document.parent["managed_in_configuration"]=='true'?'CM-OnConfDocumentCreationIfConfParent':'CM-Void'}

{{/callout}}

The versioning system of Nuxeo is used to manage and know which files are validated or working versions. By choice, every minor version is know as a reviewing and working version whereas major version are used only for validated version of the document. Please note that no specific validation process such as a RACI has been configured for this first version.

So working under configuration management with Nuxeo consists as creating a Configuration (one per project or product typically). Then creates the project tree and the project files. These files can be new files or can be copied (forked) from other projects. The File minor and major versions are used to know which are validated or not, and the Configuration tab on Files gives a look to all major version and copies of this file throughout the system.

## Baseline

One very important aspect of configuration management is being able to know in which state was the documentation set at key moments of the project, for example at client releases. These snapshots of the configuration state are called Baselines : a baseline reflects the state of the configuration at a specific moment, it's a view of latest validated versions of all documents of the configuration.

To manage baselines, a doc type Baseline can be created into a Baseline_library. By default, a Baseline is in pending state as the baseline can be prepared and then generated only when needed. A user action is provided on the Baseline Folder Toolbar to actually baseline the configuration.&nbsp;

It launches the baselineConfiguration automation chain which role is to set to the baseline to generated state and actually generate the baseline using a specific automation operation.

The specific operation is called "Baseline Configuration" and has been implemented with Nuxeo IDE (please see the resources for the source code of the operation).&nbsp;

The operation calls a recursive method that will copy the configuration tree into the baseline and will also create a virtual copy of the latest validated version of the document.

This virtual copy is called a proxy in Nuxeo and it's a read only copy the latest major version of the document. (A proxy is very much like a symbolic link on a Unix-like OS: a proxy points to a document and will look like a document from the user point of view) .&nbsp;Proxies are used to be able to see the same document from several places without to duplicate any data which exactly what is need when generating a baseline. We do not want to duplicate the document, just create a link towards it.

{{#> callout type='tip' }}

more info on proxies here:&nbsp;[Repository Concepts]({{page space='nxdoc' page='repository-concepts'}})

{{/callout}}

In the end, when a baseline is generated, it shows the same tree than the parent configuration, but each folder only contain proxies of latest validated version of the Files.

## Generate Baseline Automation Operation.

If you take a look at the baseline operation source code, you will see that it gets the configuration parent folder, the baseline parent folder and call a recursive method (baselineFolder) with those 2 folders as parameters. &nbsp;BaselineFolder gets the children of the configuration node :

*   if they are folderish it copies them into the baseline node and recall itself on each new child node,
*   if the node is not folderish, it looks for the latest major version and create a proxy of the document into the baseline node.

## Resources

The configuration management template consists in a studio project plus a specific automation operation.&nbsp;

They need to be both deployed on a server to work. To only deploy and test, you can use the Nuxeo Package that regroups everything in one package. If you prefer to see exactly what is included in the package and maybe customize it, you can import the Studio Application Template and get the operation source code on GitHub.&nbsp;

*   Configuration management Nuxeo Package:&nbsp;
    [Configuration Management Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/configuration-management-nux-0.1.0)

*   Studio Configuration Management Application Template:
    Can be found in **Studio** > **Customization**&nbsp;> **External Templates**

*   Nuxeo Specific Baseline Configuration Operation Sources:
    [https://github.com/fvadon/nuxeo-configuration-management-poc](https://github.com/fvadon/nuxeo-configuration-management-poc)

*   Nuxeo documentation on proxies:&nbsp;
    [Repository Concepts]({{page space='nxdoc' page='repository-concepts'}})

*   Configuration Management on Wikipedia:&nbsp;
    [http://en.wikipedia.org/wiki/Configuration_management](http://en.wikipedia.org/wiki/Configuration_management)

*   CMMI for development:
    [http://www.sei.cmu.edu/library/abstracts/reports/10tr033.cfm](http://www.sei.cmu.edu/library/abstracts/reports/10tr033.cfm)