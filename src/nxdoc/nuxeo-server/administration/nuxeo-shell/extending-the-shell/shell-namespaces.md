---
title: Shell Namespaces
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
    canonical: Shell+Namespaces
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Shell+Namespaces'
    page_id: '4687774'
    shortlink: nodH
    shortlink_source: 'https://doc.nuxeo.com/x/nodH'
    source_link: /display/NXDOC/Shell+Namespaces
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2016-08-31 14:40'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2015-08-31 14:35'
        message: Update table of contents look
        version: '10'
    -
        author: Solen Guitter
        date: '2013-09-05 16:36'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-09-05 16:36'
        message: Added TOC
        version: '8'
    -
        author: Solen Guitter
        date: '2012-05-15 16:44'
        message: Migrated to Confluence 4.0
        version: '7'
    -
        author: Solen Guitter
        date: '2012-05-15 16:44'
        message: Added related pages
        version: '6'
    -
        author: Bogdan Stefanescu
        date: '2010-11-28 14:16'
        message: ''
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 23:46'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 23:33'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 23:31'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 23:09'
        message: ''
        version: '1'

---

We are getting now to the end of our breakthrough about extending the shell.

{{! excerpt}}
We've already seen how to add new Shell Features and how to implement new commands. This last chapter is talking a bit about Shell Namespaces.
{{! /excerpt}}

## The Shell Prompt

As we've already seen, namespaces are in fact hierarchical registries of commands. When entering a namespace all other namespaces not extended by the current namespace are hidden for the shell user. But there is still a point we have not yet discussed yet - the fact that a namespace may change the shell prompt when it is activated. This is important because it is a visual feedback for the user that it switched to another context.

To explain how a namespace is changing the shell prompt I will give the example of the **local** namespcae provided by the `FileSystem` feature. It's really easy: the FileSystem feature is registering and activating the **local** namespace which is implemented by a subclass of `CommandRegsitry`. The `CommandRegistry` is providing a method that any subclass may override: **String getPrompt(Shell shell)**.

So when creating a new namespace (i.e. CommandRegistry) you can override this method to return the prompt for your namespace.
Here is the implementation of **String getPrompt(Shell shell)** of the FileSystemCommands class (which is the materialization of the **local** namespace):

```
    public String getPrompt(Shell shell) {
        return System.getProperty("user.name") + ":"
                + shell.getContextObject(FileSystem.class).pwd().getName()
                + "$ ";
    }

```

So we can see that the prompt is dynamically updated after each command execution to reflect the new context. In this case we print the local username and the name of the current directory.

## The Default Namespace

The shell will activate by default the **remote** namespace if any with that name exists, otherwise it is activating the **local** namespace if any such namespace exists, otherwise the **global** namespace is activated.

To force a namespace to be activated when the shell starts you can use the **shell** Java System Property when launching the shell application. For example, the following will activate the namespace **equinox** when the shell starts:

```
java -Dshell=equinox -jar nuxeo-shell.jar

```

Of course, you should provide an "equinox" namespace to have this working - otherwise the default shell namespace will be used.

## Executing Initialization Code at Startup

If your namespace need to execute some code when the shell is launched and your namespace is activated (because you set it as the default one) then you should override the method `CommandRegistry.autorun(Shell shell)` and provide your logic there. You can use this to automatically connect to a remote host if the connection details were specified on the command line when starting the shell. See the AutomationFeature "remote" namespace - this is the way it is automatically connecting when you specify the connection details on the shell command line.

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related documentation'}}

*   [Extending The Shell]({{page page='extending-the-shell'}})
*   [Nuxeo Shell administration documentation]({{page page='nuxeo-shell'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
