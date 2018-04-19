---
title: How to Display a Children Documents Listing
review:
    comment: ''
    date: '2018-04-19'
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to create a listing displaying custom properties of the documents contained in a given space.
        level: Intermediate
        tool: Studio
        topics: 'Page Providers'
labels:
    - howto
toc: true
tree_item_index: 800
---

// NOTE FOR MANON: most screenshots are already there in the corresponding folder. They need to be cropped but should provide you a basis to work with.

Goal: display interesting business properties when listing the children documents of a contract portfolio.
- Start date
- End date (note: requires to update initial how to to add this property)
- Owner
- Policy

Prerequisites:
- contract and contract portfolio doctypes
- web ui dependency in studio, web ui installed in nuxeo server

1. Create a portfolioContent page provider in Modeler
1. Query:

```
ecm:mixinType != 'HiddenInNavigation'
AND ecm:isVersion = 0
AND ecm:currentLifeCycleState != 'deleted'
```

1. Add predicate on ecm:parentId and take note of the name that has been given to it (likely to be `system_parentId`)

Note: contrarily to JSF UI, parameters are not inserted in the query then resolved using MVEL query parameters. Instead, we use predicates to define parameters and resolve them using JavaScript.

Goal now: configure what we want to display when this query is executed

1. Click on configure layouts in Designer
1. Configure the results form
1. Edit table results listing
1. Switch to table editor
1. Add start and end date columns

Goal now: Show our listing in the UI

1. UI > Document Pages > Create a new listing
1. Name: portfolioContentListing
1. Label: Content
1. Order: 1
1. Provider: portfolioContent
1. Schemas: dublincore, contract
1. Search-name: portfoliocontent
1. Params: `{"system_parentId": "[[document.uid]]"}`

Some explanations for params:
- Elements are configured using JavaScript (JS). We are putting a JS object here (`{"key": "value", "anotherKey": "anotherValue"}`) that will be inserted in the element.
- `system_parentId` is the name of the predicate we defined in Modeler. We are saying here that we want to assign a value to it.
- `[[document.uid]]` is the value we assign to our predicate. In this case, we are using one way binding (symbolized by the double square brackets) to forward a value dynamically. The `document.uid` variable can be guessed easily once you know that you are parsing a [document entity-type](type https://doc.nuxeo.com/nxdoc/rest-api-entity-types/#document) using JS.

//NOTE FOR MANON: je te laisse corriger le lien précédent stp il est pas beau mais là j'en peux plus il est 20h

1. Define activation filter + one of the types: ContractPortfolio

Save and deploy => done
