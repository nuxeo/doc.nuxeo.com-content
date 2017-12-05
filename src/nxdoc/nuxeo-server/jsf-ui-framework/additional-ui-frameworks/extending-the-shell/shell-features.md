---
title: Shell Features
review:
    comment: ''
    date: '2015-12-01'
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
    canonical: Shell+Features
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Shell+Features'
    page_id: '4687702'
    shortlink: VodH
    shortlink_source: 'https://doc.nuxeo.com/x/VodH'
    source_link: /display/NXDOC/Shell+Features
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-08-31 14:39'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2015-08-31 14:34'
        message: Update table of contents look
        version: '13'
    -
        author: Solen Guitter
        date: '2013-09-05 16:26'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-09-05 16:21'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2012-05-15 16:45'
        message: Migrated to Confluence 4.0
        version: '10'
    -
        author: Solen Guitter
        date: '2012-05-15 16:45'
        message: Added related pages
        version: '9'
    -
        author: Solen Guitter
        date: '2011-11-07 16:50'
        message: ''
        version: '8'
    -
        author: Bogdan Stefanescu
        date: '2011-01-03 18:32'
        message: ''
        version: '7'
    -
        author: Bogdan Stefanescu
        date: '2010-11-28 14:03'
        message: ''
        version: '6'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 18:54'
        message: ''
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 18:40'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 18:24'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 12:56'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 12:55'
        message: ''
        version: '1'

---
{{! excerpt}}

In order to install new commands to existing namespaces or to register new namespaces, completors, injector providers or other Shell objects you must create a new Shell Feature.

{{! /excerpt}}

If you need to modify or add some built-in commands (this is more for Nuxeo developers) - you can directly modify the Nuxeo Shell implementation - so you don't need to create new Shell Features.

Creating new Features is the way to do when you:

1.  Need to declare a new namespace (even if you are modifying the main Nuxeo Shell JAR).
2.  Cannot modify the main Nuxeo Shell JAR.
3.  Need to patch an existing feature but cannot modify the main Nuxeo Shell JAR.
4.  Want to provide optional features in additional JARs

## What is a Feature?

A feature is a Java class that implements the `org.nuxeo.shell.ShellFeature` interface:

```
public interface ShellFeature {
    /**
     * Install the feature in the given shell instance. This is typically
     * registering new global commands, namespaces, value adapters or
     * completors.
     *
     * @param shell
     */
    public void install(Shell shell);
}

```

The feature has only one method: `install(Shell shell)`. This method will be called by the shell at startup on every registered feature to register new things in the shell.

### Shell Feature Registration

In order for the shell to discover your feature you need to register it. Nuxeo Shell is using the `Java ServiceLoader` mechanism to discover services.
So, to register a feature you must create a file named `org.nuxeo.shell.ShellFeature` inside the `META-INF/services` folder of your JAR. And then write into, every ShellFeature implementation (i.e. the implementation class name) you provide.
Each class name should be specified on one line.

This is the `org.nuxeo.shell.ShellFeature` file coming into the Nuxeo Shell JAR which declares the built-in features:

```
org.nuxeo.shell.fs.FileSystem
org.nuxeo.shell.automation.AutomationFeature

```

Of course to enable the shell discover your features you need to put your JAR on the Java classpath used by the shell application.

## Examples

### The FileSystem Feature

Here is an excerpt from the built-in FileSystem feature that provides the **local** namespace and file name completors.

```
public class FileSystem implements ShellFeature {
    ...

    public void install(Shell shell) {
        shell.putContextObject(FileSystem.class, this);
        shell.addValueAdapter(new FileValueAdapter());
        shell.addRegistry(FileSystemCommands.INSTANCE);
    }

    ...
}

```

Let's look at the content of the install method.
The first line is registering the feature instance as a context object of type FileSystem.class.

