---
title: Internet Information Services (IIS) Configuration
review:
    comment: ''
    date: ''
    status: ok
labels:
    - iis
    - internet-information-services
    - proxy
toc: true
confluence:
    ajs-parent-page-id: '21921891'
    ajs-parent-page-title: HTTP and HTTPS Reverse-Proxy Configuration
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Internet+Information+Services+%28IIS%29+Configuration
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC60/Internet+Information+Services+%28IIS%29+Configuration
    page_id: '21921829'
    shortlink: JYBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/JYBOAQ'
    source_link: >-
        /display/ADMINDOC60/Internet+Information+Services+%28IIS%29+Configuration
version_override:
    'FT': '/nxdoc/internet-information-services-iis'
    'LTS 2016': 810/nxdoc/internet-information-services-iis
history:
    -
        author: Solen Guitter
        date: '2014-11-28 11:16'
        message: ormattin
        version: '5'
    -
        author: Solen Guitter
        date: '2014-03-25 11:20'
        message: Added section "Preserving the Host Header"
        version: '4'
    -
        author: Solen Guitter
        date: '2013-10-14 17:04'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2013-07-11 11:41'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-07-11 01:09'
        message: ''
        version: '1'

---
{{#> callout type='info' }}

This documentation is a draft version as it was never tested in production. [Please give us feedback](http://answers.nuxeo.com), we will take care of your questions about this configuration. You can also share configuration improvements with the community [on answers.nuxeo.com](http://answers.nuxeo.com).

{{/callout}}

This documentation gives you the guidelines to install a Nuxeo instance on a Windows Server and use IIS as a frontal web server. This documentation is more focused on the IIS configuration. For more details about the installation of the Nuxeo Platform or IIS, please refer to the relevant documentation.

Requirements:

*   Windows 2008 or greater,
*   Java 6 or above (for Nuxeo 5.6) and Java 7 or above (for Nuxeo 5.7.1 and greater),
*   IIS 7 or above with ASP.NET role service enabled,
*   Nuxeo 5.6 or greater installed.

## Configuration

### Nuxeo Installation

1.  [Check Java is correctly installed]({{page page='hardware-and-software-requirements#java-check'}}).
2.  Download the [Nuxeo Windows distribution](http://community.nuxeo.com/static/releases/) (.exe).
3.  [Install the Nuxeo Platform]({{page page='installing-the-nuxeo-platform-on-windows'}}).
4.  [Start the Nuxeo instance]({{page page='server-start-and-stop#start-windows'}}).
5.  Open the Browser from the Windows Server (firewalls must be enabled) at the address `http://NUXEO_SERVER/nuxeo`.
6.  [Configure the server]({{page page='setup#wizard'}}), but in General Settings, replace IP Address 0.0.0.0 by 127.0.0.1 to limit Tomcat to local answers.

### Enabling Web Server (IIS)

1.  Connect as Administrator on the Windows Server.
2.  In the Server Manager, click on **Add Roles and Features**.
3.  Select **Web Server (IIS)**.
4.  Leave the default configuration and validate.

### Activating the Application Request Routing Add-On

1.  [Download the "Application Request Routing" addon](http://www.iis.net/downloads/microsoft/application-request-routing).
2.  Run the command:

    ```
    net stop was /y
    ```

    It might not be started, so ignore errors here.

3.  Run the command:

    ```
    net stop wmsvc /y
    ```

    It might not be started, so ignore errors here.

4.  Execute the&nbsp;downloaded .exe file and accept the default configuration.

{{#> callout type='info' heading='If you have errors during the "Application Request Routing" installation'}}

*   Check that Windows Service Pack is up-to-date (**Start** > **Settings** > **Control Panel** > **Automatic Updates**).
*   Also check the requirements (Windows version, etc.).

{{/callout}}

### Configuring IIS

#### Enabling the Rewrite Feature

1.  Go into the **Administration Tools** panel.
2.  Open **Internet Information Service (IIS) Manager**.
3.  Select the local server node on the left panel.
4.  Click on "Application Request Routing" and open the feature.
5.  Edit the server proxy settings:

    1.  Check the "Enable Proxy" box.
    2.  Leave the default values.
6.  Save the configuration.

#### Adding the Rewrite Rule

1.  In Internet Information Service (IIS) Manager, select a server node on the left panel.
2.  Open **URL Rewrite**.
3.  Click on **Add a rule(s)&hellip;**.
4.  Select **Inbound rule** > **Blank rule**.
    In the following steps, if a field is not specified, leave the default value.
5.  In **Match URL**:

    *   Name: Nuxeo Inbound
    *   Request URL: Match the pattern
    *   Pattern: `(nuxeo.*)`
6.  In **Server Variables**:

    *   Server Variable Name: `HTTP_NUXEO_VIRTUAL_HOST`
    *   Value: `{HTTP_HOST}`
    *   Check the box.
7.  In **Action**:

    *   Action type: Rewrite
    *   `http://127.0.0.1:8080/{R:1}`

{{#> callout type='info' }}

If your Nuxeo server is not hosted by the IIS server, replace 127.0.0.1 by the internal IP address of the Nuxeo server. Of course, IIS server must reach this internal IP Address.

{{/callout}}

#### Preserving the Host Header

We've had report that the following is needed as well:

```
appcmd.exe set config -section:system.webServer/proxy -preserveHostHeader:true
```

### Enhancing the URL MAX Length Parameter

Windows Web Server defines a default limit for URL paramaters. This limit is set to&nbsp;256 characters. In Nuxeo, parameter length can be greater than this default value.

1.  Open the Window registry: Command + R, and type `regedit`.
2.  Open `HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\HTTP\Parameters`.
3.  Right-click on **Parameters** > **New** > **DWORD**.

    *   Name: `UrlSegmentMaxLength`
    *   Value: 2048
    *   Base: Decimal
4.  Restart the server.

### Testing Your Configuration

We suggest to use a client desktop with Firefox and Firebug installed.

1.  Open Firebug.
2.  In Firebug, click on the **Net** section.
3.  Enable the Net feedback.
4.  Go to [http://iis.servername/nuxeo](http://iis.servername/nuxeo), where `iis.servername` is the name of the server the client can reach.
5.  Connect as Administrator to Nuxeo.
    Each line displayed is a request made by the browser.
6.  Check that each line points to the `iis.servername` and not the 127.0.0.1 address without error (no red lines).

If you have errors, please check the next section.

## Typical Errors

### Error 1

> 502 - Web server received an invalid response while acting as a gateway or proxy server.
>
> There is a problem with the page you are looking for, and it cannot be displayed. When the web server (while acting as a gateway or proxy) contacted the upstream content server, it received an invalid response from the content server.

In the rule you defined the target is&nbsp;[http://internal.address.ip:8080](http://internal.address.ip:8080). This error might occur because the server can't&nbsp;reach this address.

### Error 2

> 500 - Internal server error.
>
> There is a problem with the resource you are looking for, and it cannot be displayed.

This error means you made a mistake during the rule configuration and about the server variable name.

### Error 3

If Nuxeo has a strange behavior, for instance:

*   you can't write in a text field,
*   every time you try to type something into a text field, the focus changes to the search field,
*   the Home Dashboard is empty
*   etc&hellip;

These problems may occur because you didn't [enhance the URL MAX Length parameter](#enhancing-the-url-max-length-parameter).

You can look into your firebug if some requests returned a 401, with a "bad url" message.
