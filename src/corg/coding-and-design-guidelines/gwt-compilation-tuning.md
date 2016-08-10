---
title: GWT compilation tuning
confluence:
    ajs-parent-page-id: '4685848'
    ajs-parent-page-title: Coding and Design Guidelines
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: GWT+compilation+tuning
    canonical_source: 'https://doc.nuxeo.com/display/CORG/GWT+compilation+tuning'
    page_id: '9275232'
    shortlink: YIeN
    shortlink_source: 'https://doc.nuxeo.com/x/YIeN'
    source_link: /display/CORG/GWT+compilation+tuning
history:
    - 
        author: Benoit Delbosc
        date: '2012-02-03 16:59'
        message: igrated to Confluence 4.
        version: '4'
    - 
        author: Benoit Delbosc
        date: '2012-02-03 16:59'
        message: ''
        version: '3'
    - 
        author: Benoit Delbosc
        date: '2012-01-09 17:03'
        message: ''
        version: '2'
    - 
        author: Benoit Delbosc
        date: '2012-01-09 17:02'
        message: ''
        version: '1'

---
To speed up GWT compilation by default the build is done on a limited set of user agent and locale and the build done without compilation optimization.

To build all permutations (all browser support and locales) with compilation optimization you have to use the "nightly" or "release" maven profile (Adding -Pnightly to the mvn command).

If you add a new artifact that uses GWT you can follow the same pattern by adding an extra development "gwt.xml" file that inherits from the main "gwt.xml" with the following restriction:

```

<module rename-to="org.nuxeo.Ecm.platform.XXXX">
  <inherits name="org.nuxeo.ecm.platform.XXXX" />
  <set-property name="user.agent" value="gecko1_8,ie8" />
  <set-property name="locale" value="en,fr" />
</module>

```

This module file is referred by the default maven-gwt-plugin entry, while the main module is referred in the nightly and release profile.

Check this changeset as example: [https://github.com/nuxeo/nuxeo-features/commit/c8020ab67fa4f73b89475cf4e255501726471aed](https://github.com/nuxeo/nuxeo-features/commit/c8020ab67fa4f73b89475cf4e255501726471aed)