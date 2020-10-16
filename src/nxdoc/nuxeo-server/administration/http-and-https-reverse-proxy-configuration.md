---
title: HTTP and HTTPS Reverse-Proxy Configuration
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - reverse-proxy
    - mcedica
    - https
    - apache
    - cache
    - url
    - link-update
    - proxy
    - nxdoc-740
    - multiexcerpt-include
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '31032113'
    ajs-parent-page-title: Administration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: HTTP+and+HTTPS+Reverse-Proxy+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/HTTP+and+HTTPS+Reverse-Proxy+Configuration'
    page_id: '6029592'
    shortlink: GAFc
    shortlink_source: 'https://doc.nuxeo.com/x/GAFc'
    source_link: /display/NXDOC/HTTP+and+HTTPS+Reverse-Proxy+Configuration
tree_item_index: 600
version_override:
    LTS 2015: 710/admindoc/http-and-https-reverse-proxy-configuration
    '6.0': 60/admindoc/http-and-https-reverse-proxy-configuration
    '5.8': 58/admindoc/http-and-https-reverse-proxy-configuration
history:
    -
        author: Manon Lumeau
        date: '2016-09-29 09:44'
        message: ''
        version: '40'
    -
        author: Gildas Lefevre
        date: '2016-09-28 13:50'
        message: ''
        version: '39'
    -
        author: Gildas Lefevre
        date: '2016-09-28 13:41'
        message: Add configuration between ELB and Apache
        version: '38'
    -
        author: Solen Guitter
        date: '2016-02-01 16:31'
        message: ''
        version: '37'
    -
        author: Vladimir Pasquier
        date: '2015-12-21 21:13'
        message: ''
        version: '36'
    -
        author: Mathieu Guillaume
        date: '2015-12-08 11:37'
        message: ''
        version: '35'
    -
        author: Mathieu Guillaume
        date: '2015-12-08 11:28'
        message: ''
        version: '34'
    -
        author: Solen Guitter
        date: '2015-11-24 08:42'
        message: Add link to page Special HTTP Headers
        version: '33'
    -
        author: Thierry Martins
        date: '2015-11-23 09:58'
        message: ''
        version: '32'
    -
        author: Solen Guitter
        date: '2015-11-23 09:52'
        message: Format cleanup
        version: '31'
    -
        author: Solen Guitter
        date: '2015-11-23 09:45'
        message: Titile capitalization
        version: '30'
    -
        author: Thierry Martins
        date: '2015-11-20 13:48'
        message: ''
        version: '29'
    -
        author: Thierry Martins
        date: '2015-11-20 13:45'
        message: ''
        version: '28'
    -
        author: Vladimir Pasquier
        date: '2015-11-16 20:55'
        message: ''
        version: '27'
    -
        author: Vladimir Pasquier
        date: '2015-11-16 20:54'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2015-11-09 15:55'
        message: Removing link Live Edit page
        version: '25'
    -
        author: Mathieu Guillaume
        date: '2015-09-18 08:17'
        message: ''
        version: '24'
    -
        author: Vincent Dutat
        date: '2015-06-16 18:18'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2015-04-08 09:26'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2015-02-19 10:36'
        message: fix deployment-fragment.xml name
        version: '21'
    -
        author: Solen Guitter
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
The Nuxeo webapp can be virtual hosted behind a HTTP/HTTPS reverse proxy, like Apache, NGINX, IIS, etc.

