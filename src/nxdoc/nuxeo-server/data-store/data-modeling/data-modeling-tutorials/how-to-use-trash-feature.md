---
title: 'HOWTO: Use the Trash Feature'
review:
    comment: ''
    date: '2018-04-17'
    status: ok
details:
    howto:
        excerpt: Learn how to use the trash feature in Nuxeo Platform.
        level: Advanced
        tool: 'Code'
        topics: 'REST API'
labels:
    - howto
    - trash-management
toc: true
tree_item_index: 1300
---
## Java API and General Concepts

Trash feature is managed by [TrashService](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/trash/TrashService.html).

You can easily trash/untrash document model with `trashDocument`/`untrashDocument`. When you trash a document, Nuxeo Server performs the following operations:
- document is renamed to avoid collision with further document
- `ecm:isTrashed` property is set to `true`
- `documentTrashed` is fired

As you can see, the trash stated is owned by the system property `ecm:isTrashed`. You can access its value with `DocumentModel#isTrashed` method.

Example:
```java
public void testTrashFeature(TrashService trashService, DocumentModel docModel) {
  trashService.trashDocument(docModel);
  docModel.isTrashed(); // true
  trashService.untrashDocument(docModel);
  docModel.isTrashed(); // false
}

```

## REST API

You can use the Trash feature with the Automation REST API.

You can use following operations `Document.Trash`, `Document.Untrash`.

Example:
```bash
curl -u Administrator:Administrator -XPOST -H "Content-Type: application/json" http://localhost:8080/nuxeo/site/automation/Document.Trash -d '{"input":"doc:/some/document"}'
```

The returned JSON document will have `ecm:isTrashed` set to `true` in its properties.
