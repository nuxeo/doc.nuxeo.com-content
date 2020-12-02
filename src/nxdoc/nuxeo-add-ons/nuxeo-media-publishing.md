---
title: Nuxeo Media Publishing
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - media-publishing-component
    - ajusto
    - excerpt
    - lts2017-ok
    - deprecated
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Media+Publishing
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Media+Publishing'
    page_id: '25691068'
    shortlink: vAOIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/vAOIAQ'
    source_link: /display/NXDOC/Nuxeo+Media+Publishing
tree_item_index: 2200
hidden: true
history:
    -
        author: Manon Lumeau
        date: '2016-08-16 10:02'
        message: ''
        version: '19'
    -
        author: Vincent Dutat
        date: '2016-02-10 18:28'
        message: ''
        version: '18'
    -
        author: Vincent Dutat
        date: '2016-02-10 18:25'
        message: ''
        version: '17'
    -
        author: Vincent Dutat
        date: '2016-02-10 18:20'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2015-10-15 12:42'
        message: ''
        version: '15'
    -
        author: Andre Justo
        date: '2015-10-13 11:51'
        message: ''
        version: '14'
    -
        author: Andre Justo
        date: '2015-10-13 10:49'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-07-06 12:27'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2015-07-06 12:23'
        message: add link
        version: '11'
    -
        author: Manon Lumeau
        date: '2015-07-01 08:53'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2015-07-01 08:53'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2015-06-30 16:51'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2015-06-30 16:48'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-06-30 16:19'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2015-06-29 16:28'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2015-06-29 16:27'
        message: ''
        version: '4'
    -
        author: Andre Justo
        date: '2015-06-24 10:19'
        message: ''
        version: '3'
    -
        author: Andre Justo
        date: '2015-06-24 10:18'
        message: ''
        version: '2'
    -
        author: Andre Justo
        date: '2015-06-24 10:16'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedAddon_10.10' page='generic-multi-excerpts'}}}

{{! excerpt}}
Nuxeo Media Publishing is an addon that enables users to publish video documents stored in the Nuxeo repository to external video hosting websites, without leaving the Nuxeo Platform UI.
{{! /excerpt}}

This addon is designed to allow many implementations. Default implemented providers are:

