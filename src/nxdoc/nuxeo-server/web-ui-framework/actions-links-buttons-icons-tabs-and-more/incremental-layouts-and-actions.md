---
title: Incremental Layouts and Actions
labels:
    - summary-layout
    - incremental-layout
    - layout-widgets-component
    - excerpt
confluence:
    ajs-parent-page-id: '950289'
    ajs-parent-page-title: 'Actions (Links, Buttons, Icons, Tabs and More)'
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Incremental+Layouts+and+Actions
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Incremental+Layouts+and+Actions'
    page_id: '17794803'
    shortlink: 84YPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/84YPAQ'
    source_link: /display/NXDOC/Incremental+Layouts+and+Actions
history:
    - 
        author: Solen Guitter
        date: '2014-03-10 18:42'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2014-01-20 15:59'
        message: Added related topics
        version: '5'
    - 
        author: Solen Guitter
        date: '2014-01-13 09:48'
        message: ''
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2014-01-10 13:55'
        message: 'NXDOC-227: explain how to configure incremental layouts'
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2013-12-20 15:38'
        message: better title to avoid special chars
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2013-12-12 18:14'
        message: ''
        version: '1'

---
{{! excerpt}}

Actions are leveraged by the layout framework to include widgets inside layouts dynamically, benefiting from sorting and filtering features of actions within layouts.

{{! /excerpt}}

Configuration is a bit overkill for now; this could be simplified in the future, but the main principle is to:

1.  Define a layout including action widgets.
2.  Define action widgets referencing an [action category]({{page page='actions-display'}}) (depending on the use case).
3.  Define actions with type&nbsp;`widget` within this category, referencing a widget name.
4.  Define widgets with corresponding names.

Here is a complete example, taken from the default Nuxeo Summary layout, and showing how some widgets are shown conditionally on the page.

```

          gridStyle12

        summary_panel_top

          gridStyle7
          gridStyle5

        summary_panel_left
        summary_panel_right

          gridStyle12

        summary_panel_bottom

```

This layout is using a [grid]({{page page='layout-definitions'}}), so that widgets are piled up within grid slots and stacked up correctly when some widgets are not displayed.

Let's look at the `summary_panel_left` widget configuration:

```

    true

      SUMMARY_PANEL_LEFT
      summaryActions

```

Actions can be displayed by this widget when using the category&nbsp;`SUMMARY_PANEL_LEFT`. Here is a sample action configuration:

```

    SUMMARY_PANEL_LEFT

      summary_note_text

    hasNote

```

This action is using the type `widget`, referencing the widget named&nbsp;`summary_note_text`. Note that it's also using a filter that makes sure the widget will be shown only when the document has a schema named `note`:

```

      note

```

Finally, here is the widget configuration:

```

      note:note
      note:mime_type

        #{noteActions.translateImageLinks(field_0)}

      note_content_block

      true

```

Note that the widget holds a control to make sure a form is added around it: the summary layout is not surrounded by a form since version 5.8 to allow defining fine-grained forms inside it.

&nbsp;

* * *

<div class="row" data-equalizer="" data-equalize-on="medium">

<div class="column medium-6">{{#> panel heading="Related pages in current documentation"}}

**About actions:**

**About Summary layout:**

{{/panel}}

</div>

<div class="column medium-6">{{#> panel heading="Related pages in Studio documentation"}}

**About actions:**

{{/panel}}

</div>

</div>