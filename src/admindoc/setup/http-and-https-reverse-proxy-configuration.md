---
title: HTTP and HTTPS Reverse-Proxy Configuration
review:
    comment: ''
    date: ''
    status: ok
labels:
    - proxy
    - reverse-proxy
    - apache
    - cache
    - url
    - https
    - link-update
toc: true
confluence:
    ajs-parent-page-id: '21921866'
    ajs-parent-page-title: Setup
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: HTTP+and+HTTPS+Reverse-Proxy+Configuration
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC60/HTTP+and+HTTPS+Reverse-Proxy+Configuration
    page_id: '21921891'
    shortlink: Y4BOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/Y4BOAQ'
    source_link: /display/ADMINDOC60/HTTP+and+HTTPS+Reverse-Proxy+Configuration
tree_item_index: 700
version_override:
    'FT': 'nxdoc/http-and-https-reverse-proxy-configuration'
history:
    -
        author: Solen Guitter
        date: '2015-02-19 10:36'
        message: ix deployment-fragment.xml nam
        version: '21'
    -
        author: Anonymous
        date: '2014-11-28 13:55'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-11-28 00:14'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-04-16 10:52'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-03-04 10:43'
        message: ''
        version: '17'
    -
        author: Julien Carsique
        date: '2014-03-03 18:33'
        message: ''
        version: '16'
    -
        author: Vladimir Pasquier
        date: '2014-03-03 18:22'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-11-14 11:34'
        message: ''
        version: '14'
    -
        author: Thierry Delprat
        date: '2013-11-13 12:01'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2013-10-10 17:02'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-07-11 12:01'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-07-11 12:00'
        message: Formatting
        version: '10'
    -
        author: Alain Escaffre
        date: '2013-07-11 01:11'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-05-15 11:17'
        message: Added related pages
        version: '8'
    -
        author: Stéphane Lacoin
        date: '2012-09-10 12:22'
        message: Migrated to Confluence 4.0
        version: '7'
    -
        author: Stéphane Lacoin
        date: '2012-09-10 12:22'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-07-27 15:10'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2011-03-24 16:20'
        message: missing ProxyPreserveHost
        version: '4'
    -
        author: Solen Guitter
        date: '2011-03-11 12:22'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-03-03 17:23'
        message: ''
        version: '2'
    -
        author: Quentin Lamerand
        date: '2011-03-03 16:00'
        message: ''
        version: '1'

---
&nbsp;The Nuxeo webapp can be virtual hosted behind a HTTP/HTTPS reverse proxy, like Apache, NGINX, IIS, etc.

## Motivations for Virtual Hosting

Virtual hosting provides several advantages:

*   Support for HTTPS
    HTTPS support in Apache is easy and flexible to setup. Apache can also be used to handle certificate authentication.

*   URL filtering
    You can use Apache filtering tools to limit the URLs that can be accessed via the reverse proxy.

*   Handle HTTP cache for static resources
    The Nuxeo Platform generates standard HTTP cache headers for all static resources (images, JavaScript...). These resources are by default cached on the client side (in the browser cache). For performance reasons, it can be useful to host these resources in the reverse proxy cache.

This page focuses on the Apache Configuration.

## Bandwidth and Transactions Optimizations

Using a reverse proxy can also be a wait to optimize uploads and downloads.

When clients access the Nuxeo server via a WAN with low bandwidth, upload and download can take time: this is bad for the server since it consumes resources:

*   HTTP socket and HTTP thread
*   Memory
*   Transaction and associated JDBC resources

A reverse proxy can be used to buffer uploads and downloads so that uploads and downloads from the Nuxeo server's point of view are always done at a high speed.

![]({{file name='reverse.png'}} ?w=650,border=true)

## Virtual Hosting Configuration for Apache 2.x

### Reverse Proxy With mod_proxy

For this configuration, you will need to load and enable the `mod_proxy` and `mod_proxy_http` modules.

```
ProxyPass /nuxeo/ http://Nuxeo5ServerInternalIp:8080/nuxeo/
ProxyPassReverse /nuxeo/ http://Nuxeo5ServerInternalIp:8080/nuxeo/
ProxyPreserveHost On

```

You can also use rewrite rules to achieve the same result:

```
ProxyVia On
ProxyRequests Off
RewriteEngine On
RewriteRule /nuxeo(.*) http://Nuxeo5ServerInternalIp:8080/nuxeo$1 [P,L]

```

