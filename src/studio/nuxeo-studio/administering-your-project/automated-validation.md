---
title: Automated Validation
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '12912674'
    ajs-parent-page-title: Administering your project
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Automated+validation
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Automated+validation'
    page_id: '7209600'
    shortlink: gAJu
    shortlink_source: 'https://doc.nuxeo.com/x/gAJu'
    source_link: /display/Studio/Automated+validation
tree_item_index: 300
history:
    -
        author: Manon Lumeau
        date: '2016-04-28 12:34'
        message: 'ix Studio menu label     '
        version: '13'
    -
        author: Manon Lumeau
        date: '2016-04-27 16:28'
        message: 'Fix Studio menu label     '
        version: '12'
    -
        author: Solen Guitter
        date: '2014-09-26 14:36'
        message: ''
        version: '11'
    -
        author: Bogdan Stefanescu
        date: '2011-06-13 17:15'
        message: Migrated to Confluence 4.0
        version: '10'
    -
        author: Bogdan Stefanescu
        date: '2011-06-13 17:15'
        message: ''
        version: '9'
    -
        author: Bogdan Stefanescu
        date: '2011-06-13 17:14'
        message: ''
        version: '8'
    -
        author: Bogdan Stefanescu
        date: '2011-06-13 17:12'
        message: ''
        version: '7'
    -
        author: Bogdan Stefanescu
        date: '2011-06-08 17:48'
        message: ''
        version: '6'
    -
        author: Bogdan Stefanescu
        date: '2011-06-08 17:34'
        message: ''
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2011-06-08 10:40'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2011-06-08 10:39'
        message: ''
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2011-06-07 19:24'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2011-05-18 14:23'
        message: ''
        version: '1'

---
Nuxeo Studio will perform some consistency check as soon as you configure some features, to be sure that, for instance, if it references another one, that other one has already been created or referenced in the registries. This page aims at referencing all the checks that are performed. You can add a comment at the end of this page for suggesting some additional checks.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Feature

</th><th colspan="1">

Tab

</th><th colspan="1">

Errors when...

</th><th colspan="1">

Warnings when...

</th><th colspan="1">

Comments

</th></tr><tr><td colspan="1">

Branding

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

logo image does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

login background image does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

Content Model/Document Types

</td><td colspan="1">

Definition

</td><td colspan="1">

parent type does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Definition

</td><td colspan="1">

one of selected extra schemas does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Definition

</td><td colspan="1">

selected lifecycle does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Definition

</td><td colspan="1">

one of selected container types does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Definition

</td><td colspan="1">

one of selected sub types does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Definition

</td><td colspan="1">

selected icon does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Definition

</td><td colspan="1">

selected large icon does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Creation layout

</td><td colspan="1">

creation layout has errors

</td><td colspan="1">

creation layout has warnings

</td><td colspan="1">

see below for a more details on layout validation

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

View layout

</td><td colspan="1">

view layout has errors

</td><td colspan="1">

view layout has warnings

</td><td colspan="1">

see below for a more details on layout validation

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Edit layout

</td><td colspan="1">

edit layout has errors

</td><td colspan="1">

edit layout has warnings

</td><td colspan="1">

see below for a more details on layout validation

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Header layout

</td><td colspan="1">

header layout has errors

</td><td colspan="1">

header layout has warnings

</td><td colspan="1">

see below for a more details on layout validation

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Summmary layout

</td><td colspan="1">

summary layout has errors

</td><td colspan="1">

summary layout has warnings

</td><td colspan="1">

see below for a more details on layout validation

</td></tr><tr><td colspan="1">

Search And Listings/ContentViews

</td><td colspan="1">

Query And Form

</td><td colspan="1">

search layout has errors

</td><td colspan="1">

search layout has warnings

</td><td colspan="1">

see below for a more details on layout validation

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Results

</td><td colspan="1">

result columns layout has errors

</td><td colspan="1">

result columns layout has warnings

</td><td colspan="1">

see below for a more details on layout validation

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Results

