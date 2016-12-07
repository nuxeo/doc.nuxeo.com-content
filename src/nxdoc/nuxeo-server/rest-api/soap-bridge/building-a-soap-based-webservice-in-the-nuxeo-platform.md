---
title: Building a SOAP-Based WebService in the Nuxeo Platform
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - soap
    - soap-component
toc: true
confluence:
    ajs-parent-page-id: '950296'
    ajs-parent-page-title: SOAP Bridge
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Building+a+SOAP-Based+WebService+in+the+Nuxeo+Platform
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/Building+a+SOAP-Based+WebService+in+the+Nuxeo+Platform
    page_id: '9273605'
    shortlink: BYGN
    shortlink_source: 'https://doc.nuxeo.com/x/BYGN'
    source_link: /display/NXDOC/Building+a+SOAP-Based+WebService+in+the+Nuxeo+Platform
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2015-11-30 09:54'
        message: 'XDOC-658: Marketplace packages are now called Nuxeo Package'
        version: '20'
    -
        author: Solen Guitter
        date: '2015-08-31 13:56'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-06-30 11:24'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-06-27 11:29'
        message: ''
        version: '17'
    -
        author: Arnaud Kervern
        date: '2014-06-27 11:20'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2014-01-27 11:07'
        message: ''
        version: '15'
    -
        author: Arnaud Kervern
        date: '2014-01-27 10:42'
        message: ''
        version: '14'
    -
        author: Antoine Taillefer
        date: '2012-06-25 14:11'
        message: Migrated to Confluence 4.0
        version: '13'
    -
        author: Antoine Taillefer
        date: '2012-06-25 14:11'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2012-05-16 17:05'
        message: ''
        version: '11'
    -
        author: Antoine Taillefer
        date: '2011-11-17 15:49'
        message: ''
        version: '10'
    -
        author: Antoine Taillefer
        date: '2011-11-16 12:26'
        message: ''
        version: '9'
    -
        author: Antoine Taillefer
        date: '2011-11-16 12:24'
        message: ''
        version: '8'
    -
        author: Antoine Taillefer
        date: '2011-11-15 16:12'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-11-15 15:54'
        message: Fixed typos and formatting
        version: '6'
    -
        author: Antoine Taillefer
        date: '2011-11-15 14:27'
        message: ''
        version: '5'
    -
        author: Antoine Taillefer
        date: '2011-11-15 09:42'
        message: ''
        version: '4'
    -
        author: Antoine Taillefer
        date: '2011-11-14 17:40'
        message: ''
        version: '3'
    -
        author: Antoine Taillefer
        date: '2011-11-14 16:11'
        message: ''
        version: '2'
    -
        author: Antoine Taillefer
        date: '2011-11-14 15:02'
        message: ''
        version: '1'

---
Let's take the example of a simple Nuxeo WebService that exposes a method to create a document in the default repository. The user credentials are passed to the method to log in and open a core session.

## WebService Interface

First you have to define the interface of your WebService, answering the question: "Which methods do I want to expose?"
If we take a look at `NuxeoSampleWS`, a standard signature defines the `createDocument` method.

```
DocumentDescriptor createDocument(String username, String password,
            String parentPath, String type, String name) throws LoginException,
            ClientException;

```

The different parameters are:

*   `username`: used to log in and open a core session
*   `password`: used to log in and open a core session
*   `parentPath`: document parent path
*   `type`: document type
*   `name`: doc name

The return type `DocumentDescriptor` is a simple POJO containing minimal information about a document.

## Webservice Implementation

You just need a few annotations from the `javax.jws` package to implement your SOAP based WebService.

**@WebService**

Allows you to define the actual WebService. You need to provide the following parameters:

*   `name`: the name of the WebService, used as the name of the `wsdl:portType` when mapped to WSDL 1.1.
*   `serviceName`: the service name of the WebService, used as the name of the `wsdl:service` when mapped to WSDL 1.1.

**@SOAPBinding**

Specifies the mapping of the WebService onto the SOAP message protocol. You can provide the following parameters:

*   `style`: defines the encoding style for messages send to and from the WebService. Keep the default value `Style.DOCUMENT`.
*   `use`: defines the formatting style for messages sent to and from the WebService. Keep the default value `Use.LITERAL`.

**@WebMethod**

Exposes a method as a WebService operation. Such a method must be public.

**@WebParam**

Maps a method parameter to a WebService operation parameter. You need to provide the `name` of the parameter.

Take a look at `NuxeoSampleWSImpl` which uses all these annotations:

```
@WebService(name = "NuxeoSampleWebServiceInterface", serviceName = "NuxeoSampleWebService")
@SOAPBinding(style = Style.DOCUMENT)
public class NuxeoSampleWSImpl implements NuxeoSampleWS {

    /** The serialVersionUID. */
    private static final long serialVersionUID = 7220394261331723630L;

    /**
     * {@inheritDoc}
     */
    @WebMethod
    public DocumentDescriptor createDocument(@WebParam(name = "username")
    String username, @WebParam(name = "password")
    String password, @WebParam(name = "parentPath")
    String parentPath, @WebParam(name = "name")
    String name, @WebParam(name = "type")
    String type) throws LoginException, ClientException {
       ...
    }
    ...
}

```

## WebService End Point and URL Mapping

Finally you have to define your WebService as an end point mapped to an URL of the Nuxeo server so it can be accessed in HTTP.
This is done by adding a contribution to the `endpoint` extension point of the `org.nuxeo.ecm.platform.ws.WSEndpointManager`&nbsp;component in your Nuxeo project.

**Tomcat and JBoss 4.x distributions**

```
<extension target="org.nuxeo.ecm.platform.ws.WSEndpointManager" point="endpoint">
  <endpoint name="nuxeosample"
    implementor="org.nuxeo.ecm.samples.ws.server.NuxeoSampleWSImpl"
    address="/nuxeosample" />
</extension>
```

Once your plugin is deployed in the Nuxeo server, the Nuxeo sample WebService WSDL should be available at [http://server:port/nuxeo/webservices/nuxeosample?wsdl](http://serverport).

## {{> anchor 'advanced-configuration'}}Advanced Configuration Requiring a Configuration XML File

Since we moved to [Apache CXF](http://cxf.apache.org/) as a WebService provider, we encapsulate the service definition in our contribution model to prevent CXF Spring dependency. Sometimes, you'll need a specific configuration that will require a configuration XML file, as described in [their documentation](http://cxf.apache.org/docs/configuration.html).

Here are the steps to do that in a Nuxeo way:

1.  Add the following dependencies `spring-core`, `spring-beans`, `spring-context`, `spring-aop`, `spring-expression` and&nbsp; `spring-asm`. Ideally, using a [Nuxeo Package]({{page page='creating-nuxeo-packages'}}).
2.  Deploy your `cxf.xml` file in `nuxeo.war/WEB-INF/classes`, using the `deployment-fragment.xml`.
    And the file will be taken into account.

## How to Create a Client

You can learn how to build a client-side SOAP based WebService in the Nuxeo Platform on the page [Building a SOAP-Based WebService Client in Nuxeo]({{page page='building-a-soap-based-webservice-client-in-nuxeo'}}).
