---
title: Contract management
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '8683961'
    ajs-parent-page-title: Templates reference
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Contract+management
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Contract+management'
    page_id: '9274999'
    shortlink: d4aN
    shortlink_source: 'https://doc.nuxeo.com/x/d4aN'
    source_link: /display/Studio/Contract+management
tree_item_index: 300
history:
    -
        author: Manon Lumeau
        date: '2015-11-23 10:26'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2015-09-07 09:28'
        message: Fix TOC
        version: '29'
    -
        author: Solen Guitter
        date: '2012-11-06 19:01'
        message: Fixed typos and added links
        version: '28'
    -
        author: Alain Escaffre
        date: '2012-01-09 17:50'
        message: Migrated to Confluence 4.0
        version: '27'
    -
        author: Alain Escaffre
        date: '2012-01-09 17:50'
        message: ''
        version: '26'
    -
        author: Alain Escaffre
        date: '2012-01-09 17:49'
        message: ''
        version: '25'
    -
        author: Alain Escaffre
        date: '2012-01-09 17:46'
        message: ''
        version: '24'
    -
        author: Alain Escaffre
        date: '2012-01-09 17:46'
        message: ''
        version: '23'
    -
        author: Alain Escaffre
        date: '2012-01-09 17:27'
        message: ''
        version: '22'
    -
        author: Frédéric Vadon
        date: '2012-01-09 11:38'
        message: ''
        version: '21'
    -
        author: Frédéric Vadon
        date: '2012-01-09 11:37'
        message: ''
        version: '20'
    -
        author: Frédéric Vadon
        date: '2012-01-09 11:35'
        message: ''
        version: '19'
    -
        author: Frédéric Vadon
        date: '2012-01-09 11:35'
        message: ''
        version: '18'
    -
        author: Frédéric Vadon
        date: '2012-01-09 11:34'
        message: ''
        version: '17'
    -
        author: Frédéric Vadon
        date: '2012-01-04 19:02'
        message: ''
        version: '16'
    -
        author: Frédéric Vadon
        date: '2012-01-04 19:00'
        message: ''
        version: '15'
    -
        author: Frédéric Vadon
        date: '2012-01-04 18:52'
        message: ''
        version: '14'
    -
        author: Frédéric Vadon
        date: '2012-01-03 19:02'
        message: ''
        version: '13'
    -
        author: Frédéric Vadon
        date: '2012-01-03 16:58'
        message: ''
        version: '12'
    -
        author: Frédéric Vadon
        date: '2012-01-03 16:37'
        message: ''
        version: '11'
    -
        author: Frédéric Vadon
        date: '2012-01-03 16:33'
        message: ''
        version: '10'
    -
        author: Frédéric Vadon
        date: '2012-01-03 16:21'
        message: ''
        version: '9'
    -
        author: Frédéric Vadon
        date: '2011-12-22 19:47'
        message: ''
        version: '8'
    -
        author: Frédéric Vadon
        date: '2011-12-22 19:44'
        message: ''
        version: '7'
    -
        author: Frédéric Vadon
        date: '2011-12-22 19:43'
        message: ''
        version: '6'
    -
        author: Frédéric Vadon
        date: '2011-12-22 19:07'
        message: ''
        version: '5'
    -
        author: Frédéric Vadon
        date: '2011-12-22 18:48'
        message: ''
        version: '4'
    -
        author: Frédéric Vadon
        date: '2011-12-22 17:51'
        message: ''
        version: '3'
    -
        author: Frédéric Vadon
        date: '2011-12-22 17:45'
        message: ''
        version: '2'
    -
        author: Frédéric Vadon
        date: '2011-12-22 17:39'
        message: ''
        version: '1'

---
This documentation describes how to manage contracts in Nuxeo with the application template Contract Management, available from Nuxeo Studio.

The first parts of this page are a guide for&nbsp;functional user into the Contract Management application.

A more technical description is available at the end of this documentation for information on how the application template is designed with Nuxeo Studio.

## Introduction

The application enables you to manage your contracts, by defining contract owners and letting the DMS manage for you their lifecycle, so as to be able to stop them before their automatic renewal, or so as to know when to renegotiate the conditions... You should expect high ROI if you are not accustomed to such practices!

## The content model

The Nuxeo contract management application template provides three documents types: &nbsp;

*   ![]({{file name='applications-office-2.png'}})&nbsp;Contract_Library:

