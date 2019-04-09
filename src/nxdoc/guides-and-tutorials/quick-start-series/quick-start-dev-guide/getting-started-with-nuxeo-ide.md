---
title: Getting Started with Nuxeo IDE
review:
    comment: ''
    date: ''
    status: ok
toc: true
version_override:
    'FT': '/nxdoc/getting-started-with-nuxeo-generator'
    'LTS 2016': 810/nxdoc/getting-started-with-nuxeo-generator
confluence:
    ajs-parent-page-id: '22380836'
    ajs-parent-page-title: Quick Start Dev Guide
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Getting+Started+with+Nuxeo+IDE
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Getting+Started+with+Nuxeo+IDE'
    page_id: '22380821'
    shortlink: FYFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/FYFVAQ'
    source_link: /display/NXDOC60/Getting+Started+with+Nuxeo+IDE
tree_item_index: 200
history:
    -
        author: Bertrand Chauvin
        date: '2016-01-05 15:06'
        message: pdate eclipse descriptio
        version: '23'
    -
        author: Bertrand Chauvin
        date: '2016-01-05 15:06'
        message: Fix SDK link
        version: '22'
    -
        author: Solen Guitter
        date: '2015-10-14 09:05'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2015-10-14 09:03'
        message: Fix anchors and page payout
        version: '20'
    -
        author: Solen Guitter
        date: '2015-01-30 10:28'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2014-12-29 14:22'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2014-12-29 10:08'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-12-24 14:50'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2014-12-24 14:14'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2014-12-24 14:12'
        message: ''
        version: '14'
    -
        author: Vladimir Pasquier
        date: '2014-12-20 17:39'
        message: ''
        version: '13'
    -
        author: Anne Jubert
        date: '2014-11-25 15:29'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2014-11-25 14:53'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-11-17 14:33'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-11-17 14:32'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-11-17 14:31'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2014-11-17 14:27'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2014-11-07 10:59'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2014-11-07 10:59'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2014-11-06 12:29'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2014-11-06 12:28'
        message: ''
        version: '3'
    -
        author: Manon Lumeau
        date: '2014-11-06 12:26'
        message: ''
        version: '2'
    -
        author: Manon Lumeau
        date: '2014-11-06 12:25'
        message: ''
        version: '1'
previous_link: nxdoc/getting-started-with-nuxeo-studio

---
Here we want to add some server side Java logic that will update the date of renegotiation of the contract. In our exemple it will simply set date of creation + three months, but you can think of integrating in your Java class a connection to an external webservice or an ERP.

## Prerequisites

