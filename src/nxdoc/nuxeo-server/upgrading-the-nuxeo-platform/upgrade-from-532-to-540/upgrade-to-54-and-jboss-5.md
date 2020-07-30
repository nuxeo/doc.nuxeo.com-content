---
title: Upgrade to 5.4 and JBoss 5
review:
    comment: ''
    date: '2017-01-20'
    status: ok
labels:
    - lts2016-ok
    - multiexcerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '18449457'
    ajs-parent-page-title: Upgrade from 5.3.2 to 5.4.0
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Upgrade+to+5.4+and+JBoss+5
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Upgrade+to+5.4+and+JBoss+5'
    page_id: '14255774'
    shortlink: nobZ
    shortlink_source: 'https://doc.nuxeo.com/x/nobZ'
    source_link: /display/NXDOC/Upgrade+to+5.4+and+JBoss+5
tree_item_index: 200
hidden: true
history:
    -
        author: Solen Guitter
        date: '2015-04-14 15:18'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-01-21 14:28'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-07-02 11:07'
        message: ''
        version: '1'

---
{{! multiexcerpt name='5.4-JBoss5-upgrade-page'}}

During the migration from JBoss 4.2 to 5.1 we had to do some small changes in Nuxeo bundles.

You will have to do the same for your custom bundles.

