---
title: How to Configure a Multidirectory for Users and Groups
details:
    howto:
        excerpt: >-
            BLOCK

            This page provides a turnkey&nbsp;solution to configure a
            multidirectory.
        level: Intermediate
        tool: XML configuration
        topics: 'LDAP, Multidirectory'
labels:
    - ldap
    - howto
    - directory-component
    - lts2015-ok
    - migration-sample
    - excerpt
confluence:
    ajs-parent-page-id: '16089115'
    ajs-parent-page-title: Authentication and User Management
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Configure+a+Multidirectory+for+Users+and+Groups
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/How+to+Configure+a+Multidirectory+for+Users+and+Groups
    page_id: '19793819'
    shortlink: mwcuAQ
    shortlink_source: 'https://doc.nuxeo.com/x/mwcuAQ'
    source_link: /display/NXDOC/How+to+Configure+a+Multidirectory+for+Users+and+Groups
history:
    - 
        author: Solen Guitter
        date: '2016-02-18 10:03'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2016-02-16 14:31'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2014-12-01 22:25'
        message: ''
        version: '9'
    - 
        author: Thierry Martins
        date: '2014-11-27 18:11'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-11-27 18:01'
        message: fix xml and add details in steps
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-11-27 17:38'
        message: ''
        version: '6'
    - 
        author: Manon Lumeau
        date: '2014-07-17 10:15'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2014-07-17 10:14'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-07-17 10:06'
        message: ''
        version: '3'
    - 
        author: Thierry Martins
        date: '2014-07-16 12:22'
        message: ''
        version: '2'
    - 
        author: Thierry Martins
        date: '2014-07-16 12:05'
        message: ''
        version: '1'

---
This page provides a <span class="b2" style="color: rgb(36,36,36);">t</span><span class="b3" style="color: rgb(24,24,24);">urn</span><span class="b4" style="color: rgb(12,12,12);">key</span>&nbsp;solution to configure a multidirectory which responds to the following needs:

*   Local and LDAP users,
*   Local and LDAP groups,
*   Local user creation,
*   Local group creation,
*   Local groups can contain local and LDAP groups as subgroups,
*   Local groups can reference local and LDAP users as members.

This configuration is ready to use, so it is based on a public LDAP server whose main properties are:

*   URL:&nbsp;`ldap://ldap.testathon.net:389/`
*   Bind user and password: stuart / stuart
*   Search base DNs for users and groups are entries of&nbsp;`DC=testathon,DC=net`

Moreover a virtual administrator is added to let you log in even if the LDAP configuration is not perfectly working. It lets you browse the users and groups from **Admin Center** > **Users & Groups**.

**To enable this configuration:**

1.  Copy the XML below in a default-multi-directories-config.xml file.
2.  Put the file in `$NUXEO/nxserver/config`.
3.  Start your server.
4.  Check this multidirectory configuration is working on your Nuxeo Platform instance. For instance:

    *   Log in with stuart / stuart.
    *   Log in with MyAdministrator / secret
    *   With any of these two accounts, go to the **Admin** > **Users & Groups** menu to see new users or groups from the LDAP (use `*` to search all users/groups).
5.  Stop the server and edit the XML file to change the parameters and the field mappings with your specific ones.

```

  org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory

  org.nuxeo.ecm.directory.sql.storage
  org.nuxeo.ecm.platform.usermanager.UserManagerImpl

      ldap://ldap.testathon.net:389/
      CN=stuart,OU=users,DC=testathon,DC=net
      stuart

      5

      default
      user
      username
      password
      DC=testathon,DC=net
      person

      subtree

      subany
      true

      3600

      1000

      lower

      200

      0

      cn
      cn
      userPassword
      givenName
      sn
      telephoneNumber
      mail

      default
      group
      groupname
      OU=groups,DC=testathon,DC=net

        (|(objectClass=groupOfNames)(objectClass=groupOfURLs))

      subtree
      true

      3600

      1000

      200

      0
      cn
      cn

      description

  org.nuxeo.ecm.directory.sql.SQLDirectoryFactory

      user
      jdbc/nxsqldirectory

users
      username
      password
      SSHA
      false
      false
      users.csv
      on_missing_columns
      50

      group
      jdbc/nxsqldirectory

groups
      groupname
      groups.csv
      on_missing_columns
      false

      360
      1000

      user
      username
      password

      group
      groupname

      stuart
      members

        multiUserDirectory

          secret
          Super
          Admin
          administrators

        multiGroupDirectory

```

&nbsp;

* * *

&nbsp;