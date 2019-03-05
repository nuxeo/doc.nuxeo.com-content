---
title: Nuxeo Server Commands
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - shell
    - jcarsique
    - shell-component
    - nxdoc-751
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '4687648'
    ajs-parent-page-title: Nuxeo Shell Command Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Server+Commands
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Server+Commands'
    page_id: '4687656'
    shortlink: KIdH
    shortlink_source: 'https://doc.nuxeo.com/x/KIdH'
    source_link: /display/NXDOC/Nuxeo+Server+Commands
tree_item_index: 300
version_override:
    LTS 2015: 710/admindoc/nuxeo-server-commands
    '6.0': 60/admindoc/nuxeo-server-commands
    '5.8': 58/admindoc/nuxeo-server-commands
history:
    -
        author: Solen Guitter
        date: '2015-08-31 15:05'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2015-08-31 15:04'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2012-05-15 16:10'
        message: Migrated to Confluence 4.0
        version: '13'
    -
        author: Solen Guitter
        date: '2012-05-15 16:10'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2012-05-15 16:09'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2012-05-15 15:34'
        message: Added related pages
        version: '10'
    -
        author: Solen Guitter
        date: '2012-05-15 15:29'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2012-05-15 15:22'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2012-05-15 15:20'
        message: Fixed wrong links and typos
        version: '7'
    -
        author: Solen Guitter
        date: '2011-03-03 12:29'
        message: ''
        version: '6'
    -
        author: Bogdan Stefanescu
        date: '2011-01-04 00:17'
        message: ''
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 10:07'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 09:58'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 08:34'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-11-23 22:20'
        message: ''
        version: '1'