{{#> callout type='info' }}

{{{multiexcerpt 'what-is-nuxeo-platform' page='NXDOC:Generic Multi-Excerpts'}}}

{{/callout}}

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

Using a reverse proxy can also be a way to optimize uploads and downloads.

When clients access the Nuxeo server via a WAN with low bandwidth, upload and download can take time: this is bad for the server since it consumes resources:

*   HTTP socket and HTTP thread
*   Memory
*   Transaction and associated JDBC resources

A reverse proxy can be used to buffer uploads and downloads so that uploads and downloads from the Nuxeo server's point of view are always done at a high speed.

![]({{file name='reverse.png'}} ?w=650,border=true)

## Virtual Hosting Configuration for Apache 2.x

### Reverse Proxy with mod_proxy

For this configuration, you will need to load and enable the `mod_proxy` and `mod_proxy_http` modules.

```
ProxyPass /nuxeo/ http://NuxeoServerInternalIp:8080/nuxeo/
ProxyPassReverse /nuxeo/ http://NuxeoServerInternalIp:8080/nuxeo/
ProxyPreserveHost On

```

You can also use rewrite rules to achieve the same result:

```
ProxyVia On
ProxyRequests Off
RewriteEngine On
RewriteRule /nuxeo(.*) http://NuxeoServerInternalIp:8080/nuxeo$1 [P,L]

```

This configuration will allow you to access the Nuxeo Platform webapp via [http://ApacheServer/nuxeo/](http://ApacheServer/nuxeo/).

The Nuxeo webapp will generate the URLs after reading the HTTP header x-forwarded-host.

Unfortunately, this header does not specify the protocol used. So if your Apache is responding to HTTPS, you will need to send the Nuxeo Platform a specific header to indicate the base URL that the webapp must use when generating links.

```
RequestHeader append nuxeo-virtual-host "https://myDomainName/"

```

This will require you to load and activate the `mod_headers` module.

When it is not possible to add this header at the reverse-proxy level, you can use the&nbsp;`nuxeo.virtual.host` parameter in nuxeo.conf instead. This restricts the URLs through which your Nuxeo instance can be accessed though, so use of the header if preferred when possible.

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
RewriteRule ^/mysite/skin/mysite/(.*) http://NuxeoServerInternalIp:8080/nuxeo/site/skin/mysite/$1 [P,L]

RewriteCond %{REQUEST_URI}  ^/mysite/skin/.*
RewriteRule ^/mysite/skin/(.*) http://NuxeoServerInternalIp:8080/nuxeo/site/skin/mysite/$1 [P,L]

RewriteCond %{REQUEST_URI}  ^/mysite/nxthemes-(lib|css)/.*
RewriteRule ^/mysite/(.*) http://NuxeoServerInternalIp:8080/nuxeo/$1 [P,L]

RewriteCond %{REQUEST_URI}  ^/mysite/nxthemes-webwidgets/.*
RewriteRule ^/mysite/(.*) http://NuxeoServerInternalIp:8080/nuxeo/site/$1 [P,L]

RewriteRule ^/mysite/(.*) http://NuxeoServerInternalIp:8080/nuxeo/site/mysite/$1 [P,L]

```

WebEngine also needs to know the base of the site, in this case, an empty string instead of /nuxeo/site. This information is passed using the `mod_headers`:

```
RequestHeader append nuxeo-webengine-base-path ""

```

You can also fetch the static resources from a different path. To do so add a properties to the `nuxeo.properties` file:

```
org.nuxeo.ecm.webengine.skinPathPrefix=/skin/
```

### Reverse Proxy with mod_jk

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
worker.ajp13.host=NuxeoServerInternalIp
worker.ajp13.type=ajp13
worker.ajp13.socket_keepalive=1
worker.ajp13.connection_pool_size=50

```

Once again, if you use HTTPS, you will need to set the Nuxeo-specific header to tell the webapp how to generate URLs:

```
RequestHeader append nuxeo-virtual-host "https://myDomainName/"

```

This will require you to load and activate the `mod_headers` module.

### Secure Headers with Tomcat behind HTTPS Apache

The only need to secure headers (like the SESSIONID) in this type of configuration is to add to the Tomcat web.xml of Nuxeo the following lines:

```
<session-config>
        <session-timeout>30</session-timeout>
        <cookie-config>
          <http-only>true</http-only>
          <secure>true</secure>
        </cookie-config>
    </session-config>
```

&nbsp;

### Secure Headers with mod_headers.so

Without having `HttpOnly` and `Secure` flags in HTTP response header, it is possible to steal or manipulate web application session and cookies.

1.  Enable `mod_headers.so`in Apache instance
2.  Add following entry in `httpd.conf` or `apache2.conf`:

    ```
    Header edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure (>= apache 2.2.4)
    or
    Header set Set-Cookie HttpOnly;Secure (< apache 2.2.4)
    ```

3.  Restart Apache instance

### Configuring HTTP Cache

The Simple cache filter is deprecated, we recommend using the [`filterConfig` extension point of `RequestControllerService`](http://explorer.nuxeo.org/nuxeo/site/distribution/9.10/viewComponent/org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService) .

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

### Configuration Between AWS Elastic Load Balancing (ELB) and Apache

When using Apache as a backend server for ELB, it is really important to pay attention to the configuration of both otherwise you may encounter several performance issues. The ELB is creating connections on the Apache and put them in idle, but if Apache has a way shorter timeout, it will close them before they are actually used. We recommend using a slightly high value for the Apache keep alive timeout than the idle timeout configured on the ELB.

Here is an example of a configuration on Apache (apache2.conf file) and on ELB:

{{#> panel type='code' heading='Apache configuration'}}

```bash
KeepAlive On    
KeepAliveTimeout 300
MaxKeepAliveRequests 100
AcceptFilter http none
```

{{/panel}}

![]({{file name='elb.png'}})

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

## Ngnix Issue

Due to a [Nginx headers filtering](https://trac.nginx.org/nginx/ticket/629#comment:2), you must disable the check on invalid headers:

```
ignore_invalid_headers off
```

Affected [headers]({{page page='special-http-headers'}}) in the Nuxeo Platform are:

*   enrichers.document
*   fetch.document

Otherwise, features like the Permissions tab will not work.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages'}}

- [Internet Information Services (IIS)]({{page page='internet-information-services-iis'}})
- [Nuxeo Clustering Configuration]({{page page='nuxeo-clustering-configuration'}})
- [Default URL Patterns]({{page page='default-url-patterns'}})
- [Navigation URLs]({{page page='navigation-urls'}})
- [Ports Usage and Firewall Considerations]({{page page='ports-usage-and-firewall-considerations'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
