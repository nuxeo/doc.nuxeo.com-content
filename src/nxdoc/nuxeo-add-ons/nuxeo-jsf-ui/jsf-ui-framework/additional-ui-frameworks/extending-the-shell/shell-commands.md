---
title: Shell Commands
review:
    comment: ''
    date: '2020-09-30'
    status: ok
labels:
    - content-review-lts2016
    - shell
    - jcarsique
    - shell-component
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '4687725'
    ajs-parent-page-title: Extending The Shell
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Shell+Commands
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Shell+Commands'
    page_id: '4687700'
    shortlink: VIdH
    shortlink_source: 'https://doc.nuxeo.com/x/VIdH'
    source_link: /display/NXDOC/Shell+Commands
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-08-31 14:39'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2015-08-31 14:34'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2013-09-05 16:32'
        message: ''
        version: '18'
    -
        author: Benoit Delbosc
        date: '2012-12-24 16:28'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2012-05-15 16:45'
        message: Migrated to Confluence 4.0
        version: '16'
    -
        author: Solen Guitter
        date: '2012-05-15 16:45'
        message: Added related pages
        version: '15'
    -
        author: Solen Guitter
        date: '2011-11-07 16:48'
        message: ''
        version: '14'
    -
        author: Bogdan Stefanescu
        date: '2010-11-25 10:28'
        message: ''
        version: '13'
    -
        author: Bogdan Stefanescu
        date: '2010-11-25 09:24'
        message: ''
        version: '12'
    -
        author: Bogdan Stefanescu
        date: '2010-11-25 00:13'
        message: ''
        version: '11'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 23:08'
        message: ''
        version: '10'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 23:05'
        message: ''
        version: '9'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 22:53'
        message: ''
        version: '8'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 22:28'
        message: ''
        version: '7'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 21:57'
        message: ''
        version: '6'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 21:56'
        message: §a
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 18:55'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 18:43'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 15:41'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 12:44'
        message: ''
        version: '1'

---
{{! excerpt}}

Let's look now into Command implementation details.

{{! /excerpt}}

## Creating A Command

When creating a command you should think about:

1.  What my command is doing - choose a name, write a short description and define the command parameters.
2.  Map the command parameters on object fields.
3.  Specify any completors you want for the parameter values. If you need a new completor, write it and register it through the feature contributing your command.
4.  implement the command logic.
5.  register your command in a namespace.

I will demonstrate this on creating a command that is listing the children of remote document with an optional filter on the child document type.

### Define the Command Syntax

My command is listing children given a type so I will name it **lst**. So it will take as parameters an option which is the type to filter on, and an optional argument which is the target document to list its children. If no type is given all children will be listed.
The document argument is optional because if not specified the current document will be used as the target document.

Any command should implement the `java.lang.Runnable` interface - since the **run** method will be invoked by the shell to execute the command.

```
@Command(name = "lst", help = "List children documents filtered by type")
public class Lst implements Runnable {
    public void run() {
    }
}

```

So, I've put a name on my command and a short description which will be used to generate the documentation.
You can also specify alias names for your command by filling the **aliases** attribute of the @Command annotation.
Example `aliases = "listByType"`

Let's go to the next step.

### Map the Command Parameters on Object Fields

Now I need to map the command line arguments to fields on my Command object.

```
@Command(name = "lst", help = "List children documents filtered by type")
public class Lst implements Runnable {

    @Argument(name = "doc", index = 0, required = false, help = "A document to list its content. If not specified list the current document content.")
    protected DocRef doc;

    @Parameter(name = "-type", hasValue = true, help = "The type to filter on children. If not specified all children will be listed.")
    protected boolean uid = false;

    public void run() {
    }
}

```

So I mapped the target document on my **doc** field, and the -type option on my **type** field.
So when I will run my command these fields will be injected with the user options specified through the command line.

But how the document target which is specified as a path will become a **DocRef** object? This is because the Automation Feature is providing an Object Adapter from String to DocRef. It will convert a document path into a Java DocRef object which will be used by the automation client to reference a remote document.

Also, the **doc** field is not require since if it is not specified I will use the current document as the target of my command.

You can see that the **-type** option specify that waits for a value (the **hasValue** attribute). If this attribute is not specified the option will be assumed to be a flag (i.e. boolean value that activate a behavior when used).

Let's look at the next step.

### Add Completors if Any

Now I want to add completors for my parameter values. Automation Feature is already providing a completor for documents. I will create a completor for possible children types.
Here is the type completor:

```
public class SimpleDocTypeCompletor extends SimpleCompletor {
    public DocTypeCompletor() {
        super(new String[] { "Workspace", "Section", "Folder",
                "File", "Note" });
    }
}

```

The `SimpleCompletor` is a helper provided by JLine to create simple completors. To create complex completors you may want to directly implement the JLine `Completor` interface.

