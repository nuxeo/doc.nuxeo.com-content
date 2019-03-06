---
title: How to Force Locale
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: Learn how to force the locale by removing other locales support
        level: Advanced
        tool: XML extensions
        topics: Localization
labels:
    - content-review-lts2016
    - localization
    - howto
    - i18n
    - translation
    - mlumeau
    - excerpt
    - content-review-lts2017
    - jsf-ui
confluence:
    ajs-parent-page-id: '19235763'
    ajs-parent-page-title: Labels and Translations Management
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Force+Locale
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Force+Locale'
    page_id: '3343563'
    shortlink: ywQz
    shortlink_source: 'https://doc.nuxeo.com/x/ywQz'
    source_link: /display/NXDOC/How+to+Force+Locale
tree_item_index: 100
history:
    -
        author: Anahide Tchertchian
        date: '2015-05-22 13:28'
        message: xplain how to force locale on the login pag
        version: '26'
    -
        author: Manon Lumeau
        date: '2014-09-15 17:55'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2014-01-23 14:48'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2014-01-23 14:43'
        message: Removed instructions for before 5.4.3
        version: '23'
    -
        author: Julien Carsique
        date: '2011-08-10 15:50'
        message: ''
        version: '22'
    -
        author: Julien Carsique
        date: '2011-08-10 15:50'
        message: ''
        version: '21'
    -
        author: Julien Carsique
        date: '2011-08-10 15:25'
        message: 'fix sample locale contribution, add 5.4.3 improvement (NXP-7353)'
        version: '20'
    -
        author: Stéfane Fermigier
        date: '2010-12-04 11:36'
        message: ''
        version: '19'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 16:59'
        message: ''
        version: '18'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '17'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:28'
        message: ''
        version: '16'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:24'
        message: ''
        version: '15'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:16'
        message: ''
        version: '14'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:15'
        message: ''
        version: '13'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:10'
        message: ''
        version: '12'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:55'
        message: ''
        version: '11'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:51'
        message: ''
        version: '10'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:11'
        message: ''
        version: '9'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:06'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:21'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:02'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:39'
        message: ''
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:24'
        message: ''
        version: '4'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:18'
        message: ''
        version: '3'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:12'
        message: ''
        version: '2'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:01'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

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

If you'd like to force locale on the login page, you should override the page at `/login.jsp` and force the locale there, by adding the following line at the beginning of the file, just after the `<html>` tag, for instance:

```
<fmt:setLocale value="fr" />
```
