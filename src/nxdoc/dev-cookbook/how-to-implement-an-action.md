---
title: How to implement an Action
labels:
    - bundle
    - manifest
    - nuxeo-action
    - nuxeo-action-bundle
    - action-bundle
    - nuxeo-action-filter
    - action-filter
    - action
    - filter
    - manifest-mf
toc: true
confluence:
    ajs-parent-page-id: '17334435'
    ajs-parent-page-title: Dev Cookbook
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+implement+an+Action
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/How+to+implement+an+Action'
    page_id: '17334422'
    shortlink: loAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/loAIAQ'
    source_link: /display/NXDOC58/How+to+implement+an+Action
history:
    - 
        author: Solen Guitter
        date: '2015-01-26 16:45'
        message: igration of unmigrated content due to installation of a new plugi
        version: '48'
    - 
        author: Solen Guitter
        date: '2015-01-26 16:44'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '47'
    - 
        author: Solen Guitter
        date: '2015-01-26 16:44'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '46'
    - 
        author: Solen Guitter
        date: '2015-01-26 16:44'
        message: link update
        version: '45'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '44'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '43'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '42'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '41'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '40'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: ''
        version: '39'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '38'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: ''
        version: '37'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: ''
        version: '36'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: ''
        version: '35'
    - 
        author: Solen Guitter
        date: '2012-07-24 09:54'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '34'
    - 
        author: Solen Guitter
        date: '2012-07-24 09:54'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '33'
    - 
        author: Solen Guitter
        date: '2012-07-24 09:54'
        message: Migrated to Confluence 4.0
        version: '32'
    - 
        author: Solen Guitter
        date: '2012-07-24 09:54'
        message: Fixed link
        version: '31'
    - 
        author: Solen Guitter
        date: '2011-08-06 00:56'
        message: ''
        version: '30'
    - 
        author: Solen Guitter
        date: '2011-05-05 18:52'
        message: ''
        version: '29'
    - 
        author: Solen Guitter
        date: '2011-05-05 18:50'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2011-05-05 18:25'
        message: ''
        version: '27'
    - 
        author: Solen Guitter
        date: '2011-05-05 18:22'
        message: ''
        version: '26'
    - 
        author: Solen Guitter
        date: '2011-05-05 15:06'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
        date: '2011-05-05 15:03'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2011-05-05 11:32'
        message: ''
        version: '23'
    - 
        author: Ronan Le Gall
        date: '2011-05-03 14:24'
        message: ''
        version: '22'
    - 
        author: Ronan Le Gall
        date: '2011-05-03 12:34'
        message: ''
        version: '21'
    - 
        author: Ronan Le Gall
        date: '2011-05-03 11:42'
        message: ''
        version: '20'
    - 
        author: Ronan Le Gall
        date: '2011-05-02 18:02'
        message: ''
        version: '19'
    - 
        author: Ronan Le Gall
        date: '2011-04-29 18:24'
        message: version finalisée contenant des informations relative aux filtres
        version: '18'
    - 
        author: Ronan Le Gall
        date: '2011-04-29 18:14'
        message: ''
        version: '17'
    - 
        author: Ronan Le Gall
        date: '2011-04-29 16:08'
        message: ''
        version: '16'
    - 
        author: Ronan Le Gall
        date: '2011-04-29 15:50'
        message: >-
            retrait des références aux messages properties et donc a la
            localization
        version: '15'
    - 
        author: Ronan Le Gall
        date: '2011-04-29 11:00'
        message: ''
        version: '14'
    - 
        author: Ronan Le Gall
        date: '2011-04-28 18:18'
        message: ''
        version: '13'
    - 
        author: Ronan Le Gall
        date: '2011-04-28 18:14'
        message: ''
        version: '12'
    - 
        author: Ronan Le Gall
        date: '2011-04-28 17:00'
        message: ''
        version: '11'
    - 
        author: Ronan Le Gall
        date: '2011-04-28 12:38'
        message: ''
        version: '10'
    - 
        author: Ronan Le Gall
        date: '2011-04-28 11:45'
        message: ''
        version: '9'
    - 
        author: Ronan Le Gall
        date: '2011-04-28 11:41'
        message: ''
        version: '8'
    - 
        author: Ronan Le Gall
        date: '2011-04-27 18:40'
        message: ''
        version: '7'
    - 
        author: Ronan Le Gall
        date: '2011-04-27 18:20'
        message: ''
        version: '6'
    - 
        author: Ronan Le Gall
        date: '2011-04-27 18:09'
        message: ''
        version: '5'
    - 
        author: Ronan Le Gall
        date: '2011-04-26 18:28'
        message: ''
        version: '4'
    - 
        author: Ronan Le Gall
        date: '2011-04-26 17:39'
        message: ''
        version: '3'
    - 
        author: Ronan Le Gall
        date: '2011-04-22 16:36'
        message: ''
        version: '2'
    - 
        author: Ronan Le Gall
        date: '2011-04-22 15:47'
        message: ''
        version: '1'

