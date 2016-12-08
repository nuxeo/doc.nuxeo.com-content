---
title: Building a SOAP-Based WebService Client in Nuxeo
review:
    comment: ''
    date: '2016-12-07'
    status: ok
labels:
    - lts2016-ok
    - soap
    - soap-component
toc: true
confluence:
    ajs-parent-page-id: '950296'
    ajs-parent-page-title: SOAP Bridge
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Building+a+SOAP-Based+WebService+Client+in+Nuxeo
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/Building+a+SOAP-Based+WebService+Client+in+Nuxeo
    page_id: '9273634'
    shortlink: IoGN
    shortlink_source: 'https://doc.nuxeo.com/x/IoGN'
    source_link: /display/NXDOC/Building+a+SOAP-Based+WebService+Client+in+Nuxeo
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2015-08-31 13:55'
        message: pdate table of contents loo
        version: '18'
    -
        author: Solen Guitter
        date: '2014-06-30 11:24'
        message: ''
        version: '17'
    -
        author: Arnaud Kervern
        date: '2014-06-30 11:16'
        message: ''
        version: '16'
    -
        author: Antoine Taillefer
        date: '2012-06-25 14:12'
        message: ''
        version: '15'
    -
        author: Antoine Taillefer
        date: '2012-06-25 14:12'
        message: ''
        version: '14'
    -
        author: Antoine Taillefer
        date: '2011-11-17 15:48'
        message: ''
        version: '13'
    -
        author: Antoine Taillefer
        date: '2011-11-16 12:30'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2011-11-15 15:34'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2011-11-15 15:31'
        message: Added toc and reordered some steps
        version: '10'
    -
        author: Antoine Taillefer
        date: '2011-11-15 14:28'
        message: ''
        version: '9'
    -
        author: Antoine Taillefer
        date: '2011-11-15 09:41'
        message: ''
        version: '8'
    -
        author: Antoine Taillefer
        date: '2011-11-15 09:39'
        message: ''
        version: '7'
    -
        author: Antoine Taillefer
        date: '2011-11-14 20:10'
        message: ''
        version: '6'
    -
        author: Antoine Taillefer
        date: '2011-11-14 19:52'
        message: ''
        version: '5'
    -
        author: Antoine Taillefer
        date: '2011-11-14 18:51'
        message: ''
        version: '4'
    -
        author: Antoine Taillefer
        date: '2011-11-14 17:51'
        message: ''
        version: '3'
    -
        author: Antoine Taillefer
        date: '2011-11-14 17:46'
        message: ''
        version: '2'
    -
        author: Antoine Taillefer
        date: '2011-11-14 17:43'
        message: ''
        version: '1'

---
To start with we assume that we have access to a remote WebService, from which we can easily download the WSDL file. For example, let's take a simple WebService that provides weather forecast: [http://www.restfulwebservices.net/wcf/WeatherForecastService.svc?wsdl](http://www.restfulwebservices.net/wcf/WeatherForecastService.svc?wsdl).

