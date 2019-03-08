---
title: Supporting Hot Reload
review:
  comment: ''
  date: ''
  status: ok
labels:
  - 5-6
  - jsf-ui
toc: true
confluence:
  ajs-parent-page-id: '9275231'
  ajs-parent-page-title: Working on Nuxeo sources
  ajs-space-key: CORG
  ajs-space-name: Core Developer Guide
  canonical: Supporting+Hot+Reload
  canonical_source: 'https://doc.nuxeo.com/display/CORG/Supporting+Hot+Reload'
  page_id: '11043369'
  shortlink: KYKo
  shortlink_source: 'https://doc.nuxeo.com/x/KYKo'
  source_link: /display/CORG/Supporting+Hot+Reload
tree_item_index: 500
history:
  - author: Manon Lumeau
    date: '2015-09-29 14:02'
    message: ''
    version: '14'
  - author: Anahide Tchertchian
    date: '2013-10-18 15:38'
    message: >-
      rephrase first sentence to make it clear that this is supported
      since 5.6
    version: '13'
  - author: Solen Guitter
    date: '2013-10-18 15:28'
    message: >-
      NXDOC-242: Updated WebEngine paragraph to reflect NXP-12749 changes
      in 5.8
    version: '12'
  - author: Solen Guitter
    date: '2013-10-18 12:13'
    message: Added TOC
    version: '11'
  - author: Anahide Tchertchian
    date: '2012-07-03 09:32'
    message: Migrated to Confluence 4.0
    version: '10'
  - author: Anahide Tchertchian
    date: '2012-07-03 09:32'
    message: ''
    version: '9'
  - author: Anahide Tchertchian
    date: '2012-06-29 17:01'
    message: ''
    version: '8'
  - author: Anahide Tchertchian
    date: '2012-06-28 17:47'
    message: ''
    version: '7'
  - author: Anahide Tchertchian
    date: '2012-06-28 17:42'
    message: ''
    version: '6'
  - author: Anahide Tchertchian
    date: '2012-06-28 16:34'
    message: ''
    version: '5'
  - author: Anahide Tchertchian
    date: '2012-06-27 19:20'
    message: ''
    version: '4'
  - author: Anahide Tchertchian
    date: '2012-06-27 19:08'
    message: ''
    version: '3'
  - author: Anahide Tchertchian
    date: '2012-06-27 19:06'
    message: ''
    version: '2'
  - author: Anahide Tchertchian
    date: '2012-06-27 19:05'
    message: ''
    version: '1'
---

