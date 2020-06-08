---
title: Digital Signature
review:
    comment: ''
    date: '2020-06-08'
    status: ok
labels:
    - digital-signature
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '11043055'
    ajs-parent-page-title: Adding Features
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Digital+Signature
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Digital+Signature'
    page_id: '16091701'
    shortlink: NYr1
    shortlink_source: 'https://doc.nuxeo.com/x/NYr1'
    source_link: /display/USERDOC/Digital+Signature
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-09-01 15:19'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2015-11-24 15:07'
        message: update screenshots
        version: '19'
    -
        author: Manon Lumeau
        date: '2015-11-24 14:46'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2015-04-22 07:33'
        message: update link to blog post
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-11-10 10:38'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2014-07-30 10:37'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2014-07-30 10:36'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-07-30 10:36'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-07-30 10:36'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-07-30 10:36'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2014-07-30 10:36'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-07-30 10:35'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-12-04 16:10'
        message: Formatting
        version: '8'
    -
        author: Solen Guitter
        date: '2013-11-15 15:32'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-11-15 15:29'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-11-15 15:05'
        message: 'Moved layout configuration section to NXDOC '
        version: '5'
    -
        author: Solen Guitter
        date: '2013-11-14 19:55'
        message: Removed related topics from TOC
        version: '4'
    -
        author: Solen Guitter
        date: '2013-11-14 19:55'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2013-11-14 18:19'
        message: ''
        version: '2'
    -
        author: Vladimir Pasquier
        date: '2013-10-23 14:22'
        message: ''
        version: '1'
---

{{multiexcerpt 'JSF-UI-required' space='nxdoc' page='generic-multi-excerpts'}}

{{! excerpt}}
The [Digital Signature addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-signature) introduces PDF signing capabilities to the Nuxeo Platform. This addon also provides generation of user certificates, which are required for document signing.
{{! /excerpt}}

The Nuxeo Platform Digital Signature addon allows you to:

*   download the PDF for previewing,
*   download the root certificate to install inside your PDF viewer for verifying any future certificates,
*   navigate to certificate generation,
*   sign the PDF,
*   view existing certificates without opening the signed PDF.

## Digital Signature Concepts

### Principles

*   Documents are signed to protect them from modification, especially at critical stages in their lifecycle.
*   Document- and user-certification in the Nuxeo Platform follow principles of asymmetric cryptography, PKI & the X.509 standards.
*   To sign a document, a user needs a personal certificate.
*   Each user can create her own certificate.
*   Certificates are issued by Certificate Authorities (CAs).

### What Is a Digital Signature?

... or why sign your documents digitally?

Digital signatures uniquely identify the document signer. They provide a similar functionality to handwritten signatures on paper, and are a convenient alternative to signing and scanning documents when a digital version of a document is required. Digital signatures are meant to assure authenticity and integrity of documents, that is to verify that the document originator - or signer - is who they claim to be, and to ascertain that a document has not been tampered with between the moment of signing and the subsequent viewing.

### What Is a Digital Certificate?

Before you sign a document you need a digital certificate. Certificates are attached to documents to verify the identity of the signer, that is to check that the person signing the message is who they claim to be. Certificates are issued by Certificate Authorities (CA, also known as Issuer). To verify that a certificate has not been tampered with, it has to be validated against the CA's public key. If this verification is passed it means that the CA certifies the authenticity of the signer. Digital certificates are formatted using PKI standards, the most common of them is X.509, which is also used in this addon.

![]({{file name='certificate_viewer.png' space='nxdoc' page='digital-signature'}} ?w=500,border=true)

### Local and Root Certificate Authorities

#### Root Certificate Authority

The highest level certificates are created by root Certificate Authorities (CA) which are supposed to be trusted publicly. No higher authority can certify the root certificates: those are the top-level certificates. You can see examples of those in your browser, under the certificate authorities / CA section.

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

### Certification Chains

Now let's consider the following relationships:

1.  The document signature includes => the signer's certificate (user certificate).
2.  The user certificate was signed with => your local CA certificate.
3.  Your local CA certificate was signed by => a higher level CA certificate.
4.  The higher level CA certificate was signed by => a still higher CA certificate (&hellip; and so on&hellip; &hellip;and then, finally).
5.  A very high level CA certificate was signed by => the root CA certificate.

The root CA certificate closes the chain that leads down to the user's certificate.

Now, instead of verifying all the intermediary certificates, it is enough for your PDF viewer to have the root Certificate Authority verify it for you, via the sequence of intermediary CAs.

Root certificates are usually already present in popular PDF viewers and browsers, and if not, they can be updated automatically provided your software has been set up properly.