My completor only allows a few types to filter on: Workspace, Section, Folder, File and Note. To create a more useful completor we will want to make a query to the server for the available types in the repository.

Let's now specify my completor for the **-type** option and the `DocRefCompletor` provided by the Automation Filter for my **doc** argument.

```
@Command(name = "lst", help = "List children documents filtered by type")
public class Lst implements Runnable {

    @Argument(name = "doc", index = 0, required = false, completor=DocRefCompletor.class, help = "A document to list its content. If not specified list the current document content.")
    protected DocRef doc;

    @Parameter(name = "-type", hasValue = true, completor=SimpleDocTypeCompletor.class, help = "The type to filter on children. If not specified all children will be listed.")
    protected boolean uid = false;

    public void run() {
    }
}

```

Let's go to next step now.

### Implement Command Logic

Now I want implement the command logic - the **run** method.
But first, I need explain some things made available by the Automation Feature.

The Automation Feature is keeping an object **RemoteContext** which reflects the state of our remote session. It provides remote API and hold things such as the current document in the shell. This object is made available for injection because it was registered by the Automation Feature as a **Context Object**. So let's inject that object:

```
@Command(name = "lst", help = "List children documents filtered by type")
public class Lst implements Runnable {
    @Context
    protected RemoteContext ctx;

    ...
    public void run() {
    }
}

```

Now in the **run** method we can use the **ctx** object to access to the server and to the remote context of the shell.

