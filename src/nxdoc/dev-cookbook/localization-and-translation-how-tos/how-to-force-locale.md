---
title: How to Force Locale
labels:
    - localization
confluence:
    ajs-parent-page-id: '18449779'
    ajs-parent-page-title: Localization and Translation How-Tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+Force+Locale
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/How+to+Force+Locale'
    page_id: '18449781'
    shortlink: dYUZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/dYUZAQ'
    source_link: /display/NXDOC58/How+to+Force+Locale
history:
    - 
        author: Solen Guitter
        date: '2014-01-23 14:57'
        message: ''
        version: '1'

---
{{! excerpt}}

You can force the locale by removing other locales support. This is done in the&nbsp;`deployment-fragment.xml`&nbsp;file of your plugin.

{{! /excerpt}}{{#> panel type='code' heading='"Sample extract of deployment-fragment.xml replacing other bundles\' contributions to faces-config.xml"'}}

```
<require>org.nuxeo.ecm.platform.lang.ext</require>
<extension target="faces-config#APPLICATION_LOCALE" mode="replace">
  <locale-config>
    <default-locale>en_US</default-locale>
    <supported-locale>en_US</supported-locale>
  </locale-config>
  <message-bundle>messages</message-bundle>
</extension>

```

{{/panel}}

The `mode="replace"` attribute will replace all the previously contributed `<extension target="faces-config#APPLICATION_LOCALE">`.

So you have to carefully make your plugin being deployed after any other bundle contributing a `locale-config`. In the above sample, this is ensured by the `require` parameter.

{{#> callout type='note' }}

This configuration applies on JSF pages and will not change the default locale on the login page which only depends on the browser configuration.

{{/callout}}