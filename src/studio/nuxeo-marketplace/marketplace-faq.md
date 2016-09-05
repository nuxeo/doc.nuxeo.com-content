---
title: Marketplace FAQ
toc: true
confluence:
    ajs-parent-page-id: '4687019'
    ajs-parent-page-title: Nuxeo Marketplace
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Marketplace+FAQ
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Marketplace+FAQ'
    page_id: '16091889'
    shortlink: 8Yr1
    shortlink_source: 'https://doc.nuxeo.com/x/8Yr1'
    source_link: /display/Studio/Marketplace+FAQ
history:
    - 
        author: Solen Guitter
        date: '2015-09-07 09:12'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-10-28 09:57'
        message: Fixed typos and terminology
        version: '3'
    - 
        author: Alain Escaffre
        date: '2013-10-28 00:11'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2013-10-27 23:58'
        message: ''
        version: '1'

---
Frequently asked questions about the Nuxeo Marketplace.

## What Are the Benefits of Using a Nuxeo Marketplace Package Compared to a Bare Plug-In?

Packages are sets of plug-ins for Nuxeo software, with additional resources such as install/upgrade/uninstall scripts, descriptions, license, graphics, etc.

Packages are not replacements for plugins, but instead a container for plug-ins to ease their installation and update. We encourage all plug-in creators to package them: it simplifies the provisioning / installation / upgrade significantly.

Also, Marketplace packages can be published on the Nuxeo Marketplace, thus giving them a great visibility.

## Are Marketplace Packages Supported?

Packages can have several support levels, and the support is indicated on package metadata.

Categories available are:

*   **Supported by Nuxeo**: The package is supported by Nuxeo's support team and is included in the Nuxeo Connect subscription.

*   **Supported by third-party**: The package is supported by an SI or other software provider and may be subject to different SLA and pricing. Support is not delivered through Nuxeo Connect Support.

*   **Not supported**: The package is offered "as-is" and is not supported by Nuxeo or any affiliated partner.

## How Can I Create a New Package for the Nuxeo Marketplace?

It's very easy. Follow the&nbsp;[documentation for package creation]({{page space='nxdoc' page='creating-nuxeo-packages'}})&nbsp;and submit it to the Nuxeo Marketplace. When the packages are approved,&nbsp;they will be available for installation in a Nuxeo product, through the Update Center of the Admin Center.

## What Is the Typical Work Load to Create Packages?

A plug-in already created for the Nuxeo Platform (or related products), typically will take 0.5 - 1 day of integration-type work to package them for Nuxeo Marketplace.

## How Are Packages Approved?

The Nuxeo Connect team performs a quality review of the package: Provided documentation, set up process, checking the first steps works ok. Nuxeo is not responsible for any troubles caused by third party vendor plugin on your data and from a general perspective, you should pay attention to the following note.

{{#> callout type='note' }}

Customers must validate packages on their own system and assess they are not causing damage on their installed system before going to production and putting any data at risk.

{{/callout}}

## As a System Integrator, Can I Use the Private Packages Feature of the Admin Center to Deliver Updates (of Specific Code) to My Customers?

Yes. We have designed Private Packages to support this use case. We call this the "private marketplace channel". Contact us if you are interested in such a feature.