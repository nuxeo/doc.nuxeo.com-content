---
title: Methodology for troubleshooting files that do not synchronize in Drive
description: This SKB describes the different cases which can happen when files do not synchronize seamlessly with Drive
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - subsystem-nuxeo-drive
    - drive
    - methodology
    - troubleshooting

---
# Methodology for troubleshooting files not synchronizing with Drive

When it comes to the problem of files that do not synchronize with Drive, different possibilities and thus different methods for solving this exist.

## Possibility 1 : a conflict

* A document exists in Nuxeo and had been synchronized by Drive
* In offline mode, one modifies the file on local disk
* During the offline mode, the binary on the Nuxeo server-side is also itself modified.
* When coming back in online mode, a conflict is detected by Drive, which is to be solved by the user, who has to decide which version to keel (local or remote) https://doc.nuxeo.com/client-apps/nuxeo-drive/#managing-conflicts
* This is a conflict between 2 versions of binaries of one and a same Nuxeo document
* Knowing which document version to keep is the user responsibility

## Possibility 2 : an error

* An error in Nuxeo hinders the synchronization: this error can generally be witnessed in the server.log on the server-side and/or nxdrive.log files on the client side
* One must then determine the cause for this error and solve it
* It is the Nuxeo Administrator responsibility to determine the action to undertake (eventually assisted by Nuxeo Support)
* Please notice that some documents, following several attempts, are placed in the window for conflicts/errors, sometimes with the technical error message and displaying also some basic information as the user name, date, and path for it. This error can be retrieved on the client-side in the nxdrive.log file with more details

## Possibility 3: an error due to a conflict ( [NXDRIVE-1420](https://jira.nuxeo.com/browse/NXDRIVE-1420) )

There exists an edge case, currently displayed as an error by Drive which is in fact a particular type of conflicts met on the Nuxeo server side

* Drive stores binaries on the local disk using dc:title and an extension depending on the type of binary, in a directory tree
* 2 files in the same directory in a file system cannot have the same name
* If 2 different documents in the same Folder or Workspace on the Nuxeo server side share the same dc:title and the same type of binary, Drive cannot determine which one must be synchronized locally: “binary” from Document1 or “binary” from Document2?
* Drive displays this fact in the window to manage conflicts and errors as an error with an error message such as *“A remote document with the same name exists, but duplicate documents Is forbidden. Please modify the name of the local document or directly on the server”* , together with the directory name and the name of the binary.
* This is more an application design problem: the application has not been designed with Drive as a client: the best is to avoid this edge case in the design of the application.
* One can see the window to manage the resolution of conflicts and errors in the local Drive client (the Graphical User Interface) => cf https://doc.nuxeo.com/client-apps/nuxeo-drive-installation-configuration/#graphical-user-interface and https://doc.nuxeo.com/client-apps/nuxeo-drive/#managing-conflicts
* To study this problem, one must look on the server side for duplicate titles in different documents in a same directory.
* In this edge case, it is a conflict between binaries of 2 different documents in Nuxeo server
* It is the responsibility of the contributors of the different documents and/or architect of the application solution to know how to solve such duplicate title documents in a same directory.

### Example of window "Conflicts and Errors" in Drive Graphical User Interface
![Conflict and Error Window]({{file name='drive-resolve-conflicts.png'}})


2019-06-01T13:48:07.168Z
## (c) Nuxeo Support Knowledge Base Outline 2019
