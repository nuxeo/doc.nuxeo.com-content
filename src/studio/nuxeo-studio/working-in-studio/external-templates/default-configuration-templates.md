---
title: Default configuration templates
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '8683961'
    ajs-parent-page-title: Templates reference
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Default+configuration+templates
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Default+configuration+templates'
    page_id: '8683951'
    shortlink: r4GE
    shortlink_source: 'https://doc.nuxeo.com/x/r4GE'
    source_link: /display/Studio/Default+configuration+templates
tree_item_index: 200
history:
    -
        author: Alain Escaffre
        date: '2011-09-18 21:20'
        message: igrated to Confluence 4.
        version: '3'
    -
        author: Alain Escaffre
        date: '2011-09-18 21:20'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2011-09-18 21:16'
        message: ''
        version: '1'
toc: true        
---

{{#> callout type='tip' }}
To make the discovery of Studio easier, in each newly created project we automatically import the "Default configuration" template that corresponds to your target application (DM, DAM, etc), so that all you have to do is modifying what has been imported. These default configuration templates implement some core elements you see in the Nuxeo application you downloaded.</br>
If you want to customize those elements, the "Default configuration" templates are what you need!
{{/callout}}

The Application templates below are available to help you discover how the default configuration of Nuxeo applications is done.

## Default Nuxeo Platform Configuration

This template is ideal to start your Studio configuration and understand how it works. It is imported automatically the first time you have access to your Nuxeo Studio project. It provides a sample demonstrating how to override Nuxeo Server Package document types from Studio and how to contribute some additional configuration.

It overrides the `Domain` and `File` document types, the Web UI layouts and also displays, in Web UI, default children of a container.

It also provides the default lifecycle shipping with the Platform (`default`) as well as the `Domain` structure template.

## Default Nuxeo DAM Configuration

This application template provides a sample demonstrating how to override from Studio document types from the DAM Nuxeo Package.

It overrides the `Video` and `Picture` document type and the Web UI layouts.

Please note that you need to select the DAM package in the Application Definition screen to use this project.

## Default Nuxeo Platform Workflows Configuration

This application will add into your Nuxeo Studio project the [default workflow models]({{page space='userdoc' page='task'}}) (Serial and Parallel Reviews) delivered by Nuxeo into the Nuxeo Platform application. Workflow models are then executed in Nuxeo Platform using Nuxeo Workflow Engine.  
</br>
To modify them in Studio Designer go to **UI** > **Layouts** > **Workflows**.

## Video Utils

A set of examples to handle videos from the UI: slice, watermark, merge, transform.
After modifying a video, the result can be either downloaded, stored in the “attachments” or the “Renditions”, or can be used to automatically create a new Video document.

This project should be used as a demo and learning tool. It provides a full working example of video operations that can be performed from the UI, via user friendly dialogs (see the elements in the “video-utils” folder, in Studio Designer).

Once installed, in the Automation Scripting section of Studio Modeler you can read the comments in the `videoUtils_README` JavaScript Automation chain for details and usage.

## Image Cropper

Image Cropper is a set of utilities (UI element, automation scripts, etc.) to display a "Crop Image" dialog for documents with the "Picture" facet. The result of the crop can then be downloaded, saved as a new document or added to the renditions. It can be output as JPEG or PNG.

Also, it uses Google Vision crop suggestions if a Google API key is found in the configuration.

All this behavior can be tuned once the template is imported, to fit your custom business rules. Please, read the ImageCropper_README script for more details.

## Nuxeo Self Registration

This template offers the necessary configuration to allow an anonymous user to request an account in the application, i.e. self-registration, with approval. This project depends on the [Nuxeo User Self-Registation](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-labs-user-registration) addon, so both must be installed.</br>
This plugin is available in the Nuxeo Marketplace.
