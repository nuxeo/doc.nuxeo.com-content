---
title: Nuxeo SCIM 2.0
description: Nuxeo SCIM 2.O provides an implementation of the [SCIM 2.0](https://scim.cloud/) specification.
review:
    comment: ''
    date: '2025-02-10'
    status: ok
toc: true
tree_item_index: 2585
---

The [Nuxeo SCIM 2.0](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-scim-v2) package is an implementation of the [SCIM 2.0](https://scim.cloud/) specification.

The implementation is based on the following RFCs:

- [RFC7643](https://datatracker.ietf.org/doc/html/rfc7643) - System for Cross-domain Identity Management: Core Schema
- [RFC7644](https://datatracker.ietf.org/doc/html/rfc7644) - System for Cross-domain Identity Management: Protocol

Nuxeo acts as the "SCIM service provider" mentioned in these RFCs.

This pages describes:

- The functional [scope](#scope) of the package.
- The [REST API endpoints](#rest-api-endpoints) it provides.
- The way of [mapping](#mapping) SCIM User and Group resources to Nuxeo user and group definitions.

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Scope

The required aspects of the above-mentioned specification are expected to be covered by the Nuxeo implementation.

The Nuxeo implementation includes the following optional features described in RFC7644:

- Query resources against a resource type endpoint (e.g.: `/Users`), see [Section 3.4.2](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2).
- Filtering, see [Section 3.4.2.2](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2).
- Sorting, see [Section 3.4.2.3](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.3).
- Attributes: attributes and excludedAttributes, see [Section 3.4.2.5](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.5) and [Section 3.9](https://datatracker.ietf.org/doc/html/rfc7644#section-3.9).
- Querying Resources Using HTTP POST, see [Section 3.4.3](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.3).
- Modifying with PATCH, see [Section 3.5.2](https://datatracker.ietf.org/doc/html/rfc7644#section-3.5.2).

## REST API Endpoints

The following endpoints are available.

### Create User

```shell
POST /nuxeo/scim/v2/Users
```

#### Request Body

Supply the User to create with the following properties:

| Property Name  | Value      | Description                                        | Notes    |
| -------------- | ---------- | -------------------------------------------------- | -------- |
| **userName**   | **string** | The username.                                      |          |
| **givenName**  | **string** | The user's first name.                             | Optional |
| **familyName** | **string** | The user's last name.                              | Optional |
| **...**        | **...**    | Other SCIM User attributes mapped to a Nuxeo user. | Optional |

#### Response

If successful, returns a SCIM User resource in JSON, representing the created Nuxeo user.

#### Status Codes

- 201 *Created* - Success.
- 400 *Bad Request* - Client error (malformed request syntax, missing request parameter, missing body attribute, etc.).
- 409 *Conflict* - User with the given `userName` exists.

### Create Group

```shell
POST /nuxeo/scim/v2/Groups
```

#### Request Body

Supply the Group to create with the following properties:

| Property Name   | Value      | Description                                                                                                  | Notes    |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------------------ | -------- |
| **displayName** | **string** | The group label.                                                                                             | Optional |
| **members**     | **array**  | The group members, as described in [Section 4.2](https://datatracker.ietf.org/doc/html/rfc7643#section-4.2). | Optional |
| **...**         | **...**    | Other SCIM Group attributes mapped to a Nuxeo group.                                                         | Optional |

#### Response

If successful, returns a SCIM Group resource in JSON, representing the created Nuxeo group.

#### Status Codes

- 201 *Created* - Success.
- 400 *Bad Request* - Client error (malformed request syntax, missing request parameter, missing body attribute, etc.).

### Read User

```shell
GET /nuxeo/scim/v2/Users/{id}
```

#### Path Parameters

| Parameter Name | Type       | Description  |
| -------------- | ---------- | ------------ |
| **id**         | **string** | The user id. |

#### Response

If successful, returns a SCIM User resource in JSON, representing the Nuxeo user with the given `id` path parameter.

#### Status Codes

- 200 *OK* - Success.
- 404 *Not Found* - User with the given `id` path parameter not found.

### Read Group

```shell
GET /nuxeo/scim/v2/Groups/{id}
```

#### Path Parameters

| Parameter Name | Type       | Description   |
| -------------- | ---------- | ------------- |
| **id**         | **string** | The group id. |

#### Response

If successful, returns a SCIM Group resource in JSON, representing the Nuxeo group with the given `id` path parameter.

#### Status Codes

- 200 *OK* - Success.
- 404 *Not Found* - Group with the given `id` path parameter not found.

### Replace User

```shell
PUT /nuxeo/scim/v2/Users/{id}
```

#### Path Parameters

| Parameter Name | Type       | Description  |
| -------------- | ---------- | ------------ |
| **id**         | **string** | The user id. |

#### Request Body

Supply the User to replace with the following properties:

| Property Name  | Value      | Description                                        | Notes    |
| -------------- | ---------- | -------------------------------------------------- | -------- |
| **givenName**  | **string** | The user's first name.                             | Optional |
| **familyName** | **string** | The user's last name.                              | Optional |
| **...**        | **...**    | Other SCIM User attributes mapped to a Nuxeo user. | Optional |

#### Response

If successful, returns a SCIM User resource in JSON, representing the replaced Nuxeo user.

#### Status Codes

- 200 *OK* - Success.
- 400 *Bad Request* - Client error (malformed request syntax, missing request parameter, etc.).
- 404 *Not Found* - User with the given `id` path parameter not found.

### Replace Group

```shell
PUT /nuxeo/scim/v2/Groups/{id}
```

#### Path Parameters

| Parameter Name | Type       | Description   |
| -------------- | ---------- | ------------- |
| **id**         | **string** | The group id. |

#### Request Body

Supply the Group to replace with the following properties:

| Property Name   | Value      | Description                                                                                                  | Notes    |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------------------ | -------- |
| **displayName** | **string** | The group label.                                                                                             | Optional |
| **members**     | **array**  | The group members, as described in [Section 4.2](https://datatracker.ietf.org/doc/html/rfc7643#section-4.2). | Optional |
| **...**         | **...**    | Other SCIM Group attributes mapped to a Nuxeo group.                                                         | Optional |

#### Response

If successful, returns a SCIM Group resource in JSON, representing the replaced Nuxeo group.

#### Status Codes

- 200 *OK* - Success.
- 400 *Bad Request* - Client error (malformed request syntax, missing request parameter, etc.).
- 404 *Not Found* - Group with the given `id` path parameter not found.

### Delete User

```shell
DELETE /nuxeo/scim/v2/Users/{id}
```

#### Path Parameters

| Parameter Name | Type       | Description  |
| -------------- | ---------- | ------------ |
| **id**         | **string** | The user id. |

#### Response

If successful, deletes the Nuxeo user with the given `id` path parameter.

#### Status Codes

- 204 *No Content* - Success.
- 404 *Not Found* - User with the given `id` path parameter not found.

### Delete Group

```shell
DELETE /nuxeo/scim/v2/Groups/{id}
```

#### Path Parameters

| Parameter Name | Type       | Description   |
| -------------- | ---------- | ------------- |
| **id**         | **string** | The group id. |

#### Response

If successful, deletes the Nuxeo group with the given `id` path parameter.

#### Status Codes

- 204 *No Content* - Success.
- 404 *Not Found* - Group with the given `id` path parameter not found.

### Update User

```shell
PATCH /nuxeo/scim/v2/Users/{id}
```

#### Path Parameters

| Parameter Name | Type       | Description  |
| -------------- | ---------- | ------------ |
| **id**         | **string** | The user id. |

#### Request Body

Supply the patch operations with the following properties:

| Property Name  | Value     | Description                                                                                                         | Notes |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------- | ----- |
| **Operations** | **array** | The patch operations, as described in [Section 3.5.2](https://datatracker.ietf.org/doc/html/rfc7644#section-3.5.2). |       |

#### Response

If successful, returns a SCIM User resource in JSON, representing the updated Nuxeo user.

#### Status Codes

- 200 *OK* - Success.
- 400 *Bad Request* - Client error (malformed request syntax, missing request parameter, missing body attribute, etc.).
- 404 *Not Found* - User with the given `id` path parameter not found.

### Update Group

```shell
PATCH /nuxeo/scim/v2/Groups/{id}
```

#### Path Parameters

| Parameter Name | Type       | Description   |
| -------------- | ---------- | ------------- |
| **id**         | **string** | The group id. |

#### Request Body

Supply the patch operations with the following properties:

| Property Name  | Value     | Description                                                                                                         | Notes |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------- | ----- |
| **Operations** | **array** | The patch operations, as described in [Section 3.5.2](https://datatracker.ietf.org/doc/html/rfc7644#section-3.5.2). |       |

#### Response

If successful, returns a SCIM Group resource in JSON, representing the updated Nuxeo group.

#### Status Codes

- 200 *OK* - Success.
- 400 *Bad Request* - Client error (malformed request syntax, missing request parameter, missing body attribute, etc.).
- 404 *Not Found* - Group with the given `id` path parameter not found.

### Search Users

```shell
GET /nuxeo/scim/v2/Users?filter={attribute}{op}{value}&sortBy={attributeName}&sortOrder={ascending|descending}
```

#### Path Parameters

See section [3.4.2. Query Resources](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2) for the standard set of query parameters that can be used to filter, sort, and paginate to return zero or more User resources in a query response.

#### Response

If successful, returns a list of matching SCIM User resources in JSON.

#### Status Codes

- 200 *OK* - Success.
- 400 *Bad Request* - Client error (malformed request syntax, etc.).

{{#> callout type='warning' heading='Known limitations' }}
Filters on user groups are currently not supported, such request will result in an error:

```shell
GET /nuxeo/scim/v2/Users/filter=groups eq "members"
```

{{/callout}}

{{#> callout type='info' }}
Querying Resources can also be done using HTTP POST, as described in [Section 3.4.3](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.3):

```shell
POST /nuxeo/scim/v2/Users/.search
```

{{/callout}}

### Search Groups

```shell
GET /nuxeo/scim/v2/Groups?filter={attribute}{op}{value}&sortBy={attributeName}&sortOrder={ascending|descending}
```

#### Path Parameters

See section [3.4.2. Query Resources](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2) for the standard set of query parameters that can be used to filter, sort, and paginate to return zero or more Group resources in a query response.

#### Response

If successful, returns a list of matching SCIM Group resources in JSON.

#### Status Codes

- 200 *OK* - Success.
- 400 *Bad Request* - Client error (malformed request syntax, etc.).

{{#> callout type='warning' heading='Known limitations' }}
Filters on group members are currently not supported, such request will result in an error:

```shell
GET /nuxeo/scim/v2/Groups/filter=members eq "jdoe"
```

{{/callout}}

{{#> callout type='info' }}
Querying Resources can also be done using HTTP POST, as described in [Section 3.4.3](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.3):

```shell
POST /nuxeo/scim/v2/Groups/.search
```

{{/callout}}

### Discovery

```shell
GET /nuxeo/scim/v2/ServiceProviderConfig

GET /nuxeo/scim/v2/Schemas

GET /nuxeo/scim/v2/Schemas/User

GET /nuxeo/scim/v2/Schemas/Group

GET /nuxeo/scim/v2/ResourceTypes

GET /nuxeo/scim/v2/ResourceTypes/User

GET /nuxeo/scim/v2/ResourceTypes/Group
```

See Section [4. Service Provider Configuration Endpoints](https://datatracker.ietf.org/doc/html/rfc7644#section-4) about these three endpoints, defined to facilitate discovery of SCIM service provider features and schema that can be retrieved using HTTP GET.

## Mapping

### Definition

The Nuxeo implementation provides a way of mapping the attributes of the SCIM 2.0 [User](https://datatracker.ietf.org/doc/html/rfc7643#section-4.1) and [Group](https://datatracker.ietf.org/doc/html/rfc7643#section-4.2) schemas to the user and group schemas defined in Nuxeo. This mapping is done through a Java interface:

```java
public interface ScimV2Mapping {

    /**
     * Hook to be executed after a group is created.
     */
    DocumentModel afterCreateGroup(DocumentModel groupModel, GroupResource groupResource) throws ScimException;

    /**
     * Hook to be executed after a user is created.
     */
    DocumentModel afterCreateUser(DocumentModel userModel, UserResource userResource) throws ScimException;

    /**
     * Hook to be executed after a group is updated.
     */
    DocumentModel afterUpdateGroup(DocumentModel groupModel, GroupResource groupResource) throws ScimException;

    /**
     * Hook to be executed after a user is updated.
     */
    DocumentModel afterUpdateUser(DocumentModel userModel, UserResource userResource) throws ScimException;

    /**
     * Hook to be executed before a group is created.
     */
    DocumentModel beforeCreateGroup(DocumentModel groupModel, GroupResource groupResource) throws ScimException;

    /**
     * Hook to be executed before a user is created.
     */
    DocumentModel beforeCreateUser(DocumentModel userModel, UserResource userResource) throws ScimException;

    /**
     * Hook to be executed before a group is updated.
     */
    DocumentModel beforeUpdateGroup(DocumentModel groupModel, GroupResource groupResource) throws ScimException;

    /**
     * Hook to be executed before a user is updated.
     */
    DocumentModel beforeUpdateUser(DocumentModel userModel, UserResource userResource) throws ScimException;

    /**
     * Gets the Nuxeo group model attribute name matching the SCIM attribute name used in SCIM Search filtering and
     * sorting.
     */
    String getGroupAttributeName(String scimAttribute, Object filterValue);

    /**
     * Gets the Nuxeo group model attribute name matching the SCIM attribute name used in SCIM patch request path
     * filtering. E.g. in this case, the SCIM attribute to map is "value":
     *
     * <pre>{@code
     * {
     *   "schemas":["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
     *   "Operations":[{
     *     "op":"remove",
     *     "path":"members[value eq \"someGroupId\"]"
     *    }]
     * }
     * }</pre>
     */
    String getGroupMemberAttributeName(String scimAttribute, Object filterValue);

    /**
     * Gets a group resource representation of a group model.
     */
    GroupResource getGroupResourceFromNuxeoGroup(DocumentModel groupModel, String baseURL) throws ScimException;

    /**
     * Gets the Nuxeo user model attribute name matching the SCIM attribute name used in SCIM Search filtering and
     * sorting.
     */
    String getUserAttributeName(String scimAttribute, Object filterValue);

    /**
     * Gets the Nuxeo user model attribute name matching the SCIM attribute name used in SCIM patch request path
     * filtering. E.g. in this case, the SCIM attribute to map is "value":
     *
     * <pre>{@code
     * {
     *   "schemas":["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
     *   "Operations":[{
     *     "op":"remove",
     *     "path":"members[value eq \"someUserId\"]"
     *    }]
     * }
     * }</pre>
     */
    String getUserMemberAttributeName(String scimAttribute, Object filterValue);

    /**
     * Gets a user resource representation of a user model.
     */
    UserResource getUserResourceFromNuxeoUser(DocumentModel userModel, String baseURL) throws ScimException;

    /**
     * Hook to be executed when a group is patched using JSON patch.
     * <p>
     * This is called when handling the attributes othen than "members" in a patch request operation.
     */
    DocumentModel patchGroup(DocumentModel groupModel, GroupResource groupResource) throws ScimException;

}
```

### Default Mapping

Nuxeo provides a default implementation of this interface through the following XML component:

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.scim.v2.service.DefaultScimV2Mapping">

  <documentation>
    This default scim v2 mapping contribution.
  </documentation>

  <extension target="org.nuxeo.scim.v2.ScimV2MappingService"
             point="scimV2Mapping">
    <scimV2Mapping
      class="org.nuxeo.scim.v2.service.DefaultScimV2Mapping" />
  </extension>

</component>
```

As an example, this is how we map the SCIM User attributes to a Nuxeo user:

```java
@Override
public void updateNuxeoUserFromUserResource(DocumentModel userModel, UserResource userResouce) {
    UserManager um = Framework.getService(UserManager.class);
    String userSchemaName = um.getUserSchemaName();

    Name name = userResouce.getName();
    if (name == null) {
        userModel.setProperty(userSchemaName, FIRST_NAME, null);
        userModel.setProperty(userSchemaName, LAST_NAME, null);
        return;
    }
    var givenName = name.getGivenName();
    var firstName = givenName == null ? null : trimToNull(givenName);
    userModel.setProperty(userSchemaName, FIRST_NAME, firstName);
    var familyName = name.getFamilyName();
    var lastName = familyName == null ? null : trimToNull(familyName);
    userModel.setProperty(userSchemaName, LAST_NAME, lastName);

    List<Email> emails = userResouce.getEmails();
    if (emails == null || emails.isEmpty()) {
        userModel.setProperty(userSchemaName, EMAIL, null);
        return;
    }
    Predicate<Email> primaryEmail = Objects::nonNull;
    primaryEmail = primaryEmail.and(email -> BooleanUtils.isTrue(email.getPrimary()));
    Email email = emails.stream().filter(primaryEmail).findFirst().orElse(emails.get(0));
    if (email == null) {
        userModel.setProperty(userSchemaName, EMAIL, null);
    } else {
        userModel.setProperty(userSchemaName, EMAIL, email.getValue());
    }
    return userModel;
}
```

This is how we map a query filter attribute to a Nuxeo user field:

```java
@Override
public String getUserAttributeName(String column, Object filterValue) {
    return switch (column.toLowerCase()) {
        case "id", "username" -> Framework.getService(UserManager.class).getUserIdField();
        case "emails", "emails.value" -> Framework.getService(UserManager.class).getUserEmailField();
        case "givenname" -> FIRST_NAME;
        case "familyname" -> LAST_NAME;
        default -> column;
    };
}
```

### Custom Mapping

To define a custom mapping, you need to override this component with a custom implementation of the `ScimV2Mapping` interface (that may extend `DefaultScimV2Mapping`):

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.scim.v2.service.test.DummyScimV2TestMapping">

  <require>org.nuxeo.scim.v2.ScimV2Mapper</require>

  <extension target="org.nuxeo.scim.v2.ScimV2MappingService"
             point="scimV2Mapping">
    <scimV2Mapping
      class="org.nuxeo.scim.v2.tests.contrib.DummyScimV2TestMapping" />
  </extension>

</component>
```

Example of a custom mapping implementation:

```java
public class DummyScimV2TestMapping extends DefaultScimV2Mapping {

    public static final String EMAIL_FIELD_HOME = "homeEmail";

    public static final String EMAIL_FIELD_WORK = "workEmail";

    public static final String EMAIL_TYPE_HOME = "home";

    public static final String EMAIL_TYPE_WORK = "work";

    // Email pattern
    protected static Pattern pattern = Pattern.compile("[^@]+@[^\\.]+\\..+");

    @Override
    protected DocumentModel updateNuxeoUserFromUserResource(DocumentModel userModel, UserResource userResource) {
        final DocumentModel customUserModel = super.updateNuxeoUserFromUserResource(userModel, userResource);

        UserManager um = Framework.getService(UserManager.class);
        String userSchemaName = um.getUserSchemaName();

        // first reset email fields to honor PUT, PATCH remove and PATCH replace for a complex multivalued attribute
        customUserModel.setProperty(userSchemaName, EMAIL_FIELD_HOME, null);
        customUserModel.setProperty(userSchemaName, EMAIL_FIELD_WORK, null);

        List<Email> emails = userResource.getEmails();
        if (emails == null || emails.isEmpty()) {
            return customUserModel;
        }
        emails.stream().filter(Objects::nonNull).filter(e -> e.getType() != null).forEach(email -> {
            String type = email.getType();
            String value = email.getValue();
            switch (type) {
                case EMAIL_TYPE_HOME -> customUserModel.setProperty(userSchemaName, EMAIL_FIELD_HOME, value);
                case EMAIL_TYPE_WORK -> customUserModel.setProperty(userSchemaName, EMAIL_FIELD_WORK, value);
                default -> {
                    // cannot map email
                }
            }
        });

        return customUserModel;
    }

    @Override
    public UserResource getUserResourceFromNuxeoUser(DocumentModel userModel, String baseURL) throws ScimException {
        UserResource userResource = super.getUserResourceFromNuxeoUser(userModel, baseURL);

        List<Email> emails = new ArrayList<>();
        UserManager um = Framework.getService(UserManager.class);
        String userSchemaName = um.getUserSchemaName();

        String homeEmail = (String) userModel.getProperty(userSchemaName, EMAIL_FIELD_HOME);
        if (isNotBlank(homeEmail)) {
            emails.add(new Email().setType(EMAIL_TYPE_HOME).setValue(homeEmail));
        }
        String workEmail = (String) userModel.getProperty(userSchemaName, EMAIL_FIELD_WORK);
        if (isNotBlank(workEmail)) {
            emails.add(new Email().setType(EMAIL_TYPE_WORK).setValue(workEmail));
        }
        if (!emails.isEmpty()) {
            userResource.setEmails(emails);
        }

        return userResource;
    }

    /**
     * Adds any created user to the "members" group.
     */
    @Override
    public DocumentModel afterCreateUser(DocumentModel userModel, UserResource userResource) {
        UserManager um = Framework.getService(UserManager.class);
        NuxeoPrincipal principal = um.getPrincipal(userModel.getId());
        var groups = principal.getGroups();
        if (!groups.contains("members")) {
            groups.add("members");
            principal.setGroups(groups);
            um.updateUser(principal.getModel());
        }
        return userModel;
    }

    /**
     * Searches on email field instead of user Id field if filter value looks like an email.
     */
    @Override
    public String getUserAttributeName(String column, Object value) {
        if ("userName".equals(column) && value instanceof String s && pattern.matcher(s).matches()) {
            return "email";
        }
        return super.getUserAttributeName(column, value);
    }
}
```
