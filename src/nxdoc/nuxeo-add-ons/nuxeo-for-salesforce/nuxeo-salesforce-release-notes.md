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

## Major Evolutions

### New Authentication Scheme

The authentication now relies on the Named Credentials system of Salesforce and a JWT flow with Nuxeo. There is no more "Log In" button for end-users, authentication is transparent. As a consequence, the initial setup has evolved, see the documentation.

### New Option to Display List of Documents Without Opening the Content Panel

The three modes (Library, Listing and Search) now support an option so that clicking on the title of the document opens a new tab to browse the content in Web UI instead of opening in Salesforce the content panel. See the documentation for how to enable this option.

###  Ability to Hide Some Columns

The columns of the table presentation (Library and Listing modes) can be hidden by configuration. This is useful if you don't need to display some of the information, in order to save space on the screen (like last modification date, author, etc.). See the documentation for how to hide some columns on a given component instance.

### New Column: Document Type

Library and listing modes can display a new column: Document Type. It is hidden by default. See the documentation for how to enable it.

### Salesforce Platform Events

The Nuxeo Lightning component now fires some Salesforce Platform events when the content panel is opened, or when users click to open the content in Nuxeo, and when they use Nuxeo Drive to edit the content. Your Salesforce application developer can use it to log the data and do some business intelligence, or for implementing any other event-based behavior. See the documentation for the event names.

### Configurable Link for "Open in Nuxeo" Action

The "Open in Nuxeo" actions can now be configured so that the link used is customized by the "enricher" mechanism of the Nuxeo Platform. This is interesting when you expose to your business users another front end than Web UI for the repository and want them to be redirected from Salesforce to that front end instead of Nuxeo Web UI. See the documentation to see how to reference the custom enricher.

### New Lightning Element "Connect" for Custom Salesforce Development

The low-level authentication wiring is now isolated inside a separate component so that Salesforce developers can easily build custom components that interact with the Nuxeo repository via the Nuxeo REST API without having to take care of the authentication aspect.

## Small Improvements

### Improvements on the Default Link Document Action

The Link Document action is designed to be customized. Nevertheless, we have improved its default behavior:
- Support for linking several records on the same document.
- Filtering of document proxies that cannot be linked.
- Use of System session for operating the link: user doesn't need to have Write permission on the document to be able to link it to the record.

### Better Responsiveness of the Listing Mode

The listing mode behaves better regarding responsiveness.

### Better Handling Of Some Error Cases

The Nuxeo Lightening element now provides to the end-user a more comprehensible message in the following cases:
- Nuxeo server unreachable
- User not present on the Nuxeo server

## Critical Bug Fix

-  PDFs are now viewable when S3 direct download is enabled.
-  Utility bar now no more loses the context of the current record when detached into a separate tab. This implied changing  the implementation of the behavior, which may affect your customization if you were using it. See the documentation.
