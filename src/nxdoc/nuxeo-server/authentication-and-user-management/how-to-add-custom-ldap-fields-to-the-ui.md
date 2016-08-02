---
title: How to Add Custom LDAP Fields to the UI
details:
    howto:
        excerpt: >-
            Learn how to add a custom LDAP fields to the User interface using
            XML extensions. 
        level: Advanced
        tool: XML extension
        topics: 'Authentication, LDAP'
labels:
    - ldap
    - howto
    - authentation
    - user-profile-component
    - lts2015-ok
    - migration-sample
    - excerpt
confluence:
    ajs-parent-page-id: '16089115'
    ajs-parent-page-title: Authentication and User Management
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Add+Custom+LDAP+Fields+to+the+UI
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/How+to+Add+Custom+LDAP+Fields+to+the+UI
    page_id: '4689428'
    shortlink: FI5H
    shortlink_source: 'https://doc.nuxeo.com/x/FI5H'
    source_link: /display/NXDOC/How+to+Add+Custom+LDAP+Fields+to+the+UI
history:
    - 
        author: Solen Guitter
        date: '2014-12-01 22:05'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2014-09-19 11:23'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-09-04 17:38'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-09-04 10:44'
        message: Added related pages
        version: '7'
    - 
        author: Florent Guillaume
        date: '2011-01-17 12:41'
        message: Migrated to Confluence 4.0
        version: '6'
    - 
        author: Florent Guillaume
        date: '2011-01-17 12:41'
        message: ''
        version: '5'
    - 
        author: Wojciech Sulejman
        date: '2011-01-14 11:42'
        message: ''
        version: '4'
    - 
        author: Wojciech Sulejman
        date: '2011-01-14 11:34'
        message: ''
        version: '3'
    - 
        author: Wojciech Sulejman
        date: '2011-01-13 18:27'
        message: ''
        version: '2'
    - 
        author: Wojciech Sulejman
        date: '2011-01-13 18:26'
        message: ''
        version: '1'

---
{{! excerpt}}

To add a custom LDAP fields to the User interface you have to:

{{! /excerpt}}

1.  Create a custom schema based on nuxeo's user.xsd schema with custom fields related to the fields in your LDAP system.

    ```

    ```

2.  Add your schema via Nuxeo's extension system.

    ```

    ```

3.  Modify your LDAP configuration file in Nuxeo (`default-ldap-users-directory-bundle.xml`) to include:
    1.  your custom schema,

        ```

              default

              myuser

        ```

    2.  mapping between your schema and your LDAP fields.

        ```
              uid
              userPassword
              givenName
              sn
              o
              mail
              telephoneNumber

        ```

4.  Modify the UI.
    1.  Add your custom widget to the layout.

        ```

                  username

                  telephone

        ```

    2.  Define a new widget for your custom field to be used in the layout above.

        ```

         telephone

         true

         telephone

         hidden

         true
         dataInputText

        ```

        &nbsp;

        &nbsp;