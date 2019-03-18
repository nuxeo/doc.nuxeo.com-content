---
title: How to Define Public Pages (Viewable by Anonymous Users)
review:
    comment: ''
    date: '2016-12-20'
    status: ok
details:
    howto:
        excerpt: Learn how to make some pages visible by anonymous users.
        level: Advanced
        tool: Code
        topics: Access rights, Authentication
labels:
    - lts2016-ok
    - anonymous
    - dmetzler
    - howto
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '19235681'
    ajs-parent-page-title: Transversal How-Tos
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: viewpage.action?pageId=3343531
    canonical_source: viewpage.action?pageId=3343531
    page_id: '3343531'
    shortlink: qwQz
    shortlink_source: 'https://doc.nuxeo.com/x/qwQz'
    source_link: /pages/viewpage.action?pageId=3343531
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2015-12-08 14:54'
        message: ink updat
        version: '35'
    -
        author: Solen Guitter
        date: '2015-10-29 08:16'
        message: Add link
        version: '34'
    -
        author: Joshua Fletcher
        date: '2015-10-28 23:08'
        message: 'In fact the first option did not work at all, but Studio works.'
        version: '33'
    -
        author: Solen Guitter
        date: '2015-10-12 12:20'
        message: Remove link
        version: '32'
    -
        author: Solen Guitter
        date: '2014-12-11 14:58'
        message: ''
        version: '31'
    -
        author: Manon Lumeau
        date: '2014-09-19 14:43'
        message: ''
        version: '30'
    -
        author: Manon Lumeau
        date: '2014-09-19 14:36'
        message: ''
        version: '29'
    -
        author: Manon Lumeau
        date: '2014-09-19 14:35'
        message: ''
        version: '28'
    -
        author: Manon Lumeau
        date: '2014-09-18 14:38'
        message: ''
        version: '27'
    -
        author: Manon Lumeau
        date: '2014-09-18 14:27'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2014-09-18 14:22'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2014-01-23 12:20'
        message: ''
        version: '24'
    -
        author: Anahide Tchertchian
        date: '2013-12-04 17:44'
        message: ''
        version: '23'
    -
        author: Benjamin Jalon
        date: '2011-10-26 16:42'
        message: ''
        version: '22'
    -
        author: Benjamin Jalon
        date: '2011-10-26 16:42'
        message: ''
        version: '21'
    -
        author: Benjamin Jalon
        date: '2011-10-26 16:17'
        message: ''
        version: '20'
    -
        author: Stéfane Fermigier
        date: '2010-08-04 12:15'
        message: ''
        version: '19'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 16:43'
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
        date: '2010-07-22 09:09'
        message: ''
        version: '12'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:54'
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
        date: '2010-07-21 18:11'
        message: ''
        version: '2'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:00'
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
        {{#> callout type='info' }}
        Your filename must end with `-config.xml` to work properly.
        {{/callout}}
    *   Or you can use template system and copy it into `template/common/config/`.
    *   Or you can add the `extension` element [as an **XML Extension** in Nuxeo Studio]({{page page='how-to-contribute-to-an-extension#xml-extension-studio'}}).
2.  Modify `nuxeo.conf` and set&nbsp;`nuxeo.user.anonymous.enable=true`.
3.  Restart the application server.&nbsp;
    After the server is up and running, when accessing Nuxeo again, the anonymous user will be used and logged into the application.

## Managing Rights of the Anonymous User

The anonymous user after the configuration above is considered as a simple user with a given rights, a user workspace, etc. Managing his rights and visible actions is the same than other users.

{{#> callout type='warning' }}

If you give Write access to the repository to this user, you will let anyone have access to the server to create content.

{{/callout}}

## Defining the Login Page for the Anonymous User

*   If you give at least Read Access to the Default Domain for the Anonymous User&nbsp;case, he will be redirected at the root of the Default Domain into the Nuxeo DM view.
*   If you give no Right Access to the Default Domain for the Anonymous User, he will be redirected to the Home View.
    Anonymous User will have the possibility to access to his content from the Dashboard (gadgets "My Workspace", "My Documents", ...)

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Implement Local Groups or Roles Using Computed Groups]({{page page='how-to-implement-local-groups-or-roles-using-computed-groups'}})
- [How-to index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Managing Permissions]({{page space='userdoc' page='permissions'}})
- [Nuxeo Platform User Registration]({{page page='nuxeo-platform-user-registration'}})

{{/panel}}</div></div>