This configuration will allow you to access the Nuxeo Platform webapp via [http://ApacheServer/nuxeo/](http://ApacheServer/nuxeo/).

The Nuxeo webapp will generate the URLs after reading the HTTP header x-forwarded-host.

Unfortunately, this header does not specify the protocol used. So if your Apache is responding to HTTPS, you will need to send the Nuxeo Platform a specific header to indicate the base URL that the webapp must use when generating links.

```
RequestHeader append nuxeo-virtual-host "https://myDomainName/"

```

This will require you to load and activate the `mod_headers` module.

And if you have a "client denied by server configuration" error, you must check the access control directives of `mod_proxy`:

```
<Proxy *>
  Order Deny,Allow
  Deny from all
  Allow from 192.168
</Proxy>

```

### Reverse Proxy a WebEngine Site to a myexample.com/mysite URL

You need the same configuration from the first section. It is advised to first get it to work before proxying exclusively a WebEngine site.

A site request queries both from its own URL (/nuxeo/site/mysite) but also gets static resources from the root (/nuxeo/nxthemes ...).
A rewrite configuration for mysite would look like:

```
RewriteRule ^/nuxeo$   /nuxeo/  [P,L]
RewriteRule ^/mysite$   /mysite/  [P,L]

RewriteCond %{REQUEST_URI}  ^/mysite/skin/mysite/.*
RewriteRule ^/mysite/skin/mysite/(.*) http://127.0.0.1:8080/nuxeo/site/skin/mysite/$1 [P,L]

RewriteCond %{REQUEST_URI}  ^/mysite/skin/.*
RewriteRule ^/mysite/skin/(.*) http://127.0.0.1:8080/nuxeo/site/skin/mysite/$1 [P,L]

RewriteCond %{REQUEST_URI}  ^/mysite/nxthemes-(lib|css)/.*
RewriteRule ^/mysite/(.*) http://127.0.0.1:8080/nuxeo/$1 [P,L]

RewriteCond %{REQUEST_URI}  ^/mysite/nxthemes-webwidgets/.*
RewriteRule ^/mysite/(.*) http://127.0.0.1:8080/nuxeo/site/$1 [P,L]

RewriteRule ^/mysite/(.*) http://127.0.0.1:8080/nuxeo/site/mysite/$1 [P,L]

```

WebEngine also needs to know the base of the site, in this case, an empty string instead of /nuxeo/site. This information is passed using the `mod_headers`:

```
RequestHeader append nuxeo-webengine-base-path ""

```

You can also fetch the static resources from a different path. To do so add a properties to the `nuxeo.properties` file:

```
org.nuxeo.ecm.webengine.skinPathPrefix=/skin/
```

### Reverse Proxy With mod_jk

{{#> callout type='warning' }}

The `AJP` connector may lock threads if you're not using the `APR` implementation. Please read the [native Tomcat documentation](http://tomcat.apache.org/native-doc/) for activating the `APR` implementation on your system. On Linux you just have to install the package `libtcnative-1`.

{{/callout}}

`mod_jk` allows you to communicate between Apache and Tomcat via the ajp1.3 protocol.

```
JkWorkersFile /etc/apache2/jk/workers.properties
JkLogFile     /var/log/mod_jk.log
JkLogLevel    info
JkMount /nuxeo ajp13
JkMount /nuxeo/* ajp13

```

The `workers.properties` file will contain the list of Nuxeo Platform Tomcat servers. The AJP13 Tomcat listener should be enabled by default on port 8009.

```
worker.list=ajp13
worker.ajp13.port=8009
worker.ajp13.host=Nuxeo5ServerInternalIp
worker.ajp13.type=ajp13
worker.ajp13.socket_keepalive=1
worker.ajp13.connection_pool_size=50

```

Once again, if you use HTTPS, you will need to set the Nuxeo-specific header to tell the webapp how to generate URLs:

```
RequestHeader append nuxeo-virtual-host "https://myDomainName/"

```

This will require you to load and activate the `mod_header` module.

### Configuring HTTP Cache

The Simple cache filter is deprecated, we recommend using the [`filterConfig` extension point of `RequestControllerService`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewComponent/org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService) .

#### RequestControllerService's Filter Extension Point

This extension point lets you contribute customized filter for a given pattern URL.

{{#> panel type='code' heading='Example of a filterConfig Registration'}}

```
 <extension target="org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService"
  point="filterConfig">

   <filterConfig name="filterName" transactional="true" synchonize="true"
     cached="true" private="true" cachetime="3600">
   <pattern>/nuxeo/urlPattern/.*</pattern>
   </filterConfig>
 </extension>

```

{{/panel}}

This contribution will ensure that every pattern matching URL will go through NuxeoRequestControllerFilter. The header of the corresponding request will be modified according to the extension point configuration. Here is a list of the possible options:

*   `filterConfig`

    *   name: name of the Filter.
    *   transactional: use transaction.
    *   synchonize: is synchronized.
    *   cached: if true, adds cache-control to the header.
    *   cacheTime: cache duration.
    *   private: if true, cache is private, public if false.
*   `pattern`: URL pattern to match

#### Using Simple Cache Filter

The Nuxeo webapp includes a servlet filter that will automatically add header cache to some resources returned by the server.

By using the `deployment-fragment.xml` you can also put some specific resources behind this filter:

```
<extension target="web#FILTER">
  <filter-mapping>
    <filter-name>simpleCacheFilter</filter-name>
    <url-pattern>/MyURLsToCache/*</url-pattern>
  </filter-mapping>
</extension>

```

When the Nuxeo Platform is virtual hosted with apache you can use `mod_cache` to use the reverse-proxy as cache server.

You can also use Squid or any other caching system that is compliant with the standard HTTP caching policy.

## Nuxeo Tomcat HTTPS Configuration

{{#> callout type='warning' }}

Configuring Tomcat in HTTPS is not recommended. Please follow instructions above to configure Apache server.&nbsp;

{{/callout}}

If you need to configure your Nuxeo Tomcat in HTTPS, the platform provides an&nbsp;`HTTPS` configuration template for this purpose:

Add `https` to the `nuxeo.templates` property then edit the related properties.

{{#> panel type='code' heading='Sample configuration of properties related to the "https" template'}}

```text
nuxeo.server.https.port=8443
nuxeo.server.https.keystoreFile=/path/to/keystore
nuxeo.server.https.keystorePass=password
```

{{/panel}} {{#> callout type='info' heading='To create your keystore using Java'}}

keytool -genkey -alias tomcat -keyalg RSA

{{/callout}}

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages'}}

*   [Configuring a Reverse Proxy to Work with Live Edit and Client Certificate Authentication]({{page page='configuring-a-reverse-proxy-to-work-with-live-edit-and-client-certificate-authentication'}})
*   [Internet Information Services (IIS) Configuration]({{page page='internet-information-services-iis-configuration'}})
*   [Default URL Patterns]({{page space='nxdoc60' page='default-url-patterns'}})
*   [Navigation URLs]({{page space='nxdoc60' page='navigation-urls'}})
*   [Firewall Consideration]({{page page='firewall-consideration'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