{{#> callout type='tip' heading='Don\'t Like Injection?'}}

If you don't like injection you can always lookup yourself the context objects through the shell instance.
The `@Context protected RemoteContext ctx;` construct is eqiuivalent to

```
protected RemoteContext ctx = Shell.get().getContextObject(RemoteContext.class)
```

{{/callout}}

Now we are ready to implement the **run** method. I will omit the fields declaration to have a more readable code:

```
    public void run() {
        if (doc == null) {
            // get the current document if target doc was not specified.
            doc = ctx.getDocument();
        }  
        ShellConsole console = ctx.getShell().getConsole();
        try {
            if (type == null) {
                for (Document child : ctx.getDocumentService().getChildren(doc)) {
                    DocumentHelper.printName(console, child);
                }
            } else {
                for (Document doc : ctx.getDocumentService().getChildren(doc)) {
                    if (type.equals(child.getType())) {
                        DocumentHelper.printName(console, child);
                    }
                }
            }
        } catch (Exception e) {
            throw new ShellException("Failed to list document " + path, e);
        }
    }

```

You can see that the Shell instance is retrieved from the context, but you can inject it as you injected the context or use `Shell.get()` construct to lookup the Shell instance.

The **DocumentHelper** is a class that provide a helper method to extract the name of a document from its path and print it on the console.

You can just use `console.println(doc.getPath());` if you want to print the full path of children.

The `ctx.getDocumentService()` is returning a helper service instance to deal with remote automation calls. If you want more control on what you are doing use `ctx.getSession()` and then use the low level API of Automation Client.

### Register the Command in a Namespace

Now, our command is ready to run. We need just to register it before. For this either we are directly the **remote** namespace and add it - but for many of us this is not possible since you need to modify the Nuxeo Shell JAR. In that case we will create a new feature like explained in [Shell Features]({{page page='shell-features'}}).

```
public class MyFeature implements ShellFeature {
    public void install(Shell shell) {
       shell.getRegistry("remote").addAnnotatedCommand(Lst.class);
    }
}

```

And then register the feature as explained in [Shell Features]({{page page='shell-features'}}). Build your JAR and put it on the shell application classpath.
Now you are ready to use your own command.

{{#> callout type='note' }}

The DocRef adapter is also supporting UID references not only paths .. to specify an UID you should prepend the "doc:" string to the UID.

{{/callout}}

### Exception Handling

We've seen in the previous example that the run method is wrapping all exception and re-throw them as `ShellException` which is a runtime exception. This is the pattern to use to have the shell correctly handling exceptions. If you are not catching an exception it will end-up in the console printed in a red color. If you are sending a ShellException only the exception message is printed as an error and you can see the complete stack trace of the last exception using the **trace** command. This is true in interactive mode. In batch mode exception are printed as usual.

### The Command Class

Here is our final class:

```
@Command(name = "lst", help = "List children documents filtered by type")
public class Lst implements Runnable {

    @Context
    protected RemoteContext ctx;

    @Argument(name = "doc", index = 0, required = false, completor=DocRefCompletor.class, help = "A document to list its content. If not specified list the current document content.")
    protected DocRef doc;

    @Parameter(name = "-type", hasValue = true, completor=SimpleDocTypeCompletor.class, help = "The type to filter on children. If not specified all children will be listed.")
    protected boolean uid = false;

    public void run() {
        if (doc == null) {
            // get the current document if target doc was not specified.
            doc = ctx.getDocument();
        }  
        ShellConsole console = ctx.getShell().getConsole();
        try {
            if (type == null) {
                for (Document child : ctx.getDocumentService().getChildren(doc)) {
                    DocumentHelper.printName(console, child);
                }
            } else {
                for (Document doc : ctx.getDocumentService().getChildren(doc)) {
                    if (type.equals(child.getType())) {
                        DocumentHelper.printName(console, child);
                    }
                }
            }
        } catch (Exception e) {
            throw new ShellException("Failed to list document " + path, e);
        }
    }
}

```

## Scripting Commands

As we've seen, remote commands are using the automation client API to talk with the server. This means our remote commands are in fact wrappers around a core automation object: an automation operation. A remote command is in fact translating the user input in a server side operation and is using the automation client API to invoke that operation. All these things are hidden in Nuxeo Shell but you can always use the automation client API and directly invoke operations if you want.

This is a nice feature since automation is used also on the server side to design high level actions on the Nuxeo platform. So we reuse the code existing in Nuxeo without having to deal with Nuxeo low level API. You can, this way, even assemble administration commands using [Nuxeo Studio]({{page space='studio' page='nuxeo-online-services'}}) and invoke them from the shell.

But, the problem is that using operations means to have this operation defined on server side. It may happens that Nuxeo is not always providing an operation dedicated for your needs. In this case an approach is to implement a operation (server side), deploy it on the server and then create a shell command to invoke the operation. But you cannot do this anytime you need a new command in the shell and your target server is a production server. Also there are use cases not covered by operations like listing the existing ALCs on a document (in fact all listings that doesn't involves returning from the server documents or blobs).

To solve this issue we implemented a script operation. A script operation is a server side operation that takes as input a blob (i.e. a file) containing a script (in Groovy or Mvel) and execute this script on the server in the current shell context.
Using this feature you can do anything you want not covered by operations. You can do things like from how long the server is running? or to perform garbage collection or getting monitoring information o Nuxeo Services etc.

There are two way to use scripting in the shell:

1.  Use the **script** command that takes as input the script file to execute and a context execution map of parameters.
2.  Creating a command that wraps a script and provides typed parameters - completion aware.

In both cases **the script must return a result string**.

The first solution is OK, when you are creating Ad-Hoc scripts - like invoking GC on the server, you can use the "trace" command to get more information in case of failure.

But if you want well types commands with completors etc. then you need to implement a real command that will invoke your script.

So, we will focus now on the second option.

### Invoking Scripts from a Command

To do this, you need first to write the script - let's say a Groovy script. This script should return a string - the result of the operation. Put this script somewhere in the JAR - let's say in "scripts/myscript.groovy" in your JAR root.

Then in your shell command you can invoke this script to be executed remotely with the arguments specified by the user on the command line by invoking:

```
String result = Scripting.run("scripts/myscript.groovy", ctx);

```

where **ctx** is a String to String map containing the user options to be forwarded to the script.
The script can access these options using `Context["key"]` expression where **key** is a name of a user variable passed in the **ctx** map.

As a real example you can see the `Perms` command of the shell and the `printAcl.groovy` script it is invoking.

Of course the output of the script (a string) may be a complex object - encoded as JSON or XML - in that case your command should be able to decode it and print a human readable response on the terminal.

{{#> callout type='note' heading='Security Warning'}}

Because of potential security issues the scripting feature is available only when logged in as Administrator

{{/callout}}

Here is a complete example of a script used by the **perms** command to get the ACLs available on a document:

```
import org.nuxeo.ecm.core.api.PathRef;
import org.nuxeo.ecm.core.api.IdRef;
import org.nuxeo.ecm.core.api.security.ACP;
import org.nuxeo.ecm.core.api.security.ACE;
import org.nuxeo.ecm.core.api.security.ACL;

def doc = null;
def aclname = Context["acl"];
def ref = Context["ref"];
if (ref.startsWith("/")) {
  doc = Session.getDocument(new PathRef(ref));
} else {
  doc = Session.getDocument(new IdRef(ref));
}
def acp = doc.getACP();
def result = null;
if (aclname != null) {
  def acl = acp.getACL(aclname);
  if (acl == null) {
    result = "No Such ACL: ${aclname}. Available ACLS: ";
    for (a in acp.getACLs()) {
      result+=a.getName()+" ";
    }
    return result;
  }
  result = "{bold}${aclname}{bold}\n";
  for (ace in acl) {
    result += "\t${ace}\n";
  }
} else {
  result = "";
  for (acl in acp.getACLs()) {
    result += "{bold}${acl.name}{bold}\n";
    for (ace in acl) {
      result += "\t${ace}\n";
    }
  }
}

return result;

```

&nbsp;

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related documentation'}}

*   [Extending The Shell]({{page page='extending-the-shell'}})
*   [Nuxeo Shell administration documentation]({{page page='nuxeo-shell'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
