---
title: Nuxeo Layout in Android
labels:
    - android-connector-component
confluence:
    ajs-parent-page-id: '8684332'
    ajs-parent-page-title: Nuxeo Android Connector
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Layout+in+Android
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Layout+in+Android'
    page_id: '8684433'
    shortlink: kYOE
    shortlink_source: 'https://doc.nuxeo.com/x/kYOE'
    source_link: /display/NXDOC/Nuxeo+Layout+in+Android
history:
    - 
        author: Thierry Delprat
        date: '2011-10-05 02:06'
        message: igrated to Confluence 4.
        version: '3'
    - 
        author: Thierry Delprat
        date: '2011-10-05 02:06'
        message: ''
        version: '2'
    - 
        author: Thierry Delprat
        date: '2011-10-05 02:06'
        message: ''
        version: '1'

---
Nuxeo Android Connector SDK allows fetch the Documents layout definition from the server.
This allows to reuse on the Android side the layouts that are present by default in Nuxeo, or the custom ones that can be done via Nuxeo Studio.

Basically, the Layout definitions (as well as Widgets definitions and some vocabularies) are exported in JSON by the Nuxeo server.
On the Android side this definition is cached and used to build an Android View from it.

This implies to bind Nuxeo widgets to Android native Widgets.
The current SDK version provides support for basic fields (Text, TextArea, Date, File, SelectOne, SelectMany).

```

// get a ScrollView that will contains the Form generated from the Nuxeo Layout
layoutContainer = (ScrollView) findViewById(R.id.layoutContainer);

// get the service
NuxeoLayoutService nls = getNuxeoSession().getAdapter(NuxeoLayoutService.class);

// get the layout definition for the current document.
NuxeoLayout layout = nls.getLayout(this, getCurrentDocument(), layoutContainer, getMode());

```

`LayoutMode` argument can be create/edit/view.

When you wan to change back the modifications to the document :

```

Document doc = getCurrentDocument();
layout.applyChanges(doc);

```

Because some widgets can start new `Activity`, the activity responsible to handle the display of the form will need to implment some additional callback.

```

@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
	layout.onActivityResult(requestCode, resultCode, data);
	super.onActivityResult(requestCode, resultCode, data);
}

```

See sample code and base classes for more details.