{{#> callout type='info' heading='Context Objects'}}

are object instances that are available for injection into any command field using the @Context annotation.

{{/callout}}

The second line contribute a new Value Adapter to the shell.

{{#> callout type='info' heading='Value Adapters'}}

are objects used to adapt an input type to an output type. They are used to adapt string values specified on the command line to a value of the real type specified by the command field which was bound to a command line parameter.

{{/callout}}

The third line is registering a new namespace named **local** and which is implemented by FileSystemCommands class.

{{#> callout type='info' heading='Command Registry'}}

A command registry object is the materialization of a namespace. It must extend the abstract class `org.nuxeo.shell.CommandRegistry`

{{/callout}}

To activate a namespace at shell startup you can use:

```
        shell.setActiveRegistry("myNamespaceName");

```

in your **install** method but this is too intrusive since it may override some other namespace that also want to be the default one.

{{#> callout type='tip' }}

To activate a namespace at shell startup set the **shell** Java system property to point to your namespace name when starting the shell application. Example:

```
java -Dshell=myNamespace -jar nuxeo-shell.jar
```

{{/callout}}

### Contributing a Command to the Global Namespace

In this example we will see how to contribute a command to an existing namespace - in our example it will be the **global** namespace.

```
public class MyFeature implements ShellFeature {
    ...

    public void install(Shell shell) {
       GlobalCommands.INSTANCE.addAnnotatedCommand(MyCommand.class);
    }

    ...
}

```

You can see this feature is really simple. It is registering in the GlobalCommands registry a new command created from a Command annotated class.
If the registry you want to access is not providing a static INSTANCE field you can use the shell to lookup a registry by its name.
So you can also do the following:

```
       shell.getRegistry("global").addAnnotatedCommand(MyCommand.class);

```

### Registering a Namespace at Demand (When a Command is Executed)

This use case is useful in features using connection like commands.
When such a feature is installed - it will register only the **connect** like command in the global namespace. But when **connect** command is executed the feature will execute the **remote** command namespace since a connection was established and remote commands can be used.

{{#> callout type='tip' }}

This is how Automation Feature is implemented.

{{/callout}}

```
public class MyRemoteFeature implements ShellFeature {
    ...

    public void install(Shell shell) {
       GlobalCommands.INSTANCE.addAnnotatedCommand(MyConnectCommand.class);
    }

    public CommandRegistry createRemoteRegistry() {
        CommandRegistry reg = new CommandRegistry();
        // add commands to registry here
        return reg;
    }

    ...
}

```

You can see the feature is simply installing the **connect** like command into the global namespace.
Also, it is providing a factory method for the remote registry which should be registered only when connected to server.

Now let's look at the `MyConnectCommand` implementation:

```
@Command(name = "connect", help = "Connect to a remote server")
public class MyConnectCommand implements Runnable {

    @Context
    protected Shell shell;

    @Argument(name = "url", index = 0, required = false, help = "The url of the automation server")
    protected String url;

    @Parameter(name = "-u", hasValue = true, help = "The username")
    protected String username;

    @Parameter(name = "-p", hasValue = true, help = "The password")
    protected String password;

    public void run() {
       try {
         doConnect(url, username, password);
         CommandRegistry reg = shell.getFeature(MyRemoteFeature.class).createRemoteRegistry();
         shell.addRegistry(reg);
         shell.setActiveRegistry(reg.getName());
       } catch (Exception e) {
         throw new ShellException("Failed to connect to "+url, e);
       }
    }

}

```

You can see here that after successfully connecting to the remote server we ask our feature instance to create our remote command registry, and then we simply register it in the shell.
Then we activate this registry so that the active namespace in the interactive shell will be the **remote** one.

In the same manner we can implement the disconnect method - after disconnecting it will unregister the remote namespace and switch on the **local** namespace.

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related documentation'}}

*   [Extending The Shell]({{page page='extending-the-shell'}})
*   [Nuxeo Shell administration documentation]({{page page='nuxeo-shell'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
