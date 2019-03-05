---
title: Nuxeo Shell Batch Mode
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - shell
    - jcarsique
    - shell-component
    - nxdoc-750
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '4687635'
    ajs-parent-page-title: Nuxeo Shell
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Shell+Batch+Mode
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Shell+Batch+Mode'
    page_id: '4687698'
    shortlink: UodH
    shortlink_source: 'https://doc.nuxeo.com/x/UodH'
    source_link: /display/NXDOC/Nuxeo+Shell+Batch+Mode
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2015-09-29 11:47'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2015-09-07 14:58'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2015-01-22 09:45'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-12-10 16:19'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-10-15 12:15'
        message: Added TOC
        version: '8'
    -
        author: Florent Guillaume
        date: '2012-08-13 12:44'
        message: Migrated to Confluence 4.0
        version: '7'
    -
        author: Florent Guillaume
        date: '2012-08-13 12:44'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2012-05-15 16:15'
        message: Added related pages
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2011-01-03 18:31'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 15:20'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 15:17'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 12:43'
        message: ''
        version: '1'

---
As said in the [Overview section]({{page space='admindoc' page='nuxeo-shell'}}) there are three modes to execute batch commands:

1.  Run commands from a file
2.  Run commands from standard input.
3.  Run commands specified on the command line - this is a convenient way to run a short list of commands.

## Running Commands From a File

To run commands from a file you should use the **-f** parameter to specify a file containing commands when launching Nuxeo Shell.

Example:

```
java -cp nuxeo-shell.jar org.nuxeo.shell.Main -f my_batch_file

```

Where **my_batch_file** is a file containing the commands to execute - each command on one line. Empty lines and lines begining with **#** are ignored. The **#** character can be use to add comments to a batch file.

Here is an example of a batch file:

```
# connect to local server using the Administrator account.
connect -u Administrator -p Administrator http://localhost:8080/nuxeo/site/automation

# we are now in the repository root. Go to /default-domain/workspaces
cd /default-domain/workspaces

# list the content of the workspaces root - as document UIDs
ls -uid

```

If you want to span a command on multiple lines (you may want this for improved readability in case of long commands) you can end the line with a *** character (*make sure** you don't have a space after `***`). In that case the command will continue on the next line, and so on until no more line ending ** is found or the end of file is reached.

Example:

```
# connect to local server using the Administrator account.
connect -u Administrator -p Administrator http://localhost:8080/nuxeo/site/automation

# get all workspaces in the repository
query "SELECT * FROM Document WHERE ecm:primaryType='Workspace' \
      ORDER BY dc:title DESC"

```

## Running Commands From Standard Input

If you want to run batch commands from the terminal standard input you can use the **-** option when launching the Nuxeo shell.
The format of the commands is the same as the one described when running commands from a file.

Here is an example which will run the commands from my_batch_file file by using the Unix **cat** application and pipes:

```
cat my_batch_file | java -cp nuxeo-shell.jar org.nuxeo.shell.Main -

```

## Running Batch Commands from the Command Line

If you just run a few short commands you can specify them directly in the command line of the Nuxeo Shell.

Example:

```
java -cp nuxeo-shell.jar org.nuxeo.shell.Main -e "connect -u Administrator -p Administrator http://localhost:8080/nuxeo/site/automation; ls"

```

Note that commands are separated using a semicolon character.

{{#> callout type='note' heading='Limitations'}}

You cannot run that way commands that contains illegal characters and needs to be escaped.

{{/callout}}

## Samples

You will find sample scripts in&nbsp;`$NUXEO_HOME/client/scripts/`.