</td><td colspan="1">

additional result columns layout has errors

</td><td colspan="1">

additional result columns layout has warnings

</td><td colspan="1">

see below for a more details on layout validation

</td></tr><tr><td colspan="1">

Search And Listings/Virtual Navigations

</td><td colspan="1">

Virtual navigation

</td><td colspan="1">

selected icon does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Virtual navigation

</td><td colspan="1">

one of the referenced directories does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Virtual navigation

</td><td colspan="1">

property to query on does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Results

</td><td colspan="1">

result columns layout has errors

</td><td colspan="1">

result columns layout has warnings

</td><td colspan="1">

see below for a more details on layout validation

</td></tr><tr><td colspan="1">

Search And Listings/Advanced Search

</td><td colspan="1">

Form

</td><td colspan="1">

search layout has errors

</td><td colspan="1">

search layout has warnings

</td><td colspan="1">

see below for a more details on layout validation

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Results

</td><td colspan="1">

result columns layout has errors

</td><td colspan="1">

result columns layout has warnings

</td><td colspan="1">

see below for a more details on layout validation

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

Results

</td><td colspan="1">

additional result columns layout has errors

</td><td colspan="1">

additional result columns layout has warnings

</td><td colspan="1">

see below for a more details on layout validation

</td></tr><tr><td colspan="1">

Automation/Event Handlers

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

no selected operation

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

selected operation does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

one of selected document types for event handler activation does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

Automation/User Actions

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

no selected operation

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

selected operation does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

one of selected permissions for action activation does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

one of selected document types for action activation does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

selected action category does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

selected action icon does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

Automation/Automation Chains

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

one or more operations referenced by the chain is undefined

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

A Context.RunOperation operation reference an undefined operation chain

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

the validation is done only on static field values (expressions are ignored)

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

A Context.RunDocumentOperation operation reference an undefined operation chain

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

the validation is done only on static field values (expressions are ignored)

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

A Workflow.CreateTask operation reference an undefined operation chain

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

the validation is done only on static field values (expressions are ignored)

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

A Document.GetPrincipalEmails operation reference an undefined permission

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

the validation is done only on static field values (expressions are ignored)

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

A Document.GetUsersAndGroups operation reference an undefined permission

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

the validation is done only on static field values (expressions are ignored)

</td></tr></tbody></table></div><div class="table-scroll"><table class="hover"><tbody><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

A Document.SetLifeCycle operation reference an undefined lifecycle transition

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

the validation is done only on static field values (expressions are ignored)

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

A Document.Create operation reference an undefined document type

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

the validation is done only on static field values (expressions are ignored)

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

A Document.GetParent operation reference an undefined document type

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

the validation is done only on static field values (expressions are ignored)

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

A Seam.CreateDocumentForm operation reference an undefined document type

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

the validation is done only on static field values (expressions are ignored)

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

A Document.Update operation reference undefined schema fields

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

the validation is done only on static field values (expressions are ignored)

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

Any parameter named 'xpath' which is not an expression is validated to reference an existing schema field

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

Any expression containing `Document['xpath']` is validated to point to an existing schema field

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

Roles and Permissions/Users & Groups

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

The creation policy is set to 'always'

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

Roles and Permissions/Permissions

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

one of the selected document types does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

Advanced Settings/Web Services Filtering

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

one of the referenced operation chains does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr></tbody></table></div>

Layouts validation is detailed here:

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Item

</th><th colspan="1">

Errors when...

</th><th colspan="1">

Warnings when...

</th><th colspan="1">

Comments

</th></tr><tr><td colspan="1">

Widget

</td><td colspan="1">

widget type is not filled

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

widget type does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

schema bound to the widget is missing or does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

schema prefix bound to the widget is missing or does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

field bound to the widget is missing or does not exist

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

field bound to the widget has a type that does not match the current field type

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

field bound to the widget is multivalued (or not) and that does not match the current field definition

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

widget type does not match the accepted types for bound field

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr></tbody></table></div>
