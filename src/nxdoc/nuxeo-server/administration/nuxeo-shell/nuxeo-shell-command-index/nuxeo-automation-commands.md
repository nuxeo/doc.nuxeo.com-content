---
title: Nuxeo Automation Commands
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - shell
    - jcarsique
    - automation
    - shell-component
    - nxdoc-751
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '4687648'
    ajs-parent-page-title: Nuxeo Shell Command Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Automation+Commands
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Automation+Commands'
    page_id: '4687652'
    shortlink: JIdH
    shortlink_source: 'https://doc.nuxeo.com/x/JIdH'
    source_link: /display/NXDOC/Nuxeo+Automation+Commands
tree_item_index: 400
version_override:
    LTS 2015: 710/admindoc/nuxeo-automation-commands
    '6.0': 60/admindoc/nuxeo-automation-commands
    '5.8': 58/admindoc/nuxeo-automation-commands
history:
    -
        author: Solen Guitter
        date: '2015-08-31 15:06'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-06-12 11:25'
        message: ''
        version: '13'
    -
        author: Karl Harris
        date: '2013-06-11 17:55'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-02-13 14:26'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-02-13 14:26'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2012-05-15 16:11'
        message: Migrated to Confluence 4.0
        version: '9'
    -
        author: Solen Guitter
        date: '2012-05-15 16:11'
        message: Added related pages
        version: '8'
    -
        author: Solen Guitter
        date: '2012-05-15 16:10'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2012-05-15 16:06'
        message: 'Fixed wrong links, removed html and fixed typos'
        version: '6'
    -
        author: Solen Guitter
        date: '2011-03-02 17:53'
        message: ''
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2011-01-04 00:18'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 10:10'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 08:36'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-11-23 22:19'
        message: ''
        version: '1'

