---
title: Define a CORS Configuration
description: Learn how to set up a CORS configuration to be able to manipulate and query content or apply workflows using the REST API and the Nuxeo JS client.
review:
    comment: ''
    date: '2017-02-20'
    status: ok
toc: true
tree_item_index: 300
previous_link: nxdoc/rest-api-principles
next_link: nxdoc/log-into-nuxeo-platform

---

## Concepts

Setting up CORS configuration allows requests from other domains to be executed. This is essential if your application is located on a distant server, and a security concern that you should think about. When dealing with your CORS configuration, you need to ask yourself the following questions:

*   Where will calls be allowed from?
*   What kind of calls do I want to allow?

A CORS configuration can be made from Studio by adding an XML extension.

Notice that **only GET, POST, HEAD, OPTIONS methods are allowed by default**. You need to explicitly set the supported methods in your configuration to allow PUT and DELETE calls.

Refer to the [CORS documentation]({{page version='' space='nxdoc' page='cross-origin-resource-sharing-cors'}}) for all applicable configuration options.

### Practice - CORS Configuration

1.  In **Nuxeo Studio** under **Configuration**, select **Advanced Settings** > **XML Extensions**.
2.  Create an XML extension, `RestApiTutorial`, which:
      - only allows requests from https://foobar.com and its subdomains
      - supports the following methods: `GET, PUT, POST, DELETE, HEAD, OPTIONS`
      - only allows requests on the following pattern: `/nuxeo/`

    If you already provided a CORS configuration when you installed the Nuxeo Dev Tools extension, you can either replace it or skip this Practice exercise.
3.  In your Nuxeo instance, deploy the Nuxeo Studio configuration: **ADMIN** > **Update Center** > **Update**.
4.  Restart the instance: **ADMIN** > **System Information** > **Restart Server**.
5.  Open a terminal and launch the following commands to test your configuration, replacing `NUXEO_SERVER` with your Nuxeo Server instance URL.
    {{#> panel type='code' heading='This command should be **denied** by the CORS configuration.'}}
    ```bash
    $ curl --verbose -H "Origin: http://www.nuxeo.com" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: X-Requested-With" -X OPTIONS http://NUXEO_SERVER/nuxeo/site/foobar/upload
    ```
    {{/panel}}

    {{#> panel type='code' heading='This command should be **accepted** by the CORS configuration.'}}
    ```bash
    $ curl --verbose -H "Origin: https://foobar.com" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: X-Requested-With" -X OPTIONS http://NUXEO_SERVER/nuxeo/site/foobar/upload
    ```
    {{/panel}}


{{#> accordian heading='CORS Configuration - Solution' closed='true'}}

```xml
<extension target="org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService" point="corsConfig">
  <corsConfig name="foobar" allowGenericHttpRequests="true"allowOrigin="https://foobar.com"allowSubdomains="true" supportedMethods="GET, PUT, POST, DELETE, HEAD, OPTIONS">
    <pattern>/nuxeo/.*</pattern>
  </corsConfig>
</extension>
```

{{/accordian}}
