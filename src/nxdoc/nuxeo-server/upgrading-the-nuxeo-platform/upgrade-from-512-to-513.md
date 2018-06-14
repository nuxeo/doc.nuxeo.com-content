---
title: Upgrade from 5.1.2 to 5.1.3
review:
    comment: ''
    date: '2017-01-17'
    status: ok
labels:
    - lts2016-ok
    - multiexcerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '3343538'
    ajs-parent-page-title: Upgrading the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Upgrade+from+5.1.2+to+5.1.3
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Upgrade+from+5.1.2+to+5.1.3'
    page_id: '3343542'
    shortlink: tgQz
    shortlink_source: 'https://doc.nuxeo.com/x/tgQz'
    source_link: /display/NXDOC/Upgrade+from+5.1.2+to+5.1.3
tree_item_index: 1400
hidden: true
version_override:
    LTS 2015: 710/admindoc/upgrade-from-512-to-513
    '6.0': 60/admindoc/upgrade-from-512-to-513
    '5.8': 58/admindoc/upgrade-from-512-to-513
history:
    -
        author: Solen Guitter
        date: '2016-04-06 07:32'
        message: ix link to page How to upgrade Nuxe
        version: '24'
    -
        author: Solen Guitter
        date: '2013-07-02 11:46'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2012-05-22 17:40'
        message: Migrated to Confluence 4.0
        version: '22'
    -
        author: Solen Guitter
        date: '2012-05-22 17:40'
        message: ''
        version: '21'
    -
        author: Julien Carsique
        date: '2011-06-15 14:00'
        message: ''
        version: '20'
    -
        author: Julien Carsique
        date: '2011-06-15 11:29'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2011-03-03 14:57'
        message: ''
        version: '18'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '17'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:27'
        message: ''
        version: '16'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:24'
        message: ''
        version: '15'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:14'
        message: ''
        version: '14'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:14'
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
        date: '2010-07-21 20:05'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:21'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:01'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:39'
        message: ''
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:23'
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
        date: '2010-07-21 18:00'
        message: ''
        version: '1'

---
{{! multiexcerpt name='5.1.2-to-5.1.3-upgrade-page'}}

Follow [Upgrade Nuxeo]({{page page='upgrading-the-nuxeo-platform'}}) and apply the following procedure __before__ starting Nuxeo.

While upgrading from 5.1.2 to 5.1.3, you may have to manage with a Blob format issue : that means to patch $JBOSS/server/default/data/NXRuntime/repos/default/repository/nodetypes/custom_nodetypes.xml
Take this file, format it with tidy (tidy -wrap 999 -indent -xml) and apply this patch (manually as it can't guarantee any line numbers; add the lines beginning with a "+" if not already present):

```
+  <nodeType hasOrderableChildNodes="false" isMixin="true" name="ecmmix:content" primaryItemName="">
+    <propertyDefinition autoCreated="false" mandatory="false" multiple="false" name="digest" onParentVersion="COPY" protected="false" requiredType="String" />
+    <propertyDefinition autoCreated="false" mandatory="false" multiple="false" name="length" onParentVersion="COPY" protected="false" requiredType="Long" />
+    <propertyDefinition autoCreated="false" mandatory="false" multiple="false" name="filename" onParentVersion="COPY" protected="false" requiredType="String" />
+  </nodeType>
   <nodeType hasOrderableChildNodes="false" isMixin="false" name="ecmft:content" primaryItemName="">
     <supertypes>
       <supertype>ecmnt:property</supertype>
+      <supertype>ecmmix:content</supertype>
+      <supertype>nt:resource</supertype>
     </supertypes>
    <propertyDefinition autoCreated="false" mandatory="false" multiple="false" name="mime-type" onParentVersion="COPY" protected="false" requiredType="String" />
    <propertyDefinition autoCreated="false" mandatory="false" multiple="false" name="data" onParentVersion="COPY" protected="false" requiredType="Binary" />
    <propertyDefinition autoCreated="false" mandatory="false" multiple="false" name="encoding" onParentVersion="COPY" protected="false" requiredType="String" />
   </nodeType>

```

Then, you need to re-index your data. Using [nuxeo-shell](http://doc.nuxeo.org/5.1/nuxeo-book/reference/html/administration.html#nuxeo-shell) (versus web function in advanced search) is recommended.

Another solution (than patching custom_nodetypes.xml file) is to export then re-import data before and after the upgrade (using nuxeo-shell too); but this method will make you loose versioning information.

{{! /multiexcerpt}}
