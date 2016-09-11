---
title: >-
    Configuring a Reverse Proxy to Work with Live Edit and Client Certificate
    Authentication
review:
    comment: ''
    date: ''
    status: ok
labels:
    - authentication
    - certificate
    - reverse-proxy
    - https
    - ssl
    - live-edit
confluence:
    ajs-parent-page-id: '21921891'
    ajs-parent-page-title: HTTP and HTTPS Reverse-Proxy Configuration
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: >-
        Configuring+a+Reverse+Proxy+to+Work+with+Live+Edit+and+Client+Certificate+Authentication
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC60/Configuring+a+Reverse+Proxy+to+Work+with+Live+Edit+and+Client+Certificate+Authentication
    page_id: '21921896'
    shortlink: aIBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/aIBOAQ'
    source_link: >-
        /display/ADMINDOC60/Configuring+a+Reverse+Proxy+to+Work+with+Live+Edit+and+Client+Certificate+Authentication
history:
    - 
        author: Solen Guitter
        date: '2016-05-11 13:52'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2014-11-28 10:53'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2014-11-28 10:35'
        message: Update related pages
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-11-28 10:31'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-10-14 16:54'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-05-15 11:15'
        message: ''
        version: '1'

---
&nbsp;

The configuration below&nbsp; has been tested and was found to work on:

*   Server: Ubuntu Server 12.04 LTS + Nuxeo Platform 5.6,
*   Ubuntu Client: Ubuntu Desktop 12.04 LTS + Firefox + Nuxeo LiveEdit Protocol Handler 0.5.2,
*   Windows Client: both Windows 7 and Windows XP + Nuxeo LiveEdit plug-in for IE.

**To configure a reverse proxy to work with Live Edit:**

1.  After installing Apache server, enable site SSL and necessary modules using the commands below:

    ```
    a2ensite default-ssl

    a2enmod ssl proxy proxy_http headers rewrite

    service apache2 restart
    ```

2.  Create a directory called `access_control` in `/etc/apache2/` and put control directives into any file in that directory, for example:

    ```
    SSLRequire %{SSL_CLIENT_S_DN_Email} in {"email_address_of_allowed_user@allowed.com"}
    SSLRequire  %{SSL_CLIENT_S_DN_O} in {"Allowed Organization"}
    ```

    This directory will be used in the configuration file.