The code samples used for this example can be found [here](https://github.com/nuxeo/nuxeo-samples/tree/master/nuxeo-sample-webservice/nuxeo-sample-webservice-client).

## Generating the WebService client Java source files with Maven

The `wsimport` goal from the Maven plugin `jaxws-maven-plugin` allows you to generate the WebService client Java source files given a WSDL file.
The WSDL file can either be accessed remotely using an URL or locally using a directory.
Obviously it is better to point at a local (previously downloaded) WSDL file to ensure reproducibility of the build.

For instance, copy [http://www.restfulwebservices.net/wcf/WeatherForecastService.svc?wsdl](http://www.restfulwebservices.net/wcf/WeatherForecastService.svc?wsdl) to `src/main/resources/wsdls` in a Nuxeo project and use the following code in your `pom.xml`:

```
<plugin>
  <groupId>org.codehaus.mojo</groupId>
  <artifactId>jaxws-maven-plugin</artifactId>
  <executions>
    <execution>
      <goals>
        <goal>wsimport</goal>
      </goals>
      <configuration>
        <wsdlDirectory>src/main/resources/wsdls</wsdlDirectory>
        <sourceDestDir>${project.build.directory}/generated-sources/wsimport</sourceDestDir>
      </configuration>
      <!-- Might be needed with JAXP 1.5, if XSD are behind HTTP only
      <configuration>
        <vmArgs>
          <vmArg>-Djavax.xml.accessExternalSchema=all</vmArg>
        </vmArgs>
      </configuration>
      -->
    </execution>
  </executions>
</plugin>

```

When you'll build the project, all WSDL files in `src/main/resources/wsdls` will be parsed and the associated Java source files generated in `${project.build.directory}/generated-sources/wsimport`.

The `jaxws:wsimport` goal is automatically executed within the life cycle phase `generate-sources`, ie. before the `compile` phase. This way, running `mvn clean install` first generates the source files and then compiles them.

{{#> callout type='note' heading='Be careful with XSD schema imports!'}}

Often a WSDL file needs to import one or more XSD schemas, using the `<xsd:import>` directive.

Let's take this example:

```
<xsd:import schemaLocation="http://www.restfulwebservices.net/wcf/WeatherForecastService.svc?xsd=xsd0" namespace="http://www.restfulwebservices.net/ServiceContracts/2008/01"/>
```

If your WSDL file is accessed locally, you also have to download all the XSD schemas referenced by the WSDL and use a relative path for the `schemaLocation` attribute of the `<xsd:import>` directives prior to building your project.

Assuming that the XSD schema `WeatherForecastService.xsd` has been downloaded in `src/main/resources/wsdls/xsdschemas`, this is what you get:

```
<xsd:import schemaLocation="xsdschemas/WeatherForecastService.xsd" namespace="http://www.restfulwebservices.net/ServiceContracts/2008/01"/>
```
{{/callout}}

Documentation about `wsimport` is available here: [http://jax-ws-commons.java.net/jaxws-maven-plugin/wsimport-mojo.html](http://jax-ws-commons.java.net/jaxws-maven-plugin/wsimport-mojo.html).

Documentation about using JAX-WS with Maven is available here: [http://blogs.oracle.com/enterprisetechtips/entry/using_jax_ws_with_maven](http://blogs.oracle.com/enterprisetechtips/entry/using_jax_ws_with_maven).

## Getting an Instance of the WebService Client

Once the Java source files have been generated and compiled, you can use them as a third-party library:

```
WeatherForecastService wfs = new WeatherForecastService(
     new URL("http://www.restfulwebservices.net/wcf/WeatherForecastService.svc?wsdl"),
     new QName("http://www.restfulwebservices.net/ServiceContracts/2008/01", "WeatherForecastService"));
IWeatherForecastService iwfs = wfs.getBasicHttpBindingIWeatherForecastService();

```

The (slightly) tricky part here is to find the actual **WebService client** in the generated classes and the method it provides to get an instance of the **WebService client interface**.

*   The actual **WebService client** is the class with the following annotation: @WebServiceClient(name = "WeatherForecastService",...
    In our example: `WeatherForecastService`
    *   The URL is the one of the WSDL file.
    *   To build the `QName`, we use the `targetNamespace` and `name` attributes of the `<wsdl:definitions>` element in the WSDL file.
        In our example: `<wsdl:definitions name="WeatherForecastService" targetNamespace="http://www.restfulwebservices.net/ServiceContracts/2008/01"...`.

*   The **WebService client interface** is the class with the following annotation: @WebService(name = "IWeatherForecastService",...
    In our example: `IWeatherForecastService`

*   The `WeatherForecastService` class offers the method `getBasicHttpBindingIWeatherForecastService()` that returns an object of type `IWeatherForecastService`.

## Calling a WebService Method

Finally, you can call any method available in the WebService client interface, for instance `IWeatherForecastService#getCitiesByCountry(String country)` which returns the cities of a given country.

```
ArrayOfstring cities = iwfs.getCitiesByCountry("FRANCE");
String message = "Cities of country FRANCE: " + cities.getString();

```

You can learn [here]({{page page='building-a-soap-based-webservice-in-the-nuxeo-platform'}}) how to build a server-side SOAP based WebService in Nuxeo.

## Advanced Client Configuration Using a Configuration XML File

If you are looking how to create some advanced client configuration, since Apache CXF, you'll need some dependencies. The configuration behavior is the same as the server part, and described in the [advanced configuration section]({{page page='building-a-soap-based-webservice-in-the-nuxeo-platform#advanced-configuration'}}) of the [Building a SOAP-Based WebService in the Nuxeo Platform]({{page page='building-a-soap-based-webservice-in-the-nuxeo-platform'}}).
