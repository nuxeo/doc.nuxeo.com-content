---
title: How to store Office files links in Excel when the target files are stored in Nuxeo
description: How to store Office files links in Excel when the target files are stored in Nuxeo
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - runtime-deployment
    - excel
    - office

---
# How to store Office files links in Excel when the target files are stored in Nuxeo?
## Problem
The goal is to store in an Excel file a set of links. These links are permanent links to Word files stored in Nuxeo.  
If one takes the permanent link and put it in a browser, this works fine: the file opens in Word. But when put in Excel, the same link redirects to the Nuxeo root.
## Solution
To make this work, using the BASIC + HTTPS security, the procedure is the following:

### Configure Nuxeo to support HTTPS and associate it a SSL certificate:

CHEAT SHEET: how to configure Nuxeo for the HTTPS protocol:

    nuxeo.templates=default,https
    nuxeo.server.https.port=8443
    nuxeo.server.https.keystoreFile=<PATH TO SSL CERTIFICATE STORED IN A JAVA KEYSTORE>/myjks.jks
    nuxeo.server.https.keystorePass=<PASSWORD OF THE JAVA KEYSTORE>

To create the Java Key Store myjks.jks, follow for instance [JKS tutorial](https://gist.github.com/xdu/2337615) , where the keytool command reads:

    keytool -genkey -keyalg RSA -alias tomcat -keystore myjks.jks -validity 365 -keysize 2048

### In Nuxeo, create a workspace and put it a Word document called TryWord.docx that the Nuxeo user “user1” can read.

The Excel spreadsheet should then contain a cell with the content: **Excel menu > Insert > Link > Insert a link” "https://localhost:8443/nuxeo/nxfile/default/e3254e6c-b300-40c1-81c8-37120183e12c/blobholder:0/TryWord.docx"**
where *e3254e6c-b300-40c1-81c8-37120183e12c* is the Nuxeo document Id.

NOTICE that Office requires that HTTPS is configured if the BASIC authentication is used.

### Configure your Studio project with the XML extension (the authenticationChain is optional)

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

### Import the project in Nuxeo and restart Nuxeo if not in development mode
### Open Excel where you might have to apply the configuration described in <https://support.microsoft.com/fr-fr/help/2698480> (else you might encounter an infinite loop of wait message in OLE)

Click on the link toward TryWord.docx previously inserted in Excel, then enter the Nuxeo credentials of the user “user1” in the Excel popup that appears.
The file TryWord.docx then opens automatically in Word.

NOTICE: Excel seems to store the Nuxeo user “user1” in Windows: you thus must authenticate once, and you will then be authenticated. Thus, these credentials are shared from 1 Excel document to the other

NOTICE: With an HTTPS certificate accepted by Excel, some Excel operations are simpler.

NOTICE: When a Nuxeo user is authenticated once, it is implicitly valid for all cells in the Excel spreadsheet.

If has been reported this procedure to work since Nuxeo LTS 2015 with the Shibboleth authentication (requires Nuxeo 7.10 HF35 or later)


2019-06-01T17:37:31.602Z
## (c) Nuxeo Support Knowledge Base Outline 2019
