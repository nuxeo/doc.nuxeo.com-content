---
title: Digital Signature
review:
    comment: ''
    date: ''
    status: ok
labels:
    - digital-signature
toc: true
confluence:
    ajs-parent-page-id: '17334336'
    ajs-parent-page-title: Additional Modules
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Digital+Signature
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Digital+Signature'
    page_id: '17794462'
    shortlink: noUPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/noUPAQ'
    source_link: /display/NXDOC58/Digital+Signature
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 07:40'
        message: ''
        version: '3'
    - 
        author: Manon Lumeau
        date: '2016-03-10 15:53'
        message: 'Merge ADMINDOC with NXDOC  '
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-12-04 16:18'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

{{{excerpt 'USERDOC58:Digital Signature'}}}

{{! excerpt}}

Digital Signature implements a layout on signed documents to display the signature information, which can be customized.

{{! /excerpt}}

## Installation

The Digital Signature package requires no specific installation steps. It can be installed like any other package&nbsp;[from the Marketplace or from the Admin Center]({{page space='admindoc58' page='installing-a-new-package-on-your-instance'}}).

After the package is installed, users get some new tabs:

*   a Certificates tab in the Home,
    ![]({{file name='signature-home-certificate-tab.png' space='userdoc58' page='digital-signature'}} ?w=650,border=true)
*   a Signature tab on documents.
    ![]({{file name='signature-tab.png' space='userdoc58' page='digital-signature'}} ?w=650,border=true)

## Configuration

The Digital Signature package provides a sample root certificate populated with sample company's values. However you will need to configure the package so that documents are signed with your company's certificate and information instead of the sample one.

### Setting up the Local Root Certificate

To disambiguate, the term "root certificate" in this section - and in the configuration of this plugin - relates to the Local Certificate Authority (CA) of your company which is the root of all user certificates. This is not to be confused with the global root Certificate Authority, that is one of the top-most entities of the global "chain of trust".

This plugin's root certificate helps establishing a simple method of user certificate verification, as it can be installed in a PDF reader. The best approach, however, is to have your local Certificate Authority's certificate signed by a higher level CA whose ancestor has been signed by one of the actual root Certificate Authorities. This incurs some setup overhead in the initial stages of the project. This method guarantees, though, a more secure approach to document verification, and frees the end users from having to install certificates in their PDF readers. PDF readers capable of handling security are updated automatically with the global root Certificate Authority information.

![]({{file name='root_certificate_in_Acrobat.png' space='admindoc58' page='digital-signature'}} ?w=650,border=true)

As the keystore configured in the installable package is a sample keystore containing a test configuration, it is required that it be replaced with the client keystore containing the keypair and the certificate to be used for signing user certificates. As of now the certificate+keypair need to be stored in a .jks formatted keystore and configured via the extension mechanism.

The&nbsp;[user certificate generation step]({{page space='userdoc58' page='digital-signature#generating-certificate'}})&nbsp;requires a Certificate Authority certificate (CA) to be set up inside the Nuxeo Platform system as all user certificates have to be signed by a CA with a recognizable identity &mdash; a company rather than a single user. The term local CA can be understood here as "company Certificate Authority" or "system-wide Certificate Authority". Note that there is only one CA certificate per system but each user can have his own certificate.

##### Setting up a CA certificate from a 3rd party authority**&nbsp;
**

For this exercise you will need the following software:

**keytool**: the keytool comes with your JDK (Java Development Kit) installation.

**openssl**: Open SSL

1.  Create a keypair (with alias&nbsp;`pdfcakey`&nbsp;in this example).

    ```
    keytool -genkey -keyalg RSA -alias pdfcakey -keypass password -validity 365 -keysize 1024 -dname "cn=PDF-CA, ou=Headquarters, o=Example Organization, c=US" -keystore pdfca-keystore.jks

    ```

    This creates a keypair (private and public key), and self-signs it automatically.

    If you don't wish to use a 3rd party Certificate Authority to sign your key, you can stop here.

2.  Create a certificate signing request (CSR).

    ```
    keytool -keystore pdfca-keystore.jks -storepass aaaaaa -alias alternatekey -keypass password -certreq -file pdfca.csr

    ```

