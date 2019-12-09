---
title: Delivering a Customization Package through the Nuxeo Marketplace
review:
  comment: ''
  date: ''
  status: ok
labels:
  - marketplace
toc: true
confluence:
  ajs-parent-page-id: '4687019'
  ajs-parent-page-title: Nuxeo Marketplace
  ajs-space-key: Studio
  ajs-space-name: Nuxeo Online Services
  canonical: Delivering+a+Customization+Package+through+the+Nuxeo+Marketplace
  canonical_source: >-
    https://doc.nuxeo.com/display/Studio/Delivering+a+Customization+Package+through+the+Nuxeo+Marketplace
  page_id: '18450856'
  shortlink: qIkZAQ
  shortlink_source: 'https://doc.nuxeo.com/x/qIkZAQ'
  source_link: >-
    /display/Studio/Delivering+a+Customization+Package+through+the+Nuxeo+Marketplace
history:
  - author: Solen Guitter
    date: '2016-09-01 15:28'
    message: ''
    version: '16'
  - author: Julien Carsique
    date: '2016-02-08 15:11'
    message: ''
    version: '15'
  - author: Solen Guitter
    date: '2015-11-30 10:03'
    message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
    version: '14'
  - author: Julien Carsique
    date: '2015-11-19 14:00'
    message: ''
    version: '13'
  - author: Julien Carsique
    date: '2015-10-21 09:29'
    message: MP version policy
    version: '12'
  - author: Julien Carsique
    date: '2015-09-08 13:42'
    message: Versioning Policy
    version: '11'
  - author: Solen Guitter
    date: '2015-09-07 08:58'
    message: Fix TOC
    version: '10'
  - author: Solen Guitter
    date: '2014-07-16 17:40'
    message: ''
    version: '9'
  - author: Julien Carsique
    date: '2014-02-27 13:21'
    message: ''
    version: '8'
  - author: Solen Guitter
    date: '2014-02-27 10:19'
    message: Added links and fixed typos
    version: '7'
  - author: Alain Escaffre
    date: '2014-02-26 17:56'
    message: ''
    version: '6'
  - author: Julien Carsique
    date: '2014-02-26 17:51'
    message: ''
    version: '5'
  - author: Alain Escaffre
    date: '2014-02-26 11:23'
    message: ''
    version: '4'
  - author: Solen Guitter
    date: '2014-02-25 17:42'
    message: ''
    version: '3'
  - author: Solen Guitter
    date: '2014-02-25 17:35'
    message: ''
    version: '2'
  - author: Solen Guitter
    date: '2014-02-25 17:06'
    message: ''
    version: '1'
---

The Nuxeo Marketplace is the channel provided by Nuxeo to distribute addons and patches to the Nuxeo Platform. [nuxeoctl]({{page space='nxdoc' page='nuxeoctl-and-control-panel-usage'}}) provides an integrated way to browse this catalog of add-ons and install them.

This catalog of packages is public, although some addons require a valid Nuxeo Online Services account to be able to install them.

The Nuxeo Marketplace also provides a private channel to distribute packages to a specific audience. Nuxeo Online Services users can provide their own users with the same safe, integrated method of browsing and installing private packages.

## Example Use Cases

The purpose of the private channel is to enable Nuxeo Platform users who do some customization on the Platform to easily distribute their customization. Here are some examples of how this private channel can be helpful.

For example, if you configure your Nuxeo instance with Nuxeo Studio as well as Nuxeo CLI for additional Java customization, you can create your Nuxeo Package and allow other people (e.g. a sysadmin) to install the whole project using a single package, instead of installing them separately. Once the private package is uploaded on Nuxeo Marketplace, the Application Definition screen in your Nuxeo Studio project lets you bundle them easily.

Another example is if you create your own application on top of the Nuxeo Platform and distribute it to your own clients (who may add Studio configurations themselves), you can use this private channel to provide hot fixes of your base application.

## Who Can Use the Private Marketplace Channel