---
This recipe shows you how to configure an action in a bundle for a Nuxeo application.

This recipe describes how to define a new clickable icon in the webpage GUI of your Nuxeo application. This icon will redirect users to the "Sending Email" page.
To keep things simple and focused on the action configuration, this recipe is based on the action called "send_email". The "send_email" action is triggered by an icon displayed in the "Context Tool area" (i.e. the red ellipse area).

![]({{file name='NuxeoDMContextualToolsArea.png'}} ?w=550,border=true)

This icon (circled in red) is calling the action and is displayed only when a document is exposed in the main area as shown below. We will add another icon that does the same.

![]({{file name='FocusOnSendEmailIcon.png'}} ?w=550,border=true)

When the user clicks this icon, he is redirected to the following page, from which he will be able to send the email.

![]({{file name='SendMailPage.png'}} ?w=550,border=true)

For this recipe, you don't need a working email server: the call to the emailing page is sufficient. However, if you want to send the email, you can configure your Nuxeo application instance by following [the steps described on the recommended configuration of a Nuxeo server]({{page space='admindoc58' page='recommended-configurations#enable-email-alerts'}}).

{{!-- unmigrated-wiki-markup: {multi-excerpt-include:NXDOC:How-to create an empty bundle|name=recipe-tip|nopanel=true} --}}

This recipe is composed of the steps below:

## Create the project

