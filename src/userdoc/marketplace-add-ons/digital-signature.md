---
title: Digital Signature
labels:
    - digital-signature
toc: true
confluence:
    ajs-parent-page-id: '16092550'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Digital+Signature
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Digital+Signature'
    page_id: '16092659'
    shortlink: '8431'
    shortlink_source: 'https://doc.nuxeo.com/x/8431'
    source_link: /display/USERDOC58/Digital+Signature
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 15:17'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2015-04-22 07:33'
        message: update link to blog post
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-12-04 17:00'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-12-04 16:59'
        message: Added and updated screenshots
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-12-04 16:50'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-12-04 16:49'
        message: >-
            Moved layout configuration section to dev documentation, moved
            configuration sections to admin doc, added links, formatting
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-12-04 16:17'
        message: ''
        version: '2'
    - 
        author: Vladimir Pasquier
        date: '2013-10-23 14:22'
        message: ''
        version: '1'

---
### What Is a Digital Signature?

... or why sign your documents digitally?

Digital signatures uniquely identify the document signer. They provide a similar functionality to handwritten signatures on paper, and are a convenient alternative to signing and scanning documents when a digital version of a document is required. Digital signatures are meant to assure authenticity and integrity of documents, that is to verify that the document originator - or signer - is who they claim to be, and to ascertain that a document has not been tampered with between the moment of signing and the subsequent viewing.

### What Is a Digital Certificate?

Before you sign a document you need a digital certificate. Certificates are attached to documents to verify the identity of the signer, that is to check that the person signing the message is who they claim to be. Certificates are issued by Certificate Authorities (CA, also known as Issuer). To verify that a certificate has not been tampered with, it has to be validated against the CA's public key. If this verification is passed it means that the CA certifies the authenticity of the signer. Digital certificates are formatted using PKI standards, the most common of them is X.509, which is also used in this addon.

![]({{file name='certificate_viewer.png'}} ?w=500,border=true)

### The Local CA and the Root CA

#### Root Certificate Authority

The highest level certificates are created by root Certificate Authorities (CAs) which are supposed to be trusted publicly. No higher authority can certify the root certificates: those are the top-level certificates.

You can see examples of those in your browser, under the certificate authorities/ CA section.

Here are some of the more popular ones:

*   Equifax Secure CA,
*   VeriSign Class 3 Public Primary Certification Authority,
*   Visa eCommerce Root,
*   Deutsche Telekom Root CA 2.

#### Local Certificate Authority

Your Local Certificate Authority (CA) will be used to sign user certificates. The local CA certificate can either be signed by a higher-level certificate authority, or be self-signed. The local CA certificate will be created inside the system hosting your Nuxeo Platform instance.

