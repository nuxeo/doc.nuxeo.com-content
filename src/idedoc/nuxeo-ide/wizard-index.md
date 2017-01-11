---
title: Wizard Index
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '22905665'
    ajs-parent-page-title: Nuxeo IDE
    ajs-space-key: IDEDOC
    ajs-space-name: Nuxeo IDE
    canonical: Wizard+Index
    canonical_source: 'https://doc.nuxeo.com/display/IDEDOC/Wizard+Index'
    page_id: '9274554'
    shortlink: uoSN
    shortlink_source: 'https://doc.nuxeo.com/x/uoSN'
    source_link: /display/IDEDOC/Wizard+Index
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2014-09-01 12:12'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-03-13 18:29'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-12-15 10:32'
        message: Migrated to Confluence 4.0
        version: '3'
    -
        author: Solen Guitter
        date: '2011-12-15 10:32'
        message: ''
        version: '2'
    -
        author: Laurent Doguin
        date: '2011-12-13 14:53'
        message: ''
        version: '1'

---
{{multiexcerpt 'ide-replaced-by-generator-info' page='nuxeo-ide'}}

Here is the list of all wizards available on the IDE:

## Projects

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Name

</th><th colspan="1">

Description

</th><th colspan="1">

Generated files

</th></tr><tr><td colspan="1">

Nuxeo Plugin

</td><td colspan="1">

Creates an empty Nuxeo plugin project.

</td><td colspan="1">
<ul>
<li>`src/test/java/packagePath`</li>
<li>`src/main/resources/META-INF/MANIFEST.MF`</li>
<li>`src/main/java/packagePath`</li>
<li>`src/main/resources/META-INF/MANIFEST.MF`</li>
<li>`pom.xml`</li>
</ul>
</td></tr><tr><td colspan="1">

Nuxeo WebEngine

</td><td colspan="1">

Creates an empty WebEngine project.

</td><td colspan="1">
<ul>
<li>`src/test/java/packagePath`</li>
<li>`src/main/resources/META-INF/MANIFEST.MF`</li>
<li>`src/main/java/packagePath/MyModule.java`</li>
<li>`src/main/resources/META-INF/MANIFEST.MF`</li>
<li>`src/main/resources/skin/base.ftl`</li>
<li>`src/main/resources/skin/resources/README.txt`</li>
<li>`src/main/resources/skin/resources/css/site.css`</li>
<li>`src/main/resources/skin/resources/img/logo.png`</li>
<li>`src/main/resources/skin/views/MyRoot/index.ftl`</li>
<li>`pom.xml`</li>
</ul>
</td></tr></tbody></table></div>

## Automation

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Name

</th><th colspan="1">

Description

</th><th colspan="1">

Generated files

</th></tr><tr><td colspan="1">

operation

</td><td colspan="1">

Creates the operation and its XML contribution. You can choose the input/output of the operation, its ID, category etc.

</td><td colspan="1">
<ul>
<li>`src/main/java/packagePath/MyOperation.java`</li>
<li>`src/main/resources/OSGI-INF/extensions/extensions.xml`</li>
</ul>
</td></tr></tbody></table></div>

## Component

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Name

</th><th colspan="1">

Description

</th><th colspan="1">

Generated files

</th></tr><tr><td colspan="1">

Nuxeo Component

</td><td colspan="1">

Creates a Java class extending `DefaultComponent` that can be exposed as a service.

</td><td colspan="1">
<ul>
<li>`src/main/java/packagePath/MyComponent.java`</li>
<li>`src/main/resources/OSGI-INF/extensions/extensions.xml`</li>
</ul>
</td></tr></tbody></table></div>

## DocumentModel

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Name

</th><th colspan="1">

Description

</th><th colspan="1">

Generated files

</th></tr><tr><td colspan="1">

Adapter

</td><td colspan="1">

Generates an adapter and the appropriate XML contribution. The adapter will have a getter and a setter for the different properties of the selected schema. To select a schema, you need to bind the project to a Studio account.

</td><td colspan="1">
<ul>
<li>`src/main/java/packagePath/MyDocumentAdapter.java`</li>
<li>`src/main/java/packagePath/MyDocumentAdapterFactory.java`</li>
<li>`src/main/resources/OSGI-INF/extensions/extensions.xml`</li>
</ul>
</td></tr><tr><td colspan="1">

Listener

</td><td colspan="1">

Generates a listener and the appropriate XML contribution.

</td><td colspan="1">
<ul>
<li>`src/main/java/packagePath/MyListener.java`</li>
<li>`src/main/resources/OSGI-INF/extensions/extensions.xml`</li>
</ul>
</td></tr></tbody></table></div>

## OpenSocial

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Name

</th><th colspan="1">

Description

</th><th colspan="1">

Generated files

</th></tr><tr><td colspan="1">

