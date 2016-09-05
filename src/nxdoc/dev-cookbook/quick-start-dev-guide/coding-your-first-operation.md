---
title: Coding your first operation
labels:
    - operation
toc: true
confluence:
    ajs-parent-page-id: '17334418'
    ajs-parent-page-title: Quick Start Dev Guide
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Coding+your+first+operation
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Coding+your+first+operation'
    page_id: '17334405'
    shortlink: hYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/hYAIAQ'
    source_link: /display/NXDOC58/Coding+your+first+operation
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 14:03'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-07-17 15:55'
        message: Fixed terminology
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-07-15 14:14'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-07-15 14:06'
        message: ''
        version: '1'

---
&nbsp;

## Creating an operation using the Operation Wizard

Our Eclipse project won't do much as is. We're going to add a new operation that will generate a random alphanumeric string. To do so:

1.  <span style="font-size: 10.0pt;line-height: 13.0pt;">Click on the **New Nuxeo artifact wizard** button again.
    </span>
2.  <span style="font-size: 10.0pt;line-height: 13.0pt;">This time select the **Automation** > **Operation** wizard and click on **Next**.</span>
    <span style="font-size: 10.0pt;line-height: 13.0pt;">![]({{file name='choose_operation_wiz.png'}} ?w=500,border=true)</span>
3.  <span style="font-size: 10.0pt;line-height: 13.0pt;">Fill in the Create operation wizard:</span>

    *   Projet: It should select your current Eclipse project automatically.
    *   Package: choose the Java package of your operation (because an operation is actually a Java class).
    *   Name: the name of your operation. I will call it `RandomStringGenerator`.
    *   Operation Id: I will use `RandomStringGenerator` too.
    *   Category: This category is used in Nuxeo Studio (because yes, the ultimate goal of this is to use our new operation in Studio). I will select `CAT_SERVICES`.
    *   Requires Seam Content: My operation does not need the Seam context so I will leave this box unticked.
    *   Operation Signature: Each operation accepts and returns something, or nothing in our case. So I will select void for both input and output.
    *   Iterable Operation: Having it iterable does not really make sense when you select void as input so I'll just leave it like that. ![]({{file name='CreateOperationWizard.png'}} ?w=500,border=true)
4.  Click on **Finish** .
    You should now have end up with something like this:

    {{#> panel type='code' heading='Random String Generator Operation'}}

    ```java
    /**
    * @author ldoguin
    */
    @Operation(id=RandomStringGen.ID, category=Constants.CAT_SERVICES, label="RandomStringGen", description="")
    public class RandomStringGen {
        public static final String ID = "RandomStringGen";

        @OperationMethod
        public void run() {
        }
    }
    ```

    {{/panel}}

Time to fill this skeleton and start coding. We have to generate a random alphanumeric string.

1.  This can be done easily using the java.util UUID class.

    ```java
    String randomString = UUID.randomUUID().toString();
    ```

2.  Now that the String is generated, we have to put it somewhere. When you're running an automation chain, you can access a Context object shared between every operation of your chain. So we can put it in the `OperationContext`. You can inject it in your class easily using the `**@Context**` annotation.

    ```java
    @Context
    public OperationContext context;
    ```

3.  &nbsp;The operation needs a name, that will be a parameter. This way we let the user decide the variable name. To declare a parameter, we use the `**@Param**` annotation.

    ```java
    @Param(name= "name", required=true)
    public String name;
    ```

4.  Of course, you need to put the variable in the operation context.

    ```java
    context.put(name, randomString);
    ```

    Here's the final result:

    {{#> panel type='code' heading='Random String Generator Operation'}}

    ```java
    package org.nuxeo.sample;

    import java.util.UUID;

    import org.nuxeo.ecm.automation.OperationContext;
    import org.nuxeo.ecm.automation.core.Constants;
    import org.nuxeo.ecm.automation.core.annotations.Context;
    import org.nuxeo.ecm.automation.core.annotations.Operation;
    import org.nuxeo.ecm.automation.core.annotations.OperationMethod;
    import org.nuxeo.ecm.automation.core.annotations.Param;

    /**
    * @author ldoguin
    */
    @Operation(id=RandomStringGen.ID, category=Constants.CAT_SERVICES, label="RandomStringGen", description="")
    public class RandomStringGen {

        public static final String ID = "RandomStringGen"

        @Context
        public OperationContext context;

        @Param(name= "name", required=true)
        public String name;

        @OperationMethod
        public void run() {
            String randomString = UUID.randomUUID().toString();
            context.put(name, randomString);
        }

    }
    ```

    {{/panel}}

The `**@Context**` &nbsp;annotation lets you inject the operation context as well as&nbsp;any Nuxeo services, the current user etc...

<span style="color: rgb(0,0,0);font-size: 1.6em;font-weight: bold;line-height: normal;">Send the Operation in Studio</span>

Very basic operation but you get the idea. Now it's nice to have this operation, but we still need to use it in Studio. Let's make it available there.

1.  On the Nuxeo Studio tab, there's an Export Operation ![]({{file name='export.gif'}})&nbsp;buttons in the right upper corner. Click on it.
2.  Select the Studio project in the drop down menu, and the Eclipse project to look for operation. Then click Next.&nbsp;

    ![]({{file name='choose_project.png'}} ?w=500,border=true)

    It should show you your operation already selected.

3.  You can click on Finish and go to your Studio project.

    ![]({{file name='choose operation.png'}} ?w=500,border=true)

    You should now see your operation under the service category in automation. Which means we can now finish our automation chain.

## Finish chain in Studio

Let's go back in Studio to edit and finish the automation chain:

1.  Click on Automation > Automation Chains > UIDUpdateChain.
2.  Removed the **Document** > **Update Property** operation.
    This operation allows only one document property to be updated. Now we need to update two, the `uid` and the `RandomField` we have added. That's why we need to use the&nbsp;Update Properties operation instead.
3.  Add the **Services** > **RandomStringGen** operation.
    As you can see we have a required `**name**` parameter. This will be the name of the random string we generate in the context. Because I am very inventive, I've picked&nbsp; `MyRandomString`.
4.  Add the **Document** > **Update Properties** operation at the end of the chain.
    Here's the content of the `**properties**` parameter:

    ```none
    uid:uid=@{idValue}
    sample:RandomField=@{MyRandomString}
    ```

    Here's what it s supposed to look like:

    ![]({{file name='updateAutomationChain.png'}} ?w=650,h=402,border=true)

Now that we know our automation chain works, let's try it on the server&nbsp;:smile: