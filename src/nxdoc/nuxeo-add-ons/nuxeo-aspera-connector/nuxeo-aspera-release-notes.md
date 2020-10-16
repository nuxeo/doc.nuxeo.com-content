---
title: Nuxeo Aspera Release Notes
description: Release notes for Nuxeo Aspera.
tree_item_index: 100
review:
  comment: ''
  date: '2020-09-10'
  status: ok
toc: true
---

## Released Changes

### Auto-create
Users now have the option of manually "completing" a transfer, or "automatically" completing the transfer once the content has been "uploaded".

See [NXP-27574](https://jira.nuxeo.com/browse/NXP-27574)


### Folder upload support
Now, in addition to files, users have the ability to upload content in folders as well as files.  As with files, the upload/creation honors configurations of your file import manager and will apply document types and metadata based on your business rules.

See [NXP-27573](https://jira.nuxeo.com/browse/NXP-27573)


### UI/UX improvements
Since the 2.0.x releases, many updates have been made to improve styling as well as UX for some behaviors. Many of these changes can be found under [this Epic](https://jira.nuxeo.com/browse/NXP-27477).

### Transfer Dashboard improvements
Improvements have been made to the transfer dashboard pagination so that users can better access to transfers they have permissions to.  In addition, users can now filter by transfer status.

See [NXP- 29406](https://jira.nuxeo.com/browse/NXP-29406)


### Performance and stability
Since the last release, we've worked on increasing the performance and stability of the Nuxeo Aspera Connector. 

There has been extensive work behind the seems to incorporate more testing as part of the development process.

See [NXP-29407](https://jira.nuxeo.com/browse/NXP-29407)




## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project%20%3D%20NXP%20AND%20status%20in%20(Resolved%2C%20Closed%20AND%20resolution%20%3D%20Fixed%20AND%20component%20%3D%20%22Aspera%20Connector%22%20AND%20text%20~%20%22aspera%22%20AND%20resolved%20%3E%3D%202020-05-15%20AND%20resolved%20%3C%3D%202020-10-30) is available in our ticket tracking tool.
