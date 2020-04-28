---
title: Shell Documentation
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
confluence:
    ajs-parent-page-id: '4687725'
    ajs-parent-page-title: Extending The Shell
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Shell+Documentation
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Shell+Documentation'
    page_id: '4687729'
    shortlink: cYdH
    shortlink_source: 'https://doc.nuxeo.com/x/cYdH'
    source_link: /display/NXDOC/Shell+Documentation
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-08-31 14:40'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-09-05 16:37'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2012-09-13 22:18'
        message: Migrated to Confluence 4.0
        version: '8'
    -
        author: Solen Guitter
        date: '2012-09-13 22:18'
        message: 'Updated broken links '
        version: '7'
    -
        author: Florent Guillaume
        date: '2012-08-13 12:44'
        message: Added related pages
        version: '6'
    -
        author: Solen Guitter
        date: '2012-05-15 16:44'
        message: Added related pages
        version: '5'
    -
        author: Solen Guitter
        date: '2012-05-14 17:59'
        message: Fixed broken links to the Shell Admin Doc
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 18:55'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 16:24'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 15:45'
        message: ''
        version: '1'

---
{{! excerpt}}

Commands are self documented by using annotations. These annotations are used to generate the base of the command documentation, like: short description, syntax, options, arguments etc. Using this information the shell automatically generates basic help for you.

{{! /excerpt}} {{#> callout type='info' }}

The generated documentation is available in both text format (for terminal) and wiki format. See [Nuxeo Shell Command Index]({{page page='nuxeo-shell-command-index'}}) for the wiki format.

{{/callout}}

This is the minimal documentation provided by any command and it may be enough for simple commands. But for more complex commands you may want to give more in depth instructions or examples.
To do this you can create a text file that hase the same name as the short name of the command class plus the **.help** extension. This file must reside in the JAR in the same package as the command class.

{{#> callout type='info' heading='Technical Detail'}}

The **help** file class is located at runtime using the command class getResource method and the naming pattern specified above.

{{/callout}}

The help file is an ASCII text file which may contain some special tags to control the help rendering in both terminal or wiki mode.
The most important tags are:

*   **{header}** - can be used to use a bold font for a title. Working in both terminal and wiki.
    Usage:

    ```
    {header}EXAMPLES{header}
    Here is an example of ...

    ```

*   **{bold}** - same as **{header}**.
*   **{code}** - can be used to escape code - working **only** in wiki, ignored (tag is removed) in terminal.

Also, you can use any confluence {tag}. It will be correctly displayed in the wiki and ignored in the terminal.
There is also a set of tags that are working only in terminal:

*   underscore
*   blink
*   reverse
*   concealed

Color tags:

*   black
*   red
*   green
*   yellow
*   blue
*   magenta
*   cyan
*   white

Background tags:

*   bg.black
*   bg.red
*   bg.green
*   bg.yellow
*   bg.blue
*   bg.magenta
*   bg.cyan
*   bg.white

In addition you can also use any numeric control code as the tag name. See JLine documentation for more details on the terminal codes.

:warning: Anyway it is **recommended** to only use **header**, **bold** and other wiki tags like **code** since terminal tags are not translated in wiki tags.

{{#> callout type='note' heading='Important'}}

When contributing new commands in the Nuxeo Shell core library (or modifying old ones) please make sure you update the wiki at [Nuxeo Shell Command Index]({{page page='nuxeo-shell-command-index'}}).

{{/callout}}

Here are instructions on how to synchronize the wiki page with the modifications in Nuxeo Shell:

1.  Export in wiki format the namespace you modified:

    ```
    java -jar nuxeo-shell.jar -e "connect -u Administrator -p Administrator http://localhost:8080/nuxeo/site/automation; help -export tofile.wiki -ns remote"
    ```

    The connect command is needed if you want to export the **remote** namespace. For local namespaces you doesn't need to connect to a server.

2.  Copy/Paste the content of the exported wiki file to the Wiki Page under [Nuxeo Shell Command Index]({{page page='nuxeo-shell-command-index'}}) corresponding to the updated namespace.

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related documentation'}}

*   [Extending The Shell]({{page page='extending-the-shell'}})
*   [Nuxeo Shell administration documentation]({{page page='nuxeo-shell'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