---
{{#> callout type='info' heading='Namespace: automation'}}
Commands exposed by the Nuxeo Server through automation
{{/callout}}

## Audit.Log

**NAME**
Audit.Log &ndash; Log events into audit for each of the input document. The operation accept as input one ore more documents that are returned back as the output.

**SYNTAX**

```
Audit.Log [options] [the input document(s)]
```

**OPTIONS**

*   -event -
*   -ctx - Can be used to inject context properties in Java properties format
*   -category -
*   -void - [flag] - If void the server will not return the result back
*   -comment -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Audit.Query

**NAME**
Audit.Query &ndash; Execute a JPA query against the Audit Service. This is returning a blob with the query result. The result is a serialized JSON array. You can use the context to set query variables but you must prefix using 'audit.query.' the context variable keys that match the ones in the query.

**SYNTAX**

```
Audit.Query [options]
```

**OPTIONS**

*   -maxResults -
*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back
*   -pageNo -
*   -query - Be sure to use JPA Query. NXSQL will not work with audit log files.

## Auth.LoginAs

**NAME**
Auth.LoginAs &ndash; Login As the given user. If no user is given a system login is performed. This is a void operations - the input will be returned back as the output.

**SYNTAX**

```
Auth.LoginAs [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -name -
*   -void - [flag] - If void the server will not return the result back

## Auth.Logout

**NAME**
Auth.Logout &ndash; Perform a logout. This should be used only after using the Login As operation to restore original login. This is a void operations - the input will be returned back as the output.

**SYNTAX**

```
Auth.Logout [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

## Blob.Attach

**NAME**
Blob.Attach &ndash; Attach the input file to the document given as a parameter. If the XPath points to a blob list then the blob is appended to the list, otherwise the XPath should point to a blob property. If the save parameter is set the document modification will be automatically saved. Return the blob.

**SYNTAX**

```
Blob.Attach [options] the input file(s)
```

**OPTIONS**

*   -save -
*   -ctx - Can be used to inject context properties in Java properties format
*   -document -
*   -void - [flag] - If void the server will not return the result back
*   -xpath -

**ARGUMENTS**

*   the input file(s) - [required] - null

## Blob.Create

**NAME**
Blob.Create &ndash; Creates a file from a given URL. The file parameter specifies how to retrieve the file content. It should be an URL to the file you want to use as the source. You can also use an expression to get an URL from the context. Returns the created file.

**SYNTAX**

```
Blob.Create [options]
```

**OPTIONS**

*   -mime-type -
*   -file -
*   -ctx - Can be used to inject context properties in Java properties format
*   -filename -
*   -void - [flag] - If void the server will not return the result back
*   -encoding -

## Blob.CreateZip

**NAME**
Blob.CreateZip &ndash; Creates a zip file from the input file(s). If no file name is given, the first file name in the input will be used. Returns the zip file.

**SYNTAX**

```
Blob.CreateZip [options] the input file(s)
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -filename -
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input file(s) - [required] - null

## Blob.Get

**NAME**
Blob.Get &ndash; Gets a file attached to the input document. The file location is specified using an XPath to the blob property of the document. Returns the file.

**SYNTAX**

```
Blob.Get [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back
*   -xpath -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Blob.GetList

**NAME**
Blob.GetList &ndash; Gets a list of files that are attached on the input document. The files location should be specified using the blob list property XPath. Returns a list of files.

**SYNTAX**

```
Blob.GetList [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back
*   -xpath -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Blob.Pop

**NAME**
Blob.Pop &ndash; Restore the last saved input file in the context input stack. This operation must be used only if a PUSH operation was previously made. Return the last _pushed_ file.

**SYNTAX**

```
Blob.Pop [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

## Blob.PopList

**NAME**
Blob.PopList &ndash; Restore the last saved input file list in the context input stack

**SYNTAX**

```
Blob.PopList [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

## Blob.Post

**NAME**
Blob.Post &ndash; Post the input file to a target HTTP URL. Returns back the input file.

**SYNTAX**

```
Blob.Post [options] the input file(s)
```

**OPTIONS**

*   -url -
*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input file(s) - [required] - null

## Blob.Pull

**NAME**
Blob.Pull &ndash; Restore the last saved input file in the context input stack. This operation must be used only if a PUSH operation was previously made. Return the first _pushed_ file.

**SYNTAX**

```
Blob.Pull [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

## Blob.PullList

**NAME**
Blob.PullList &ndash; Restore the first saved input file list in the context input stack

**SYNTAX**

```
Blob.PullList [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

## Blob.Push

**NAME**
Blob.Push &ndash; Push the input file on the context stack. The file can be restored later as the input using the corresponding pop operation. Returns the input file.

**SYNTAX**

```
Blob.Push [options] the input file(s)
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input file(s) - [required] - null

## Blob.PushList

**NAME**
Blob.PushList &ndash; Push the input file list on the context stack. The file list can be restored later as the input using the corresponding pop operation. Returns the input file list.

**SYNTAX**

```
Blob.PushList [options] the input file(s)
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input file(s) - [required] - null

## Blob.Remove

**NAME**
Blob.Remove &ndash; Remove the file attached to the input document as specified by the 'xpath' parameter. If the 'xpath' point to a blob list then the list will be cleared. If the file to remove is part of a list it will be removed from the list otherwise the 'xpath' should point to a blob property that will be removed. If the save parameter is set the document modification will be automatically saved. Return the document.

**SYNTAX**

```
Blob.Remove [options] [the input document(s)]
```

**OPTIONS**

*   -save -
*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back
*   -xpath -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Blob.Set

**NAME**
Blob.Set &ndash; Set the input file to the given property on the input document. If the XPath points to a blob list then the blob is appended to the list, otherwise the XPath should point to a blob property. If the save parameter is set the document modification will be automatically saved. Return the document.

**SYNTAX**

```
Blob.Set [options] [the input document(s)]
```

**OPTIONS**

*   -save -
*   -file -
*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back
*   -xpath -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Blob.SetFilename

**NAME**
Blob.SetFilename &ndash; Modify the filename of a file stored in the input document. The file is found in the input document given its xpath specified through the 'xpath' parameter. Return back the input document.

**SYNTAX**

```
Blob.SetFilename [options] [the input document(s)]
```

**OPTIONS**

*   -save -
*   -ctx - Can be used to inject context properties in Java properties format
*   -name -
*   -void - [flag] - If void the server will not return the result back
*   -xpath -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Blob.ToFile

**NAME**
Blob.ToFile &ndash; Save the input blob(s) as a file(s) into the given target directory. The blob(s) filename is used as the file name. You can specify an optional **prefix** string to prepend to the file name. Return back the blob(s).

**SYNTAX**

```
Blob.ToFile [options] the input file(s)
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -prefix -
*   -void - [flag] - If void the server will not return the result back
*   -directory -

**ARGUMENTS**

*   the input file(s) - [required] - null

## Blob.ToPDF

**NAME**
Blob.ToPDF &ndash; Convert the input file to a PDF and return the new file.

**SYNTAX**

```
Blob.ToPDF [options] the input file(s)
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input file(s) - [required] - null

## Context.FetchDocument

**NAME**
Context.FetchDocument &ndash; Fetch the input of the context as a document. The document will become the input for the next operation.

**SYNTAX**

```
Context.FetchDocument [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

## Context.RestoreBlobInput

**NAME**
Context.RestoreBlobInput &ndash; Restore the file input from a context variable given its name. Return the file.

**SYNTAX**

```
Context.RestoreBlobInput [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -name -
*   -void - [flag] - If void the server will not return the result back

## Context.RestoreBlobsInput

**NAME**
Context.RestoreBlobsInput &ndash; Restore the file list input from a context variable given its name. Return the files.

**SYNTAX**

```
Context.RestoreBlobsInput [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -name -
*   -void - [flag] - If void the server will not return the result back

## Context.RestoreDocumentInput

**NAME**
Context.RestoreDocumentInput &ndash; Restore the document input from a context variable given its name. Return the document.

**SYNTAX**

```
Context.RestoreDocumentInput [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -name -
*   -void - [flag] - If void the server will not return the result back

## Context.RestoreDocumentsInput

**NAME**
Context.RestoreDocumentsInput &ndash; Restore the document list input from a context variable given its name. Return the document list.

**SYNTAX**

```
Context.RestoreDocumentsInput [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -name -
*   -void - [flag] - If void the server will not return the result back

## Context.RunDocumentOperation

**NAME**
Context.RunDocumentOperation &ndash; Run an operation chain which is returning a document in the current context. The input for the chain ro run is the current input of the operation. Return the output of the chain as a document.

**SYNTAX**

```
Context.RunDocumentOperation [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back
*   -id -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Context.RunInputScript

**NAME**
Context.RunInputScript &ndash; Run a script from the input blob. A blob containing script result is returned.

**SYNTAX**

```
Context.RunInputScript [options] the input file(s)
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back
*   -type -

**ARGUMENTS**

*   the input file(s) - [required] - null

## Context.RunOperation

**NAME**
Context.RunOperation &ndash; Run an operation chain in the current context

**SYNTAX**

```
Context.RunOperation [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back
*   -id -

## Context.RunScript

**NAME**
Context.RunScript &ndash; Run a script which content is specified as text in the 'script' parameter

**SYNTAX**

```
Context.RunScript [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -script -
*   -void - [flag] - If void the server will not return the result back

## Context.SetInputAsVar

**NAME**
Context.SetInputAsVar &ndash; Set a context variable that points to the current input object. You must give a name for the variable. This operation works on any input type and return back the input as the output.

**SYNTAX**

```
Context.SetInputAsVar [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -name -
*   -void - [flag] - If void the server will not return the result back

## Context.SetVar

**NAME**
Context.SetVar &ndash; Set a context variable given a name and the value. To compute the value at runtime from the current context you should use an EL expression as the value. This operation works on any input type and return back the input as the output.

**SYNTAX**

```
Context.SetVar [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -value -
*   -name -
*   -void - [flag] - If void the server will not return the result back

## Document.CheckIn

**NAME**
Document.CheckIn &ndash; Checks in the input document. Returns back the document.

**SYNTAX**

```
Document.CheckIn [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -version -
*   -versionVarName -
*   -void - [flag] - If void the server will not return the result back
*   -comment -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.CheckOut

**NAME**
Document.CheckOut &ndash; Checks out the input document. Returns back the document.

**SYNTAX**

```
Document.CheckOut [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.Copy

**NAME**
Document.Copy &ndash; Copy the input document into the given folder. The name parameter will be used as the copy name otherwise if not specified the original name will be preserved. The target folder can be specified as an absolute or relative path (relative to the input document) as an UID or by using an EL expression. Return the newly created document (the copy).

**SYNTAX**

```
Document.Copy [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -target -
*   -name -
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.Create

**NAME**
Document.Create &ndash; Create a new document in the input folder. You can initialize the document properties using the 'properties' parameter. The properties are specified as _key=value_ pairs separated by a new line. The key used for a property is the property XPath. To specify multi-line values you can use a \ character followed by a new line.
Example:
`dc:title=The Document Title`
`dc:description=foo bar`
Returns the created document.

**SYNTAX**

```
Document.Create [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -properties -
*   -name -
*   -void - [flag] - If void the server will not return the result back
*   -type -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.CreateVersion

**NAME**
Document.CreateVersion &ndash; Create a new version for the input document. Any modification made on the document by the chain will be automatically saved. Increment version if this was specified through the 'snapshot' parameter. Returns the live document (not the version).

**SYNTAX**

```
Document.CreateVersion [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -increment -
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.Delete

**NAME**
Document.Delete &ndash; Delete the input document. The previous context input will be restored for the next operation.

**SYNTAX**

```
Document.Delete [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.Fetch

**NAME**
Document.Fetch &ndash; Fetch a document from the repository given its reference (path or UID). The document will become the input of the next operation.

**SYNTAX**

```
Document.Fetch [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -value -
*   -void - [flag] - If void the server will not return the result back

## Document.FetchByProperty

**NAME**
Document.FetchByProperty &ndash; For each specified string property value, fetch all documents that match the property and the optional where clause. Matching documents are collected into a list and the returned to the next operation. The operation has no input.

**SYNTAX**

```
Document.FetchByProperty [options]
```

**OPTIONS**

*   -values -
*   -ctx - Can be used to inject context properties in Java properties format
*   -property -
*   -void - [flag] - If void the server will not return the result back
*   -query -

## Document.Filter

**NAME**
Document.Filter &ndash; Filter the input list of documents given a condition. The condition can be expressed using 4 parameters: types, facets, lifecycle and condition. If more than one parameter is specified an AND will be used to group conditions.
The 'types' parameter can take a comma separated list of document type: File,Note.
The 'facet' parameter can take a single facet name.
The 'life cycle' parameter takes a name of a lifecycle state the document should have.
The 'condition' parameter can take any EL expression.
Returns the list of documents that match the filter condition.

**SYNTAX**

```
Document.Filter [options] [the input document(s)]
```

**OPTIONS**

*   -class -
*   -types -
*   -pathStartsWith -
*   -ctx - Can be used to inject context properties in Java properties format
*   -facet -
*   -void - [flag] - If void the server will not return the result back
*   -lifecycle -
*   -condition -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.GetChild

**NAME**
Document.GetChild &ndash; Get a child document given its name. Take as input the parent document and return the child document.

**SYNTAX**

```
Document.GetChild [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -name -
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.GetChildren

**NAME**
Document.GetChildren &ndash; Get the children of a document. The list of children will become the input for the next operation

**SYNTAX**

```
Document.GetChildren [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.GetParent

**NAME**
Document.GetParent &ndash; Get the parent document of the input document. The parent document will become the input for the next operation. You can use the 'type' parameter to specify which parent to select from the document ancestors

**SYNTAX**

```
Document.GetParent [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back
*   -type -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.GetPrincipalEmails

**NAME**
Document.GetPrincipalEmails &ndash; Fetch the principal emails that have a given permission on the input document and then set them in the context under the given key variable name. The operation returns the input document. You can later use the list of principals set by this operation on the context from another operation. The 'key' argument represents the variable name and the 'permission' argument the permission to check. If the 'ignore groups' argument is false then groups are recursively resolved, extracting user members of these groups. Be **warned** that this may be a very consuming operation.
Note that:

*   groups are not included
*   the list pushed into the context is a string list of emails.

**SYNTAX**

```
Document.GetPrincipalEmails [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -ignore groups -
*   -variable name -
*   -void - [flag] - If void the server will not return the result back
*   -permission -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.GetUsersAndGroups

**NAME**
Document.GetUsersAndGroups &ndash; Fetch the users and groups that have a given permission on the input document and then set them in the context under the given key variable name. The operation returns the input document. You can later use the list of identifiers set by this operation on the context from another operation. The 'key' argument represents the variable name and the 'permission' argument the permission to check. If the 'ignore groups' argument is false then groups will be part of the result. If the 'resolve groups' argument is true then groups are recursively resolved, adding user members of these groups in place of them. Be warned that this may be a very consuming operation. If the 'prefix identifiers' argument is true, then user identifiers are prefixed by 'user:' and groups identifiers are prefixed by 'group:'.

**SYNTAX**

```
Document.GetUsersAndGroups [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -ignore groups -
*   -resolve groups -
*   -variable name -
*   -void - [flag] - If void the server will not return the result back
*   -permission -
*   -prefix identifiers -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.Lock

**NAME**
Document.Lock &ndash; Lock the input document in the name of the given 'owner'. The lock owner is an username and identifies the user that owns the lock on the document. If the owner is not specified, the current user will be used as the owner. Returns back the locked document.

**SYNTAX**

```
Document.Lock [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -owner -
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.Move

**NAME**
Document.Move &ndash; Move the input document into the target folder.

**SYNTAX**

```
Document.Move [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -target -
*   -name -
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.MultiPublish

**NAME**
Document.MultiPublish &ndash; Publish the input document(s) into several target sections. The target is evaluated to a document list (can be a path, UID or EL expression). Existing proxy is overriden if the override attribute is set. Returns a list with the created proxies.

**SYNTAX**

```
Document.MultiPublish [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -target -
*   -void - [flag] - If void the server will not return the result back
*   -override -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.Pop

**NAME**
Document.Pop &ndash; Restore the last saved input document in the context input stack. This operation must be used only if a PUSH operation was previously made. Return the last _pushed_ document.

**SYNTAX**

```
Document.Pop [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

## Document.PopList

**NAME**
Document.PopList &ndash; Restore the last saved input document list in the context input stack

**SYNTAX**

```
Document.PopList [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

## Document.Publish

**NAME**
Document.Publish &ndash; Publish the input document into the target section. Existing proxy is overriden if the override attribute is set. Return the created proxy.

**SYNTAX**

```
Document.Publish [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -target -
*   -void - [flag] - If void the server will not return the result back
*   -override -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.Pull

**NAME**
Document.Pull &ndash; Restore the first saved input document in the context input stack. This operation must be used only if a PUSH operation was previously made. Return the first _pushed_ document.

**SYNTAX**

```
Document.Pull [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

## Document.PullList

**NAME**
Document.PullList &ndash; Restore the first saved input document list in the context input stack

**SYNTAX**

```
Document.PullList [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

## Document.Push

**NAME**
Document.Push &ndash; Push the input document on the context stack. The document can be restored later as the input using the corrresponding pop operation. Returns the input document.

**SYNTAX**

```
Document.Push [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.PushList

**NAME**
Document.PushList &ndash; Push the input document list on the context stack. The document list can be restored later as the input using the corrresponding pop operation. Returns the input document list.

**SYNTAX**

```
Document.PushList [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.Query

**NAME**
Document.Query &ndash; Perform a query on the repository. The query result will become the input for the next operation.

**SYNTAX**

```
Document.Query [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -language -
*   -void - [flag] - If void the server will not return the result back
*   -query -

## Document.Reload

**NAME**
Document.Reload &ndash; Reload the input document from the repository. Any previous modification made by the chain on this document will be lost if these modifications were not saved. Return the reloaded document.

**SYNTAX**

```
Document.Reload [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.RemoveACL

**NAME**
Document.RemoveACL &ndash; Remove a named Acces Control List from the input document(s). Returns the document(s).

**SYNTAX**

```
Document.RemoveACL [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back
*   -acl -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.RemoveProperty

**NAME**
Document.RemoveProperty &ndash; Remove the given property of the input document(s) as specified by the 'xpath' parameter. If the property points to a list then clear the list. Removing a property means setting it to null. Return the document(s).

**SYNTAX**

```
Document.RemoveProperty [options] [the input document(s)]
```

**OPTIONS**

*   -save -
*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back
*   -xpath -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.Save

**NAME**
Document.Save &ndash; Save in the repository any modification that was done on the input document. Returns the saved document.

**SYNTAX**

```
Document.Save [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.SaveSession

**NAME**
Document.SaveSession &ndash; Commit any changes made by the operation on the documents. This can be used to explicitly commit changes. This operation can be executed on any type of input. The input of this operation will be preserved as the input for the next operation in the chain.

**SYNTAX**

```
Document.SaveSession [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

## Document.SetACE

**NAME**
Document.SetACE &ndash; Set Acces Control Entry on the input document(s). Returns the document(s).

**SYNTAX**

```
Document.SetACE [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -grant -
*   -overwrite -
*   -void - [flag] - If void the server will not return the result back
*   -user -
*   -acl -
*   -permission -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.SetLifeCycle

**NAME**
Document.SetLifeCycle &ndash; Follow the given transition on the input document lifecycle state

**SYNTAX**

```
Document.SetLifeCycle [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -value -
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.SetProperty

**NAME**
Document.SetProperty &ndash; Set a single property value on the input document. The property is specified using its XPath. The document is automatically saved if 'save' parameter is true. If you unset the 'save' you need to save it later using Save Document operation. Return the modified document.

**SYNTAX**

```
Document.SetProperty [options] [the input document(s)]
```

**OPTIONS**

*   -save -
*   -ctx - Can be used to inject context properties in Java properties format
*   -value -
*   -void - [flag] - If void the server will not return the result back
*   -xpath -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.Unlock

**NAME**
Document.Unlock &ndash; Unlock the input document. The unlock will be executed in the name of the current user. An user can unlock a document only if has the UNLOCK permission granted on the document or if it the same user as the one that locked the document. Return the unlocked document

**SYNTAX**

```
Document.Unlock [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Document.Update

**NAME**
Document.Update &ndash; Set multiple properties on the input document. The properties are specified as _key=value_ pairs separated by a new line. The key used for a property is the property XPath. To specify multi-line values you can use a \ character followed by a new line.
Example:
`dc:title=The Document Title`
`dc:description=foo bar`
Returns back the updated document.

**SYNTAX**

```
Document.Update [options] [the input document(s)]
```

**OPTIONS**

*   -save -
*   -ctx - Can be used to inject context properties in Java properties format
*   -properties -
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Notification.SendEvent

**NAME**
Notification.SendEvent &ndash; Send a Nuxeo event.

**SYNTAX**

```
Notification.SendEvent [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -name -
*   -void - [flag] - If void the server will not return the result back

## Notification.SendMail

**NAME**
Notification.SendMail &ndash; Send an email using the input document to the specified recipients. You can use the asHTML parameter to specify whether you message is in HTML format or in plain text. Also you can attach any blob on the current document to the message by using the comma separated list of XPath expressions 'files'. If your XPath points to a blob list all blobs in the list will be attached. Return back the input document(s).

**SYNTAX**

```
Notification.SendMail [options] [the input document(s)]
```

**OPTIONS**

*   -viewId -
*   -message -
*   -ctx - Can be used to inject context properties in Java properties format
*   -from -
*   -files -
*   -void - [flag] - If void the server will not return the result back
*   -to -
*   -subject -
*   -asHTML -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Relations.CreateRelation

**NAME**
Relations.CreateRelation &ndash; Create a relation between 2 documents. The subject of the relation will be the input of the operation and the object of the relation will be retrieved from the context using the 'object' field. The 'predicate' field specify the relation predicate. Return back the subject document.

**SYNTAX**

```
Relations.CreateRelation [options] [the input document(s)]
```

**OPTIONS**

*   -object -
*   -ctx - Can be used to inject context properties in Java properties format
*   -predicate -
*   -void - [flag] - If void the server will not return the result back

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Relations.GetRelations

**NAME**
Relations.GetRelations &ndash; Get the relations for the input document. The 'outgoing' parameter ca be used to specify whether outgoing or incoming relations should be returned. Returns a document list.

**SYNTAX**

```
Relations.GetRelations [options] [the input document(s)]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -predicate -
*   -void - [flag] - If void the server will not return the result back
*   -outgoing -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Workflow.CreateTask

**NAME**
Workflow.CreateTask &ndash; Enable to create a task bound to the document.

**Directive**, **comment** and **due date** will be displayed in the task list of the user. In **accept operation chain** and **reject operation chain** fields, you can put the operation chain ID of your choice among the one you contributed. Those operations will be executed when the user validates the task, depending on whether he accepts or rejects the task. You have to specify a variable name (the **key for ...** parameter) to resolve target users and groups to which the task will be assigned. You can use Get Users and Groups to update a context variable with some users and groups. If you check **create one task per actor**, each of the actors will have a task to achieve, versus "the first who achieve the task makes it disappear for the others".

**SYNTAX**

```
Workflow.CreateTask [options] [the input document(s)]
```

**OPTIONS**

*   -variable name for actors prefixed ids -
*   -reject operation chain -
*   -ctx - Can be used to inject context properties in Java properties format
*   -directive -
*   -create one task per actor -
*   -accept operation chain -
*   -additional list of actors prefixed ids -
*   -due date -
*   -void - [flag] - If void the server will not return the result back
*   -comment -
*   -task name -

**ARGUMENTS**

*   the input document(s) - [optional] -null

## Workflow.GetTask

**NAME**
Workflow.GetTask &ndash; List tasks assigned to this user or one of its group.Task properties are serialized using JSON and returned in a Blob.

**SYNTAX**

```
Workflow.GetTask [options]
```

**OPTIONS**

*   -ctx - Can be used to inject context properties in Java properties format
*   -void - [flag] - If void the server will not return the result back

## print

**NAME**
print &ndash; Print operation(s) definition

**SYNTAX**

```
print [options] [operation]
```

**OPTIONS**

*   -p - The password if any.
*   -u - The username if any.
*   -out - An optional file to save the operation definition into. If not used the definition will be printed on stdout.

**ARGUMENTS**

*   operation - [optional] -The operation to print.

&nbsp;