The contract library is a folder designed to hold contracts. Each contract library has a specific metadata: person_in_charge, that will be inherited by contracts inside the library. Permissions are set automatically to give Read and Edit&nbsp;permission to the person in charge who should be a purchaser. Other roles are available inside the application, see the&nbsp;[roles section](#roles-in-the-workflow) for more information. A contract library is owned by one user only.&nbsp;

Inheritance to contracts is performed by the system to make sure the person in charge is always consistent between a contract library and its children contracts. So it is very simple to change the person in charge on a whole set of contracts, just change the person in charge of the contract library.

*   ![]({{file name='documentation.png'}})&nbsp;Contract:

Contract is the main document type. It has its own life cycle (see the [Workflow section](#the) for more info on the contract life cycle) and its own metadata set, specific to contract management, such as a starting and an expiring date. The system enables to deal with auto-renewal contracts through a checkbox at the contract creation.&nbsp;

Contracts can only be created in a contract library.

Here is a screenshot of the creation page of a contract.

![]({{file name='Screen Shot 2011-12-22 at 19.00.48.png'}} ?w=500,border=true)

{{#> callout type='info' }}

The reference of the contract is automatically created using the contract type filled in at the creation.

{{/callout}}

&nbsp;

*   ![]({{file name='code-class.png'}})&nbsp;Contract_viewer:

This document type is a specific type dedicated to filtering and visualizing contracts depending on your role and the contract life cycle states. It contains no data directly but several tabs that look for and display contracts wherever they are inside the real arborescence.

A use case example is: if I am a jurist and that I have contracts to validate, I do not want to look for them in every purchaser's library. So I can create a contract viewer wherever I want, my personal workspace for instance, and it will display all the contracts waiting for a jurist validation. This is also useful to provide a way to access contracts waiting for a jurist validation even if I do not have Read permission on a part of the arborescence that leads to the contract.

The tabs of a contract viewer are:

- **My contracts in validation and redaction**: shown to purchasers only, to display their contracts in these two life cycle states in which they should work on.&nbsp;

- **My contracts and libraries**: display all contracts and contracts libraries of the current user if he is a purchaser.

- **Contracts to be verified**: the tab of the jurists, displays all contract waiting for legal verification.

- **Contracts waiting for signature**: the tab for managers, displays all contracts that should be signed.

- **Auto-renewal contracts expiring soon**: displays all contracts that are about to auto-renew in case an action should be done on it by managers.

- **Content**: the default tab; it displays all contracts and contract libraries of the repository (if you have at least Read permission on them), it comes with a filter to easily and quickly find contracts on info like their life cycle state, the person in charge, etc...&nbsp;

## The workflow

### Roles in the workflow

In the example of contract management, 3 roles are available: a purchaser who creates the contract and starts the workflow, a jurist who does the legal validation of the contract and finally a manager who signs the contract.

There should be 3 groups of users to use the contract management application:&nbsp;

*   purchasers
*   jurists
*   managers

### The workflow steps

There are several steps to the life cycle of a contract. Some steps should be changed by a user (for example, to send the contract to validation) and some states will change automatically. Two steps ("onGoingBeingResiliated" and "onGoingRenewalOK") are used specifically to manage auto-renewal contracts.&nbsp;

Here is the life cycle of a contract:

![]({{file name='Screen Shot 2012-01-03 at 15.59.05.png'}} ?w=650,border=true)

### Creation and Validation of Contracts

*   Redaction

When a purchaser is in a contract library he is in charge of, he can create a new contract with the button "New Contract" and fill in all the required metadata of the contract. Once the purchaser has created its contract, he can send it to the legal verification by clicking on the action "Send to verification":

![]({{file name='Screen Shot 2012-01-03 at 16.36.15.png'}} ?w=151,h=28,border=true)

*   Verification (legal)

When a contract is sent to verification by a purchaser, the system&nbsp;automatically updates the status logging date and the permissions to allow a jurist to&nbsp;modify&nbsp;the contract, whereas the purchaser can now only see it. A jurist can quickly find any contract waiting for legal verification by using the document type "Contract_Viewer":&nbsp;&nbsp;

![]({{file name='Screen Shot 2012-01-03 at 18.14.38.png'}} ?w=650,border=true)
When the jurist has verified the contract he can send it back to the purchaser in charge by clicking on the action "Send To validation":

![]({{file name='Screen Shot 2012-01-03 at 18.16.05.png'}} ?w=130,h=20,border=true)

*   Validation

At this step, the jurist cannot modify the document anymore but he can still read it. The purchaser can do the final validation before sending it to a manager for signature:&nbsp;

![]({{file name='Screen Shot 2012-01-03 at 18.19.58.png'}} ?w=202,h=22,border=true)

*   SentWaitingForSignature

When a contract is sent for signature, nobody can edit it anymore but managers. A manager can easily find all contracts waiting for signature through a contract viewer.

![]({{file name='Screen Shot 2012-01-03 at 18.33.57.png'}} ?w=650,border=true)
If the manager is OK with the document, he can mark it as signed:

&nbsp;&nbsp; ![]({{file name='Screen Shot 2012-01-03 at 18.34.38.png'}} ?w=112,h=21,border=true)

*   Signed

The signed state is a temporary stage where the contract is ready to start, and will start automatically when the starting date is reached. A contract has to be signed before it can goes to "OnGoing".

*   OnGoing

At this stage the contract is active, the next step will depend on whether the contract has automatic renewal or not.

### Automatic renewal management

At the creation of the contract, the purchaser can choose if the contract should be renewed automatically or not. This will be taken into account at the expiring date.

If the contract is not in auto-renewal mode, it will automatically go to "Expired" the day after the expiring date.

In the case of an auto-renewal contract, it is important to know that the expiring date is approaching because some actions may be required before this date, such as terminate it. For that purpose, a special content view is available for managers to display all auto-renewal contracts expiring soon (in less than three months):&nbsp;&nbsp;

![]({{file name='Screen Shot 2012-01-04 at 18.19.22.png'}} ?w=650,border=true)

Then, when a manager goes to an auto-renewal contract, he can do several actions:

*   Approve auto-renewal: the contract goes to "OnGoingRenewalOK" and will not be displayed in the view anymore, it will be renewed automatically for a year at the expiring date.
*   Cancel Auto-Renewal: it puts the contracts to "OnGoingBeingResiliated", the contract will be sent to "Expired" automatically after the expiring date and will not be displayed in the view anymore.
*   Nothing: if the manager does nothing on the contract, it stays in the views until the expiring date and then, the contract is&nbsp;renewed automatically for a year and stays in "OnGoing" state.

### Version Management

At each step of the workflow the version of a contract will be incremented automatically on a minor or a major version (depending on the step) so that every changes on a contract are stored, and each version of the contract are always available. However, it is always possible for each contributor of the workflow to increment version manually.

### Batch

As seen before, several events happen automatically such as the auto-renewal of contracts. All these actions are done by a batch operation. On a final application, this batch should be run automatically every night for example. In this demo case, the batch operation has to be launch manually by the user action "Batch Contract State", this action is available in the user menu and will update all contracts inside Nuxeo that should be updated (expired or renewed): &nbsp;

![]({{file name='Screen Shot 2012-01-04 at 18.44.52.png'}} ?border=true)

## Technical description

Here are a few tips about the Contract management application template. You can import this project directly in your Studio project and deploy it to your server. Once you are familiar with it, you can start customizing it if necessary. You can read the documentation on how to&nbsp;[use application templates]({{page space='Studio' page='Use Application+Templates'}})&nbsp;in a Studio project.

This template is a complete use case of using Nuxeo Studio to implement a Business Case. You will find custom life cycles, content views, document types, notifications, actions ... It is designed to provide a ready-to-use template for contract management workflows, especially to deal with automatic renewal contracts and specific views and reminders.

Being already familiar with Studio main aspects is recommended to understand the template, if not the case, you can start by our&nbsp;[how to get started guide](http://doc.nuxeo.com/pages/viewpage.action?pageId=8192432).

### Naming

As the contract management template is supposed to be imported into other projects, it is very important that every item is easily recognizable. This is the reason why item names are prefixed with CM as contract management.

Automation chains are named after the user action or the event handler that triggers them, for instance:"CM-SendToValidation" is triggered by "CM-UA-Send_To_Validation_customActions", which is a user action (UA) displayed in the document summary action (_customActions).&nbsp;

Event handlers and their corresponding automation chains are name like "OnXXXXtion", for instance the event handler that captures the creation of a contract is named "CM-OnContractCreation".

Automation chains are named depending on what they are supposed to do, for instance, if they start with "SendTo", it means that the document will change of life cycle state during this chain, the final state is the end of the chain name: "CM-SendToValidation" sends the contract the validation state. The prefix Ac means a simple action in which the state of a document is not changed like the creation of a document for instance ("CM-AcCreateCMLibrary").

And finally, a few automation chains are&nbsp;launched&nbsp;only from other automation chains using the operation Execution Chain>Run Document chain. These chains are prefixed with "Sys" as System

### Custom contract ID

At the contract creation, the contract type can be chosen. The contract type is used to create an automatic reference. This feature uses the logic of the template:&nbsp;[Custom Doc ID Generation]({{page page='custom-doc-id-generation'}})

### System metadata

Several metadata are never seen by users. These metadata are used in different ways by the system, for instance "recall_renewal_date" is the date used to know if the contract will expire soon. It corresponds to the&nbsp;expiring_date_updated minus 3 months. These metadata are very important for the system but are invisible to user. They are managed by event handlers and system automation chain (prefixed with Sys).

They are 2 recall dates:&nbsp;

*   "recall_renewal_date": Used in the content view "CM-AutoRenewalContractsSoon" to display all auto-renewal contracts expiring in less than three months
*   "recall_signature_date": Corresponds to the signature date plus 15 days. It is not used, but could be consumed in a content view all contracts waiting for a signature for more than two weeks.

Others date that are not filled in by the user are:&nbsp;

*   "expiring_date_updated": It is first a simple copy of "expiring_date_initial", but then this the actual expiring date, "expiring_date_initial" is never modified.
*   "sent_date", "signed_date", "to_validation_date", "to_verification_date": these dates are only used for logging purpose, to remember when the contract was sent to one these states.