{{#> callout type='tip' }}

If you followed the "[How to create an empty bundle]({{page page='how-to-create-an-empty-bundle'}})" recipe, you can use the project created for this recipe and jump to the [configuration steps](#the-configuration).

{{/callout}}

The very first step to implement an action is to create a new project, here called "nuxeo-action-project" (see the "[How to create an empty bundle]({{page page='how-to-create-an-empty-bundle'}})" recipe for details on the project creation).
After you completed the project's structure, you have to configure the new action and define it as an OSGi component. The project structure is generally completed manually. However, you can also get it from [this zipped empty project](http://maven.nuxeo.com/nexus/content/repositories/public-releases/org/nuxeo/cookbook/emptyproject/1.0/emptyproject-1.0.zip).

## Prepare the resources needed

The purpose of this recipe is to add a new icon with a label, on which users will click to send an email from the document.

1.  Create a new "icons" folder in the "src/main/resources/web/nuxeo.war" folder of your project.
2.  Save this icon (![]({{file name='asterisk_orange.png'}})) in the newly created "icons" folder. Of course you can use any other icon of your choice. Just be careful of the icon's name in the next steps.
    ![]({{file name='AsteriskInTheIconsFolder.png'}} ?border=true)
3.  Modify your "deployment-fragment.xml" file to incorporate this icon in your Nuxeo application.
    The "deployment-fragment.xml" file content should be like this:

    ```
    <?xml version="1.0"?>
    <fragment version="1">

    	<install>

    		<!-- unzip the war template -->
    		<unzip from="${bundle.fileName}" to="/" prefix="web">
    			<include>/web/nuxeo.war/**</include>
    		</unzip>

    	</install>
    </fragment>

    ```

{{#> callout type='info' heading='Resources'}}

The image proposed here (![]({{file name='asterisk_orange.png'}})) is part of the silk icon set of [FAMFAMFAM page](http://www.famfamfam.com/lab/icons/silk/) release under [Creative Commons Attribution 2.5 License](http://creativecommons.org/licenses/by/2.5/).

{{/callout}}

## Define your action in a XML file

Now you have to define your action in a file named "action-contrib.xml", located in the "src/main/resources/OSGI-INF" folder.

![]({{file name='actionContribInOSGiFolder.png'}} ?border=true)

The content of the file is the following:

```
<?xml version="1.0"?>
<component name="org.nuxeo.cookbook.basic.action">
	<extension target="org.nuxeo.ecm.platform.actions.ActionService"
		point="actions">
		<action icon="/icons/asterisk_orange.png" id="myAction"
			label="An other way to send an email" link="send_email" order="17">
			<category>DOCUMENT_UPPER_ACTION</category>
			<filter id="cookbook_action_filter">
				<rule grant="false">
					<facet>Folderish</facet>
				</rule>
			</filter>

		</action>
	</extension>
</component>

```

**Component**
The name of your component is the the name of your action.
Make sure that this name is unique otherwise your Nuxeo application instance could behave unexpectedly.
There should be only one component called "org.nuxeo.cookbook.basic.action" for the whole application.

**Extension**

*   The "target" of the extension is the Java class which implements your action.
*   The "point" of the extension is its type. Here, you want to create an action, so the extension point is "actions" (don't forget the ending 's').

**Action**
The <action> tag defines:

*   which "icon" will be displayed to the user. The path to the icon file is relative to the root of the "nuxeo.war" folder of your Nuxeo application;
*   which "label" of the action, i.e. the text displayed as a tooltip. You can use a localizable property but to do so see the recipe ["How-to localize a bundle"]({{page space='corg' page='todo'}});
*   the action's "id" in Nuxeo application instance;
*   which action referenced in Nuxeo should be triggered when the user clicks on the icon (parameter "link"). Here the referenced action is a simple string (send_email). It could be the path to a page or a key known by your Nuxeo application instance.

**Category**
The category value specifies the position of the button in the page.
Nuxeo UI is divided in several parts, called categories (cf the page [Actions Display]({{page page='actions-display'}})). An action can belong to several categories and lists them in the "category" attribute. For this example, it's the "Contextual tool area", whose ID is "DOCUMENT_UPPER_ACTION".

**Filter**
The filter value configures the conditions that must be met for the button to be displayed.
Here, the filter defines that the document should be displayed only if it's **not** decorated with the facet "folderish" (i.e. is not "folder" like). Then, the icon is displayed.
For more advanced customization, you can see the following pages:

*   the filter section of the [actionService page](http://community.nuxeo.com/5.2/components/org.nuxeo.ecm.platform.actions.ActionService.html),
*   the [Extension Point actions page](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewExtensionPoint/org.nuxeo.ecm.platform.actions.ActionService--actions),
*   the [Extension Point filters page](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewExtensionPoint/org.nuxeo.ecm.platform.actions.ActionService--filters).

## Edit the MANIFEST.MF file

To be detected by Nuxeo, you have to declare your new XML file ("action-contrib.xml") in the "MANIFEST.MF" file of the "src/main/resource/META-INF" folder. Thus your new action is a real and genuine Nuxeo Component.

![]({{file name='ManifestInMetaInfFolder.png'}} ?border=true)

To do so, edit the MANIFEST.MF file and add a new line with: `Nuxeo-Component: OSGI-INF/action-contrib.xml`.
In the end, and providing that you didn't add other contributions, your "MANIFEST.MF" file should contain:

```
Manifest-Version: 1.0
Bundle-ManifestVersion: 1
Bundle-Name: cookbook-action-bundle
Bundle-SymbolicName: org.nuxeo.cookbook.basic.action;singleton:=true
Bundle-Version: 0.0.1
Bundle-Vendor: Nuxeo
Nuxeo-Component: OSGI-INF/action-contrib.xml

```

{{!-- unmigrated-wiki-markup: {multi-excerpt-include:NXDOC:How-to create an empty bundle|name=manifest-format-warning|nopanel=true} --}}

## Install and check the deployment of your action

To be sure that all of your tedious work is fruitful, you have to deploy your brand new bundle in a working Nuxeo application instance.

{{!-- unmigrated-wiki-markup: {multi-excerpt-include:NXDOC:How-to create an empty bundle|name=bundle-deployment-steps|nopanel=true} --}}

Now you know that your bundle is correctly deployed and installed. You also need to check that it works.

1.  In a browser, go to the URL [http://localhost:8080/nuxeo](http://localhost:8080/nuxeo).
2.  Connect to your Nuxeo application with an existing user (default credentials are Administrator/Administrator (login/password).
3.  Go to a workspace.
4.  Open or create a document.
    You should see our image (![]({{file name='asterisk_orange.png'}})) displayed in the "Contextual Tool Area" as shown below.
    ![]({{file name='NewIconPartialPageScreenShot.png'}} ?border=true)
5.  Move the pointer over the icon.
    You should have the following tooltip:
    ![]({{file name='ScreenshotWithToolTip.png'}} ?border=true)
    Click on your brand new and beautiful action icon.
    The following page is displayed (note that "Actions in Nuxeo" is our document name):
    ![]({{file name='FinalSendEmailPage.png'}} ?w=550,border=true)

Et voil&agrave;!

_As said in the beginning of this recipe, if you have unexpected errors or Nuxeo Application behavior don't forget to check the [FAQ]({{page space='KB' page='Nuxeo Technical+Knowledge+Base+%28FAQ%29'}}) and post a comment about this recipe or about the cookbook if you want to!_