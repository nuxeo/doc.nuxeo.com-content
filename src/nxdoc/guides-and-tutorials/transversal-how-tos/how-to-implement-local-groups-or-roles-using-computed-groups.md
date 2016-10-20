---
title: How to Implement Local Groups or Roles Using Computed Groups
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to let managers of a workspace determine who is part of
            locally defined groups (local to the workspace).
        level: Advanced
        tool: Studio
        topics: Access rights
labels:
    - howto
    - studio
    - access-right
toc: true
confluence:
    ajs-parent-page-id: '22380616'
    ajs-parent-page-title: Transversal How-Tos
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: How+to+Implement+Local+Groups+or+Roles+Using+Computed+Groups
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/How+to+Implement+Local+Groups+or+Roles+Using+Computed+Groups
    page_id: '22380704'
    shortlink: oIBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/oIBVAQ'
    source_link: >-
        /display/NXDOC60/How+to+Implement+Local+Groups+or+Roles+Using+Computed+Groups
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2015-01-30 13:10'
        message: ''
        version: '15'
    -
        author: Vincent Dutat
        date: '2014-12-12 21:56'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-12-11 15:06'
        message: update link to Nuxeo Platform User Registration
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
{{#> callout type='info' }}

In this how to, you will learn how to let managers of a workspace determine who is part of locally defined groups (local to the workspace). It is like implementing a "role" notion. If you are familiar with [Social Collaboration module]({{page space='userdoc60' page='nuxeo-social-collaboration'}}), you know there are "members" of a social workspace, and "administrators". And that users with the administrator role can define who is a member and who is an administrator. Thanks to this piece of documentation, you will be able to implement the same behavior, but for any "role" you want, and even think of more subtle use cases.

{{/callout}}

The Nuxeo security system gives you all the tools you need to define security from giving a simple right to a specific user on a document to defining complex use cases. You can basically play with ACLs, granting and denying permissions to users and groups. Groups in Nuxeo are defined by users part of the "powerusers" or "administrators" groups, in the [Admin Center]({{page space='userdoc60' page='managing-users-and-groups'}}). But it is also possible to define another category of groups, whose content definition is not "manual": the computed groups.

Computed groups let you define a list of groups to which users will be affected using Java code. There are multiple use cases where you will need this feature. Implementation will require Java development knowledge and if you are familiar with Nuxeo Core Development (CoreSession, DocumentModel, UnrestrictedRunner, ...), it's better.

Development environment requirements:

*   a [Nuxeo Studio]({{page space='studio' page='nuxeo-online-services'}}) project (for the Workspace modification and User action definition),
*   a [Nuxeo SDK]({{page space='idedoc' page='setting-up-a-nuxeo-sdk'}}) instance ready for test,
*   [Nuxeo IDE]({{page space='idedoc' page='documentation-center-for-nuxeo-platform-ides'}}) (for bundle creation&nbsp;and computed group definition).

Examples of uses cases for which you will need computed groups:

*   delegation management
*   local groups on a workspace,
*   group resolved by complex logic more generally.

In the coming example we will implement the notion of "local groups" thanks to computed groups. Users with management permission on the workspace will be able to decide who is part of the "validators" group of the workspace by editing one of the metadata of this workspace. Some more complex examples can be thought of. Here is the global strategy to implement this use case:

*   I want to create a virtual group&nbsp;named&nbsp;`$idWorkspace_validator` for each workspace, where `$idWorkspace` is the id of the workspace. Virtual means that the group is not referenced in the group directory. Affectation of users to the group will be resolved by a piece of Java code, just after the user gets authenticated to the system.
*   Users affected to the `$idWorkspace_validator` group are the ones listed in the `wks:validator` property of the Workspace `$idWorkspace`. `wks:validators` must be added as a property containing the list of user names, on the Workspace type.
*   I want to create a button on each document whose state is&nbsp;`inProgress`. Clicking on this button starts a simple validation workflow with one validation task assigned to the`&nbsp;_$idWorkspace__validator` group where&nbsp;`$idWorkspace`&nbsp;is the id of the closest parent workspace.

This use case is simple but from this example you can easily implement the delegation feature.

## Preparatory Step: Updating the Workspace Document Type

Here, we will just add the `wks:validators` field to the Workspace document type definition and improve the form to let the manager of the workspace set this value.

1.  In Studio, [create a schema]({{page space='studio' page='schemas'}}) with the name&nbsp;`workspace`&nbsp;and prefix&nbsp;`wks`.
2.  In this schema, define a field&nbsp;`validators` as a list of string.
3.  In Studio, create a `Workspace` [document type]({{page space='studio' page='documents'}}) (to override the default Workspace document type set by Nuxeo).
4.  In the Workspace definition, add the schema&nbsp;`workspace` as an extra schema.
5.  In the Creation, View and Edition layouts, replace the&nbsp;_Warning...&nbsp;_widget by the&nbsp;`wks:validators`field and set the widget&nbsp;`Multiple Users/Groups suggestion` and force only users suggestions.

Now, you can specify a list of validators into each workspace. Let's make users of this list members of the&nbsp;`$idWorkspace_validator` group.

## Java-based membership definition

This part is the most interesting part of this presentation, where we see how Computed Group Service is leveraged to have dynamical group definitions.

<div>

<div>We can resume the Computed Group Service like that:</div>

<div>

*   You can register a class that implements a method that will be called just after each user connection.
*   The list of strings returned by your method will be considered as the list of virtual groups the user belongs to.

{{#> callout type='info' }} You should first have a quick first look to the [Java doc of the ComputedGroupService](https://github.com/nuxeo/nuxeo-services/blob/release-6.0/nuxeo-platform-usermanager-core/src/main/java/org/nuxeo/ecm/platform) and the [explorer.nuxeo.org documentation around this service](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewBundle/org.nuxeo.ecm.platform.usermanager) and get back to it after having played this tutorial! {{/callout}}

&nbsp;

</div>

### Preparing the Project

This part assumes you have [IDEDOC]({{page space='idedoc'}}) configured with the Nuxeo SDK associated and Nuxeo Connect account referenced. Please look [this documentation]({{page page='getting-started-with-nuxeo-ide'}}) if you don't.

</div>

<div>

1.  Create a new&nbsp;Nuxeo Plugin Project.
2.  Add the following component:

    {{#> panel type='code' heading='src/main/resources/OSGI-INF/test-computed-group-contrib.xml'}}

    ```html/xml
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

    *   The first contribution `computer` defines the class that will implement the logic that will return the list of virtual groups the user belongs to.
    *   The second contribution&nbsp;`computerChain`enables to contribute and chain multiple resolution logics.
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

    {{/panel}} {{#> callout type='warning' }}

    Don't forget to let the last line empty, without any character.

    {{/callout}}

    Now, let's see how to implement the memberhsip logic based on the `wks:validators`&nbsp;property value.

### Coding your Computer Group

In the previous section we asked Nuxeo Runtime to register our new computer group. We named the class&nbsp;`org.nuxeo.project.computed.group.ValidatorsGroupComputer_._`

*   So we must first create a class in `src/main/java`, defined in the package&nbsp;`org.nuxeo.project.computed.group`and named _`ValidatorsGroupComputer`._
*   This class must implement the&nbsp;`GroupComputer` interface. The Nuxeo Platform delivers an abstraction of this class with main class implemented named&nbsp;`AbstractGroupComputer`. We suggest to extend this class.
*   The main method to implement is the&nbsp;`getGroupsForUser` that returns the list of virtual groups to which the user belongs given as parameter.
*   The difficulty is that when&nbsp;`getGroupsForUser` is called the user is not yet connected. So you must play with the Unrestricted Runner object.

#### `ValidatorGroupComputer` Class Creation

1.  As usual, simply create a class in the `src/main/java`.
2.  Mark it as extending the&nbsp;`AbstractGroupComputer` class.
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

<div>As you can see in this example, the computer group statically returns `myTestGroup`. Let's test your test environment:</div>

<div>

1.  Start your SDK instance from the Nuxeo IDE interface.
    See the page [Getting Started with Nuxeo IDE]({{page page='getting-started-with-nuxeo-ide'}}) for details.
2.  Add your project into the deployment configuration.
3.  Refresh the deployment server.
4.  Connect as Administrator into your Nuxeo instance.
5.  Go to **Home** > **Profile**.
6.  You must see a section virtual user into the main view with the `myTestGroup_&nbsp;_` referenced.

If you don't have this please look errors message into your Java project and into the server console.

{{#> callout type='note' }}

If you refresh several times your project in the SDK server, you will see `myTestGroup` as many times as you did refresh. This is because the extension point registering your Computer Group adds your contribution with each refresh. But if you stop and restart the server, your contribution will be deployed once, and `myTestGroup` will be displayed once.

{{/callout}}

Now, we need to replace this static result by a dynamic one that will be the list of `$idWorkspace_validator` where the user is referenced. But when the&nbsp;`getGroupsForUser`method is called, no Session on the Core Repository is available as the user is not yet connected. Here comes the `UnrestrictedRunner` object.

Here you can find [the project ready to use]({{file name='test-computed-group-static.zip' space='nxdoc56' page='implementing-local-groups-or-roles-using-computed-groups'}}).

</div>

#### UnrestrictedRunner Object

Extending the `UnrestrictedRunner`&nbsp;object helps you executing code with a session without security constraint, even if you don't have session available.

How it works:

1.  Define a constructor where you will initialize the parameters&nbsp;needed for your code unrestricted execution.
2.  Implement a run method where a `CoreSession` will be available without restriction.
3.  Execute the&nbsp;`runUnrestricted` method that will execute your run implementation without restriction.

Why do we need of this? Because in our example, we would like to fetch all workspaces where the user about to connect is referenced into the `wks:validators` field.

In other words, we would like to make the following query `SELECT * FROM Workspace WHERE wks:validators = 'theUsername'`,&nbsp;to get the id of each workspace to create the dynamic virtual groups list.&nbsp;Here is the code result:

{{#> panel type='code' heading='UnrestrictedRunner Example implementation: get Workspace Ids'}}

```java
    protected class GetWorkspaceIds extends UnrestrictedSessionRunner {

        private static final String QUERY_GET_WORKSPACE_IDS = "SELECT ecm:uuid "
                + "FROM WORKSPACE WHERE wks:validators = '%s'";

        public IterableQueryResult ids = null;

        private String username;

        protected GetWorkspaceIds(String repositoryName, String username)
                throws Exception {
            super(repositoryName);
            this.username = username;
        }

        @Override
        public void run() throws ClientException {
            String query = String.format(QUERY_GET_WORKSPACE_IDS, username);
            ids = session.queryAndFetch(query, "NXQL");
        }
    }
```

{{/panel}} {{#> callout type='info' }}

You can create this class as a public class, but we suggest to create it directly into the Computer Group.

{{/callout}}

You will need this pattern several times to implement you Computer Group. So lets move to the next section and first replace the `getGroupsForUser` method with the dynamic resolution one.

#### `ValidatorGroupComputer` Class with Dynamic Group List Resolution

In this section we will just merge information from the two previous ones and test it.

Here is the final version of the&nbsp;`ValidatorGroupComputer` class:

{{#> panel type='code' heading='ValidatorGroupComputer with dynamic groups'}}

```java
package org.nuxeo.project.computed.group;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.nuxeo.ecm.core.api.ClientException;
import org.nuxeo.ecm.core.api.IterableQueryResult;
import org.nuxeo.ecm.core.api.UnrestrictedSessionRunner;
import org.nuxeo.ecm.core.api.repository.RepositoryManager;
import org.nuxeo.ecm.platform.computedgroups.AbstractGroupComputer;
import org.nuxeo.ecm.platform.usermanager.NuxeoPrincipalImpl;
import org.nuxeo.runtime.api.Framework;
/**
 * @since 5.7.2
 *
 */
public class ValidatorsGroupComputer extends AbstractGroupComputer {
    private static final Log log = LogFactory.getLog(ValidatorsGroupComputer.class);
    @Override
    public List<String> getGroupsForUser(NuxeoPrincipalImpl nuxeoPrincipal)
            throws Exception {
        String username = nuxeoPrincipal.getName();
        GetWorkspaceIds runner = new GetWorkspaceIds(getRepository(), username);
        runner.runUnrestricted();
        List<String> groupIds = new ArrayList<String>();
        String groupId = null;
        for (Map<String, Serializable> id : runner.ids) {
            groupId = ((String) id.get("ecm:uuid")) + "_validator";
            log.debug("Virtual Group Id found: " + groupId);
            groupIds.add(groupId);
        }
        return groupIds;
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
    protected class GetWorkspaceIds extends UnrestrictedSessionRunner {
        private static final String QUERY_GET_WORKSPACE_IDS = "SELECT ecm:uuid "
                + "FROM WORKSPACE WHERE wks:validators = '%s'";
        public IterableQueryResult ids = null;
        private String username;
        protected GetWorkspaceIds(String repositoryName, String username)
                throws Exception {
            super(repositoryName);
            this.username = username;
        }
        @Override
        public void run() throws ClientException {
            String query = String.format(QUERY_GET_WORKSPACE_IDS, username);
            ids = session.queryAndFetch(query, "NXQL");
        }
    }
    private String getRepository() {
        return Framework.getLocalService(RepositoryManager.class).getDefaultRepository().getName();
    }
}
```

{{/panel}}

**TEST 1**

<div>As you can see in this example, the computer group statically returns `myTestGroup. Let's test your test environment:`</div>

<div>

*   Stop your server from the Nuxeo IDE interface (if you didn't do it).
*   Start it again from the Nuxeo IDE interface.
*   Add your project into the deployment configuration (if you removed it).
*   Refresh the deployment server.
*   Connect as Administrator into your Nuxeo instance.
*   Go to **Home** > **Profile**.
*   You must see a section virtual user into the main view with no group&nbsp;referenced.

**TEST 2**

*   Right-click on your Java project into the Nuxeo IDE.
*   Go to **Nuxeo** > **Nuxeo Studio**.
*   Check the Nuxeo Studio Project where you defined the Workspace with the workspace schema and validate.
*   Refresh.
*   Connect as Administrator into your Nuxeo instance.
*   Create a workspace and add Administrator as validator.
*   Log out.
*   Log in as Administrator.
*   Go to **Home** > **Profile**.
*   You must see a section virtual user into the main view with one group&nbsp;referenced.

{{#> callout type='info' }}

Why does Administrator log out? Because the resolution of groups are **only during the connection.**

{{/callout}}

&nbsp;

</div>

## Button Creation

And now we have to create the button that starts the workflow and assign the validation task to the virtual group.

<div>This part is a pure Studio demonstration, just a way of making sure our newly defined group do work :smile::</div>

<div>

1.  Create a user action:

    1.  Choose the **Contextual Tool** category.
    2.  Add filter to limit to users that have Write permission.
2.  Create an automation chain and attach it to this action.
    In the Automation Chain definition:

    1.  Fetch > Context Document(s).
    2.  Execution Context > Set Context Variable From Input: `name = "documentToValidate"`.
    3.  Document > Get Parent : `type = Workspace`.
    4.  Execution Context > Set Context Variable: `name = "validatorGroup", value = "group:@{Document.id}_validator"`.
    5.  Execution Context > Restore Document Input : `name = "documentToValidate"`.
    6.  Service > Create Task : task name = "Vallidation", directive = "Please Validate the document", variable name for actors prefixed = "validatorGroup", create one task per actor =&nbsp;unchecked

**TEST**

<div>

1.  Stop your server from the Nuxeo IDE interface (if you didn't do it).
2.  Start it again from the Nuxeo IDE interface.
3.  Refresh the Nuxeo Studio Panel in Nuxeo IDE interface.
4.  Add your project into the deployment configuration (if you removed it).
5.  Refresh the deployment server.
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

*   Add a listener on the Workspace to add an ACE on it to grant read or write right on the workspace for the validator group.
*   Implement a delegation document type that stores a missing user and a list of delegated users and add a computer group that resolves indirect group assignment through this object.

</div>

</div>

</div>

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

*   [undefined]()
*   [How to Let Users Set Rights on Non Folderish Documents]({{page page='how-to-let-users-set-rights-on-non-folderish-documents'}})
*   [undefined]()
*   [How-to index ]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Managing Access Rights]({{page space='userdoc60' page='managing-access-rights'}})
*   [Working with workspace]({{page space='userdoc60' page='working-with-workspaces'}})
*   [Nuxeo Platform User Registration]({{page page='nuxeo-platform-user-registration'}})

{{/panel}}</div></div>
