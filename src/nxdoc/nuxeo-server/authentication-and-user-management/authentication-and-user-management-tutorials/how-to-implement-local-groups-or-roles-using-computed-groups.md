---
title: 'HOWTO: Implement Local Groups or Roles Using Computed Groups'
review:
    comment: ''
    date: '2017-12-13'
    status: ok
details:
    howto:
        excerpt: Learn how to let managers of a workspace determine who is part of locally defined groups (local to the workspace).
        level: Advanced
        tool: Studio
        topics: 'Permissions, Authentication'
labels:
    - lts2016-ok
    - howto
    - access-right
    - fguillaume
    - studio
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '19235681'
    ajs-parent-page-title: Transversal How-Tos
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Implement+Local+Groups+or+Roles+Using+Computed+Groups
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Implement+Local+Groups+or+Roles+Using+Computed+Groups'
    page_id: '14256023'
    shortlink: l4fZ
    shortlink_source: 'https://doc.nuxeo.com/x/l4fZ'
    source_link: /display/NXDOC/How+to+Implement+Local+Groups+or+Roles+Using+Computed+Groups
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2016-04-14 14:39'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2016-01-18 16:52'
        message: 'replace "Write" by "Edit"    '
        version: '20'
    -
        author: Manon Lumeau
        date: '2016-01-18 16:50'
        message: Reverted from v. 17
        version: '19'
    -
        author: Manon Lumeau
        date: '2016-01-18 16:50'
        message: 'replace "Write" by "Edit"    '
        version: '18'
    -
        author: Solen Guitter
        date: '2015-12-08 14:53'
        message: link update
        version: '17'
    -
        author: Solen Guitter
        date: '2015-11-09 16:49'
        message: Update link to Social Collaboration to point to 6.0
        version: '16'
    -
        author: Solen Guitter
        date: '2015-10-12 12:20'
        message: Remove link
        version: '15'
    -
        author: Solen Guitter
        date: '2015-01-30 14:00'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-12-11 14:57'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-12-01 22:19'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2014-09-19 14:47'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-09-18 16:57'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-09-18 16:49'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-07-22 11:34'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2014-07-21 12:44'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-07-12 14:49'
        message: ''
        version: '6'
    -
        author: Thibaud Arguillere
        date: '2013-07-11 12:27'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2013-07-11 01:01'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-07-11 01:01'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-07-11 00:59'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-07-05 19:02'
        message: ''
        version: '1'

---
{{! excerpt}}
In this how to, you will learn how to let managers of a workspace determine who is part of locally defined groups (local to the workspace). It is like implementing a "role" notion. For instance you may want to work with "members" of a workspace, as well as "administrators", and require that users with the administrator role can define who is a member and who is an administrator. This documentation will show you how to implement this kind of behavior, but for any "role" you want, and with even more complex use cases.
{{! /excerpt}}

