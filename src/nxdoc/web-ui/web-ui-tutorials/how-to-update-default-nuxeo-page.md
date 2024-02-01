---
title: 'HOWTO: Customize the Default Document View'
description: In this tutorial, you will learn how to edit the default Nuxeo Web UI document view page, and display the information you need.
review:
    comment: ''
    date: '2020-11-09'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to update the default Nuxeo document view.
        level: Advanced
        tool: code
        topics: 'UIElements, Automation'
labels:
    - tutorial
    - nuxeo-ui-elements
    - polymer
tree_item_index: 1010
---

In this tutorial, you will learn how to edit the default Nuxeo Web UI document view page, and display the information you need (by adding new Nuxeo cards, removing useless property information, reorganizing the page layout etc.)

{{#> callout type='info' heading='Hyland University'}}
Watch the [Nuxeo Web UI Development](https://university.hyland.com/courses/e4174) course on Hyland University:</br>
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/UNIVERSITY_SLOTS
    name: Screenshot 2020-07-16 at 12.06.01.png
    1.1.3#screenshot#up_to_date
--}}
![WEBUI_CUSTOMIZATION_FRONTEND_DEV](/nx_assets/1840dd84-67fa-48ae-b849-7296ca1386ae.png ?w=450,border=true)
{{/callout}}

## Use Case

We will add a new `nuxeo-card` element on top of the default document page when a document is validated, indicating its validation period. If the document is not validated, the element shouldn't be displayed.

## Requirements

- You need to follow the instructions described in [HOWTO: Create and Use Document Facets]({{page space='studio' page='how-to-create-and-use-document-facets'}})

- We will use a document action to attach the Validity facet, to do so start by creating an automation chain `AC_Attach_Validity_Facet` with the following content:
  ```
  - Context.FetchDocument
  - Document.AddFacet:
      facet: ValidityFacet
      save: "true"
  - Document.SetProperty:
      xpath: "validity:ValidityStartFrom"
      save: "true"
      value: "@{org.nuxeo.ecm.core.schema.utils.DateParser.formatW3CDateTime(CurrentDate.date)}"
  - Document.SetProperty:
      xpath: "validity:ValidityEndsIn"
      save: "true"
      value: "@{org.nuxeo.ecm.core.schema.utils.DateParser.formatW3CDateTime(CurrentDate.years(3).date)}"
  - Document.FollowLifecycleTransition:
      value: approve
  ```

{{#> callout type='note'}}
In this tutorial, we will automatically start the validation period from today's date, for three years, and update the lifecycle state. You can implement any custom business logic in automation chains or automation scripting
{{/callout}}

- Create a button in Nuxeo Studio Designer to trigger this automation chain: Ensure the `event` attribute has `document-updated` value so that Nuxeo Web UI is refreshed after clicking on the button

## Instructions

The idea is to override the default Nuxeo Web UI slot contribution by using the same **name**, to avoid having two layouts added to the DOM.

We will use the **priority** attribute to control the order of contributions with the same name. It allows you to control the merge of these contributions (e.g: disabling existing ones, requires the disabled contribution to come after the one you want to disable).

The default priority is 0: higher priority wins, therefore this contribution will result in an override of the default slot content template.

### Copy the Original Document Page Element

If you need to override any Nuxeo Web UI element, you need first to find the source file on the [Nuxeo Web UI Github repository](https://github.com/nuxeo/nuxeo-web-ui).

It is important **to select the right branch** on the `nuxeo-web-ui` repository as the code may change depending on the Web UI releases.

For LTS 2019 (10.10), choose the `10.10` branch: [https://github.com/nuxeo/nuxeo-web-ui/tree/10.10/elements](https://github.com/nuxeo/nuxeo-web-ui/tree/10.10/elements).

1. Copy the the element you need to edit: in our case, this is the `nuxeo-document-page` available [here](https://github.com/nuxeo/nuxeo-web-ui/blob/10.10/elements/document/nuxeo-document-page.html).
  {{#> callout type='note'}}
  The ` nuxeo-collapsible-document-page` is the element used for folderish documents.
  {{/callout}}

1. Go to **Nuxeo Studio Designer** and paste the code in a custom element, and adjust the element name: Under the **Resources** tab of Nuxeo Studio Designer:
  1. Create a folder called `custom-elements`
  1. In the `custom-elements` folder, create an empty file called `nuxeo-document-page.html` and paste the code of the `nuxeo-document-page`.
1. Comment all the element imports at the beginning of the file (like `<link rel="import" href="nuxeo-document-metadata.html">`)

{{#> callout type='warning'}}
This procedure implies that any updates by the Nuxeo team on this element won't be applied to your custom element: So ensure the code base is not affected along the hotfix releases.
{{/callout}}

### Adapt the Document View Page Element

We are now ready to edit the page. We need to:

- Set a filter so that the new Nuxeo card appears only when the facet is attached to the document
- Display the information related to the validity facet

So add the following code between the `</style>` and `<nuxeo-document-info-bar>` HTML tags:

```html
<nuxeo-filter document="[[document]]" facet="ValidityFacet">
  <template>
    <nuxeo-card heading="Document validity" icon="icons:check">
    The document is valid from [[formatDate(document.properties.validity:ValidityStartFrom)]] to [[formatDate(document.properties.validity:ValidityEndsIn)]].
    </nuxeo-card>
  </template>
</nuxeo-filter>
```

### Reference the New Element in the Custom Bundle File

To "activate" the new element, you need to import it in your **custom bundle file**.

To create it, just click on the default studio bundle file listing below the `UI` folder, and click on the **Generate** button.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize the default document view/step2.png
    name: step2.png
    studio_designer#screenshot#up_to_date
--}}
![step2.png](/nx_assets/796fd130-f49b-4d72-ad42-f4fe1d38121c.png ?w=650,border=true)

Then, simply import the new element with:

```html
<link rel="import" href="custom-elements/nuxeo-document-page.html">
```

### Replace the original page by the custom page

At this stage, the new element is imported but does not replace the default element yet. To do so, you need to update the default slot contribution of Nuxeo Web UI.

All default slot contributions car be found in [https://github.com/nuxeo/nuxeo-web-ui/blob/10.10/elements/nuxeo-web-ui-bundle.html](https://github.com/nuxeo/nuxeo-web-ui/blob/10.10/elements/nuxeo-web-ui-bundle.html).

To override the default behavior:
- copy paste the contributions which should be updated and adjust it with your needs.

In our case, we will add the following contribution in our custom bundle file:

```
<!-- Default order is 10 -->
<nuxeo-slot-content name="documentViewPage" slot="DOCUMENT_VIEWS_PAGES" order="20">
  <template>
    <nuxeo-filter document="[[document]]" expression="document.facets.indexOf('Folderish') === -1
                                                   && document.facets.indexOf('Collection') === -1">
      <template>
        <nuxeo-document-page name="view" document="[[document]]" opened></nuxeo-document-page>
      </template>
    </nuxeo-filter>
  </template>
</nuxeo-slot-content>
```

### Deploy Your Configuration

Hot reload your Nuxeo instance: a new document actions should be available, and the new Nuxeo card should appear when clicking on the button, as below:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize the default document view/step3.png
    name: step3.png
    1.1.3#screenshot#up_to_date
--}}
![step3.png](/nx_assets/49cdda43-bb18-4d4e-beab-6bef4fb1bdb5.png ?w=650,border=true)
