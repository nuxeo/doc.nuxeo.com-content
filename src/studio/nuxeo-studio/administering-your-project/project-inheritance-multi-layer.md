---
title: Project Inheritance and Multi-layer
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '12912674'
    ajs-parent-page-title: Administering your project
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Automated+renaming
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Automated+renaming'
    page_id: '7537367'
    shortlink: 1wJz
    shortlink_source: 'https://doc.nuxeo.com/x/1wJz'
    source_link: /display/Studio/Automated+renaming
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2011-06-29 17:41'
        message: igrated to Confluence 4.
        version: '5'
    -
        author: Solen Guitter
        date: '2011-06-29 17:41'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-06-29 17:12'
        message: added screenshot
        version: '3'
    -
        author: Solen Guitter
        date: '2011-06-29 14:41'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-06-29 14:38'
        message: ''
        version: '1'

---

**Dependent Projects**

In Studio, it is possible to add a project as a dependency of another in the Application Definiton section. 

When a dependent project exists, that child projet will inherit all range of aspects, including:
Studio Modeller configuration

* Project configuration and any manually added registries  
* Data and translations that are part of a Studio project 
* Studio Designer front-end and branding assets 


**Multi-layer**

We refer to using a structure of dependent projects as a Multi-layer project. The structure has only the following constrainsts: 

* Up to six levels of dependency 
* An unlimited amount of Studio project or other packages can be added at each level  

Dependencies, both Studio projects and other packages, will be displayed in Application Definition, with information about each items dependencies, and items of which it is a dependency. 


This structure is particularly relevant to Applications:

* A organisation that creates several instances that share a similar base, or base components, which can be developed as independent Studio projects and added to other projects are dependencies  

* Projects that work with modular components, these components that are scoped to a feature set can be developed separatly as Studio projects, and several components be brought together to form an Application  


**Key Aspects**


You can add a dependent Studio Project via the Application Definition section of Studio. 

* You need to have access to that Studio project through being a member of that project's organisation or user group
* Search in the Application Definition search bar for the project and select it, as you would any other package 
* When added, a description block will display :

→ Key information about the Studio package 
→ 'Package Dependencies' will note the packages being added by that item to your project
→ 'Is a dependency of' will highlight if a package is a dependecy of another in your Application Definition 

Note that both the above will only list first level dependencies, not those that may be encountered on other levels; and circualr dependencies are permitted. 

**Recursive Resolution:**

Dependencies are added recursively, from deepest to shallowest, and from left to right, in the order they are added. In practise, the resolution process starts with the first dependency, looks for its deepest layer, and resolves upwards. 

If a feature has the same name at several layers, it will be overridden by the feature at the highest level of the dependency resolution order. 

As all features are brough in for use into your local project, it is fully possible to use features from different dependencies together. 


**Dependencies Navigation**

Once a Studio project is added as a dependency, you will see in the 'Configuration’ left hand menu a ‘Dependecies’ menu that will allow you to navigate among dependencies and visualise their features. You cannot save these features.


Note, all dependency features that are visible will be added to you local project and you will be able to use them, as you would features cerated in your local project.


**Overriding a Feature from a dependent project**

If you, as a user, wish to change a feature, you will need to override it. Studio provides this functionality. When navigating through the ‘Dependencies’ and visualising a feature, an ‘override’ button will appear in the top right.

On click, this will create a duplicate version of the feature from the dependency to your local project that will be editable and override the feature coming from the dependency. Messages will appear on both involved features to notify you that the override is occurring. 


**Release and Build** 

Once the appropriate dependencies are added you will need to release your project. 

Please note: Implicit version changes, at this stage, will flow through to your base project at build. Please be mindful before change upstream projects.  

You then can install the base project on your instance, which will add all dependencies and related elements, including all Designer assets. 


**Lock Dependencies** 

Note, that dependent Studios are by default installed with open dependencies, this means that when the package is installed, the latest version is installed.  

If you wish to maintain a certain configuration over time, not impacted by changes in dependent Studio projects, you can lock dependencies. 

When a release is created from a branch, the release prompt will allow you to lock dependencies. If selected, all first level-dependent studio projects will remain at the version they were at the moment of release. This is a non-reversible lock, a new release needs to be made with unlocked dependencies to change the project’s behavior. 


**In Designer** 

DocType Layouts from dependencies should be listed under the menu 'Layouts from Dependencies' and should behave like the 'Built-in Layouts' menu below it 

→ These should include all layouts from dependencies with empty configurations 

→ No notion of 'from which dependency' will be displayed 

In  'Layouts from Dependencies' you should find these empty of configurations in your base project

Please note that configure these will override the Designer assets imported from your dependencies. 

Designer assets from dependencies are not displayed on the Studio Designer interface but will be added to your instance.  


**Considerations**

Developer Tooling

Hot reload is not currently operational with multi-layer 

There is a caching mechanism in mp-install, if you are using this command remember to do an mp-update to update the cache and download the latest defined versions of the packages 

Designer Custom Elements

When reusing a custom layout from a dependency, it is not loaded in the Studio Designer palette across dependencies, it is, however, loaded onto the instance and will display on WebUI. As such, when you want to use a custom HTML element or custom layout in Studio Designer from a dependency, you will need to add a link to it in your relevant element:

For example, if I create a new custom layout and want to call the “product-edit.html” HTML element within it, I would add the following link in the element : <link rel="import" href="../../forms/product-edit.html">

Removing a dependent Studio Project

Currently, removing a dependency in the Studio Application definition and reinstalling (mp-install) the project DOES NOT remove that dependency from an instance.

In order to remove the package, you will need to use the mp-remove command for the relevant packages

Note, this command will remove all contents except for

Workflows will persist in the ‘Start Process’ list in WebUI

HTML assets will remain on the instance, but will not be called




{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Automated Renaming/Rename Inconsistencies
    name: STUDIO_rename_inconsistencies.png
    studio_modeler#popup#up_to_date
--}}
![Rename Inconsistencies](nx_asset://c33e2d17-87e7-4fcb-bac5-a20460b1f93d ?w=350,border=true)