{{#> callout type='info' }}
Starting from 8.10 HF-04 you need to configure the virtual groups explicitly. To do so, add the following contribution:

{{#> panel type='code'}}
```xml
<extension point="configuration" target="org.nuxeo.runtime.ConfigurationService">
  <require>org.nuxeo.ecm.core.automation.core.properties</require>
  <documentation>
    Allow setting permissions to virtual groups
  </documentation>
  <property name="nuxeo.automation.allowVirtualUser">true</property>
</extension>
```
{{/panel}}  
{{/callout}}

The Nuxeo security system gives you all the tools you need to define security from giving a simple right to a specific user on a document to defining complex use cases. You can basically play with ACLs, granting and denying permissions to users and groups. Groups in Nuxeo are defined by users part of the "powerusers" or "administrators" groups, in the [Admin Center]({{page space='userdoc' page='managing-users-and-groups'}}). But it is also possible to define another category of groups, whose content definition is not "manual": the _computed groups_.

Computed groups let you define a list of groups to which users will be affected using Java code. There are multiple use cases where you will need this feature. Implementation will require Java development knowledge and if you are familiar with Nuxeo Core Development (CoreSession, DocumentModel, ...), it's better.

Development environment requirements:

- A [Nuxeo Studio]({{page space='studio' page='nuxeo-online-services'}}) project (for the Workspace modification and User action definition),
- A [Nuxeo SDK]({{page space='idedoc' page='setting-up-a-nuxeo-sdk'}}) instance ready for test,
- A Java IDE, like [Nuxeo CLI]({{page version='' space='nxdoc' page='develop-with-nuxeo-platform'}}) (for bundle creation and computed group definition).

Examples of uses cases for which you will need computed groups:

- Delegation management
- Local groups on a workspace,
- Group resolved by complex logic more generally.

In the coming example we will implement the notion of "local groups" thanks to computed groups. Users with management permission on the workspace will be able to decide who is part of the "validators" group of the workspace by editing one of the metadata of this workspace. Some more complex examples can be thought of. Here is the global strategy to implement this use case:

- I want to create a virtual group named `$idWorkspace_validator` for each workspace, where `$idWorkspace` is the id of the workspace. Virtual means that the group is not referenced in the group directory. Affectation of users to the group will be resolved by a piece of Java code, just after the user gets authenticated to the system.
- Users affected to the `$idWorkspace_validator` group are the ones listed in the `wks:validator` property of the Workspace `$idWorkspace`. `wks:validators` must be added as a property containing the list of user names, on the Workspace type.
- I want to create a button on each document whose state is `inProgress`. Clicking on this button starts a simple validation workflow with one validation task assigned to the`&nbsp;_$idWorkspace__validator` group where `$idWorkspace` is the id of the closest parent workspace.

This use case is simple but from this example you can easily implement the delegation feature.

## Preparatory Step: Updating the Workspace Document Type

Here, we will just add the `wks:validators` field to the Workspace document type definition and improve the form to let the manager of the workspace set this value.

1.  In Studio, [create a schema]({{page space='studio' page='schemas'}}) with the name `workspace` and prefix& `wks`.
2.  In this schema, define a field `validators` as a list of string.
3.  In Studio, create a `Workspace` [document type]({{page space='studio' page='documents'}}) (to override the default Workspace document type set by Nuxeo).
4.  In the Workspace definition, add the schema `workspace` as an extra schema.
5.  In the Creation, View and Edition layouts, replace the _Warning..._ widget by the `wks:validators` field and set the widget `Multiple Users/Groups suggestion` and force only users suggestions.

Now, you can specify a list of validators into each workspace. Let's make users of this list members of the `$idWorkspace_validator` group.

## Java-Based Membership Definition

This part is the most interesting part of this presentation, where we see how Computed Group Service is leveraged to have dynamical group definitions.

We can summarize the Computed Group Service as follows:

- You can register a class that implements a method that will be called just after each user connection.
- The list of strings returned by your method will be considered as the list of virtual groups the user belongs to.

{{#> callout type='info' }}You should first have a quick first look to the [Javadoc of the ComputedGroupService](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/computedgroups/ComputedGroupsService.html) and the explorer.nuxeo.org documentation around this service ([computer](http://explorer.nuxeo.com/nuxeo/site/distribution/10.10/viewExtensionPoint/org.nuxeo.ecm.platform.computedgroups.ComputedGroupsServiceImpl--computer), [computerChain](http://explorer.nuxeo.com/nuxeo/site/distribution/10.10/viewExtensionPoint/org.nuxeo.ecm.platform.computedgroups.ComputedGroupsServiceImpl--computerChain)) and get back to it after having played this tutorial! {{/callout}}

### Preparing the Project

This part assumes you have Nuxeo CLI, and a Nuxeo Server associated to a Nuxeo Connect account.

1.  Create a new Nuxeo Plugin Project.
2.  Add the following component:

    {{#> panel type='code' heading='src/main/resources/OSGI-INF/test-computed-group-contrib.xml'}}
    ```xml
    <?xml version="1.0"?>
    <component
    	name="org.nuxeo.mail.management.security.computer.group.contribution"
    	version="1.0">
    	<extension point="computer"
    		target="org.nuxeo.ecm.platform.computedgroups.ComputedGroupsServiceImpl">
    		<groupComputer name="ValidatorsGroupComputer">
    			<computer>org.nuxeo.project.computed.group.ValidatorsGroupComputer
    			</computer>
    		</groupComputer>
    	</extension>
    	<extension point="computerChain"
    		target="org.nuxeo.ecm.platform.computedgroups.ComputedGroupsServiceImpl">
    		<groupComputerChain append="true">
    			<computers>
    				<computer>ValidatorsGroupComputer</computer>
    			</computers>
    		</groupComputerChain>
    	</extension>
    </component>
    ```
    {{/panel}}

    &nbsp;

    - The first contribution `computer` defines the class that will implement the logic that will return the list of virtual groups the user belongs to.
    - The second contribution&nbsp;`computerChain`enables to contribute and chain multiple resolution logics.
3.  Don't forget to reference the XML contribution in the `src/main/resources/META-INF/MANIFEST.MF`. The file must be like that:

    {{#> panel type='code' heading='MANIFEST.MF'}}
    ```perl
    Bundle-ActivationPolicy: lazy
    Bundle-ClassPath: .
    Manifest-Version: 1.0
    Bundle-Name: test-computed-group
    Bundle-RequiredExecutionEnvironment: JavaSE-1.6
    Nuxeo-Component: OSGI-INF/test-computed-group-contrib.xml
    Bundle-Version: 5.7.1
    Bundle-ManifestVersion: 2
    Bundle-SymbolicName: test-computed-group
    Bundle-Vendor: Nuxeo
    ```
    {{/panel}}

    {{#> callout type='warning' }}
    Don't forget to let the last line empty, without any character.
    {{/callout}}

    Now, let's see how to implement the membership logic based on the `wks:validators` property value.

### Coding your Computer Group

In the previous section we asked Nuxeo Runtime to register our new computer group. We named the class `org.nuxeo.project.computed.group.ValidatorsGroupComputer_._`

- So we must first create a class in `src/main/java`, defined in the package `org.nuxeo.project.computed.group`and named `ValidatorsGroupComputer`.
- This class must implement the `GroupComputer` interface. The Nuxeo Platform delivers an abstraction of this class with main class implemented named `AbstractGroupComputer`. We suggest to extend this class.
- The main method to implement is the `getGroupsForUser` that returns the list of virtual groups to which the user belongs given as parameter.
- The difficulty is that when `getGroupsForUser` is called the user is not yet connected. So you must execute code as a privileged user.

#### `ValidatorsGroupComputer` Class Creation

1.  As usual, simply create a class in the `src/main/java`.
2.  Mark it as extending the `AbstractGroupComputer` class.
    You must have something like that:

    {{#> panel type='code' heading='Simple Static Computer Group'}}
    ```java
    package org.nuxeo.project.computed.group;

    import java.util.ArrayList;
    import java.util.List;
    import org.nuxeo.ecm.platform.computedgroups.AbstractGroupComputer;
    import org.nuxeo.ecm.platform.usermanager.NuxeoPrincipalImpl;
    /**
     * @since 5.7.2
     *
     */
    public class ValidatorsGroupComputer extends AbstractGroupComputer {
        @Override
        public List<String> getGroupsForUser(NuxeoPrincipalImpl nuxeoPrincipal)
                throws Exception {
            List<String> result = new ArrayList<String>();
            result.add("myTestGroup");
            return result;
        }
        @Override
        public List<String> getAllGroupIds() throws Exception {
            // TODO Auto-generated method stub
            return null;
        }
        @Override
        public List<String> getGroupMembers(String groupName) throws Exception {
            // TODO Auto-generated method stub
            return null;
        }
        @Override
        public List<String> getParentsGroupNames(String groupName) throws Exception {
            // TODO Auto-generated method stub
            return null;
        }
        @Override
        public List<String> getSubGroupsNames(String groupName) throws Exception {
            // TODO Auto-generated method stub
            return null;
        }
    }
    ```
    {{/panel}}

**TEST**

As you can see in this example, the computer group statically returns `myTestGroup`. Let's test your test environment:`

1.  Bootstrap an empty project with Nuxeo CLI
2.  Make sure the project is correctly configured to be hot reloaded:
```
nuxeo hotreload configure
```
3.  Hot reload your project.
4.  Connect as Administrator into your Nuxeo instance.
5.  Go to **Home** > **Profile**.
6.  You must see a section virtual user into the main view with the `myTestGroup` referenced.

If you don't have this please look errors message into your Java project and into the server console.

{{#> callout type='note' }}
If you refresh several times your project in the SDK server, you will see `myTestGroup` as many times as you did refresh. This is because the extension point registering your Computer Group adds your contribution with each refresh. But if you stop and restart the server, your contribution will be deployed once, and `myTestGroup` will be displayed once.
{{/callout}}

Now, we need to replace this static result by a dynamic one that will be the list of `$idWorkspace_validator` where the user is referenced. But when the `getGroupsForUser`method is called, no Session on the Core Repository is available as the user is not yet connected. You will need to explicitly switch to a privileged user.

Here you can find [the project ready to use]({{file name='test-computed-group-static.zip' space='nxdoc' page='how-to-implement-local-groups-or-roles-using-computed-groups'}}).

#### CoreInstance.doPrivileged

The `CoreInstance.doPrivileged` method helps you execute code with a session without security constraint, even if you don't have session available.

Why do we need of this? Because in our example, we would like to fetch all workspaces where the user about to connect is referenced into the `wks:validators` field.

In other words, we would like to make the following query `SELECT * FROM Workspace WHERE wks:validators = 'theUsername'`, to get the id of each workspace to create the dynamic virtual groups list. Here is the code result:

{{#> panel type='code' heading='CoreInstance.doPrivileged Example implementation: get Workspace Ids'}}
```
List<String> groupIds = new ArrayList<>();
TransactionHelper.runInTransaction(() -> {
    CoreInstance.doPrivileged(repositoryName, session -> {
        try (IterableQueryResult results = session.queryAndFetch(query, "NXQL")) {
            for (Map<String, Serializable> result : results) {
                String groupId = (String) result.get("ecm:uuid");
                groupIds.add(groupId);
            }
        }
    });
});
```
{{/panel}}

{{#> callout type='info' }}
This code will be used in the Computer Group.
{{/callout}}

You will need this pattern several times to implement you Computer Group. So lets move to the next section and first replace the `getGroupsForUser` method with the dynamic resolution one.

#### `ValidatorsGroupComputer` Class with Dynamic Group List Resolution

In this section we will just merge information from the two previous ones and test it.

Here is the final version of the `ValidatorsGroupComputer` class:

{{#> panel type='code' heading='ValidatorsGroupComputer with dynamic groups'}}
```
package org.nuxeo.project.computed.group;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.nuxeo.ecm.core.api.CoreInstance;
import org.nuxeo.ecm.core.api.IterableQueryResult;
import org.nuxeo.ecm.core.api.repository.RepositoryManager;
import org.nuxeo.ecm.platform.usermanager.NuxeoPrincipalImpl;
import org.nuxeo.runtime.api.Framework;

public class ValidatorsGroupComputer extends AbstractGroupComputer {

    private static final String QUERY_GET_WORKSPACE_IDS = "SELECT ecm:uuid "
            + "FROM WORKSPACE WHERE wks:validators = '%s'";

    @Override
    public List<String> getGroupsForUser(NuxeoPrincipalImpl nuxeoPrincipal) {
        String username = nuxeoPrincipal.getName();
        String query = String.format(QUERY_GET_WORKSPACE_IDS, username);
        String repositoryName = Framework.getService(RepositoryManager.class).getDefaultRepositoryName();
        List<String> groupIds = new ArrayList<String>();
        CoreInstance.doPrivileged(repositoryName, session -> {
            try (IterableQueryResult it = session.queryAndFetch(query, "NXQL")) {
                for (Map<String, Serializable> map : it) {
                    String groupId = (String) map.get("ecm:uuid");
                    groupIds.add(groupId);
                }
            }
        });
        return groupIds;
    }
    @Override
    public List<String> getAllGroupIds() {
        // TODO Auto-generated method stub
        return null;
    }
    @Override
    public List<String> getGroupMembers(String groupName) {
        // TODO Auto-generated method stub
        return null;
    }
    @Override
    public List<String> getParentsGroupNames(String groupName) {
        // TODO Auto-generated method stub
        return null;
    }
    @Override
    public List<String> getSubGroupsNames(String groupName) {
        // TODO Auto-generated method stub
        return null;
    }
}
```
{{/panel}}

**TEST 1**

As you can see in this example, the computer group statically returns `myTestGroup`. Let&#39;s test your test environment:

1.  Restart your server.
3.  Hot reload your project.
5.  Connect as Administrator into your Nuxeo instance.
6.  Go to **Home** > **Profile**.
    You must see a section virtual user into the main view with no group referenced.


**TEST 2**

1.  Open [Nuxeo Studio](https://connect.nuxeo.com/nuxeo/site/studio/ide)
2.  Check the Nuxeo Studio Project where you defined the Workspace with the workspace schema and validate.
4.  Refresh.
5.  Connect as Administrator into your Nuxeo instance.
6.  Create a workspace and add Administrator as validator.
7.  Log out.
8.  Log in as Administrator.
9.  Go to **Home** > **Profile**.
    You must see a section virtual user into the main view with one group referenced.

{{#> callout type='info' }}
Why does Administrator log out? Because the resolution of groups are **only during the connection**.
{{/callout}}

## Button Creation

And now we have to create the button that starts the workflow and assign the validation task to the virtual group.

This part is a pure Studio demonstration, just a way of making sure our newly defined group do work.

1.  Create a user action:

    1.  Choose the **Contextual Tool** category.
    2.  Add filter to limit to users that have Edit&nbsp;permission.
2.  Create an automation chain and attach it to this action.
    In the Automation Chain definition:

    1.  Fetch > Context Document(s).
    2.  Execution Context > Set Context Variable From Input:</br>
        `name = "documentToValidate"`.
    3.  Document > Get Parent:<br/>
        `type = Workspace`.
    4.  Execution Context > Set Context Variable:<br/>
        `name = "validatorGroup", value = "group:@{Document.id}_validator"`.
    5.  Execution Context > Restore Document Input:<br/>
        `name = "documentToValidate"`.
    6.  Service > Create Task : task name = "Vallidation", directive = "Please Validate the document", variable name for actors prefixed = "validatorGroup", create one task per actor = unchecked

**TEST**

1.  Deploy your project.
6.  Connect as Administrator into your Nuxeo instance.
7.  Create two users: user1 and user2.
8.  Create a workspace and set user1 as validator.
9.  Create a File and click on your button.
10.  Connect as user1.
    On his Home Dashboard, you will see a task assigned on the File document.
11.  Log out and connect as Administrator.
12.  Modify the Workspace and add user2 into the validators list.
13.  Log out and connect as user1.
    On his Home Dashboard, you will see a task assigned on the File document.

## Conclusion

Next steps could be:

*   Add a listener on the Workspace to add an ACE on it to grant read or edit permission on the workspace for the validator group.
*   Implement a delegation document type that stores a missing user and a list of delegated users and add a computer group that resolves indirect group assignment through this object.


<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related How-Tos'}}

- [How-to index ]({{page page='how-to-index'}})

{{/panel}}
</div>

<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Managing Permissions]({{page space='userdoc' page='managing-permissions'}})
- [Nuxeo Platform User Registration]({{page page='nuxeo-platform-user-registration'}})

{{/panel}}
</div>
</div>
