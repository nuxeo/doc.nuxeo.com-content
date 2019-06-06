---
title: How to link 2 Excel cells when the Excel files are stored in Nuxeo
description: How to link 2 Excel cells when the Excel files are stored in Nuxeo
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - runtime-administration
    - excel
    - office

---
# How to link 2 Excel cells when the Excel files are stored in Nuxeo?
## Problem statement
Is it possible to link 2 cells of 2 Excel files stored in Nuxeo?
What would be the procedure to reach that goal?
## Solution
We will assume the BASIC authentication with HTTPS is what you require from a security standpoint, as the BASIC authentication is supported both by Excel and Nuxeo.  

In Nuxeo, place 2 Excel files TestMe.xslx and Referer.xslx that can be read by the Nuxeo user “user1”  

Referer.xslx contains a cell with content

    ='https://localhost:8443/nuxeo/nxfile/default/6b68c06b-3815-4ea2-b513-061f62ddaaa0/blobholder:0/[TestMe.xlsx]Tabelle1'!A1

where *6b68c06b-3815-4ea2-b513-061f62ddaaa0* Is the file ID

NOTICE that from a security point of view, HTTPS is mandatory if BASIC security us used, and Microsoft enforces this restriction, thus the configuration of Nuxeo with HTTPS as a protocol is a mandatory step.

Configure your Studio project with the XML extension (the AuthenticationChain is optional):

    <extension point="chain" target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService">
        <authenticationChain>
          <plugins>
            <plugin>FORM_AUTH</plugin>
            <plugin>WEBSERVICES_AUTH</plugin>
          </plugins>
        </authenticationChain>
    </extension>
    <extension point="authenticators" target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService">
      <authenticationPlugin class="org.nuxeo.ecm.platform.ui.web.auth.plugins.BasicAuthenticator" name="BASIC_AUTH2">
        <parameters>
          <parameter name="AutoPrompt">true</parameter>
        </parameters>
      </authenticationPlugin>
    </extension>
      <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService" point="specificChains">
        <specificAuthenticationChain name="file_auth_chain">
            <urlPatterns>
              <url>(.*)/nuxeo/nxfile/default/.*</url>
            </urlPatterns>
            <replacementChain>
                <plugin>BASIC_AUTH2</plugin>
            </replacementChain>
        </specificAuthenticationChain>
    </extension>

Import your project in Nuxeo (and if not in development mode, restart Nuxeo)

+ Download from Nuxeo the Excel spreadsheet Referer.xlsx in your terminal and open it with Excel
+ Activate the “automatic links update” (Excel security about downloaded files)
+ Excel not having authorization, the automated link update does not happen automatically, unless you configured Anonymous access in Nuxeo and Nuxeo permissions allow for it, in which case you can skip the next steps required by security)

1. Goto Excel > Data > Update Links
2. Press “Verify the state” and accept everything
3. An Excel popup requests the authentication credentials of the Nuxeo user “user1”.
4. Request the “automatic links update” => values in Referer.xslx are automatically updated from TestMe.xlsx stored in Nuxeo.

NOTICE: With an HTTPS certificate accepted by Excel, some Excel operations are simpler.

NOTICE: When a Nuxeo user is authenticated once, it is implicitly valid for all cells in the Excel spreadsheet.

CHEAT SHEET: how to configure Nuxeo for the HTTPS protocol:

    nuxeo.templates=default,https
    nuxeo.server.https.port=8443
    nuxeo.server.https.keystoreFile=<PATH TO SSL CERTIFICATE STORED IN A JAVA KEYSTORE>/myjks.jks
    nuxeo.server.https.keystorePass=<PASSWORD OF THE JAVA KEYSTORE>

To create the Java Key Store *myjks.jks*, follow for instance  [JKS tutorial](https://gist.github.com/xdu/2337615) , where the command reads:

    keytool -genkey -keyalg RSA -alias tomcat -keystore myjks.jks -validity 365 -keysize 2048

NOTICE: Excel seems to store the Nuxeo user “user1” in Windows: you thus must authenticate once, and you will then be authenticated. Thus, these credentials are shared from 1 Excel document to the other.


2019-06-01T17:37:50.850Z
## (c) Nuxeo Support Knowledge Base Outline 2019
