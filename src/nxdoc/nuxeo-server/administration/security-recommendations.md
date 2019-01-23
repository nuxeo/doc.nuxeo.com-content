---
title: Security Recommendations
review:
    comment: ''
    date: '2016-12-06'
    status: ok
toc: true
labels:
    - lts2016-ok
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '31032113'
    ajs-parent-page-title: Administration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Security+Recommendations
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Security+Recommendations'
    page_id: '31035311'
    shortlink: r4-ZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/r4-ZAQ'
    source_link: /display/NXDOC/Security+Recommendations
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-06-20 09:27'
        message: ix ancho
        version: '10'
    -
        author: Solen Guitter
        date: '2016-06-20 09:26'
        message: ''
        version: '9'
    -
        author: Pierre-Gildas Millon
        date: '2016-06-09 12:21'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2016-06-08 12:28'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2016-06-08 12:19'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2016-06-07 13:51'
        message: review
        version: '5'
    -
        author: Pierre-Gildas Millon
        date: '2016-06-07 09:30'
        message: ''
        version: '4'
    -
        author: Pierre-Gildas Millon
        date: '2016-06-03 14:09'
        message: ''
        version: '3'
    -
        author: Pierre-Gildas Millon
        date: '2016-06-03 14:08'
        message: ''
        version: '2'
    -
        author: Pierre-Gildas Millon
        date: '2016-06-03 13:23'
        message: ''
        version: '1'

---
This page presents some security recommendations, applicable through configuration files.

## Tomcat Web Server

The Tomcat server included in the Nuxeo distribution is already configured following the main security recommendations.

Additionally, you can consider removing or restricting the access to the default Tomcat tools (admin and manager webapps).

### Avoid Sending the Tomcat Version

{{#> panel type='code' heading='nuxeo.conf'}}
```
nuxeo.server.signature=Nuxeo
```
{{/panel}}

## Apache Web Server

When using Apache HTTP Server as a proxy in front of your Nuxeo instance, you shall harden it following those rules.

### Clean the Server Header

{{#> panel type='code' heading='apache.conf'}}
```
# ServerTokens
# This directive configures what you return as the Server HTTP response
# Header. The default is 'Full' which sends information about the OS-Type
# and compiled in modules.
# Set to one of:  Full | OS | Minimal | Minor | Major | Prod
# where Full conveys the most information, and Prod the least.
ServerTokens Prod

# Optionally add a line containing the server version and virtual host
# name to server-generated pages (internal error documents, FTP directory
# listings, mod_status and mod_info output etc., but not CGI generated
# documents or custom error documents).
# Set to "EMail" to also include a mailto: link to the ServerAdmin.
# Set to one of:  On | Off | EMail
ServerSignature Off
```
{{/panel}}

### Disallow TRACE Requests

{{#> panel type='code' heading='apache.conf'}}
```
# Allow TRACE method
#
# Set to "extended" to also reflect the request body (only for testing and
# diagnostic purposes).
#
# Set to one of:  On | Off | extended
TraceEnable Off 
```
{{/panel}}

### ETag Headers Generation

Do not use filesystem sensitive information to generate the ETag headers.

{{#> panel type='code' heading='nuxeo-vhost.conf'}}
```
FileETag None
```
{{/panel}}

### Prevent "Clickjacking"

{{#> panel type='code' heading='nuxeo-vhost.conf'}}
```
Header always append X-Frame-Options SAMEORIGIN
```
{{/panel}}

### Prevent Cross Site Scripting - XSS

{{#> panel type='code' heading='nuxeo-vhost.conf'}}
```
Header set X-XSS-Protection "1; mode=block"
```
{{/panel}}

### HTTP Protocol Version

Allow HTTP Protocol version 1.1 only.

{{#> panel type='code' heading='nuxeo-vhost.conf'}}
```
RewriteEngine On
RewriteCond %{THE_REQUEST} !HTTP/1.1$
RewriteRule .* - [F]
```
{{/panel}}

### Prevent "Slowloris" Attacks

{{#> panel type='code' heading='nuxeo-vhost.conf'}}
```
Timeout 60
```
{{/panel}}

### SSL Ciphers

Accept SSL high quality ciphers only.

{{#> panel type='code' heading='nuxeo-vhost.conf'}}
```
SSLCipherSuite HIGH:!MEDIUM:!aNULL:!MD5:!RC4
```
{{/panel}}

### SSL Protocols

Accept strong SSL protocols only.

{{#> panel type='code' heading='nuxeo-vhost.conf'}}
```
SSLProtocol -all +TLSv1.2
```
{{/panel}}

### Cookies

Secure the cookies (when using SSL).

{{#> panel type='code' heading='nuxeo-vhost.conf'}}
```
Header edit Set-Cookie ^(.*)$ $1;Secure
```
{{/panel}}

### Use mod_security

<https://www.modsecurity.org/>
