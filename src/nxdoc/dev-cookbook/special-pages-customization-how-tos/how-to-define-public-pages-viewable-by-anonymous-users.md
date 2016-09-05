---
title: How to Define Public Pages (Viewable by Anonymous Users)
labels:
    - anonymous
toc: true
confluence:
    ajs-parent-page-id: '18449741'
    ajs-parent-page-title: Special Pages Customization How-Tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: viewpage.action?pageId=18449765
    canonical_source: viewpage.action?pageId=18449765
    page_id: '18449765'
    shortlink: ZYUZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/ZYUZAQ'
    source_link: /pages/viewpage.action?pageId=18449765
history:
    - 
        author: Solen Guitter
        date: '2014-01-23 12:21'
        message: ''
        version: '1'

---
{{! excerpt}}

To make some pages or parts of the repository visible to people without requiring them to be authenticated to the Platform, follow the following steps.

{{! /excerpt}}

## Activating the Anonymous User

The first step you need to take is to enable the anonymous user.

1.  Anonymous user needs to be registered through a configuration files, that should look like this:

    ```
    <?xml version="1.0"?>
    <component name="org.nuxeo.ecm.platform.login.anonymous.config">
      <!-- Add an Anonymous user -->
      <extension target="org.nuxeo.ecm.platform.usermanager.UserService"
        point="userManager">
        <userManager>
          <users>
            <anonymousUser id="Guest">
              <property name="firstName">Guest</property>
              <property name="lastName">User</property>
            </anonymousUser>
          </users>
        </userManager>
      </extension>
    </component>

    ```

    *   This file needs to be named `what-you-want-config.xml` and to be deployed under `nxserver/config/`.
    *   Or you can use template system and copy it into `template/common/config/`.
2.  Restart the application server.&nbsp;

    After the server is up and running, when accessing Nuxeo again, the anonymous user will be used and logged into the application.

## Managing Rights of the Anonymous User

The anonymous user after the configuration above is considered as a simple user with a given rights, a user workspace, etc. Managing his rights and visible actions is the same than other users.

So be careful, if you give Write access to the repository to this user, you will let anyone have access to the server to create content.

## Defining the Login Page for the Anonymous User

*   If you give at least Read Access to the Default Domain for the Anonymous User&nbsp;case, he will be redirected at the root of the Default Domain into the Nuxeo DM view.
*   If you give no Right Access to the Default Domain for the Anonymous User, he will be redirected to the Home View.
    Anonymous User will have the possibility to access to his content from the Dashboard (gadgets "My Workspace", "My Documents", ...)