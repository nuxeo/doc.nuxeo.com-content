---
title: Anonymous Authentication
review:
    comment: ''
    date: '2017-02-08'
    status: ok
toc: true
tree_item_index: 704
---
This plugin provides anonymous authentication. Users are automatically logged as a configurable Anonymous user. This module also includes additional actions (to be able to login when already logged as Anonymous) and a dedicated Exception handling (to automatically redirect Anonymous users to login screen after a security error).

To activate this authentication plugin:

1. Add the plugin to the authentication chain.{{{multiexcerpt 'authentication_chain_contribution' page='Authentication and User Management'}}}
  Use `ANONYMOUS_AUTH`.
2. Configure the plugin via an XML descriptor (define who the anonymous user will be) in an XML extension in Nuxeo Studio or an XML file `nxserver/config/anonymous-auth-config.xml`.

    ```
    <?xml version="1.0"?>
    <component name="org.nuxeo.ecm.platform.login.anonymous.config">

      <!-- Add an Anonymous user -->
      <extension target="org.nuxeo.ecm.platform.usermanager.UserService" point="userManager">
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
3. Adapt the `anonymousUser` id and properties.
4. Save.