*   A document type Contract created at the [previous step]({{page page='getting-started-with-nuxeo-studio'}})
*   [Eclipse](http://www.eclipse.org/downloads) 4.3 for JEE developers (Kepler)
*   Java 7
*   A Nuxeo SDK: [Nuxeo Platform 6.0 SDK](http://cdn.nuxeo.com/nuxeo-6.0/nuxeo-cap-6.0-HF20-tomcat-sdk.zip) (LTS).

## Step 1 - Download Nuxeo IDE

### From Eclipse Marketplace

{{#> callout type='warning' }}

This procedure can only be used for **Nuxeo 6.0 and later** versions. **For Nuxeo 5.8**, please refer to the **installation from the Eclipse Menu**.

{{/callout}}

1.  In Eclipse, go into the **Help**, **Eclipse Marketplace** menu.
2.  The Eclipse Marketplace window opens.
3.  Search for **Nuxeo**, select **Nuxeo IDE** and click on the **Install** button.
    ![]({{file name='eclipse-marketplace-nx-ide.png'}} ?w=400,border=true)
4.  Nuxeo IDE and Nuxeo Shell are automatically selected and downloaded.
5.  When Nuxeo IDE and Nuxeo Shell are downloaded, click on the **Next** button.
6.  Accept license when prompted.
    Installation begins. After a few seconds, a security warning is prompted.
7.  On the security warning window, click on **OK**.
    Installation continues.
    ![]({{file name='NxIDE_install6.png'}} ?w=350,border=true)
8.  Restart Eclipse when prompted.
    Nuxeo IDE is installed. A new button is available in the Eclipse toolbar: ![]({{file name='NxIDE_button.png'}})

### From Eclipse Menu

1.  Open the install dialog from the Eclipse menu: **Help** > **Install New Software...**
2.  Click on **Add...** button and enter the Update Site URL (stable for the latest released version, or development for a development snapshot) and name and click the **OK** button.

*   Update site for **latest Nuxeo 5.8 compatible version**: [http://community.nuxeo.com/static/nuxeo-ide/releases/1.2.4.R12x_v20141120_1114/site/](http://community.nuxeo.com/static/nuxeo-ide/releases/1.2.4.R12x_v20141120_1114/site/)
*   Update site for latest Nuxeo IDE snapshot version: [http://community.nuxeo.com/static/nuxeo-ide/dev/site/](http://community.nuxeo.com/static/nuxeo-ide/dev/site/)
*   Update site for latest Nuxeo IDE stable version: [http://community.nuxeo.com/static/nuxeo-ide/stable/site/](http://community.nuxeo.com/static/nuxeo-ide/stable/site/)
*   To get latest Nuxeo IDE from QA: [http://qa.nuxeo.org/jenkins/job/nuxeo-ide-master/ws/nuxeo-ide/sites/org.nuxeo.ide.site/target/site/](http://qa.nuxeo.org/jenkins/job/nuxeo-ide-master/ws/nuxeo-ide/sites/org.nuxeo.ide.site/target/site/)
    ![]({{file name='NxIDE_install1.png'}} ?w=350,border=true)

4.  If nothing appears, uncheck the **Group items by category** box.
5.  Check both **Nuxeo IDE** and **Nuxeo Shell** and click **Next.**
    ![]({{file name='NxIDE_install2.png'}} ?w=400,border=true)

6.  Follow the wizard: accept license when prompted and click Next until the software is downloaded.
    ![]({{file name='NxIDE_install6.png'}} ?w=350,border=true)
7.  Restart Eclipse when prompted.
    Nuxeo IDE is installed. A new button is available in the Eclipse toolbar: ![]({{file name='NxIDE_button.png'}})

## Step 2 - Register a Nuxeo Online Services Account

**To configure a Nuxeo Online Services account:**

1.  Open Eclipse preferences and go to **Nuxeo** > **Nuxeo Connect**.
    The Host name is already filled in with Nuxeo Connect address.
2.  Type your Nuxeo Online Services login and password and click on the **Connect** button.
    The lists of Studio projects associated to your account is displayed.
    ![]({{file name='NxIDE_pref_connect_account.png'}} ?w=450,border=true)
3.  Click on **OK**.
    The Preferences window closes.
    You can now go to the Studio view to browse your Studio customizations.

## Step 3 - Register a Nuxeo SDK

1.  In the **Nuxeo SDK** preference page (Eclipse Menu -> Window -> Preferences -> Nuxeo -> Nuxeo SDK), click on **Add...**.
2.  Select the directory where you unzipped your Nuxeo distribution.
    Be sure to select the right directory: the one containing the `bin` and `nxserver` directories.
3.  **Check** the added Nuxeo SDK and click on the **OK** button to finish.
    Checking the box at the left of the SDK is required to mark it as the current Nuxeo SDK used in the Eclipse Workspace.

## Step 4 - Implement an Operation

Here we want to create an operation that indicates the date of renegotiation of a contrat by fetching the date of creation of the document and adding three months to it. An operation is a Java class in which you can put some logic and that can be exposed in Studio for being easily reused when implementing your business logic. See the [Automation]({{page page='automation'}}) section for more information about operations.

#### Create your Nuxeo Plugin Project

1.  Click on ![]({{file name='NxIDE_button.png'}}) > Nuxeo Plugin Project and click on **Next**.
2.  Fill in the Create project wizard:
    *   Project: I will call it `ContractRemindProject` .
    *   Root package: `org.nuxeo.sample`
3.  Click on **Next**.
4.  Fill in the Maven settings:
    *   Groupe Id: `org.nuxeo`
    *   Artifact Id: `ContractRemindProject`
    *   Artifact Version: 1.0-SNAPSHOT
    *   Parent Groupe Id: `org.nuxeo`
    *   Parent Artifact Id: `nuxeo-addons-parent`
    *   Parent version: 6.0
    *   Additional information: `ContractRemindProject`
5.  Click on **Finish**.

#### Coding your operation

1.  Click on ![]({{file name='NxIDE_button.png'}}) > **Automation** > **Operation** wizard and click on **Next**.
2.  Fill in the Create operation wizard:

    *   Project: the box is already filled with `ContractRemindProject`.
    *   Package: `org.nuxeo.sample.operation`.
    *   Name: I will call it `ContractUpdater`.
    *   Operation Id: I will use `ContractUpdater` too.
    *   Category: select `CAT_DOCUMENT`.
    *   Requires Seam Content: My operation does not need the Seam context so I will leave this box unticked.
    *   Operation Signature: Each operation accepts and returns something. For our operation, I will select document for both input and output.
    *   Iterable Operation: Ticked this box.
3.  Click on **Finish.**
    You should now have end up with something like this:

```
/**
 * @author mlumeau
 */
@Operation(id=ContractUpdater.ID, category=Constants.CAT_DOCUMENT, label="ContractUpdater", description="")
public class ContractUpdater {
    public static final String ID = "ContractUpdater";
    @OperationMethod(collector=DocumentModelCollector.class)
    public DocumentModel run(DocumentModel input) {
      return null;
    }    
}
```

Time to file the skeleton and start coding. Here is the final result:

```
/**
 * @author mlumeau
 */

@Operation(id = ContractUpdater.ID, category = Constants.CAT_DOCUMENT, label = "ContractUpdater", description = "")
public class ContractUpdater {

    public static final String ID = "Sample.ContractUpdater";
    private static final String CONTRACT_TYPE = "Contract";
    private static final String CONTRACT_SCHEMA = "contract";
    private static final String CONTRACT_START = CONTRACT_SCHEMA + ":start";
    private static final String CONTRACT_REMINDER = CONTRACT_SCHEMA
            + ":reminder";

    @OperationMethod(collector = DocumentModelCollector.class)
    public DocumentModel run(DocumentModel input) throws ClientException {
        if (!(CONTRACT_TYPE.equals(input.getType()))) {
            throw new ClientException("Operation works only with "
                    + CONTRACT_TYPE + " document type.");
        }

        Calendar start = (Calendar) input.getPropertyValue(CONTRACT_START);
        Calendar reminder = (Calendar) start.clone();
        reminder.add(Calendar.MONTH, 3);
        input.setPropertyValue(CONTRACT_REMINDER, reminder.getTime());
        return input;
    }
}
```

#### Send the Operation in Studio

1.  Click on the Perspective button ![]({{file name='open-perspective.png'}}) at the top right corner of the Eclipse window.
    Two new tabs appear on the left menu.
2.  Click on the Export Operation button ![]({{file name='export.gif'}}) on the Nuxeo Studio tab of the left menu.
3.  Select the Studio project in the drop down menu, and the Eclipse project to look for operation. Then click **Next**.
    ![]({{file name='Screen Shot 2014-10-07 at 11.46.11.png'}} ?w=450,border=true)
    You should now see your operation under the service category in automation. Which means we can now finish our automation chain.

## Step 5 - Deploy the Project on the Server

**Creating a deployment profile**

Here we want to create a new default profile, called "My Projects" that includes the `ContractRemindProject`.

1.  Go into the **Nuxeo Server** view (on the bottom right).
2.  Click on the button ![]({{file name='NxIDE_deploy_project_button.png'}}) in the view toolbar. The button tooltip is "Select projects to deploy on server".
3.  Click on **Add**.
    ![]({{file name='NxIDE_deployment_profile_conf.png'}} ?w=450,border=true)
4.  Enter a name (in the right panel) for your deployment profile. Example: "My Projects&rdquo;.
5.  In the left panel click on the newly created profile.
6.  In the right panel, check the projects that will be deployed with this profile.
7.  If you want the new profile to be the default deployment profile, check it.
8.  Click on the **OK** button.
9.  Here is what you should get:
    ![]({{file name='NxIDE_deployment_profile.png'}} ?w=450,border=true)
    Now every time you start the Nuxeo server or you click on the **Refresh** button in the Nuxeo Server view toolbar, the projects selected in the current profile will be (re)deployed on the server.

**Starting the server**

To start the server:

1.  Click on the **Run** button in the toolbar (![]({{file name='NxIDE_start_server_button.png'}})).
2.  Wait a minute (or more) until the server starts.
    ![]({{file name='NxIDE_start_server.png'}} ?w=450,border=true)
3.  When done (i.e when the **Stop** button is enabled), open a browser and login using the 'Administrator/Administrator' account.

    {{#> callout type='tip' }}

    You can open the browser by clicking the **Browse** button (![]({{file name='NxIDE_browse_button.png'}})).

    {{/callout}}

## Step 6 - Create Your Chain in Nuxeo Studio

Step 1: Create an automation chain

1.  In Studio (left menu), Click on **Automation** > **Automation Chains** > **New.**
    I will call it `ContractUpdater`.
2.  Keep the **Fetch > Context Document(s)** operation and add your own operation that you will find in **Document > ContractUpdater.**
    ![]({{file page='/nxdoc/develop-with-nuxeo-platform' name='contractUpdater_chain.png'}} ?w=450,border=true)
3.  Click on **Save**.

Step 2: Create an Event Handler

You know have to create an Event Handlers in order to call your operation when a contract is created.

1.  In Studio (left menu), Click on **Automation** > **Event Handlers** > **New**.
    I will call it `Reminder`
2.  Fill in the creation wizard:
    1.  Events: select About to create.
    2.  Current document has one of the types: select your document type Contract.
    3.  Event Handler Execution: Choose your automation chain `ContractUpdater`.
3.  Click on **Save**.

Now, you can try it on your server by deploying your changes on your Nuxeo Platform instance, to do so:

1.  In Eclipse, click on the **Refresh** button in the **Nuxeo Server** view (![]({{file name='refresh.gif'}})).

2.  Go back in the browser, and refresh the `http://NUXEO_SERVER/nuxeo/site/test` page.

You should end up with something like this:

![]({{file name='Screen Shot 2014-10-10 at 10.35.00.png'}} ?w=650,border=true)

{{#> callout type='info' }}

That's it! You are ready to develop on the Nuxeo Platform.

{{/callout}}