{{#> callout type='note' }}

The default Local CA that comes with our plugin is just an example certificate to be used for initial setup testing, and it should not be used for signing production documents.

{{/callout}}

#### Certification Chains

Now let's consider the following relationships:

1.  The document signature includes => the signer's certificate (user certificate).
2.  User certificate was signed with => your local CA certificate.
3.  Your local CA certificate was signed by => a higher level CA certificate.
4.  The higher level CA certificate was signed by => a still higher CA certificate (&hellip; and so on&hellip; &hellip;and then, finally).
5.  A very high level CA certificate was signed by => the root CA certificate.

The root CA certificate closes the chain that leads down to the user's certificate.

Now, instead of verifying all the intermediary certificates, it is enough for your PDF viewer to have the root Certificate Authority&nbsp;verify it for you, via the sequence of intermediary CAs.

Root certificates are usually already present in popular PDF viewers and browsers, and if not, they can be updated automatically provided your software has been set up properly.

#### CA-Signing vs Self-Signing

&hellip; as applied to your local CA certificate.

If your local CA certificate was signed by a certificate authority, the users usually don't have to install your company's certificate in their browsers to verify the signed documents.

On the other hand, if your local CA was self-signed, the CA-certificate has to be manually installed in the PDF viewer prior to verifying signatures. This has to be done only once per PDF viewing program and an example of certificate installation in a PDF viewer has been presented in our documentation.

## Using the Digital Signature Addon

When the Digital Signature addon is installed on your Nuxeo Platform, you get some new tabs in your Nuxeo Platform interface:

*   Users have a new **Certificates** tab in their **Home**, from which they can [generate their certificate](#generating-cert) to be able to sign documents.
    ![]({{file name='signature-home-certificate-tab.png'}} ?w=650,border=true)
*   Files documents have a new **Signature** tab, from which they can either see the signatures or [sign the document](#signing-docum) if they have the right to.
    ![]({{file name='signature-tab.png'}} ?w=650,border=true)

### Top-Level View

From a high-level functional point of view, here is what users need to be able to do using the digital signature addon:

1.  User A creates a certificate.
2.  User A signs a document.
3.  User B installs the root certificate in a PDF viewer.
4.  User B opens a document, previews the document with a visible signature and can check its authenticity against the root certificate.

### {{> anchor 'generating-certificate'}}Generating Your Certificate

To be able to [sign documents](#signing-docum), users need to have a certificate. Every user of the application can have a certificate. However, this not automatic: users have to generate it. When users generate their certificate, they are asked to choose a password, that will be required to sign the document.

{{#> callout type='note' }}

Make sure you remember your password (or store it secured) as there is&nbsp;currently no mechanism for resetting lost passwords.

{{/callout}}

The certificate generation relies on two sets of information:

*   User's information: user's first name, last name and email address. The email address is used to check the user's unicity.
*   Global company information entries configured by the system administrator.

**To generate your certificate:**

1.  Click on the **Home** main tab.
2.  Click on the **Certificates** tab, where you can generate your certificate.

    {{#> callout type='tip' }}

    If you have no certificate yet, a link to the **Certificates** tab is displayed directly from the document's **Signature** tab.

    {{/callout}}

    A form to generate your certificate is displayed. If you already generate your certificate, it is displayed instead of the generation form.

3.  Type and confirm the password that you will be asked when you sign documents.
4.  Click on the **Generate certificate** button.
    You certificate is generated and displayed.
    ![]({{file name='certificate.png'}} ?w=650,border=true)

### {{> anchor 'signing-document'}}Signing a Document

Only users with "Write" permission can sign documents.

**To sign a document:**

1.  Click on the **Signature** tab of the document.
    The signing form is displayed, below the Main file and Root Certificate sections.

    {{#> callout type='tip' }}

    You must have a certificate to sign documents.
    If you haven't [generated your certificate](#generating-certificate) yet, you are displayed a link to the certificate management instead of the signing form.

    {{/callout}}

    ![]({{file name='signing_process.png'}} ?w=650,border=true)

2.  Type a comment in the "Signing Reason" text area.
3.  Type your password in the "Certificate Password" field.
4.  Click on the **Sign now** button.
    Your signature is displayed on the **Signature** tab instead of the signing form. It is composed of your certificate, your organization's certificate, and the expiration date of your certificate.
    &nbsp; ![]({{file name='document-signed.png'}} ?w=650,h=130,border=true)

    The signed PDF version of the document is attached to the document. It is displayed on the **Signature** tab, the **Summary** tab and the **Files** tab.
    The signing of the document is logged in the **History** tab.

### Verifying the Signature of the PDF File

To verify the signature of the PDF, you need to:

1.  Install the public root certificate available from the **Root Certificate** section of the **Signature** tab:
    1.  Click on the **Download the public root certificate for your PDF viewer** link to download the certificate.
    2.  Follow your operating system's usual certificate installation steps.
2.  Download the signed PDF file by clicking on the file name from the **Summary** tab or the **Signature** tab, and open it.
    ![]({{file name='document-signed-acrobat.png'}} ?w=650,border=true)

## References

*   [http://download.oracle.com/javase/1.5.0/docs/guide/security/cert3.html](http://download.oracle.com/javase/1.5.0/docs/guide/security/cert3.html)
*   [http://en.wikipedia.org/wiki/Digital_signature](http://en.wikipedia.org/wiki/Digital_signature)
*   [http://www.nuxeo.com/blog/digital-signatures-within-nuxeo-document-management/](http://www.nuxeo.com/blog/digital-signatures-within-nuxeo-document-management/)

&nbsp;