Nevertheless, the needed changes are very small and it should only take a few minutes (it should be really quick when you don't have 200 bundles and you know what to do).

## Impact on sources and resources

### Web resources

Bundles contribution resources to the WAR used to have these resources stored in: `src/main/resources/nuxeo.war`.

This does break JBoss 5 deployment, because it tries to deploy the `nuxeo.war` as a nested WAR, but it fails (because the WAR is not complete and because there are several bundles containing the same `nuxeo.war`).

Rather than changing JBoss deployer config we chose to change our packaging to avoid the problem.

The solution is simple: `nuxeo.war` tree should not be at root of the JAR.

Sample directory structure:

<div class="table-scroll">
    <table class="hover">
        <thead>
            <tr>
                <th>Before (Jboss 4.2)</th>
                <th>After (Jboss 5.1)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <pre>
.
\`-- src
\`-- main
|-- java
\`-- resources
|-- META-INF
|-- nuxeo.war
| \`-- my_page.xhtml
\`-- OSGI-INF
                    </pre>
                </td>
                <td>
                    <pre>
.
\`-- src
\`-- main
|-- java
\`-- resources
|-- META-INF
|-- OSGI-INF
\`-- web
\`-- nuxeo.war
\`-- my_page.xhtml
                    </pre>
                </td>
            </tr>
        </tbody>
    </table>
</div>

This implies a small change in the deployment-fragment:

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Before (Jboss 4.2)

</th><th colspan="1">

After (Jboss 5.1)

</th></tr><tr><td colspan="1">

```
    <install>
    <unzip from="${bundle.fileName}" to="/" >
    <include>nuxeo.war/**</include>
    </unzip>
    </install>

```

</td><td colspan="1">

```
<install>
 <unzip from="${bundle.fileName}" to="/" prefix="web">
 <include>web/nuxeo.war/**</include>
 </unzip>
 </install>

```

</td></tr></tbody></table></div>

If this is not done, or if there is still a "nuxeo.war" directory present in your jar, you will get an exception like:

```
DEPLOYMENTS IN ERROR:
  Deployment "vfsfile:/opt/jboss/server/default/deploy/nuxeo.ear/" is in error due to the following reason(s):
java.lang.IllegalStateException: jboss.web.deployment:war=/nuxeo is already installed.

```

### Module declaration

From within the deployment fragment you can declare contributions to the application.xml.
Be sure that if you declare your module as a EJB module it does really contains EJB3.

```
<extension target="application#MODULE">
 <module>
 <ejb>${bundle.fileName}</ejb>
 </module>
 </extension>

```

Otherwise, you should remove the contribution to `application.xml` (the Java declaration is not needed and will in fact be ignored by the pre-deployer).

Typical deprecated contribution:

```
<extension target="application#MODULE">
 <module>
 <java>${bundle.fileName}</java>
 </module>
 </extension>

```

### Web services binding

The previous versions of Nuxeo were using SUN-JAX-WS (Metro) to handle WebService deployment.
In order to avoid having to modify default JBoss 5.1/EAP 5.0.1 config, we now support to deploy on JBoss native stack (JBoss WS).

This involves doing some small changes in the way the WebService are implemented and deployed.

#### No more EJB3

Because of some limitation of the JBossWS EJB3 deployer we can not deploy WebServices on top of EJB3 if we want to keep endpoint URLs consistent.
So this simply means you should remove the @Stateless annotation in the Beans providing WebService.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Before (Jboss 4.2)

</th><th colspan="1">

After (Jboss 5)

</th></tr><tr><td colspan="1">
<pre>
@Local(WSAuditLocal.class)
@Stateless
@Remote(WSAudit.class)
@WebService(name = "WSAuditInterface", serviceName = "WSAuditService")
@SOAPBinding(style = Style.DOCUMENT)
public class WSAuditBean extends AbstractNuxeoWebService implements
</pre>
</td><td colspan="1">
<pre>
@Local(WSAuditLocal.class)
@Remote(WSAudit.class)
@WebService(name = "WSAuditInterface", serviceName = "WSAuditService")
@SOAPBinding(style = Style.DOCUMENT)
public class WSAuditBean extends AbstractNuxeoWebService implements
</pre>
</td></tr></tbody></table></div>

#### SUN-JAX-WS vs JBossWS binding

Both WS framework need to have a declaration for endpoints, but they (of course) don't use the same way to do it.
Basically, SUN-JAX-WS uses a dedicated `sun-jax-ws.xml` file and JBossWS uses the `web.xml`.

The Nuxeo template system are configured so that you can declare both bindings in your bundle and Nuxeo will deploy the right one depending on the target deployment host.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

JBossWS binding

</th><th colspan="1">

SUN-JAX-WS binding

</th></tr><tr><td colspan="1">

`<!- JBossWS Native EndPoint Declaration ->`
`<extension target="web#JBOSSWS">`
`<servlet>`
`<description>NuxeoAudit WS EndPoint</description>`
`<display-name>NuxeoAudit EndPoint</display-name>`
`<servlet-name>NuxeoAuditEndPoint</servlet-name>`
`<servlet-class>org.nuxeo.ecm.platform.audit.ws.WSAuditBean</servlet-class>`
`</servlet>`
`<servlet-mapping>`
`<servlet-name>NuxeoAuditEndPoint</servlet-name>`
`<url-pattern>/webservices/nuxeoaudit</url-pattern>`
`</servlet-mapping>`
`</extension>`

NB: Yes, you declare you Bean as a servlet even if it does not implement the needed interface!

</td><td colspan="1">

<span style="text-decoration: line-through;">`<!SUN JAXWS / Metro EndPoint Declaration>`</span>
`<extension target="jaxws#ENDPOINT">`
`<endpoint name="nuxeoaudit"`
`implementation="org.nuxeo.ecm.platform.audit.ws.WSAuditBean"`
`url-pattern="/webservices/nuxeoaudit" />`
`</extension>`

</td></tr></tbody></table></div>

### Requirements declaration

In JBoss deployed, as it was already the case for tomcat deployment, the Require-Bundle is no longer used by the deployed and should be reserved for OSGi deployment.

The Nuxeo-Require should not longer be used either. `Nuxeo-RequiredBy` will be deprecated but should still be use to override XHTML pages.

In the JBoss 5 deployment (as it was the case in Tomcat), all the Nuxeo bundles are put in the classloader from the start, so there is no risk of ClassNotFound during the loading.

The only dependencies you have to worry about are Runtime dependencies (server availability, contribution override ...): all this should be managed by using the `<require>` tag in the XML contribution.

NB: the `Require-Bundle` is still used when Nuxeo is deployed on an OSGi container, because in this case the class loading issues remains.

### Other checks you may want to do

#### `ejb-jar.xml` files

Unless you know what you are doing, you should remove any `ejb-jar.xml` file from the META-INF folder.

#### Servlets and filters initialization

Servlets and Filters should not assume that when activated (call to init method by the servlet container) Nuxeo Runtime is ready. It won't be always the case.

So if you need to do some Nuxeo Runtime calls at init time, you should rely on the Framework initialization event, rather on the servlet container init.

#### EJB3 declaration

JBoss 5 is more strict on the JEE spec, so your EJB3 can not use the same Java interface for @Local and @Remote

#### Web.xml ordering

JBoss 5 validate the `web.xml` against the DTD and checks order on the tags.

The Nuxeo template is OK and respect the standard, so if you contribute your filters in the rights section and the servlets in the right sections there should be no problem.

But be aware that if you took some shortcuts and contributed several kind of objects (Filters, Servlets, Context-params) in side the same slot, it may have worked OK with JBoss 4 but it won't with JBoss 5.

#### CoreSession usage

In JBoss environment, CoreSession is delivred via DocumentManagerBean that is a Stateful Session Bean.

JEE spec does not allow concurrent calls on a SFSB : this applies to both JBoss 4 and JBoss 5.

But in the case of JBoss 5 the check is more strict and also prohibits reentrant calls from the same thread.

The typical use case if you create a DocumenModel and you have a Listener that will run and use the core session to do some work.

In JBoss 4 it runs without problem but in JBoss 5 this is detected as a concurrent call.

DocumentManagerBean and DocumentModel implementations have been modified to avoid that, but there are still cases where you may have the problem.

Typical unsafe code is taking the CoreSession via:

```
CoreInstance.getInstance().getSession(doc.getSessionId()).

```

This can be replaced by

```
doc.getCoreSession()
```

that contains the needed logic to detect the reentrant call and return the correct Session (Local or EJB) depending on the context.

So if you have errors like this one:

```
no concurrent calls on stateful bean 'jboss.j2ee:service=EJB3,name=DocumentManagerBean' (EJB3 4.3.13)

```

first check that you don't access the CoreSession from inside a Listener using the DocumentModel sessionId.

### Dependencies

Hibernate dependencies in Nuxeo's root `pom.xml` has changed. The core artifact for Hibernate is named `hibernate-core` now instead of `hibernate`. If you were using this dependency, you need to change from:

```
<dependency>
  <groupId>org.hibernate</groupId>
  <artifactId>hibernate</artifactId>
</dependency>

```

to:

```
<dependency>
  <groupId>org.hibernate</groupId>
  <artifactId>hibernate-core</artifactId>
</dependency>

```

## Impact on the Packaging

### Templates

Following structure changes in `nuxeo.ear`, templates structure has changed a little.

If you override a template, check the directories. For instance, here are the `default` template changes:

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Before (Jboss 4.2)

</th><th colspan="1">

After (Jboss 5.1)

</th></tr><tr><td colspan="1">
<pre>
.
|-- config
| |-- default-repository-config.xml
| \`-- sql.properties
|-- datasources
| |-- default-repository-ds.xml
| \`-- unified-nuxeo-ds.xml
\`-- nuxeo.defaults
</pre>
</td><td colspan="1">
<pre>
.
|-- nuxeo-ds.xml
|-- nuxeo.defaults
\`-- nuxeo.ear
|-- META-INF
| \`-- default-repository-ds.xml
\`-- config
|-- default-repository-config.xml
\`-- sql.properties
</pre>
</td></tr></tbody></table></div>

As defined in `nuxeo.defaults` ("`default.target=server/default/deploy`"), the target directory of this template is now `server/default/deploy` instead of `server/default/deploy/nuxeo.ear`.

If you defined your own template, you only have to follow the `nuxeo.ear` structure:

*   `default-repository-ds.xml` has moved from `nuxeo.ear/datasources/` to `nuxeo.ear/META-INF/`
*   `unified-nuxeo-ds.xml` has moved to `nuxeo-ds.xml` and its content now includes mbeans declarations
*   `nuxeo.ear/system/` has been renamed to `nuxeo.ear/bundles/`

### Assemblies

Deprecated compliance artifacts with old resources were removed.

`nuxeo-platform-ear` and `nuxeo-distribution-dm` now only contain:

```
nuxeo.ear/
|-- bundles
`-- lib
```
All resources files are generated from templates directories.

Also, the default EAR archives contain in `lib/` all third-party libraries from the dependency tree (only duplicates are removed). The filtering of provided libraries is done when building the server distribution (JBoss, Tomcat, ...).

{{! /multiexcerpt}}