Automation Gadget

</td><td colspan="1">

Creates a gadget based on an automation chain.

</td><td colspan="1">
<ul>
<li>`resources/gadget/gadgetName/`</li>
<li>`resources/gadget/gadgetName/dynamic_messages.properties`</li>
<li>`resources/gadget/gadgetName/gadgetName.css`</li>
<li>`resources/gadget/gadgetName/gadgetName.js`</li>
<li>`resources/gadget/gadgetName/gadgetName.png`</li>
<li>`resources/gadget/gadgetName/gadgetName.xml`</li>
<li>`resources/gadget/gadgetName/gadgets-contrib.xml`</li>
</ul>
</td></tr><tr><td colspan="1">

Gadget

</td><td colspan="1">

Creates a gadget structure. Only difference with the Automation Gadget is in the JS file.

</td><td colspan="1">
<ul>
<li>`resources/gadget/gadgetName/dynamic_messages.properties`</li>
<li>`resources/gadget/gadgetName/gadgetName.css`</li>
<li>`resources/gadget/gadgetName/gadgetName.js`</li>
<li>`resources/gadget/gadgetName/gadgetName.png`</li>
<li>`resources/gadget/gadgetName/gadgetName.xml`</li>
<li>`resources/gadget/gadgetName/gadgets-contrib.xml`</li>
</ul>
</td></tr></tbody></table></div>

## Seam

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Name

</th><th colspan="1">

Description

</th><th colspan="1">

Generated files

</th></tr><tr><td colspan="1">

Action Bean

</td><td colspan="1">

Code skeleton for a Seam bean that will manage a simple action.
This can be used to:
<ul>
<li>do a navigation</li>
<li>do some modification on the `currentDocument` (or other docs)</li>
<li>create new documents</li>
<li>send/retrieve info from an external service</li>
</ul>
</td><td colspan="1">
<ul>
<li>`src/main/resources/extensions/MyAction-extensions.xml`</li>
<li>`src/main/resources/OSGI-INF/l10n/MyAction-messages.properties`</li>
<li>`src/main/resources/OSGI-INF/deployment-fragment.xml`</li>
<li>`src/main/resources/web/nuxeo.war/icons/MyAction-action.png`</li>
<li>`src/main/resources/seam.properties`</li>
<li>`src/main/seam/packagePath/MyActionBean.java`</li>
</ul>

</td></tr><tr><td colspan="1">

Controller Bean

</td><td colspan="1">

Code skeleton for a Bean that is controlling a new Tab like action (a XHTML fragment).
This can be used:
<ul>
<li>to display additional information about a document</li>
<li>to provide a screen that allow to update the document</li>
</ul>
The bean is by default Conversation scoped so that:
<ul>
<li>if you have expensive computation it will be run only when needed</li>
<li>you can manage view/update/view cycle.</li>
</ul>
All states should be managed as member variables of the beans. The default invalidation policy is to reset the state when the `currentDocument` changes.

</td><td colspan="1">
<ul>
<li>`/src/main/resources/OSGI-INF/l10n/MyController-messages.properties`</li>
<li>`src/main/resources/OSGI-INF/deployment-fragment.xml`</li>
<li>`src/main/resources/web/nuxeo.war/icons/MyController-tab.png`</li>
<li>`src/main/resources/web/nuxeo.war/incl/tabs/MyController-tab.xhtml`</li>
<li>`src/main/resources/seam.properties`</li>
<li>`src/main/seam/packagePath/MyControllerBean.java`</li>
</ul>
</td></tr><tr><td colspan="1">

Service Bean

</td><td colspan="1">

This is a simple service wrapper that allow to inject a Nuxeo Runtime service as a Seam component.

</td><td colspan="1">

`src/main/seam/packagePath/MyServiceWrapperBean.java`

</td></tr></tbody></table></div>

## Security

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Name

</th><th colspan="1">

Description

</th><th colspan="1">

Generated files

</th></tr><tr><td colspan="1">

Permission

</td><td colspan="1">

Creates an XML contribution containing the new permission.

</td><td colspan="1">

`src/main/resources/OSGI-INF/extensions/permissions.xml`

</td></tr><tr><td colspan="1">

Permission Visibility

</td><td colspan="1">

Creates an XML file that associates different permission to a document type.

</td><td colspan="1">

`src/main/resources/OSGI-INF/extensions/permissions-visibility.xml`

</td></tr><tr><td colspan="1">

Security Policy

</td><td colspan="1">

Creates a Java file extending `AbstractSecurityPolicy` and the appropriate XML contribution.

</td><td colspan="1">
<ul>
<li>`src/main/java/packagePath/MySecurityPolicy.java`</li>
<li>`src/main/resources/OSGI-INF/extensions/extensions.xml`</li>
</ul>
</td></tr></tbody></table></div>