#### CA-Signing vs Self-Signing

&hellip; as applied to your local CA certificate.

If your local CA certificate was signed by a certificate authority, the users usually don't have to install your company's certificate in their browsers to verify the signed documents.

On the other hand, if your local CA was self-signed, the CA certificate has to be manually installed in the PDF viewer prior to verifying signatures. This has to be done only once per PDF viewing program and an example of certificate installation in a PDF viewer has been presented in our documentation.

## Using the Digital Signature Addon

When the Digital Signature addon is installed on your Nuxeo Platform, you get some new tabs in your Nuxeo interface:

*   Users have a new **Certificates** tab in their **Home**, from which they can [generate their certificate](#generate-your-certificate) to be able to sign documents.
    ![]({{file name='certificate_home_tab.png'}} ?w=600,border=true)
*   Files documents have a new **Signature** tab, from which they can either see the signatures or [sign the document](#sign-a-document) if they have the permission to.
    ![]({{file name='signature_tab_without_signature.png'}} ?w=600,border=true)

### Top-Level View

From a high-level functional point of view, here is what users need to be able to do using the digital signature addon:

1.  User A creates a certificate.
2.  User A signs a document.
3.  User B installs the root certificate in a PDF viewer.
4.  User B opens a document, previews the document with a visible signature and can check its authenticity against the root certificate.

### {{> anchor 'generating-certificate'}}Generating a Certificate

To be able to [sign documents](#sign-a-document), users need to have a certificate. Every user of the application can have a certificate. However, this not automatic: users have to generate it. When users generate their certificate, they are asked to choose a password, that will be required to sign the document.

{{#> callout type='note' }}

Make sure you remember your password (or store it secured) as there is currently no mechanism for resetting lost passwords.

{{/callout}}

The certificate generation relies on two sets of information:

*   User's information: user's first name, last name and email address. The email address is used to check the user's unicity.
*   Global company information entries configured by the system administrator.

**To generate your certificate:**

1.  Click on the **Home** main tab.
2.  Click on the **Certificates** tab, where you can generate your certificate.

    {{#> callout type='tip' }}

    If you have no certificate yet, a link to the **Certificates** tab is displayed directly from the documents **Signature** tab.

    {{/callout}}

    A form to generate your certificate is displayed. If you already generated your certificate, it is displayed instead of the generation form.

3.  Type and confirm the password that you will be asked when you sign documents.
4.  Click on the **Generate Certificate** button.
    You certificate is generated and displayed.
    ![]({{file name='certificate_signature_done.png'}} ?w=600,border=true)

### Signing a Document

Only users with "Edit" permission can sign documents.

**To sign a document:**

1.  Click on the **Signature** tab of the document.
    The signing form is displayed.

    {{#> callout type='tip' }}

    If you haven't [generated your certificate](#generating-certificate) yet, you are displayed a link to the certificate management instead of the signing form.

    {{/callout}}

    ![]({{file name='sign_document.png'}} ?w=600,border=true)

2.  Type a comment in the "Signing Reason" text area.
3.  Type your password in the "Certificate Password" field.
4.  Click on the **Sign now** button.
    Your signature is displayed on the **Signature** tab instead of the signing form. It is composed of your certificate, your organization's certificate, and the expiration date of your certificate.
    ![]({{file name='signature_done.png'}} ?w=600,border=true)
    The signed PDF version of the document is attached to the document. It is displayed on the **Signature** tab, the **Summary** tab and the **Files** tab.
    The signing of the document is logged in the **History** tab.

### Verifying the Signature of the PDF File

To verify the signature of the PDF, you need to:

1.  Install the public root certificate available from the **Root Certificate** section of the **Signature** tab:
    1.  Click on the **Download the public root certificate for your PDF viewer** link to download the certificate.
    2.  Follow your operating system's usual certificate installation steps.
2.  Download the signed PDF file by clicking on the file name from the **Summary** tab or the **Signature** tab, and open it.
    ![]({{file name='pdf_signed.png'}} ?w=600,border=true)

## References

*   [http://download.oracle.com/javase/1.5.0/docs/guide/security/cert3.html](http://download.oracle.com/javase/1.5.0/docs/guide/security/cert3.html)
*   [http://en.wikipedia.org/wiki/Digital_signature](http://en.wikipedia.org/wiki/Digital_signature)
*   [http://www.nuxeo.com/blog/digital-signatures-within-nuxeo-document-management/](http://www.nuxeo.com/blog/digital-signatures-within-nuxeo-document-management/)


<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Digital signature dev documentation]({{page space='nxdoc' page='digital-signature'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