The Nuxeo Marketplace private channel is available to any Nuxeo Online Services user. Nuxeo Online Services trial users can also use it.

## Requirements

The Marketplace private channel can be used to provide any type of customization: simple XML configuration, Java code, configuration templates, libraries, etc. The only requirement is that the customization must be provided [as a Nuxeo Package]({{page space='nxdoc' page='creating-nuxeo-packages'}}).

## Uploading a Nuxeo Package

### Using the Marketplace Interface

**To provide customers with a private package:**

1.  After logging in, navigate to [Nuxeo Marketplace upload page](https://connect.nuxeo.com/nuxeo/site/marketplace/upload) page or click on the button **Add your Nuxeo Package to the Marketplace**, located at the bottom of the screen.
2.  Fill in the form "Upload a Marketplace package" (see below for details).
3.  Click on the **Submit** button.
    The package is uploaded. It can be [installed using nuxeoctl]({{page page='installing-a-new-package-on-your-instance' space='nxdoc'}})

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1">

Package ZIP file

</td><td colspan="1">

Select your Nuxeo package. Expected format is ZIP.

See the documentation for [Creating Nuxeo Packages]({{page space='nxdoc' page='creating-nuxeo-packages'}}#create-an-empty-nuxeo-package) and [the Nuxeo Package code samples](https://github.com/nuxeo/nuxeo-marketplace-sample/).

</td></tr><tr><td colspan="1">

Owner organization

</td><td colspan="1">

Select the Nuxeo Online Services client who will have complete control over the package, including write and delete access. In most cases, the owner is your company. But typically, system integrators can act in the name of several clients.

</td></tr><tr><td colspan="1">

Share with

</td><td colspan="1">

Select the organizations for which the package should be available for use, having read-only access. Sharing the package with an organization will make it available for use in all of its projects, on top of the owner's organization. Leave the field blank if you wish to keep the package only available to the owner organization.

</td></tr></tbody></table></div>

{{! multiexcerpt name='finding-org-id'}}
{{#> callout type='tip' heading='Finding an Organization ID'}}
When accessing a Studio project, the organization id is displayed in bold in the header bar, before the project id.
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Delivering a Customization Package through the Nuxeo Marketplace/organization-id
    name: organization-id.png
    studio_modeler#screenshot#up_to_date
--}}
![organization-id](nx_asset://9ff76771-7882-4a64-8925-bc199924fa4f ?border=true)
{{/callout}}
{{! /multiexcerpt}}

### Using the REST API

A REST API is available for automation (such as integrating the upload of the Nuxeo Package from a release script or from the Continuous Integration).

{{#> panel type='code' heading='Sample calls from command-line with curl'}}

```bash
# Upload a package: orgId parameter is required, restrictedToOrgs is optional
curl -i -u login:token -F package=@/path/to/MP.zip "https://connect.nuxeo.com/nuxeo/site/marketplace/upload?batch=true&orgId=[ownerOrgId]&restrictedToOrgs=[restrictedToOrgIds]"

# Delete a package
curl -i -u login:token -X DELETE "https://connect.nuxeo.com/nuxeo/site/marketplace/delete/PACKAGE_ID"
```

{{/panel}}

where:

- the `orgId` parameter is the organization id that should own the package.
- the `restrictedToOrgs` parameter takes a comma separated list of organization ids that should be able to use the package.
- the `PACKAGE_ID` is the name property written in the package's [package.xml file]({{page version='' space='nxdoc' page='creating-nuxeo-packages'}}#package-format), along with its version, e.g. `my-package-1.0.0-SNAPSHOT`.

{{{multiexcerpt name='finding-org-id' page='delivering-a-customization-package-through-the-nuxeo-marketplace'}}}

{{{multiexcerpt 'token-management' page='how-to-tag-or-release-your-nuxeo-studio-project'}}}

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='More documentation about the Marketplace'}}

- [Creating Nuxeo Packages]({{page space='nxdoc' page='creating-nuxeo-packages'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