3.  Create a directory called `certs` in `/etc/ssl/` and put the CA certificates into that directory.
4.  In a terminal, go to the directory&nbsp;`/etc/ssl/certs` and execute "`c_rehash .`" to create the required symbolic links.
5.  Edit the site configuration file `(/etc/apache2/sites-enabled/default-ssl`) with the content below.
    This configuration enables reverse proxy through HTTPS, and also enables authentication by client certificate.

    ```
    <IfModule mod_ssl.c>
    <VirtualHost *:443>
            ServerName nutest.test.com
            ServerAlias nutest.test.com
            ProxyPass / http://127.0.0.1:8080/
            ProxyPassReverse / http://127.0.0.1:8080/
            RequestHeader append nuxeo-virtual-host "https://nutest.test.com/"
            ServerAdmin webmaster@localhost
            <ProxyMatch ^http\://127\.0\.0\.1\:8080(?!((/nuxeo/restAPI/)|(/nuxeo/nxliveedit.face)))>
                    SSLRequireSSL
                    Include /etc/apache2/access_control
                    SSLCACertificatePath /etc/ssl/test_certs/
                    SSLVerifyClient optional
                    SSLVerifyDepth  3
                    RewriteEngine        on
                    RewriteCond     %{SSL:SSL_CLIENT_VERIFY} !=SUCCESS
                    RewriteRule     .? - [F]
                    ErrorDocument 403 "ACCESS DENIED: You need a client side certificate issued by EAST IP to access this site"
            </ProxyMatch>
            ErrorLog ${APACHE_LOG_DIR}/error.log
            LogLevel warn
            CustomLog ${APACHE_LOG_DIR}/ssl_access.log combined
            SSLEngine on
            SSLCertificateFile    /etc/ssl/certs/nutest.pem
            SSLCertificateKeyFile /etc/ssl/private/nutest.key
            BrowserMatch "MSIE [2-6]" \
                    nokeepalive ssl-unclean-shutdown \
                    downgrade-1.0 force-response-1.0
            BrowserMatch "MSIE [17-9]" ssl-unclean-shutdown
    </VirtualHost>
    </IfModule>
    ```

    `ServerName` and `ServerAlias` must be set for LiveEdit to work on certain Java versions. See [http://answers.nuxeo.com/questions/4609/nuxeo-live-edit-throws-a-java-npe](http://answers.nuxeo.com/questions/4609/nuxeo-live-edit-throws-a-java-npe).

    `ProxyPass`, `ProxyPassReverse` and `RequestHeader` directives are standard setup to enable reverse proxy. See the Reverse proxy with `mod_proxy` section.

    `SSLCertificateFile` and `SSLCertificateKeyFile` provide the server certificate and private key.

    About the `<ProxyMatch...>` block:

    *   It enables client certificate authentication. The regular expression in this directive matches PROXYED resource, which includes all but two resources: `/nuxeo/restAPI/` and `/nuxeo/nxliveedit.face`. The reason for exclusion of the two resources is that the LiveEdit plug-in will not provide client certificate for server to verify. Therefore, to walk around this problem, server do not request client certificate for resources accessed by the LiveEdit plug-in.
    *   `SSLRequireSSL` requires SSL connection.
    *   `Include /etc/apache2/access_control` includes files in the configured directory into this configuration. Included files check up the client certificates.
    *   `SSLCACertificatePath` specifies the directory where the trusted CA certificates are placed. Only client certificates issued by the trusted CAs can be accepted. Alternatively, if you use just a few certificates, you can use `SSLCACertificateFile` directive instead of `SSLCACertificatePath`.
    *   `SSLVerifyDepth` specifies the depth of trust link. Increase the number if the trust link is long.
    *   `SSLVerifyClient` is set to "optional" to allow the `RewriteEngine` to work, and, with the rest of directives, provide a better error message when client certificate is rejected.

    The rest of the configuration is from the standard configuration template.

6.  On the client side, import the client certificate into your web browser and try to access and log in to Nuxeo. If it does not work, check the reverse proxy and client certificate authentication settings, as well as the log files on server (`/var/log/apache2/ssl_access.log`).
7.  If the client uses LiveEdit, and the issuer of the client certificate is not trusted by the Java Runtime Environment (JRE) on client end in which the LiveEdit plug-in runs, import the issuer's certificate into the JRE's cacerts keyring with the JRE's keytool:

    ```
    keytool -importcert -trustcacerts -alias alias_for_your_ca -file your_ca_cert.pem -keystore /opt/jdk1.7.0_09/jre/lib/security/cacerts 
    ```

<div>If in any case LiveEdit does not work and throw a Java exception, do the follows to diagnose the problem:</div>

<div>

1.  Find the log file for the plug-in.
    For Firefox, look at "`Tools` > `Add-ons` > `Nuxeo LiveEdit Protocol Handler` > `Preferences`" and find the working directory.
    For Windows, search for the log file under the user directory. The log file may exist only AFTER the Java exception is thrown and named "`nuxeo-liveedit-openoffice-extension.log`".
2.  Inspect the log file and search for solution.
    The log file may contain the complete stack dump and other information to help to diagnose the problem.

&nbsp;

* * *

</div>

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Configuration Examples]({{page page='configuration-examples'}})
*   [HTTP and HTTPS Reverse-Proxy Configuration]({{page page='http-and-https-reverse-proxy-configuration'}})
*   [Installing Live Edit Silently]({{page page='installing-live-edit-silently'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Live Edit Documentation'}}

*   [Working with Live Edit]({{page space='userdoc60' page='working-with-live-edit'}})
*   [Installing Live Edit]({{page space='userdoc60' page='installing-live-edit'}})
*   [Managing Your Own File with LiveEdit]({{page space='userdoc60' page='managing-your-own-file-with-liveedit'}})

{{/panel}}</div></div>