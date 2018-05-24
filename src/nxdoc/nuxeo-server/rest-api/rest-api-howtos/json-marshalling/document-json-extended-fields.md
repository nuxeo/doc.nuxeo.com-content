---
title: Document JSON and Extended Fields
review:
    comment: ''
    date: '2017-12-12'
    status: ok
labels:
    - content-review-lts2016
    - rest-api
    - troger
    - json
    - marshalling
    - lts2017-ok
toc: true
tree_item_index: 500

---

Nuxeo Platform 7.2 introduces the concept of Extended fields. See [Field Constraints and Validation]({{page page='field-constraints-and-validation'}}) and [How to Customize Document Validation]({{page page='how-to-customize-document-validation'}}).

This kind of document field are defined as reference to external object. For example, in the Dublin Core schema:

*   `dc:creator` and `dc:lastContributors` are references to Nuxeo users
*   `dc:contributors` contains references to Nuxeo users
*   `dc:subjects` contains references to the "l10nsubjects" directory entries
*   `dc:coverage` is a reference to the "l10ncoverage" directory entry
*   `dc:nature` is a reference to the "nature" directory entry

## Usage

The document marshalling provides a nice way to get the data referenced by one of its fields in-place.

For example, a call to get the JSON of a document which creator is the user "johnd" will return:

{{#> panel type='code' heading='Curl calls'}}

```bash
$ curl -X GET 'http://localhost:8080/nuxeo/site/api/v1/path/to/my/document?properties=dublincore'
```

{{/panel}}{{#> panel type='code' heading='Resulting JSON'}}

```js
{
  "entity-type": "document",
  "properties": {
    "dc:creator": "johnd",
    ...
  },
  ...
}
```

{{/panel}}

If we tell the document marshaller to load the `dc:creator` referenced value, it will return the user's JSON in-place:

{{#> panel type='code' heading='Curl calls'}}

```bash
$ curl -X GET 'http://localhost:8080/nuxeo/site/api/v1/path/to/my/document?properties=dublincore&fetch.document=dc:creator'
```

{{/panel}}{{#> panel type='code' heading='Resulting JSON'}}

```js
{
  "entity-type": "document",
  "properties": {
    "dc:creator": {
      "entity-type": "user",
      "id": "johndoe",
      "properties": {
        "firstName": "John",
        "lastName": "Doe",
        "groups": [
          "members"
        ],
        "company": "Nuxeo",
        "email": "jown.doe@nuxeo.com",
        "username": "johnd"
      },
      "extendedGroups": [
        {
          "name": "members",
          "label": "Members group",
          "url": "group/members"
        }
      ],
      "isAdministrator": false,
      "isAnonymous": false
    },
    ...
  },
  ...
}
```

{{/panel}}

To load every extended fields of a document, use `fetch.document=properties`.

The Nuxeo Platform provides resolver for document, directory entry, user and group. It also provides Java-to-JSON marshaller for those objects. Therefore, you can fetch any property based on built-in resolvers.

## Updating Document Properties

If a field is defined as a reference and if you provide a JSON-to-Java marshaller for the referenced object, you can either update the document using the reference as usual or use the object's JSON to update the corresponding document property.

1.  The Nuxeo Platform uses the `ObjectResolver.getManagedClasses()` method to get the expected type.
2.  The Nuxeo Platform delegates the JSON-to-Java marshalling to the marshalling service.
3.  The marshalling service delegates the JSON parsing to the registered marshaller.
4.  The Nuxeo Platform uses the resolver to get the reference from the parsed object and update the property.

The platform also provides JSON-to-Java for document, directory entry, user and group. Therefore, you can update any field based on the corresponding resolvers using the referenced object JSON.

## Custom Resolver

When you create a custom resolver, if you want to be able to load the JSON of a referenced object, you have to register a Java-to-JSON marshaller.

If you want to be able to update a field using the JSON rather than the reference, you have to register a JSON-to-Java marshaller and be sure the `getManagedClasses()` method of your resolver returns the expected Java type.
