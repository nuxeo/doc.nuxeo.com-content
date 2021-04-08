---
title: Nuxeo Salesforce Release Notes
description: Release notes for Nuxeo Salesforce.
tree_item_index: 100
review:
  comment: ''
  date: '2021-03-31'
  status: ok
toc: true
---

# Release 17

### Major evolutions

### New authentication scheme
The authentication now relies on the Named Credentials system of Salesforce and a JWT flow with Nuxeo. There is no more "Log In" button for end users, authentification is transparent. As a consequence, the initial setup has evolved, see the documentation.

### New option to display list of documents without opening the content pannel 
The three modes (Library, Listing and Search) now support an option so that clicking on the title of the document opens a new tab to browse the content in Web UI instead of opening in Salesforce the content pannel. See the documentation for how to enable this option.

### Ability to hide some columns
The columns of the table presentation (Library and Listing modes) can be hidden by configuration. This is useful if you don't need to display some of the information, in order to save space on the screen (like last modification date, author, etc.). See the documentation for how to hide some columns on a given component instance.

### New column: Document Type
Library and listing modes can display a new column: Document Type. It is hidden by default. See the documentation for how to enable it.

## New column: Document Type

### Salesforce Plaform Events
The Nuxeo Lightening component now fires some Salesforce Platform events when the content pannel is opened, or when users click to open the content in Nuxeo, and when they use Nuxeo Drive to edit the content. Your Salesforce application developer can use it to log the data and do some business intelligence, or for implementing any other event based behaviour. See the documentation for the event names.

### Configurable link for "Open in Nuxeo" action
The "Open in Nuxeo" actions can now be configured so that the link used is customized by the "enricher" mechanism of the Nuxeo Platform. This is interesting when you expose to your business users another front end than Web UI for the repository and want them to be redirected from Salesforce to that front end instead of Nuxeo Web UI. See the documenation to see how to reference the custom enricher.

### New Lightening element "Connect" for custom salesforce development.
The low level authentication wiring is now isolated inside a separate component so that Salesforce developers can easily build custom components that interact with the Nuxeo repository via the Nuxeo REST API without having to take care of the authentication aspect.

## Small improvements

### Improvements on the Default Link Document action
The Link Document action is designed to be customized. Nevertheless we have improved its default behaviour:
- support for linking several records on the same document
- filtering of document proxies that cannot be linked.
- use of Sysem session for operating the link: user doesn't need to have Write permission on the document to be able to link it to the record.

### Better responsiveness of the listing mode
The listing mode behaves better with regard to responsiveness.

### Better handling of some error cases
The Nuxeo Lightening element now provides to the end user a more comprehensible message in the following cases:
- Nuxeo server unreachable
- User not present on the Nuxeo server


### Critical bug fix
-  PDFs are now viewable when S3 direct download is enabled.
-  Utility bar now no more looses the context of the current record when detached into a separate tab. This implied to change the implementation of the behaviour, which may affect your customization if you were using it. See the documentation.