3.  Submit the CSR to a well-known 3rd party Certificate Authority of your choice to sign it.

    You can find examples of 3rd party CAs&nbsp;[here](http://www.dmoz.org/Computers/Security/Public_Key_Infrastructure/PKIX/Tools_and_Services/Third_Party_Certificate_Authorities/)&nbsp;and&nbsp;[here](http://www.mozilla.org/projects/security/certs/included/).

4.  When you receive the signed certificate pdfca.crt, import it into your keystore using a new new alias (`pdfcacert`&nbsp;in this example).

    ```
    keytool -import -trustcacerts -alias pdfcacert -file pdfca.crt -keystore pdfca-keystore.jks

    ```

##### Setting up a local CA certificate**&nbsp;
**

An alternative method would be to set up a local signing CA and use it for signing certificates.

{{#> callout type='note' }}

Though it could work for small-scale deployments, this approach is not recommended for production purposes.

{{/callout}}

**Step 1: Create a Certificate Authority (CA)**

1.  Create a CA key.

    ```
    openssl genrsa -out ca.key 2048

    ```

2.  Create a self signed CA certificate.

    ```
    openssl req -new -x509 -days 356 -key ca.key -out ca-self-signed.crt

    ```

**Step 2: Create Subordinate Certificate Authority (SUBCA)**

1.  Create the key for the subordinate CA.

    ```
    openssl genrsa -out subca.key 2048

    ```

2.  Create a certificate signing request (CSR) for the subordinate CA.

    ```
    openssl req -new -key subca.key -out subca.csr

    ```

3.  Sign the CSR of the subordinate CA.

    ```
    openssl x509 -req -days 730 -in subca.csr -CA ca-self-signed.crt -CAkey ca.key -set_serial 01 -out subca.crt

    ```

4.  Import a certificate created from your CSR into a JKS keystore.

    ```
    keytool -import -alias certalias -file subca.crt -keystore keystore.jks

    ```

5.  Convert the x509-certificate and the key to pkcs12 format to make it importable into the java keystore.

    ```
    openssl pkcs12 -export -in subca.crt -inkey subca.key -name keyalias -CAfile ca.crt -caname root -out subca.p12

    ```

    (use "export" as password when prompted)

6.  Convert the pkcs12 file to JKS format.

    ```
    keytool -importkeystore -deststorepass storepass -destkeypass keypass -destkeystore keystore.jks -srckeystore subca.p12 -srcstoretype PKCS12 -srcstorepass export -alias keyalias

    ```

    Now you will need to replace the sample certificate with your own that you just created. You can use the configuration information below which explains how to override the sample certificate with your company certificate.

**Step 3: Replace the sample root certificate**

1.  Create a&nbsp;`***-config.xml`&nbsp;(e.g.`rootcert-digitalsignature-config.xml`) file with the content below:

    ```
    <component name="my.signature.rootservice.config">
      <require>org.nuxeo.signature.config.default</require>
      <extension target="org.nuxeo.ecm.platform.signature.api.pki.RootService" point="rootconfig">
        <configuration>
          <rootKeystoreFilePath>test-config/keystore.jks</rootKeystoreFilePath>
          <rootKeystorePassword>abc</rootKeystorePassword>
          <rootCertificateAlias>pdfcacert</rootCertificateAlias>
          <rootKeyAlias>pdfcakey</rootKeyAlias>
          <rootKeyPassword>abc</rootKeyPassword>
        </configuration>
      </extension>
    </component>

    ```

2.  Put the extension in the&nbsp;`config`&nbsp;directory of your server:
    *   `$NUXEO/nxserver/config`&nbsp;for a Tomcat distribution,
    *   `$NUXEO/server/default/deploy/[nuxeo.ear/config](http://nuxeo.ear/config)&nbsp;`for a JBoss distribution.

### Setting up the Company Information for New Certificates

Another extension provides general company information used in all certificates, like Country, Locale, Organization Name and Organizational Unit.

**To add your company's information for users certificates:**

1.  Create another XML file called&nbsp;`***-config.xml`&nbsp;(e.g.`companyinfo-digitalsignature-config.xml`) with the content below:

    ```
    <?xml version="1.0"?>
    <component name="my.signature.userservice.config">
      <require>org.nuxeo.signature.config.default</require>
      <extension target="org.nuxeo.ecm.platform.signature.api.user.CUserService" point="cuserdescriptor">
        <userDescriptor>
          <countryCode>MX</countryCode>
          <organization>Sigma Alimentos</organization>
          <organizationalUnit>Marketing</organizationalUnit>
        </userDescriptor>
      </extension>
    </component>

    ```

2.  Put the extension in the&nbsp;`config`&nbsp;directory of your server:
    *   `$NUXEO/nxserver/config`&nbsp;for a Tomcat distribution,
    *   `$NUXEO/server/default/deploy/[nuxeo.ear/config](http://nuxeo.ear/config)&nbsp;`for a JBoss distribution.

## Use

The layout is defined by:

*   Lines and Columns number,
*   Starting point cell (Left to right - Top to bottom),
*   Signature text size.

By default the configuration sets lines number to 5, columns number to 3, starting cell to 1 and text size to 10px.

```xml
<extension
          target="org.nuxeo.ecm.platform.signature.api.sign.SignatureService"
          point="signature">
    <configuration>
      <reason>This document signed as an example.
      </reason>
      <layout id="defaultConfig" lines="5" columns="3" startLine="1" startColumn="1" textSize="10"/>
    </configuration>
  </extension>
```

It means signatures display begins in the first cell, at the top left of the PDF document and so on, on 5 lines and 3 columns maximum.

Here is an example of how to override this default configuration:

```xml
<require>org.nuxeo.signature.config.default</require>
<extension
          target="org.nuxeo.ecm.platform.signature.api.sign.SignatureService"
          point="signature">
    <configuration>
      <reason>This document signed as an example.
      </reason>
      <layout id="customConfig" lines="5" columns="3" startLine="3" startColumn="3" textSize="10"/>
    </configuration>
  </extension>
```

Signatures display will begin in the third cell (top right) and so on, on 5 lines and 3 columns maximum.

{{#> callout type='note' }}

If signatures number is higher than available cells number, the document will be signed digitally but extra signatures won't be displayed into it.

{{/callout}}

&nbsp;

&nbsp;

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div><div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related documentation'}}

*   [Digital Signature user documentation]({{page space='userdoc58' page='digital-signature'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>