{{#> callout type='info' }}

Hot reload has been partially supported over Nuxeo versions. The following instructions apply since Nuxeo 5.6 version (some of them were available in earlier version).

{{/callout}}

Hot reload involves a lot of layers, each one handling different kinds of caches. Server tries to keep contextual information which are not persisted and reload every services to take into account changes in Java code.

<!--Sometimes hot reload needs to be very smooth, when installing Studio packages from the Admin Center for instance. In these cases, the whole application does not need to be reloaded, and the current user view needs to keep its context (authentication, current page, current document, etc…)

In other cases the application needs to be reloaded completely to take into account changes in Java code, and the current context cannot always be restored to its previous state.-->

### Setting up the Dev Mode

Hot reload is currently mainly interesting to ease up development. Enabling it means re-building part of the application, resetting caches that are needed for the application to work efficiently, etc. For this reason, using hot reload may not be suitable for production.

Hot reload support is controlled by the Nuxeo development mode. This mode can be activated by setting a runtime property in _nuxeo.conf_ file (you'll need to restart your Nuxeo server):

```
org.nuxeo.dev=true

```

<!--
{{{multiexcerpt name='JSF-UI-required' page='nxdoc/generic-multi-excerpts'}}}

Activating this mode can also be done in the Admin Center, in the **Update Center** > **Nuxeo Studio** tab, or in the **System information** > **Setup** tab.

The development mode is checked by code whenever performing actions that would involve hot reload (when trying to install packages from the Update Center, or bypassing some caches during rendering, for instance). But some parts of the application may need the server to be started with the dev mode enabled (or disabled) for this property to be taken into account properly, so it is recommended to restart the server at least once after changing this property value.

-->

{{#> callout type='warning' }}

The development mode should not be activated on a server in production.

{{/callout}}

### Understanding Layers Involved in Hot Reload

When contributing a JAR to the Nuxeo application, what's a stake?

- The JAR should be detected by the application.
- Its contributions to Nuxeo extension points should be loaded.
- Its contributions to other resources (XHTML files, message bundles, etc...) should be detected.
- Some caches should be reset.

#### Hot Reloading Nuxeo Runtime Components

For this you need the `java.io.File` of your bundle, and you can call:

```java
Framework.getLocalService(ReloadService.class).reloadBundles(new ReloadContext().deploy(file));
```

Undeploy and deploy to the runtime framework were already possible as of Nuxeo 5.4.1: you can take example on what the ReloadService is doing to make it work in your version.

For more information, check out the [ReloadService API](https://github.com/nuxeo/nuxeo-runtime/blob/master/nuxeo-runtime-reload/src/main/java/org/nuxeo/runtime/reload/ReloadService.java). Note that [Scripting Commands]({{page space='nxdoc' page='scripting-commands'}}) used by Market Place packages already call ReloadService methods.

Note that reloading a bundle is working correctly only if the extension point registries it holds are correctly handling the contributions merging and removal. This can be easily set up by extending the [Descriptor interface](https://github.com/nuxeo/nuxeo-runtime/blob/master/nuxeo-runtime/src/main/java/org/nuxeo/runtime/model/ContributionFragmentRegistry.java) and implementing the `merge` method.

#### Hot Reloading the WAR

The war is rebuilt after each reload, taking care of changes to JARs/bundles deployed in the application:

When the WAR is up-to-date, it's a matter of forcing the application to detect changes.

<!-- Maybe change to something about webui reload

##### XHTML Files

XHTML files can be hot reloaded from the `nuxeo.war` directory. In order to activate this, the runtime property `**facelets.REFRESH_PERIOD**` can be set to "2" for instance: it will force facelets to refresh pages that have changed in the last 2s. Since 5.6, activating the development mode is enough: it will force the facelets refresh period to 2s.

Then you can directly edit the XHTML files from here or copy manually the XHTML files you edited from your IDE into this directory.

{{#> callout type='note' }}

Do not forget to disable this option for production, as detecting changes on XHTML files is costly for the server.

{{/callout}}

##### Message Bundles

Message files can be hot reloaded from the `nuxeo.war/WEB-INF` directory. The resources cache needs to be reset first. This is done by listening to the runtime "flush" event (see above) and can also be triggered by the user action "Dev mode: force flush" action available in the user menu on top of all pages.

 -->

<!--

##### JSF Navigation Cases

Currently, JSF navigation cases can only be reset when the JSF development mode is activated. But when activating this, hot reload breaks the user current view, so new navigation cases are detected thanks to a hack in Nuxeo code, activated when the Nuxeo development mode is.

##### Other Configurations

Other configurations (other kinds of JSF contributions to the `faces-config.xml` file, contributions to the Seam `pages.xml` file, contributions to the `web.xml` file, etc...) are **not** currently hot-reloaded by activating the Nuxeo development mode.

#### Resetting High Level Caches

Seam components may hold high level caches. Since the web session is not impacted by a simple hot reload, and since Seam components instances are not shared by users, there is no direct way to inform all users of the application that their Seam components need to reset and rebuild their cache.

For a Seam component to reset its cache correctly, it can use the following tricks:

- When dev mode is set (and only then: the rest of the time, cache invalidation should be handled as usual, regardless of hot reload support), it can check if the service it relies on has changed. This can be done only with services implementing the `org.nuxeo.runtime.service.TimestampedService` interface: Whenever a change is done on this service, a timestamp will be changed on the service.

Here is sample code checking for changes on the type service for instance:

```
@In(create = true)
protected TypeManager typeManager;

// helper seam component to handle hot reload
@In(create = true)
protected NuxeoSeamHotReloader seamReload;

// cache map
protected Map<String, List<List<Type>>> typesMap;

// cache timestamp
protected Long typesMapTimestamp;

@Factory(value = "typesMap", scope = EVENT)
public Map<String, List<List<Type>>> getTypes() {
    if (typesMap == null
            || (seamReload.isDevModeSet() && seamReload.shouldResetCache(
                    typeManager, typesMapTimestamp))) {
       // reset the cache map here
       typesMap = buildTypesMap();
    }
    return typesMap;
}

protected Map<String, List<List<Type>>> buildTypesMap() {
  [...]
}

```

If your cache relies on several services, or on a service that is not implementing the `TimestampedService` interface (or if you simply do not want the reset to be done only when really needed), you can also just check for a similar timestamp kept on the `ReloadService`: it will track if a flush was triggered since the last time you built the cache.

This is automatically done when the Nuxeo developement mode is activated: when navigating, all users will detect that a flush was called on the `ReloadService`, and a Seam flush event will be sent. So you can just add an observer for this Seam event, for instance:

```
@Observer(value = { EventNames.FLUSH_EVENT }, create = false)
@BypassInterceptors
public void onHotReloadFlush() {
  // reset seam component cache
}

```

Note that currently, automatic detection does not only send the "flush" seam event: it also sends a bunch of Seam events that most of Seam components already observe to reset their cache, to ease up hot reload support on this layer.

Check out Seam components named [seamReloadContext](https://github.com/nuxeo/nuxeo-jsf/blob/master/nuxeo-platform-webapp-base/src/main/java/org/nuxeo/ecm/webapp/seam/NuxeoSeamHotReloadContextKeeper.java) and [seamReload](https://github.com/nuxeo/nuxeo-jsf/blob/master/nuxeo-platform-webapp-base/src/main/java/org/nuxeo/ecm/webapp/seam/NuxeoSeamHotReloader.java) for more information.

-->

<!--

## Hot reloading Seam Components

Seam components can also be hot redeployed. This can save a lot of time (and server restarts). This is not controlled by the Nuxeo development mode as it relies on other configurations to be available.

To activate Seam Hot reload you need to:

1.  Put an empty file at `nuxeo.ear/config/seam-debug.properties`.
    Since 5.6, setting the property "org.nuxeo.seam.debug" to value "true", in the `bin/nuxeo.conf` file is equivalent.
2.  Install the suitable seam debug library for your version of Nuxeo into the `nxserver/bundles/` folder. The JAR is named "nuxeo-platform-seam-debug-5.5.jar" for version 5.5\. You can use our [Maven repository](https://maven.nuxeo.org/nexus/index.html#nexus-search;gav~~jboss-seam-debug~~~) for selecting and downloading the JAR. This will place the JBoss Seam library into folder `nxserver/nuxeo.war/WEB-INF/lib` at startup and activate Seam debug features on the application.

If you're using Nuxeo IDE, these settings are not needed because they're installed by default, and the debug JAR is included in the SDK.

### Selecting the Seam Components That Can Be Hot Reloaded

Because of the way Seam hot reload works, you have to select what Seam Components must be hot reloadable. This is done by telling the deployment system which bundle and what classes must be reloadable.

In your bundle, add the following lines at the end of you `deployment-fragment.xml` (since `5.4.2`).

```
<seamHotDeploy>
  <include>**/*Bean.class</include>
</seamHotDeploy>

```

This instruct the deployer for extracting all the classes suffixed by `Bean` into the `nuxeo.war/WEB-INF/dev` folder and to extract the others into a new `bundle-seamhotdeploy.jar` folder and to rename the original JAR to `bundle.jar~seamhotdeploy`.

For backward compatibility, we also include the classes selected in the `seam-debug.properties` in the config folder and the bundle's `seam.properties`.

### How Does It Work and What Are the Limitations?

During deployment preprocessing, the "hot reloadable JARs" will be split:

- Seam classes made for hot reload will be copied into `nuxeo.ear/nuxeo.war/WEB-INF/dev`;
- Other JAR ressources (class, XML, manifest ...) will remain in another JAR that will be deployed instead of the original one

Classes in `nuxeo.ear/nuxeo.war/WEB-INF/dev` will be deployed by Seam in a separated class loader and will be hot-reloadable.

Since these classes are in a child classloader, they can access other Seam components, but other Seam components can not see them.

### How Do I Reload My Classes?

You have to copy your updated classes into `nuxeo.ear/nuxeo.war/WEB-INF/dev`.

To trigger the hot reload, you can either:

- Use the SeamReload action link that is available in the default nuxeo-dm packaging,
- Or call the URL : [`http://127.0.0.1:8080/nuxeo/restAPI/seamReload`](http://127.0.0.1:8080/nuxeo/restAPI/seamReload)

-->