---
{{#> callout type='info' heading='Namespace: *remote*'}}
High level commands exposed by a remote Nuxeo Server
{{/callout}}

## audit

**NAME**
audit &ndash; Run a query against audit service

**SYNTAX**

```
audit [options] query
```

**OPTIONS**

*   -s - Use this to change the separator used in query variables. The default is ','
*   -ctx - Use this to set query variables. Syntax is: "k1=v1,k1=v2"
*   -max - The max number of rows to return.
*   -page - The current page to return. To be used in conjunction with -max.
*   -f - Use this to save results in a file. Otherwise results are printed on the screen.

**ARGUMENTS**

*   query - [required] - The query to run. Query is in JPQL format

**USAGE**

The -page parameter can be used in conjunction with -max parameter to paginate the query result.
The specify the first page use 1 as value, for the second page use 2 and so on.

When saving results in a file - they are in JSON format - and dates are specified using a long value timestamp.
Results printed on the screen are printed in tab separated columns:
eventId category eventDate principal docUUID docType docLifeCycle comment

**EXAMPLES**

Using date literals in your query:

```
audit "FROM LogEntry log WHERE log.eventDate > timestamp('2010-11-10 00:00:00')"
```

Using pagination:

```
audit "FROM LogEntry log WHERE log.category='studio' ORDER BY log.eventDate DESC" -max 20 -page 1
```

Using query variables:

```
audit "FROM LogEntry log WHERE log.category='studio' AND log.eventDate > :startDate" -ctx "startDate={d 2010-11-10}"
```

or

```
audit "FROM LogEntry log WHERE log.category='studio' AND log.eventDate > :startDate" -ctx "startDate={d 2010-11-10 00:00:00}"
```

Note that query variable keys must be prefixed with "audit.query." to avoid name clash with other keys in the context.

## cat

**NAME**
cat &ndash; Print document details

**SYNTAX**

```
cat [options] [doc]
```

**OPTIONS**

*   -all - [flag] - Include all schemas. The -schemas attribute will be ignored if used in conjunction with this one.
*   -schemas - A filter of schemas to include in the document. Use * for all schemas.

**ARGUMENTS**

*   doc - [optional] -The document to print. To use UIDs as references you should prefix them with 'doc:'

## cd

**NAME**
cd &ndash; Change the context document

**SYNTAX**

```
cd doc
```

**ARGUMENTS**

*   doc - [required] - A reference to the new context document to use. To use UID references prefix them with 'doc:'.

## connect

**NAME**
connect &ndash; Connect to a remote automation server

**SYNTAX**

```
connect [options] [url]
```

**OPTIONS**

*   -p - The password
*   -u - The username

**ARGUMENTS**

*   url - [optional] -The URL of the automation server

## cp

**NAME**
cp &ndash; Copy a document

**SYNTAX**

```
cp [options] src dst
```

**OPTIONS**

*   -name - A new name for the copy. I not specified preserve the source name

**ARGUMENTS**

*   src - [required] - The document to copy. To use UID references prefix them with 'doc:'.
*   dst - [required] - The target parent. To use UID references prefix them with 'doc:'.

## disconnect

**NAME**
disconnect &ndash; Close current connection to server. If not connected nothing is done.

**SYNTAX**

```
disconnect
```

## fire

**NAME**
fire &ndash; Fire a core event in the context of the given document

**SYNTAX**

```
fire event [doc]
```

**ARGUMENTS**

*   event - [required] - The event to fire. This parameter is required.
*   doc - [optional] -The context document. If not specified the current document is used. To use UID references prefix them with 'doc:'.

## getfile

**NAME**
getfile &ndash; Get a document attached file

**SYNTAX**

```
getfile [options] [doc]
```

**OPTIONS**

*   -todir - An optional target directory to save the file. The default is the current working directory.
*   -xpath - The XPath of the blob property to get. Defaults to the one used by the File document type.

**ARGUMENTS**

*   doc - [optional] -The target document. If not specified the current document is used. To use UID references prefix them with 'doc:'.

## getfiles

**NAME**
getfiles &ndash; Get all the files attached to a document

**SYNTAX**

```
getfiles [options] [doc]
```

**OPTIONS**

*   -todir - An optional target directory to save the file. The default is the current working directory.
*   -xpath - The XPath of the blob property to get. Defaults to the one used by the File document type.

**ARGUMENTS**

*   doc - [optional] -The target document. If not specified the current document content is used. To use UID references prefix them with 'doc:'.

## getp

**NAME**
getp &ndash; Get the value of a document property

**SYNTAX**

```
getp [options] [doc]
```

**OPTIONS**

*   -xpath - The XPath of the property to get. This parameter is required.

**ARGUMENTS**

*   doc - [optional] -The target document. If not specified the current document is used. To use UID references prefix them with 'doc:'.

## getrel

**NAME**
getrel &ndash; Get relations between two documents

**SYNTAX**

```
getrel [options] [doc]
```

**OPTIONS**

*   -in - [flag] - Is the document the relation object?
*   -predicate - The relation predicate - requested.
*   -out - [flag] - Is the document the relation subject? This flag is by default on true.

**ARGUMENTS**

*   doc - [optional] -The document involved in the relation

## lcstate

**NAME**
lcstate &ndash; Set or view the current lifecycle state of a document

**SYNTAX**

```
lcstate [options] [doc]
```

**OPTIONS**

*   -set - If specified The new lifecycle state. If not specified then in write mode the local ACL is used and in view mode all ACLs are printed.

**ARGUMENTS**

*   doc - [optional] -The target document. If not specified the current document is used. To use UID references prefix them with 'doc:'.

## lock

**NAME**
lock &ndash; Lock a document

**SYNTAX**

```
lock [options] [doc]
```

**OPTIONS**

*   -key - An optional lock key. If not specified the default one is used.

**ARGUMENTS**

*   doc - [optional] -The document to lock. If not specified the current document is used. To use UID references prefix them with 'doc:'.

## ls

**NAME**
ls &ndash; List children documents

**SYNTAX**

```
ls [options] [doc]
```

**OPTIONS**

*   -uid - [flag] - If used the documents will be printed using the document UID.

**ARGUMENTS**

*   doc - [optional] -A document to list its content. If not specified list the current document content. To use UID references prefix them with 'doc:'.

## mkdir

**NAME**
mkdir &ndash; Create a document of the given type

**SYNTAX**

```
mkdir [options] type path
```

**OPTIONS**

*   -title - An optional document title.

**ARGUMENTS**

*   type - [required] - The document type
*   path - [required] - The document path

## mkrel

**NAME**
mkrel &ndash; Create a relation between two documents

**SYNTAX**

```
mkrel [options] subject object
```

**OPTIONS**

*   -predicate - The relation predicate - requested.

**ARGUMENTS**

*   subject - [required] - The subject of the relation
*   object - [required] - The object of the relation

## mv

**NAME**
mv &ndash; Move a document

**SYNTAX**

```
mv [options] src dst
```

**OPTIONS**

*   -name - A new name for the document. I not specified preserve the source name

**ARGUMENTS**

*   src - [required] - The document to move. To use UID references prefix them with 'doc:'.
*   dst - [required] - The target parent. To use UID references prefix them with 'doc:'.

## perms

**NAME**
perms &ndash; Set or view permissions on a document

**SYNTAX**

```
perms [options] [doc]
```

**OPTIONS**

*   -grant - If used the ACL will be modified by granting the specified permission on the specified user. The grant value format is "user:permission".
*   -deny - If used the ACL will be modified by denying the specified permission on the specified user. The deny value format is "user:permission".
*   -remove - [flag] - Remove the given ACL.
*   -acl - The ACL to view or modify. If not specified then in write mode the local ACL is used and in view mode all ACLs are printed.

**ARGUMENTS**

*   doc - [optional] -The target document. If not specified the current document is used. To use UID references prefix them with 'doc:'.

## popd

**NAME**
popd &ndash; Change the context document and pop the document from the navigation stack.

**SYNTAX**

```
popd
```

## publish

**NAME**
publish &ndash; Publish a document into a section

**SYNTAX**

```
publish [options] src section
```

**OPTIONS**

*   -override - If set to false will not override an existing published document with same name. The default is "true".

**ARGUMENTS**

*   src - [required] - The document to copy. To use UID references prefix them with 'doc:'.
*   section - [required] - The target parent. To use UID references prefix them with 'doc:'.

## pushd

**NAME**
pushd &ndash; Change the context document and push the document on the navigation stack.

**SYNTAX**

```
pushd doc
```

**ARGUMENTS**

*   doc - [required] - A reference to the new context document to use. To use UID references prefix them with 'doc:'.

## putfile

**NAME**
putfile &ndash; Attach a file to a document

**SYNTAX**

```
putfile [options] file [doc]
```

**OPTIONS**

*   -xpath - The XPath of the blob property to set. Defaults to the one used by the File document type.

**ARGUMENTS**

*   file - [required] - The file to upload
*   doc - [optional] -The target document. If not specified the current document is used. To use UID references prefix them with 'doc:'.

## pwd

**NAME**
pwd &ndash; Print the current context document

**SYNTAX**

```
pwd [options]
```

**OPTIONS**

*   -s - [flag] - Use this flag to show the context documents stack

## query

**NAME**
query &ndash; Query documents

**SYNTAX**

```
query [options] [query]
```

**OPTIONS**

*   -uid - [flag] - If used the matching documents will be printed using the document UID.

**ARGUMENTS**

*   query - [optional] -The document path

**EXAMPLES**

```
query "SELECT * FROM Document WHERE ecm:primaryType='Folder'"
```

```
query -uid "SELECT * FROM Document WHERE ecm:primaryType=\"Folder\""
```

## rename

**NAME**
rename &ndash; Rename a document

**SYNTAX**

```
rename [options] [doc]
```

**OPTIONS**

*   -name - A new name for the document. This parameter is required.

**ARGUMENTS**

*   doc - [optional] -The document to rename. To use UID references prefix them with 'doc:'.

## rm

**NAME**
rm &ndash; Remove a document

**SYNTAX**

```
rm [path]
```

**ARGUMENTS**

*   path - [optional] -The document path. To use UID references prefix them with 'doc:'.

## rmfile

**NAME**
rmfile &ndash; Remove an attached file from a document

**SYNTAX**

```
rmfile [options] [doc]
```

**OPTIONS**

*   -xpath - The XPath of the blob property to remove. Defaults to the one used by the File document type.

**ARGUMENTS**

*   doc - [optional] -The target document. If not specified the current document is used. To use UID references prefix them with 'doc:'.

## run

**NAME**
run &ndash; Run a server automation chain that accepts a document or void input

**SYNTAX**

```
run [options] chain [doc]
```

**OPTIONS**

*   -s - Use this to change the separator used in context variables. The default is ','
*   -ctx - Use this to set execution context variables. Syntax is: k1=v1,k1=v2
*   -void - [flag] - Use this to avoid having the server sending back the result.

**ARGUMENTS**

*   chain - [required] - The chain to run
*   doc - [optional] -A reference to the new context document to use. To use UID references prefix them with 'doc:'.

## runonfile

**NAME**
runonfile &ndash; Run a server automation chain that accepts a file as an input

**SYNTAX**

```
runonfile [options] chain file
```

**OPTIONS**

*   -s - Use this to change the separator used in context variables. The default is ','
*   -ctx - Use this to set execution context variables. Syntax is: k1=v1,k1=v2
*   -void - [flag] - Use this to avoid having the server sending back the result.

**ARGUMENTS**

*   chain - [required] - The chain to run
*   file - [required] - A reference to the new context document to use. To use UID references prefix them with 'doc:'.

## script

**NAME**
script &ndash; Run a script on the server

**SYNTAX**

```
script [options] file
```

**OPTIONS**

*   -s - Use this to change the separator used in context variables. The default is ','
*   -ctx - Use this to set execution context variables. Syntax is: "k1=v1,k1=v2"

**ARGUMENTS**

*   file - [required] - The script file. Must have a .mvel or .groovy extension

## setp

**NAME**
setp &ndash; Set a property on a document

**SYNTAX**

```
setp [options] [doc]
```

**OPTIONS**

*   -value - The property value. If not specified the current property value is removed.
*   -xpath - The XPath of the property to set. This parameter is required.

**ARGUMENTS**

*   doc - [optional] -The target document. If not specified the current document is used. To use UID references prefix them with 'doc:'.

## tree

**NAME**
tree &ndash; List a subtree

**SYNTAX**

```
tree [doc]
```

**ARGUMENTS**

*   doc - [optional] -A document to list its subtree. If not specified list the current document subtree. To use UID references prefix them with 'doc:'.

## unlock

**NAME**
unlock &ndash; Unlock a document

**SYNTAX**

```
unlock [doc]
```

**ARGUMENTS**

*   doc - [optional] -The document to unlock. If not specified the current document is used. To use UID references prefix them with 'doc:'.

## update

**NAME**
update &ndash; Update document properties

**SYNTAX**

```
update [options] [properties] [path]
```

**OPTIONS**

*   -s - Use this to change the separator used in properties. The default is ','

**ARGUMENTS**

*   properties - [optional] -The properties to update.
*   path - [optional] -The document path

&nbsp;
