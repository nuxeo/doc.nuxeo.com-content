---
title: GWT Integration
toc: true
confluence:
    ajs-parent-page-id: '22380896'
    ajs-parent-page-title: Additional UI Frameworks
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: GWT+Integration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/GWT+Integration'
    page_id: '22380910'
    shortlink: boFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/boFVAQ'
    source_link: /display/NXDOC60/GWT+Integration
history:
    - 
        author: Manon Lumeau
        date: '2015-09-16 12:23'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2014-08-25 10:44'
        message: Remove 5.3 reference
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-09-05 17:42'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-09-05 16:17'
        message: Formatting
        version: '14'
    - 
        author: Solen Guitter
        date: '2011-03-04 10:57'
        message: Migrated to Confluence 4.0
        version: '13'
    - 
        author: Solen Guitter
        date: '2011-03-04 10:57'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2011-03-04 10:52'
        message: ''
        version: '11'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 22:43'
        message: ''
        version: '10'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 22:04'
        message: ''
        version: '9'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 22:01'
        message: ''
        version: '8'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 21:57'
        message: ''
        version: '7'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 15:41'
        message: ''
        version: '6'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 15:40'
        message: ''
        version: '5'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-21 15:09'
        message: ''
        version: '4'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-21 14:56'
        message: ''
        version: '3'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-21 14:55'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 01:36'
        message: ''
        version: '1'

---
This documents assumes you are familiar with GWT and have the basic knowledge on how to build GWT applications. You can find a complete introduction to GWT here:

