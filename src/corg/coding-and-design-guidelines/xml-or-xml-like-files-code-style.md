---
title: XML or XML-like files code style
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '4685848'
    ajs-parent-page-title: Coding and Design Guidelines
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: XML+or+XML-like+files+code+style
    canonical_source: 'https://doc.nuxeo.com/display/CORG/XML+or+XML-like+files+code+style'
    page_id: '20513228'
    shortlink: zAE5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/zAE5AQ'
    source_link: /display/CORG/XML+or+XML-like+files+code+style
history:
    - 
        author: Maxime Hilaire
        date: '2015-02-02 15:34'
        message: ''
        version: '4'
    - 
        author: Guillaume Renard
        date: '2014-11-07 12:43'
        message: ''
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2014-08-19 11:25'
        message: ''
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2014-08-19 11:23'
        message: ''
        version: '1'

---
### XML files Eclipse configuration

Eclipse should be configured to use spaces (not tabs) and an indentation of **2 spaces** is used for XML-like code. Line width is 120.

See Window > Preferences > XML > XML Files > Editor.

Option "Insert whitespace before before closing empty tags" should also be checked.

### XHTML files Eclipse configuration

XHTML files do not support a default formatting that suits Eclipse, as it gets confused between namespaced tags (JSF tags for instance) and others (standard HTML tags for instance).

But formatting is similar to XML files: use an indentation of **2 spaces**.