*   [Youtube](http://youtube.com)
*   [Wistia](http://wistia.com)

## Functional Overview

Installing this addon enriches the Publish tab of a video document with a set of external providers to where videos can be published. When publishing a video, users must select a publishing account and each provider can require additional fields to be filled (e.g tags, privacy of the video).

![]({{file name='publish_video.png'}} ?w=600,border=true)

This addon also adds a new section in the **Summary** page which lists all the providers available and the respective status of the video (either &ldquo;Published&rdquo; or &ldquo;Not published&rdquo;). Once a video is published, additional informations are displayed, such as:

*   The URL to the video in the external video host
*   An embeddable HTML snippet
*   Statistics

![]({{file name='summary_video.png'}} ?w=600,border=true)

Published videos can also be republished or unpublished from the external provider.

![]({{file name='republish_unpublish.png'}} ?w=600,h=325,border=true)

## Installation and Configuration

{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

This addon requires no specific installation steps. It can be installed like any other package [from the Marketplace or from the Admin tab]({{page page='installing-a-new-package-on-your-instance'}}). However, it requires the installation of the [Digital Asset Management (DAM) addon]({{page page='digital-asset-management-dam'}}) which provides multimedia files (picture, audio and video).

After the package is installed, two new OAuth2 service providers are added to Nuxeo (Admin > Cloud Services > Service providers). These providers must be properly configured before users can use them to publish their videos.

![]({{file name='oauth2-providers.png'}} ?w=600,border=true)

### YouTube Configuration

**Step 1: Preparing your application accounts on the Google Developers Console**

1.  Go to [https://console.developers.google.com/project](https://console.developers.google.com/project).

2.  Create a new project.

3.  Enable YouTube API: On the API Manager, click on **YouTube Data API** and then on the **Enable** button.

4.  Create a new OAuth Client ID: In **Credentials**, click on **Create Credentials**.

    a.  Choose **OAuth Client ID.**

    b. If not already done, you will need to edit your consent screen: In **Credentials**&nbsp;> **OAuth Consent Screen**, fill the product name (the name of your application). Optionally, you may fill the other fields.

    c.  Choose **Web Application.**

    d.  For **Authorized JavaScript origins** set the URL of your server. Ex [http://localhost:8080](http://localhost:8080.)

    e.  For **Authorized redirect URIs** set the following URL, adapting the hostname and port to your case: `http://NUXEO_SERVER/nuxeo/site/oauth2/YouTube/callback`.


**Step 2: Configuring the Nuxeo Platform**

1.  In the **Admin** tab, go to **Cloud Services**&nbsp;> **Service providers**.

2.  In the **OAuth2 Service providers** section, update the service whose name is &ldquo;YouTube&rdquo; by clicking on the **Modify** button.

3.  Set the Client ID and Client Secret values with the one you got on the previous step.

4.  Make sure the **Enabled** box is checked.

5.  Save.

### Wistia Configuration

{{#> callout type='info' }}
OAuth2 is not yet available for all Wistia accounts. Until it is, [contact Wistia support](http://wistia.com/support/contact) to get it enabled.
{{/callout}}

**Step 1: Preparing your Wistia OAuth application**

1.  Go to [Wistia website](http://wistia.com/)&nbsp;> **Account**&nbsp;> **Settings**&nbsp;> **OAuth applications**.

2.  Create a new application.

3.  Fill in the required fields.

    a.  For **Callback URL** set the following URL, adapting the hostname and port to your case: `http://NUXEO_SERVER/nuxeo/site/oauth2/Wistia/callback`.

    b.  Set permissions to **all:all.**

4.  Open the details of the application to get the Client ID and Client Secret values. You will need them in the next steps.

**Step 2: Configuring the Nuxeo Platform**

1.  In the **Admin** tab, go to **Cloud Services**&nbsp;> **Service providers**.

2.  In the **OAuth2 Service providers** section, update the service whose name is &ldquo;Wistia&rdquo; by clicking on the **Modify** button.

3.  Set the Client ID and Client Secret values with the one you got on the previous step.

4.  Make sure the **Enabled** box is checked.

5.  Save.

### How to Add Publishing Accounts

After setting up the OAuth service providers, users must add new accounts that are used to publish and retrieve video&rsquo;s informations from the external providers. To do so, users must go to **Home > Cloud Services** and use the available buttons to add their service accounts.

## Technical Overview

This section explains what is included in the Nuxeo Media Publishing addon.

### Schemas

Nuxeo Media Publishing defines the following schema:

*   `publishable_media`: used to store a list of providers where the video is published.

### Facets

This addon defines the `PublishableMedia` facet. This facet is added to the `Video` document type and contains the `publishable_media` schema.

### Extension Points

The `MediaPublishingService` exposes the `providers` extension point to contribute new publishing services.

```xml
<extension-point name="providers" target="org.nuxeo.ecm.media.publishing.MediaPublishingService">
  <provider id="MyMediaPublishingProvider"
      enabled="true"
      service="org.nuxeo.ecm.media.publishing.MyMediaPublishingProviderService">
  </provider>
</extension-point>
```

### How to Contribute New Providers

If you want to define other media publishing providers, you need to contribute a new publishing service to the Nuxeo Media Publishing addon.

#### Step 1: Contribute a media publishing service

Nested in the component tag of your XML contribution file, set the implementation class and use the extension point `providers` to register your media publishing service.

```xml
<component name="org.nuxeo.ecm.media.publishing.MyMediaPublishingProviderService">
  <implementation class="org.nuxeo.ecm.media.publishing.MyMediaPublishingProviderService" />

  <service>
    <provide interface="org.nuxeo.ecm.media.publishing.MyMediaPublishingProviderService" />
  </service>

  <extension target="org.nuxeo.ecm.media.publishing.MediaPublishingService"point="providers">
    <provider id="my-publishing-provider" 
		enabled="true"
		service="org.nuxeo.ecm.media.publishing.MyMediaPublishingProviderService"/>
  </extension>
</component>
```

Your service implementation must implement the `MediaPublishingProvider` interface or extend any other class that implements this interface.

#### Step 2: Contribute an OAuth provider

1.  Nested in the component tag of your XML contribution file, add a `require` tag the `OAuth2ServiceProviderRegistry`.
2.  Then, use the extension point [`providers`](http://explorer.nuxeo.com/nuxeo/site/distribution/10.10/viewExtensionPoint/org.nuxeo.ecm.platform.oauth2.providers.OAuth2ServiceProviderRegistry--providers) of the `OAuth2ServiceProviderRegistry` service to register the OAuth provider.

    ```xml
    <component name="org.nuxeo.ecm.media.publishing.MyOAuthServiceProvider">
      <require>org.nuxeo.ecm.platform.oauth2.providers.OAuth2ServiceProviderRegistry</require>

      <extension target="org.nuxeo.ecm.platform.oauth2.providers.OAuth2ServiceProviderRegistry" point="providers">
        <provider>
          <name>my-publishing-provider</name>
          <description>MyOAuthServiceProvider</description>
          <class>org.nuxeo.ecm.media.publishing.MyOAuthServiceProvider</class>
          <tokenServerURL></tokenServerURL>
          <authorizationServerURL></authorizationServerURL>
          <scope></scope>
        </provider>
      </extension>
    </component>
    ```

**Note:** The `name` field of your OAuth provider must match the `id` of your media publishing service defined in Step 1. The `description` field is used as a label in the UI.

#### Step 3: Contribute options widgets (optional)

By default, when publishing a video, the only required field to fill in is the publishing account. However, since different services allow different metadata (e.g. privacy status of a video, channels, projects, tags) it is possible to contribute more options widgets to the publishing panel in the UI.

```xml
<extension target="org.nuxeo.ecm.platform.actions.ActionService" point="actions">
  <action id="myprovider_options" type="widget">
    <category>MEDIA_PUBLISHING_OPTIONS_CATEGORY</category>
    <properties>
      <property name="widgetName">myprovider_options_widget</property>
    </properties>
    <filter id="isMyProvider">
      <rule grant="true">
        <condition>#{provider == "my-publishing-provider"}</condition>
      </rule>
    </filter>
  </action>
</extension>
```
* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}
- [Using OAuth2]({{page page='using-oauth2'}})
- [Using OpenID / OAuth2 in Login Screen]({{page page='using-openid-oauth2-in-login-screen'}})
- [Digital Asset Management (DAM)]({{page page='digital-asset-management-dam'}})
- [Publisher]({{page page='publisher'}})
{{/panel}}
</div>
</div>