[http://code.google.com/webtoolkit/gettingstarted.html](http://code.google.com/webtoolkit/gettingstarted.html)

{{! excerpt}}

GWT is a web toolkit to build rich clients in Java programming language. The Java code is transcoded in JavaScript at build time so the build process generates a fully HTML+JavaScript application ready to be deployed on an HTTP server.

{{! /excerpt}}

GWT applications may contain both server side code (which is Java byte code) and client side code (which is Java in development mode but is transcoded in JavaScript at build time).

When using the GWT RPC mechanism you usually need to share the client code that makes up your application model (the data objects). This code is both compiled to JavaScript and to Java byte code.

{{#> callout type='note' }}

Only a small subset of JRE classes can be transcoded by GWT to JavaScript (e.g. most of the classes in `java.lang` and `java.utils`).

{{/callout}}

## Developing a GWT Application

### Requirements

To develop a GWT based application for Nuxeo, you need first to install the GWT Eclipse plugin. Here is the list of update sites for each supported Eclipse distribution:

*   [Eclipse 3.6 (Helios)](http://dl.google.com/eclipse/plugin/3.6)
*   [Eclipse 3.5 (Galileo)](http://dl.google.com/eclipse/plugin/3.5)
*   [Eclipse 3.4 (Ganymede)](http://dl.google.com/eclipse/plugin/3.4)
*   [Eclipse 3.3 (Europa)](http://dl.google.com/eclipse/plugin/3.3)

### Creating a Hello World Application

Create a new _Web Application Project_. Uncheck Use _Google App Engine_ in the wizard page. The GWT wizard will create a project structure like:

```
src
    org/my/app/client
    org/my/app/server
    your_module.gwt.xml
war
   WEB-INF/web.xml
   your_module.css
   your_module.html

```

The client package will contain the Java code that must be transcoded into JavaScript. The data objects defined here can be shared on the server side too. The server package will contain code that will be used on the server side (as Java byte code).

As you noticed, a "`war`" directory was generated in the module root. Here you need to define any servlet or filter used in development mode (in the `web.xml` file). Also this directory contains the HTML home page of your application.

When working with a Nuxeo Server, what you need is to be able to start a Nuxeo Server when GWT starts the application in development mode. If you don't have a running Nuxeo inside the same Java process as the debugged application, you cannot use Nuxeo APIs or access the repository to be able to tests your GWT servlets.

To achieve this you need to follow these steps:

1\. Add the JARs of `nuxeo-webengine-gwt` and `nuxeo-distribution-tools` v. 1.1 classifier "all" to your project classpath. When using Maven, this can be done by the following POM fragment:

```xml
<dependency>
  <groupId>org.nuxeo.ecm.webengine</groupId>
  <artifactId>nuxeo-webengine-gwt</artifactId>
</dependency>
<dependency>
  <groupId>org.nuxeo.build</groupId>
  <artifactId>nuxeo-distribution-tools</artifactId>
  <classifier>all</classifier>
  <version>1.1</version>
  <scope>test</scope>
</dependency>

```

2\. Add to `war/WEB-INF/web.xml` a filter as following:

```xml
<filter>
  <display-name>WebEngine Authentication Filter</display-name>
  <filter-name>NuxeoAuthenticationFilter</filter-name>
  <filter-class>
  org.nuxeo.ecm.webengine.gwt.dev.NuxeoLauncher
  </filter-class>
  <init-param>
    <param-name>byPassAuthenticationLog</param-name>
    <param-value>true</param-value>
  </init-param>
  <init-param>
    <param-name>securityDomain</param-name>
    <param-value>nuxeo-webengine</param-value>
  </init-param>
</filter>
<filter-mapping>
  <filter-name>NuxeoAuthenticationFilter</filter-name>
  <url-pattern>/*</url-pattern>
</filter-mapping>

```

This filter will be used to start an [Embedded Nuxeo Server]({{page space='corg' page='embedding-nuxeo'}}) when the GWT application is started in development mode. You can find more details on how to control what version of Nuxeo is started, where the home directory will be created, etc. in the `nuxeo-webengine-gwt` sources in `org/nuxeo/ecm/webengine/gwt/web.xml`.

This filter will load any JAR or Project found in your classpath as a Nuxeo Bundle if the JAR contains a valid OSGi Manifest. So if your current project is a Nuxeo Plugin, it will be correctly deployed on the embedded Nuxeo.

If you want to deploy additional Nuxeo XML components on the embedded server, you need to extend the NuxeoLauncher and implement the method `frameworkStarted()` where you can deploy additional test components using the default mechanism in Nuxeo. (e.g. `Framework.getRuntime().getContext().deploy(url)`).

{{#> callout type='note' }}

This filter is only usable in development mode and it must not be deployed on a real server.

{{/callout}}

Now you can start a debugging session by right-clicking the project and then clicking on _Debug As > Web Application_.

The Embedded Nuxeo will be started before the GWT application is initialized.

By default the web server in the embedded Nuxeo will listen on localhost:8081.

So you can connect to the address for the WebEngine UI if you want to introspect the repository.

The Nuxeo Server Embedded home directory used by default is

```
{user.home}/.nxserver-gwt
```

Now in your GWT servlets you can use calls to Nuxeo API, create and browse documents, etc. Of course you need to add the required dependencies on your project class path.

## Deploying the GWT Application on a Nuxeo Server

To be able to deploy your GWT in a real Nuxeo Server you need to package it as a Nuxeo bundle that:

1\. defines an OSGi `Bundle-Activator` in your `MANIFEST.MF` that points to `org.nuxeo.ecm.webengine.gwt.GwtBundleActivator`.

{{#> callout type='tip' }}

If you need a custom activator you can override the `gwtBundleActivator` and add you own login in the `start()` method after calling `super.start()`, or you can directly implement `BundleActivator` and call `instart()` method the following code: `GwtBundleActivator.install(context)`.

{{/callout}}

2\. contains the generated GWT application files into a directory named "`gwt-war`" at the root of the JAR.

So the JAR will have a content similar to the following one:

```
your-gwt-module.jar
  META-INF/MANIFEST.MF
  OSGI-INF/deployment-fragment.xml
  ...
  org/
  gwt-war/
    your_gwt_module.html
    ...

```

Then simply put your JAR into a Nuxeo Server. (Make sure the server contains `nuxeo-webengine-gwt.jar` in bundles directory).

At first startup the "`gwt-war`" directory from your JAR will be copied into {`web}/root.war/gwt/` where {web} is the webengine root directory.

At each startup, the GWT activator you added to your bundle will check if it needs to unzip again the "`gwt-war`" directory content.

This is true if the timestamp of the bundle JAR will be greater than the timestamp of the file {`web}/root.war/gwt/.metadata/{your_bundle_symbolic_name`}.

This way if you upgrade the JAR the GWT application files will be updated too.

At the end of this document you will find a fragment of a POM that can be used to correctly build a Nuxeo GWT module and that can also generate the GWT project in eclipse by running "`mvn eclipse:eclipse`".

## Accessing your GWT Module From the Client

But how to expose the GWT application to clients?

For this you need to create a simple WebEngine module that expose the GWT application through a JAX-RS resource.

(You can either use WebEngine objects or raw JAX-RS resources - or even a custom servlet your registered in `web.xml`).

If your are using a WebEngine Module you only need to override the abstract class: `org.nuxeo.ecm.webengine.gwt.GwtResource` and implement a `@GET` method to server the GWT application home page like:

```java
@WebObject(type="myGwtApp")
public class MyGwtApp extends GwtResource {
    @GET @Produces("text/html")
    public Object getIndex() {
        return getTemplate("studio.ftl");
    }
}

```

You can do the same from a raw JAX-RS resource by integrating the method from `GwtResource` into your resource:

```java
    @GET
    @Path("{path:.*}")
    public Response getResource(@PathParam("path") String path) {
        //System.out.println(">>> "+GWT_ROOT.getAbsolutePath());
        // avoid putting automatic no cache headers
        ctx.getRequest().setAttribute("org.nuxeo.webengine.DisableAutoHeaders", "true");
        File file = new File(GwtBundleActivator.GWT_ROOT, path);
        if (file.isFile()) {
            ResponseBuilder resp = Response.ok(file);
            String fpath = file.getPath();
            int p = fpath.lastIndexOf('.');
            String ext = "";
            if (p > -1) {
                ext = fpath.substring(p+1);
            }
            String mimeType = ctx.getEngine().getMimeType(ext);
            if (mimeType == null) {
                mimeType = "text/plain";
            }
            resp.type(mimeType);
            return resp.build();
        }
        return Response.status(404).build();
    }

```

This method simply locates the file requested by the GWT client (in {`web}/root.war/gwt`) to send it to the client.

You can apply the same logic if you prefer to write a servlet as an entry point for your GWT module.

### Using GWT RPC Mechanism in a Nuxeo GWT Module

If you want to use GWT RPC inside Nuxeo GWT modules you must be sure your RPC servlet classes extends `org.nuxeo.ecm.webengine.gwt.WebEngineGwtServlet` instead of `RemoteServiceServlet`.

This is required since the default `RemoteServiceServlet` is assuming a WAR structure that is not present in a Nuxeo Server.

The `WebEngineGwtServlet` locates correctly the resources needed by the GWT Serializer and then it dispatches the request back to `RemoteServiceServlet`.

And also don't forget to define your RPC servlets in the `web.xml`! You can use for this the regular approach in Nuxeo (through `deployment-fragment.xml` files).

**Note**: Your GWT RPC servlets are executed in an authenticated context since the Nuxeo Authentication filter is in place.

### Using Other Server / Client Communication Mechanisms

Apart the GWT RPC mechanism you can communicate with the server using any mechanism you need as far as you define a servlet and a protocol between your client and server applications.

Event if custom communication works well in web mode (when the application is deployed in a real Nuxeo server) you will have problems to debug and use them in development mode (when Nuxeo is embedded in GWT IDE). This is because of the SOP (Same origin Policy) problems in Ajax applications.

As I said before the embedded Nuxeo server will listen at a different port (by default to 8081) than the GWT embedded HTTP server. This means you will not be able to do calls from GWT client to servlets registered in the embedded Nuxeo server since they belong to another domain (i.e. different port).

There are 2 ways of fixing the problem and make it work in development mode:

1.  Register your servlets in the GWT HTTP server (in `war/WEB-INF/web.xml`)
    This method has many limitations since the servlet you want to use may need to be started by Nuxeo - or you may want to use Nuxeo JAX-RS or WebEngine objects.
2.  Use the redirection service provided by `nuxeo-webengine-gwt`. This is the recommended method since you don't have any limitation.

#### How is This Working?

Let say your servlet is installed at [http://localhost:8081/myservice](http://localhost:8081/myservice). Doing an asynchronous HTTP request from GWT to this URL will not work as expected because of the SOP limitation.

Instead of this you can rewrite the URL by pre-pending a prefix "redirect" to your servlet path and using the GWT HTTP server domain like this: http://localhost:*8080*/*redirect*/myservice.

The call will be transparently redirected to the Nuxeo HTTP server (and the "redirect" prefix will be removed).

In GWT client code you can use GWT helpers to detect if you are in development mode or not and to use the correct URL in each case. You can for example send the service URL from the server at page load by using javascript to inject the service URL in your module HTML page or you can simply compute the service URL based on the GWT module URL - see GWT.getModuleBaseURL() or GWT.getHostPageBaseURL().

To know if you are in development you can use `GWT.isScript()` on the client side or `"true".equals(System.getProperty("nuxeo.gwt_dev_mode"))` on the server side.

You can also configure the prefix used for redirection and enabling tracing of the redirected requests (that will be printed in the Eclipse console). This can be configured into `war/WEB-INF/web.xml` by adding some parameters to `NuxeoLauncher` filter:

```xml
<!-- enable redirected request content tracing -->
<init-param>
  <param-name>redirectTraceContent</param-name>
  <param-value>true</param-value>
</init-param>
<init-param>
  <param-name>redirectPrefix</param-name>
  <param-value>/foo/bar</param-value>
</init-param>

```

If you want to trace only headers use "redirectTrace" instead of "redirectTraceContent"

## Example of a pom.xml

```xml
  <properties>
    <gwtVersion>2.0</gwtVersion>
    <gwt.module>org.your_gwt_module</gwt.module>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.osgi</groupId>
      <artifactId>osgi-core</artifactId>
    </dependency>
    <dependency>
      <groupId>org.nuxeo.runtime</groupId>
      <artifactId>nuxeo-runtime</artifactId>
    </dependency>
    <dependency>
      <groupId>org.nuxeo.common</groupId>
      <artifactId>nuxeo-common</artifactId>
    </dependency>
    <dependency>
      <groupId>org.nuxeo.ecm.webengine</groupId>
      <artifactId>nuxeo-webengine-gwt</artifactId>
    </dependency>
    <dependency>
      <groupId>org.nuxeo.build</groupId>
      <artifactId>nuxeo-distribution-tools</artifactId>
      <classifier>all</classifier>
      <version>1.1</version>
      <scope>test</scope>
    </dependency>

    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>servlet-api</artifactId>
    </dependency>

    <dependency>
      <groupId>com.google.gwt</groupId>
      <artifactId>gwt-servlet</artifactId>
      <version>${gwtVersion}</version>
      <scope>compile</scope>
    </dependency>
    <dependency>
      <groupId>com.google.gwt</groupId>
      <artifactId>gwt-user</artifactId>
      <version>${gwtVersion}</version>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>com.google.gwt</groupId>
      <artifactId>gwt-dev</artifactId>
      <version>${gwtVersion}</version>
      <scope>runtime</scope>
    </dependency>

   </dependencies>

   <build>
    <!-- gwt compiler needs the java sources to correctly work -->
    <resources>
      <resource>
        <directory>src/main/java</directory>
      </resource>
      <resource>
        <directory>src/main/resources</directory>
      </resource>
    </resources>

    <plugins>
      <!-- correctly generate eclipse files with GWT nature -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-eclipse-plugin</artifactId>
        <configuration>
          <downloadSources>false</downloadSources>
          <additionalProjectnatures>
            <projectnature>com.google.gwt.eclipse.core.gwtNature</projectnature>
            <projectnature>com.google.gdt.eclipse.core.webAppNature</projectnature>
          </additionalProjectnatures>
          <additionalBuildcommands>
            <buildCommand>
              <name>com.google.gwt.eclipse.core.gwtProjectValidator</name>
              <arguments>
              </arguments>
              <name>com.google.gdt.eclipse.core.webAppProjectValidator</name>
              <arguments>
              </arguments>
            </buildCommand>
          </additionalBuildcommands>
          <classpathContainers>
            <classpathContainer>org.eclipse.jdt.launching.JRE_CONTAINER</classpathContainer>
            <classpathContainer>com.google.gwt.eclipse.core.GWT_CONTAINER</classpathContainer>
          </classpathContainers>
          <buildOutputDirectory>war/WEB-INF/classes</buildOutputDirectory>
        </configuration>
      </plugin>
      <!--
        After compiling java sources compile java to JS using GWT compiler. This
        must be done process-classes after compile step finished to be sure we
        have all the needed files in classes directory. I am using ant for this
        since the maven exec plugin is not able to run correctly this
      -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-antrun-plugin</artifactId>
        <executions>
          <execution>
            <id>compile-js</id>
            <phase>process-classes</phase>
            <configuration>
              <tasks>
                <property name="compile_classpath" refid="maven.compile.classpath" />
                <property name="runtime_classpath" refid="maven.runtime.classpath"/>
                <java failonerror="true" fork="true" classname="com.google.gwt.dev.Compiler">
                  <classpath>
                    <pathelement location="${project.build.outputDirectory}" />
                    <pathelement path="${compile_classpath}" />
                    <pathelement path="${runtime_classpath}" />
                  </classpath>
                  <jvmarg value="-Xmx256M" />
                  <jvmarg value="${gwt.arg}" />
                  <!--arg value="-style" />
                  <arg value="DETAILED" /-->
                  <!-- to speed up compiler
                  <arg value="-draftCompile" /-->
                  <arg value="-war" />
                  <arg value="${project.build.outputDirectory}/gwt-war" />
                  <arg value="${gwt.module}" />
                </java>
              </tasks>
            </configuration>
            <goals>
              <goal>run</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>

```